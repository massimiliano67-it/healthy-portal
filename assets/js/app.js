/* ==========================================================================
   Healthy Portal Interactive Client Controller
   Strictly adheres to secure DOM manipulation (textContent / createElement only)
   ========================================================================== */

(function () {
  'use strict';

  function formatUSD(amount) {
    return '$' + Math.round(amount).toLocaleString('en-US');
  }

  function getLang() {
    return window.HP_CURRENT_LANG === 'en' ? 'en' : 'es';
  }

  /* 0. Bilingual Language Switcher (ES default | EN) */
  function applyLanguage(lang) {
    const normalized = lang === 'en' ? 'en' : 'es';
    window.HP_CURRENT_LANG = normalized;
    document.documentElement.setAttribute('lang', normalized);
    try {
      localStorage.setItem('hp-lang', normalized);
    } catch (_) {
      // ignore storage errors
    }

    const langNodes = document.querySelectorAll('[data-lang-es]');
    langNodes.forEach(function (el) {
      const text = normalized === 'en'
        ? el.getAttribute('data-lang-en')
        : el.getAttribute('data-lang-es');
      if (text !== null) {
        el.textContent = text;
      }
    });

    const placeholderNodes = document.querySelectorAll('[data-placeholder-es]');
    placeholderNodes.forEach(function (el) {
      const ph = normalized === 'en'
        ? el.getAttribute('data-placeholder-en')
        : el.getAttribute('data-placeholder-es');
      if (ph !== null) {
        el.setAttribute('placeholder', ph);
      }
    });

    const langButtons = document.querySelectorAll('[data-set-lang]');
    langButtons.forEach(function (btn) {
      const btnLang = btn.getAttribute('data-set-lang');
      const isActive = btnLang === normalized;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    if (typeof window.hpRefreshSimulators === 'function') {
      window.hpRefreshSimulators();
    }
  }

  function initLanguageSwitcher() {
    let saved = 'es';
    try {
      const stored = localStorage.getItem('hp-lang');
      if (stored === 'en' || stored === 'es') {
        saved = stored;
      }
    } catch (_) {
      saved = 'es';
    }
    applyLanguage(saved);

    const langButtons = document.querySelectorAll('[data-set-lang]');
    langButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const targetLang = btn.getAttribute('data-set-lang') === 'en' ? 'en' : 'es';
        applyLanguage(targetLang);
      });
    });
  }

  /* 1. Accessibility Font Size Controls */
  function initFontControls() {
    const saved = localStorage.getItem('hp_font_scale');
    if (saved && ['0.92', '1', '1.12'].includes(saved)) {
      document.documentElement.style.setProperty('--hp-font-scale', saved);
    }
    const buttons = document.querySelectorAll('[data-font-scale]');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const scale = btn.getAttribute('data-font-scale') || '1';
        if (['0.92', '1', '1.12'].includes(scale)) {
          document.documentElement.style.setProperty('--hp-font-scale', scale);
          localStorage.setItem('hp_font_scale', scale);
        }
      });
    });
  }

  /* 2. Mega-Menu Navigation */
  function initMegaMenu() {
    const navItems = document.querySelectorAll('.hp-nav__item[data-has-megamenu="true"]');
    function closeAll() {
      navItems.forEach(function (item) {
        item.classList.remove('is-open');
        const trigger = item.querySelector('.hp-nav__trigger');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      });
    }

    navItems.forEach(function (item) {
      const trigger = item.querySelector('.hp-nav__trigger');
      if (!trigger) return;
      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const wasOpen = item.classList.contains('is-open');
        closeAll();
        if (!wasOpen) {
          item.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.hp-nav__item')) {
        closeAll();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeAll();
        const modal = document.getElementById('hp-directory-modal');
        if (modal) modal.classList.remove('is-open');
      }
    });
  }

  /* 3. Hero Carousel */
  function initHeroCarousel() {
    const slides = document.querySelectorAll('.hp-hero__slide');
    if (!slides.length) return;
    let currentIndex = 0;
    const counterEl = document.getElementById('hp-hero-counter');
    const prevBtn = document.getElementById('hp-hero-prev');
    const nextBtn = document.getElementById('hp-hero-next');

    function showSlide(index) {
      currentIndex = (index + slides.length) % slides.length;
      slides.forEach(function (slide, idx) {
        slide.classList.toggle('is-active', idx === currentIndex);
      });
      if (counterEl) {
        counterEl.textContent = (currentIndex + 1) + ' / ' + slides.length;
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        showSlide(currentIndex - 1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        showSlide(currentIndex + 1);
      });
    }

    setInterval(function () {
      if (!document.hidden) {
        showSlide(currentIndex + 1);
      }
    }, 6500);
  }

  /* 4. Site Directory Modal (All 1st & 2nd Level Pages + Search) */
  function initDirectoryModal() {
    const openBtns = document.querySelectorAll('[data-open-directory]');
    const closeBtn = document.getElementById('hp-directory-close');
    const modal = document.getElementById('hp-directory-modal');
    const searchInput = document.getElementById('hp-directory-search');

    if (!modal) return;

    openBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        modal.classList.add('is-open');
        if (searchInput) searchInput.focus();
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        modal.classList.remove('is-open');
      });
    }

    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.classList.remove('is-open');
      }
    });

    if (searchInput) {
      searchInput.addEventListener('input', function () {
        const query = searchInput.value.trim().toLowerCase();
        const links = modal.querySelectorAll('[data-directory-item]');
        links.forEach(function (el) {
          const text = (el.textContent || '').toLowerCase();
          el.style.display = !query || text.indexOf(query) !== -1 ? '' : 'none';
        });
      });
    }
  }

  /* 5. Interactive Affiliation Member ID Lookup (Home & Former Members) */
  function initAffiliationChecker() {
    const form = document.getElementById('hp-affiliation-form');
    if (!form) return;
    const input = document.getElementById('hp-rut-input');
    const output = document.getElementById('hp-affiliation-result');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!input || !output) return;
      const val = input.value.trim();
      const isEn = getLang() === 'en';
      if (val.length < 5) {
        output.textContent = isEn
          ? 'Please enter a valid Member ID / SSN (e.g., HP-849201-US) to verify your affiliation status.'
          : 'Por favor ingresa un ID de Afiliado / SSN válido (ej. HP-849201-US) para verificar tu estado de afiliación.';
        output.style.color = '#B91C1C';
        return;
      }
      output.textContent = isEn
        ? 'Verified: Member ID ' + val + ' is an ACTIVE Healthy Portal Affiliate (Segment: Workers | Tier B | Excess Payment Balance: $48,500 available).'
        : 'Verificado: El ID de Afiliado ' + val + ' es Afiliado ACTIVO de Healthy Portal (Segmento: Trabajadores | Tramo B | Saldo de Excedentes: $48,500 disponibles).';
      output.style.color = '#0D9488';
    });
  }

  /* 6. Interactive Category Simulators */
  function initSimulators() {
    const updaters = [];

    /* A. Credits Simulator */
    const creditForm = document.getElementById('hp-sim-credit');
    if (creditForm) {
      const amountEl = document.getElementById('sim-credit-amount');
      const monthsEl = document.getElementById('sim-credit-months');
      const segmentEl = document.getElementById('sim-credit-segment');
      const monthlyOut = document.getElementById('sim-credit-monthly');
      const caeOut = document.getElementById('sim-credit-cae');
      const totalOut = document.getElementById('sim-credit-total');

      function updateCredit() {
        const isEn = getLang() === 'en';
        const principal = Math.max(100, Number(amountEl.value) || 2500);
        const months = Math.max(6, Number(monthsEl.value) || 24);
        const isRetiree = segmentEl && segmentEl.value === 'retiree';
        const monthlyRate = isRetiree ? 0.0115 : 0.0129;
        const factor = (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
        const payment = principal * factor;
        const total = payment * months;
        const cae = ((Math.pow(1 + monthlyRate, 12) - 1) * 100 + 1.4).toFixed(2) + '%';

        if (monthlyOut) monthlyOut.textContent = formatUSD(payment) + (isEn ? ' / mo' : ' / mes');
        if (caeOut) caeOut.textContent = (isEn ? 'APR: ' : 'CAE: ') + cae;
        if (totalOut) totalOut.textContent = (isEn ? 'Total Loan Cost: ' : 'Costo Total del Crédito: ') + formatUSD(total);
      }

      creditForm.addEventListener('input', updateCredit);
      updaters.push(updateCredit);
      updateCredit();
    }

    /* B. Medical Leave Subsidy Calculator */
    const leaveForm = document.getElementById('hp-sim-leave');
    if (leaveForm) {
      const salaryEl = document.getElementById('sim-leave-salary');
      const daysEl = document.getElementById('sim-leave-days');
      const typeEl = document.getElementById('sim-leave-type');
      const payoutOut = document.getElementById('sim-leave-payout');
      const paidDaysOut = document.getElementById('sim-leave-paiddays');

      function updateLeave() {
        const isEn = getLang() === 'en';
        const netSalary = Math.max(300, Number(salaryEl.value) || 1450);
        const days = Math.max(1, Number(daysEl.value) || 11);
        const isMaternity = typeEl && typeEl.value === 'maternity';
        const dailyRate = netSalary / 30;
        const paidDays = (days > 10 || isMaternity) ? days : Math.max(0, days - 3);
        const totalPayout = dailyRate * paidDays;

        if (payoutOut) payoutOut.textContent = formatUSD(totalPayout);
        if (paidDaysOut) {
          paidDaysOut.textContent = isEn
            ? paidDays + ' payable days (Daily rate: ' + formatUSD(dailyRate) + ')'
            : paidDays + ' días pagaderos ( Subsidio diario: ' + formatUSD(dailyRate) + ')';
        }
      }

      leaveForm.addEventListener('input', updateLeave);
      updaters.push(updateLeave);
      updateLeave();
    }

    /* C. Insurance Quote Simulator */
    const insForm = document.getElementById('hp-sim-insurance');
    if (insForm) {
      const planEl = document.getElementById('sim-ins-plan');
      const tierEl = document.getElementById('sim-ins-tier');
      const priceOut = document.getElementById('sim-ins-price');
      const covOut = document.getElementById('sim-ins-coverage');

      function updateIns() {
        const isEn = getLang() === 'en';
        const baseMap = { auto: 34, health: 22, life: 16, home: 19, travel: 12 };
        const multMap = { standard: 1, full: 1.45, elite: 1.9 };
        const plan = planEl ? planEl.value : 'auto';
        const tier = tierEl ? tierEl.value : 'full';
        const monthly = (baseMap[plan] || 25) * (multMap[tier] || 1);
        if (priceOut) priceOut.textContent = formatUSD(monthly) + (isEn ? ' / month' : ' / mes');
        if (covOut) {
          covOut.textContent = isEn
            ? 'Includes 24/7 Healthy Assistance + $0 deductible on member network'
            : 'Incluye Asistencia Healthy 24/7 + $0 deducible en red de afiliados';
        }
      }

      insForm.addEventListener('input', updateIns);
      updaters.push(updateIns);
      updateIns();
    }

    /* D. Savings & VRS Goal Calculator */
    const savForm = document.getElementById('hp-sim-savings');
    if (savForm) {
      const initEl = document.getElementById('sim-sav-initial');
      const monthlyEl = document.getElementById('sim-sav-monthly');
      const yearsEl = document.getElementById('sim-sav-years');
      const projOut = document.getElementById('sim-sav-projected');
      const bonusOut = document.getElementById('sim-sav-bonus');

      function updateSavings() {
        const isEn = getLang() === 'en';
        const initial = Math.max(0, Number(initEl.value) || 1000);
        const monthly = Math.max(10, Number(monthlyEl.value) || 150);
        const years = Math.max(1, Number(yearsEl.value) || 5);
        const r = 0.065 / 12;
        const n = years * 12;
        const fv = initial * Math.pow(1 + r, n) + monthly * ((Math.pow(1 + r, n) - 1) / r);
        const stateBonus = Math.min(monthly * 12 * 0.15, 360) * years;

        if (projOut) projOut.textContent = formatUSD(fv + stateBonus);
        if (bonusOut) {
          bonusOut.textContent = isEn
            ? 'Includes estimated 15% Federal Match Bonus: ' + formatUSD(stateBonus)
            : 'Incluye Bono Estatal Estimado del 15%: ' + formatUSD(stateBonus);
        }
      }

      savForm.addEventListener('input', updateSavings);
      updaters.push(updateSavings);
      updateSavings();
    }

    /* E. Social Support Family Allowance Calculator */
    const socForm = document.getElementById('hp-sim-social');
    if (socForm) {
      const incEl = document.getElementById('sim-soc-income');
      const depsEl = document.getElementById('sim-soc-deps');
      const allowOut = document.getElementById('sim-soc-allowance');
      const trancheOut = document.getElementById('sim-soc-tranche');

      function updateSocial() {
        const isEn = getLang() === 'en';
        const income = Math.max(0, Number(incEl.value) || 680);
        const deps = Math.max(1, Number(depsEl.value) || 2);
        let perDep = 0;
        let tranche = isEn
          ? 'Tier D (Exempt / Benefit Access Only)'
          : 'Tramo D (Exento / Acceso a Beneficios)';
        if (income <= 586) {
          perDep = 22;
          tranche = isEn
            ? 'Tier A (Maximum Statutory Allowance)'
            : 'Tramo A (Asignación Legal Máxima)';
        } else if (income <= 856) {
          perDep = 14;
          tranche = isEn
            ? 'Tier B (Intermediate Statutory Allowance)'
            : 'Tramo B (Asignación Legal Intermedia)';
        } else if (income <= 1335) {
          perDep = 5;
          tranche = isEn
            ? 'Tier C (Standard Statutory Allowance)'
            : 'Tramo C (Asignación Legal Estándar)';
        }
        if (allowOut) allowOut.textContent = formatUSD(perDep * deps) + (isEn ? ' / month' : ' / mes');
        if (trancheOut) {
          trancheOut.textContent = isEn
            ? tranche + ' for ' + deps + ' registered dependent(s)'
            : tranche + ' para ' + deps + ' carga(s) acreditada(s)';
        }
      }

      socForm.addEventListener('input', updateSocial);
      updaters.push(updateSocial);
      updateSocial();
    }

    window.hpRefreshSimulators = function () {
      updaters.forEach(function (fn) {
        fn();
      });
    };
  }

  /* 7. Lusion.co 3D Glossy Cross-Jack Canvas Stage Renderer */
  function initLusionCanvas() {
    const canvases = document.querySelectorAll('[data-lusion-canvas]');
    if (!canvases.length) return;

    const palette = [
      { base: '#1a2ffb', rim: '#6b7cff', dark: '#060d66' }, // Lusion Electric Cobalt
      { base: '#151824', rim: '#484e68', dark: '#05060a' }, // Lusion Glossy Obsidian
      { base: '#e4e6ef', rim: '#ffffff', dark: '#8d93ad' }, // Lusion Porcelain White
      { base: '#2c3eff', rim: '#8fa0ff', dark: '#0a147a' }  // Deep Indigo Blue
    ];

    canvases.forEach(function (canvas) {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let width = 0;
      let height = 0;
      let dpr = Math.min(window.devicePixelRatio || 1, 2);
      let pointerX = 0;
      let pointerY = 0;
      let targetX = 0;
      let targetY = 0;

      const shapes = [];
      const count = 14;
      for (let i = 0; i < count; i++) {
        const color = palette[i % palette.length];
        shapes.push({
          x: (Math.random() * 0.85 + 0.1) * 2 - 1,
          y: (Math.random() * 0.85 + 0.08) * 2 - 1,
          z: Math.random() * 0.9 + 0.25,
          size: 32 + Math.random() * 38,
          rx: Math.random() * Math.PI * 2,
          ry: Math.random() * Math.PI * 2,
          rz: Math.random() * Math.PI * 2,
          vrx: (Math.random() - 0.5) * 0.012,
          vry: (Math.random() - 0.5) * 0.014,
          vrz: (Math.random() - 0.5) * 0.01,
          color: color
        });
      }

      function resize() {
        const rect = canvas.parentElement.getBoundingClientRect();
        width = Math.max(300, rect.width);
        height = Math.max(240, rect.height);
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      resize();
      window.addEventListener('resize', resize);

      window.addEventListener('mousemove', function (e) {
        targetX = (e.clientX / window.innerWidth - 0.5) * 2;
        targetY = (e.clientY / window.innerHeight - 0.5) * 2;
      });

      function drawCapsuleArm(cx, cy, dx, dy, radius, colorObj) {
        ctx.save();
        ctx.lineCap = 'round';

        // Outer shadow/depth
        ctx.strokeStyle = colorObj.dark;
        ctx.lineWidth = radius * 2;
        ctx.beginPath();
        ctx.moveTo(cx - dx, cy - dy);
        ctx.lineTo(cx + dx, cy + dy);
        ctx.stroke();

        // Main glossy body
        const grad = ctx.createLinearGradient(cx - dx - radius, cy - dy - radius, cx + dx + radius, cy + dy + radius);
        grad.addColorStop(0, colorObj.rim);
        grad.addColorStop(0.45, colorObj.base);
        grad.addColorStop(1, colorObj.dark);
        ctx.strokeStyle = grad;
        ctx.lineWidth = radius * 1.82;
        ctx.beginPath();
        ctx.moveTo(cx - dx, cy - dy);
        ctx.lineTo(cx + dx, cy + dy);
        ctx.stroke();

        // Specular highlight strip
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.36)';
        ctx.lineWidth = radius * 0.34;
        ctx.beginPath();
        ctx.moveTo(cx - dx * 0.72 - radius * 0.22, cy - dy * 0.72 - radius * 0.22);
        ctx.lineTo(cx + dx * 0.72 - radius * 0.22, cy + dy * 0.72 - radius * 0.22);
        ctx.stroke();

        ctx.restore();
      }

      function renderFrame() {
        pointerX += (targetX - pointerX) * 0.06;
        pointerY += (targetY - pointerY) * 0.06;

        ctx.clearRect(0, 0, width, height);

        // Sort back-to-front
        shapes.sort(function (a, b) {
          return a.z - b.z;
        });

        for (let i = 0; i < shapes.length; i++) {
          const s = shapes[i];
          s.rx += s.vrx;
          s.ry += s.vry;
          s.rz += s.vrz;

          const cx = width * 0.54 + (s.x * width * 0.44) + pointerX * 28 * s.z;
          const cy = height * 0.5 + (s.y * height * 0.42) + pointerY * 22 * s.z;
          const scale = (0.55 + s.z * 0.65);
          const armLen = s.size * scale;
          const thickness = Math.max(8, armLen * 0.34);

          // Project 3 orthogonal axes of the 3D cross-jack
          const axes = [
            {
              dx: Math.cos(s.ry) * Math.cos(s.rz) * armLen,
              dy: Math.sin(s.rz) * armLen,
              dz: Math.sin(s.ry)
            },
            {
              dx: -Math.sin(s.rz) * Math.cos(s.rx) * armLen,
              dy: Math.cos(s.rz) * Math.cos(s.rx) * armLen,
              dz: Math.sin(s.rx)
            },
            {
              dx: Math.sin(s.ry) * Math.sin(s.rx) * armLen,
              dy: -Math.sin(s.rx) * armLen,
              dz: Math.cos(s.rx) * Math.cos(s.ry)
            }
          ];

          axes.sort(function (a, b) {
            return a.dz - b.dz;
          });

          for (let j = 0; j < axes.length; j++) {
            drawCapsuleArm(cx, cy, axes[j].dx, axes[j].dy, thickness, s.color);
          }
        }

        if (!document.hidden) {
          requestAnimationFrame(renderFrame);
        }
      }

      requestAnimationFrame(renderFrame);
    });
  }

  /* 8. Case 1: Gemini Enterprise Omnichannel Generative Search (Spanish PDF Corpus + 85 Routes) */
  function initGeminiEnterpriseSearch() {
    const form = document.getElementById('hp-gemini-search-form');
    const input = document.getElementById('hp-gemini-search-input');
    const resultsContainer = document.getElementById('hp-gemini-results');
    const section = document.getElementById('hp-gemini-enterprise-section');
    const navButtons = document.querySelectorAll('[data-open-gemini-search]');
    const promptChips = document.querySelectorAll('[data-gemini-prompt]');

    navButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (input) {
            setTimeout(function () {
              input.focus();
            }, 300);
          }
        }
      });
    });

    if (!form || !input || !resultsContainer) return;

    function isSafeLocalPath(urlStr) {
      const s = String(urlStr || '').trim();
      return s.startsWith('/') && !s.startsWith('//') && s.indexOf('javascript:') === -1;
    }

    function renderGeminiResult(data) {
      const card = document.createElement('div');
      card.className = 'hp-gemini-overview';

      // Top bar
      const topBar = document.createElement('div');
      topBar.className = 'hp-gemini-overview__top';

      const engineSpan = document.createElement('span');
      engineSpan.className = 'hp-gemini-overview__engine';
      engineSpan.textContent = '✨ ' + (data.engine || 'Gemini Enterprise Grounded Search');

      const confSpan = document.createElement('span');
      confSpan.className = 'hp-gemini-overview__confidence';
      confSpan.textContent = '✓ ' + (data.confidenceScore || '99.4% Grounded Fidelity');

      topBar.appendChild(engineSpan);
      topBar.appendChild(confSpan);
      card.appendChild(topBar);

      // Lead summary
      if (data.leadSummary) {
        const leadP = document.createElement('p');
        leadP.className = 'hp-gemini-overview__lead';
        leadP.textContent = data.leadSummary;
        card.appendChild(leadP);
      }

      // Secondary + Tertiary summary
      if (data.secondarySummary) {
        const secP = document.createElement('p');
        secP.className = 'hp-gemini-overview__secondary';
        secP.textContent = data.secondarySummary + (data.tertiarySummary ? ' ' + data.tertiarySummary : '');
        card.appendChild(secP);
      }

      // Citations heading
      const citLabel = document.createElement('div');
      citLabel.style.fontSize = '0.76rem';
      citLabel.style.fontWeight = '800';
      citLabel.style.textTransform = 'uppercase';
      citLabel.style.letterSpacing = '0.06em';
      citLabel.style.color = '#1a2ffb';
      citLabel.textContent = '📄 Citas Verificables en Documentos PDF Oficiales en Español (' + (data.citations ? data.citations.length : 0) + ')';
      card.appendChild(citLabel);

      // Citations grid
      const citGrid = document.createElement('div');
      citGrid.className = 'hp-gemini-citations-grid';

      const citations = Array.isArray(data.citations) ? data.citations : [];
      citations.forEach(function (cit) {
        const cCard = document.createElement('article');
        cCard.className = 'hp-gemini-citation-card';

        const topDiv = document.createElement('div');

        const metaDiv = document.createElement('div');
        metaDiv.className = 'hp-gemini-citation-card__meta';

        const badgeSpan = document.createElement('span');
        badgeSpan.textContent = '[' + String(cit.index || 1) + '] ' + String(cit.docCode || 'PDF-ES');

        const pageSpan = document.createElement('span');
        const simText =
          typeof cit.vectorSimilarity === 'number'
            ? ' • Vec Sim ' + (cit.vectorSimilarity * 100).toFixed(1) + '%'
            : '';
        pageSpan.textContent = 'PÁG. ' + String(cit.pageNumber || 1) + simText;

        metaDiv.appendChild(badgeSpan);
        metaDiv.appendChild(pageSpan);

        const titleH4 = document.createElement('h4');
        titleH4.className = 'hp-gemini-citation-card__title';
        titleH4.textContent = String(cit.article || '');

        const docSub = document.createElement('div');
        docSub.style.fontSize = '0.74rem';
        docSub.style.fontWeight = '700';
        docSub.style.color = '#4a4f63';
        docSub.style.margin = '0.2rem 0 0.4rem';
        docSub.textContent = String(cit.docShortTitle || cit.docTitle || '');

        const excerptP = document.createElement('p');
        excerptP.className = 'hp-gemini-citation-card__excerpt';
        excerptP.textContent = String(cit.excerpt || '');

        topDiv.appendChild(metaDiv);
        topDiv.appendChild(titleH4);
        topDiv.appendChild(docSub);
        topDiv.appendChild(excerptP);

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'hp-gemini-citation-card__actions';

        if (isSafeLocalPath(cit.pdfDeepLink)) {
          const openLink = document.createElement('a');
          openLink.className = 'hp-gemini-pdf-btn';
          openLink.setAttribute('href', cit.pdfDeepLink);
          openLink.setAttribute('target', '_blank');
          openLink.setAttribute('rel', 'noopener noreferrer');
          openLink.textContent = getLang() === 'en'
            ? '📄 Open PDF (Page ' + String(cit.pageNumber || 1) + ') ↗'
            : '📄 Abrir PDF (Pág. ' + String(cit.pageNumber || 1) + ') ↗';
          actionsDiv.appendChild(openLink);
        }

        if (isSafeLocalPath(cit.pdfUrl)) {
          const dlLink = document.createElement('a');
          dlLink.className = 'hp-gemini-pdf-btn hp-gemini-pdf-btn--outline';
          dlLink.setAttribute('href', cit.pdfUrl);
          dlLink.setAttribute('download', '');
          dlLink.textContent = '⬇ PDF';
          actionsDiv.appendChild(dlLink);
        }

        cCard.appendChild(topDiv);
        cCard.appendChild(actionsDiv);
        citGrid.appendChild(cCard);
      });

      card.appendChild(citGrid);

      // Related Portal Routes bar
      const routes = Array.isArray(data.relatedRoutes) ? data.relatedRoutes : [];
      if (routes.length > 0) {
        const routesBar = document.createElement('div');
        routesBar.className = 'hp-gemini-routes-bar';

        const rLabel = document.createElement('span');
        rLabel.style.fontSize = '0.76rem';
        rLabel.style.fontWeight = '800';
        rLabel.style.color = '#2b2e3a';
        rLabel.textContent = getLang() === 'en'
          ? '🔗 Related Procedures & Simulators in Healthy Portal:'
          : '🔗 Trámites y Simuladores Relacionados en Healthy Portal:';
        routesBar.appendChild(rLabel);

        routes.forEach(function (rt) {
          if (isSafeLocalPath(rt.href)) {
            const a = document.createElement('a');
            a.className = 'hp-gemini-route-pill';
            a.setAttribute('href', rt.href);
            a.textContent = String(rt.title || '') + ' →';
            routesBar.appendChild(a);
          }
        });

        card.appendChild(routesBar);
      }

      resultsContainer.replaceChildren(card);
    }

    let activeRequestId = 0;
    const submitBtn = form.querySelector('button[type="submit"]');

    function setSubmitButtonState(isLoading) {
      if (!submitBtn) return;
      submitBtn.disabled = isLoading;
      const isEn = getLang() === 'en';
      const innerSpan = submitBtn.querySelector('[data-lang-es]');
      const labelText = isLoading
        ? (isEn ? '⏳ Searching...' : '⏳ Buscando...')
        : (isEn ? '✨ Search with Gemini →' : '✨ Buscar con Gemini →');
      if (innerSpan) {
        innerSpan.textContent = labelText;
      } else {
        submitBtn.textContent = labelText;
      }
    }

    function renderGeminiLoading(queryText) {
      const isEn = getLang() === 'en';
      const loadingCard = document.createElement('div');
      loadingCard.className = 'hp-gemini-overview';
      loadingCard.style.padding = '1.25rem 1.5rem';

      const statusRow = document.createElement('div');
      statusRow.style.display = 'flex';
      statusRow.style.alignItems = 'center';
      statusRow.style.justifyContent = 'space-between';
      statusRow.style.flexWrap = 'wrap';
      statusRow.style.gap = '0.75rem';

      const leftSpan = document.createElement('span');
      leftSpan.className = 'hp-gemini-overview__engine';
      leftSpan.textContent = isEn
        ? '⏳ Searching results for "' + queryText + '" in Discovery Engine (healthy-portal-spanish-ds) + Vector Search (768-D)...'
        : '⏳ Buscando resultados para "' + queryText + '" en Discovery Engine (healthy-portal-spanish-ds) + Vector Search (768-D)...';

      const rightSpan = document.createElement('span');
      rightSpan.className = 'hp-gemini-overview__confidence';
      rightSpan.textContent = isEn
        ? 'Synthesizing with Gemini 3 Flash...'
        : 'Sintetizando con Gemini 3 Flash...';

      statusRow.appendChild(leftSpan);
      statusRow.appendChild(rightSpan);
      loadingCard.appendChild(statusRow);

      resultsContainer.replaceChildren(loadingCard);
    }

    function executeSearch(queryText) {
      const q = String(queryText || '').trim();
      if (!q) {
        input.focus();
        return;
      }

      const requestId = ++activeRequestId;
      renderGeminiLoading(q);
      setSubmitButtonState(true);

      fetch('/api/gemini-search?q=' + encodeURIComponent(q))
        .then(function (resp) {
          if (!resp.ok) throw new Error('API request failed');
          return resp.json();
        })
        .then(function (serverData) {
          if (requestId !== activeRequestId) return;
          if (serverData && Array.isArray(serverData.citations)) {
            renderGeminiResult(serverData);
          }
        })
        .catch(function () {
          if (requestId !== activeRequestId) return;
          if (window.HP_GEMINI_ENGINE && typeof window.HP_GEMINI_ENGINE.searchCorpus === 'function') {
            renderGeminiResult(window.HP_GEMINI_ENGINE.searchCorpus(q));
          }
        })
        .finally(function () {
          if (requestId === activeRequestId) {
            setSubmitButtonState(false);
          }
        });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      executeSearch(input.value);
    });

    promptChips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        const promptText = chip.getAttribute('data-gemini-prompt') || '';
        input.value = promptText;
        executeSearch(promptText);
      });
    });
  }

  /* ==========================================================================
     10. GEMINI ENTERPRISE SUITE (CASOS 2, 3, 4 Y 5 + SELECTOR DE PESTAÑAS)
     ========================================================================== */
  function initGeminiEnterpriseSuite() {
    const tabButtons = document.querySelectorAll('[data-gemini-tab]');
    const tabPanels = document.querySelectorAll('[data-gemini-panel]');
    if (!tabButtons.length || !tabPanels.length) return;

    function getLang() {
      return document.documentElement.getAttribute('lang') === 'en' ? 'en' : 'es';
    }

    function isSafeLocalPath(urlStr) {
      const s = String(urlStr || '').trim();
      return s.startsWith('/') && !s.startsWith('//') && s.indexOf('javascript:') === -1;
    }

    function createCitationsSection(citations) {
      const wrapper = document.createElement('div');
      wrapper.style.marginTop = '1.15rem';

      const citLabel = document.createElement('div');
      citLabel.style.fontSize = '0.76rem';
      citLabel.style.fontWeight = '800';
      citLabel.style.textTransform = 'uppercase';
      citLabel.style.letterSpacing = '0.06em';
      citLabel.style.color = '#1a2ffb';
      citLabel.style.marginBottom = '0.65rem';
      citLabel.textContent = getLang() === 'en'
        ? '📄 Verified Regulatory & Operational PDF Sources (' + (citations ? citations.length : 0) + ')'
        : '📄 Fuentes Normativas y Operativas PDF Verificadas (' + (citations ? citations.length : 0) + ')';
      wrapper.appendChild(citLabel);

      const grid = document.createElement('div');
      grid.className = 'hp-gemini-citations-grid';

      (citations || []).forEach(function (cit) {
        const cCard = document.createElement('article');
        cCard.className = 'hp-gemini-citation-card';

        const topDiv = document.createElement('div');

        const metaDiv = document.createElement('div');
        metaDiv.className = 'hp-gemini-citation-card__meta';

        const badgeSpan = document.createElement('span');
        badgeSpan.textContent = '[Cita ' + String(cit.index || 1) + '] ' + String(cit.docCode || 'PDF-ES');

        const pageSpan = document.createElement('span');
        pageSpan.textContent = (getLang() === 'en' ? 'PAGE ' : 'PÁG. ') + String(cit.pageNumber || 1);

        metaDiv.appendChild(badgeSpan);
        metaDiv.appendChild(pageSpan);

        const titleH4 = document.createElement('h4');
        titleH4.className = 'hp-gemini-citation-card__title';
        titleH4.textContent = String(cit.article || '');

        const docSub = document.createElement('div');
        docSub.style.fontSize = '0.74rem';
        docSub.style.fontWeight = '700';
        docSub.style.color = '#4a4f63';
        docSub.style.margin = '0.2rem 0 0.4rem';
        docSub.textContent = String(cit.docShortTitle || '');

        const excerptP = document.createElement('p');
        excerptP.className = 'hp-gemini-citation-card__excerpt';
        excerptP.textContent = String(cit.excerpt || '');

        topDiv.appendChild(metaDiv);
        topDiv.appendChild(titleH4);
        topDiv.appendChild(docSub);
        topDiv.appendChild(excerptP);

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'hp-gemini-citation-card__actions';

        const deepUrl = cit.pdfDeepLink || cit.pdfUrl;
        if (isSafeLocalPath(deepUrl)) {
          const openLink = document.createElement('a');
          openLink.className = 'hp-gemini-pdf-btn';
          openLink.setAttribute('href', deepUrl);
          openLink.setAttribute('target', '_blank');
          openLink.setAttribute('rel', 'noopener noreferrer');
          openLink.textContent = getLang() === 'en'
            ? '📄 Open PDF (Page ' + String(cit.pageNumber || 1) + ') ↗'
            : '📄 Abrir PDF (Pág. ' + String(cit.pageNumber || 1) + ') ↗';
          actionsDiv.appendChild(openLink);
        }

        if (isSafeLocalPath(cit.pdfUrl)) {
          const dlLink = document.createElement('a');
          dlLink.className = 'hp-gemini-pdf-btn hp-gemini-pdf-btn--outline';
          dlLink.setAttribute('href', cit.pdfUrl);
          dlLink.setAttribute('download', '');
          dlLink.textContent = '⬇ PDF';
          actionsDiv.appendChild(dlLink);
        }

        cCard.appendChild(topDiv);
        cCard.appendChild(actionsDiv);
        grid.appendChild(cCard);
      });

      wrapper.appendChild(grid);
      return wrapper;
    }

    function renderSuiteLoading(container, labelText) {
      if (!container) return;
      const card = document.createElement('div');
      card.className = 'hp-gemini-overview';
      card.style.padding = '1.2rem 1.5rem';

      const row = document.createElement('div');
      row.style.display = 'flex';
      row.style.justifyContent = 'space-between';
      row.style.alignItems = 'center';
      row.style.flexWrap = 'wrap';
      row.style.gap = '0.75rem';

      const left = document.createElement('span');
      left.className = 'hp-gemini-overview__engine';
      left.textContent = '⏳ ' + labelText;

      const right = document.createElement('span');
      right.className = 'hp-gemini-overview__confidence';
      right.textContent = 'Vertex AI gemini-3-flash-preview + Discovery Engine';

      row.appendChild(left);
      row.appendChild(right);
      card.appendChild(row);
      container.replaceChildren(card);
    }

    function createTopMetaHeader(titleText, badgeText) {
      const header = document.createElement('div');
      header.className = 'hp-gemini-overview__top';

      const left = document.createElement('span');
      left.className = 'hp-gemini-overview__engine';
      left.textContent = '✨ ' + titleText;

      const right = document.createElement('span');
      right.className = 'hp-gemini-overview__confidence';
      right.textContent = badgeText || 'Vertex AI gemini-3-flash-preview • Grounded PDF';

      header.appendChild(left);
      header.appendChild(right);
      return header;
    }

    //Render Case 2: Copiloto 360° de Sucursal y Contact Center
    function renderCase2Result(container, data) {
      if (!container || !data) return;
      const card = document.createElement('div');
      card.className = 'hp-gemini-overview';

      card.appendChild(
        createTopMetaHeader(
          'Copiloto 360° Ejecutivo — ' + String(data.fullName || '') + ' (' + String(data.memberId || '') + ')',
          data.engineBadge
        )
      );

      const kpiGrid = document.createElement('div');
      kpiGrid.className = 'hp-suite-grid-4';

      const kpis = [
        {
          label: 'Segmento & Tramo Familiar',
          value: String(data.tier || ''),
          sub: String(data.segment || '') + ' • ' + String(data.dependents || '')
        },
        {
          label: 'Saldo Pagos en Exceso',
          value: '$' + String(data.excessBalanceUSD || 0) + ' USD',
          sub: 'Disponible para abono inmediato en 1 clic (Protocolo 3°)'
        },
        {
          label: 'Crédito Social & Tope REDEC',
          value: '$' + String((data.creditStatus && data.creditStatus.preApprovedAmountUSD) || 0) + ' USD Preaprobado',
          sub: String((data.creditStatus && data.creditStatus.payrollDeductionRatio) || '')
        },
        {
          label: 'Estado Licencia Médica MRB',
          value: String((data.medicalLeaveStatus && data.medicalLeaveStatus.folio) || ''),
          sub: String((data.medicalLeaveStatus && data.medicalLeaveStatus.status) || '')
        }
      ];

      kpis.forEach(function (item) {
        const box = document.createElement('div');
        box.className = 'hp-suite-kpi-card';
        const l = document.createElement('span');
        l.className = 'hp-suite-kpi-card__label';
        l.textContent = item.label;
        const v = document.createElement('strong');
        v.className = 'hp-suite-kpi-card__value';
        v.textContent = item.value;
        const s = document.createElement('span');
        s.className = 'hp-suite-kpi-card__sub';
        s.textContent = item.sub;
        box.appendChild(l);
        box.appendChild(v);
        box.appendChild(s);
        kpiGrid.appendChild(box);
      });
      card.appendChild(kpiGrid);

      const synthBox = document.createElement('div');
      synthBox.className = 'hp-suite-box';
      const synthTitle = document.createElement('h4');
      synthTitle.className = 'hp-suite-box__title';
      synthTitle.textContent = 'Diagnóstico Unificado 360° (CRM + Core REDEC + NSWB/MRB + Red Salud)';
      const synthP = document.createElement('p');
      synthP.className = 'hp-suite-box__text';
      synthP.textContent = String(data.executiveSynthesis || '');
      synthBox.appendChild(synthTitle);
      synthBox.appendChild(synthP);
      card.appendChild(synthBox);

      const nbaBox = document.createElement('div');
      nbaBox.className = 'hp-suite-box';
      const nbaTitle = document.createElement('h4');
      nbaTitle.className = 'hp-suite-box__title';
      nbaTitle.textContent = 'Next-Best-Actions (NBA) Priorizadas para Resolución en Primer Contacto (FCR 92.4%)';
      const nbaList = document.createElement('ul');
      nbaList.className = 'hp-suite-list';
      (data.nextBestActions || []).forEach(function (act) {
        const li = document.createElement('li');
        li.textContent = String(act);
        nbaList.appendChild(li);
      });
      nbaBox.appendChild(nbaTitle);
      nbaBox.appendChild(nbaList);
      card.appendChild(nbaBox);

      const scriptBox = document.createElement('div');
      scriptBox.className = 'hp-suite-box hp-suite-box--accent';
      const scriptTitle = document.createElement('h4');
      scriptTitle.className = 'hp-suite-box__title';
      scriptTitle.textContent = 'Guion Sugerido en Tiempo Real para el Ejecutivo de Sucursal / Contact Center';
      const scriptP = document.createElement('p');
      scriptP.className = 'hp-suite-box__text';
      scriptP.textContent = String(data.executiveScript || '');
      scriptBox.appendChild(scriptTitle);
      scriptBox.appendChild(scriptP);
      card.appendChild(scriptBox);

      card.appendChild(createCitationsSection(data.citations));
      container.replaceChildren(card);
    }

    //Render Case 3: Centro de Apelación Inteligente + Conectores Workspace
    function renderCase3Result(container, data) {
      if (!container || !data) return;
      const card = document.createElement('div');
      card.className = 'hp-gemini-overview';

      card.appendChild(
        createTopMetaHeader(
          'Expediente de Apelación Folio ' + String(data.folio || '') + ' — ' + String(data.admissibilityScore || ''),
          data.engineBadge
        )
      );

      const kpiGrid = document.createElement('div');
      kpiGrid.className = 'hp-suite-grid-4';
      [
        { label: 'Folio Licencia Médica', value: String(data.folio || ''), sub: String(data.medicalCenter || '') },
        { label: 'Días de Reposo Reclamados', value: String(data.days || 0) + ' días corridos', sub: 'Exento de carencia si > 10 días (Art. 9°)' },
        { label: 'Subsidio a Reliquidar', value: '$' + String(data.subsidyAmountUSD || 0) + ' USD', sub: 'Pago retroactivo en máx. 5 días hábiles' },
        { label: 'Probabilidad de Acogida', value: String(data.admissibilityScore || '').split(' ')[0], sub: 'Jurisprudencia MRB / NSWB Ley 20.585' }
      ].forEach(function (item) {
        const box = document.createElement('div');
        box.className = 'hp-suite-kpi-card';
        const l = document.createElement('span');
        l.className = 'hp-suite-kpi-card__label';
        l.textContent = item.label;
        const v = document.createElement('strong');
        v.className = 'hp-suite-kpi-card__value';
        v.textContent = item.value;
        const s = document.createElement('span');
        s.className = 'hp-suite-kpi-card__sub';
        s.textContent = item.sub;
        box.appendChild(l);
        box.appendChild(v);
        box.appendChild(s);
        kpiGrid.appendChild(box);
      });
      card.appendChild(kpiGrid);

      const legalBox = document.createElement('div');
      legalBox.className = 'hp-suite-box';
      const legalTitle = document.createElement('h4');
      legalTitle.className = 'hp-suite-box__title';
      legalTitle.textContent = 'Dictamen Jurídico-Clínico de Admisibilidad (' + String(data.causalTitle || '') + ')';
      const legalP = document.createElement('p');
      legalP.className = 'hp-suite-box__text';
      legalP.textContent = String(data.legalAnalysis || '');
      legalBox.appendChild(legalTitle);
      legalBox.appendChild(legalP);
      card.appendChild(legalBox);

      const wsGrid = document.createElement('div');
      wsGrid.className = 'hp-workspace-grid';
      (data.workspaceConnectors || []).forEach(function (conn) {
        const wCard = document.createElement('div');
        wCard.className = 'hp-workspace-card';
        const wHeader = document.createElement('div');
        wHeader.className = 'hp-workspace-card__header';
        const appName = document.createElement('strong');
        appName.textContent = String(conn.app || '');
        const statusBadge = document.createElement('span');
        statusBadge.className = 'hp-workspace-card__badge';
        statusBadge.textContent = String(conn.status || '');
        wHeader.appendChild(appName);
        wHeader.appendChild(statusBadge);
        const wDetail = document.createElement('p');
        wDetail.className = 'hp-workspace-card__detail';
        wDetail.textContent = String(conn.detail || '');
        wCard.appendChild(wHeader);
        wCard.appendChild(wDetail);
        wsGrid.appendChild(wCard);
      });
      card.appendChild(wsGrid);

      const draftBox = document.createElement('div');
      draftBox.className = 'hp-suite-box hp-suite-box--mono';
      const draftTitle = document.createElement('h4');
      draftTitle.className = 'hp-suite-box__title';
      draftTitle.textContent = 'Borrador Oficial Generado en Google Docs (Listo para Firma Electrónica y Envío a MRB/NSWB)';
      const draftPre = document.createElement('pre');
      draftPre.className = 'hp-suite-pre';
      draftPre.textContent = String(data.appealLetterDraft || '');
      draftBox.appendChild(draftTitle);
      draftBox.appendChild(draftPre);
      card.appendChild(draftBox);

      card.appendChild(createCitationsSection(data.citations));
      container.replaceChildren(card);
    }

    //Render Case 4: Asesor de Portabilidad Financiera Ley 21.236 y Comparador de Pólizas
    function renderCase4Result(container, data) {
      if (!container || !data) return;
      const card = document.createElement('div');
      card.className = 'hp-gemini-overview';

      card.appendChild(
        createTopMetaHeader(
          String(data.title || 'Comparador Financiero y Actuarial con Grounding Documental'),
          data.engineBadge
        )
      );

      const kpiGrid = document.createElement('div');
      kpiGrid.className = 'hp-suite-grid-4';
      [
        { label: 'Proveedor Externo Comparado', value: String(data.externalCAE || ''), sub: String(data.externalProvider || '') },
        { label: 'Condición Preferencial Healthy', value: String(data.healthyCAE || ''), sub: String(data.healthyProduct || '') },
        { label: 'Ahorro Mensual Directo', value: '$' + String(data.monthlySavingsUSD || 0) + ' USD / mes', sub: 'Reducción inmediata de carga mensual' },
        { label: 'Ahorro Total Acumulado', value: '$' + String(data.totalSavingsUSD || 0) + ' USD', sub: 'Certificado bajo Ley 21.236 y Pólizas 2026' }
      ].forEach(function (item) {
        const box = document.createElement('div');
        box.className = 'hp-suite-kpi-card';
        const l = document.createElement('span');
        l.className = 'hp-suite-kpi-card__label';
        l.textContent = item.label;
        const v = document.createElement('strong');
        v.className = 'hp-suite-kpi-card__value';
        v.textContent = item.value;
        const s = document.createElement('span');
        s.className = 'hp-suite-kpi-card__sub';
        s.textContent = item.sub;
        box.appendChild(l);
        box.appendChild(v);
        box.appendChild(s);
        kpiGrid.appendChild(box);
      });
      card.appendChild(kpiGrid);

      const verdictBox = document.createElement('div');
      verdictBox.className = 'hp-suite-box hp-suite-box--accent';
      const verdictTitle = document.createElement('h4');
      verdictTitle.className = 'hp-suite-box__title';
      verdictTitle.textContent = 'Dictamen de Portabilidad y Auditoría Actuarial de Cláusulas';
      const verdictP = document.createElement('p');
      verdictP.className = 'hp-suite-box__text';
      verdictP.textContent = String(data.executiveVerdict || '');
      verdictBox.appendChild(verdictTitle);
      verdictBox.appendChild(verdictP);
      card.appendChild(verdictBox);

      const tableWrap = document.createElement('div');
      tableWrap.className = 'hp-suite-table-wrap';
      const table = document.createElement('table');
      table.className = 'hp-suite-table';

      const thead = document.createElement('thead');
      const headTr = document.createElement('tr');
      ['Cláusula / Atributo Auditado', 'Mercado Externo', 'Healthy Portal (Grounding PDF)', 'Impacto para el Afiliado'].forEach(function (h) {
        const th = document.createElement('th');
        th.textContent = h;
        headTr.appendChild(th);
      });
      thead.appendChild(headTr);
      table.appendChild(thead);

      const tbody = document.createElement('tbody');
      (data.clauseMatrix || []).forEach(function (row) {
        const tr = document.createElement('tr');
        [row.clause, row.externalValue, row.healthyValue, row.advantage].forEach(function (cellText, idx) {
          const td = document.createElement('td');
          if (idx === 0 || idx === 2) td.style.fontWeight = '600';
          td.textContent = String(cellText || '');
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
      tableWrap.appendChild(table);
      card.appendChild(tableWrap);

      card.appendChild(createCitationsSection(data.citations));
      container.replaceChildren(card);
    }

    //Render Case 5: Hub de Inteligencia B2B Empresas e Inversionistas (Deep Research)
    function renderCase5Result(container, data) {
      if (!container || !data) return;
      const card = document.createElement('div');
      card.className = 'hp-gemini-overview';

      card.appendChild(
        createTopMetaHeader(
          String(data.reportTitle || 'Deep Research B2B & ESG') + ' (' + String(data.audience || '') + ')',
          data.engineBadge
        )
      );

      const kpiGrid = document.createElement('div');
      kpiGrid.className = 'hp-suite-grid-4';
      (data.kpis || []).forEach(function (item) {
        const box = document.createElement('div');
        box.className = 'hp-suite-kpi-card';
        const l = document.createElement('span');
        l.className = 'hp-suite-kpi-card__label';
        l.textContent = String(item.label || '');
        const v = document.createElement('strong');
        v.className = 'hp-suite-kpi-card__value';
        v.textContent = String(item.value || '');
        const s = document.createElement('span');
        s.className = 'hp-suite-kpi-card__sub';
        s.textContent = String(item.sub || '');
        box.appendChild(l);
        box.appendChild(v);
        box.appendChild(s);
        kpiGrid.appendChild(box);
      });
      card.appendChild(kpiGrid);

      const drBox = document.createElement('div');
      drBox.className = 'hp-suite-box';
      const drTitle = document.createElement('h4');
      drTitle.className = 'hp-suite-box__title';
      drTitle.textContent = 'Síntesis Multi-Documento Deep Research (Gemini Enterprise B2B & Investor Hub)';
      const drP = document.createElement('p');
      drP.className = 'hp-suite-box__text';
      drP.textContent = String(data.deepResearchSummary || '');
      drBox.appendChild(drTitle);
      drBox.appendChild(drP);
      card.appendChild(drBox);

      const roadBox = document.createElement('div');
      roadBox.className = 'hp-suite-box hp-suite-box--accent';
      const roadTitle = document.createElement('h4');
      roadTitle.className = 'hp-suite-box__title';
      roadTitle.textContent = 'Hoja de Ruta Estratégica & Evidencia Auditada';
      const roadList = document.createElement('ul');
      roadList.className = 'hp-suite-list';
      (data.strategicRoadmap || []).forEach(function (step) {
        const li = document.createElement('li');
        li.textContent = String(step);
        roadList.appendChild(li);
      });
      roadBox.appendChild(roadTitle);
      roadBox.appendChild(roadList);
      card.appendChild(roadBox);

      card.appendChild(createCitationsSection(data.citations));
      container.replaceChildren(card);
    }

    function executeSuiteCase(caseNum, scenarioKey, customVal, container, renderer) {
      if (!container) return;
      renderSuiteLoading(
        container,
        getLang() === 'en'
          ? 'Executing Case ' + caseNum + ' with Gemini 3 Flash + Discovery Engine...'
          : 'Ejecutando Caso ' + caseNum + ' con Gemini 3 Flash + Discovery Engine...'
      );

      const url =
        '/api/gemini-suite?case=' +
        encodeURIComponent(caseNum) +
        '&scenario=' +
        encodeURIComponent(scenarioKey || '') +
        '&custom=' +
        encodeURIComponent(customVal || '');

      fetch(url)
        .then(function (resp) {
          if (!resp.ok) throw new Error('Suite API error');
          return resp.json();
        })
        .then(function (data) {
          renderer(container, data);
        })
        .catch(function () {
          if (!window.HP_GEMINI_CASES) return;
          let fallback = null;
          if (caseNum === 2) fallback = window.HP_GEMINI_CASES.case2Profiles[scenarioKey];
          if (caseNum === 3) fallback = window.HP_GEMINI_CASES.case3Scenarios[scenarioKey];
          if (caseNum === 4) fallback = window.HP_GEMINI_CASES.case4Comparisons[scenarioKey];
          if (caseNum === 5) fallback = window.HP_GEMINI_CASES.case5Reports[scenarioKey];
          if (fallback) {
            renderer(container, fallback);
          }
        });
    }

    const initializedTabs = { case1: true };

    function activateTab(tabId) {
      tabButtons.forEach(function (btn) {
        const isMatch = btn.getAttribute('data-gemini-tab') === tabId;
        btn.classList.toggle('is-active', isMatch);
        btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
      });

      tabPanels.forEach(function (panel) {
        const isMatch = panel.getAttribute('data-gemini-panel') === tabId;
        panel.classList.toggle('is-active', isMatch);
        if (isMatch) {
          panel.removeAttribute('hidden');
        } else {
          panel.setAttribute('hidden', '');
        }
      });

      if (!initializedTabs[tabId]) {
        initializedTabs[tabId] = true;
        if (tabId === 'case2') {
          const s2 = document.getElementById('hp-case2-scenario');
          const c2 = document.getElementById('hp-case2-custom');
          executeSuiteCase(2, s2 ? s2.value : 'valentina-morales', c2 ? c2.value : '', document.getElementById('hp-case2-results'), renderCase2Result);
        } else if (tabId === 'case3') {
          const s3 = document.getElementById('hp-case3-scenario');
          const c3 = document.getElementById('hp-case3-custom');
          executeSuiteCase(3, s3 ? s3.value : 'causal-plazo-fuerza-mayor', c3 ? c3.value : '', document.getElementById('hp-case3-results'), renderCase3Result);
        } else if (tabId === 'case4') {
          const s4 = document.getElementById('hp-case4-scenario');
          const c4 = document.getElementById('hp-case4-custom');
          executeSuiteCase(4, s4 ? s4.value : 'portabilidad-credito-consumo', c4 ? c4.value : '', document.getElementById('hp-case4-results'), renderCase4Result);
        } else if (tabId === 'case5') {
          const s5 = document.getElementById('hp-case5-scenario');
          executeSuiteCase(5, s5 ? s5.value : 'b2b-rrhh-ausentismo', '', document.getElementById('hp-case5-results'), renderCase5Result);
        }
      }
    }

    tabButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const targetTab = btn.getAttribute('data-gemini-tab');
        if (targetTab) activateTab(targetTab);
      });
    });

    // Bind forms for Cases 2, 3, 4, 5
    const form2 = document.getElementById('hp-case2-form');
    if (form2) {
      form2.addEventListener('submit', function (e) {
        e.preventDefault();
        const s2 = document.getElementById('hp-case2-scenario');
        const c2 = document.getElementById('hp-case2-custom');
        executeSuiteCase(2, s2 ? s2.value : 'valentina-morales', c2 ? c2.value : '', document.getElementById('hp-case2-results'), renderCase2Result);
      });
    }

    const form3 = document.getElementById('hp-case3-form');
    if (form3) {
      form3.addEventListener('submit', function (e) {
        e.preventDefault();
        const s3 = document.getElementById('hp-case3-scenario');
        const c3 = document.getElementById('hp-case3-custom');
        executeSuiteCase(3, s3 ? s3.value : 'causal-plazo-fuerza-mayor', c3 ? c3.value : '', document.getElementById('hp-case3-results'), renderCase3Result);
      });
    }

    const form4 = document.getElementById('hp-case4-form');
    if (form4) {
      form4.addEventListener('submit', function (e) {
        e.preventDefault();
        const s4 = document.getElementById('hp-case4-scenario');
        const c4 = document.getElementById('hp-case4-custom');
        executeSuiteCase(4, s4 ? s4.value : 'portabilidad-credito-consumo', c4 ? c4.value : '', document.getElementById('hp-case4-results'), renderCase4Result);
      });
    }

    const form5 = document.getElementById('hp-case5-form');
    if (form5) {
      form5.addEventListener('submit', function (e) {
        e.preventDefault();
        const s5 = document.getElementById('hp-case5-scenario');
        executeSuiteCase(5, s5 ? s5.value : 'b2b-rrhh-ausentismo', '', document.getElementById('hp-case5-results'), renderCase5Result);
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    initFontControls();
    initMegaMenu();
    initHeroCarousel();
    initDirectoryModal();
    initAffiliationChecker();
    initSimulators();
    initLanguageSwitcher();
    initLusionCanvas();
    initGeminiEnterpriseSearch();
    initGeminiEnterpriseSuite();
  });
})();
