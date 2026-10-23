/* ==========================================================================
   Healthy Portal Static Site Generator — Bilingual Edition (ES default | EN)
   Generates Home (Depth 0) + All 1st-Level & 2nd-Level Pages (85 Pages Total)
   ========================================================================== */

const fs = require('fs');
const path = require('path');
const data = require('../assets/js/portal-data.js');
const spanishCorpus = require('../assets/js/spanish-docs-corpus.js');

const ROOT_DIR = path.resolve(__dirname, '..');

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function bi(esText, enText) {
  const es = String(esText || '');
  const en = String(enText !== undefined && enText !== '' ? enText : es);
  return `<span data-lang-es="${escapeHtml(es)}" data-lang-en="${escapeHtml(en)}">${escapeHtml(es)}</span>`;
}

function biOpt(value, esText, enText, selected) {
  const es = String(esText || '');
  const en = String(enText !== undefined && enText !== '' ? enText : es);
  return `<option value="${escapeHtml(value)}"${selected ? ' selected' : ''} data-lang-es="${escapeHtml(es)}" data-lang-en="${escapeHtml(en)}">${escapeHtml(es)}</option>`;
}

function renderGeminiEnterpriseSection(isCompact) {
  const promptChips = spanishCorpus.demoPrompts.map((p) => {
    return `<button type="button" class="hp-gemini-chip" data-gemini-prompt="${escapeHtml(p.query)}">${escapeHtml(p.label)}</button>`;
  }).join('\n');

  const pdfCards = spanishCorpus.documents.map((doc) => {
    return `<article class="hp-gemini-pdf-card">
      <div>
        <span class="hp-gemini-pdf-card__code">📄 PDF EN ESPAÑOL • ${escapeHtml(doc.code)} (${escapeHtml(String(doc.pagesCount))} PÁGS.)</span>
        <h3 class="hp-gemini-pdf-card__title">${escapeHtml(doc.shortTitle)}</h3>
        <p class="hp-gemini-pdf-card__desc">${escapeHtml(doc.summary)}</p>
      </div>
      <div style="display:flex; gap:0.5rem; flex-wrap:wrap; align-items:center;">
        <a href="${escapeHtml(doc.pdfUrl)}" target="_blank" rel="noopener noreferrer" class="hp-btn hp-btn--gold" style="padding:0.42rem 0.85rem; font-size:0.76rem;">${bi('Abrir PDF Oficial ↗', 'Open Official PDF ↗')}</a>
        <a href="${escapeHtml(doc.pdfUrl)}" download class="hp-btn hp-btn--outline-white" style="padding:0.42rem 0.85rem; font-size:0.76rem;">${bi('⬇ Descargar', '⬇ Download')}</a>
      </div>
    </article>`;
  }).join('\n');

  return `
  <section class="hp-section" id="hp-gemini-enterprise-section" style="padding-top: ${isCompact ? '1rem' : '0.75rem'}; padding-bottom: 1.25rem;" aria-label="Suite Completa Gemini Enterprise">
    <div class="hp-container">
      <div class="hp-gemini-hub">
        <div class="hp-gemini-hub__header">
          <div>
            <span class="hp-gemini-badge">${bi('✨ GEMINI ENTERPRISE SUITE • 5 CASOS DE USO EN VIVO (VERTEX AI + DISCOVERY ENGINE + WORKSPACE)', '✨ GEMINI ENTERPRISE SUITE • 5 LIVE USE CASES (VERTEX AI + DISCOVERY ENGINE + WORKSPACE)')}</span>
            <h2 class="hp-gemini-hub__title">${bi('Centro de Inteligencia Generativa: Buscador RAG, Copiloto 360°, Apelaciones, Portabilidad y Hub B2B', 'Generative Intelligence Center: RAG Search, 360° Copilot, Appeals, Portability & B2B Hub')}</h2>
            <p class="hp-gemini-hub__subtitle">
              ${bi(
                'Suite empresarial conectada en vivo a Discovery Engine (healthy-portal-spanish-ds), Vertex AI Vector Search (768-D), Conectores Google Workspace y Gemini 3 Flash sobre los 8 documentos PDF oficiales en español (24 páginas) y las 85 rutas del portal.',
                'Enterprise suite connected live to Discovery Engine (healthy-portal-spanish-ds), Vertex AI Vector Search (768-D), Google Workspace Connectors, and Gemini 3 Flash across all 8 official Spanish PDFs (24 pages) and 85 portal routes.'
              )}
            </p>
          </div>
          <div style="font-family: var(--hp-font-mono); font-size: 0.72rem; color: rgba(240,241,250,0.75); text-align: right;">
            <div>GCP Project: <strong>gemini-enterprise-demo-485114</strong></div>
            <div>Corpus: <strong>8 PDFs Oficiales (24 Págs. ES) + 120 Vectores 768-D</strong></div>
          </div>
        </div>

        <!-- Selector de los 5 Casos de Uso de Gemini Enterprise -->
        <div class="hp-gemini-tabs" role="tablist" aria-label="Casos de uso de Gemini Enterprise">
          <button type="button" class="hp-gemini-tab is-active" role="tab" aria-selected="true" data-gemini-tab="case1">
            <span class="hp-gemini-tab__num">CASO 1</span>
            <span>🔎 ${bi('Buscador RAG Omnicanal', 'Omnichannel RAG Search')}</span>
          </button>
          <button type="button" class="hp-gemini-tab" role="tab" aria-selected="false" data-gemini-tab="case2">
            <span class="hp-gemini-tab__num">CASO 2</span>
            <span>🎧 ${bi('Copiloto 360° Sucursal & Contact Center', '360° Branch & Contact Center Copilot')}</span>
          </button>
          <button type="button" class="hp-gemini-tab" role="tab" aria-selected="false" data-gemini-tab="case3">
            <span class="hp-gemini-tab__num">CASO 3</span>
            <span>⚖️ ${bi('Apelación Licencias + Workspace', 'Medical Leave Appeals + Workspace')}</span>
          </button>
          <button type="button" class="hp-gemini-tab" role="tab" aria-selected="false" data-gemini-tab="case4">
            <span class="hp-gemini-tab__num">CASO 4</span>
            <span>📊 ${bi('Portabilidad y Comparador Pólizas', 'Financial Portability & Policy Comparator')}</span>
          </button>
          <button type="button" class="hp-gemini-tab" role="tab" aria-selected="false" data-gemini-tab="case5">
            <span class="hp-gemini-tab__num">CASO 5</span>
            <span>🏢 ${bi('Hub B2B Empresas & Inversionistas', 'B2B Companies & Investors Hub')}</span>
          </button>
        </div>

        <!-- PANEL CASO 1: Buscador Generativo Omnicanal -->
        <div class="hp-gemini-panel is-active" data-gemini-panel="case1" role="tabpanel">
          <form id="hp-gemini-search-form" class="hp-gemini-searchbar" role="search">
            <span aria-hidden="true" style="font-size: 1.15rem;">🔎</span>
            <input
              type="search"
              id="hp-gemini-search-input"
              class="hp-gemini-searchbar__input"
              aria-label="Pregunta en español a Gemini Enterprise"
              placeholder="Pregunta en español: ej. ¿Cómo apelar una licencia rechazada ante MRB y NSWB? ¿Qué cubre REDEC? ¿Deducible $0 en HealthyNet?"
              data-placeholder-es="Pregunta en español: ej. ¿Cómo apelar una licencia rechazada ante MRB y NSWB? ¿Qué cubre REDEC? ¿Deducible $0 en HealthyNet?"
              data-placeholder-en="Ask in Spanish or English: e.g. ¿Cómo apelar una licencia rechazada ante MRB y NSWB? ¿Qué cubre REDEC? ¿Deducible $0 en HealthyNet?"
              value=""
            />
            <button type="submit" class="hp-btn hp-btn--gold" style="padding: 0.62rem 1.25rem; font-size: 0.84rem; flex-shrink: 0;">
              ${bi('✨ Buscar con Gemini →', '✨ Search with Gemini →')}
            </button>
          </form>

          <div class="hp-gemini-chips" aria-label="Consultas de demostración en español">
            <span style="font-size: 0.75rem; font-weight: 700; color: var(--color-green); text-transform: uppercase; letter-spacing: 0.06em; margin-right: 0.25rem;">${bi('Preguntas frecuentes (Demo ES):', 'Sample Queries (Spanish Demo):')}</span>
            ${promptChips}
          </div>

          <div id="hp-gemini-results" aria-live="polite"></div>
        </div>

        <!-- PANEL CASO 2: Copiloto 360° de Sucursal y Contact Center (Employee Experience) -->
        <div class="hp-gemini-panel" data-gemini-panel="case2" role="tabpanel" hidden>
          <div class="hp-suite-workbench">
            <div class="hp-suite-workbench__intro">
              <span class="hp-suite-kicker">🎧 EMPLOYEE EXPERIENCE • CONECTORES CRM + CORE REDEC + LICENCIAS MRB/NSWB + PAGOS EN EXCESO</span>
              <h3 class="hp-suite-workbench__title">${bi('Caso 2: Copiloto 360° de Sucursal y Contact Center en Gemini Enterprise', 'Case 2: 360° Branch & Contact Center Copilot in Gemini Enterprise')}</h3>
              <p class="hp-suite-workbench__desc">${bi('Unifica en una sola vista la ficha previsional, saldos de Pagos en Exceso, holgura crediticia REDEC (25% / 15%), estado de licencias médicas y Next-Best-Action con guion ejecutivo fundamentado en el Manual Operativo COP-360-CRM-2026-V2.', 'Unifies member profile, Excess Payment balances, REDEC credit headroom (25% / 15%), medical leave status, and Next-Best-Action executive script grounded in Manual COP-360-CRM-2026-V2.')}</p>
            </div>
            <form id="hp-case2-form" class="hp-suite-controls">
              <div class="hp-suite-field" style="flex: 2; min-width: 260px;">
                <label for="hp-case2-scenario">${bi('Seleccionar Afiliado en Atención (Escenario en Vivo):', 'Select Member in Service (Live Scenario):')}</label>
                <select id="hp-case2-scenario" class="hp-suite-select">
                  ${biOpt('valentina-morales', 'Valentina Morales (ID: HP-849201-US • Trabajadora Tramo B • Exceso $485 + Licencia Observada)', 'Valentina Morales (ID: HP-849201-US • Worker Tier B • $485 Refund + Observed Leave)', true)}
                  ${biOpt('roberto-sterling', 'Roberto Sterling (ID: HP-512098-PEN • Pensionado Tramo A • Portabilidad 13.2% CAE + Cuidadores)', 'Roberto Sterling (ID: HP-512098-PEN • Retiree Tier A • 13.2% Portability + Caregivers)', false)}
                  ${biOpt('camila-vance', 'Camila Vance (ID: HP-390441-TECH • Postnatal Maternal 84 Días + Bono Natalidad $120)', 'Camila Vance (ID: HP-390441-TECH • 84-Day Maternity Leave + $120 Birth Bonus)', false)}
                </select>
              </div>
              <div class="hp-suite-field" style="flex: 1; min-width: 190px;">
                <label for="hp-case2-custom">${bi('ID Afiliado / RUT (Opcional):', 'Member ID / SSN (Optional):')}</label>
                <input type="text" id="hp-case2-custom" class="hp-suite-input" placeholder="Ej. HP-849201-US" />
              </div>
              <button type="submit" class="hp-btn hp-btn--gold hp-suite-submit">
                ${bi('🎧 Sintetizar Ficha 360° →', '🎧 Synthesize 360° Profile →')}
              </button>
            </form>
            <div id="hp-case2-results" aria-live="polite"></div>
          </div>
        </div>

        <!-- PANEL CASO 3: Centro de Apelación Inteligente de Licencias Médicas + Conectores Workspace -->
        <div class="hp-gemini-panel" data-gemini-panel="case3" role="tabpanel" hidden>
          <div class="hp-suite-workbench">
            <div class="hp-suite-workbench__intro">
              <span class="hp-suite-kicker">⚖️ ADVOCACY AUTOMATION • LEY N° 20.585 + D.S. N° 3 + CONECTORES GOOGLE DOCS, DRIVE Y GMAIL</span>
              <h3 class="hp-suite-workbench__title">${bi('Caso 3: Centro de Apelación Inteligente de Licencias Médicas + Conectores Workspace', 'Case 3: Intelligent Medical Leave Appeal Center + Workspace Connectors')}</h3>
              <p class="hp-suite-workbench__desc">${bi('Analiza la causal de rechazo o reducción de días de MRB/NSWB, verifica los antecedentes clínicos de Clinic Dubal o liquidaciones de 3 meses, redacta el Recurso de Reposición formal y compila el expediente en Google Docs, Drive y Gmail conforme al Protocolo APEL-LM-SUSESO-2026-V3.', 'Analyzes MRB/NSWB rejection or day-reduction causes, verifies Clinic Dubal clinical records or 3-month payslips, drafts the formal Appeal Brief, and compiles the dossier in Google Docs, Drive, and Gmail under Protocol APEL-LM-SUSESO-2026-V3.')}</p>
            </div>
            <form id="hp-case3-form" class="hp-suite-controls">
              <div class="hp-suite-field" style="flex: 2; min-width: 260px;">
                <label for="hp-case3-scenario">${bi('Causal de Rechazo u Observación MRB / NSWB:', 'MRB / NSWB Rejection or Observation Cause:')}</label>
                <select id="hp-case3-scenario" class="hp-suite-select">
                  ${biOpt('causal-plazo-fuerza-mayor', 'Causal A: Presentación Fuera de Plazo — Eximente Fuerza Mayor Hospitalización Clinic Dubal (Art. 54 D.S. N° 3)', 'Cause A: Late Submission — Force Majeure Hospitalization Exemption Clinic Dubal (Art. 54 D.S. No. 3)', true)}
                  ${biOpt('causal-reposo-clinic-dubal', 'Causal B: Reposo Injustificado / Reducción de 21 a 7 Días — Peritaje RMN Clinic Dubal (Ley 20.585)', 'Cause B: Unjustified Rest / Reduction from 21 to 7 Days — Clinic Dubal MRI Report (Law 20,585)', false)}
                  ${biOpt('causal-vinculo-cotizaciones', 'Causal C: Observación de Cotizaciones / Base de Cálculo 3 Meses (Art. 7° y 11° NSWB)', 'Cause C: Contribution Record Observation / 3-Month Calculation Base (Art. 7 & 11 NSWB)', false)}
                </select>
              </div>
              <div class="hp-suite-field" style="flex: 1; min-width: 190px;">
                <label for="hp-case3-custom">${bi('Folio Licencia (Opcional):', 'Leave Folio (Optional):')}</label>
                <input type="text" id="hp-case3-custom" class="hp-suite-input" placeholder="Ej. LM-2026-77310" />
              </div>
              <button type="submit" class="hp-btn hp-btn--gold hp-suite-submit">
                ${bi('⚖️ Generar Escrito + Workspace →', '⚖️ Generate Appeal + Workspace →')}
              </button>
            </form>
            <div id="hp-case3-results" aria-live="polite"></div>
          </div>
        </div>

        <!-- PANEL CASO 4: Asesor de Portabilidad Financiera y Comparador de Seguros con Grounding Documental -->
        <div class="hp-gemini-panel" data-gemini-panel="case4" role="tabpanel" hidden>
          <div class="hp-suite-workbench">
            <div class="hp-suite-workbench__intro">
              <span class="hp-suite-kicker">📊 DOCUMENT GROUNDING • LEY N° 21.236 PORTABILIDAD + MATRIZ ACTUARIAL DE PÓLIZAS</span>
              <h3 class="hp-suite-workbench__title">${bi('Caso 4: Asesor de Portabilidad Financiera y Comparador de Seguros con Grounding Documental', 'Case 4: Financial Portability Advisor & Insurance Comparator with Document Grounding')}</h3>
              <p class="hp-suite-workbench__desc">${bi('Audita cláusula por cláusula créditos de consumo bancarios externos frente al Crédito Social REDEC (14.8% CAE trabajadores / 13.2% pensionados) y compara pólizas comerciales contra los Seguros Catastrófico 5,000 UF y Automotriz Full Protection ($0 deducible en Clinic Dubal y talleres oficiales) según el Anexo PORT-21236-POL-2026-V4.', 'Audits external bank loans clause-by-clause against REDEC Social Credit (14.8% APR workers / 13.2% retirees) and compares commercial insurance policies against 5,000 UF Catastrophic Health and Full Protection Auto Insurance ($0 deductible) under Annex PORT-21236-POL-2026-V4.')}</p>
            </div>
            <form id="hp-case4-form" class="hp-suite-controls">
              <div class="hp-suite-field" style="flex: 2; min-width: 260px;">
                <label for="hp-case4-scenario">${bi('Seleccionar Auditoría de Portabilidad o Comparativa de Pólizas:', 'Select Portability Audit or Policy Comparison:')}</label>
                <select id="hp-case4-scenario" class="hp-suite-select">
                  ${biOpt('portabilidad-credito-consumo', 'Portabilidad Financiera Ley N° 21.236: Deuda Bancaria Externa (28.9% CAE) vs. Crédito Social REDEC (14.8% CAE)', 'Financial Portability Law 21,236: External Bank Debt (28.9% APR) vs. REDEC Social Credit (14.8% APR)', true)}
                  ${biOpt('comparador-seguro-catastrofico', 'Comparador Salud: Póliza Comercial Externa (Deducible 20 UF) vs. Catastrófico Healthy Portal ($0 Deducible Clinic Dubal)', 'Health Comparator: External Commercial Policy (20 UF Deductible) vs. Healthy Portal Catastrophic ($0 Deductible)', false)}
                  ${biOpt('comparador-seguro-auto-hogar', 'Comparador Automotriz: Seguro Bancario (8 UF Deducible) vs. Full Protection Healthy ($0 Deducible + 30 Días Auto)', 'Auto Comparator: Bank Insurance (8 UF Deductible) vs. Healthy Full Protection ($0 Deductible + 30-Day Car)', false)}
                </select>
              </div>
              <div class="hp-suite-field" style="flex: 1; min-width: 190px;">
                <label for="hp-case4-custom">${bi('Monto a Portar USD (Opcional):', 'Portability Amount USD (Optional):')}</label>
                <input type="number" id="hp-case4-custom" class="hp-suite-input" placeholder="Ej. 6000" min="500" max="50000" step="100" />
              </div>
              <button type="submit" class="hp-btn hp-btn--gold hp-suite-submit">
                ${bi('📊 Comparar Cláusulas y Ahorro →', '📊 Compare Clauses & Savings →')}
              </button>
            </form>
            <div id="hp-case4-results" aria-live="polite"></div>
          </div>
        </div>

        <!-- PANEL CASO 5: Hub de Inteligencia B2B para Empresas e Inversionistas (Deep Research) -->
        <div class="hp-gemini-panel" data-gemini-panel="case5" role="tabpanel" hidden>
          <div class="hp-suite-workbench">
            <div class="hp-suite-workbench__intro">
              <span class="hp-suite-kicker">🏢 DEEP RESEARCH • GESTIÓN DE AUSENTISMO B2B + SOLVENCIA BASILEA III (18.4%) + BONOS SOCIALES ESG (ICMA)</span>
              <h3 class="hp-suite-workbench__title">${bi('Caso 5: Hub de Inteligencia B2B para Empresas e Inversionistas (Deep Research en Gemini Enterprise)', 'Case 5: B2B Intelligence Hub for Companies & Investors (Deep Research in Gemini Enterprise)')}</h3>
              <p class="hp-suite-workbench__desc">${bi('Sintetiza hallazgos estratégicos multi-documento para Directores de RR.HH. de empresas afiliadas (reducción de ausentismo del 24.6% y ROI 3.4x con operativos móviles de Clinic Dubal) y para Inversionistas Institucionales (Solvencia Basilea III de 18.4%, clasificación AA+, mora 1.82% y trazabilidad de Bonos Sociales ICMA) conforme al Reporte B2B-ESG-BASILEA-2026-V1.', 'Synthesizes multi-document strategic findings for HR Directors of affiliated companies (-24.6% absenteeism & 3.4x ROI with Clinic Dubal mobile clinics) and Institutional Investors (18.4% Basel III solvency, AA+ rating, 1.82% NPL & ICMA Social Bonds) under Report B2B-ESG-BASILEA-2026-V1.')}</p>
            </div>
            <form id="hp-case5-form" class="hp-suite-controls">
              <div class="hp-suite-field" style="flex: 1; min-width: 280px;">
                <label for="hp-case5-scenario">${bi('Seleccionar Informe Deep Research (Empresas B2B / Inversionistas ESG):', 'Select Deep Research Report (B2B Companies / ESG Investors):')}</label>
                <select id="hp-case5-scenario" class="hp-suite-select">
                  ${biOpt('b2b-rrhh-ausentismo', 'Empresas B2B (Directores RR.HH.): Plan de Reducción de Ausentismo (-24.6%) y ROI Preventivo 3.4x con Clinic Dubal', 'B2B Companies (HR Directors): Absenteeism Reduction Plan (-24.6%) & 3.4x Preventive ROI with Clinic Dubal', true)}
                  ${biOpt('inversor-basilea-solvencia', 'Inversionistas Institucionales: Solvencia Basilea III (18.4%), Clasificación AA+ Estable y Cartera REDEC (Mora 1.82%)', 'Institutional Investors: Basel III Solvency (18.4%), AA+ Stable Rating & REDEC Portfolio (1.82% NPL)', false)}
                  ${biOpt('inversor-bonos-esg-icma', 'Fondos Sostenibles ESG: Trazabilidad de Bonos Sociales (ICMA Social Bond Principles) e Impacto Social Auditado', 'Sustainable ESG Funds: Social Bond Traceability (ICMA Social Bond Principles) & Audited Social Impact', false)}
                </select>
              </div>
              <button type="submit" class="hp-btn hp-btn--gold hp-suite-submit">
                ${bi('🏢 Ejecutar Deep Research →', '🏢 Execute Deep Research →')}
              </button>
            </form>
            <div id="hp-case5-results" aria-live="polite"></div>
          </div>
        </div>

        ${!isCompact ? `
        <div style="margin-top: 1.6rem; padding-top: 1.25rem; border-top: 1px solid rgba(255,255,255,0.12);">
          <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:0.5rem;">
            <h3 style="margin:0; font-size:1rem; color:var(--hp-white);">${bi('📚 Biblioteca Oficial de 8 Documentos PDF en Español (Fuente de Grounding para los 5 Casos de Gemini Enterprise)', '📚 Official Library of 8 Spanish PDF Documents (Grounding Source for All 5 Gemini Enterprise Cases)')}</h3>
            <span style="font-family:var(--hp-font-mono); font-size:0.72rem; color:var(--color-green);">8 PDFs • 24 Páginas • 120 Vectores 768-D • PDF-1.4 Nativo</span>
          </div>
          <div class="hp-gemini-pdf-grid">
            ${pdfCards}
          </div>
        </div>` : ''}
      </div>
    </div>
  </section>`;
}

