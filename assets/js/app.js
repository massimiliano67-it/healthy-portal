/* ==========================================================================
   Healthy Portal Interactive Client Controller
   Strictly adheres to secure DOM manipulation (textContent / createElement only)
   ========================================================================== */

(function () {
  'use strict';

  function formatUSD(amount) {
    return '$' + Math.round(amount).toLocaleString('en-US');
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

  /* 5. Interactive Affiliation RUT Lookup (Home & Former Members) */
  function initAffiliationChecker() {
    const form = document.getElementById('hp-affiliation-form');
    if (!form) return;
    const input = document.getElementById('hp-rut-input');
    const output = document.getElementById('hp-affiliation-result');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!input || !output) return;
      const val = input.value.trim();
      if (val.length < 5) {
        output.textContent = 'Please enter a valid National ID / RUT (e.g., 12.345.678-9) to verify your affiliation status.';
        output.style.color = '#B91C1C';
        return;
      }
      output.textContent = 'Verified: ID ' + val + ' is an ACTIVE Healthy Portal Affiliate (Segment: Workers | Tranche B | Excess Payment Balance: $48,500 available).';
      output.style.color = '#0D9488';
    });
  }

  /* 6. Interactive Category Simulators */
  function initSimulators() {
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
        const principal = Math.max(100, Number(amountEl.value) || 2500);
        const months = Math.max(6, Number(monthsEl.value) || 24);
        const isRetiree = segmentEl && segmentEl.value === 'retiree';
        const monthlyRate = isRetiree ? 0.0115 : 0.0129;
        const factor = (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
        const payment = principal * factor;
        const total = payment * months;
        const cae = ((Math.pow(1 + monthlyRate, 12) - 1) * 100 + 1.4).toFixed(2) + '%';

        if (monthlyOut) monthlyOut.textContent = formatUSD(payment) + ' / mo';
        if (caeOut) caeOut.textContent = 'CAE: ' + cae;
        if (totalOut) totalOut.textContent = 'Total Loan Cost: ' + formatUSD(total);
      }

      creditForm.addEventListener('input', updateCredit);
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
        const netSalary = Math.max(300, Number(salaryEl.value) || 1450);
        const days = Math.max(1, Number(daysEl.value) || 11);
        const isMaternity = typeEl && typeEl.value === 'maternity';
        const dailyRate = netSalary / 30;
        const paidDays = (days > 10 || isMaternity) ? days : Math.max(0, days - 3);
        const totalPayout = dailyRate * paidDays;

        if (payoutOut) payoutOut.textContent = formatUSD(totalPayout);
        if (paidDaysOut) {
          paidDaysOut.textContent = paidDays + ' payable days (Daily rate: ' + formatUSD(dailyRate) + ')';
        }
      }

      leaveForm.addEventListener('input', updateLeave);
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
        const baseMap = { auto: 34, health: 22, life: 16, home: 19, travel: 12 };
        const multMap = { standard: 1, full: 1.45, elite: 1.9 };
        const plan = planEl ? planEl.value : 'auto';
        const tier = tierEl ? tierEl.value : 'full';
        const monthly = (baseMap[plan] || 25) * (multMap[tier] || 1);
        if (priceOut) priceOut.textContent = formatUSD(monthly) + ' / month';
        if (covOut) covOut.textContent = 'Includes 24/7 Healthy Assistance + $0 deductible on member network';
      }

      insForm.addEventListener('input', updateIns);
      updateIns();
    }

    /* D. Savings & APV Goal Calculator */
    const savForm = document.getElementById('hp-sim-savings');
    if (savForm) {
      const initEl = document.getElementById('sim-sav-initial');
      const monthlyEl = document.getElementById('sim-sav-monthly');
      const yearsEl = document.getElementById('sim-sav-years');
      const projOut = document.getElementById('sim-sav-projected');
      const bonusOut = document.getElementById('sim-sav-bonus');

      function updateSavings() {
        const initial = Math.max(0, Number(initEl.value) || 1000);
        const monthly = Math.max(10, Number(monthlyEl.value) || 150);
        const years = Math.max(1, Number(yearsEl.value) || 5);
        const r = 0.065 / 12;
        const n = years * 12;
        const fv = initial * Math.pow(1 + r, n) + monthly * ((Math.pow(1 + r, n) - 1) / r);
        const stateBonus = Math.min(monthly * 12 * 0.15, 360) * years;

        if (projOut) projOut.textContent = formatUSD(fv + stateBonus);
        if (bonusOut) bonusOut.textContent = 'Includes estimated 15% APV State Bonus: ' + formatUSD(stateBonus);
      }

      savForm.addEventListener('input', updateSavings);
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
        const income = Math.max(0, Number(incEl.value) || 680);
        const deps = Math.max(1, Number(depsEl.value) || 2);
        let perDep = 0;
        let tranche = 'Tranche D (Exempt / Benefit Access Only)';
        if (income <= 586) {
          perDep = 22;
          tranche = 'Tranche A (Maximum Statutory Allowance)';
        } else if (income <= 856) {
          perDep = 14;
          tranche = 'Tranche B (Intermediate Statutory Allowance)';
        } else if (income <= 1335) {
          perDep = 5;
          tranche = 'Tranche C (Standard Statutory Allowance)';
        }
        if (allowOut) allowOut.textContent = formatUSD(perDep * deps) + ' / month';
        if (trancheOut) trancheOut.textContent = tranche + ' for ' + deps + ' registered dependent(s)';
      }

      socForm.addEventListener('input', updateSocial);
      updateSocial();
    }
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

  document.addEventListener('DOMContentLoaded', function () {
    initFontControls();
    initMegaMenu();
    initHeroCarousel();
    initDirectoryModal();
    initAffiliationChecker();
    initSimulators();
    initLusionCanvas();
  });
})();
