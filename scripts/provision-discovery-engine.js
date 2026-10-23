#!/usr/bin/env node
/**
 * Provisions and populates:
 * 1. Google Cloud Discovery Engine Data Store (`healthy-portal-spanish-ds`) & Engine (`healthy-portal-gemini-enterprise`)
 * 2. Real 768-D Vertex AI Multilingual Vector Embeddings (`text-multilingual-embedding-002`)
 *    saved to `assets/js/spanish-vector-index.json` for hybrid Discovery Engine + Vector Search retrieval.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const { execFileSync } = require('child_process');
const CORPUS = require('../assets/js/spanish-docs-corpus');
const PORTAL_DATA = require('../assets/js/portal-data');

const PROJECT_ID = 'gemini-enterprise-demo-485114';
const LOCATION = 'global';
const EMBEDDING_LOCATION = 'us-central1';
const EMBEDDING_MODEL = 'text-multilingual-embedding-002';
const COLLECTION = 'default_collection';
const DATA_STORE_ID = 'healthy-portal-spanish-ds';
const GCS_BUCKET = 'gs://healthy-portal-spanish-corpus-485114/docs';

function getAccessToken() {
  return execFileSync('gcloud', ['auth', 'print-access-token'], { encoding: 'utf8' }).trim();
}

function requestJson(method, urlStr, token, bodyObj) {
  return new Promise((resolve, reject) => {
    const url = new URL(urlStr);
    const payload = bodyObj ? JSON.stringify(bodyObj) : null;
    const req = https.request(
      {
        hostname: url.hostname,
        path: url.pathname + url.search,
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          'X-Goog-User-Project': PROJECT_ID,
          'Content-Type': 'application/json',
          ...(payload ? { 'Content-Length': Buffer.byteLength(payload) } : {})
        }
      },
      (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          try {
            resolve({ status: res.statusCode, data: data ? JSON.parse(data) : {} });
          } catch (err) {
            resolve({ status: res.statusCode, data: { raw: data } });
          }
        });
      }
    );
    req.on('error', reject);
    if (payload) req.write(payload);
    req.end();
  });
}

function buildCorpusItems() {
  const discoveryDocs = [];
  const vectorRecords = [];
  const pdfDocs = Array.isArray(CORPUS.documents) ? CORPUS.documents : [];

  // 1. All 36 Spanish Regulatory & Policy PDF articles
  for (const pdf of pdfDocs) {
    const filename = (pdf.pdfUrl || '').split('/').pop() || `${pdf.id}.pdf`;
    for (const pageObj of pdf.pages || []) {
      const articles = Array.isArray(pageObj.articles) ? pageObj.articles : [];
      for (let aIdx = 0; aIdx < articles.length; aIdx++) {
        const art = articles[aIdx];
        const itemId = `${pdf.id}-p${pageObj.pageNumber}-a${aIdx + 1}`.replace(/[^a-zA-Z0-9-_]/g, '-');
        const fullText = [
          `Documento Oficial: ${pdf.title} (${pdf.code})`,
          `Nombre Corto: ${pdf.shortTitle}`,
          `Categoría: ${pdf.category} | Autoridad: ${pdf.authority}`,
          `Página ${pageObj.pageNumber} — ${pageObj.heading}`,
          `${art.article}`,
          `${art.text}`,
          `Palabras clave: ${(art.keywords || []).join(', ')}`
        ].join('\n');

        discoveryDocs.push({
          id: itemId,
          structData: {
            docType: 'SPANISH_REGULATORY_PDF',
            docId: pdf.id,
            code: pdf.code,
            docTitle: pdf.title,
            shortTitle: pdf.shortTitle,
            category: pdf.category,
            authority: pdf.authority,
            updatedAt: pdf.updatedAt,
            filename,
            pdfUrl: pdf.pdfUrl,
            deepLinkUrl: `${pdf.pdfUrl}#page=${pageObj.pageNumber}`,
            gcsUri: `${GCS_BUCKET}/${filename}`,
            pageNumber: pageObj.pageNumber,
            pageHeading: pageObj.heading,
            articleTitle: art.article,
            articleText: art.text,
            keywords: (art.keywords || []).join(', '),
            relatedRoutesJson: JSON.stringify(pdf.relatedRoutes || [])
          },
          content: {
            mimeType: 'text/plain',
            rawBytes: Buffer.from(fullText, 'utf8').toString('base64')
          }
        });

        vectorRecords.push({
          id: itemId,
          recordType: 'PDF_ARTICLE',
          docId: pdf.id,
          code: pdf.code,
          docTitle: pdf.title,
          shortTitle: pdf.shortTitle,
          category: pdf.category,
          authority: pdf.authority,
          updatedAt: pdf.updatedAt,
          pdfUrl: pdf.pdfUrl,
          deepLinkUrl: `${pdf.pdfUrl}#page=${pageObj.pageNumber}`,
          gcsUri: `${GCS_BUCKET}/${filename}`,
          pageNumber: pageObj.pageNumber,
          pageHeading: pageObj.heading,
          article: art.article,
          text: art.text,
          keywords: art.keywords || [],
          relatedRoutes: pdf.relatedRoutes || [],
          embedText: fullText
        });
      }
    }
  }

  // 2. Portal pages (Depth 1 & Depth 2)
  const categories = Array.isArray(PORTAL_DATA.categories) ? PORTAL_DATA.categories : [];
  for (const cat of categories) {
    const catSlug = cat.id || 'category';
    const catId = `portal-l1-${catSlug}`.replace(/[^a-zA-Z0-9-_]/g, '-').slice(0, 63);
    const catText = [
      `Healthy Portal Categoría Nivel 1: ${cat.title} (${cat.originalTitle || ''})`,
      `Subtítulo: ${cat.heroSubtitle || cat.bannerDesc || ''}`,
      `Ruta: ${cat.href}`
    ].join('\n');

    discoveryDocs.push({
      id: catId,
      structData: {
        docType: 'PORTAL_ROUTE',
        level: 'Depth 1 Category Hub',
        title: cat.title,
        category: cat.title,
        href: cat.href,
        summary: cat.heroSubtitle || cat.bannerDesc || ''
      },
      content: {
        mimeType: 'text/plain',
        rawBytes: Buffer.from(catText, 'utf8').toString('base64')
      }
    });

    vectorRecords.push({
      id: catId,
      recordType: 'PORTAL_ROUTE',
      level: 'Depth 1 Category Hub',
      title: cat.title,
      category: cat.title,
      href: cat.href,
      summary: cat.heroSubtitle || cat.bannerDesc || '',
      embedText: catText
    });

    for (const sub of cat.subpages || []) {
      if (sub.isHub) continue;
      const subId = `portal-l2-${catSlug}-${sub.slug}`.replace(/[^a-zA-Z0-9-_]/g, '-').slice(0, 63);
      const subText = [
        `Healthy Portal Subpágina Nivel 2: ${sub.title} (Categoría: ${cat.title})`,
        `Resumen: ${sub.summary || ''}`,
        `Ruta: ${sub.href}`
      ].join('\n');

      discoveryDocs.push({
        id: subId,
        structData: {
          docType: 'PORTAL_ROUTE',
          level: 'Depth 2 Subpage',
          title: sub.title,
          category: cat.title,
          href: sub.href,
          summary: sub.summary || ''
        },
        content: {
          mimeType: 'text/plain',
          rawBytes: Buffer.from(subText, 'utf8').toString('base64')
        }
      });

      vectorRecords.push({
        id: subId,
        recordType: 'PORTAL_ROUTE',
        level: 'Depth 2 Subpage',
        title: sub.title,
        category: cat.title,
        href: sub.href,
        summary: sub.summary || '',
        embedText: subText
      });
    }
  }

  return { discoveryDocs, vectorRecords };
}

async function main() {
  const token = getAccessToken();
  const baseParent = `https://discoveryengine.googleapis.com/v1/projects/${PROJECT_ID}/locations/${LOCATION}/collections/${COLLECTION}`;
  const { discoveryDocs, vectorRecords } = buildCorpusItems();

  console.log(`1. Importing ${discoveryDocs.length} documents into Discovery Engine (${DATA_STORE_ID})...`);
  const importUrl = `${baseParent}/dataStores/${DATA_STORE_ID}/branches/default_branch/documents:import`;
  const batchSize = 95;
  for (let i = 0; i < discoveryDocs.length; i += batchSize) {
    const batch = discoveryDocs.slice(i, i + batchSize);
    const importRes = await requestJson('POST', importUrl, token, {
      inlineSource: { documents: batch },
      reconciliationMode: 'INCREMENTAL'
    });
    console.log(`   Batch ${Math.floor(i / batchSize) + 1} (${batch.length} docs) -> HTTP ${importRes.status}`);
  }

  console.log(`2. Computing real 768-D Vertex AI embeddings (${EMBEDDING_MODEL}) for ${vectorRecords.length} records...`);
  const embedUrl = `https://${EMBEDDING_LOCATION}-aiplatform.googleapis.com/v1/projects/${PROJECT_ID}/locations/${EMBEDDING_LOCATION}/publishers/google/models/${EMBEDDING_MODEL}:predict`;
  const embedBatchSize = 25;

  for (let i = 0; i < vectorRecords.length; i += embedBatchSize) {
    const slice = vectorRecords.slice(i, i + embedBatchSize);
    const instances = slice.map((r) => ({
      task_type: 'RETRIEVAL_DOCUMENT',
      title: r.recordType === 'PDF_ARTICLE' ? `${r.shortTitle} - ${r.article}` : r.title,
      content: r.embedText
    }));

    const res = await requestJson('POST', embedUrl, token, { instances });
    if (res.status !== 200 || !res.data.predictions) {
      throw new Error(`Embedding error HTTP ${res.status}: ${JSON.stringify(res.data).slice(0, 300)}`);
    }

    for (let j = 0; j < slice.length; j++) {
      const values = res.data.predictions[j]?.embeddings?.values || [];
      // Store rounded to 5 decimal places to keep JSON compact and fast
      slice[j].embedding = values.map((v) => Number(v.toFixed(5)));
      delete slice[j].embedText;
    }
    console.log(`   Embedded ${Math.min(i + embedBatchSize, vectorRecords.length)} / ${vectorRecords.length} records`);
  }

  const outPath = path.join(__dirname, '..', 'assets', 'js', 'spanish-vector-index.json');
  fs.writeFileSync(
    outPath,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        projectId: PROJECT_ID,
        dataStoreId: DATA_STORE_ID,
        embeddingModel: EMBEDDING_MODEL,
        dimensions: 768,
        totalRecords: vectorRecords.length,
        records: vectorRecords
      },
      null,
      0
    ),
    'utf8'
  );
  console.log(`Saved ${vectorRecords.length} 768-D embedded records to ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