function renderDirectoryModal() {
  const allGroups = [...data.categories, ...data.helpAndCorporateCategories];
  const groupHtml = allGroups.map((cat) => {
    const items = cat.subpages.map((sub) => {
      const badge = sub.tag ? `<span class="hp-badge-top">${bi(sub.tag, sub.tagEn)}</span>` : '';
      return `<a href="${escapeHtml(sub.href)}" class="hp-megamenu__link" data-directory-item="true">
        ${bi(sub.title, sub.titleEn)}
        ${badge}
      </a>`;
    }).join('\n');
    return `<div style="margin-bottom: 1.5rem;">
      <h3 style="margin: 0 0 0.6rem; color: var(--hp-navy-900); font-size: 1.05rem; border-bottom: 2px solid var(--hp-blue-100); padding-bottom: 0.35rem;">
        <a href="${escapeHtml(cat.href)}">${bi(cat.title, cat.titleEn)}</a>
        <small style="color: var(--hp-slate-500); font-weight: 500; margin-left: 0.4rem;">(${bi(cat.originalTitle, cat.originalTitleEn)})</small>
      </h3>
      <div class="hp-megamenu__links">${items}</div>
    </div>`;
  }).join('\n');

  const segmentLinks = data.standaloneSegments.map((seg) => {
    return `<a href="${escapeHtml(seg.href)}" class="hp-megamenu__link hp-megamenu__link--hub" data-directory-item="true">
      <span>${bi(seg.title, seg.titleEn)} (${bi(seg.originalTitle, seg.originalTitleEn)})</span>
    </a>`;
  }).join('\n');

  return `
  <div class="hp-modal-backdrop" id="hp-directory-modal" role="dialog" aria-modal="true" aria-labelledby="hp-directory-title">
    <div class="hp-modal">
      <div class="hp-modal__header">
        <div>
          <h2 id="hp-directory-title" style="margin: 0; font-size: 1.25rem;">${bi('Healthy Portal — Directorio Completo de 1.er y 2.º Nivel', 'Healthy Portal — Complete 1st & 2nd Level Site Directory')}</h2>
          <p style="margin: 0.2rem 0 0; font-size: 0.82rem; opacity: 0.88;">${bi('Las 85 rutas y portales de servicio para afiliados', 'All 85 member routes and service portals')}</p>
        </div>
        <button type="button" id="hp-directory-close" class="hp-btn hp-btn--gold" style="padding: 0.45rem 1rem; font-size: 0.85rem;">${bi('Cerrar ✕', 'Close ✕')}</button>
      </div>
      <div class="hp-modal__body">
        <div style="margin-bottom: 1.25rem;">
          <label for="hp-directory-search" style="display:block; font-weight:700; font-size:0.85rem; margin-bottom:0.35rem;">${bi('Filtrar páginas por palabra clave:', 'Filter pages by keyword:')}</label>
          <input
            type="search"
            id="hp-directory-search"
            placeholder="Buscar ej. Licencia Médica, Crédito Social, Seguro Automotriz, Cuidadores, REDEC, VRS..."
            data-placeholder-es="Buscar ej. Licencia Médica, Crédito Social, Seguro Automotriz, Cuidadores, REDEC, VRS..."
            data-placeholder-en="Search e.g. Medical Leave, Social Credit, Auto Insurance, Caregivers, REDEC, VRS..."
            style="width:100%; padding:0.7rem 1rem; border-radius:8px; border:1px solid var(--hp-slate-300); font-size:0.95rem;"
          />
        </div>
        <div style="margin-bottom: 1.5rem;">
          <h3 style="margin: 0 0 0.6rem; color: var(--hp-navy-900); font-size: 1.05rem;">${bi('Portales Principales y Segmentos (1.er Nivel)', 'Primary Portals & Segment Hubs (1st Level)')}</h3>
          <div class="hp-megamenu__links">
            <a href="/index.html" class="hp-megamenu__link hp-megamenu__link--hub" data-directory-item="true">${bi('Inicio Trabajadores (Afiliados Activos)', 'Workers Home Portal (Active Members)')}</a>
            ${segmentLinks}
          </div>
        </div>
        ${groupHtml}
      </div>
    </div>
  </div>`;
}

