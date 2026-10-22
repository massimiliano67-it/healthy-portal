/* ==========================================================================
   Healthy Portal Master Hierarchy & Content Catalog
   Derived from REA Evidence v2 captures of https://www.cajalosandes.cl/
   Rebranded in English as "Healthy Portal" (with HealthyPay, About Healthy, My Portal)
   ========================================================================== */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.HEALTHY_PORTAL_DATA = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  const segments = [
    { id: 'investors', label: 'Investors', href: '/investors/index.html', original: 'Inversionistas' },
    { id: 'workers', label: 'Workers', href: '/index.html', original: 'Trabajadores', activeDefault: true },
    { id: 'about-healthy', label: 'About Healthy', href: '/about-healthy/index.html', original: 'Somos Andes' },
    { id: 'retirees', label: 'Retirees', href: '/retirees/index.html', original: 'Pensionados' },
    { id: 'companies', label: 'Companies', href: '/companies/index.html', original: 'Empresas' },
    { id: 'former-members', label: 'Former Members', href: '/former-members/index.html', original: 'Ex afiliados' }
  ];

  const categories = [
    {
      id: 'medical-leave',
      title: 'Medical Leave',
      originalTitle: 'Licencias Médicas',
      href: '/medical-leave/index.html',
      simulatorType: 'medical-leave',
      bannerTag: 'Step-by-Step Support',
      bannerTitle: 'We Help You Manage Your Medical Leave',
      bannerDesc: 'Track your electronic or paper medical leave, calculate your daily sickness subsidy, and check payment dates online.',
      heroSubtitle: 'Everything you need to know to track, calculate, and receive your medical leave subsidy without delays.',
      subpages: [
        { slug: 'index', title: 'View All Medical Leave', href: '/medical-leave/index.html', isHub: true, tag: '', summary: 'Complete guide to managing your medical leave step by step: before starting, during processing, and payment methods.' },
        { slug: 'requirements-and-documents', title: 'Requirements & Documents', href: '/medical-leave/requirements-and-documents.html', tag: '', summary: 'Required employment contracts, social security contribution certificates, and settlement documents for dependent and independent workers.' },
        { slug: 'stages-and-deadlines', title: 'Leave Stages & Deadlines', href: '/medical-leave/stages-and-deadlines.html', tag: '', summary: 'Submission deadlines (2 business days for private sector, 3 for public sector), COMPIN validation windows, and payout timelines.' },
        { slug: 'subsidy-calculation', title: 'Medical Leave Calculation', href: '/medical-leave/subsidy-calculation.html', tag: 'Interactive', summary: 'How your daily subsidy amount is calculated from your 3 prior net taxable monthly salaries and the 3-day waiting period rule.' },
        { slug: 'payment-methods', title: 'Medical Leave Payment Methods', href: '/medical-leave/payment-methods.html', tag: '', summary: 'Receive your medical leave subsidy directly via HealthyPay, bank wire transfer, or in-person cash pickup at partner branches.' },
        { slug: 'rejected-leave-appeals', title: 'Rejected Medical Leave & Appeals', href: '/medical-leave/rejected-leave-appeals.html', tag: '', summary: 'How to appeal a reduced, modified, or rejected medical leave before COMPIN and SUSESO with supporting medical reports.' },
        { slug: 'what-is-medical-leave', title: 'What Is a Medical Leave?', href: '/medical-leave/what-is-medical-leave.html', tag: '', summary: 'Legal rights, rest compliance rules, medical types (Type 1 Illness, Type 3 Maternity, Type 4 Child Care, SANNA), and employer duties.' },
        { slug: 'electronic-medical-leave', title: 'Electronic Medical Leave (LME)', href: '/medical-leave/electronic-medical-leave.html', tag: '', summary: 'Automatic digital processing between your physician, employer, Healthy Portal, and COMPIN with instant SMS/email alerts.' },
        { slug: 'prescribed-medical-leave', title: 'Prescribed & Paper Medical Leave', href: '/medical-leave/prescribed-medical-leave.html', tag: '', summary: 'How to digitize and submit paper medical leave forms or request payment before the 6-month statutory prescription deadline.' }
      ]
    },
    {
      id: 'credits',
      title: 'Credits',
      originalTitle: 'Créditos',
      href: '/credits/index.html',
      simulatorType: 'credits',
      bannerTag: 'Responsible Financing',
      bannerTitle: 'Manage Your Finances with Confidence',
      bannerDesc: 'Simulate your Social Credit, Health Credit, or Higher Education Loan with fixed installments deducted automatically via payroll.',
      heroSubtitle: 'Transparent social loans with preferential interest rates, payroll deduction, and 100% digital disbursement.',
      subpages: [
        { slug: 'index', title: 'View All Credits', href: '/credits/index.html', isHub: true, tag: '', summary: 'Explore Healthy Portal social financing solutions, simulate monthly installments, and compare preferential rates.' },
        { slug: 'social-credit', title: 'Simulate Your Social Credit', href: '/credits/social-credit.html', tag: 'Popular', summary: 'Flexible general-purpose social loans for workers and retirees with terms from 6 to 60 months and payroll deduction.' },
        { slug: 'universal-credit', title: 'Universal Credit', href: '/credits/universal-credit.html', tag: '', summary: 'Standardized consumer credit allowing direct comparison of CAE and total loan cost across financial institutions.' },
        { slug: 'health-credit', title: 'Health Credit', href: '/credits/health-credit.html', tag: '', summary: 'Dedicated low-rate financing for surgeries, dental treatments, hospitalizations, and medical co-payments.' },
        { slug: 'debt-consolidation-credit', title: 'Debt Consolidation Credit', href: '/credits/debt-consolidation-credit.html', tag: '', summary: 'Unify external credit cards and loans into a single lower monthly installment with improved cash flow.' },
        { slug: 'interest-rates', title: 'Interest Rates & Fees', href: '/credits/interest-rates.html', tag: '', summary: 'Current monthly and annual interest rate tables, notary fees, and Credit Life & Unemployment Insurance rates.' },
        { slug: 'mortgage-release', title: 'Mortgage Release & Liens', href: '/credits/mortgage-release.html', tag: '', summary: 'Request your certificate of total payment and deed of mortgage release (Alzamiento de Hipotecas) online.' },
        { slug: 'payment-methods', title: 'Loan Payment Methods', href: '/credits/payment-methods.html', tag: '', summary: 'Pay your social credit installments online using your RUT, HealthyPay, Webpay, or automated bank PAC.' },
        { slug: 'excess-payment-refund', title: 'Excess Payment Refund', href: '/credits/excess-payment-refund.html', tag: 'New', summary: 'Check if you have credit balances in your favor from duplicate payroll deductions or early loan payoffs and claim instant transfer.' },
        { slug: 'financial-portability', title: 'Financial Portability', href: '/credits/financial-portability.html', tag: '', summary: 'Transfer your existing loans to Healthy Portal under Law 21.236 with simplified paperwork and lower financing costs.' },
        { slug: 'loan-rescheduling', title: 'Loan Rescheduling', href: '/credits/loan-rescheduling.html', tag: '', summary: 'Restructure your active Social Credit term or grace period if your household income or employment situation has changed.' },
        { slug: 'higher-education-credit', title: 'Higher Education Credit', href: '/credits/higher-education-credit.html', tag: '', summary: 'Finance university, technical institute, or postgraduate tuition for yourself or your registered family dependents.' },
        { slug: 'financial-education', title: 'Financial Education Hub', href: '/credits/financial-education.html', tag: '', summary: 'Free interactive courses, household budget templates, and responsible borrowing guides from Healthy Academy.' },
        { slug: 'redec', title: 'Consolidated Debt Registry (REDEC)', href: '/credits/redec.html', tag: '', summary: 'Everything you need to know about Law 21.680 (REDEC), data transparency, and your rights as a financial borrower.' }
      ]
    },
    {
      id: 'insurance',
      title: 'Insurance',
      originalTitle: 'Seguros',
      href: '/insurance/index.html',
      simulatorType: 'insurance',
      bannerTag: 'Family Protection',
      bannerTitle: 'Discover Insurance Tailored to Your Lifestyle',
      bannerDesc: 'Protect yourself, your family, your vehicle, and your home with preferential member premiums and 24/7 assistance.',
      heroSubtitle: 'Comprehensive protection plans with exclusive member rates, zero paperwork, and immediate digital assistance.',
      subpages: [
        { slug: 'index', title: 'View All Insurance', href: '/insurance/index.html', isHub: true, tag: '', summary: 'Compare all Healthy Portal insurance plans across Vehicle, Life & Health, Home, and Job Protection categories.' },
        { slug: 'auto-insurance', title: 'Full Coverage Auto Insurance', href: '/insurance/auto-insurance.html', tag: 'Popular', summary: 'Complete protection against collision, theft, third-party liability, replacement vehicle, and 24/7 roadside assistance.' },
        { slug: 'catastrophic-health-insurance', title: 'Catastrophic Health Insurance', href: '/insurance/catastrophic-health-insurance.html', tag: '', summary: 'High-cost medical and hospitalization reimbursement after FONASA/Isapre coverage for peace of mind in serious illnesses.' },
        { slug: 'school-accident-insurance', title: 'School Accident Insurance', href: '/insurance/school-accident-insurance.html', tag: '', summary: 'Complementary trauma and emergency room coverage for students from preschool through higher education.' },
        { slug: 'family-life-insurance', title: 'Full Family Life Insurance', href: '/insurance/family-life-insurance.html', tag: '', summary: 'Financial security for your beneficiaries plus living benefits, telemedicine, and pharmacy discounts.' },
        { slug: 'smart-home-insurance', title: 'Smart Home Insurance', href: '/insurance/smart-home-insurance.html', tag: '', summary: 'Fire, earthquake, burglary, and emergency plumbing/locksmith/electrical home assistance.' },
        { slug: 'travel-assistance-insurance', title: 'Travel Assistance Insurance', href: '/insurance/travel-assistance-insurance.html', tag: '', summary: 'International medical coverage, lost luggage protection, and flight delay assistance worldwide.' },
        { slug: 'telemarketing-insurance', title: 'Phone-Enrolled Insurance Plans', href: '/insurance/telemarketing-insurance.html', tag: '', summary: 'Review policy terms, coverage certificates, and customer service channels for policies contracted via telephone.' },
        { slug: 'total-loss-auto-insurance', title: 'Total Loss Auto Insurance', href: '/insurance/total-loss-auto-insurance.html', tag: '', summary: 'Affordable vehicle protection covering total theft, severe collision total loss, and third-party damages.' },
        { slug: 'unemployment-credit-insurance', title: 'Social Credit Unemployment Insurance', href: '/insurance/unemployment-credit-insurance.html', tag: '', summary: 'Covers your Social Credit monthly installments in case of involuntary unemployment or temporary disability.' },
        { slug: 'protected-employment-insurance', title: 'Protected Employment Insurance', href: '/insurance/protected-employment-insurance.html', tag: '', summary: 'Monthly cash compensation to cover household bills if you lose your job involuntarily.' },
        { slug: 'full-assistance', title: 'Full Assistance Plan', href: '/insurance/full-assistance.html', tag: '', summary: 'On-demand outpatient medical checkups, pediatric tele-health, veterinary care, and home tech support.' },
        { slug: 'claims-declaration', title: 'Declare an Insurance Claim', href: '/insurance/claims-declaration.html', tag: '', summary: 'Submit and track your vehicle, health, life, or home insurance claim online in minutes.' }
      ]
    },
    {
      id: 'savings',
      title: 'Savings',
      originalTitle: 'Ahorro',
      href: '/savings/index.html',
      simulatorType: 'savings',
      bannerTag: 'My Goals Platform',
      bannerTitle: 'Build Your Future with Smart Savings',
      bannerDesc: 'Invest in Mutual Funds, APV Pension Savings, or Housing Subsidy Savings with zero maintenance commission for members.',
      heroSubtitle: 'Reach your personal and family milestones with automated payroll savings and expert investment management.',
      subpages: [
        { slug: 'index', title: 'View All Savings', href: '/savings/index.html', isHub: true, tag: '', summary: 'Explore Healthy Portal savings and investment instruments designed to grow your wealth safely.' },
        { slug: 'my-goals', title: 'My Goals (Mis Metas)', href: '/savings/my-goals.html', tag: 'Digital', summary: 'Create customized savings goals with automated simulation, risk profiling, and 100% online tracking.' },
        { slug: 'mutual-funds', title: 'Mutual Funds', href: '/savings/mutual-funds.html', tag: '', summary: 'Diversified conservative, balanced, and growth investment portfolios with preferential member series.' },
        { slug: 'apv-pension-savings', title: 'APV Voluntary Pension Savings', href: '/savings/apv-pension-savings.html', tag: '', summary: 'Boost your future retirement pension and access state tax bonuses (Regime A 15% state bonus or Regime B tax deduction).' },
        { slug: 'housing-savings', title: 'Housing Savings Account', href: '/savings/housing-savings.html', tag: '', summary: 'Accumulate the required down payment and qualify for MINVU DS1, DS19, and DS49 state housing subsidies.' }
      ]
    },
    {
      id: 'tourism',
      title: 'Tourism',
      originalTitle: 'Turismo',
      href: '/tourism/index.html',
      simulatorType: 'tourism',
      bannerTag: 'Vacation & Nature',
      bannerTitle: 'Unforgettable Getaways Across the Country',
      bannerDesc: 'Enjoy 24 hotels, cabin complexes, and recreational centers from north to south with exclusive member rates.',
      heroSubtitle: 'Discover our network of sustainable hotels, thermal resorts, coastal cabins, and day-use recreational parks.',
      subpages: [
        { slug: 'index', title: 'View All Tourism', href: '/tourism/index.html', isHub: true, tag: '', summary: 'Book hotels, cabins, and recreational centers online with preferential rates and flexible installment payment.' },
        { slug: 'low-season-offers', title: 'Low Season 35% Off Escapes', href: '/tourism/low-season-offers.html', tag: 'Promo', summary: 'Get up to 35% off stays between March and November at Llanquihue, Pucón, Hornopirén, La Serena, and Olmué.' },
        { slug: 'hotels-and-cabins', title: 'Hotels & Cabin Resorts', href: '/tourism/hotels-and-cabins.html', tag: '', summary: 'Explore our flagship hotels and fully equipped family cabins from Huanchaco and Vicuña to Torres del Paine.' },
        { slug: 'recreational-centers', title: 'Day-Use Recreational Centers', href: '/tourism/recreational-centers.html', tag: '', summary: 'Swimming pools, barbecue quincho areas, sports courts, and nature trails for family weekends.' },
        { slug: 'chile-in-focus-contest', title: 'National Photography Contest', href: '/tourism/chile-in-focus-contest.html', tag: '', summary: 'Participate in our annual nature and heritage photography contest and win all-inclusive stays at our resorts.' }
      ]
    },
    {
      id: 'benefits',
      title: 'Benefits',
      originalTitle: 'Beneficios',
      href: '/benefits/index.html',
      simulatorType: 'benefits',
      bannerTag: '+Benefits Network',
      bannerTitle: 'Over 1,200 Discounts in Health, Education & Culture',
      bannerDesc: 'Use your RUT at partner pharmacies, clinics, universities, theaters, and supermarkets to save every day.',
      heroSubtitle: 'Preventive healthcare at $0, sports events, tuition scholarships, and cultural panoramas for your entire family.',
      subpages: [
        { slug: 'index', title: 'Featured Benefits of the Month', href: '/benefits/index.html', isHub: true, tag: 'Top', summary: 'Discover this month’s top member deals in preventive health screenings, outdoor runs, pharmacies, and theater.' },
        { slug: 'health-and-sports', title: 'Health & Sports', href: '/benefits/health-and-sports.html', tag: '', summary: '$0 preventive exams at HealthyNet, Interclínica, and SAI Health, pharmacy discounts at Cruz Verde, and running events.' },
        { slug: 'waiting-list-plan', title: 'Waiting List Resolution Plan', href: '/benefits/waiting-list-plan.html', tag: 'New', summary: 'Special clinical support program helping members and dependents resolve pending specialist consultations and surgeries.' },
        { slug: 'education-and-academic-excellence', title: 'Education & Academic Excellence Awards', href: '/benefits/education-and-academic-excellence.html', tag: '', summary: 'Academic Excellence Awards 2026, SER recognition scholarships, laptops, and higher education tuition discounts.' },
        { slug: 'family-savings', title: 'Everyday Family Savings', href: '/benefits/family-savings.html', tag: '', summary: 'Discounts on domestic gas cylinders, supermarkets, optical stores, dental care, and school supplies.' },
        { slug: 'culture-and-events', title: 'Culture, Theater & Panoramas', href: '/benefits/culture-and-events.html', tag: '', summary: 'Up to 25% off tickets at Teather Moon, Municipal Theater, cinemas, concerts, and the Healthy Experience Box.' },
        { slug: 'healthy-50-plus', title: 'Healthy +50 Active Living', href: '/benefits/healthy-50-plus.html', tag: '', summary: 'Digital literacy workshops, active aging clubs, preventive geriatrics, and group travel for members aged 50+.' }
      ]
    },
    {
      id: 'social-support',
      title: 'Social Support',
      originalTitle: 'Apoyo Social',
      href: '/social-support/index.html',
      simulatorType: 'social-support',
      bannerTag: 'Social Security & Care',
      bannerTitle: 'We Create Benefits That Support Every Stage of Life',
      bannerDesc: 'Access the Caregivers Program, Family Allowances, Newborn Baby Kits, and statutory social security subsidies.',
      heroSubtitle: 'Direct financial allowances, family milestone bonuses, and specialized care networks for workers and retirees.',
      subpages: [
        { slug: 'index', title: 'View All Social Support', href: '/social-support/index.html', isHub: true, tag: '', summary: 'Overview of all statutory social security allowances and Healthy Portal social welfare programs.' },
        { slug: 'caregivers-program', title: 'Caregivers Support Program', href: '/social-support/caregivers-program.html', tag: 'Top', summary: 'Free psychological, legal, occupational therapy, and respite care support for members caring for dependent relatives.' },
        { slug: 'family-allowance', title: 'Family Allowance (Asignación Familiar)', href: '/social-support/family-allowance.html', tag: '', summary: 'Monthly statutory per-dependent monetary allowance based on your income bracket (Tranches A, B, C, and D).' },
        { slug: 'family-dependents', title: 'Register Family Dependents', href: '/social-support/family-dependents.html', tag: '', summary: 'How to accredit children, spouses, and ascendants online so they immediately access all Healthy Portal benefits.' },
        { slug: 'single-family-subsidy', title: 'Single Family Subsidy (SUF)', href: '/social-support/single-family-subsidy.html', tag: '', summary: 'State social benefit for vulnerable households in the Social Registry of Households.' },
        { slug: 'permanent-family-contribution', title: 'Permanent Family Contribution', href: '/social-support/permanent-family-contribution.html', tag: '', summary: 'Check payment dates and eligibility for the annual March Permanent Family Contribution bonus.' },
        { slug: 'income-bracket-update', title: 'Income Bracket (Tramo) Update', href: '/social-support/income-bracket-update.html', tag: '', summary: 'Annual sworn income declaration process to keep your Family Allowance tranche accurate and up to date.' },
        { slug: 'family-bonuses', title: 'Birth, Marriage & Death Bonuses', href: '/social-support/family-bonuses.html', tag: '', summary: 'Direct cash support for marriage, civil union, birth/adoption of a child, and bereavement assistance.' },
        { slug: 'sanna-law', title: 'SANNA Law Insurance', href: '/social-support/sanna-law.html', tag: '', summary: 'Mandatory insurance allowing parents to accompany children with severe health conditions with paid leave.' },
        { slug: 'unemployment-subsidy', title: 'Unemployment Subsidy', href: '/social-support/unemployment-subsidy.html', tag: '', summary: 'Up to 360 days of monthly financial assistance and continued family allowance coverage during unemployment.' },
        { slug: 'competitive-community-funds', title: 'Competitive Social Grants', href: '/social-support/competitive-community-funds.html', tag: '', summary: 'Annual grant funding for worker unions, community inclusion projects, disability support, and local sustainability.' },
        { slug: 'newborn-and-baby-benefits', title: 'Newborn & Baby Benefits', href: '/social-support/newborn-and-baby-benefits.html', tag: '', summary: 'Welcome Baby Kit, pediatric tele-medicine, diaper discounts, and maternity allowance guidance.' },
        { slug: 'student-dependent-renewal', title: 'Student Dependent Renewal', href: '/social-support/student-dependent-renewal.html', tag: '', summary: 'Upload regular student certificates for dependents aged 18 to 24 to maintain Family Allowance payments.' }
      ]
    }
  ];

  const helpAndCorporateCategories = [
    {
      id: 'help-center',
      title: 'Help Center & Digital Channels',
      originalTitle: 'Centro de Ayuda',
      href: '/help-center/index.html',
      simulatorType: 'help-center',
      heroSubtitle: 'Resolve your questions quickly via our Virtual Branch, More Healthy App, Self-Service Kiosks, or nationwide branches.',
      subpages: [
        { slug: 'index', title: 'Help Center Hub', href: '/help-center/index.html', isHub: true, tag: '', summary: 'Search frequently asked questions, check branch status, and connect with our digital customer care channels.' },
        { slug: 'branches', title: 'Nationwide Branches & Status', href: '/help-center/branches.html', tag: '', summary: 'Interactive directory of Healthy Portal branches across all 16 regions with live operating status and hours.' },
        { slug: 'schedule-visit', title: 'Schedule Your Branch Visit', href: '/help-center/schedule-visit.html', tag: '', summary: 'Book a priority in-person or video-call appointment so you never wait in line.' },
        { slug: 'virtual-branch', title: 'Access Your Virtual Branch', href: '/help-center/virtual-branch.html', tag: '', summary: 'Step-by-step guide to everything you can complete 24/7 inside the Healthy Portal Virtual Branch.' },
        { slug: 'mobile-app', title: 'Download the More Healthy App', href: '/help-center/mobile-app.html', tag: '', summary: 'Available on iOS App Store and Google Play: simulate loans, upload medical documents, and activate discount coupons.' },
        { slug: 'self-service-kiosk', title: 'Self-Service Kiosks (Tótems)', href: '/help-center/self-service-kiosk.html', tag: '', summary: 'Print certificates, check medical leave payments, and validate benefits in under 60 seconds at branch kiosks.' },
        { slug: 'contact-us', title: 'Inquiries, Claims & Contact Center', href: '/help-center/contact-us.html', tag: '', summary: 'Submit official inquiries, suggestions, or claims and track your ticket number online or at 600 362 2886.' }
      ]
    },
    {
      id: 'about-healthy',
      title: 'About Healthy (Corporate & Sustainability)',
      originalTitle: 'Somos Andes',
      href: '/about-healthy/index.html',
      simulatorType: 'corporate',
      heroSubtitle: 'Over 70 years promoting social well-being, financial inclusion, environmental action, and transparent governance.',
      subpages: [
        { slug: 'index', title: 'About Healthy Portal', href: '/about-healthy/index.html', isHub: true, tag: '', summary: 'Our mission, board of directors, integrated annual reports, and social impact metrics across 4+ million members.' },
        { slug: 'transparency-and-privacy', title: 'Public Information & Privacy Notice', href: '/about-healthy/transparency-and-privacy.html', tag: '', summary: 'Financial statements, SUSESO regulatory disclosures, personal data protection policy, and legal bases.' },
        { slug: 'ethics-line', title: 'Ethics Line & Compliance', href: '/about-healthy/ethics-line.html', tag: '', summary: 'Confidential reporting channel for ethics, crime prevention (Law 20.393), and Karin Law workplace integrity.' },
        { slug: 'sustainability', title: 'Sustainability & UN Global Compact', href: '/about-healthy/sustainability.html', tag: '', summary: 'Reforestation family runs, carbon footprint reduction, positive parenting programs, and ESG strategy.' },
        { slug: 'careers-and-suppliers', title: 'Careers, Suppliers Portal & Legal Terms', href: '/about-healthy/careers-and-suppliers.html', tag: '', summary: 'Work at Healthy Portal, register in the Suppliers Portal, check issued electronic receipts, and read promotion legal terms.' }
      ]
    }
  ];

  const standaloneSegments = [
    {
      id: 'investors',
      title: 'Investor Relations',
      originalTitle: 'Inversionistas',
      href: '/investors/index.html',
      heroSubtitle: 'Financial reports, bond issuances, risk ratings (AA+ / AAA), and corporate governance for institutional investors.',
      summary: 'Access quarterly FECU financial statements, fixed-income bond prospectuses, international ESG ratings, and investor presentations.'
    },
    {
      id: 'retirees',
      title: 'Retirees Portal',
      originalTitle: 'Pensionados',
      href: '/retirees/index.html',
      heroSubtitle: '100% online affiliation and exclusive health, pharmacy, tourism, and social credit benefits for retirees.',
      summary: 'Join Healthy Portal online in 3 steps and enjoy $0 preventive medical consultations, pharmacy discounts up to 40%, golden-age travel, and preferential pension loans.'
    },
    {
      id: 'companies',
      title: 'Companies & Employers Portal',
      originalTitle: 'Empresas',
      href: '/companies/index.html',
      heroSubtitle: 'Partner with Healthy Portal to boost workforce well-being, productivity, and social security management.',
      summary: 'Whether private, state-owned, or public sector, affiliate your organization to manage electronic medical leaves, family allowances, and employee wellness programs.'
    },
    {
      id: 'former-members',
      title: 'Former Members Portal',
      originalTitle: 'Ex afiliados',
      href: '/former-members/index.html',
      heroSubtitle: 'Check excess payment refunds, pay active loans, or download historical certificates after changing employers.',
      summary: 'Even if you are no longer an active affiliate, you can check balances in your favor, pay or reschedule credits, and maintain your My Goals savings accounts.'
    },
    {
      id: 'my-portal',
      title: 'My Portal — Member Digital Branch',
      originalTitle: 'Mi Portal',
      href: '/my-portal/index.html',
      heroSubtitle: 'Sign in with your RUT and password or ClaveÚnica to manage all your credits, medical leaves, and benefits.',
      summary: 'Secure self-service portal for Workers, Retirees, and Companies: simulate and disburse Social Credits online, track medical leave subsidies, and download certificates.'
    },
    {
      id: 'healthypay',
      title: 'HealthyPay Digital Account & Card',
      originalTitle: 'Tapp',
      href: '/healthypay/index.html',
      heroSubtitle: 'Your zero-maintenance digital prepaid Mastercard account connected to all Healthy Portal benefits and instant payouts.',
      summary: 'Rebranded from Tapp: open your HealthyPay account in minutes with your ID card, receive medical leave and family allowance payouts faster, and shop worldwide with zero fees.'
    }
  ];

  return {
    brandName: 'Healthy Portal',
    partnerBrand: 'HealthyPay',
    appBrand: 'More Healthy App',
    corporateBrand: 'About Healthy',
    portalBrand: 'My Portal',
    segments,
    categories,
    helpAndCorporateCategories,
    standaloneSegments
  };
});
