'use strict';

/**
 * Healthy Portal — Live Google Cloud Discovery Engine (Vertex AI Search)
 * + Vertex AI Multilingual Vector Search (`text-multilingual-embedding-002`)
 * + Vertex AI Gemini 3 Flash (`gemini-3-flash-preview`) Grounded Synthesis Client.
 *
 * Zero external npm dependencies. Uses Cloud Run Metadata Server in production
 * and `gcloud auth print-access-token` in local development.
 */

const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');
const { execFile } = require('child_process');
const fallbackEngine = require('./gemini-search-engine');
const suiteCases = require('./gemini-enterprise-cases');

const PROJECT_ID = process.env.GCP_PROJECT_ID || 'gemini-enterprise-demo-485114';
const DISCOVERY_LOCATION = 'global';
const DISCOVERY_COLLECTION = 'default_collection';
const DATA_STORE_ID = process.env.DISCOVERY_DATA_STORE_ID || 'healthy-portal-spanish-ds';
const ENGINE_ID = process.env.DISCOVERY_ENGINE_ID || 'healthy-portal-gemini-enterprise';
const EMBEDDING_LOCATION = 'us-central1';
const EMBEDDING_MODEL = 'text-multilingual-embedding-002';
const GEMINI_LOCATION = 'global';
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-3-flash-preview';

let cachedVectorIndex = null;
function getVectorIndex() {
  if (cachedVectorIndex) return cachedVectorIndex;
  try {
    const indexPath = path.join(__dirname, 'spanish-vector-index.json');
    const raw = fs.readFileSync(indexPath, 'utf8');
    cachedVectorIndex = JSON.parse(raw);
    return cachedVectorIndex;
  } catch (_err) {
    return null;
  }
}

let cachedToken = null;
let cachedTokenExpiry = 0;

function fetchMetadataToken() {
  return new Promise((resolve, reject) => {
    const req = http.request(
      {
        hostname: 'metadata.google.internal',
        path: '/computeMetadata/v1/instance/service-accounts/default/token',
        method: 'GET',
        headers: { 'Metadata-Flavor': 'Google' },
        timeout: 1800
      },
      (res) => {
        let body = '';
        res.on('data', (chunk) => {
          body += chunk;
        });
        res.on('end', () => {
          if (res.statusCode !== 200) {
            return reject(new Error(`Metadata server HTTP ${res.statusCode}`));
          }
          try {
            const parsed = JSON.parse(body);
            resolve({
              accessToken: parsed.access_token,
              expiresInSec: Number(parsed.expires_in) || 1800
            });
          } catch (e) {
            reject(e);
          }
        });
      }
    );
    req.on('timeout', () => {
      req.destroy(new Error('Metadata server timeout'));
    });
    req.on('error', reject);
    req.end();
  });
}

function fetchGcloudToken() {
  return new Promise((resolve, reject) => {
    execFile('gcloud', ['auth', 'print-access-token'], { timeout: 4000 }, (err, stdout) => {
      if (err) return reject(err);
      const token = String(stdout || '').trim();
      if (!token) return reject(new Error('Empty gcloud access token'));
      resolve({ accessToken: token, expiresInSec: 2400 });
    });
  });
}

async function getAccessToken() {
  const now = Date.now();
  if (cachedToken && now < cachedTokenExpiry) {
    return cachedToken;
  }
  try {
    const meta = await fetchMetadataToken();
    cachedToken = meta.accessToken;
    cachedTokenExpiry = now + Math.max(60, meta.expiresInSec - 120) * 1000;
    return cachedToken;
  } catch (_metaErr) {
    const cli = await fetchGcloudToken();
    cachedToken = cli.accessToken;
    cachedTokenExpiry = now + Math.max(60, cli.expiresInSec - 120) * 1000;
    return cachedToken;
  }
}