function renderHeader(activeSegmentId, activeCategoryId) {
  const segmentTabs = data.segments.map((seg) => {
    const isActive = seg.id === activeSegmentId ? 'is-active' : '';
    return `<a href="${escapeHtml(seg.href)}" class="hp-segment-link ${isActive}">${bi(seg.label, seg.labelEn)}</a>`;
  }).join('\n');

  const navItems = data.categories.map((cat) => {
    const isActive = cat.id === activeCategoryId ? 'is-active' : '';
    const subLinks = cat.subpages.map((sub) => {
      const hubClass = sub.isHub ? 'hp-megamenu__link--hub' : '';
      const badge = sub.tag ? `<span class="hp-badge-top">${bi(sub.tag, sub.tagEn)}</span>` : '';
      return `<a href="${escapeHtml(sub.href)}" class="hp-megamenu__link ${hubClass}">
        ${bi(sub.title, sub.titleEn)}
        ${badge}
      </a>`;
    }).join('\n');

    return `
    <div class="hp-nav__item" data-has-megamenu="true">
      <button type="button" class="hp-nav__trigger ${isActive}" aria-expanded="false">
        ${bi(cat.title, cat.titleEn)}
        <span class="hp-nav__caret" aria-hidden="true">▾</span>
      </button>
      <div class="hp-megamenu" role="region" aria-label="${escapeHtml(cat.title)} submenu">
        <div class="hp-container hp-megamenu__grid">
          <div class="hp-megamenu__promo">
            <div>
              <span class="hp-megamenu__promo-tag">${bi(cat.bannerTag, cat.bannerTagEn)}</span>
              <h3>${bi(cat.bannerTitle, cat.bannerTitleEn)}</h3>
              <p>${bi(cat.bannerDesc, cat.bannerDescEn)}</p>
            </div>
            <a href="${escapeHtml(cat.href)}" class="hp-btn hp-btn--gold" style="align-self: flex-start; padding: 0.55rem 1.15rem; font-size: 0.85rem;">
              ${bi('Explorar ' + cat.title + ' →', 'Explore ' + cat.titleEn + ' →')}
            </a>
          </div>
          <div class="hp-megamenu__links">
            ${subLinks}
          </div>
        </div>
      </div>
    </div>`;
  }).join('\n');

  const homeActive = !activeCategoryId && activeSegmentId === 'workers' ? 'is-active' : '';

  return `
  <a href="#main-content" class="hp-skip-link">${bi('Saltar al contenido principal', 'Skip to main content')}</a>
  <div class="hp-topbar">
    <div class="hp-container hp-topbar__inner">
      <div class="hp-topbar__left">
        <span class="hp-topbar__badge">${bi('● Portal Digital en Vivo', '● Live Digital Portal')}</span>
        <span>${bi('Red de Seguridad Social y Bienestar Familiar', 'Social Security & Family Wellbeing Benefits Network')}</span>
      </div>
      <div class="hp-topbar__right">
        <a href="/help-center/branches.html" class="hp-topbar__link">📍 ${bi('Sucursales', 'Branches')}</a>
        <a href="/help-center/index.html" class="hp-topbar__link">❓ ${bi('Centro de Ayuda', 'Help Center')}</a>
        <div class="hp-lang-switch" role="group" aria-label="Selector de idioma / Language selector">
          <button type="button" class="hp-lang-btn is-active" data-set-lang="es" title="Español">ES</button>
          <button type="button" class="hp-lang-btn" data-set-lang="en" title="English">EN</button>
        </div>
        <div class="hp-a11y-controls" aria-label="Controles de tamaño de texto">
          <button type="button" class="hp-a11y-btn" data-font-scale="0.92" title="Disminuir letra">A-</button>
          <button type="button" class="hp-a11y-btn" data-font-scale="1" title="Letra normal">A</button>
          <button type="button" class="hp-a11y-btn" data-font-scale="1.12" title="Aumentar letra">A+</button>
        </div>
      </div>
    </div>
  </div>

  <header class="hp-brandbar">
    <div class="hp-container hp-brandbar__inner">
      <div class="hp-brand-logos">
        <a href="/index.html" class="hp-logo-main" aria-label="Healthy Portal Inicio">
          <span class="hp-logo-mark" aria-hidden="true">HP</span>
          <span class="hp-logo-text">
            <span class="hp-logo-text__title">HEALTHY PORTAL</span>
            <span class="hp-logo-text__sub">${bi('Bienestar y Beneficios Sociales', 'Wellness & Social Benefits')}</span>
          </span>
        </a>
        <span class="hp-logo-divider" aria-hidden="true"></span>
        <a href="/healthypay/index.html" class="hp-logo-partner" title="Cuenta y Tarjeta Digital HealthyPay">
          <span>HealthyPay</span> Card
        </a>
      </div>
      <nav class="hp-segments" aria-label="Segmentos de afiliados">
        ${segmentTabs}
      </nav>
    </div>
  </header>

  <div class="hp-menubar">
    <div class="hp-container hp-menubar__inner">
      <nav class="hp-nav" aria-label="Categorías principales">
        <div class="hp-nav__item">
          <a href="/index.html" class="hp-nav__trigger ${homeActive}">
            <span aria-hidden="true">🏠</span>
            ${bi('Inicio', 'Home')}
          </a>
        </div>
        ${navItems}
      </nav>
      <div class="hp-menubar__actions">
        <button type="button" class="hp-btn-gemini-nav" data-open-gemini-search="true">
          ${bi('✨ Gemini Suite (5 Casos)', '✨ Gemini Suite (5 Cases)')}
        </button>
        <button type="button" class="hp-btn-directory" data-open-directory="true">
          ${bi('🗺️ Todas las Páginas (85)', '🗺️ All Pages (85)')}
        </button>
        <a href="/my-portal/index.html" class="hp-btn-portal">
          <span>👤 ${bi('Mi Portal', 'My Portal')}</span>
        </a>
      </div>
    </div>
  </div>`;
}

function renderFooter() {
  return `
  <footer class="hp-footer">
    <div class="hp-container">
      <div class="hp-footer__grid">
        <div>
          <div class="hp-logo-main" style="margin-bottom: 1rem;">
            <span class="hp-logo-mark" aria-hidden="true">HP</span>
            <span class="hp-logo-text">
              <span class="hp-logo-text__title">HEALTHY PORTAL</span>
              <span class="hp-logo-text__sub">${bi('Seguridad Social y Bienestar', 'Social Security & Wellbeing')}</span>
            </span>
          </div>
          <p style="font-size: 0.88rem; color: rgba(255,255,255,0.82); margin: 0 0 1rem;">
            ${bi(
              'Acompañando a más de 4 millones de trabajadores, pensionados y familias en todo el país con salud preventiva accesible, créditos sociales, gestión de licencias médicas, ahorro y turismo sustentable.',
              'Empowering over 4 million workers, retirees, and families nationwide with accessible health screenings, social credits, medical leave management, savings, and sustainable tourism.'
            )}
          </p>
          <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
            <a href="/help-center/mobile-app.html" class="hp-topbar__badge">📱 App Store</a>
            <a href="/help-center/mobile-app.html" class="hp-topbar__badge">🤖 Google Play</a>
            <a href="/healthypay/index.html" class="hp-topbar__badge">💳 HealthyPay</a>
          </div>
        </div>

        <div>
          <h3 class="hp-footer__heading">${bi('Conoce Healthy', 'About Healthy')}</h3>
          <ul class="hp-footer__list">
            <li><a href="/about-healthy/index.html">${bi('Sobre Nosotros (Quiénes Somos)', 'About Us (Who We Are)')}</a></li>
            <li><a href="/investors/index.html">${bi('Relación con Inversionistas', 'Investor Relations')}</a></li>
            <li><a href="/about-healthy/transparency-and-privacy.html">${bi('Información Pública y Transparencia', 'Public Information & Transparency')}</a></li>
            <li><a href="/about-healthy/transparency-and-privacy.html">${bi('Aviso de Privacidad y Protección de Datos', 'Privacy Notice & Data Protection')}</a></li>
            <li><a href="/about-healthy/ethics-line.html">${bi('Línea Ética y Cumplimiento', 'Ethics Line & Compliance')}</a></li>
            <li><a href="/about-healthy/sustainability.html">${bi('Sustentabilidad y Pacto Global', 'Sustainability & Global Compact')}</a></li>
            <li><a href="/about-healthy/careers-and-suppliers.html">${bi('Trabaja en Healthy Portal', 'Work at Healthy Portal')}</a></li>
          </ul>
        </div>

        <div>
          <h3 class="hp-footer__heading">${bi('Portales y Normativa', 'Portals & Regulatory')}</h3>
          <ul class="hp-footer__list">
            <li><a href="/former-members/index.html">${bi('Consulta tu Fondo de Beneficios', 'Check Your Member Benefit Fund')}</a></li>
            <li><a href="/about-healthy/careers-and-suppliers.html">${bi('Portal de Proveedores', 'Suppliers Portal')}</a></li>
            <li><a href="/about-healthy/careers-and-suppliers.html">${bi('Consulta Boletas Electrónicas Emitidas', 'Check Issued Electronic Receipts')}</a></li>
            <li><a href="/about-healthy/careers-and-suppliers.html">${bi('Bases Legales y Promociones', 'Legal Terms & Promotions')}</a></li>
            <li><a href="/credits/redec.html">${bi('Registro de Deuda Consolidada (REDEC)', 'Consolidated Debt Registry (REDEC)')}</a></li>
            <li><a href="/credits/excess-payment-refund.html">${bi('Devolución de Pagos en Exceso', 'Excess Payment Refunds')}</a></li>
          </ul>
        </div>

        <div>
          <h3 class="hp-footer__heading">${bi('Contacto y Canales de Atención', 'Contact & Service Channels')}</h3>
          <ul class="hp-footer__list">
            <li><a href="/help-center/index.html">${bi('Centro de Ayuda y Preguntas Frecuentes', 'Help Center & FAQs')}</a></li>
            <li><a href="/help-center/branches.html">${bi('Sucursales y Estado en Vivo', 'Branches & Live Status')}</a></li>
            <li><a href="/help-center/schedule-visit.html">${bi('Agenda tu Visita a Sucursal', 'Schedule Your Branch Visit')}</a></li>
            <li><a href="/help-center/virtual-branch.html">${bi('Sucursal Virtual 24/7', 'Virtual Branch 24/7')}</a></li>
            <li><a href="/help-center/self-service-kiosk.html">${bi('Kioscos de Autoatención', 'Self-Service Kiosks')}</a></li>
            <li><a href="/help-center/contact-us.html">${bi('Consultas y Reclamos (1-800-555-0199)', 'Inquiries & Claims (1-800-555-0199)')}</a></li>
          </ul>
        </div>
      </div>

      <div class="hp-footer__legal">
        <span>${bi('© 2026 Healthy Portal Benefits Network. Los programas de bienestar están supervisados por la National Social Welfare Board (www.nswb.org).', '© 2026 Healthy Portal Benefits Network. Member welfare programs are supervised by the National Social Welfare Board (www.nswb.org).')}</span>
        <span>${bi('Ecosistema Digital Healthy Portal | Edición Bilingüe ES / EN', 'Healthy Portal Digital Ecosystem | Bilingual Edition ES / EN')}</span>
      </div>
    </div>
  </footer>`;
}

