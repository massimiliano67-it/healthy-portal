/* ==========================================================================
   Healthy Portal Master Hierarchy & Content Catalog
   Bilingual Edition (Español por defecto + English) — US & Fantasy Brand Ecosystem
   ========================================================================== */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.HEALTHY_PORTAL_DATA = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  const segments = [
    {
      id: 'investors',
      label: 'Inversionistas',
      labelEn: 'Investors',
      href: '/investors/index.html',
      original: 'Inversionistas Institucionales',
      originalEn: 'Institutional Investors'
    },
    {
      id: 'workers',
      label: 'Trabajadores',
      labelEn: 'Workers',
      href: '/index.html',
      original: 'Afiliados Activos',
      originalEn: 'Active Members',
      activeDefault: true
    },
    {
      id: 'about-healthy',
      label: 'Conoce Healthy',
      labelEn: 'About Healthy',
      href: '/about-healthy/index.html',
      original: 'Portal Corporativo',
      originalEn: 'Corporate Hub'
    },
    {
      id: 'retirees',
      label: 'Pensionados',
      labelEn: 'Retirees',
      href: '/retirees/index.html',
      original: 'Afiliados Senior',
      originalEn: 'Senior Members'
    },
    {
      id: 'companies',
      label: 'Empresas',
      labelEn: 'Companies',
      href: '/companies/index.html',
      original: 'Empleadores',
      originalEn: 'Employers'
    },
    {
      id: 'former-members',
      label: 'Ex-Afiliados',
      labelEn: 'Former Members',
      href: '/former-members/index.html',
      original: 'Red Ex-Afiliados',
      originalEn: 'Alumni Members'
    }
  ];

  const categories = [
    {
      id: 'medical-leave',
      title: 'Licencias Médicas',
      titleEn: 'Medical Leave',
      originalTitle: 'Gestión de Licencias y Subsidios',
      originalTitleEn: 'Medical Leave & Disability Hub',
      href: '/medical-leave/index.html',
      simulatorType: 'medical-leave',
      bannerTag: 'Apoyo Paso a Paso',
      bannerTagEn: 'Step-by-Step Support',
      bannerTitle: 'Te Ayudamos a Gestionar tu Licencia Médica',
      bannerTitleEn: 'We Help You Manage Your Medical Leave',
      bannerDesc: 'Consulta el estado de tu licencia médica electrónica o en papel, calcula tu subsidio diario y revisa tus fechas de pago en línea.',
      bannerDescEn: 'Track your electronic or paper medical leave, calculate your daily sickness subsidy, and check payment dates online.',
      heroSubtitle: 'Todo lo que necesitas saber para consultar, calcular y recibir el pago de tu subsidio por incapacidad laboral sin demoras.',
      heroSubtitleEn: 'Everything you need to know to track, calculate, and receive your medical leave subsidy without delays.',
      subpages: [
        {
          slug: 'index',
          title: 'Ver Todo Licencias Médicas',
          titleEn: 'View All Medical Leave',
          href: '/medical-leave/index.html',
          isHub: true,
          tag: '',
          tagEn: '',
          summary: 'Guía completa para gestionar tu licencia médica paso a paso: antes de iniciar, durante la tramitación y formas de pago.',
          summaryEn: 'Complete guide to managing your medical leave step by step: before starting, during processing, and payment methods.'
        },
        {
          slug: 'requirements-and-documents',
          title: 'Requisitos y Documentos',
          titleEn: 'Requirements & Documents',
          href: '/medical-leave/requirements-and-documents.html',
          tag: '',
          tagEn: '',
          summary: 'Contratos de trabajo, certificados de cotizaciones previsionales y liquidaciones requeridas para trabajadores dependientes e independientes.',
          summaryEn: 'Required employment contracts, social security contribution certificates, and settlement documents for dependent and independent workers.'
        },
        {
          slug: 'stages-and-deadlines',
          title: 'Etapas y Plazos de Licencia',
          titleEn: 'Leave Stages & Deadlines',
          href: '/medical-leave/stages-and-deadlines.html',
          tag: '',
          tagEn: '',
          summary: 'Plazos de presentación (2 días hábiles sector privado, 3 sector público), validación ante Medical Review Board (MRB) y calendario de pago.',
          summaryEn: 'Submission deadlines (2 business days for private sector, 3 for public sector), Medical Review Board (MRB) validation windows, and payout timelines.'
        },
        {
          slug: 'subsidy-calculation',
          title: 'Cálculo de Subsidio de Licencia',
          titleEn: 'Medical Leave Calculation',
          href: '/medical-leave/subsidy-calculation.html',
          tag: 'Interactivo',
          tagEn: 'Interactive',
          summary: 'Cómo se calcula tu subsidio diario a partir del promedio de tus 3 remuneraciones netas previas y la regla de carencia de 3 días.',
          summaryEn: 'How your daily subsidy amount is calculated from your 3 prior net taxable monthly salaries and the 3-day waiting period rule.'
        },
        {
          slug: 'payment-methods',
          title: 'Formas de Pago de Licencia',
          titleEn: 'Medical Leave Payment Methods',
          href: '/medical-leave/payment-methods.html',
          tag: '',
          tagEn: '',
          summary: 'Recibe el pago de tu licencia médica directamente en HealthyPay, transferencia electrónica bancaria o cobro presencial en sucursales.',
          summaryEn: 'Receive your medical leave subsidy directly via HealthyPay, bank wire transfer, or in-person cash pickup at partner branches.'
        },
        {
          slug: 'rejected-leave-appeals',
          title: 'Licencias Rechazadas y Apelaciones',
          titleEn: 'Rejected Medical Leave & Appeals',
          href: '/medical-leave/rejected-leave-appeals.html',
          tag: '',
          tagEn: '',
          summary: 'Cómo apelar una licencia reducida, modificada o rechazada ante Medical Review Board (MRB) y National Social Welfare Board (NSWB) con informe médico.',
          summaryEn: 'How to appeal a reduced, modified, or rejected medical leave before the Medical Review Board (MRB) and National Social Welfare Board (NSWB) with supporting medical reports.'
        },
        {
          slug: 'what-is-medical-leave',
          title: '¿Qué es una Licencia Médica?',
          titleEn: 'What Is a Medical Leave?',
          href: '/medical-leave/what-is-medical-leave.html',
          tag: '',
          tagEn: '',
          summary: 'Derechos legales, cumplimiento de reposo, tipos de licencia (Tipo 1 Enfermedad, Tipo 3 Maternal, Tipo 4 Niño Menor, Ley FCA) y deberes del empleador.',
          summaryEn: 'Legal rights, rest compliance rules, medical types (Type 1 Illness, Type 3 Maternity, Type 4 Child Care, Family Care Act), and employer duties.'
        },
        {
          slug: 'electronic-medical-leave',
          title: 'Licencia Médica Electrónica (LME)',
          titleEn: 'Electronic Medical Leave (EML)',
          href: '/medical-leave/electronic-medical-leave.html',
          tag: '',
          tagEn: '',
          summary: 'Tramitación digital automática entre tu médico, empleador, Healthy Portal y Medical Review Board con alertas instantáneas por SMS y correo.',
          summaryEn: 'Automatic digital processing between your physician, employer, Healthy Portal, and the Medical Review Board with instant SMS/email alerts.'
        },
        {
          slug: 'prescribed-medical-leave',
          title: 'Licencia en Papel y Prescripción',
          titleEn: 'Prescribed & Paper Medical Leave',
          href: '/medical-leave/prescribed-medical-leave.html',
          tag: '',
          tagEn: '',
          summary: 'Cómo digitalizar y presentar formularios de licencia en papel o solicitar el cobro antes del plazo legal de prescripción de 6 meses.',
          summaryEn: 'How to digitize and submit paper medical leave forms or request payment before the 6-month statutory prescription deadline.'
        }
      ]
    },
    {
      id: 'credits',
      title: 'Créditos',
      titleEn: 'Credits',
      originalTitle: 'Financiamiento y Créditos Sociales',
      originalTitleEn: 'Member Financing & Loans',
      href: '/credits/index.html',
      simulatorType: 'credits',
      bannerTag: 'Financiamiento Responsable',
      bannerTagEn: 'Responsible Financing',
      bannerTitle: 'Gestiona tus Finanzas con Confianza',
      bannerTitleEn: 'Manage Your Finances with Confidence',
      bannerDesc: 'Simula tu Crédito Social, Crédito de Salud o Crédito de Educación Superior con cuotas fijas descontadas por planilla.',
      bannerDescEn: 'Simulate your Social Credit, Health Credit, or Higher Education Loan with fixed installments deducted automatically via payroll.',
      heroSubtitle: 'Créditos sociales transparentes con tasas preferenciales, descuento por planilla y desembolso 100% digital.',
      heroSubtitleEn: 'Transparent social loans with preferential interest rates, payroll deduction, and 100% digital disbursement.',
      subpages: [
        {
          slug: 'index',
          title: 'Ver Todo Créditos',
          titleEn: 'View All Credits',
          href: '/credits/index.html',
          isHub: true,
          tag: '',
          tagEn: '',
          summary: 'Explora las soluciones de financiamiento social de Healthy Portal, simula cuotas mensuales y compara tasas preferenciales.',
          summaryEn: 'Explore Healthy Portal social financing solutions, simulate monthly installments, and compare preferential rates.'
        },
        {
          slug: 'social-credit',
          title: 'Simula tu Crédito Social',
          titleEn: 'Simulate Your Social Credit',
          href: '/credits/social-credit.html',
          tag: 'Popular',
          tagEn: 'Popular',
          summary: 'Créditos sociales de libre disponibilidad para trabajadores y pensionados con plazos de 6 a 60 meses y descuento por planilla.',
          summaryEn: 'Flexible general-purpose social loans for workers and retirees with terms from 6 to 60 months and payroll deduction.'
        },
        {
          slug: 'universal-credit',
          title: 'Crédito Universal',
          titleEn: 'Universal Credit',
          href: '/credits/universal-credit.html',
          tag: '',
          tagEn: '',
          summary: 'Crédito estandarizado que permite comparar directamente la CAE (APR) y el Costo Total del Crédito entre instituciones financieras.',
          summaryEn: 'Standardized consumer credit allowing direct comparison of APR and total loan cost across financial institutions.'
        },
        {
          slug: 'health-credit',
          title: 'Crédito de Salud',
          titleEn: 'Health Credit',
          href: '/credits/health-credit.html',
          tag: '',
          tagEn: '',
          summary: 'Financiamiento con tasa preferencial para cirugías, tratamientos dentales, hospitalizaciones y copagos médicos en HealthyNet, Clinic Dubal y SAI Health.',
          summaryEn: 'Dedicated low-rate financing for surgeries, dental treatments, hospitalizations, and medical co-payments.'
        },
        {
          slug: 'debt-consolidation-credit',
          title: 'Crédito de Consolidación de Deuda',
          titleEn: 'Debt Consolidation Credit',
          href: '/credits/debt-consolidation-credit.html',
          tag: '',
          tagEn: '',
          summary: 'Unifica tarjetas de crédito y préstamos externos en una sola cuota mensual más baja para mejorar tu liquidez familiar.',
          summaryEn: 'Unify external credit cards and loans into a single lower monthly installment with improved cash flow.'
        },
        {
          slug: 'interest-rates',
          title: 'Tasas de Interés y Tarifas',
          titleEn: 'Interest Rates & Fees',
          href: '/credits/interest-rates.html',
          tag: '',
          tagEn: '',
          summary: 'Tablas vigentes de tasas de interés mensuales y anuales, gastos notariales y seguros de desgravamen y cesantía.',
          summaryEn: 'Current monthly and annual interest rate tables, notary fees, and Credit Life & Unemployment Insurance rates.'
        },
        {
          slug: 'mortgage-release',
          title: 'Alzamiento de Hipotecas y Gravámenes',
          titleEn: 'Mortgage Release & Liens',
          href: '/credits/mortgage-release.html',
          tag: '',
          tagEn: '',
          summary: 'Solicita en línea tu certificado de pago total y escritura de alzamiento de hipoteca y prohibiciones.',
          summaryEn: 'Request your certificate of total payment and deed of Mortgage Lien Release online.'
        },
        {
          slug: 'payment-methods',
          title: 'Medios de Pago de Crédito',
          titleEn: 'Loan Payment Methods',
          href: '/credits/payment-methods.html',
          tag: '',
          tagEn: '',
          summary: 'Paga tus cuotas de crédito social en línea con tu Member ID, HealthyPay, Apple Pay o cargo automático ACH.',
          summaryEn: 'Pay your social credit installments online using your Member ID, HealthyPay, Apple Pay, or automated ACH Autopay.'
        },
        {
          slug: 'excess-payment-refund',
          title: 'Devolución de Pagos en Exceso',
          titleEn: 'Excess Payment Refund',
          href: '/credits/excess-payment-refund.html',
          tag: 'Nuevo',
          tagEn: 'New',
          summary: 'Revisa si tienes saldos a tu favor por descuentos duplicados de planilla o prepagos y solicita transferencia inmediata.',
          summaryEn: 'Check if you have credit balances in your favor from duplicate payroll deductions or early loan payoffs and claim instant transfer.'
        },
        {
          slug: 'financial-portability',
          title: 'Portabilidad Financiera',
          titleEn: 'Financial Portability',
          href: '/credits/financial-portability.html',
          tag: '',
          tagEn: '',
          summary: 'Traslada tus créditos vigentes a Healthy Portal bajo la Ley de Portabilidad Financiera con menos trámites y menor costo total.',
          summaryEn: 'Transfer your existing loans to Healthy Portal under the Financial Portability Act with simplified paperwork and lower financing costs.'
        },
        {
          slug: 'loan-rescheduling',
          title: 'Reprogramación de Créditos',
          titleEn: 'Loan Rescheduling',
          href: '/credits/loan-rescheduling.html',
          tag: '',
          tagEn: '',
          summary: 'Reestructura el plazo o período de gracia de tu Crédito Social activo si cambió tu situación laboral o ingreso familiar.',
          summaryEn: 'Restructure your active Social Credit term or grace period if your household income or employment situation has changed.'
        },
        {
          slug: 'higher-education-credit',
          title: 'Crédito de Educación Superior',
          titleEn: 'Higher Education Credit',
          href: '/credits/higher-education-credit.html',
          tag: '',
          tagEn: '',
          summary: 'Financia aranceles universitarios, de institutos técnicos o posgrados para ti o tus cargas familiares acreditadas.',
          summaryEn: 'Finance university, technical institute, or postgraduate tuition for yourself or your registered family dependents.'
        },
        {
          slug: 'financial-education',
          title: 'Centro de Educación Financiera',
          titleEn: 'Financial Education Hub',
          href: '/credits/financial-education.html',
          tag: '',
          tagEn: '',
          summary: 'Cursos interactivos gratuitos, plantillas de presupuesto familiar y guías de endeudamiento responsable de Healthy Academy.',
          summaryEn: 'Free interactive courses, household budget templates, and responsible borrowing guides from Healthy Academy.'
        },
        {
          slug: 'redec',
          title: 'Registro de Deuda Consolidada (REDEC)',
          titleEn: 'Consolidated Debt Registry (REDEC)',
          href: '/credits/redec.html',
          tag: '',
          tagEn: '',
          summary: 'Todo sobre la Ley de Transparencia Crediticia (REDEC), protección de datos financieros y tus derechos ARCO como titular.',
          summaryEn: 'Everything you need to know about the Fair Credit Transparency Act (REDEC), data transparency, and your rights as a financial borrower.'
        }
      ]
    },
    {
      id: 'insurance',
      title: 'Seguros',
      titleEn: 'Insurance',
      originalTitle: 'Protección Personal y Familiar',
      originalTitleEn: 'Personal & Family Protection',
      href: '/insurance/index.html',
      simulatorType: 'insurance',
      bannerTag: 'Protección Familiar',
      bannerTagEn: 'Family Protection',
      bannerTitle: 'Descubre Seguros Adaptados a tu Estilo de Vida',
      bannerTitleEn: 'Discover Insurance Tailored to Your Lifestyle',
      bannerDesc: 'Protégete a ti, a tu familia, tu vehículo y tu hogar con primas preferenciales para afiliados y asistencia 24/7.',
      bannerDescEn: 'Protect yourself, your family, your vehicle, and your home with preferential member premiums and 24/7 assistance.',
      heroSubtitle: 'Planes de protección integral con tarifas exclusivas para afiliados, cero papeleo y asistencia digital inmediata.',
      heroSubtitleEn: 'Comprehensive protection plans with exclusive member rates, zero paperwork, and immediate digital assistance.',
      subpages: [
        {
          slug: 'index',
          title: 'Ver Todo Seguros',
          titleEn: 'View All Insurance',
          href: '/insurance/index.html',
          isHub: true,
          tag: '',
          tagEn: '',
          summary: 'Compara todos los seguros de Healthy Portal en las líneas de Vehículos, Vida y Salud, Hogar y Protección Laboral.',
          summaryEn: 'Compare all Healthy Portal insurance plans across Vehicle, Life & Health, Home, and Job Protection categories.'
        },
        {
          slug: 'auto-insurance',
          title: 'Seguro Automotriz Full Cobertura',
          titleEn: 'Full Coverage Auto Insurance',
          href: '/insurance/auto-insurance.html',
          tag: 'Popular',
          tagEn: 'Popular',
          summary: 'Protección completa contra daños propios, robo, responsabilidad civil hasta USD $100,000, auto de reemplazo y asistencia en ruta 24/7.',
          summaryEn: 'Complete protection against collision, theft, third-party liability, replacement vehicle, and 24/7 roadside assistance.'
        },
        {
          slug: 'catastrophic-health-insurance',
          title: 'Seguro de Salud Catastrófico',
          titleEn: 'Catastrophic Health Insurance',
          href: '/insurance/catastrophic-health-insurance.html',
          tag: '',
          tagEn: '',
          summary: 'Reembolso de gastos médicos y hospitalarios de alto costo (hasta 80% y tope de USD $250,000) con deducible $0 en HealthyNet, Clinic Dubal y SAI Health.',
          summaryEn: 'High-cost medical and hospitalization reimbursement after Primary Health Plan / Medicare coverage for peace of mind in serious illnesses.'
        },
        {
          slug: 'school-accident-insurance',
          title: 'Seguro de Accidentes Escolares',
          titleEn: 'School Accident Insurance',
          href: '/insurance/school-accident-insurance.html',
          tag: '',
          tagEn: '',
          summary: 'Cobertura complementaria de urgencia y traumatología para estudiantes desde educación parvularia hasta educación superior.',
          summaryEn: 'Complementary trauma and emergency room coverage for students from preschool through higher education.'
        },
        {
          slug: 'family-life-insurance',
          title: 'Seguro de Vida Familiar Full',
          titleEn: 'Full Family Life Insurance',
          href: '/insurance/family-life-insurance.html',
          tag: '',
          tagEn: '',
          summary: 'Respaldo financiero para tus beneficiarios más beneficios en vida, telemedicina y descuentos en Pharmacy Red Wall.',
          summaryEn: 'Financial security for your beneficiaries plus living benefits, telemedicine, and pharmacy discounts.'
        },
        {
          slug: 'smart-home-insurance',
          title: 'Seguro Hogar Inteligente',
          titleEn: 'Smart Home Insurance',
          href: '/insurance/smart-home-insurance.html',
          tag: '',
          tagEn: '',
          summary: 'Cobertura contra incendio, sismo, desastres naturales, robo y asistencia domiciliaria de emergencia (gasfitería, cerrajería y electricidad).',
          summaryEn: 'Fire, natural disaster, burglary, and emergency plumbing/locksmith/electrical home assistance.'
        },
        {
          slug: 'travel-assistance-insurance',
          title: 'Seguro de Asistencia en Viaje',
          titleEn: 'Travel Assistance Insurance',
          href: '/insurance/travel-assistance-insurance.html',
          tag: '',
          tagEn: '',
          summary: 'Cobertura médica internacional, protección por pérdida de equipaje y asistencia por demora de vuelos en todo el mundo.',
          summaryEn: 'International medical coverage, lost luggage protection, and flight delay assistance worldwide.'
        },
        {
          slug: 'telemarketing-insurance',
          title: 'Seguros Contratados por Teléfono',
          titleEn: 'Phone-Enrolled Insurance Plans',
          href: '/insurance/telemarketing-insurance.html',
          tag: '',
          tagEn: '',
          summary: 'Revisa condiciones generales, certificados de cobertura y canales de atención para pólizas contratadas telefónicamente.',
          summaryEn: 'Review policy terms, coverage certificates, and customer service channels for policies contracted via telephone.'
        },
        {
          slug: 'total-loss-auto-insurance',
          title: 'Seguro Automotriz Pérdida Total',
          titleEn: 'Total Loss Auto Insurance',
          href: '/insurance/total-loss-auto-insurance.html',
          tag: '',
          tagEn: '',
          summary: 'Protección vehicular económica que cubre robo total, pérdida total por colisión severa y daños a terceros.',
          summaryEn: 'Affordable vehicle protection covering total theft, severe collision total loss, and third-party damages.'
        },
        {
          slug: 'unemployment-credit-insurance',
          title: 'Seguro de Cesantía de Crédito Social',
          titleEn: 'Social Credit Unemployment Insurance',
          href: '/insurance/unemployment-credit-insurance.html',
          tag: '',
          tagEn: '',
          summary: 'Cubre hasta 6 cuotas mensuales consecutivas de tu Crédito Social en caso de desempleo involuntario o incapacidad temporal.',
          summaryEn: 'Covers your Social Credit monthly installments in case of involuntary unemployment or temporary disability.'
        },
        {
          slug: 'protected-employment-insurance',
          title: 'Seguro de Desempleo Protegido',
          titleEn: 'Protected Employment Insurance',
          href: '/insurance/protected-employment-insurance.html',
          tag: '',
          tagEn: '',
          summary: 'Indemnización mensual de libre disponibilidad para cubrir cuentas del hogar si pierdes tu empleo de forma involuntaria.',
          summaryEn: 'Monthly cash compensation to cover household bills if you lose your job involuntarily.'
        },
        {
          slug: 'full-assistance',
          title: 'Plan de Asistencia Full',
          titleEn: 'Full Assistance Plan',
          href: '/insurance/full-assistance.html',
          tag: '',
          tagEn: '',
          summary: 'Chequeos médicos ambulatorios a pedido, telemedicina pediátrica, atención veterinaria y soporte tecnológico para el hogar.',
          summaryEn: 'On-demand outpatient medical checkups, pediatric tele-health, veterinary care, and home tech support.'
        },
        {
          slug: 'claims-declaration',
          title: 'Declarar un Siniestro de Seguro',
          titleEn: 'Declare an Insurance Claim',
          href: '/insurance/claims-declaration.html',
          tag: '',
          tagEn: '',
          summary: 'Ingresa y haz seguimiento en línea a tu denuncia de siniestro vehicular, de salud, vida u hogar en pocos minutos.',
          summaryEn: 'Submit and track your vehicle, health, life, or home insurance claim online in minutes.'
        }
      ]
    },
    {
      id: 'savings',
      title: 'Ahorro',
      titleEn: 'Savings',
      originalTitle: 'Ahorro e Inversión por Metas',
      originalTitleEn: 'Wealth & Goal Savings',
      href: '/savings/index.html',
      simulatorType: 'savings',
      bannerTag: 'Plataforma Mis Metas',
      bannerTagEn: 'My Goals Platform',
      bannerTitle: 'Construye tu Futuro con Ahorro Inteligente',
      bannerTitleEn: 'Build Your Future with Smart Savings',
      bannerDesc: 'Invierte en Fondos Mutuos, Ahorro Previsional Voluntario (VRS) o Ahorro para la Vivienda con $0 comisión de mantención para afiliados.',
      bannerDescEn: 'Invest in Mutual Funds, Voluntary Retirement Savings, or Housing Subsidy Savings with zero maintenance commission for members.',
      heroSubtitle: 'Alcanza tus metas personales y familiares con ahorro automático por planilla y gestión experta de inversiones.',
      heroSubtitleEn: 'Reach your personal and family milestones with automated payroll savings and expert investment management.',
      subpages: [
        {
          slug: 'index',
          title: 'Ver Todo Ahorro',
          titleEn: 'View All Savings',
          href: '/savings/index.html',
          isHub: true,
          tag: '',
          tagEn: '',
          summary: 'Explora los instrumentos de ahorro e inversión de Healthy Portal diseñados para hacer crecer tu patrimonio con seguridad.',
          summaryEn: 'Explore Healthy Portal savings and investment instruments designed to grow your wealth safely.'
        },
        {
          slug: 'my-goals',
          title: 'Planificador Digital Mis Metas',
          titleEn: 'My Goals Digital Planner',
          href: '/savings/my-goals.html',
          tag: 'Digital',
          tagEn: 'Digital',
          summary: 'Crea metas de ahorro personalizadas con simulación automática, perfil de riesgo y seguimiento 100% en línea.',
          summaryEn: 'Create customized savings goals with automated simulation, risk profiling, and 100% online tracking.'
        },
        {
          slug: 'mutual-funds',
          title: 'Fondos Mutuos',
          titleEn: 'Mutual Funds',
          href: '/savings/mutual-funds.html',
          tag: '',
          tagEn: '',
          summary: 'Portafolios de inversión diversificados (conservador, balanceado y crecimiento) con series preferenciales para afiliados.',
          summaryEn: 'Diversified conservative, balanced, and growth investment portfolios with preferential member series.'
        },
        {
          slug: 'apv-pension-savings',
          title: 'Ahorro Previsional Voluntario (VRS)',
          titleEn: 'Voluntary Retirement Savings (VRS)',
          href: '/savings/apv-pension-savings.html',
          tag: '',
          tagEn: '',
          summary: 'Mejora tu futura pensión y accede a bonificaciones fiscales (Régimen A con bonificación del 15% o Régimen B con rebaja tributaria).',
          summaryEn: 'Boost your future retirement pension and access federal match bonuses (Plan A 15% match bonus or Plan B tax deduction).'
        },
        {
          slug: 'housing-savings',
          title: 'Cuenta de Ahorro para la Vivienda',
          titleEn: 'Housing Savings Account',
          href: '/savings/housing-savings.html',
          tag: '',
          tagEn: '',
          summary: 'Acumula el ahorro previo requerido y postula a los subsidios federales para primera vivienda (Tramos 1, 2 y 3).',
          summaryEn: 'Accumulate the required down payment and qualify for Federal First-Home Tiers 1, 2, and 3 housing grants.'
        }
      ]
    },
    {
      id: 'tourism',
      title: 'Turismo',
      titleEn: 'Tourism',
      originalTitle: 'Hoteles, Cabañas y Centros Recreativos',
      originalTitleEn: 'Resorts & Getaways',
      href: '/tourism/index.html',
      simulatorType: 'tourism',
      bannerTag: 'Vacaciones y Naturaleza',
      bannerTagEn: 'Vacation & Nature',
      bannerTitle: 'Escapadas Inolvidables en Todo el País',
      bannerTitleEn: 'Unforgettable Getaways Across the Country',
      bannerDesc: 'Disfruta de 24 hoteles, complejos de cabañas y centros recreativos de costa a costa con tarifas exclusivas para afiliados.',
      bannerDescEn: 'Enjoy 24 hotels, cabin complexes, and recreational centers from coast to coast with exclusive member rates.',
      heroSubtitle: 'Descubre nuestra red de hoteles sustentables, lodges de montaña, cabañas costeras y parques recreativos.',
      heroSubtitleEn: 'Discover our network of sustainable hotels, mountain lodges, coastal cabins, and day-use recreational parks.',
      subpages: [
        {
          slug: 'index',
          title: 'Ver Todo Turismo',
          titleEn: 'View All Tourism',
          href: '/tourism/index.html',
          isHub: true,
          tag: '',
          tagEn: '',
          summary: 'Reserva hoteles, cabañas y centros recreativos en línea con tarifas preferenciales y pago flexible en cuotas.',
          summaryEn: 'Book hotels, cabins, and recreational centers online with preferential rates and flexible installment payment.'
        },
        {
          slug: 'low-season-offers',
          title: 'Escapadas Temporada Baja (35% Dcto.)',
          titleEn: 'Low Season 35% Off Escapes',
          href: '/tourism/low-season-offers.html',
          tag: 'Promo',
          tagEn: 'Promo',
          summary: 'Obtén hasta 35% de descuento entre marzo y noviembre en Lake Tahoe, Aspen, Sedona, Santa Barbara y Asheville.',
          summaryEn: 'Get up to 35% off stays between March and November at Lake Tahoe, Aspen, Sedona, Santa Barbara, and Asheville.'
        },
        {
          slug: 'hotels-and-cabins',
          title: 'Hoteles y Complejos de Cabañas',
          titleEn: 'Hotels & Cabin Resorts',
          href: '/tourism/hotels-and-cabins.html',
          tag: '',
          tagEn: '',
          summary: 'Explora nuestros hoteles insignia y cabañas familiares totalmente equipadas desde Napa Valley y Carmel hasta Glacier National Park.',
          summaryEn: 'Explore our flagship hotels and fully equipped family cabins from Napa Valley and Carmel to Glacier National Park.'
        },
        {
          slug: 'recreational-centers',
          title: 'Centros Recreativos por el Día',
          titleEn: 'Day-Use Recreational Centers',
          href: '/tourism/recreational-centers.html',
          tag: '',
          tagEn: '',
          summary: 'Piscinas, quinchos al aire libre, canchas deportivas y senderos naturales para fines de semana en familia.',
          summaryEn: 'Swimming pools, outdoor barbecue pavilions, sports courts, and nature trails for family weekends.'
        },
        {
          slug: 'national-focus-contest',
          title: 'Concurso Nacional de Fotografía',
          titleEn: 'National Photography Contest',
          href: '/tourism/national-focus-contest.html',
          tag: '',
          tagEn: '',
          summary: 'Participa en nuestro concurso anual de fotografía de naturaleza y patrimonio y gana estadías todo incluido.',
          summaryEn: 'Participate in our annual nature and heritage photography contest across scenic US destinations and win all-inclusive resort stays.'
        }
      ]
    },
    {
      id: 'benefits',
      title: 'Beneficios',
      titleEn: 'Benefits',
      originalTitle: 'Descuentos y Convenios para Afiliados',
      originalTitleEn: 'Member Discounts & Perks',
      href: '/benefits/index.html',
      simulatorType: 'benefits',
      bannerTag: 'Red +Beneficios',
      bannerTagEn: '+Benefits Network',
      bannerTitle: 'Más de 1,200 Descuentos en Salud, Educación y Cultura',
      bannerTitleEn: 'Over 1,200 Discounts in Health, Education & Culture',
      bannerDesc: 'Presenta tu Member ID en farmacias en convenio, clínicas, universidades, teatros y supermercados para ahorrar todos los días.',
      bannerDescEn: 'Use your Member ID at partner pharmacies, clinics, universities, theaters, and supermarkets to save every day.',
      heroSubtitle: 'Exámenes médicos preventivos a costo $0, corridas deportivas, becas de estudio y panoramas culturales para toda tu familia.',
      heroSubtitleEn: 'Preventive healthcare at $0, sports events, tuition scholarships, and cultural panoramas for your entire family.',
      subpages: [
        {
          slug: 'index',
          title: 'Beneficios Destacados del Mes',
          titleEn: 'Featured Benefits of the Month',
          href: '/benefits/index.html',
          isHub: true,
          tag: 'Top',
          tagEn: 'Top',
          summary: 'Descubre las mejores ofertas del mes en chequeos médicos preventivos, corridas familiares, farmacias y teatro.',
          summaryEn: 'Discover this month’s top member deals in preventive health screenings, outdoor runs, pharmacies, and theater.'
        },
        {
          slug: 'health-and-sports',
          title: 'Salud y Deporte',
          titleEn: 'Health & Sports',
          href: '/benefits/health-and-sports.html',
          tag: '',
          tagEn: '',
          summary: 'Exámenes preventivos a $0 en HealthyNet, Clinic Dubal y SAI Health, hasta 40% de descuento en Pharmacy Red Wall y eventos deportivos.',
          summaryEn: '$0 preventive exams at HealthyNet, Clinic Dubal, and SAI Health, pharmacy discounts at Pharmacy Red Wall, and running events.'
        },
        {
          slug: 'waiting-list-plan',
          title: 'Plan de Resolución de Listas de Espera',
          titleEn: 'Waiting List Resolution Plan',
          href: '/benefits/waiting-list-plan.html',
          tag: 'Nuevo',
          tagEn: 'New',
          summary: 'Programa clínico especial que ayuda a afiliados y cargas a resolver consultas de especialidad y cirugías pendientes.',
          summaryEn: 'Special clinical support program helping members and dependents resolve pending specialist consultations and surgeries.'
        },
        {
          slug: 'education-and-academic-excellence',
          title: 'Educación y Premios de Excelencia Académica',
          titleEn: 'Education & Academic Excellence Awards',
          href: '/benefits/education-and-academic-excellence.html',
          tag: '',
          tagEn: '',
          summary: 'Premios de Excelencia Académica 2026, becas por puntaje SER, notebooks y descuentos en aranceles de educación superior.',
          summaryEn: 'Academic Excellence Awards 2026, SER recognition scholarships, laptops, and higher education tuition discounts.'
        },
        {
          slug: 'family-savings',
          title: 'Ahorro Familiar Cotidiano',
          titleEn: 'Everyday Family Savings',
          href: '/benefits/family-savings.html',
          tag: '',
          tagEn: '',
          summary: 'Descuentos en energía para el hogar, supermercados, ópticas, atención dental y útiles escolares.',
          summaryEn: 'Discounts on home energy, supermarkets, optical stores, dental care, and school supplies.'
        },
        {
          slug: 'culture-and-events',
          title: 'Cultura, Teatro y Panoramas',
          titleEn: 'Culture, Theater & Panoramas',
          href: '/benefits/culture-and-events.html',
          tag: '',
          tagEn: '',
          summary: 'Hasta 25% de descuento en entradas para Teather Moon, Starlight Grand Theater, cines, conciertos y la Caja de Experiencias Healthy.',
          summaryEn: 'Up to 25% off tickets at Teather Moon, Starlight Grand Theater, cinemas, concerts, and the Healthy Experience Box.'
        },
        {
          slug: 'healthy-50-plus',
          title: 'Programa Vida Activa Healthy +50',
          titleEn: 'Healthy +50 Active Living',
          href: '/benefits/healthy-50-plus.html',
          tag: '',
          tagEn: '',
          summary: 'Talleres de alfabetización digital, clubes de envejecimiento activo, geriatría preventiva y viajes grupales para mayores de 50 años.',
          summaryEn: 'Digital literacy workshops, active aging clubs, preventive geriatrics, and group travel for members aged 50+.'
        }
      ]
    },
    {
      id: 'social-support',
      title: 'Apoyo Social',
      titleEn: 'Social Support',
      originalTitle: 'Asignaciones Familiares y Cuidado',
      originalTitleEn: 'Family & Care Allowances',
      href: '/social-support/index.html',
      simulatorType: 'social-support',
      bannerTag: 'Seguridad Social y Cuidado',
      bannerTagEn: 'Social Security & Care',
      bannerTitle: 'Creamos Beneficios que Acompañan Cada Etapa de tu Vida',
      bannerTitleEn: 'We Create Benefits That Support Every Stage of Life',
      bannerDesc: 'Accede al Programa Cuidadores, Asignación Familiar, Ajuar de Recién Nacido y subsidios legales de seguridad social.',
      bannerDescEn: 'Access the Caregivers Program, Family Allowances, Newborn Baby Kits, and statutory social security subsidies.',
      heroSubtitle: 'Asignaciones económicas directas, bonos por hitos familiares y redes de apoyo especializado para trabajadores y pensionados.',
      heroSubtitleEn: 'Direct financial allowances, family milestone bonuses, and specialized care networks for workers and retirees.',
      subpages: [
        {
          slug: 'index',
          title: 'Ver Todo Apoyo Social',
          titleEn: 'View All Social Support',
          href: '/social-support/index.html',
          isHub: true,
          tag: '',
          tagEn: '',
          summary: 'Resumen de todas las asignaciones legales de seguridad social y programas de bienestar social de Healthy Portal.',
          summaryEn: 'Overview of all statutory social security allowances and Healthy Portal social welfare programs.'
        },
        {
          slug: 'caregivers-program',
          title: 'Programa de Apoyo a Cuidadores',
          titleEn: 'Caregivers Support Program',
          href: '/social-support/caregivers-program.html',
          tag: 'Top',
          tagEn: 'Top',
          summary: 'Apoyo gratuito psicológico, legal, de terapia ocupacional y relevo para afiliados que cuidan a un familiar con dependencia.',
          summaryEn: 'Free psychological, legal, occupational therapy, and respite care support for members caring for dependent relatives.'
        },
        {
          slug: 'family-allowance',
          title: 'Asignación Familiar Legal',
          titleEn: 'Statutory Family Allowance',
          href: '/social-support/family-allowance.html',
          tag: '',
          tagEn: '',
          summary: 'Subsidio monetario mensual por cada carga familiar acreditada según tu tramo de ingreso imponible (Tramos A, B, C y D).',
          summaryEn: 'Monthly statutory per-dependent monetary allowance based on your income bracket (Tiers A, B, C, and D).'
        },
        {
          slug: 'family-dependents',
          title: 'Acreditar Cargas Familiares',
          titleEn: 'Register Family Dependents',
          href: '/social-support/family-dependents.html',
          tag: '',
          tagEn: '',
          summary: 'Cómo inscribir hijos, cónyuge y ascendientes en línea para que accedan de inmediato a todos los beneficios de Healthy Portal.',
          summaryEn: 'How to accredit children, spouses, and ascendants online so they immediately access all Healthy Portal benefits.'
        },
        {
          slug: 'single-family-subsidy',
          title: 'Subsidio Único Familiar (UFS)',
          titleEn: 'Unified Family Subsidy (UFS)',
          href: '/social-support/single-family-subsidy.html',
          tag: '',
          tagEn: '',
          summary: 'Beneficio social monetario para hogares prioritarios inscritos en el Registro Nacional de Hogares.',
          summaryEn: 'Social benefit for priority households registered in the National Household Registry.'
        },
        {
          slug: 'permanent-family-contribution',
          title: 'Aporte Familiar Permanente Anual',
          titleEn: 'Annual Family Support Bonus',
          href: '/social-support/permanent-family-contribution.html',
          tag: '',
          tagEn: '',
          summary: 'Consulta fechas de pago y requisitos de elegibilidad para el Bono de Apoyo Familiar anual de marzo.',
          summaryEn: 'Check payment dates and eligibility for the annual March Family Support Bonus.'
        },
        {
          slug: 'income-bracket-update',
          title: 'Actualización de Tramo de Ingresos',
          titleEn: 'Income Bracket (Tier) Update',
          href: '/social-support/income-bracket-update.html',
          tag: '',
          tagEn: '',
          summary: 'Proceso anual de declaración jurada de ingresos para mantener actualizado tu tramo de Asignación Familiar.',
          summaryEn: 'Annual income declaration process to keep your Family Allowance tier accurate and up to date.'
        },
        {
          slug: 'family-bonuses',
          title: 'Bonos de Natalidad, Matrimonio y Fallecimiento',
          titleEn: 'Birth, Marriage & Bereavement Grants',
          href: '/social-support/family-bonuses.html',
          tag: '',
          tagEn: '',
          summary: 'Apoyo económico directo en dinero por matrimonio, acuerdo de unión civil, nacimiento o adopción de un hijo y fallecimiento.',
          summaryEn: 'Direct cash support for marriage, civil union, birth/adoption of a child, and bereavement assistance.'
        },
        {
          slug: 'sanna-law',
          title: 'Seguro Ley de Cuidado Familiar (FCA)',
          titleEn: 'Family Care Act (FCA) Insurance',
          href: '/social-support/sanna-law.html',
          tag: '',
          tagEn: '',
          summary: 'Seguro obligatorio que permite a padres y madres acompañar a hijos con condiciones graves de salud con permiso pagado.',
          summaryEn: 'Mandatory care insurance allowing parents to accompany children with severe health conditions with paid leave.'
        },
        {
          slug: 'unemployment-subsidy',
          title: 'Subsidio de Cesantía',
          titleEn: 'Unemployment Subsidy',
          href: '/social-support/unemployment-subsidy.html',
          tag: '',
          tagEn: '',
          summary: 'Hasta 360 días de apoyo financiero mensual y continuidad de asignación familiar durante períodos de cesantía.',
          summaryEn: 'Up to 360 days of monthly financial assistance and continued family allowance coverage during unemployment.'
        },
        {
          slug: 'competitive-community-funds',
          title: 'Fondos Concursables Sociales',
          titleEn: 'Competitive Social Grants',
          href: '/social-support/competitive-community-funds.html',
          tag: '',
          tagEn: '',
          summary: 'Financiamiento anual para sindicatos, proyectos de inclusión comunitaria, apoyo a la discapacidad y sustentabilidad local.',
          summaryEn: 'Annual grant funding for worker associations, community inclusion projects, disability support, and local sustainability.'
        },
        {
          slug: 'newborn-and-baby-benefits',
          title: 'Beneficios para Recién Nacidos y Bebés',
          titleEn: 'Newborn & Baby Benefits',
          href: '/social-support/newborn-and-baby-benefits.html',
          tag: '',
          tagEn: '',
          summary: 'Ajuar de bienvenida para bebés, telemedicina pediátrica, descuentos en pañales y orientación sobre subsidio maternal.',
          summaryEn: 'Welcome Baby Kit, pediatric tele-medicine, diaper discounts, and maternity allowance guidance.'
        },
        {
          slug: 'student-dependent-renewal',
          title: 'Renovación de Carga Estudiante (18 a 24 años)',
          titleEn: 'Student Dependent Renewal',
          href: '/social-support/student-dependent-renewal.html',
          tag: '',
          tagEn: '',
          summary: 'Sube certificados de alumno regular para cargas de 18 a 24 años y mantén activo el pago de Asignación Familiar.',
          summaryEn: 'Upload regular student certificates for dependents aged 18 to 24 to maintain Family Allowance payments.'
        }
      ]
    }
  ];

  const helpAndCorporateCategories = [
    {
      id: 'help-center',
      title: 'Centro de Ayuda y Canales Digitales',
      titleEn: 'Help Center & Digital Channels',
      originalTitle: 'Atención al Afiliado',
      originalTitleEn: 'Member Support Center',
      href: '/help-center/index.html',
      simulatorType: 'help-center',
      heroSubtitle: 'Resuelve tus dudas rápidamente a través de nuestra Sucursal Virtual, App More Healthy, Kioscos de Autoatención o sucursales en todo el país.',
      heroSubtitleEn: 'Resolve your questions quickly via our Virtual Branch, More Healthy App, Self-Service Kiosks, or nationwide branches.',
      subpages: [
        {
          slug: 'index',
          title: 'Portal Centro de Ayuda',
          titleEn: 'Help Center Hub',
          href: '/help-center/index.html',
          isHub: true,
          tag: '',
          tagEn: '',
          summary: 'Busca preguntas frecuentes, revisa el estado de sucursales y conéctate con nuestros canales digitales de atención.',
          summaryEn: 'Search frequently asked questions, check branch status, and connect with our digital customer care channels.'
        },
        {
          slug: 'branches',
          title: 'Sucursales en el País y Estado en Vivo',
          titleEn: 'Nationwide Branches & Status',
          href: '/help-center/branches.html',
          tag: '',
          tagEn: '',
          summary: 'Directorio interactivo de sucursales de Healthy Portal en los 50 estados con estado de atención en tiempo real y horarios.',
          summaryEn: 'Interactive directory of Healthy Portal branches across all 50 states with live operating status and hours.'
        },
        {
          slug: 'schedule-visit',
          title: 'Agenda tu Visita a Sucursal',
          titleEn: 'Schedule Your Branch Visit',
          href: '/help-center/schedule-visit.html',
          tag: '',
          tagEn: '',
          summary: 'Reserva una hora prioritaria presencial o por videollamada para realizar tus trámites sin filas.',
          summaryEn: 'Book a priority in-person or video-call appointment so you never wait in line.'
        },
        {
          slug: 'virtual-branch',
          title: 'Ingresa a tu Sucursal Virtual',
          titleEn: 'Access Your Virtual Branch',
          href: '/help-center/virtual-branch.html',
          tag: '',
          tagEn: '',
          summary: 'Guía paso a paso con todo lo que puedes realizar 24/7 dentro de la Sucursal Virtual de Healthy Portal.',
          summaryEn: 'Step-by-step guide to everything you can complete 24/7 inside the Healthy Portal Virtual Branch.'
        },
        {
          slug: 'mobile-app',
          title: 'Descarga la App More Healthy',
          titleEn: 'Download the More Healthy App',
          href: '/help-center/mobile-app.html',
          tag: '',
          tagEn: '',
          summary: 'Disponible en App Store y Google Play: simula créditos, sube documentos médicos y activa cupones de descuento.',
          summaryEn: 'Available on iOS App Store and Google Play: simulate loans, upload medical documents, and activate discount coupons.'
        },
        {
          slug: 'self-service-kiosk',
          title: 'Kioscos Express de Autoatención',
          titleEn: 'Self-Service Express Kiosks',
          href: '/help-center/self-service-kiosk.html',
          tag: '',
          tagEn: '',
          summary: 'Imprime certificados, consulta pagos de licencias médicas y valida beneficios en menos de 60 segundos con huella biométrica.',
          summaryEn: 'Print certificates, check medical leave payments, and validate benefits in under 60 seconds at branch kiosks.'
        },
        {
          slug: 'contact-us',
          title: 'Consultas, Reclamos y Contact Center',
          titleEn: 'Inquiries, Claims & Contact Center',
          href: '/help-center/contact-us.html',
          tag: '',
          tagEn: '',
          summary: 'Ingresa consultas oficiales, sugerencias o reclamos y haz seguimiento a tu número de caso en línea o al 1-800-555-0199.',
          summaryEn: 'Submit official inquiries, suggestions, or claims and track your ticket number online or at 1-800-555-0199.'
        }
      ]
    },
    {
      id: 'about-healthy',
      title: 'Conoce Healthy (Corporativo y Sustentabilidad)',
      titleEn: 'About Healthy (Corporate & Sustainability)',
      originalTitle: 'Gobierno Corporativo',
      originalTitleEn: 'Corporate Governance',
      href: '/about-healthy/index.html',
      simulatorType: 'corporate',
      heroSubtitle: 'Más de 70 años impulsando el bienestar social, la inclusión financiera, la acción ambiental y el gobierno transparente.',
      heroSubtitleEn: 'Over 70 years promoting social well-being, financial inclusion, environmental action, and transparent governance.',
      subpages: [
        {
          slug: 'index',
          title: 'Sobre Healthy Portal',
          titleEn: 'About Healthy Portal',
          href: '/about-healthy/index.html',
          isHub: true,
          tag: '',
          tagEn: '',
          summary: 'Nuestra misión, directorio, memorias anuales integradas e indicadores de impacto social en más de 4 millones de afiliados.',
          summaryEn: 'Our mission, board of directors, integrated annual reports, and social impact metrics across 4+ million members.'
        },
        {
          slug: 'transparency-and-privacy',
          title: 'Información Pública y Aviso de Privacidad',
          titleEn: 'Public Information & Privacy Notice',
          href: '/about-healthy/transparency-and-privacy.html',
          tag: '',
          tagEn: '',
          summary: 'Estados financieros, normativas de la National Social Welfare Board (NSWB), política de protección de datos personales y bases legales.',
          summaryEn: 'Financial statements, National Social Welfare Board (NSWB) regulatory disclosures, personal data protection policy, and legal bases.'
        },
        {
          slug: 'ethics-line',
          title: 'Línea Ética y Cumplimiento',
          titleEn: 'Ethics Line & Compliance',
          href: '/about-healthy/ethics-line.html',
          tag: '',
          tagEn: '',
          summary: 'Canal confidencial de denuncias éticas, integridad corporativa y estándares de respeto laboral.',
          summaryEn: 'Confidential reporting channel for ethics, corporate integrity compliance, and Workplace Respect Act standards.'
        },
        {
          slug: 'sustainability',
          title: 'Sustentabilidad y Pacto Global ONU',
          titleEn: 'Sustainability & UN Global Compact',
          href: '/about-healthy/sustainability.html',
          tag: '',
          tagEn: '',
          summary: 'Corridas familiares de reforestación nativa, reducción de huella de carbono, talleres de crianza positiva y estrategia ESG.',
          summaryEn: 'Reforestation family runs, carbon footprint reduction, positive parenting programs, and ESG strategy.'
        },
        {
          slug: 'careers-and-suppliers',
          title: 'Trabaja con Nosotros, Proveedores y Bases Legales',
          titleEn: 'Careers, Suppliers Portal & Legal Terms',
          href: '/about-healthy/careers-and-suppliers.html',
          tag: '',
          tagEn: '',
          summary: 'Postula a Healthy Portal, regístrate en el Portal de Proveedores, consulta boletas electrónicas y revisa bases legales de promociones.',
          summaryEn: 'Work at Healthy Portal, register in the Suppliers Portal, check issued electronic receipts, and read promotion legal terms.'
        }
      ]
    }
  ];

  const standaloneSegments = [
    {
      id: 'investors',
      title: 'Relación con Inversionistas',
      titleEn: 'Investor Relations',
      originalTitle: 'Inversionistas Institucionales',
      originalTitleEn: 'Institutional Investors',
      href: '/investors/index.html',
      heroSubtitle: 'Reportes financieros, emisiones de bonos, clasificaciones de riesgo (AA+ / AAA) y gobierno corporativo para inversionistas institucionales.',
      heroSubtitleEn: 'Financial reports, bond issuances, risk ratings (AA+ / AAA), and corporate governance for institutional investors.',
      summary: 'Accede a estados financieros trimestrales, prospectos de bonos de renta fija, calificaciones ESG internacionales y presentaciones para inversionistas.',
      summaryEn: 'Access quarterly GAAP financial statements, fixed-income bond prospectuses, international ESG ratings, and investor presentations.'
    },
    {
      id: 'retirees',
      title: 'Portal de Pensionados',
      titleEn: 'Retirees Portal',
      originalTitle: 'Afiliados Senior',
      originalTitleEn: 'Senior Affiliates',
      href: '/retirees/index.html',
      heroSubtitle: 'Afiliación 100% en línea y beneficios exclusivos en salud, farmacias, turismo y crédito social para pensionados.',
      heroSubtitleEn: '100% online affiliation and exclusive health, pharmacy, tourism, and social credit benefits for retirees.',
      summary: 'Afíliate a Healthy Portal en línea en 3 pasos y disfruta de consultas médicas preventivas a $0, hasta 40% de descuento en Pharmacy Red Wall, viajes y créditos con tasa preferencial.',
      summaryEn: 'Join Healthy Portal online in 3 steps and enjoy $0 preventive medical consultations, pharmacy discounts up to 40%, golden-age travel, and preferential pension loans.'
    },
    {
      id: 'companies',
      title: 'Portal de Empresas y Empleadores',
      titleEn: 'Companies & Employers Portal',
      originalTitle: 'Aliados Corporativos',
      originalTitleEn: 'Corporate Partners',
      href: '/companies/index.html',
      heroSubtitle: 'Alíate con Healthy Portal para impulsar el bienestar laboral, la productividad y la gestión de seguridad social de tus equipos.',
      heroSubtitleEn: 'Partner with Healthy Portal to boost workforce well-being, productivity, and social security management.',
      summary: 'Tanto empresas privadas como organismos públicos pueden afiliarse para gestionar licencias médicas electrónicas, asignaciones familiares y programas de calidad de vida.',
      summaryEn: 'Whether private, state-owned, or public sector, affiliate your organization to manage electronic medical leaves, family allowances, and employee wellness programs.'
    },
    {
      id: 'former-members',
      title: 'Portal de Ex-Afiliados',
      titleEn: 'Former Members Portal',
      originalTitle: 'Red de Ex-Afiliados',
      originalTitleEn: 'Alumni Network',
      href: '/former-members/index.html',
      heroSubtitle: 'Consulta devoluciones de pagos en exceso, paga créditos vigentes o descarga certificados históricos tras cambiar de empleador.',
      heroSubtitleEn: 'Check excess payment refunds, pay active loans, or download historical certificates after changing employers.',
      summary: 'Aunque ya no seas afiliado activo, puedes revisar saldos a tu favor, pagar o reprogramar créditos y mantener tus cuentas de ahorro Mis Metas.',
      summaryEn: 'Even if you are no longer an active affiliate, you can check balances in your favor, pay or reschedule credits, and maintain your My Goals savings accounts.'
    },
    {
      id: 'my-portal',
      title: 'Mi Portal — Sucursal Digital de Afiliados',
      titleEn: 'My Portal — Member Digital Branch',
      originalTitle: 'Portal en Línea',
      originalTitleEn: 'Online Member Hub',
      href: '/my-portal/index.html',
      heroSubtitle: 'Inicia sesión con tu Member ID y clave o HealthyPass SSO para gestionar todos tus créditos, licencias médicas y beneficios.',
      heroSubtitleEn: 'Sign in with your Member ID and password or HealthyPass SSO to manage all your credits, medical leaves, and benefits.',
      summary: 'Portal seguro de autoatención para Trabajadores, Pensionados y Empresas: simula y desembolsa Créditos Sociales en línea, sigue tus licencias médicas y descarga certificados.',
      summaryEn: 'Secure self-service portal for Workers, Retirees, and Companies: simulate and disburse Social Credits online, track medical leave subsidies, and download certificates.'
    },
    {
      id: 'healthypay',
      title: 'Cuenta y Tarjeta Digital HealthyPay',
      titleEn: 'HealthyPay Digital Account & Card',
      originalTitle: 'Billetera Digital HealthyPay',
      originalTitleEn: 'HealthyPay Wallet',
      href: '/healthypay/index.html',
      heroSubtitle: 'Tu cuenta digital Mastercard prepago con $0 costo de mantención conectada a todos los beneficios y pagos instantáneos de Healthy Portal.',
      heroSubtitleEn: 'Your zero-maintenance digital prepaid Mastercard account connected to all Healthy Portal benefits and instant payouts.',
      summary: 'Abre tu cuenta HealthyPay en minutos con tu Member ID, recibe más rápido el pago de tus licencias médicas y asignaciones familiares, y compra en todo el mundo sin comisiones.',
      summaryEn: 'Open your HealthyPay account in minutes with your Member ID card, receive medical leave and family allowance payouts faster, and shop worldwide with zero fees.'
    }
  ];

  return {
    brandName: 'Healthy Portal',
    partnerBrand: 'HealthyPay',
    appBrand: 'More Healthy App',
    corporateBrand: 'About Healthy',
    portalBrand: 'Mi Portal',
    segments,
    categories,
    helpAndCorporateCategories,
    standaloneSegments
  };
});