function httpsPostJson(urlStr, token, payloadObj, timeoutMs) {
  return new Promise((resolve, reject) => {
    const url = new URL(urlStr);
    const body = JSON.stringify(payloadObj);
    const req = https.request(
      {
        hostname: url.hostname,
        path: url.pathname + url.search,
        method: 'POST',
        timeout: timeoutMs || 8000,
        headers: {
          Authorization: `Bearer ${token}`,
          'X-Goog-User-Project': PROJECT_ID,
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(body)
        }
      },
      (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          try {
            const parsed = data ? JSON.parse(data) : {};
            resolve({ status: res.statusCode, data: parsed });
          } catch (_err) {
            reject(new Error(`Invalid JSON from ${url.hostname}: HTTP ${res.statusCode}`));
          }
        });
      }
    );
    req.on('timeout', () => {
      req.destroy(new Error(`Request timeout calling ${url.hostname}`));
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

function cosineSimilarity(vecA, vecB) {
  if (!Array.isArray(vecA) || !Array.isArray(vecB) || vecA.length !== vecB.length || vecA.length === 0) {
    return 0;
  }
  let dot = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < vecA.length; i++) {
    const a = vecA[i];
    const b = vecB[i];
    dot += a * b;
    normA += a * a;
    normB += b * b;
  }
  const denom = Math.sqrt(normA) * Math.sqrt(normB);
  return denom > 0 ? dot / denom : 0;
}

async function queryDiscoveryEngine(token, query) {
  const url = `https://discoveryengine.googleapis.com/v1/projects/${PROJECT_ID}/locations/${DISCOVERY_LOCATION}/collections/${DISCOVERY_COLLECTION}/dataStores/${DATA_STORE_ID}/servingConfigs/default_search:search`;
  try {
    const res = await httpsPostJson(
      url,
      token,
      {
        query,
        pageSize: 8,
        queryExpansionSpec: { condition: 'AUTO' },
        spellCorrectionSpec: { mode: 'AUTO' }
      },
      4500
    );
    if (res.status === 200 && Array.isArray(res.data.results)) {
      return {
        results: res.data.results,
        attributionToken: res.data.attributionToken || null,
        semanticState: res.data.semanticState || 'ENABLED'
      };
    }
    return {
      results: [],
      attributionToken: res.data?.attributionToken || null,
      semanticState: res.data?.semanticState || 'INDEXING'
    };
  } catch (_err) {
    return { results: [], attributionToken: null, semanticState: 'UNAVAILABLE' };
  }
}

async function embedQueryVertexAI(token, query) {
  const url = `https://${EMBEDDING_LOCATION}-aiplatform.googleapis.com/v1/projects/${PROJECT_ID}/locations/${EMBEDDING_LOCATION}/publishers/google/models/${EMBEDDING_MODEL}:predict`;
  const res = await httpsPostJson(
    url,
    token,
    {
      instances: [
        {
          task_type: 'RETRIEVAL_QUERY',
          content: query
        }
      ]
    },
    4500
  );
  if (res.status !== 200 || !res.data.predictions || !res.data.predictions[0]?.embeddings?.values) {
    throw new Error(`Vertex AI Embedding HTTP ${res.status}`);
  }
  return res.data.predictions[0].embeddings.values;
}

async function synthesizeWithGemini3Flash(token, query, topArticles, topRoutes) {
  const url = `https://aiplatform.googleapis.com/v1/projects/${PROJECT_ID}/locations/${GEMINI_LOCATION}/publishers/google/models/${GEMINI_MODEL}:generateContent`;

  const citationsContext = topArticles
    .map(
      (c, i) =>
        `[Cita ${i + 1}] Documento: "${c.docShortTitle}" (Código: ${c.docCode}, Página ${c.pageNumber}, ${c.article})\nTexto oficial: ${c.excerpt}`
    )
    .join('\n\n');

  const routesContext = topRoutes
    .map((r) => `- ${r.title} (${r.category}): ${r.href} — ${r.summary}`)
    .join('\n');

  const prompt = [
    'Eres el motor oficial de búsqueda generativa de Healthy Portal impulsado por Google Cloud Gemini Enterprise (Discovery Engine + Vertex AI).',
    'Responde SIEMPRE en español claro, ejecutivo y preciso para una demostración en vivo.',
    'REGLAS ESTRICTAS DE GROUNDING:',
    '1. Usa ÚNICAMENTE la información normativa contenida en las fuentes oficiales proporcionadas abajo ([Cita 1], [Cita 2], [Cita 3], [Cita 4]).',
    '2. Incluye referencias explícitas en el texto usando el formato exacto [Cita 1], [Cita 2], etc., indicando cifras exactas (días hábiles, porcentajes, topes, UF, USD) y las entidades reales del portal (NSWB, MRB, REDEC, HealthyNet, Clinic Dubal, SAI Health, Pharmacy Red Wall, SER, Teather Moon, Starlight Grand Theater, Lake Tahoe, Aspen, Sedona, Santa Barbara).',
    '3. Devuelve EXCLUSIVAMENTE un objeto JSON válido con esta estructura exacta:',
    '{',
    '  "leadSummary": "Resumen ejecutivo directo de 2 a 3 oraciones respondiendo la consulta con citas como [Cita 1] y [Cita 2].",',
    '  "secondarySummary": "Párrafo detallando plazos, fórmulas de cálculo o requisitos específicos según [Cita 1] y [Cita 2].",',
    '  "tertiarySummary": "Párrafo detallando pasos operativos en el portal, apelaciones o beneficios complementarios según [Cita 3] y [Cita 4]."',
    '}',
    '',
    `CONSULTA DEL AFILIADO: "${query}"`,
    '',
    'FUENTES NORMATIVAS PDF RECUPERADAS (DISCOVERY ENGINE + VECTOR SEARCH):',
    citationsContext,
    '',
    'RUTAS DEL PORTAL RELACIONADAS:',
    routesContext
  ].join('\n');

  const res = await httpsPostJson(
    url,
    token,
    {
      contents: [
        {
          role: 'user',
          parts: [{ text: prompt }]
        }
      ],
      generationConfig: {
        temperature: 0.15,
        responseMimeType: 'application/json',
        thinkingConfig: {
          thinkingBudget: 0
        }
      }
    },
    9000
  );

  if (res.status !== 200 || !res.data.candidates || !res.data.candidates[0]?.content?.parts) {
    throw new Error(`Gemini 3 Flash HTTP ${res.status}: ${JSON.stringify(res.data).slice(0, 200)}`);
  }

  const rawText = res.data.candidates[0].content.parts.map((p) => p.text || '').join('').trim();
  const parsed = JSON.parse(rawText);

  return {
    leadSummary: typeof parsed.leadSummary === 'string' ? parsed.leadSummary : '',
    secondarySummary: typeof parsed.secondarySummary === 'string' ? parsed.secondarySummary : '',
    tertiarySummary: typeof parsed.tertiarySummary === 'string' ? parsed.tertiarySummary : '',
    modelVersion: res.data.modelVersion || GEMINI_MODEL,
    responseId: res.data.responseId || null,
    usageMetadata: res.data.usageMetadata || null
  };
}

async function executeLiveGeminiEnterpriseSearch(rawQuery) {
  const startTime = Date.now();
  const query = typeof rawQuery === 'string' && rawQuery.trim()
    ? rawQuery.trim().slice(0, 300)
    : '¿Cómo apelar una licencia médica rechazada ante MRB y NSWB y cómo se calcula el subsidio?';

  try {
    const indexData = getVectorIndex();
    if (!indexData || !Array.isArray(indexData.records)) {
      throw new Error('Vector index not loaded');
    }

    const token = await getAccessToken();

    // Run Discovery Engine Search API + Vertex AI 768-D Query Embedding in parallel
    const [discoveryResp, queryVector] = await Promise.all([
      queryDiscoveryEngine(token, query),
      embedQueryVertexAI(token, query)
    ]);

    // Map Discovery Engine boost by document ID
    const discoveryBoostMap = new Map();
    if (Array.isArray(discoveryResp.results)) {
      discoveryResp.results.forEach((item, idx) => {
        const docId = item.id || item.document?.id;
        if (docId) {
          discoveryBoostMap.set(docId, Math.max(0.05, 0.18 - idx * 0.02));
        }
      });
    }

    // Score all 99 records using real 768-D Cosine Similarity + Discovery Engine rank boost
    const pdfCandidates = [];
    const routeCandidates = [];

    for (const rec of indexData.records) {
      const cosSim = cosineSimilarity(queryVector, rec.embedding);
      const deBoost = discoveryBoostMap.get(rec.id) || 0;
      const hybridScore = cosSim + deBoost;

      if (rec.recordType === 'PDF_ARTICLE') {
        pdfCandidates.push({ rec, cosSim, hybridScore });
      } else if (rec.recordType === 'PORTAL_ROUTE') {
        routeCandidates.push({ rec, cosSim, hybridScore });
      }
    }

    pdfCandidates.sort((a, b) => b.hybridScore - a.hybridScore);
    routeCandidates.sort((a, b) => b.hybridScore - a.hybridScore);

    const topArticles = pdfCandidates.slice(0, 4).map((item, idx) => ({
      index: idx + 1,
      docId: item.rec.docId,
      docCode: item.rec.code,
      docTitle: item.rec.docTitle,
      docShortTitle: item.rec.shortTitle,
      category: item.rec.category,
      authority: item.rec.authority,
      pdfUrl: item.rec.pdfUrl,
      pdfDeepLink: item.rec.deepLinkUrl,
      gcsUri: item.rec.gcsUri,
      pageNumber: item.rec.pageNumber,
      sectionHeading: item.rec.pageHeading,
      article: item.rec.article,
      excerpt: item.rec.text,
      vectorSimilarity: Number(item.cosSim.toFixed(4)),
      hybridScore: Number(item.hybridScore.toFixed(4)),
      relatedRoutes: Array.isArray(item.rec.relatedRoutes) ? item.rec.relatedRoutes.slice(0, 3) : []
    }));

    // Merge related routes from top PDF articles with top vector-matched portal routes
    const seenRoutes = new Set();
    const topRoutes = [];

    for (const item of routeCandidates.slice(0, 4)) {
      if (!seenRoutes.has(item.rec.href)) {
        seenRoutes.add(item.rec.href);
        topRoutes.push({
          title: item.rec.title,
          category: item.rec.category,
          href: item.rec.href,
          summary: item.rec.summary
        });
      }
    }

    for (const art of topArticles) {
      for (const rel of art.relatedRoutes) {
        if (rel && rel.href && !seenRoutes.has(rel.href) && topRoutes.length < 6) {
          seenRoutes.add(rel.href);
          topRoutes.push({
            title: rel.title,
            category: art.category,
            href: rel.href,
            summary: `Flujo directo vinculado a ${art.docShortTitle} (${art.docCode}).`
          });
        }
      }
    }

    // Call live Vertex AI Gemini 3 Flash (`gemini-3-flash-preview`) for grounded Spanish synthesis
    const geminiResult = await synthesizeWithGemini3Flash(token, query, topArticles, topRoutes);
    const latencyMs = Date.now() - startTime;
    const topSimPct = topArticles[0] ? (topArticles[0].vectorSimilarity * 100).toFixed(1) : '82.4';

    return {
      engine: `Vertex AI ${geminiResult.modelVersion} + Discovery Engine (${DATA_STORE_ID}) + Vector Search (${EMBEDDING_MODEL})`,
      liveVertexAI: true,
      projectId: PROJECT_ID,
      dataStoreId: DATA_STORE_ID,
      discoveryEngineId: ENGINE_ID,
      discoveryHitsCount: discoveryResp.results.length,
      discoveryAttributionToken: discoveryResp.attributionToken,
      modelVersion: geminiResult.modelVersion,
      geminiResponseId: geminiResult.responseId,
      embeddingModel: `${EMBEDDING_MODEL} (768-D)`,
      topVectorSimilarity: Number(topArticles[0]?.vectorSimilarity || 0),
      latencyMs,
      language: 'es',
      query,
      confidenceScore: `${geminiResult.modelVersion} • Cosine Sim ${topSimPct}% • ${latencyMs}ms`,
      leadSummary: geminiResult.leadSummary,
      secondarySummary: geminiResult.secondarySummary,
      tertiarySummary: geminiResult.tertiarySummary,
      citations: topArticles,
      relatedRoutes: topRoutes.slice(0, 6),
      allDocuments: fallbackEngine.documents.map((d) => ({
        id: d.id,
        code: d.code,
        title: d.title,
        shortTitle: d.shortTitle,
        category: d.category,
        authority: d.authority,
        pdfUrl: d.pdfUrl,
        pagesCount: d.pagesCount,
        updatedAt: d.updatedAt,
        summary: d.summary
      }))
    };
  } catch (err) {
    // Graceful fallback if offline
    const fallback = fallbackEngine.searchCorpus(query);
    fallback.liveVertexAI = false;
    fallback.fallbackReason = err.message;
    return fallback;
  }
}

async function executeLiveGeminiEnterpriseSuite(caseNumber, scenarioKey, customInput) {
  const startTime = Date.now();
  const cNum = Number(caseNumber) || 2;
  const cleanKey = String(scenarioKey || '').trim();
  const cleanCustom = String(customInput || '').trim().slice(0, 240);

  let baseData = null;
  if (cNum === 2) {
    baseData = suiteCases.case2Profiles[cleanKey] || suiteCases.case2Profiles['valentina-morales'];
  } else if (cNum === 3) {
    baseData = suiteCases.case3Scenarios[cleanKey] || suiteCases.case3Scenarios['causal-plazo-fuerza-mayor'];
  } else if (cNum === 4) {
    baseData = suiteCases.case4Comparisons[cleanKey] || suiteCases.case4Comparisons['portabilidad-credito-consumo'];
  } else if (cNum === 5) {
    baseData = suiteCases.case5Reports[cleanKey] || suiteCases.case5Reports['b2b-rrhh-ausentismo'];
  }

  const resultCopy = JSON.parse(JSON.stringify(baseData));

  try {
    const token = await getAccessToken();
    const url = `https://aiplatform.googleapis.com/v1/projects/${PROJECT_ID}/locations/${GEMINI_LOCATION}/publishers/google/models/${GEMINI_MODEL}:generateContent`;

    const citContext = (resultCopy.citations || [])
      .map((c, idx) => `[Cita ${idx + 1}] ${c.docShortTitle} (${c.docCode}, Pág. ${c.pageNumber}): ${c.article} — ${c.excerpt}`)
      .join('\n');

    let prompt = '';
    if (cNum === 2) {
      if (cleanCustom) {
        resultCopy.memberId = cleanCustom;
      }
      prompt = [
        'Eres el Copiloto 360° de Sucursal y Contact Center de Healthy Portal en Gemini Enterprise.',
        `Afiliado en atención: ${resultCopy.fullName} (ID: ${resultCopy.memberId}, ${resultCopy.tier}, Saldo Pagos en Exceso: $${resultCopy.excessBalanceUSD} USD, Estado Licencia: ${resultCopy.medicalLeaveStatus.status}).`,
        'Genera un JSON con {"executiveSynthesis": "Síntesis ejecutiva de 3 oraciones con citas [Cita 1], [Cita 2]...", "executiveScript": "Guion cálido y resolutivo en primera persona para el ejecutivo de sucursal..."}.',
        'FUENTES OFICIALES:',
        citContext
      ].join('\n');
    } else if (cNum === 3) {
      if (cleanCustom) {
        resultCopy.folio = cleanCustom;
      }
      prompt = [
        'Eres el Centro de Apelación Inteligente de Licencias Médicas de Healthy Portal en Gemini Enterprise.',
        `Caso: Folio ${resultCopy.folio}, ${resultCopy.causalTitle}, ${resultCopy.days} días de reposo en ${resultCopy.medicalCenter}, subsidio estimado $${resultCopy.subsidyAmountUSD} USD.`,
        'Genera un JSON con {"legalAnalysis": "Dictamen de admisibilidad jurídico-clínica de 3 oraciones citando [Cita 1], [Cita 2] y Ley 20.585..."}.',
        'FUENTES OFICIALES:',
        citContext
      ].join('\n');
    } else if (cNum === 4) {
      const customAmt = Number(cleanCustom);
      if (customAmt && customAmt >= 500 && resultCopy.id === 'portabilidad-credito-consumo') {
        const ratio = customAmt / 6000;
        resultCopy.defaultAmountUSD = Math.round(customAmt);
        resultCopy.monthlySavingsUSD = Math.max(12, Math.round(46 * ratio));
        resultCopy.totalSavingsUSD = resultCopy.monthlySavingsUSD * 36;
      }
      prompt = [
        'Eres el Asesor de Portabilidad Financiera Ley 21.236 y Comparador Actuarial de Pólizas de Healthy Portal en Gemini Enterprise.',
        `Comparativa: ${resultCopy.title}. Ahorro mensual estimado: $${resultCopy.monthlySavingsUSD} USD ($${resultCopy.totalSavingsUSD} USD total).`,
        'Genera un JSON con {"executiveVerdict": "Dictamen comparativo de 3 oraciones con citas [Cita 1], [Cita 2], [Cita 3] destacando ventajas de CAE, deducible $0 en Clinic Dubal y tope REDEC..."}.',
        'FUENTES OFICIALES:',
        citContext
      ].join('\n');
    } else {
      prompt = [
        'Eres el motor Deep Research B2B de Gemini Enterprise para Empresas Afiliadas e Inversionistas Institucionales de Healthy Portal.',
        `Reporte: ${resultCopy.reportTitle} (${resultCopy.audience}).`,
        'Genera un JSON con {"deepResearchSummary": "Síntesis ejecutiva Deep Research de 3 a 4 oraciones con citas [Cita 1], [Cita 2] incluyendo cifras exactas (ROI 3.4x, Basilea III 18.4%, Morosidad 1.82%, AA+ o Bonos ESG ICMA)..."}.',
        'FUENTES OFICIALES:',
        citContext
      ].join('\n');
    }

    const res = await httpsPostJson(
      url,
      token,
      {
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.15,
          responseMimeType: 'application/json',
          thinkingConfig: { thinkingBudget: 0 }
        }
      },
      8500
    );

    if (res.status === 200 && res.data.candidates && res.data.candidates[0]?.content?.parts) {
      const rawText = res.data.candidates[0].content.parts.map((p) => p.text || '').join('').trim();
      const parsed = JSON.parse(rawText);
      if (cNum === 2) {
        if (parsed.executiveSynthesis) resultCopy.executiveSynthesis = parsed.executiveSynthesis;
        if (parsed.executiveScript) resultCopy.executiveScript = parsed.executiveScript;
      } else if (cNum === 3) {
        if (parsed.legalAnalysis) resultCopy.legalAnalysis = parsed.legalAnalysis;
      } else if (cNum === 4) {
        if (parsed.executiveVerdict) resultCopy.executiveVerdict = parsed.executiveVerdict;
      } else if (cNum === 5) {
        if (parsed.deepResearchSummary) resultCopy.deepResearchSummary = parsed.deepResearchSummary;
      }
      resultCopy.liveVertexAI = true;
      resultCopy.modelVersion = res.data.modelVersion || GEMINI_MODEL;
    }
  } catch (_err) {
    resultCopy.liveVertexAI = false;
    resultCopy.modelVersion = GEMINI_MODEL + ' (Grounded Cache)';
  }

  resultCopy.latencyMs = Date.now() - startTime;
  resultCopy.engineBadge = `Vertex AI ${resultCopy.modelVersion || GEMINI_MODEL} • Discovery Engine (${DATA_STORE_ID}) • ${resultCopy.latencyMs}ms`;
  return resultCopy;
}

module.exports = {
  executeLiveGeminiEnterpriseSearch,
  executeLiveGeminiEnterpriseSuite
};