function renderSimulatorWidget(simulatorType) {
  if (simulatorType === 'credits') {
    return `
    <section class="hp-simulator" aria-label="Simulador Interactivo de Crédito Social">
      <span class="hp-info-banner__tag">${bi('Calculadora Interactiva', 'Interactive Calculator')}</span>
      <h2 style="margin: 0.25rem 0 0.4rem; color: var(--hp-navy-900);">${bi('Simula tu Crédito Social Healthy', 'Simulate Your Healthy Social Credit')}</h2>
      <p style="margin: 0; font-size: 0.9rem; color: var(--hp-slate-600);">${bi('Calcula al instante tu cuota fija mensual por planilla, Carga Anual Equivalente (CAE / APR) y Costo Total del Crédito.', 'Calculate your fixed monthly payroll installment, Annual Percentage Rate (APR), and total loan cost instantly.')}</p>
      <form id="hp-sim-credit" class="hp-simulator__grid">
        <div class="hp-field">
          <label for="sim-credit-amount">${bi('Monto Solicitado (USD)', 'Requested Amount (USD)')}</label>
          <input type="number" id="sim-credit-amount" value="3500" min="200" max="50000" step="100" />
        </div>
        <div class="hp-field">
          <label for="sim-credit-months">${bi('Plazo en Cuotas (Meses)', 'Installment Term (Months)')}</label>
          <select id="sim-credit-months">
            ${biOpt('12', '12 Meses', '12 Months', false)}
            ${biOpt('24', '24 Meses', '24 Months', true)}
            ${biOpt('36', '36 Meses', '36 Months', false)}
            ${biOpt('48', '48 Meses', '48 Months', false)}
            ${biOpt('60', '60 Meses', '60 Months', false)}
          </select>
        </div>
        <div class="hp-field">
          <label for="sim-credit-segment">${bi('Segmento de Afiliado', 'Affiliate Segment')}</label>
          <select id="sim-credit-segment">
            ${biOpt('worker', 'Trabajador Activo (Tasa Preferencial)', 'Active Worker (Preferential Rate)', true)}
            ${biOpt('retiree', 'Pensionado Afiliado (Tasa Dorada)', 'Retiree Affiliate (Golden Rate)', false)}
          </select>
        </div>
      </form>
      <div class="hp-simulator__result">
        <div>
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--hp-slate-500); text-transform: uppercase;">${bi('Cuota Mensual Estimada', 'Estimated Monthly Installment')}</div>
          <div class="hp-stat-value" id="sim-credit-monthly">$169 / mes</div>
          <div style="font-size: 0.85rem; color: var(--hp-slate-600);" id="sim-credit-total">Costo Total del Crédito: $4,056</div>
        </div>
        <div style="text-align: right;">
          <div style="font-weight: 800; color: var(--hp-navy-900); margin-bottom: 0.5rem;" id="sim-credit-cae">CAE / APR: 17.90%</div>
          <a href="/my-portal/index.html" class="hp-btn hp-btn--primary">${bi('Solicitar en Mi Portal →', 'Apply in My Portal →')}</a>
        </div>
      </div>
    </section>`;
  }

  if (simulatorType === 'medical-leave') {
    return `
    <section class="hp-simulator" aria-label="Calculadora Interactiva de Subsidio por Licencia Médica">
      <span class="hp-info-banner__tag">${bi('Estimador de Subsidio', 'Subsidy Estimator')}</span>
      <h2 style="margin: 0.25rem 0 0.4rem; color: var(--hp-navy-900);">${bi('Calcula el Pago de tu Subsidio por Licencia Médica', 'Calculate Your Medical Leave Subsidy Payment')}</h2>
      <p style="margin: 0; font-size: 0.9rem; color: var(--hp-slate-600);">${bi('Las licencias de 11 días o más se pagan desde el Día 1; las de 10 días o menos aplican los 3 días de carencia legal.', 'Leaves of 11+ days pay from Day 1; leaves of 10 days or fewer apply the statutory 3-day waiting period.')}</p>
      <form id="hp-sim-leave" class="hp-simulator__grid">
        <div class="hp-field">
          <label for="sim-leave-salary">${bi('Remuneración Neta Mensual Promedio (USD)', 'Average Net Monthly Salary (USD)')}</label>
          <input type="number" id="sim-leave-salary" value="1500" min="300" max="15000" step="50" />
        </div>
        <div class="hp-field">
          <label for="sim-leave-days">${bi('Días de Reposo Indicados', 'Prescribed Leave Days')}</label>
          <input type="number" id="sim-leave-days" value="14" min="1" max="180" step="1" />
        </div>
        <div class="hp-field">
          <label for="sim-leave-type">${bi('Tipo de Licencia', 'Leave Category')}</label>
          <select id="sim-leave-type">
            ${biOpt('common', 'Tipo 1 — Enfermedad o Accidente Común', 'Type 1 — Common Illness or Recovery', true)}
            ${biOpt('maternity', 'Tipo 3 / 4 — Maternal o Cuidado del Niño (Pago desde Día 1)', 'Type 3 / 4 — Maternity or Child Care (Paid from Day 1)', false)}
          </select>
        </div>
      </form>
      <div class="hp-simulator__result">
        <div>
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--hp-slate-500); text-transform: uppercase;">${bi('Subsidio Total Estimado a Pagar', 'Estimated Total Subsidy Payout')}</div>
          <div class="hp-stat-value" id="sim-leave-payout">$700</div>
          <div style="font-size: 0.85rem; color: var(--hp-slate-600);" id="sim-leave-paiddays">14 días pagaderos (Subsidio diario: $50)</div>
        </div>
        <a href="/my-portal/index.html" class="hp-btn hp-btn--primary">${bi('Consultar Estado en Mi Portal →', 'Track Claim in My Portal →')}</a>
      </div>
    </section>`;
  }

  if (simulatorType === 'insurance') {
    return `
    <section class="hp-simulator" aria-label="Cotizador Interactivo de Seguros">
      <span class="hp-info-banner__tag">${bi('Cotización Instantánea Afiliados', 'Instant Member Quote')}</span>
      <h2 style="margin: 0.25rem 0 0.4rem; color: var(--hp-navy-900);">${bi('Cotiza tu Plan de Protección Healthy', 'Quote Your Healthy Protection Plan')}</h2>
      <form id="hp-sim-insurance" class="hp-simulator__grid">
        <div class="hp-field">
          <label for="sim-ins-plan">${bi('Línea de Seguro', 'Insurance Line')}</label>
          <select id="sim-ins-plan">
            ${biOpt('auto', 'Seguro Automotriz Full Cobertura', 'Full Coverage Auto Insurance', true)}
            ${biOpt('health', 'Seguro de Salud Catastrófico', 'Catastrophic Health Insurance', false)}
            ${biOpt('life', 'Seguro de Vida Familiar Full', 'Full Family Life Insurance', false)}
            ${biOpt('home', 'Seguro Hogar Inteligente', 'Smart Home Protection', false)}
            ${biOpt('travel', 'Seguro de Asistencia en Viaje Mundial', 'Worldwide Travel Assistance', false)}
          </select>
        </div>
        <div class="hp-field">
          <label for="sim-ins-tier">${bi('Nivel de Cobertura', 'Coverage Tier')}</label>
          <select id="sim-ins-tier">
            ${biOpt('standard', 'Plan Esencial', 'Essential Plan', false)}
            ${biOpt('full', 'Plan Full Afiliado (Recomendado)', 'Full Member Plan (Recommended)', true)}
            ${biOpt('elite', 'Plan Élite Deducible Cero', 'Elite Zero-Deductible Plan', false)}
          </select>
        </div>
      </form>
      <div class="hp-simulator__result">
        <div>
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--hp-slate-500); text-transform: uppercase;">${bi('Prima Mensual Preferencial Afiliado', 'Preferential Member Premium')}</div>
          <div class="hp-stat-value" id="sim-ins-price">$49 / mes</div>
          <div style="font-size: 0.85rem; color: var(--hp-slate-600);" id="sim-ins-coverage">Incluye Asistencia 24/7 + Deducible $0 en red HealthyNet, Clinic Dubal y SAI Health</div>
        </div>
        <a href="/my-portal/index.html" class="hp-btn hp-btn--primary">${bi('Contratar en Línea →', 'Enroll Online →')}</a>
      </div>
    </section>`;
  }

  if (simulatorType === 'savings') {
    return `
    <section class="hp-simulator" aria-label="Simulador Interactivo de Ahorro y VRS">
      <span class="hp-info-banner__tag">${bi('Simulador Mis Metas', 'My Goals Simulator')}</span>
      <h2 style="margin: 0.25rem 0 0.4rem; color: var(--hp-navy-900);">${bi('Proyecta tu Ahorro y Bonificación Fiscal del 15%', 'Project Your Savings & Federal Match Bonus')}</h2>
      <form id="hp-sim-savings" class="hp-simulator__grid">
        <div class="hp-field">
          <label for="sim-sav-initial">${bi('Aporte Inicial (USD)', 'Initial Deposit (USD)')}</label>
          <input type="number" id="sim-sav-initial" value="1000" min="0" max="100000" step="100" />
        </div>
        <div class="hp-field">
          <label for="sim-sav-monthly">${bi('Ahorro Mensual (USD)', 'Monthly Contribution (USD)')}</label>
          <input type="number" id="sim-sav-monthly" value="150" min="10" max="5000" step="10" />
        </div>
        <div class="hp-field">
          <label for="sim-sav-years">${bi('Horizonte de Inversión (Años)', 'Investment Horizon (Years)')}</label>
          <select id="sim-sav-years">
            ${biOpt('1', '1 Año', '1 Year', false)}
            ${biOpt('3', '3 Años', '3 Years', false)}
            ${biOpt('5', '5 Años', '5 Years', true)}
            ${biOpt('10', '10 Años', '10 Years', false)}
          </select>
        </div>
      </form>
      <div class="hp-simulator__result">
        <div>
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--hp-slate-500); text-transform: uppercase;">${bi('Saldo Proyectado de tu Meta', 'Projected Goal Balance')}</div>
          <div class="hp-stat-value" id="sim-sav-projected">$13,260</div>
          <div style="font-size: 0.85rem; color: var(--hp-slate-600);" id="sim-sav-bonus">Incluye Bonificación Fiscal estimada del 15%: $1,350</div>
        </div>
        <a href="/my-portal/index.html" class="hp-btn hp-btn--primary">${bi('Abrir Cuenta Mis Metas →', 'Open My Goals Account →')}</a>
      </div>
    </section>`;
  }

  if (simulatorType === 'social-support') {
    return `
    <section class="hp-simulator" aria-label="Calculadora de Tramo de Asignación Familiar">
      <span class="hp-info-banner__tag">${bi('Consulta de Tramo Legal', 'Statutory Tier Lookup')}</span>
      <h2 style="margin: 0.25rem 0 0.4rem; color: var(--hp-navy-900);">${bi('Calcula tu Asignación Familiar Mensual', 'Calculate Your Monthly Family Allowance')}</h2>
      <form id="hp-sim-social" class="hp-simulator__grid">
        <div class="hp-field">
          <label for="sim-soc-income">${bi('Ingreso Mensual Imponible (USD)', 'Monthly Taxable Income (USD)')}</label>
          <input type="number" id="sim-soc-income" value="680" min="200" max="5000" step="20" />
        </div>
        <div class="hp-field">
          <label for="sim-soc-deps">${bi('Cargas Familiares Acreditadas', 'Registered Family Dependents')}</label>
          <input type="number" id="sim-soc-deps" value="2" min="1" max="10" step="1" />
        </div>
      </form>
      <div class="hp-simulator__result">
        <div>
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--hp-slate-500); text-transform: uppercase;">${bi('Pago Mensual de Asignación Familiar', 'Monthly Family Allowance Payout')}</div>
          <div class="hp-stat-value" id="sim-soc-allowance">$28 / mes</div>
          <div style="font-size: 0.85rem; color: var(--hp-slate-600);" id="sim-soc-tranche">Tramo B (Asignación Legal Intermedia) por 2 carga(s) acreditada(s)</div>
        </div>
        <a href="/social-support/family-dependents.html" class="hp-btn hp-btn--primary">${bi('Acreditar Cargas →', 'Register Dependents →')}</a>
      </div>
    </section>`;
  }

  return '';
}

