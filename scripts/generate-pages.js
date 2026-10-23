/* ==========================================================================
   Healthy Portal Static Site Generator
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
        <a href="${escapeHtml(doc.pdfUrl)}" target="_blank" rel="noopener noreferrer" class="hp-btn hp-btn--gold" style="padding:0.42rem 0.85rem; font-size:0.76rem;">Abrir PDF Oficial ↗</a>
        <a href="${escapeHtml(doc.pdfUrl)}" download class="hp-btn hp-btn--outline-white" style="padding:0.42rem 0.85rem; font-size:0.76rem;">⬇ Descargar</a>
      </div>
    </article>`;
  }).join('\n');

  return `
  <section class="hp-section" id="hp-gemini-enterprise-section" style="padding-top: ${isCompact ? '1rem' : '0.75rem'}; padding-bottom: 1.25rem;" aria-label="Buscador Generativo Gemini Enterprise en Español">
    <div class="hp-container">
      <div class="hp-gemini-hub">
        <div class="hp-gemini-hub__header">
          <div>
            <span class="hp-gemini-badge">✨ GEMINI ENTERPRISE • BUSCADOR GENERATIVO OMNICANAL (CASO 1 — ESPAÑOL)</span>
            <h2 class="hp-gemini-hub__title">Consulta Reglamentos NSWB/MRB, Contratos REDEC, Pólizas y Beneficios en Español</h2>
            <p class="hp-gemini-hub__subtitle">
              Motor de búsqueda generativa conectado a los <strong>4 documentos PDF oficiales en español</strong> y a las <strong>85 páginas de Healthy Portal</strong> con respuestas sintetizadas y citas verificables (artículo y página exacta).
            </p>
          </div>
          <div style="font-family: var(--hp-font-mono); font-size: 0.72rem; color: rgba(240,241,250,0.75); text-align: right;">
            <div>GCP Project: <strong>gemini-enterprise-demo-485114</strong></div>
            <div>Corpus: <strong>4 PDFs Oficiales (ES) + 85 Rutas Web</strong></div>
          </div>
        </div>

        <form id="hp-gemini-search-form" class="hp-gemini-searchbar" role="search">
          <span aria-hidden="true" style="font-size: 1.15rem;">🔎</span>
          <label for="hp-gemini-search-input" class="hp-skip-link">Pregunta en español a Gemini Enterprise</label>
          <input
            type="search"
            id="hp-gemini-search-input"
            class="hp-gemini-searchbar__input"
            placeholder="Pregunta en español: ej. ¿Cómo apelar una licencia rechazada ante MRB y NSWB? ¿Qué cubre REDEC? ¿Deducible $0 en HealthyNet?"
            value=""
          />
          <button type="submit" class="hp-btn hp-btn--gold" style="padding: 0.62rem 1.25rem; font-size: 0.84rem; flex-shrink: 0;">
            ✨ Buscar con Gemini →
          </button>
        </form>

        <div class="hp-gemini-chips" aria-label="Consultas de demostración en español">
          <span style="font-size: 0.75rem; font-weight: 700; color: var(--color-green); text-transform: uppercase; letter-spacing: 0.06em; margin-right: 0.25rem;">Preguntas frecuentes (Demo ES):</span>
          ${promptChips}
        </div>

        <div id="hp-gemini-results" aria-live="polite"></div>

        ${!isCompact ? `
        <div style="margin-top: 1.6rem; padding-top: 1.25rem; border-top: 1px solid rgba(255,255,255,0.12);">
          <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:0.5rem;">
            <h3 style="margin:0; font-size:1rem; color:var(--hp-white);">📚 Biblioteca Oficial de Documentos PDF en Español (Fuente de Grounding para Gemini Enterprise)</h3>
            <span style="font-family:var(--hp-font-mono); font-size:0.72rem; color:var(--color-green);">100% Verificable • PDF-1.4 Nativo</span>
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
      const badge = sub.tag ? `<span class="hp-badge-top">${escapeHtml(sub.tag)}</span>` : '';
      return `<a href="${escapeHtml(sub.href)}" class="hp-megamenu__link" data-directory-item="true">
        <span>${escapeHtml(sub.title)}</span>
        ${badge}
      </a>`;
    }).join('\n');
    return `<div style="margin-bottom: 1.5rem;">
      <h3 style="margin: 0 0 0.6rem; color: var(--hp-navy-900); font-size: 1.05rem; border-bottom: 2px solid var(--hp-blue-100); padding-bottom: 0.35rem;">
        <a href="${escapeHtml(cat.href)}">${escapeHtml(cat.title)}</a>
        <small style="color: var(--hp-slate-500); font-weight: 500; margin-left: 0.4rem;">(${escapeHtml(cat.originalTitle)})</small>
      </h3>
      <div class="hp-megamenu__links">${items}</div>
    </div>`;
  }).join('\n');

  const segmentLinks = data.standaloneSegments.map((seg) => {
    return `<a href="${escapeHtml(seg.href)}" class="hp-megamenu__link hp-megamenu__link--hub" data-directory-item="true">
      <span>${escapeHtml(seg.title)} (${escapeHtml(seg.originalTitle)})</span>
    </a>`;
  }).join('\n');

  return `
  <div class="hp-modal-backdrop" id="hp-directory-modal" role="dialog" aria-modal="true" aria-labelledby="hp-directory-title">
    <div class="hp-modal">
      <div class="hp-modal__header">
        <div>
          <h2 id="hp-directory-title" style="margin: 0; font-size: 1.25rem;">Healthy Portal — Complete 1st &amp; 2nd Level Site Directory</h2>
          <p style="margin: 0.2rem 0 0; font-size: 0.82rem; opacity: 0.88;">All 85 member routes and service portals</p>
        </div>
        <button type="button" id="hp-directory-close" class="hp-btn hp-btn--gold" style="padding: 0.45rem 1rem; font-size: 0.85rem;">Close ✕</button>
      </div>
      <div class="hp-modal__body">
        <div style="margin-bottom: 1.25rem;">
          <label for="hp-directory-search" style="display:block; font-weight:700; font-size:0.85rem; margin-bottom:0.35rem;">Filter pages by keyword:</label>
          <input type="search" id="hp-directory-search" placeholder="Search e.g. Medical Leave, Social Credit, Auto Insurance, Caregivers, REDEC, VRS..." style="width:100%; padding:0.7rem 1rem; border-radius:8px; border:1px solid var(--hp-slate-300); font-size:0.95rem;" />
        </div>
        <div style="margin-bottom: 1.5rem;">
          <h3 style="margin: 0 0 0.6rem; color: var(--hp-navy-900); font-size: 1.05rem;">Primary Portals &amp; Segment Hubs (1st Level)</h3>
          <div class="hp-megamenu__links">
            <a href="/index.html" class="hp-megamenu__link hp-megamenu__link--hub" data-directory-item="true"><span>Workers Home Portal (Active Members)</span></a>
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
    return `<a href="${escapeHtml(seg.href)}" class="hp-segment-link ${isActive}">${escapeHtml(seg.label)}</a>`;
  }).join('\n');

  const navItems = data.categories.map((cat) => {
    const isActive = cat.id === activeCategoryId ? 'is-active' : '';
    const subLinks = cat.subpages.map((sub) => {
      const hubClass = sub.isHub ? 'hp-megamenu__link--hub' : '';
      const badge = sub.tag ? `<span class="hp-badge-top">${escapeHtml(sub.tag)}</span>` : '';
      return `<a href="${escapeHtml(sub.href)}" class="hp-megamenu__link ${hubClass}">
        <span>${escapeHtml(sub.title)}</span>
        ${badge}
      </a>`;
    }).join('\n');

    return `
    <div class="hp-nav__item" data-has-megamenu="true">
      <button type="button" class="hp-nav__trigger ${isActive}" aria-expanded="false">
        <span>${escapeHtml(cat.title)}</span>
        <span class="hp-nav__caret" aria-hidden="true">▾</span>
      </button>
      <div class="hp-megamenu" role="region" aria-label="${escapeHtml(cat.title)} submenu">
        <div class="hp-container hp-megamenu__grid">
          <div class="hp-megamenu__promo">
            <div>
              <span class="hp-megamenu__promo-tag">${escapeHtml(cat.bannerTag)}</span>
              <h3>${escapeHtml(cat.bannerTitle)}</h3>
              <p>${escapeHtml(cat.bannerDesc)}</p>
            </div>
            <a href="${escapeHtml(cat.href)}" class="hp-btn hp-btn--gold" style="align-self: flex-start; padding: 0.55rem 1.15rem; font-size: 0.85rem;">
              Explore ${escapeHtml(cat.title)} →
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
  <a href="#main-content" class="hp-skip-link">Skip to main content</a>
  <div class="hp-topbar">
    <div class="hp-container hp-topbar__inner">
      <div class="hp-topbar__left">
        <span class="hp-topbar__badge">● Live Digital Portal</span>
        <span>Social Security &amp; Family Wellbeing Benefits Network</span>
      </div>
      <div class="hp-topbar__right">
        <a href="/help-center/branches.html" class="hp-topbar__link">📍 Branches</a>
        <a href="/help-center/index.html" class="hp-topbar__link">❓ Help Center</a>
        <div class="hp-a11y-controls" aria-label="Text size controls">
          <button type="button" class="hp-a11y-btn" data-font-scale="0.92" title="Decrease font size">A-</button>
          <button type="button" class="hp-a11y-btn" data-font-scale="1" title="Default font size">A</button>
          <button type="button" class="hp-a11y-btn" data-font-scale="1.12" title="Increase font size">A+</button>
        </div>
      </div>
    </div>
  </div>

  <header class="hp-brandbar">
    <div class="hp-container hp-brandbar__inner">
      <div class="hp-brand-logos">
        <a href="/index.html" class="hp-logo-main" aria-label="Healthy Portal Home">
          <span class="hp-logo-mark" aria-hidden="true">HP</span>
          <span class="hp-logo-text">
            <span class="hp-logo-text__title">HEALTHY PORTAL</span>
            <span class="hp-logo-text__sub">Wellness &amp; Social Benefits</span>
          </span>
        </a>
        <span class="hp-logo-divider" aria-hidden="true"></span>
        <a href="/healthypay/index.html" class="hp-logo-partner" title="HealthyPay Digital Account &amp; Card">
          <span>HealthyPay</span> Card
        </a>
      </div>
      <nav class="hp-segments" aria-label="Audience segments">
        ${segmentTabs}
      </nav>
    </div>
  </header>

  <div class="hp-menubar">
    <div class="hp-container hp-menubar__inner">
      <nav class="hp-nav" aria-label="Main categories">
        <div class="hp-nav__item">
          <a href="/index.html" class="hp-nav__trigger ${homeActive}">
            <span aria-hidden="true">🏠</span>
            <span>Home</span>
          </a>
        </div>
        ${navItems}
      </nav>
      <div class="hp-menubar__actions">
        <button type="button" class="hp-btn-gemini-nav" data-open-gemini-search="true">
          <span>✨ Gemini Search (ES)</span>
        </button>
        <button type="button" class="hp-btn-directory" data-open-directory="true">
          <span>🗺️ All Pages (85)</span>
        </button>
        <a href="/my-portal/index.html" class="hp-btn-portal">
          <span>👤 My Portal</span>
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
              <span class="hp-logo-text__sub">Social Security &amp; Wellbeing</span>
            </span>
          </div>
          <p style="font-size: 0.88rem; color: rgba(255,255,255,0.82); margin: 0 0 1rem;">
            Empowering over 4 million workers, retirees, and families nationwide with accessible health screenings, social credits, medical leave management, savings, and sustainable tourism.
          </p>
          <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
            <a href="/help-center/mobile-app.html" class="hp-topbar__badge">📱 App Store</a>
            <a href="/help-center/mobile-app.html" class="hp-topbar__badge">🤖 Google Play</a>
            <a href="/healthypay/index.html" class="hp-topbar__badge">💳 HealthyPay</a>
          </div>
        </div>

        <div>
          <h3 class="hp-footer__heading">About Healthy</h3>
          <ul class="hp-footer__list">
            <li><a href="/about-healthy/index.html">About Us (Who We Are)</a></li>
            <li><a href="/investors/index.html">Investor Relations</a></li>
            <li><a href="/about-healthy/transparency-and-privacy.html">Public Information &amp; Transparency</a></li>
            <li><a href="/about-healthy/transparency-and-privacy.html">Privacy Notice &amp; Data Protection</a></li>
            <li><a href="/about-healthy/ethics-line.html">Ethics Line &amp; Compliance</a></li>
            <li><a href="/about-healthy/sustainability.html">Sustainability &amp; Global Compact</a></li>
            <li><a href="/about-healthy/careers-and-suppliers.html">Work at Healthy Portal</a></li>
          </ul>
        </div>

        <div>
          <h3 class="hp-footer__heading">Portals &amp; Regulatory</h3>
          <ul class="hp-footer__list">
            <li><a href="/former-members/index.html">Check Your Member Benefit Fund</a></li>
            <li><a href="/about-healthy/careers-and-suppliers.html">Suppliers Portal</a></li>
            <li><a href="/about-healthy/careers-and-suppliers.html">Check Issued Electronic Receipts</a></li>
            <li><a href="/about-healthy/careers-and-suppliers.html">Legal Terms &amp; Promotions</a></li>
            <li><a href="/credits/redec.html">Consolidated Debt Registry (REDEC)</a></li>
            <li><a href="/credits/excess-payment-refund.html">Excess Payment Refunds</a></li>
          </ul>
        </div>

        <div>
          <h3 class="hp-footer__heading">Contact &amp; Service Channels</h3>
          <ul class="hp-footer__list">
            <li><a href="/help-center/index.html">Help Center &amp; FAQs</a></li>
            <li><a href="/help-center/branches.html">Branches &amp; Live Status</a></li>
            <li><a href="/help-center/schedule-visit.html">Schedule Your Branch Visit</a></li>
            <li><a href="/help-center/virtual-branch.html">Virtual Branch 24/7</a></li>
            <li><a href="/help-center/self-service-kiosk.html">Self-Service Kiosks</a></li>
            <li><a href="/help-center/contact-us.html">Inquiries &amp; Claims (1-800-555-0199)</a></li>
          </ul>
        </div>
      </div>

      <div class="hp-footer__legal">
        <span>© 2026 Healthy Portal Benefits Network. Member welfare programs are supervised by the National Social Welfare Board (www.nswb.org).</span>
        <span>Healthy Portal Digital Ecosystem | US &amp; International Edition</span>
      </div>
    </div>
  </footer>`;
}

function renderSimulatorWidget(simulatorType) {
  if (simulatorType === 'credits') {
    return `
    <section class="hp-simulator" aria-label="Interactive Social Credit Simulator">
      <span class="hp-info-banner__tag">Interactive Calculator</span>
      <h2 style="margin: 0.25rem 0 0.4rem; color: var(--hp-navy-900);">Simulate Your Healthy Social Credit</h2>
      <p style="margin: 0; font-size: 0.9rem; color: var(--hp-slate-600);">Calculate your fixed monthly payroll installment, Annual Percentage Rate (APR), and total loan cost instantly.</p>
      <form id="hp-sim-credit" class="hp-simulator__grid">
        <div class="hp-field">
          <label for="sim-credit-amount">Requested Amount (USD)</label>
          <input type="number" id="sim-credit-amount" value="3500" min="200" max="50000" step="100" />
        </div>
        <div class="hp-field">
          <label for="sim-credit-months">Installment Term (Months)</label>
          <select id="sim-credit-months">
            <option value="12">12 Months</option>
            <option value="24" selected>24 Months</option>
            <option value="36">36 Months</option>
            <option value="48">48 Months</option>
            <option value="60">60 Months</option>
          </select>
        </div>
        <div class="hp-field">
          <label for="sim-credit-segment">Affiliate Segment</label>
          <select id="sim-credit-segment">
            <option value="worker" selected>Active Worker (Preferential Rate)</option>
            <option value="retiree">Retiree Affiliate (Golden Rate)</option>
          </select>
        </div>
      </form>
      <div class="hp-simulator__result">
        <div>
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--hp-slate-500); text-transform: uppercase;">Estimated Monthly Installment</div>
          <div class="hp-stat-value" id="sim-credit-monthly">$169 / mo</div>
          <div style="font-size: 0.85rem; color: var(--hp-slate-600);" id="sim-credit-total">Total Loan Cost: $4,056</div>
        </div>
        <div style="text-align: right;">
          <div style="font-weight: 800; color: var(--hp-navy-900); margin-bottom: 0.5rem;" id="sim-credit-cae">APR: 17.90%</div>
          <a href="/my-portal/index.html" class="hp-btn hp-btn--primary">Apply in My Portal →</a>
        </div>
      </div>
    </section>`;
  }

  if (simulatorType === 'medical-leave') {
    return `
    <section class="hp-simulator" aria-label="Interactive Medical Leave Subsidy Calculator">
      <span class="hp-info-banner__tag">Subsidy Estimator</span>
      <h2 style="margin: 0.25rem 0 0.4rem; color: var(--hp-navy-900);">Calculate Your Medical Leave Subsidy Payment</h2>
      <p style="margin: 0; font-size: 0.9rem; color: var(--hp-slate-600);">Leaves of 11+ days pay from Day 1; leaves of 10 days or fewer apply the statutory 3-day waiting period.</p>
      <form id="hp-sim-leave" class="hp-simulator__grid">
        <div class="hp-field">
          <label for="sim-leave-salary">Average Net Monthly Salary (USD)</label>
          <input type="number" id="sim-leave-salary" value="1500" min="300" max="15000" step="50" />
        </div>
        <div class="hp-field">
          <label for="sim-leave-days">Prescribed Leave Days</label>
          <input type="number" id="sim-leave-days" value="14" min="1" max="180" step="1" />
        </div>
        <div class="hp-field">
          <label for="sim-leave-type">Leave Category</label>
          <select id="sim-leave-type">
            <option value="common" selected>Type 1 — Common Illness or Recovery</option>
            <option value="maternity">Type 3 / 4 — Maternity or Child Care (Paid from Day 1)</option>
          </select>
        </div>
      </form>
      <div class="hp-simulator__result">
        <div>
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--hp-slate-500); text-transform: uppercase;">Estimated Total Subsidy Payout</div>
          <div class="hp-stat-value" id="sim-leave-payout">$700</div>
          <div style="font-size: 0.85rem; color: var(--hp-slate-600);" id="sim-leave-paiddays">14 payable days (Daily rate: $50)</div>
        </div>
        <a href="/my-portal/index.html" class="hp-btn hp-btn--primary">Track Claim in My Portal →</a>
      </div>
    </section>`;
  }

  if (simulatorType === 'insurance') {
    return `
    <section class="hp-simulator" aria-label="Interactive Insurance Quote Estimator">
      <span class="hp-info-banner__tag">Instant Member Quote</span>
      <h2 style="margin: 0.25rem 0 0.4rem; color: var(--hp-navy-900);">Quote Your Healthy Protection Plan</h2>
      <form id="hp-sim-insurance" class="hp-simulator__grid">
        <div class="hp-field">
          <label for="sim-ins-plan">Insurance Line</label>
          <select id="sim-ins-plan">
            <option value="auto" selected>Full Coverage Auto Insurance</option>
            <option value="health">Catastrophic Health Insurance</option>
            <option value="life">Full Family Life Insurance</option>
            <option value="home">Smart Home Protection</option>
            <option value="travel">Worldwide Travel Assistance</option>
          </select>
        </div>
        <div class="hp-field">
          <label for="sim-ins-tier">Coverage Tier</label>
          <select id="sim-ins-tier">
            <option value="standard">Essential Plan</option>
            <option value="full" selected>Full Member Plan (Recommended)</option>
            <option value="elite">Elite Zero-Deductible Plan</option>
          </select>
        </div>
      </form>
      <div class="hp-simulator__result">
        <div>
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--hp-slate-500); text-transform: uppercase;">Preferential Member Premium</div>
          <div class="hp-stat-value" id="sim-ins-price">$49 / month</div>
          <div style="font-size: 0.85rem; color: var(--hp-slate-600);" id="sim-ins-coverage">Includes 24/7 Healthy Assistance + $0 deductible on member network</div>
        </div>
        <a href="/my-portal/index.html" class="hp-btn hp-btn--primary">Enroll Online →</a>
      </div>
    </section>`;
  }

  if (simulatorType === 'savings') {
    return `
    <section class="hp-simulator" aria-label="Interactive Savings & VRS Projector">
      <span class="hp-info-banner__tag">My Goals Simulator</span>
      <h2 style="margin: 0.25rem 0 0.4rem; color: var(--hp-navy-900);">Project Your Savings &amp; Federal Match Bonus</h2>
      <form id="hp-sim-savings" class="hp-simulator__grid">
        <div class="hp-field">
          <label for="sim-sav-initial">Initial Deposit (USD)</label>
          <input type="number" id="sim-sav-initial" value="1000" min="0" max="100000" step="100" />
        </div>
        <div class="hp-field">
          <label for="sim-sav-monthly">Monthly Contribution (USD)</label>
          <input type="number" id="sim-sav-monthly" value="150" min="10" max="5000" step="10" />
        </div>
        <div class="hp-field">
          <label for="sim-sav-years">Investment Horizon (Years)</label>
          <select id="sim-sav-years">
            <option value="1">1 Year</option>
            <option value="3">3 Years</option>
            <option value="5" selected>5 Years</option>
            <option value="10">10 Years</option>
          </select>
        </div>
      </form>
      <div class="hp-simulator__result">
        <div>
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--hp-slate-500); text-transform: uppercase;">Projected Goal Balance</div>
          <div class="hp-stat-value" id="sim-sav-projected">$13,260</div>
          <div style="font-size: 0.85rem; color: var(--hp-slate-600);" id="sim-sav-bonus">Includes estimated 15% Federal Match Bonus: $1,350</div>
        </div>
        <a href="/my-portal/index.html" class="hp-btn hp-btn--primary">Open My Goals Account →</a>
      </div>
    </section>`;
  }

  if (simulatorType === 'social-support') {
    return `
    <section class="hp-simulator" aria-label="Family Allowance Tier Calculator">
      <span class="hp-info-banner__tag">Statutory Tier Lookup</span>
      <h2 style="margin: 0.25rem 0 0.4rem; color: var(--hp-navy-900);">Calculate Your Monthly Family Allowance</h2>
      <form id="hp-sim-social" class="hp-simulator__grid">
        <div class="hp-field">
          <label for="sim-soc-income">Monthly Taxable Income (USD)</label>
          <input type="number" id="sim-soc-income" value="680" min="200" max="5000" step="20" />
        </div>
        <div class="hp-field">
          <label for="sim-soc-deps">Registered Family Dependents</label>
          <input type="number" id="sim-soc-deps" value="2" min="1" max="10" step="1" />
        </div>
      </form>
      <div class="hp-simulator__result">
        <div>
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--hp-slate-500); text-transform: uppercase;">Monthly Family Allowance Payout</div>
          <div class="hp-stat-value" id="sim-soc-allowance">$28 / month</div>
          <div style="font-size: 0.85rem; color: var(--hp-slate-600);" id="sim-soc-tranche">Tier B (Intermediate Statutory Allowance) for 2 registered dependent(s)</div>
        </div>
        <a href="/social-support/family-dependents.html" class="hp-btn hp-btn--primary">Register Dependents →</a>
      </div>
    </section>`;
  }

  return '';
}

function wrapDocument({ title, description, activeSegmentId, activeCategoryId, bodyContent }) {
  return `<!DOCTYPE html>
<html lang="en">
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
  <script src="/assets/js/app.js"></script>
</body>
</html>`;
}

function generateHomePage() {
  const bodyContent = `
  <!-- 1. Lusion-Inspired Editorial Statement + Framed 3D Stage Hero -->
  <section class="hp-hero" aria-label="Featured Announcements">
    <div class="hp-container">
      <div class="hp-lusion-editorial">
        <div class="hp-lusion-editorial__brand">
          <strong>HEALTHY PORTAL</strong>
          <span>Interactive Social Security &amp; Wellbeing</span>
        </div>
        <p class="hp-lusion-editorial__headline">
          We connect over 4 million workers, retirees, and families with next-generation preventive health, social credits, and sustainable wellbeing.
        </p>
      </div>

      <div class="hp-hero__stage">
        <canvas class="hp-lusion-canvas" data-lusion-canvas="true" aria-hidden="true"></canvas>

        <div class="hp-hero__slide is-active">
          <div>
            <span class="hp-hero__kicker">October Prevention &amp; Wellness</span>
            <h1 class="hp-hero__title">IF HEALTH IS THE GOAL, WE ARE WITH YOU!</h1>
            <p class="hp-hero__subtitle">
              Enjoy <strong>$0 Preventive Medical Screenings</strong> at HealthyNet, Clinic Dubal, and SAI Health + up to 35% off outdoor running events and sports clubs across the country.
            </p>
            <div class="hp-hero__ctas">
              <a href="/benefits/index.html" class="hp-btn hp-btn--gold">Discover Monthly Benefits →</a>
              <a href="/benefits/waiting-list-plan.html" class="hp-btn hp-btn--outline-white">Waiting List Resolution Plan</a>
            </div>
          </div>
          <div class="hp-hero__visual">
            <div class="hp-hero__visual-card">
              <span class="hp-info-banner__tag">Member Health Pass</span>
              <h2 style="margin: 0.35rem 0 0.5rem; font-size: 1.35rem; color: var(--hp-navy-900);">$0 Preventive Checkups + Pharmacy Savings</h2>
              <p style="margin: 0 0 1rem; font-size: 0.9rem; color: var(--hp-slate-600);">
                Present your Member ID at partner clinics and Pharmacy Red Wall locations to activate your instant member coverage.
              </p>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; font-size: 0.85rem; font-weight: 700; color: var(--hp-blue-600);">
                <div>✓ $0 Mammography &amp; Lab Panel</div>
                <div>✓ Up to 40% Off Pharmacy</div>
                <div>✓ $1.50 Telemedicine 24/7</div>
                <div>✓ Dental &amp; Optical Discounts</div>
              </div>
            </div>
          </div>
        </div>

        <div class="hp-hero__slide">
          <div>
            <span class="hp-hero__kicker">Academic Excellence Awards 2026</span>
            <h1 class="hp-hero__title">REWARDING YOUR FAMILY'S EDUCATIONAL EFFORT</h1>
            <p class="hp-hero__subtitle">
              Apply today for SER University Admission and Higher Education recognitions. Win laptops, technological equipment, and annual tuition scholarships.
            </p>
            <div class="hp-hero__ctas">
              <a href="/benefits/education-and-academic-excellence.html" class="hp-btn hp-btn--gold">Apply for Scholarships →</a>
              <a href="/credits/higher-education-credit.html" class="hp-btn hp-btn--outline-white">Higher Education Credit</a>
            </div>
          </div>
          <div class="hp-hero__visual">
            <div class="hp-hero__visual-card">
              <span class="hp-info-banner__tag">Healthy Academy &amp; Education</span>
              <h2 style="margin: 0.35rem 0 0.5rem; font-size: 1.35rem; color: var(--hp-navy-900);">Over 4,500 Student Awards Available</h2>
              <p style="margin: 0 0 1rem; font-size: 0.9rem; color: var(--hp-slate-600);">
                Open to workers, retirees, and registered student dependents across technical institutes and universities.
              </p>
              <a href="/benefits/education-and-academic-excellence.html" class="hp-card__link">Check GPA requirements &amp; deadlines →</a>
            </div>
          </div>
        </div>

        <div class="hp-hero__slide">
          <div>
            <span class="hp-hero__kicker">Culture &amp; Panoramas</span>
            <h1 class="hp-hero__title">YOUR NEXT CULTURAL OUTING HAS UP TO 25% OFF!</h1>
            <p class="hp-hero__subtitle">
              Choose your favorite play at Teather Moon or the Starlight Grand Theater in New York, or book a Low Season stay at our 24 nature resorts.
            </p>
            <div class="hp-hero__ctas">
              <a href="/benefits/culture-and-events.html" class="hp-btn hp-btn--gold">Explore Culture &amp; Tickets →</a>
              <a href="/tourism/low-season-offers.html" class="hp-btn hp-btn--outline-white">Book Low Season Tourism</a>
            </div>
          </div>
          <div class="hp-hero__visual">
            <div class="hp-hero__visual-card">
              <span class="hp-info-banner__tag">Tourism &amp; Panoramas</span>
              <h2 style="margin: 0.35rem 0 0.5rem; font-size: 1.35rem; color: var(--hp-navy-900);">Hotels, Cabins &amp; Experience Boxes</h2>
              <p style="margin: 0 0 1rem; font-size: 0.9rem; color: var(--hp-slate-600);">
                Up to 35% off low-season bookings at Lake Tahoe, Aspen, Sedona, and Santa Barbara with up to 12 interest-free installments.
              </p>
              <a href="/tourism/index.html" class="hp-card__link">Explore all 24 US destinations →</a>
            </div>
          </div>
        </div>

        <div class="hp-hero__controls" aria-label="Carousel controls">
          <button type="button" class="hp-carousel-btn" id="hp-hero-prev" aria-label="Previous slide">‹</button>
          <span class="hp-carousel-counter" id="hp-hero-counter">1 / 3</span>
          <button type="button" class="hp-carousel-btn" id="hp-hero-next" aria-label="Next slide">›</button>
        </div>
      </div>

      <div class="hp-lusion-crossbar" aria-hidden="true">
        <span class="hp-lusion-crossbar__plus">+</span>
        <span class="hp-lusion-crossbar__plus">+</span>
        <span>SCROLL TO EXPLORE</span>
        <span class="hp-lusion-crossbar__plus">+</span>
        <span class="hp-lusion-crossbar__plus">+</span>
      </div>
    </div>
  </section>

  <!-- 2. 5 Floating Quick-Action Cards (ds-direct-access) -->
  <section class="hp-quick-actions" aria-label="Direct access shortcuts">
    <div class="hp-container">
      <div class="hp-quick-actions__grid">
        <a href="/insurance/auto-insurance.html" class="hp-quick-card">
          <span class="hp-quick-card__icon" aria-hidden="true">🛡️</span>
          <div>
            <div class="hp-quick-card__title">Quote Your Insurance</div>
            <div class="hp-quick-card__sub">Auto, Health, Life &amp; Home</div>
          </div>
        </a>
        <a href="/medical-leave/index.html" class="hp-quick-card">
          <span class="hp-quick-card__icon" aria-hidden="true">🩺</span>
          <div>
            <div class="hp-quick-card__title">Manage Medical Leave</div>
            <div class="hp-quick-card__sub">Status, Documents &amp; Payout</div>
          </div>
        </a>
        <a href="/credits/payment-methods.html" class="hp-quick-card">
          <span class="hp-quick-card__icon" aria-hidden="true">💳</span>
          <div>
            <div class="hp-quick-card__title">Pay Your Loan</div>
            <div class="hp-quick-card__sub">Online ID Payment &amp; Autopay</div>
          </div>
        </a>
        <a href="/help-center/schedule-visit.html" class="hp-quick-card">
          <span class="hp-quick-card__icon" aria-hidden="true">📅</span>
          <div>
            <div class="hp-quick-card__title">Schedule Your Visit</div>
            <div class="hp-quick-card__sub">Priority Branch Appointment</div>
          </div>
        </a>
        <a href="/benefits/index.html" class="hp-quick-card">
          <span class="hp-quick-card__icon" aria-hidden="true">🎁</span>
          <div>
            <div class="hp-quick-card__title">Check Your Benefits</div>
            <div class="hp-quick-card__sub">+1,200 Member Discounts</div>
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
            <span class="hp-info-banner__tag">Balances in Your Favor</span>
            <h3>Check Your Excess Payment Refunds</h3>
            <p>Find out if you have credit balances in your favor from duplicate payroll deductions or early loan payoffs and request an instant wire transfer.</p>
          </div>
          <a href="/credits/excess-payment-refund.html" class="hp-btn hp-btn--primary" style="align-self: flex-start;">Check Balance Now →</a>
        </article>

        <article class="hp-info-banner">
          <div>
            <span class="hp-info-banner__tag">Updated 2026 Brochure</span>
            <h3>Complete Member Benefits Guide</h3>
            <p>Browse our updated digital guide featuring all health, education, tourism, and social support benefits available for workers and companies.</p>
          </div>
          <a href="/benefits/index.html" class="hp-btn hp-btn--outline" style="align-self: flex-start;">View Benefits Guide →</a>
        </article>

        <article class="hp-info-banner">
          <div>
            <span class="hp-info-banner__tag">Fair Credit Act</span>
            <h3>Consolidated Debt Registry (REDEC)</h3>
            <p>Learn how the Consolidated Debt Registry protects your financial data and helps you access fairer credit terms.</p>
          </div>
          <a href="/credits/redec.html" class="hp-btn hp-btn--outline" style="align-self: flex-start;">More Information →</a>
        </article>
      </div>
    </div>
  </section>

  <!-- 4. Featured Highlights -->
  <section class="hp-section hp-section--alt">
    <div class="hp-container">
      <div class="hp-section__header">
        <div>
          <h2 class="hp-section__title">Most Featured Programs</h2>
          <p class="hp-section__subtitle">Tailored programs designed to support your health, recreation, and family security.</p>
        </div>
        <a href="/benefits/index.html" class="hp-btn hp-btn--outline">View All Featured Benefits →</a>
      </div>

      <div class="hp-cards-grid">
        <article class="hp-card">
          <div class="hp-card__media">
            <span class="hp-card__tag">New</span>
            <span class="hp-card__emoji" aria-hidden="true">🤝</span>
          </div>
          <div class="hp-card__body">
            <h3 class="hp-card__title">Caregivers Support Program</h3>
            <p class="hp-card__desc">Comprehensive psychological, legal, and occupational therapy assistance for members who care for a dependent family member.</p>
            <a href="/social-support/caregivers-program.html" class="hp-card__link">Register Today →</a>
          </div>
        </article>

        <article class="hp-card">
          <div class="hp-card__media hp-card__media--teal">
            <span class="hp-card__tag">Up to 35% Off</span>
            <span class="hp-card__emoji" aria-hidden="true">🏔️</span>
          </div>
          <div class="hp-card__body">
            <h3 class="hp-card__title">Low Season Tourism Escapes</h3>
            <p class="hp-card__desc">Plan your next family getaway at our hotels and cabin resorts across the United States with preferential low-season rates.</p>
            <a href="/tourism/low-season-offers.html" class="hp-card__link">Get Your Benefit →</a>
          </div>
        </article>

        <article class="hp-card">
          <div class="hp-card__media">
            <span class="hp-card__tag">100% Online</span>
            <span class="hp-card__emoji" aria-hidden="true">🚗</span>
          </div>
          <div class="hp-card__body">
            <h3 class="hp-card__title">Full Coverage Auto Insurance</h3>
            <p class="hp-card__desc">Protect your vehicle against collision, theft, and third-party liability with 24/7 roadside assistance and replacement car.</p>
            <a href="/insurance/auto-insurance.html" class="hp-card__link">Quote Your Insurance →</a>
          </div>
        </article>

        <article class="hp-card">
          <div class="hp-card__media hp-card__media--gold">
            <span class="hp-card__tag">New</span>
            <span class="hp-card__emoji" aria-hidden="true">🎭</span>
          </div>
          <div class="hp-card__body">
            <h3 class="hp-card__title">Your Box of Experiences</h3>
            <p class="hp-card__desc">Curated gastronomy, theater, spa, and adventure experiences across the country at exclusive member prices.</p>
            <a href="/benefits/culture-and-events.html" class="hp-card__link">Learn More →</a>
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
          <h2 class="hp-section__title">At Healthy Portal Everyone Is Welcome</h2>
          <p class="hp-section__subtitle">Check your affiliation status instantly or discover how Companies and Retirees can join 100% online.</p>
        </div>
      </div>

      <div class="hp-affiliation-grid">
        <div class="hp-affiliation-box">
          <span class="hp-info-banner__tag">Instant Affiliation Lookup</span>
          <h3 style="margin: 0.4rem 0 0.5rem; font-size: 1.35rem; color: var(--hp-navy-900);">Check If You Are Affiliated with Healthy Portal</h3>
          <p style="margin: 0 0 1rem; font-size: 0.92rem; color: var(--hp-slate-600);">
            Enter your Member ID / SSN to verify your active worker or retiree membership, family allowance tier, and available excess payment refunds.
          </p>
          <form id="hp-affiliation-form" style="display:flex; gap:0.75rem; flex-wrap:wrap; margin-bottom: 1rem;">
            <label for="hp-rut-input" class="hp-skip-link">Enter your Member ID or SSN</label>
            <input type="text" id="hp-rut-input" placeholder="Enter Member ID (e.g. HP-849201-US)" style="flex:1; min-width:220px; padding:0.75rem 1rem; border-radius:999px; border:1px solid var(--hp-slate-300); font-size:0.95rem;" />
            <button type="submit" class="hp-btn hp-btn--primary">Check Status →</button>
          </form>
          <p id="hp-affiliation-result" style="font-size: 0.88rem; font-weight: 700; margin: 0 0 1.25rem; min-height: 1.3rem;"></p>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; border-top: 1px solid var(--hp-slate-200); padding-top: 1.25rem;">
            <div style="background: var(--hp-blue-50); padding: 1rem; border-radius: var(--hp-radius-md);">
              <h4 style="margin: 0 0 0.35rem; color: var(--hp-navy-900);">🏢 Companies</h4>
              <p style="margin: 0 0 0.65rem; font-size: 0.84rem; color: var(--hp-slate-600);">Private, autonomous, or public sector organizations can affiliate and unlock full workforce benefits.</p>
              <a href="/companies/index.html" class="hp-card__link" style="font-size:0.84rem;">Affiliate Company →</a>
            </div>
            <div style="background: var(--hp-blue-50); padding: 1rem; border-radius: var(--hp-radius-md);">
              <h4 style="margin: 0 0 0.35rem; color: var(--hp-navy-900);">👵 Retirees</h4>
              <p style="margin: 0 0 0.65rem; font-size: 0.84rem; color: var(--hp-slate-600);">Joining is now faster and 100% online. Access exclusive healthcare, pharmacy, and travel benefits.</p>
              <a href="/retirees/index.html" class="hp-card__link" style="font-size:0.84rem;">Affiliate as Retiree →</a>
            </div>
          </div>
        </div>

        <div class="hp-healthypay-banner">
          <div>
            <span class="hp-megamenu__promo-tag">HealthyPay Digital Card</span>
            <h3 style="font-size: 1.65rem; margin: 0.4rem 0 0.75rem;">Your Zero-Fee Digital Account Connected to All Your Benefits</h3>
            <p style="font-size: 0.95rem; opacity: 0.92; margin: 0 0 1.25rem;">
              Receive your Medical Leave subsidies, Family Allowances, and Excess Payment refunds faster. Shop online and internationally with your virtual and physical Mastercard with $0 maintenance fee.
            </p>
            <ul style="padding-left: 1.2rem; margin: 0 0 1.5rem; font-size: 0.9rem; opacity: 0.92;">
              <li>Free transfers between all banks</li>
              <li>Cashback at Pharmacy Red Wall, supermarkets, and home energy</li>
              <li>Instant card lock &amp; PIN control in the app</li>
            </ul>
          </div>
          <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
            <a href="/healthypay/index.html" class="hp-btn hp-btn--gold">Download HealthyPay →</a>
            <a href="/medical-leave/payment-methods.html" class="hp-btn hp-btn--outline-white">Link Medical Leave Payouts</a>
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
          <h2 class="hp-section__title">Save Time by Choosing Our Digital Channels</h2>
          <p class="hp-section__subtitle">Complete 100% of your inquiries, simulations, and benefit redemptions from wherever you are.</p>
        </div>
      </div>

      <div class="hp-channels-grid">
        <article class="hp-card">
          <div class="hp-card__body">
            <span class="hp-info-banner__tag">iOS &amp; Android</span>
            <h3 class="hp-card__title">📱 More Healthy Mobile App</h3>
            <p class="hp-card__desc">Simulate and request Social Credits, upload medical leave documents, and activate Pharmacy Red Wall and cinema discount codes on your phone.</p>
            <a href="/help-center/mobile-app.html" class="hp-card__link">Download the App →</a>
          </div>
        </article>

        <article class="hp-card">
          <div class="hp-card__body">
            <span class="hp-info-banner__tag">24/7 Web Access</span>
            <h3 class="hp-card__title">💻 Online Virtual Branch</h3>
            <p class="hp-card__desc">Access My Portal from your computer or tablet to download affiliation certificates, update bank details, and pay installments.</p>
            <a href="/help-center/virtual-branch.html" class="hp-card__link">Go to Virtual Branch →</a>
          </div>
        </article>

        <article class="hp-card">
          <div class="hp-card__body">
            <span class="hp-info-banner__tag">Express Terminals</span>
            <h3 class="hp-card__title">🖥️ Self-Service Express Kiosk</h3>
            <p class="hp-card__desc">Print certificates, check medical leave payment dates, and redeem vouchers in under 60 seconds with biometric verification.</p>
            <a href="/help-center/self-service-kiosk.html" class="hp-card__link">Discover Kiosk Services →</a>
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
          <h3 style="margin: 0 0 0.4rem; color: var(--hp-navy-900);">Help Center</h3>
          <p style="margin: 0 0 1.25rem; font-size: 0.88rem; color: var(--hp-slate-600); flex: 1;">Get clear answers to resolve all your questions about benefits, loans, and medical leaves.</p>
          <a href="/help-center/index.html" class="hp-btn hp-btn--outline" style="width: 100%;">Learn More</a>
        </article>

        <article class="hp-support-card">
          <div class="hp-support-card__icon" aria-hidden="true">📍</div>
          <h3 style="margin: 0 0 0.4rem; color: var(--hp-navy-900);">Branches</h3>
          <p style="margin: 0 0 1.25rem; font-size: 0.88rem; color: var(--hp-slate-600); flex: 1;">Check the live operating status, addresses, and service hours of our nationwide US branches.</p>
          <a href="/help-center/branches.html" class="hp-btn hp-btn--outline" style="width: 100%;">Go to Branches</a>
        </article>

        <article class="hp-support-card">
          <div class="hp-support-card__icon" aria-hidden="true">🗓️</div>
          <h3 style="margin: 0 0 0.4rem; color: var(--hp-navy-900);">Appointments</h3>
          <p style="margin: 0 0 1.25rem; font-size: 0.88rem; color: var(--hp-slate-600); flex: 1;">Complete your branch procedures smoothly by booking a scheduled time slot in advance.</p>
          <a href="/help-center/schedule-visit.html" class="hp-btn hp-btn--outline" style="width: 100%;">Go to Scheduling</a>
        </article>

        <article class="hp-support-card">
          <div class="hp-support-card__icon" aria-hidden="true">💬</div>
          <h3 style="margin: 0 0 0.4rem; color: var(--hp-navy-900);">Inquiries &amp; Claims</h3>
          <p style="margin: 0 0 1.25rem; font-size: 0.88rem; color: var(--hp-slate-600); flex: 1;">Submit official inquiries, suggestions, or formal claims and track your case number.</p>
          <a href="/help-center/contact-us.html" class="hp-btn hp-btn--outline" style="width: 100%;">Contact Us</a>
        </article>
      </div>
    </div>
  </section>

  <!-- 8. Driven by Our Commitment (Sustainability & News) -->
  <section class="hp-section hp-section--alt">
    <div class="hp-container">
      <div class="hp-section__header">
        <div>
          <h2 class="hp-section__title">Driven by Our Commitment</h2>
          <p class="hp-section__subtitle">Initiatives from About Healthy promoting environmental action, human rights, and family well-being.</p>
        </div>
        <a href="/about-healthy/sustainability.html" class="hp-btn hp-btn--outline">Explore About Healthy →</a>
      </div>

      <div class="hp-cards-grid">
        <article class="hp-card">
          <div class="hp-card__body">
            <span class="hp-info-banner__tag">Environmental Action</span>
            <h3 class="hp-card__title">We Joined a Family Run to Drive Native Reforestation</h3>
            <p class="hp-card__desc">We participated in a family sports day uniting outdoor wellness with native tree planting across national parks.</p>
            <a href="/about-healthy/sustainability.html" class="hp-card__link">Read Story →</a>
          </div>
        </article>

        <article class="hp-card">
          <div class="hp-card__body">
            <span class="hp-info-banner__tag">ESG &amp; Governance</span>
            <h3 class="hp-card__title">Reaffirming Our Commitment to the UN Global Compact</h3>
            <p class="hp-card__desc">Advancing management practices aligned with human rights, labor standards, environmental stewardship, and anti-corruption.</p>
            <a href="/about-healthy/sustainability.html" class="hp-card__link">Read Story →</a>
          </div>
        </article>

        <article class="hp-card">
          <div class="hp-card__body">
            <span class="hp-info-banner__tag">Family &amp; Childhood</span>
            <h3 class="hp-card__title">Launching Workshops to Strengthen Positive Parenting</h3>
            <p class="hp-card__desc">Practical tools and specialist guidance to accompany the emotional and educational development of children and adolescents.</p>
            <a href="/about-healthy/sustainability.html" class="hp-card__link">Read Story →</a>
          </div>
        </article>

        <article class="hp-card">
          <div class="hp-card__body">
            <span class="hp-info-banner__tag">Integrity &amp; Transparency</span>
            <h3 class="hp-card__title">Confidential Ethics Line &amp; Compliance Portal</h3>
            <p class="hp-card__desc">Our independent channel ensuring transparency, regulatory compliance, and safe reporting for members, suppliers, and staff.</p>
            <a href="/about-healthy/ethics-line.html" class="hp-card__link">Access Ethics Line →</a>
          </div>
        </article>
      </div>
    </div>
  </section>`;

  const html = wrapDocument({
    title: 'Home | Workers',
    description: 'Healthy Portal: Medical Leave, Social Credits, Insurance, Savings, Tourism, Benefits, and Social Support.',
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
            <span>${escapeHtml(item.title)}</span>
            ${item.tag ? `<span class="hp-badge-top">${escapeHtml(item.tag)}</span>` : ''}
          </a>
        </li>`;
      }).join('\n');

      const relatedCards = cat.subpages
        .filter((item) => item.href !== sub.href)
        .slice(0, 6)
        .map((item) => {
          return `<article class="hp-card">
            <div class="hp-card__body">
              ${item.tag ? `<span class="hp-info-banner__tag">${escapeHtml(item.tag)}</span>` : '<span class="hp-info-banner__tag">' + escapeHtml(cat.title) + '</span>'}
              <h3 class="hp-card__title">${escapeHtml(item.title)}</h3>
              <p class="hp-card__desc">${escapeHtml(item.summary)}</p>
              <a href="${escapeHtml(item.href)}" class="hp-card__link">Open Page →</a>
            </div>
          </article>`;
        }).join('\n');

      const bodyContent = `
      <section class="hp-page-hero">
        <div class="hp-container">
          <div class="hp-hero__stage" style="min-height: 290px;">
            <canvas class="hp-lusion-canvas" data-lusion-canvas="true" aria-hidden="true"></canvas>
            <div style="position: relative; z-index: 2;">
              <nav class="hp-breadcrumbs" aria-label="Breadcrumb">
                <a href="/index.html">Home</a>
                <span>›</span>
                <a href="${escapeHtml(cat.href)}">${escapeHtml(cat.title)}</a>
                ${!sub.isHub ? `<span>›</span><span>${escapeHtml(sub.title)}</span>` : ''}
              </nav>
              <span class="hp-hero__kicker">${escapeHtml(cat.title)} • Healthy Portal</span>
              <h1 class="hp-hero__title" style="font-size: clamp(1.95rem, 3.2vw, 2.75rem); margin: 0 0 0.65rem;">
                ${escapeHtml(sub.isHub ? cat.title : sub.title)}
              </h1>
              <p class="hp-hero__subtitle" style="margin: 0;">
                ${escapeHtml(sub.isHub ? cat.heroSubtitle : sub.summary)}
              </p>
            </div>
          </div>
          <div class="hp-lusion-crossbar" aria-hidden="true">
            <span class="hp-lusion-crossbar__plus">+</span>
            <span class="hp-lusion-crossbar__plus">+</span>
            <span>SCROLL TO EXPLORE • ${escapeHtml(cat.title.toUpperCase())}</span>
            <span class="hp-lusion-crossbar__plus">+</span>
            <span class="hp-lusion-crossbar__plus">+</span>
          </div>
        </div>
      </section>

      <div class="hp-container hp-page-layout">
        <aside class="hp-sidebar" aria-label="${escapeHtml(cat.title)} navigation">
          <h2 class="hp-sidebar__title">${escapeHtml(cat.title)} Menu (${cat.subpages.length})</h2>
          <ul class="hp-sidebar__list">
            ${sidebarItems}
          </ul>
          <div style="margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid var(--hp-slate-200);">
            <a href="/my-portal/index.html" class="hp-btn hp-btn--gold" style="width: 100%; font-size: 0.85rem;">Manage in My Portal →</a>
          </div>
        </aside>

        <div>
          ${renderSimulatorWidget(cat.simulatorType)}

          <div style="margin-bottom: 2rem;">
            ${renderGeminiEnterpriseSection(true)}
          </div>

          <section style="background: var(--hp-white); border: 1px solid var(--hp-slate-200); border-radius: var(--hp-radius-lg); padding: 2rem; margin-bottom: 2rem; box-shadow: var(--hp-shadow-sm);">
            <span class="hp-info-banner__tag">Everything You Need to Know</span>
            <h2 style="margin: 0.35rem 0 0.75rem; color: var(--hp-navy-900);">
              ${escapeHtml(sub.title)} — Step-by-Step Guide &amp; Requirements
            </h2>
            <p style="color: var(--hp-slate-700); margin: 0 0 1.25rem;">
              ${escapeHtml(sub.summary)} Through Healthy Portal’s digital ecosystem (My Portal, More Healthy App, and HealthyPay), you can complete this process online with real-time notifications and full National Social Welfare Board (NSWB) regulatory transparency.
            </p>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
              <div style="background: var(--hp-blue-50); padding: 1.15rem; border-radius: var(--hp-radius-md); border-left: 4px solid var(--hp-blue-600);">
                <h3 style="margin: 0 0 0.35rem; font-size: 1rem; color: var(--hp-navy-900);">1. Before You Start</h3>
                <p style="margin: 0; font-size: 0.86rem; color: var(--hp-slate-600);">Verify your active Member ID, updated contact email, and registered bank or HealthyPay account in My Portal.</p>
              </div>
              <div style="background: var(--hp-blue-50); padding: 1.15rem; border-radius: var(--hp-radius-md); border-left: 4px solid var(--hp-teal-600);">
                <h3 style="margin: 0 0 0.35rem; font-size: 1rem; color: var(--hp-navy-900);">2. Digital Processing</h3>
                <p style="margin: 0; font-size: 0.86rem; color: var(--hp-slate-600);">Submit your request or supporting documents online via Virtual Branch or the More Healthy App with biometric validation.</p>
              </div>
              <div style="background: var(--hp-blue-50); padding: 1.15rem; border-radius: var(--hp-radius-md); border-left: 4px solid var(--hp-gold-500);">
                <h3 style="margin: 0 0 0.35rem; font-size: 1rem; color: var(--hp-navy-900);">3. Resolution &amp; Payout</h3>
                <p style="margin: 0; font-size: 0.86rem; color: var(--hp-slate-600);">Receive instant SMS/email confirmation and direct deposit into your HealthyPay or personal bank account.</p>
              </div>
            </div>

            <div style="display: flex; gap: 0.85rem; flex-wrap: wrap;">
              <a href="/my-portal/index.html" class="hp-btn hp-btn--primary">Start Online in My Portal →</a>
              <a href="/help-center/schedule-visit.html" class="hp-btn hp-btn--outline">Schedule Branch Appointment</a>
              <a href="/help-center/contact-us.html" class="hp-btn hp-btn--outline">Ask a Specialist (1-800-555-0199)</a>
            </div>
          </section>

          <section>
            <h2 style="margin: 0 0 1rem; color: var(--hp-navy-900); font-size: 1.35rem;">
              Explore All ${escapeHtml(cat.title)} Pages (2nd-Level Depth)
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
        <span class="hp-info-banner__tag">Secure Member Authentication</span>
        <h2 style="margin: 0.35rem 0 0.5rem; color: var(--hp-navy-900);">Sign In to My Portal (Virtual Branch)</h2>
        <p style="margin: 0 0 1rem; font-size: 0.9rem; color: var(--hp-slate-600);">Access your personal dashboard for Workers, Retirees, and Company Administrators.</p>
        <form id="hp-affiliation-form" class="hp-simulator__grid">
          <div class="hp-field">
            <label for="hp-rut-input">Member ID / SSN</label>
            <input type="text" id="hp-rut-input" placeholder="HP-849201-US" value="HP-849201-US" />
          </div>
          <div class="hp-field">
            <label for="hp-pass-input">Portal Password or HealthyPass SSO</label>
            <input type="password" id="hp-pass-input" value="••••••••••••" />
          </div>
          <div style="display:flex; align-items:flex-end;">
            <button type="submit" class="hp-btn hp-btn--primary" style="width:100%;">Sign In Securely →</button>
          </div>
        </form>
        <p id="hp-affiliation-result" style="font-weight: 700; margin: 1rem 0 0; font-size: 0.9rem;"></p>
      </section>` : '';

    const formerWidget = isFormer ? `
      <section class="hp-simulator" style="margin-bottom: 2rem;">
        <span class="hp-info-banner__tag">Former Member Balance &amp; Refund Lookup</span>
        <h2 style="margin: 0.35rem 0 0.5rem; color: var(--hp-navy-900);">Check Excess Payment Balances &amp; Active Credits</h2>
        <form id="hp-affiliation-form" style="display:flex; gap:0.75rem; flex-wrap:wrap; margin-top:0.75rem;">
          <label for="hp-rut-input" class="hp-skip-link">Member ID / SSN</label>
          <input type="text" id="hp-rut-input" placeholder="Enter your Member ID (e.g. HP-849201-US)" style="flex:1; min-width:220px; padding:0.7rem 1rem; border-radius:8px; border:1px solid var(--hp-slate-300);" />
          <button type="submit" class="hp-btn hp-btn--primary">Check Balances →</button>
        </form>
        <p id="hp-affiliation-result" style="font-weight: 700; margin: 0.85rem 0 0; font-size: 0.9rem;"></p>
      </section>` : '';

    const categoryCards = data.categories.map((cat) => {
      return `<article class="hp-card">
        <div class="hp-card__body">
          <span class="hp-info-banner__tag">${escapeHtml(cat.bannerTag)}</span>
          <h3 class="hp-card__title">${escapeHtml(cat.title)}</h3>
          <p class="hp-card__desc">${escapeHtml(cat.bannerDesc)}</p>
          <a href="${escapeHtml(cat.href)}" class="hp-card__link">Explore ${escapeHtml(cat.title)} →</a>
        </div>
      </article>`;
    }).join('\n');

    const bodyContent = `
    <section class="hp-page-hero">
      <div class="hp-container">
        <div class="hp-hero__stage" style="min-height: 290px;">
          <canvas class="hp-lusion-canvas" data-lusion-canvas="true" aria-hidden="true"></canvas>
          <div style="position: relative; z-index: 2;">
            <nav class="hp-breadcrumbs" aria-label="Breadcrumb">
              <a href="/index.html">Home</a>
              <span>›</span>
              <span>${escapeHtml(seg.title)}</span>
            </nav>
            <span class="hp-hero__kicker">Segment Portal • ${escapeHtml(seg.title)}</span>
            <h1 class="hp-hero__title" style="font-size: clamp(1.95rem, 3.2vw, 2.75rem); margin: 0 0 0.65rem;">
              ${escapeHtml(seg.title)}
            </h1>
            <p class="hp-hero__subtitle" style="margin: 0;">
              ${escapeHtml(seg.heroSubtitle)}
            </p>
          </div>
        </div>
        <div class="hp-lusion-crossbar" aria-hidden="true">
          <span class="hp-lusion-crossbar__plus">+</span>
          <span class="hp-lusion-crossbar__plus">+</span>
          <span>SCROLL TO EXPLORE • ${escapeHtml(seg.title.toUpperCase())}</span>
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
          <span class="hp-info-banner__tag">Dedicated Solutions</span>
          <h2 style="margin: 0.35rem 0 0.65rem; color: var(--hp-navy-900);">Overview of ${escapeHtml(seg.title)}</h2>
          <p style="margin: 0 0 1.25rem; color: var(--hp-slate-700);">
            ${escapeHtml(seg.summary)}
          </p>
          <div style="display:flex; gap:0.85rem; flex-wrap:wrap;">
            <a href="/my-portal/index.html" class="hp-btn hp-btn--primary">Enter Digital Branch →</a>
            <a href="/help-center/contact-us.html" class="hp-btn hp-btn--outline">Speak with an Executive</a>
          </div>
        </div>

        <h2 style="margin: 0 0 1.25rem; color: var(--hp-navy-900);">Available Categories &amp; Services</h2>
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