function wrapDocument({ title, description, activeSegmentId, activeCategoryId, bodyContent }) {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; object-src 'self'; frame-src 'self'; script-src 'self';" />
  <title>${escapeHtml(title)} | Healthy Portal</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/assets/css/styles.css" />
</head>
<body>
  ${renderHeader(activeSegmentId, activeCategoryId)}
  <main id="main-content">
    ${bodyContent}
  </main>
  ${renderDirectoryModal()}
  ${renderFooter()}
  <script src="/assets/js/portal-data.js"></script>
  <script src="/assets/js/spanish-docs-corpus.js"></script>
  <script src="/assets/js/gemini-search-engine.js"></script>
  <script src="/assets/js/gemini-enterprise-cases.js"></script>
  <script src="/assets/js/app.js"></script>
</body>
</html>`;
}

function generateHomePage() {
  const bodyContent = `
  <!-- 1. Lusion-Inspired Editorial Statement + Framed 3D Stage Hero -->
  <section class="hp-hero" aria-label="Anuncios Destacados">
    <div class="hp-container">
      <div class="hp-lusion-editorial">
        <div class="hp-lusion-editorial__brand">
          <strong>HEALTHY PORTAL</strong>
          <span>${bi('Seguridad Social Interactiva y Bienestar', 'Interactive Social Security & Wellbeing')}</span>
        </div>
        <p class="hp-lusion-editorial__headline">
          ${bi(
            'Conectamos a más de 4 millones de trabajadores, pensionados y familias con salud preventiva de última generación, créditos sociales y bienestar sustentable.',
            'We connect over 4 million workers, retirees, and families with next-generation preventive health, social credits, and sustainable wellbeing.'
          )}
        </p>
      </div>

      <div class="hp-hero__stage">
        <canvas class="hp-lusion-canvas" data-lusion-canvas="true" aria-hidden="true"></canvas>

        <div class="hp-hero__slide is-active">
          <div>
            <span class="hp-hero__kicker">${bi('Octubre de Prevención y Bienestar', 'October Prevention & Wellness')}</span>
            <h1 class="hp-hero__title">${bi('¡SI LA SALUD ES LA META, ESTAMOS CONTIGO!', 'IF HEALTH IS THE GOAL, WE ARE WITH YOU!')}</h1>
            <p class="hp-hero__subtitle">
              ${bi(
                'Disfruta de Chequeos Médicos Preventivos a costo $0 en HealthyNet, Clinic Dubal y SAI Health + hasta 35% de descuento en corridas deportivas y clubes en todo el país.',
                'Enjoy $0 Preventive Medical Screenings at HealthyNet, Clinic Dubal, and SAI Health + up to 35% off outdoor running events and sports clubs across the country.'
              )}
            </p>
            <div class="hp-hero__ctas">
              <a href="/benefits/index.html" class="hp-btn hp-btn--gold">${bi('Descubrir Beneficios del Mes →', 'Discover Monthly Benefits →')}</a>
              <a href="/benefits/waiting-list-plan.html" class="hp-btn hp-btn--outline-white">${bi('Plan de Listas de Espera', 'Waiting List Resolution Plan')}</a>
            </div>
          </div>
          <div class="hp-hero__visual">
            <div class="hp-hero__visual-card">
              <span class="hp-info-banner__tag">${bi('Pase de Salud Afiliado', 'Member Health Pass')}</span>
              <h2 style="margin: 0.35rem 0 0.5rem; font-size: 1.35rem; color: var(--hp-navy-900);">${bi('Chequeos Preventivos a $0 + Ahorro en Farmacia', '$0 Preventive Checkups + Pharmacy Savings')}</h2>
              <p style="margin: 0 0 1rem; font-size: 0.9rem; color: var(--hp-slate-600);">
                ${bi(
                  'Presenta tu Member ID en clínicas en convenio y sucursales de Pharmacy Red Wall para activar tu cobertura inmediata.',
                  'Present your Member ID at partner clinics and Pharmacy Red Wall locations to activate your instant member coverage.'
                )}
              </p>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; font-size: 0.85rem; font-weight: 700; color: var(--hp-blue-600);">
                <div>✓ ${bi('Mamografía y Laboratorio $0', '$0 Mammography & Lab Panel')}</div>
                <div>✓ ${bi('Hasta 40% Dcto. Farmacia', 'Up to 40% Off Pharmacy')}</div>
                <div>✓ ${bi('Telemedicina $1.50 24/7', '$1.50 Telemedicine 24/7')}</div>
                <div>✓ ${bi('Descuento Dental y Óptica', 'Dental & Optical Discounts')}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="hp-hero__slide">
          <div>
            <span class="hp-hero__kicker">${bi('Premios de Excelencia Académica 2026', 'Academic Excellence Awards 2026')}</span>
            <h1 class="hp-hero__title">${bi('PREMIAMOS EL ESFUERZO EDUCATIVO DE TU FAMILIA', "REWARDING YOUR FAMILY'S EDUCATIONAL EFFORT")}</h1>
            <p class="hp-hero__subtitle">
              ${bi(
                'Postula hoy a los reconocimientos de Admisión Universitaria SER y Educación Superior. Gana notebooks, equipamiento tecnológico y becas anuales de arancel.',
                'Apply today for SER University Admission and Higher Education recognitions. Win laptops, technological equipment, and annual tuition scholarships.'
              )}
            </p>
            <div class="hp-hero__ctas">
              <a href="/benefits/education-and-academic-excellence.html" class="hp-btn hp-btn--gold">${bi('Postular a Becas →', 'Apply for Scholarships →')}</a>
              <a href="/credits/higher-education-credit.html" class="hp-btn hp-btn--outline-white">${bi('Crédito Educación Superior', 'Higher Education Credit')}</a>
            </div>
          </div>
          <div class="hp-hero__visual">
            <div class="hp-hero__visual-card">
              <span class="hp-info-banner__tag">${bi('Healthy Academy y Educación', 'Healthy Academy & Education')}</span>
              <h2 style="margin: 0.35rem 0 0.5rem; font-size: 1.35rem; color: var(--hp-navy-900);">${bi('Más de 4,500 Premios Estudiantiles Disponibles', 'Over 4,500 Student Awards Available')}</h2>
              <p style="margin: 0 0 1rem; font-size: 0.9rem; color: var(--hp-slate-600);">
                ${bi(
                  'Abierto para trabajadores, pensionados y cargas estudiantiles acreditadas en institutos técnicos y universidades.',
                  'Open to workers, retirees, and registered student dependents across technical institutes and universities.'
                )}
              </p>
              <a href="/benefits/education-and-academic-excellence.html" class="hp-card__link">${bi('Revisar requisitos de notas y plazos →', 'Check GPA requirements & deadlines →')}</a>
            </div>
          </div>
        </div>

        <div class="hp-hero__slide">
          <div>
            <span class="hp-hero__kicker">${bi('Cultura y Panoramas', 'Culture & Panoramas')}</span>
            <h1 class="hp-hero__title">${bi('¡TU PRÓXIMA SALIDA CULTURAL TIENE HASTA 25% DE DESCUENTO!', 'YOUR NEXT CULTURAL OUTING HAS UP TO 25% OFF!')}</h1>
            <p class="hp-hero__subtitle">
              ${bi(
                'Elige tu obra favorita en Teather Moon o el Starlight Grand Theater en New York, o reserva una estadía en Temporada Baja en nuestros 24 resorts.',
                'Choose your favorite play at Teather Moon or the Starlight Grand Theater in New York, or book a Low Season stay at our 24 nature resorts.'
              )}
            </p>
            <div class="hp-hero__ctas">
              <a href="/benefits/culture-and-events.html" class="hp-btn hp-btn--gold">${bi('Explorar Cultura y Entradas →', 'Explore Culture & Tickets →')}</a>
              <a href="/tourism/low-season-offers.html" class="hp-btn hp-btn--outline-white">${bi('Reservar Turismo Temporada Baja', 'Book Low Season Tourism')}</a>
            </div>
          </div>
          <div class="hp-hero__visual">
            <div class="hp-hero__visual-card">
              <span class="hp-info-banner__tag">${bi('Turismo y Panoramas', 'Tourism & Panoramas')}</span>
              <h2 style="margin: 0.35rem 0 0.5rem; font-size: 1.35rem; color: var(--hp-navy-900);">${bi('Hoteles, Cabañas y Cajas de Experiencias', 'Hotels, Cabins & Experience Boxes')}</h2>
              <p style="margin: 0 0 1rem; font-size: 0.9rem; color: var(--hp-slate-600);">
                ${bi(
                  'Hasta 35% de descuento en temporada baja en Lake Tahoe, Aspen, Sedona y Santa Barbara con hasta 12 cuotas sin interés.',
                  'Up to 35% off low-season bookings at Lake Tahoe, Aspen, Sedona, and Santa Barbara with up to 12 interest-free installments.'
                )}
              </p>
              <a href="/tourism/index.html" class="hp-card__link">${bi('Explorar los 24 destinos en EE. UU. →', 'Explore all 24 US destinations →')}</a>
            </div>
          </div>
        </div>

        <div class="hp-hero__controls" aria-label="Controles del carrusel">
          <button type="button" class="hp-carousel-btn" id="hp-hero-prev" aria-label="Anterior">‹</button>
          <span class="hp-carousel-counter" id="hp-hero-counter">1 / 3</span>
          <button type="button" class="hp-carousel-btn" id="hp-hero-next" aria-label="Siguiente">›</button>
        </div>
      </div>

      <div class="hp-lusion-crossbar" aria-hidden="true">
        <span class="hp-lusion-crossbar__plus">+</span>
        <span class="hp-lusion-crossbar__plus">+</span>
        <span>${bi('DESLIZA PARA EXPLORAR', 'SCROLL TO EXPLORE')}</span>
        <span class="hp-lusion-crossbar__plus">+</span>
        <span class="hp-lusion-crossbar__plus">+</span>
      </div>
    </div>
  </section>

  <!-- 2. 5 Floating Quick-Action Cards (ds-direct-access) -->
  <section class="hp-quick-actions" aria-label="Accesos directos">
    <div class="hp-container">
      <div class="hp-quick-actions__grid">
        <a href="/insurance/auto-insurance.html" class="hp-quick-card">
          <span class="hp-quick-card__icon" aria-hidden="true">🛡️</span>
          <div>
            <div class="hp-quick-card__title">${bi('Cotiza tu Seguro', 'Quote Your Insurance')}</div>
            <div class="hp-quick-card__sub">${bi('Auto, Salud, Vida y Hogar', 'Auto, Health, Life & Home')}</div>
          </div>
        </a>
        <a href="/medical-leave/index.html" class="hp-quick-card">
          <span class="hp-quick-card__icon" aria-hidden="true">🩺</span>
          <div>
            <div class="hp-quick-card__title">${bi('Gestiona tu Licencia Médica', 'Manage Medical Leave')}</div>
            <div class="hp-quick-card__sub">${bi('Estado, Documentos y Pago', 'Status, Documents & Payout')}</div>
          </div>
        </a>
        <a href="/credits/payment-methods.html" class="hp-quick-card">
          <span class="hp-quick-card__icon" aria-hidden="true">💳</span>
          <div>
            <div class="hp-quick-card__title">${bi('Paga tu Crédito', 'Pay Your Loan')}</div>
            <div class="hp-quick-card__sub">${bi('Pago en Línea con ID y PAC', 'Online ID Payment & Autopay')}</div>
          </div>
        </a>
        <a href="/help-center/schedule-visit.html" class="hp-quick-card">
          <span class="hp-quick-card__icon" aria-hidden="true">📅</span>
          <div>
            <div class="hp-quick-card__title">${bi('Agenda tu Visita', 'Schedule Your Visit')}</div>
            <div class="hp-quick-card__sub">${bi('Hora Prioritaria en Sucursal', 'Priority Branch Appointment')}</div>
          </div>
        </a>
        <a href="/benefits/index.html" class="hp-quick-card">
          <span class="hp-quick-card__icon" aria-hidden="true">🎁</span>
          <div>
            <div class="hp-quick-card__title">${bi('Revisa tus Beneficios', 'Check Your Benefits')}</div>
            <div class="hp-quick-card__sub">${bi('+1,200 Descuentos Afiliados', '+1,200 Member Discounts')}</div>
          </div>
        </a>
      </div>
    </div>
  </section>

  <!-- 2.5 Case 1: Gemini Enterprise Omnichannel Generative Search & Spanish Regulatory PDFs -->
  ${renderGeminiEnterpriseSection(false)}

  <!-- 3. Financial Transparency & Excess Payment Strip -->
  <section class="hp-section" style="padding-top: 0.5rem;">
    <div class="hp-container">
      <div class="hp-info-strip">
        <article class="hp-info-banner">
          <div>
            <span class="hp-info-banner__tag">${bi('Saldos a tu Favor', 'Balances in Your Favor')}</span>
            <h3>${bi('Consulta tu Devolución de Pagos en Exceso', 'Check Your Excess Payment Refunds')}</h3>
            <p>${bi('Revisa si tienes saldos a tu favor por descuentos duplicados de planilla o prepagos de crédito y solicita transferencia electrónica inmediata.', 'Find out if you have credit balances in your favor from duplicate payroll deductions or early loan payoffs and request an instant wire transfer.')}</p>
          </div>
          <a href="/credits/excess-payment-refund.html" class="hp-btn hp-btn--primary" style="align-self: flex-start;">${bi('Consultar Saldo Ahora →', 'Check Balance Now →')}</a>
        </article>

        <article class="hp-info-banner">
          <div>
            <span class="hp-info-banner__tag">${bi('Guía Actualizada 2026', 'Updated 2026 Brochure')}</span>
            <h3>${bi('Guía Completa de Beneficios para Afiliados', 'Complete Member Benefits Guide')}</h3>
            <p>${bi('Explora nuestra guía digital actualizada con todos los beneficios en salud, educación, turismo y apoyo social disponibles para trabajadores y empresas.', 'Browse our updated digital guide featuring all health, education, tourism, and social support benefits available for workers and companies.')}</p>
          </div>
          <a href="/benefits/index.html" class="hp-btn hp-btn--outline" style="align-self: flex-start;">${bi('Ver Guía de Beneficios →', 'View Benefits Guide →')}</a>
        </article>

        <article class="hp-info-banner">
          <div>
            <span class="hp-info-banner__tag">${bi('Ley de Transparencia Crediticia', 'Fair Credit Act')}</span>
            <h3>${bi('Registro de Deuda Consolidada (REDEC)', 'Consolidated Debt Registry (REDEC)')}</h3>
            <p>${bi('Conoce cómo el Registro de Deuda Consolidada protege tus datos financieros y te permite acceder a condiciones crediticias más justas.', 'Learn how the Consolidated Debt Registry protects your financial data and helps you access fairer credit terms.')}</p>
          </div>
          <a href="/credits/redec.html" class="hp-btn hp-btn--outline" style="align-self: flex-start;">${bi('Más Información →', 'More Information →')}</a>
        </article>
      </div>
    </div>
  </section>

  <!-- 4. Featured Highlights -->
  <section class="hp-section hp-section--alt">
    <div class="hp-container">
      <div class="hp-section__header">
        <div>
          <h2 class="hp-section__title">${bi('Programas Más Destacados', 'Most Featured Programs')}</h2>
          <p class="hp-section__subtitle">${bi('Programas diseñados a medida para apoyar tu salud, recreación y seguridad familiar.', 'Tailored programs designed to support your health, recreation, and family security.')}</p>
        </div>
        <a href="/benefits/index.html" class="hp-btn hp-btn--outline">${bi('Ver Todos los Beneficios →', 'View All Featured Benefits →')}</a>
      </div>

      <div class="hp-cards-grid">
        <article class="hp-card">
          <div class="hp-card__media">
            <span class="hp-card__tag">${bi('Nuevo', 'New')}</span>
            <span class="hp-card__emoji" aria-hidden="true">🤝</span>
          </div>
          <div class="hp-card__body">
            <h3 class="hp-card__title">${bi('Programa de Apoyo a Cuidadores', 'Caregivers Support Program')}</h3>
            <p class="hp-card__desc">${bi('Asistencia integral psicológica, legal y de terapia ocupacional para afiliados que cuidan a un familiar con dependencia.', 'Comprehensive psychological, legal, and occupational therapy assistance for members who care for a dependent family member.')}</p>
            <a href="/social-support/caregivers-program.html" class="hp-card__link">${bi('Inscribirse Hoy →', 'Register Today →')}</a>
          </div>
        </article>

        <article class="hp-card">
          <div class="hp-card__media hp-card__media--teal">
            <span class="hp-card__tag">${bi('Hasta 35% Dcto.', 'Up to 35% Off')}</span>
            <span class="hp-card__emoji" aria-hidden="true">🏔️</span>
          </div>
          <div class="hp-card__body">
            <h3 class="hp-card__title">${bi('Escapadas de Turismo en Temporada Baja', 'Low Season Tourism Escapes')}</h3>
            <p class="hp-card__desc">${bi('Planifica tu próxima escapada familiar en nuestros hoteles y complejos de cabañas en EE. UU. con tarifas preferenciales de temporada baja.', 'Plan your next family getaway at our hotels and cabin resorts across the United States with preferential low-season rates.')}</p>
            <a href="/tourism/low-season-offers.html" class="hp-card__link">${bi('Obtener Beneficio →', 'Get Your Benefit →')}</a>
          </div>
        </article>

        <article class="hp-card">
          <div class="hp-card__media">
            <span class="hp-card__tag">100% Online</span>
            <span class="hp-card__emoji" aria-hidden="true">🚗</span>
          </div>
          <div class="hp-card__body">
            <h3 class="hp-card__title">${bi('Seguro Automotriz Full Cobertura', 'Full Coverage Auto Insurance')}</h3>
            <p class="hp-card__desc">${bi('Protege tu vehículo contra colisión, robo y responsabilidad civil con asistencia en ruta 24/7 y auto de reemplazo.', 'Protect your vehicle against collision, theft, and third-party liability with 24/7 roadside assistance and replacement car.')}</p>
            <a href="/insurance/auto-insurance.html" class="hp-card__link">${bi('Cotizar Seguro →', 'Quote Your Insurance →')}</a>
          </div>
        </article>

        <article class="hp-card">
          <div class="hp-card__media hp-card__media--gold">
            <span class="hp-card__tag">${bi('Nuevo', 'New')}</span>
            <span class="hp-card__emoji" aria-hidden="true">🎭</span>
          </div>
          <div class="hp-card__body">
            <h3 class="hp-card__title">${bi('Tu Caja de Experiencias', 'Your Box of Experiences')}</h3>
            <p class="hp-card__desc">${bi('Experiencias seleccionadas de gastronomía, teatro, spa y aventura en todo el país a precios exclusivos para afiliados.', 'Curated gastronomy, theater, spa, and adventure experiences across the country at exclusive member prices.')}</p>
            <a href="/benefits/culture-and-events.html" class="hp-card__link">${bi('Conocer Más →', 'Learn More →')}</a>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- 5. At Healthy Portal Everyone is Welcome (Affiliation + HealthyPay) -->
  <section class="hp-section">
    <div class="hp-container">
      <div class="hp-section__header">
        <div>
          <h2 class="hp-section__title">${bi('En Healthy Portal Todos Son Bienvenidos', 'At Healthy Portal Everyone Is Welcome')}</h2>
          <p class="hp-section__subtitle">${bi('Consulta tu estado de afiliación al instante o descubre cómo Empresas y Pensionados pueden afiliarse 100% en línea.', 'Check your affiliation status instantly or discover how Companies and Retirees can join 100% online.')}</p>
        </div>
      </div>

      <div class="hp-affiliation-grid">
        <div class="hp-affiliation-box">
          <span class="hp-info-banner__tag">${bi('Consulta Instantánea de Afiliación', 'Instant Affiliation Lookup')}</span>
          <h3 style="margin: 0.4rem 0 0.5rem; font-size: 1.35rem; color: var(--hp-navy-900);">${bi('Revisa si Estás Afiliado a Healthy Portal', 'Check If You Are Affiliated with Healthy Portal')}</h3>
          <p style="margin: 0 0 1rem; font-size: 0.92rem; color: var(--hp-slate-600);">
            ${bi(
              'Ingresa tu Member ID / SSN para verificar tu afiliación activa como trabajador o pensionado, tramo de asignación familiar y devoluciones de pagos en exceso disponibles.',
              'Enter your Member ID / SSN to verify your active worker or retiree membership, family allowance tier, and available excess payment refunds.'
            )}
          </p>
          <form id="hp-affiliation-form" style="display:flex; gap:0.75rem; flex-wrap:wrap; margin-bottom: 1rem;">
            <input
              type="text"
              id="hp-rut-input"
              aria-label="Ingresa tu Member ID o SSN"
              placeholder="Ingresa tu Member ID (ej. HP-849201-US)"
              data-placeholder-es="Ingresa tu Member ID (ej. HP-849201-US)"
              data-placeholder-en="Enter Member ID (e.g. HP-849201-US)"
              style="flex:1; min-width:220px; padding:0.75rem 1rem; border-radius:999px; border:1px solid var(--hp-slate-300); font-size:0.95rem;"
            />
            <button type="submit" class="hp-btn hp-btn--primary">${bi('Consultar Estado →', 'Check Status →')}</button>
          </form>
          <p id="hp-affiliation-result" style="font-size: 0.88rem; font-weight: 700; margin: 0 0 1.25rem; min-height: 1.3rem;"></p>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; border-top: 1px solid var(--hp-slate-200); padding-top: 1.25rem;">
            <div style="background: var(--hp-blue-50); padding: 1rem; border-radius: var(--hp-radius-md);">
              <h4 style="margin: 0 0 0.35rem; color: var(--hp-navy-900);">🏢 ${bi('Empresas', 'Companies')}</h4>
              <p style="margin: 0 0 0.65rem; font-size: 0.84rem; color: var(--hp-slate-600);">${bi('Organizaciones privadas, autónomas o del sector público pueden afiliarse y activar todos los beneficios para sus equipos.', 'Private, autonomous, or public sector organizations can affiliate and unlock full workforce benefits.')}</p>
              <a href="/companies/index.html" class="hp-card__link" style="font-size:0.84rem;">${bi('Afiliar Empresa →', 'Affiliate Company →')}</a>
            </div>
            <div style="background: var(--hp-blue-50); padding: 1rem; border-radius: var(--hp-radius-md);">
              <h4 style="margin: 0 0 0.35rem; color: var(--hp-navy-900);">👵 ${bi('Pensionados', 'Retirees')}</h4>
              <p style="margin: 0 0 0.65rem; font-size: 0.84rem; color: var(--hp-slate-600);">${bi('Afiliarse ahora es más rápido y 100% en línea. Accede a beneficios exclusivos en salud, farmacias y viajes.', 'Joining is now faster and 100% online. Access exclusive healthcare, pharmacy, and travel benefits.')}</p>
              <a href="/retirees/index.html" class="hp-card__link" style="font-size:0.84rem;">${bi('Afiliarse como Pensionado →', 'Affiliate as Retiree →')}</a>
            </div>
          </div>
        </div>

        <div class="hp-healthypay-banner">
          <div>
            <span class="hp-megamenu__promo-tag">${bi('Tarjeta Digital HealthyPay', 'HealthyPay Digital Card')}</span>
            <h3 style="font-size: 1.65rem; margin: 0.4rem 0 0.75rem;">${bi('Tu Cuenta Digital con $0 Comisión Conectada a Todos tus Beneficios', 'Your Zero-Fee Digital Account Connected to All Your Benefits')}</h3>
            <p style="font-size: 0.95rem; opacity: 0.92; margin: 0 0 1.25rem;">
              ${bi(
                'Recibe más rápido tus subsidios de Licencia Médica, Asignaciones Familiares y devoluciones de Pagos en Exceso. Compra en línea e internacionalmente con tu Mastercard virtual y física con $0 costo de mantención.',
                'Receive your Medical Leave subsidies, Family Allowances, and Excess Payment refunds faster. Shop online and internationally with your virtual and physical Mastercard with $0 maintenance fee.'
              )}
            </p>
            <ul style="padding-left: 1.2rem; margin: 0 0 1.5rem; font-size: 0.9rem; opacity: 0.92;">
              <li>${bi('Transferencias gratuitas hacia todos los bancos', 'Free transfers between all banks')}</li>
              <li>${bi('Cashback en Pharmacy Red Wall, supermercados y cuentas de energía', 'Cashback at Pharmacy Red Wall, supermarkets, and home energy')}</li>
              <li>${bi('Bloqueo instantáneo y control de PIN desde la app', 'Instant card lock & PIN control in the app')}</li>
            </ul>
          </div>
          <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
            <a href="/healthypay/index.html" class="hp-btn hp-btn--gold">${bi('Descargar HealthyPay →', 'Download HealthyPay →')}</a>
            <a href="/medical-leave/payment-methods.html" class="hp-btn hp-btn--outline-white">${bi('Vincular Pago de Licencias', 'Link Medical Leave Payouts')}</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 6. Digital Channels -->
  <section class="hp-section hp-section--alt">
    <div class="hp-container">
      <div class="hp-section__header">
        <div>
          <h2 class="hp-section__title">${bi('Ahorra Tiempo Eligiendo Nuestros Canales Digitales', 'Save Time by Choosing Our Digital Channels')}</h2>
          <p class="hp-section__subtitle">${bi('Realiza el 100% de tus consultas, simulaciones y canjes de beneficios desde donde estés.', 'Complete 100% of your inquiries, simulations, and benefit redemptions from wherever you are.')}</p>
        </div>
      </div>

      <div class="hp-channels-grid">
        <article class="hp-card">
          <div class="hp-card__body">
            <span class="hp-info-banner__tag">iOS &amp; Android</span>
            <h3 class="hp-card__title">📱 ${bi('App Móvil More Healthy', 'More Healthy Mobile App')}</h3>
            <p class="hp-card__desc">${bi('Simula y solicita Créditos Sociales, sube documentos de licencias médicas y activa códigos de descuento para Pharmacy Red Wall y cines en tu teléfono.', 'Simulate and request Social Credits, upload medical leave documents, and activate Pharmacy Red Wall and cinema discount codes on your phone.')}</p>
            <a href="/help-center/mobile-app.html" class="hp-card__link">${bi('Descargar la App →', 'Download the App →')}</a>
          </div>
        </article>

        <article class="hp-card">
          <div class="hp-card__body">
            <span class="hp-info-banner__tag">${bi('Acceso Web 24/7', '24/7 Web Access')}</span>
            <h3 class="hp-card__title">💻 ${bi('Sucursal Virtual en Línea', 'Online Virtual Branch')}</h3>
            <p class="hp-card__desc">${bi('Ingresa a Mi Portal desde tu computador o tablet para descargar certificados de afiliación, actualizar datos bancarios y pagar cuotas.', 'Access My Portal from your computer or tablet to download affiliation certificates, update bank details, and pay installments.')}</p>
            <a href="/help-center/virtual-branch.html" class="hp-card__link">${bi('Ir a Sucursal Virtual →', 'Go to Virtual Branch →')}</a>
          </div>
        </article>

        <article class="hp-card">
          <div class="hp-card__body">
            <span class="hp-info-banner__tag">${bi('Terminales Express', 'Express Terminals')}</span>
            <h3 class="hp-card__title">🖥️ ${bi('Kioscos Express de Autoatención', 'Self-Service Express Kiosk')}</h3>
            <p class="hp-card__desc">${bi('Imprime certificados, consulta fechas de pago de licencias médicas y canjea bonos en menos de 60 segundos con verificación biométrica.', 'Print certificates, check medical leave payment dates, and redeem vouchers in under 60 seconds with biometric verification.')}</p>
            <a href="/help-center/self-service-kiosk.html" class="hp-card__link">${bi('Conocer Servicios en Kioscos →', 'Discover Kiosk Services →')}</a>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- 7. Customer Care & Support Cards (4 Columns) -->
  <section class="hp-section">
    <div class="hp-container">
      <div class="hp-support-grid">
        <article class="hp-support-card">
          <div class="hp-support-card__icon" aria-hidden="true">❓</div>
          <h3 style="margin: 0 0 0.4rem; color: var(--hp-navy-900);">${bi('Centro de Ayuda', 'Help Center')}</h3>
          <p style="margin: 0 0 1.25rem; font-size: 0.88rem; color: var(--hp-slate-600); flex: 1;">${bi('Obtén respuestas claras para resolver todas tus dudas sobre beneficios, créditos y licencias médicas.', 'Get clear answers to resolve all your questions about benefits, loans, and medical leaves.')}</p>
          <a href="/help-center/index.html" class="hp-btn hp-btn--outline" style="width: 100%;">${bi('Conocer Más', 'Learn More')}</a>
        </article>

        <article class="hp-support-card">
          <div class="hp-support-card__icon" aria-hidden="true">📍</div>
          <h3 style="margin: 0 0 0.4rem; color: var(--hp-navy-900);">${bi('Sucursales', 'Branches')}</h3>
          <p style="margin: 0 0 1.25rem; font-size: 0.88rem; color: var(--hp-slate-600); flex: 1;">${bi('Revisa en vivo el estado de atención, direcciones y horarios de nuestras sucursales en todo EE. UU.', 'Check the live operating status, addresses, and service hours of our nationwide US branches.')}</p>
          <a href="/help-center/branches.html" class="hp-btn hp-btn--outline" style="width: 100%;">${bi('Ir a Sucursales', 'Go to Branches')}</a>
        </article>

        <article class="hp-support-card">
          <div class="hp-support-card__icon" aria-hidden="true">🗓️</div>
          <h3 style="margin: 0 0 0.4rem; color: var(--hp-navy-900);">${bi('Agendamiento', 'Appointments')}</h3>
          <p style="margin: 0 0 1.25rem; font-size: 0.88rem; color: var(--hp-slate-600); flex: 1;">${bi('Realiza tus trámites en sucursal de forma rápida reservando un bloque horario con anticipación.', 'Complete your branch procedures smoothly by booking a scheduled time slot in advance.')}</p>
          <a href="/help-center/schedule-visit.html" class="hp-btn hp-btn--outline" style="width: 100%;">${bi('Ir a Agendamiento', 'Go to Scheduling')}</a>
        </article>

        <article class="hp-support-card">
          <div class="hp-support-card__icon" aria-hidden="true">💬</div>
          <h3 style="margin: 0 0 0.4rem; color: var(--hp-navy-900);">${bi('Consultas y Reclamos', 'Inquiries & Claims')}</h3>
          <p style="margin: 0 0 1.25rem; font-size: 0.88rem; color: var(--hp-slate-600); flex: 1;">${bi('Ingresa consultas oficiales, sugerencias o reclamos formales y haz seguimiento con tu número de caso.', 'Submit official inquiries, suggestions, or formal claims and track your case number.')}</p>
          <a href="/help-center/contact-us.html" class="hp-btn hp-btn--outline" style="width: 100%;">${bi('Contáctanos', 'Contact Us')}</a>
        </article>
      </div>
    </div>
  </section>

  <!-- 8. Driven by Our Commitment (Sustainability & News) -->
  <section class="hp-section hp-section--alt">
    <div class="hp-container">
      <div class="hp-section__header">
        <div>
          <h2 class="hp-section__title">${bi('Impulsados por Nuestro Compromiso', 'Driven by Our Commitment')}</h2>
          <p class="hp-section__subtitle">${bi('Iniciativas de Conoce Healthy que promueven la acción ambiental, los derechos humanos y el bienestar familiar.', 'Initiatives from About Healthy promoting environmental action, human rights, and family well-being.')}</p>
        </div>
        <a href="/about-healthy/sustainability.html" class="hp-btn hp-btn--outline">${bi('Explorar Conoce Healthy →', 'Explore About Healthy →')}</a>
      </div>

      <div class="hp-cards-grid">
        <article class="hp-card">
          <div class="hp-card__body">
            <span class="hp-info-banner__tag">${bi('Acción Ambiental', 'Environmental Action')}</span>
            <h3 class="hp-card__title">${bi('Nos Sumamos a una Corrida Familiar para Impulsar la Reforestación Nativa', 'We Joined a Family Run to Drive Native Reforestation')}</h3>
            <p class="hp-card__desc">${bi('Participamos en una jornada deportiva familiar que une el bienestar al aire libre con la plantación de árboles nativos en parques nacionales.', 'We participated in a family sports day uniting outdoor wellness with native tree planting across national parks.')}</p>
            <a href="/about-healthy/sustainability.html" class="hp-card__link">${bi('Leer Nota →', 'Read Story →')}</a>
          </div>
        </article>

        <article class="hp-card">
          <div class="hp-card__body">
            <span class="hp-info-banner__tag">${bi('ESG y Gobernanza', 'ESG & Governance')}</span>
            <h3 class="hp-card__title">${bi('Reafirmamos Nuestro Compromiso con el Pacto Global de la ONU', 'Reaffirming Our Commitment to the UN Global Compact')}</h3>
            <p class="hp-card__desc">${bi('Avanzamos en prácticas de gestión alineadas con derechos humanos, estándares laborales, cuidado ambiental y anticorrupción.', 'Advancing management practices aligned with human rights, labor standards, environmental stewardship, and anti-corruption.')}</p>
            <a href="/about-healthy/sustainability.html" class="hp-card__link">${bi('Leer Nota →', 'Read Story →')}</a>
          </div>
        </article>

        <article class="hp-card">
          <div class="hp-card__body">
            <span class="hp-info-banner__tag">${bi('Familia e Infancia', 'Family & Childhood')}</span>
            <h3 class="hp-card__title">${bi('Lanzamos Talleres para Fortalecer la Crianza Positiva', 'Launching Workshops to Strengthen Positive Parenting')}</h3>
            <p class="hp-card__desc">${bi('Herramientas prácticas y orientación de especialistas para acompañar el desarrollo emocional y educativo de niños y adolescentes.', 'Practical tools and specialist guidance to accompany the emotional and educational development of children and adolescents.')}</p>
            <a href="/about-healthy/sustainability.html" class="hp-card__link">${bi('Leer Nota →', 'Read Story →')}</a>
          </div>
        </article>

        <article class="hp-card">
          <div class="hp-card__body">
            <span class="hp-info-banner__tag">${bi('Integridad y Transparencia', 'Integrity & Transparency')}</span>
            <h3 class="hp-card__title">${bi('Línea Ética Confidencial y Portal de Cumplimiento', 'Confidential Ethics Line & Compliance Portal')}</h3>
            <p class="hp-card__desc">${bi('Nuestro canal independiente que garantiza transparencia, cumplimiento normativo y denuncias seguras para afiliados, proveedores y colaboradores.', 'Our independent channel ensuring transparency, regulatory compliance, and safe reporting for members, suppliers, and staff.')}</p>
            <a href="/about-healthy/ethics-line.html" class="hp-card__link">${bi('Acceder a Línea Ética →', 'Access Ethics Line →')}</a>
          </div>
        </article>
      </div>
    </div>
  </section>`;

  const html = wrapDocument({
    title: 'Inicio | Trabajadores',
    description: 'Healthy Portal: Licencias Médicas, Créditos Sociales, Seguros, Ahorro, Turismo, Beneficios y Apoyo Social.',
    activeSegmentId: 'workers',
    activeCategoryId: null,
    bodyContent
  });

  const outFile = path.join(ROOT_DIR, 'index.html');
  fs.writeFileSync(outFile, html, 'utf8');
}

function generateCategoryAndSubpages() {
  const allGroups = [...data.categories, ...data.helpAndCorporateCategories];

  allGroups.forEach((cat) => {
    const activeSegmentId = cat.id === 'about-healthy' ? 'about-healthy' : 'workers';

    cat.subpages.forEach((sub) => {
      const sidebarItems = cat.subpages.map((item) => {
        const isCurrent = item.href === sub.href ? 'is-current' : '';
        return `<li>
          <a href="${escapeHtml(item.href)}" class="hp-sidebar__link ${isCurrent}">
            ${bi(item.title, item.titleEn)}
            ${item.tag ? `<span class="hp-badge-top">${bi(item.tag, item.tagEn)}</span>` : ''}
          </a>
        </li>`;
      }).join('\n');

      const relatedCards = cat.subpages
        .filter((item) => item.href !== sub.href)
        .slice(0, 6)
        .map((item) => {
          return `<article class="hp-card">
            <div class="hp-card__body">
              ${item.tag ? `<span class="hp-info-banner__tag">${bi(item.tag, item.tagEn)}</span>` : '<span class="hp-info-banner__tag">' + bi(cat.title, cat.titleEn) + '</span>'}
              <h3 class="hp-card__title">${bi(item.title, item.titleEn)}</h3>
              <p class="hp-card__desc">${bi(item.summary, item.summaryEn)}</p>
              <a href="${escapeHtml(item.href)}" class="hp-card__link">${bi('Abrir Página →', 'Open Page →')}</a>
            </div>
          </article>`;
        }).join('\n');

      const bodyContent = `
      <section class="hp-page-hero">
        <div class="hp-container">
          <div class="hp-hero__stage" style="min-height: 290px;">
            <canvas class="hp-lusion-canvas" data-lusion-canvas="true" aria-hidden="true"></canvas>
            <div style="position: relative; z-index: 2;">
              <nav class="hp-breadcrumbs" aria-label="Ruta de navegación">
                <a href="/index.html">${bi('Inicio', 'Home')}</a>
                <span>›</span>
                <a href="${escapeHtml(cat.href)}">${bi(cat.title, cat.titleEn)}</a>
                ${!sub.isHub ? `<span>›</span>${bi(sub.title, sub.titleEn)}` : ''}
              </nav>
              <span class="hp-hero__kicker">${bi(cat.title + ' • Healthy Portal', cat.titleEn + ' • Healthy Portal')}</span>
              <h1 class="hp-hero__title" style="font-size: clamp(1.95rem, 3.2vw, 2.75rem); margin: 0 0 0.65rem;">
                ${sub.isHub ? bi(cat.title, cat.titleEn) : bi(sub.title, sub.titleEn)}
              </h1>
              <p class="hp-hero__subtitle" style="margin: 0;">
                ${sub.isHub ? bi(cat.heroSubtitle, cat.heroSubtitleEn) : bi(sub.summary, sub.summaryEn)}
              </p>
            </div>
          </div>
          <div class="hp-lusion-crossbar" aria-hidden="true">
            <span class="hp-lusion-crossbar__plus">+</span>
            <span class="hp-lusion-crossbar__plus">+</span>
            <span>${bi('DESLIZA PARA EXPLORAR • ' + cat.title.toUpperCase(), 'SCROLL TO EXPLORE • ' + (cat.titleEn || cat.title).toUpperCase())}</span>
            <span class="hp-lusion-crossbar__plus">+</span>
            <span class="hp-lusion-crossbar__plus">+</span>
          </div>
        </div>
      </section>

      <div class="hp-container hp-page-layout">
        <aside class="hp-sidebar" aria-label="${escapeHtml(cat.title)} navigation">
          <h2 class="hp-sidebar__title">${bi('Menú ' + cat.title + ' (' + cat.subpages.length + ')', (cat.titleEn || cat.title) + ' Menu (' + cat.subpages.length + ')')}</h2>
          <ul class="hp-sidebar__list">
            ${sidebarItems}
          </ul>
          <div style="margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid var(--hp-slate-200);">
            <a href="/my-portal/index.html" class="hp-btn hp-btn--gold" style="width: 100%; font-size: 0.85rem;">${bi('Gestionar en Mi Portal →', 'Manage in My Portal →')}</a>
          </div>
        </aside>

        <div>
          ${renderSimulatorWidget(cat.simulatorType)}

          <div style="margin-bottom: 2rem;">
            ${renderGeminiEnterpriseSection(true)}
          </div>

          <section style="background: var(--hp-white); border: 1px solid var(--hp-slate-200); border-radius: var(--hp-radius-lg); padding: 2rem; margin-bottom: 2rem; box-shadow: var(--hp-shadow-sm);">
            <span class="hp-info-banner__tag">${bi('Todo lo que Necesitas Saber', 'Everything You Need to Know')}</span>
            <h2 style="margin: 0.35rem 0 0.75rem; color: var(--hp-navy-900);">
              ${bi(sub.title + ' — Guía Paso a Paso y Requisitos', (sub.titleEn || sub.title) + ' — Step-by-Step Guide & Requirements')}
            </h2>
            <p style="color: var(--hp-slate-700); margin: 0 0 1.25rem;">
              ${bi(
                sub.summary + ' A través del ecosistema digital de Healthy Portal (Mi Portal, App More Healthy y HealthyPay), puedes completar este trámite 100% en línea con notificaciones en tiempo real y total transparencia normativa ante la National Social Welfare Board (NSWB).',
                (sub.summaryEn || sub.summary) + ' Through Healthy Portal’s digital ecosystem (My Portal, More Healthy App, and HealthyPay), you can complete this process online with real-time notifications and full National Social Welfare Board (NSWB) regulatory transparency.'
              )}
            </p>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
              <div style="background: var(--hp-blue-50); padding: 1.15rem; border-radius: var(--hp-radius-md); border-left: 4px solid var(--hp-blue-600);">
                <h3 style="margin: 0 0 0.35rem; font-size: 1rem; color: var(--hp-navy-900);">${bi('1. Antes de Comenzar', '1. Before You Start')}</h3>
                <p style="margin: 0; font-size: 0.86rem; color: var(--hp-slate-600);">${bi('Verifica tu Member ID activo, correo electrónico actualizado y cuenta bancaria o HealthyPay registrada en Mi Portal.', 'Verify your active Member ID, updated contact email, and registered bank or HealthyPay account in My Portal.')}</p>
              </div>
              <div style="background: var(--hp-blue-50); padding: 1.15rem; border-radius: var(--hp-radius-md); border-left: 4px solid var(--hp-teal-600);">
                <h3 style="margin: 0 0 0.35rem; font-size: 1rem; color: var(--hp-navy-900);">${bi('2. Tramitación Digital', '2. Digital Processing')}</h3>
                <p style="margin: 0; font-size: 0.86rem; color: var(--hp-slate-600);">${bi('Envía tu solicitud o documentos de respaldo en línea vía Sucursal Virtual o la App More Healthy con validación biométrica.', 'Submit your request or supporting documents online via Virtual Branch or the More Healthy App with biometric validation.')}</p>
              </div>
              <div style="background: var(--hp-blue-50); padding: 1.15rem; border-radius: var(--hp-radius-md); border-left: 4px solid var(--hp-gold-500);">
                <h3 style="margin: 0 0 0.35rem; font-size: 1rem; color: var(--hp-navy-900);">${bi('3. Resolución y Pago', '3. Resolution & Payout')}</h3>
                <p style="margin: 0; font-size: 0.86rem; color: var(--hp-slate-600);">${bi('Recibe confirmación instantánea por SMS/correo y depósito directo en tu cuenta HealthyPay o cuenta bancaria personal.', 'Receive instant SMS/email confirmation and direct deposit into your HealthyPay or personal bank account.')}</p>
              </div>
            </div>

            <div style="display: flex; gap: 0.85rem; flex-wrap: wrap;">
              <a href="/my-portal/index.html" class="hp-btn hp-btn--primary">${bi('Iniciar en Línea en Mi Portal →', 'Start Online in My Portal →')}</a>
              <a href="/help-center/schedule-visit.html" class="hp-btn hp-btn--outline">${bi('Agendar Hora en Sucursal', 'Schedule Branch Appointment')}</a>
              <a href="/help-center/contact-us.html" class="hp-btn hp-btn--outline">${bi('Consultar a un Especialista (1-800-555-0199)', 'Ask a Specialist (1-800-555-0199)')}</a>
            </div>
          </section>

          <section>
            <h2 style="margin: 0 0 1rem; color: var(--hp-navy-900); font-size: 1.35rem;">
              ${bi('Explorar Todas las Páginas de ' + cat.title + ' (2.º Nivel)', 'Explore All ' + (cat.titleEn || cat.title) + ' Pages (2nd-Level Depth)')}
            </h2>
            <div class="hp-cards-grid">
              ${relatedCards}
            </div>
          </section>
        </div>
      </div>`;

      const html = wrapDocument({
        title: `${sub.title} | ${cat.title}`,
        description: sub.summary,
        activeSegmentId,
        activeCategoryId: cat.id,
        bodyContent
      });

      const relPath = sub.href.replace(/^\//, '');
      const fullPath = path.join(ROOT_DIR, relPath);
      fs.mkdirSync(path.dirname(fullPath), { recursive: true });
      fs.writeFileSync(fullPath, html, 'utf8');
    });
  });
}

function generateStandaloneSegmentPages() {
  data.standaloneSegments.forEach((seg) => {
    const isMyPortal = seg.id === 'my-portal';
    const isFormer = seg.id === 'former-members';

    const portalWidget = isMyPortal ? `
      <section class="hp-simulator" style="max-width: 680px; margin-bottom: 2rem;">
        <span class="hp-info-banner__tag">${bi('Autenticación Segura de Afiliados', 'Secure Member Authentication')}</span>
        <h2 style="margin: 0.35rem 0 0.5rem; color: var(--hp-navy-900);">${bi('Ingresa a Mi Portal (Sucursal Virtual)', 'Sign In to My Portal (Virtual Branch)')}</h2>
        <p style="margin: 0 0 1rem; font-size: 0.9rem; color: var(--hp-slate-600);">${bi('Accede a tu panel personal para Trabajadores, Pensionados y Administradores de Empresas.', 'Access your personal dashboard for Workers, Retirees, and Company Administrators.')}</p>
        <form id="hp-affiliation-form" class="hp-simulator__grid">
          <div class="hp-field">
            <label for="hp-rut-input">Member ID / SSN</label>
            <input type="text" id="hp-rut-input" placeholder="HP-849201-US" value="HP-849201-US" />
          </div>
          <div class="hp-field">
            <label for="hp-pass-input">${bi('Clave de Portal o HealthyPass SSO', 'Portal Password or HealthyPass SSO')}</label>
            <input type="password" id="hp-pass-input" value="••••••••••••" />
          </div>
          <div style="display:flex; align-items:flex-end;">
            <button type="submit" class="hp-btn hp-btn--primary" style="width:100%;">${bi('Ingresar de Forma Segura →', 'Sign In Securely →')}</button>
          </div>
        </form>
        <p id="hp-affiliation-result" style="font-weight: 700; margin: 1rem 0 0; font-size: 0.9rem;"></p>
      </section>` : '';

    const formerWidget = isFormer ? `
      <section class="hp-simulator" style="margin-bottom: 2rem;">
        <span class="hp-info-banner__tag">${bi('Consulta de Saldos y Devoluciones Ex-Afiliados', 'Former Member Balance & Refund Lookup')}</span>
        <h2 style="margin: 0.35rem 0 0.5rem; color: var(--hp-navy-900);">${bi('Revisa Saldos de Pagos en Exceso y Créditos Vigentes', 'Check Excess Payment Balances & Active Credits')}</h2>
        <form id="hp-affiliation-form" style="display:flex; gap:0.75rem; flex-wrap:wrap; margin-top:0.75rem;">
          <input
            type="text"
            id="hp-rut-input"
            aria-label="Member ID / SSN"
            placeholder="Ingresa tu Member ID (ej. HP-849201-US)"
            data-placeholder-es="Ingresa tu Member ID (ej. HP-849201-US)"
            data-placeholder-en="Enter your Member ID (e.g. HP-849201-US)"
            style="flex:1; min-width:220px; padding:0.7rem 1rem; border-radius:8px; border:1px solid var(--hp-slate-300);"
          />
          <button type="submit" class="hp-btn hp-btn--primary">${bi('Consultar Saldos →', 'Check Balances →')}</button>
        </form>
        <p id="hp-affiliation-result" style="font-weight: 700; margin: 0.85rem 0 0; font-size: 0.9rem;"></p>
      </section>` : '';

    const categoryCards = data.categories.map((cat) => {
      return `<article class="hp-card">
        <div class="hp-card__body">
          <span class="hp-info-banner__tag">${bi(cat.bannerTag, cat.bannerTagEn)}</span>
          <h3 class="hp-card__title">${bi(cat.title, cat.titleEn)}</h3>
          <p class="hp-card__desc">${bi(cat.bannerDesc, cat.bannerDescEn)}</p>
          <a href="${escapeHtml(cat.href)}" class="hp-card__link">${bi('Explorar ' + cat.title + ' →', 'Explore ' + (cat.titleEn || cat.title) + ' →')}</a>
        </div>
      </article>`;
    }).join('\n');

    const bodyContent = `
    <section class="hp-page-hero">
      <div class="hp-container">
        <div class="hp-hero__stage" style="min-height: 290px;">
          <canvas class="hp-lusion-canvas" data-lusion-canvas="true" aria-hidden="true"></canvas>
          <div style="position: relative; z-index: 2;">
            <nav class="hp-breadcrumbs" aria-label="Ruta de navegación">
              <a href="/index.html">${bi('Inicio', 'Home')}</a>
              <span>›</span>
              ${bi(seg.title, seg.titleEn)}
            </nav>
            <span class="hp-hero__kicker">${bi('Portal de Segmento • ' + seg.title, 'Segment Portal • ' + (seg.titleEn || seg.title))}</span>
            <h1 class="hp-hero__title" style="font-size: clamp(1.95rem, 3.2vw, 2.75rem); margin: 0 0 0.65rem;">
              ${bi(seg.title, seg.titleEn)}
            </h1>
            <p class="hp-hero__subtitle" style="margin: 0;">
              ${bi(seg.heroSubtitle, seg.heroSubtitleEn)}
            </p>
          </div>
        </div>
        <div class="hp-lusion-crossbar" aria-hidden="true">
          <span class="hp-lusion-crossbar__plus">+</span>
          <span class="hp-lusion-crossbar__plus">+</span>
          <span>${bi('DESLIZA PARA EXPLORAR • ' + seg.title.toUpperCase(), 'SCROLL TO EXPLORE • ' + (seg.titleEn || seg.title).toUpperCase())}</span>
          <span class="hp-lusion-crossbar__plus">+</span>
          <span class="hp-lusion-crossbar__plus">+</span>
        </div>
      </div>
    </section>

    <section class="hp-section">
      <div class="hp-container">
        ${portalWidget}
        ${formerWidget}
        ${renderGeminiEnterpriseSection(false)}

        <div style="background: var(--hp-white); border: 1px solid var(--hp-slate-200); border-radius: var(--hp-radius-lg); padding: 2rem; margin-bottom: 2.5rem; box-shadow: var(--hp-shadow-sm);">
          <span class="hp-info-banner__tag">${bi('Soluciones Dedicadas', 'Dedicated Solutions')}</span>
          <h2 style="margin: 0.35rem 0 0.65rem; color: var(--hp-navy-900);">${bi('Resumen de ' + seg.title, 'Overview of ' + (seg.titleEn || seg.title))}</h2>
          <p style="margin: 0 0 1.25rem; color: var(--hp-slate-700);">
            ${bi(seg.summary, seg.summaryEn)}
          </p>
          <div style="display:flex; gap:0.85rem; flex-wrap:wrap;">
            <a href="/my-portal/index.html" class="hp-btn hp-btn--primary">${bi('Ingresar a Sucursal Digital →', 'Enter Digital Branch →')}</a>
            <a href="/help-center/contact-us.html" class="hp-btn hp-btn--outline">${bi('Hablar con un Ejecutivo', 'Speak with an Executive')}</a>
          </div>
        </div>

        <h2 style="margin: 0 0 1.25rem; color: var(--hp-navy-900);">${bi('Categorías y Servicios Disponibles', 'Available Categories & Services')}</h2>
        <div class="hp-cards-grid">
          ${categoryCards}
        </div>
      </div>
    </section>`;

    const html = wrapDocument({
      title: seg.title,
      description: seg.summary,
      activeSegmentId: seg.id,
      activeCategoryId: null,
      bodyContent
    });

    const relPath = seg.href.replace(/^\//, '');
    const fullPath = path.join(ROOT_DIR, relPath);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, html, 'utf8');
  });
}

generateHomePage();
generateCategoryAndSubpages();
generateStandaloneSegmentPages();

// Count generated HTML files
function countHtmlFiles(dir) {
  let count = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) count += countHtmlFiles(p);
    else if (entry.isFile() && entry.name.endsWith('.html')) count++;
  }
  return count;
}

console.log('Generated total HTML pages:', countHtmlFiles(ROOT_DIR));
