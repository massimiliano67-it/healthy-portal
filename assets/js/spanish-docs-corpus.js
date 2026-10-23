/**
 * Healthy Portal — Corpus Oficial en Español para Gemini Enterprise Search (Caso 1)
 * Contiene los documentos regulatorios (NSWB / MRB), contratos REDEC y Crédito Social,
 * pólizas de seguros y convenios de salud (HealthyNet, Clinic Dubal, SAI Health, Pharmacy Red Wall)
 * y guía de beneficios (SER, Teather Moon, Starlight Grand Theater, Lake Tahoe, Aspen, Sedona, Santa Barbara).
 */
'use strict';

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.HP_SPANISH_CORPUS = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  const documents = [
    {
      id: 'doc-nswb-mrb-2026',
      code: 'NSWB-MRB-REG-2026-V4',
      title: 'Reglamento Oficial NSWB y MRB: Licencias Médicas Electrónicas (EML), Subsidios y Apelaciones',
      shortTitle: 'Reglamento NSWB / MRB Licencias Médicas 2026',
      category: 'Licencias Médicas y Normativa',
      authority: 'National Social Welfare Board (NSWB) & Medical Review Board (MRB)',
      pdfUrl: '/assets/docs/reglamento-nswb-mrb-licencias-medicas-2026.pdf',
      updatedAt: 'Octubre 2026',
      pagesCount: 3,
      summary: 'Normativa integral en español sobre tramitación de Licencias Médicas Electrónicas (EML), plazos de presentación, carencia legal de 3 días, cálculo del subsidio por incapacidad laboral y procedimiento de apelación ante rechazo o reducción por parte de MRB y NSWB.',
      pages: [
        {
          pageNumber: 1,
          heading: 'TÍTULO I: EMISIÓN, PLAZOS DE PRESENTACIÓN Y VALIDACIÓN DE LICENCIAS MÉDICAS (EML)',
          articles: [
            {
              article: 'Artículo 1° — Definición y Validez de la Licencia Médica Electrónica (EML)',
              text: 'La Licencia Médica Electrónica (EML) es el documento oficial emitido por un profesional médico habilitado en la red HealthyNet, Clinic Dubal, SAI Health o prestadores autorizados, que certifica la incapacidad temporal para trabajar y otorga derecho a reposo y subsidio económico supervisado por el National Social Welfare Board (NSWB) y el Medical Review Board (MRB).',
              keywords: ['licencia medica', 'eml', 'definicion', 'reposo', 'incapacidad', 'healthynet', 'clinic dubal', 'sai health']
            },
            {
              article: 'Artículo 4° — Plazos Estrictos de Presentación del Trabajador e Independiente',
              text: 'Los trabajadores dependientes del sector privado deben presentar o validar su licencia médica dentro de los 2 días hábiles siguientes a la fecha de inicio del reposo. Los trabajadores del sector público disponen de 3 días hábiles, y los trabajadores independientes deben ingresarla dentro de los 2 días hábiles siguientes a su fecha de emisión a través de My Portal o la App More Healthy.',
              keywords: ['plazo', 'presentacion', 'dias habiles', 'trabajador dependiente', 'independiente', 'sector privado', 'sector publico']
            },
            {
              article: 'Artículo 7° — Documentación Obligatoria para el Trámite Digital',
              text: 'Para el procesamiento del pago del subsidio en Healthy Portal, el afiliado debe mantener actualizados en My Portal: (a) Comprobante de licencia EML o formulario firmado, (b) Las 3 últimas liquidaciones de sueldo anteriores al inicio del reposo, (c) Certificado histórico de cotizaciones previsionales de 6 meses, y (d) Cuenta bancaria o tarjeta digital HealthyPay activa para depósito directo.',
              keywords: ['documentos', 'requisitos', 'liquidaciones', 'sueldo', 'cotizaciones', 'healthypay', 'subir documentos', 'tramite']
            }
          ]
        },
        {
          pageNumber: 2,
          heading: 'TÍTULO II: FÓRMULA DE CÁLCULO DEL SUBSIDIO DIARIO Y REGLA DE CARENCIA DE 3 DÍAS',
          articles: [
            {
              article: 'Artículo 11° — Base de Cálculo del Subsidio Diario por Incapacidad Laboral',
              text: 'El monto diario del subsidio por enfermedad común (Tipo 1) se calcula dividiendo por 30 el promedio de la remuneración mensual neta (imponible menos descuentos legales de pensión y salud) percibida en los 3 meses calendario más próximos anteriores al inicio de la licencia médica. Para licencias maternales o cuidado del niño (Tipo 3 y 4), se exige además que el monto diario no exceda el tope legal reajustado de los 3 meses previos a la concepción.',
              keywords: ['calculo', 'subsidio', 'monto diario', 'cuanto pagan', 'remuneracion neta', 'promedio 3 meses', 'maternal', 'formula']
            },
            {
              article: 'Artículo 14° — Regla de Carencia Legal de 3 Días y Pago desde el Día 1',
              text: 'De conformidad con la normativa del National Social Welfare Board (NSWB): (1) Las licencias médicas por enfermedad común de 10 días o menos tienen un período de carencia de 3 días, pagándose a partir del cuarto día de reposo; (2) Las licencias médicas de 11 días o más se pagan íntegramente desde el Día 1 de reposo; (3) Las licencias maternales (pre y postnatal), por enfermedad grave de niño menor de un año y por accidente del trabajo en SAI Health se pagan siempre desde el Día 1 sin carencia.',
              keywords: ['carencia', '3 dias', '10 dias', '11 dias', 'dia 1', 'cuarto dia', 'desde cuando pagan', 'espera']
            },
            {
              article: 'Artículo 16° — Modalidades y Plazos de Pago del Subsidio',
              text: 'Una vez autorizada la licencia por el Medical Review Board (MRB), Healthy Portal ejecuta el pago en un plazo máximo de 48 horas hábiles si el afiliado tiene vinculada su cuenta digital HealthyPay Card ($0 comisión), o dentro de 3 a 5 días hábiles mediante transferencia electrónica ACH a cuentas bancarias externas.',
              keywords: ['pago', 'plazo de pago', '48 horas', 'healthypay', 'transferencia', 'cuando depositan', 'fechas de pago']
            }
          ]
        },
        {
          pageNumber: 3,
          heading: 'TÍTULO III: RECHAZO, REDUCCIÓN Y PROCEDIMIENTO DE APELACIÓN ANTE MRB Y NSWB',
          articles: [
            {
              article: 'Artículo 21° — Causales de Rechazo o Reducción de Reposo',
              text: 'El Medical Review Board (MRB) puede rechazar o reducir una licencia médica por: (a) Presentación fuera de plazo por parte del trabajador, (b) Reposo injustificado o falta de antecedentes clínicos suficientes, (c) Incumplimiento del reposo domiciliario verificado en visita inspectiva, o (d) Falta de vínculo laboral acreditado.',
              keywords: ['rechazo', 'rechazada', 'reduccion', 'causales', 'reposo injustificado', 'fuera de plazo', 'mrb']
            },
            {
              article: 'Artículo 24° — Recurso de Reposición ante el Medical Review Board (MRB)',
              text: 'Si la licencia médica es rechazada o reducida, el afiliado tiene un plazo de 15 días hábiles contados desde la notificación de la resolución para presentar un Recurso de Reposición ante el MRB. Debe adjuntar en My Portal o Sucursal Virtual un Informe Médico Complementario emitido por el médico tratante de HealthyNet o Clinic Dubal, exámenes de respaldo (imagenología o laboratorio) y comprobante de notificación.',
              keywords: ['apelar', 'apelacion', 'reclamo', 'recurso de reposicion', '15 dias habiles', 'informe medico complementario', 'mrb', 'licencia rechazada']
            },
            {
              article: 'Artículo 27° — Apelación de Segunda Instancia ante el National Social Welfare Board (NSWB)',
              text: 'En caso de que el MRB mantenga el rechazo tras la reposición, el trabajador puede elevar una Apelación Electrónica de Segunda Instancia ante el National Social Welfare Board (NSWB) dentro de los 30 días hábiles siguientes, a través del portal www.nswb.org o directamente asistido por un ejecutivo en la Sucursal Virtual 24/7 de Healthy Portal. Si el NSWB acoge el reclamo, ordena a Healthy Portal la reliquidación y pago retroactivo del subsidio en un plazo máximo de 5 días hábiles.',
              keywords: ['segunda instancia', 'nswb', '30 dias', 'reliquidacion', 'pago retroactivo', 'apelacion nswb', 'superintendencia']
            }
          ]
        }
      ],
      relatedRoutes: [
        { title: 'Medical Leave Hub (Estado y Consulta)', href: '/medical-leave/index.html' },
        { title: 'Calculation & Payment Rules (Simulador)', href: '/medical-leave/calculation-and-payment.html' },
        { title: 'Rejection & Appeals (MRB & NSWB)', href: '/medical-leave/rejection-and-appeals.html' },
        { title: 'Upload Medical Leave Documents', href: '/medical-leave/upload-documents.html' }
      ]
    },
    {
      id: 'doc-redec-credit-2026',
      code: 'REDEC-CRED-2026-V2',
      title: 'Contrato Marco de Crédito Social, Registro de Deuda Consolidada (REDEC), Portabilidad Financiera y Pagos en Exceso',
      shortTitle: 'Contrato REDEC y Crédito Social 2026',
      category: 'Créditos Sociales y Transparencia Financiera',
      authority: 'Healthy Portal Financial Division & Fair Credit Transparency Act (REDEC)',
      pdfUrl: '/assets/docs/contrato-redec-portabilidad-credito-social-2026.pdf',
      updatedAt: 'Octubre 2026',
      pagesCount: 3,
      summary: 'Condiciones contractuales en español sobre tasas APR preferenciales de Crédito Social, derechos bajo el Registro de Deuda Consolidada (REDEC), Portabilidad Financiera sin penalidad de prepago para jubilados y devolución automática de Pagos en Exceso (Saldos a Favor).',
      pages: [
        {
          pageNumber: 1,
          heading: 'SECCIÓN 1: CONDICIONES GENERALES DEL CRÉDITO SOCIAL Y TASAS PREFERENCIALES (APR)',
          articles: [
            {
              article: 'Cláusula 1° — Naturaleza del Crédito Social Healthy Portal',
              text: 'El Crédito Social es un préstamo en dinero de carácter social otorgado a trabajadores activos y pensionados afiliados a Healthy Portal, pagadero en cuotas mensuales fijas en dólares (USD) mediante descuento por planilla o cargo automático PAC/HealthyPay, desde 6 hasta 60 meses plazo y montos entre $200 y $50,000 USD.',
              keywords: ['credito social', 'prestamo', 'cuotas fijas', 'descuento por planilla', 'plazo', '60 meses', 'monto']
            },
            {
              article: 'Cláusula 3° — Tasas de Interés Preferenciales y Carga Anual Equivalente (APR)',
              text: 'Para Trabajadores Activos, la tasa mensual base de referencia es de 1.29% mensual (APR referencial 17.90% anual, incluyendo seguro de desgravamen obligatorio). Para Afiliados Jubilados (Retirees), rige la Tasa Dorada Preferencial (Golden Rate) de 1.15% mensual (APR referencial 16.05% anual) con 0% de comisión de apertura para créditos de salud, farmacia o consolidación.',
              keywords: ['tasa', 'interes', 'apr', 'cae', 'trabajadores', 'jubilados', 'pensionados', 'golden rate', 'seguro de desgravamen']
            },
            {
              article: 'Cláusula 5° — Líneas Especiales: Salud, Educación Superior y Crédito Verde',
              text: 'Healthy Portal dispone de líneas con tasa bonificada: (a) Crédito de Salud para copagos quirúrgicos y dentales en HealthyNet y Clinic Dubal con hasta 90 días de gracia para la primera cuota; (b) Crédito de Educación Superior para aranceles universitarios; y (c) Crédito Verde (Green Credit) con rebaja de 0.20 puntos porcentuales para paneles solares, electromovilidad y eficiencia energética domiciliaria.',
              keywords: ['credito de salud', 'educacion superior', 'credito verde', 'green credit', '90 dias de gracia', 'paneles solares']
            }
          ]
        },
        {
          pageNumber: 2,
          heading: 'SECCIÓN 2: REGISTRO DE DEUDA CONSOLIDADA (REDEC) Y PORTABILIDAD FINANCIERA',
          articles: [
            {
              article: 'Cláusula 9° — Qué es el Registro de Deuda Consolidada (REDEC) y Protección de Datos',
              text: 'En cumplimiento de la Ley de Transparencia Financiera (Fair Credit Transparency Act), el Registro de Deuda Consolidada (REDEC) centraliza las obligaciones crediticias vigentes para prevenir el sobreendeudamiento familiar y permitir que los afiliados con buen comportamiento de pago accedan a una rebaja automática de hasta 2.5 puntos en su tasa APR al refinanciar o consolidar deudas.',
              keywords: ['redec', 'registro de deuda consolidada', 'que es redec', 'sobreendeudamiento', 'fair credit', 'rebaja de tasa', 'consolidar deudas']
            },
            {
              article: 'Cláusula 11° — Derechos ARCO del Afiliado sobre su Reporte REDEC',
              text: 'Todo afiliado tiene derecho gratuito e irrestricto a: (1) Descargar su Certificado de Deuda REDEC actualizado en tiempo real desde My Portal; (2) Solicitar la rectificación o actualización de deudas pagadas en un plazo máximo de 48 horas; y (3) Exigir que sus datos REDEC se utilicen exclusivamente con consentimiento expreso durante una evaluación de Crédito Social.',
              keywords: ['derechos redec', 'certificado redec', 'rectificacion', 'privacidad', 'datos financieros']
            },
            {
              article: 'Cláusula 14° — Portabilidad Financiera y Prepago de Créditos',
              text: 'Bajo el régimen de Portabilidad Financiera de Healthy Portal, cualquier afiliado puede trasladar créditos de consumo, automotrices o tarjetas desde bancos externos hacia un Crédito Social con tasa preferencial. Healthy Portal emite el Certificado de Liquidación en 24 horas y paga directamente a la institución acreedora original sin cobrar comisión de evaluación.',
              keywords: ['portabilidad financiera', 'trasladar credito', 'prepago', 'certificado de liquidacion', 'bancos', 'refinanciar']
            }
          ]
        },
        {
          pageNumber: 3,
          heading: 'SECCIÓN 3: DEVOLUCIÓN DE PAGOS EN EXCESO (SALDOS A FAVOR) Y REPROGRAMACIÓN',
          articles: [
            {
              article: 'Cláusula 18° — Origen de los Pagos en Exceso (Excess Payment Refunds)',
              text: 'Los Pagos en Exceso o Saldos a Favor se generan cuando se produce: (a) Un doble descuento por planilla del empleador y pago directo simultáneo del trabajador; (b) Descuentos posteriores al pago total anticipado o portabilidad de un Crédito Social; o (c) Reliquidación de intereses a favor del afiliado por prepago anticipado.',
              keywords: ['pagos en exceso', 'saldos a favor', 'excesos', 'doble descuento', 'devolucion', 'reembolso', 'excess payment']
            },
            {
              article: 'Cláusula 20° — Procedimiento de Consulta y Devolución en 24 Horas',
              text: 'El afiliado o ex-afiliado puede consultar gratuitamente con su Member ID (ej. HP-849201-US) en la página principal o en /credits/excess-payment-refund.html si registra Pagos en Exceso disponibles. Al solicitar el reembolso en línea hacia su cuenta HealthyPay o cuenta corriente bancaria, el abono se realiza en menos de 24 horas hábiles sin costo ni prescripción para el trabajador.',
              keywords: ['como cobrar pagos en exceso', 'consultar saldo a favor', 'hp-849201-us', '24 horas', 'ex afiliados', 'transferencia']
            },
            {
              article: 'Cláusula 23° — Alivio Financiero y Reprogramación de Cuotas',
              text: 'En caso de desempleo involuntario o disminución de ingresos superior al 25%, el afiliado puede activar la cobertura del Seguro de Cesantía del Crédito Social (que cubre hasta 6 cuotas mensuales) o solicitar en línea una Reprogramación de Alivio Financiero con rebaja del valor cuota y hasta 2 meses de gracia.',
              keywords: ['reprogramacion', 'alivio financiero', 'cesantia', 'desempleo', 'no puedo pagar', 'seguro de cesantia', 'cuotas']
            }
          ]
        }
      ],
      relatedRoutes: [
        { title: 'Consolidated Debt Registry (REDEC)', href: '/credits/redec.html' },
        { title: 'Excess Payment Refunds (Saldos a Favor)', href: '/credits/excess-payment-refund.html' },
        { title: 'Financial Portability (Portabilidad)', href: '/credits/financial-portability.html' },
        { title: 'Social Credit Simulator & Rates', href: '/credits/social-credit.html' }
      ]
    },
    {
      id: 'doc-seguros-salud-2026',
      code: 'POL-INS-HEALTH-2026-V3',
      title: 'Condiciones Generales de Pólizas de Seguros y Convenios de Red de Salud (HealthyNet, Clinic Dubal, SAI Health y Pharmacy Red Wall)',
      shortTitle: 'Pólizas de Seguros y Convenios de Salud 2026',
      category: 'Seguros, Salud Preventiva y Farmacias',
      authority: 'Healthy Portal Insurance & Clinical Network Alliance',
      pdfUrl: '/assets/docs/condiciones-polizas-seguros-red-salud-2026.pdf',
      updatedAt: 'Octubre 2026',
      pagesCount: 3,
      summary: 'Pólizas y coberturas en español para Seguro de Salud Catastrófico, Seguro Automotriz Full Coverage, Seguro de Hogar Inteligente y convenios de copago $0 en HealthyNet, Clinic Dubal, SAI Health y hasta 40% de descuento en Pharmacy Red Wall.',
      pages: [
        {
          pageNumber: 1,
          heading: 'CAPÍTULO I: CONVENIOS CLÍNICOS DEDUCIBLE $0 Y EXÁMENES PREVENTIVOS',
          articles: [
            {
              article: 'Artículo 1° — Chequeos Médicos Preventivos a Costo $0 en HealthyNet, Clinic Dubal y SAI Health',
              text: 'Todos los trabajadores y jubilados afiliados a Healthy Portal, junto a sus cargas familiares registradas, tienen derecho anual a Exámenes Preventivos con Copago $0 en los centros médicos de HealthyNet, Clinic Dubal y SAI Health. Incluye mamografía bilateral, Papanicolaou (PAP), antígeno prostático (PSA), perfil lipídico, glicemia y electrocardiograma preventivo.',
              keywords: ['deducible 0', 'copago 0', 'costo 0', 'examenes preventivos', 'mamografia', 'healthynet', 'clinic dubal', 'sai health', 'chequeo medico']
            },
            {
              article: 'Artículo 3° — Telemedicina 24/7 y Plan de Resolución de Listas de Espera',
              text: 'A través de Healthy Health Pass, los afiliados acceden a consultas de Telemedicina General y Pediátrica 24/7 con copago fijo de $1.50 USD por consulta, y a sesiones de Psicología y Nutrición por $4.00 USD. Además, el Plan de Resolución de Listas de Espera permite derivar cirugías electivas e interconsultas de especialidad hacia Clinic Dubal y HealthyNet con bonificación adicional de hasta el 60% del copago.',
              keywords: ['telemedicina', '1.50', 'listas de espera', 'cirugia', 'especialistas', 'psicologia', 'nutricion', 'clinic dubal']
            },
            {
              article: 'Artículo 5° — Descuentos en Pharmacy Red Wall y Beneficios Ópticos y Dentales',
              text: 'Presentando el Member ID o pagando con HealthyPay Card en cualquier sucursal o farmacia en línea de Pharmacy Red Wall, el afiliado obtiene: (a) 40% de descuento en medicamentos genéricos y bioequivalentes; (b) 25% de descuento en medicamentos de marca con receta médica; (c) 15% en dermocosmética y cuidado infantil; más 5% de cashback adicional al pagar con HealthyPay Card.',
              keywords: ['pharmacy red wall', 'farmacia', 'descuento medicamentos', '40%', 'receta medica', 'genericos', 'cashback', 'dental', 'optica']
            }
          ]
        },
        {
          pageNumber: 2,
          heading: 'CAPÍTULO II: PÓLIZA DE SEGURO DE SALUD CATASTRÓFICO, VIDA Y ACCIDENTES',
          articles: [
            {
              article: 'Artículo 8° — Seguro de Salud Catastrófico y Oncológico (Catastrophic Health Policy)',
              text: 'La Póliza de Salud Catastrófica (Plan Full Member desde $22/mes) reembolsa hasta el 100% de los gastos hospitalarios, quirúrgicos, UCI y tratamientos oncológicos que superen el deducible anual, con un tope de cobertura de $250,000 USD por evento. Si la hospitalización se realiza en la red preferente HealthyNet, Clinic Dubal o SAI Health, el deducible se reduce a $0 USD (Zero-Deductible Network Benefit).',
              keywords: ['seguro catastrofico', 'salud catastrofica', 'oncologico', 'hospitalizacion', '250000', 'deducible cero', 'uci']
            },
            {
              article: 'Artículo 10° — Seguro de Vida Familiar y Protección de Accidentes Personales',
              text: 'El Seguro de Vida Familiar (desde $16/mes) otorga una indemnización libre de impuestos de hasta $100,000 USD por fallecimiento natural o accidental e invalidez total y permanente 2/3, además de anticipo del 25% del capital asegurado en caso de diagnóstico de enfermedad grave y asistencia funeraria integral 24/7.',
              keywords: ['seguro de vida', 'accidentes personales', 'invalidez', 'fallecimiento', 'capital asegurado', '100000']
            }
          ]
        },
        {
          pageNumber: 3,
          heading: 'CAPÍTULO III: PÓLIZAS DE SEGURO AUTOMOTRIZ FULL COVERAGE, HOGAR Y MASCOTAS',
          articles: [
            {
              article: 'Artículo 13° — Seguro Automotriz Cobertura Total (Full Coverage Auto Insurance)',
              text: 'La Póliza Automotriz de Healthy Portal (desde $34/mes en Plan Essential y $49/mes en Plan Full Member) cubre: (a) Daños propios por colisión, vuelco e incendio; (b) Robo total o parcial de accesorios; (c) Responsabilidad Civil frente a terceros hasta $100,000 USD; (d) Auto de reemplazo hasta por 30 días; y (e) Asistencia en ruta 24/7 (grúa, batería, neumático y cerrajería) en todo Estados Unidos.',
              keywords: ['seguro automotriz', 'auto', 'auto de reemplazo', 'asistencia en ruta', 'colision', 'robo', 'responsabilidad civil', '34']
            },
            {
              article: 'Artículo 15° — Seguro de Hogar Inteligente, Viajes y Mascotas (Pet Care)',
              text: 'El Seguro Smart Home ($19/mes) protege estructura y contenido contra incendio, sismo, daños por agua y robo, incluyendo asistencia domiciliaria de plomería, electricidad y cristalería con 3 eventos gratuitos al año. El Seguro de Mascotas cubre urgencias veterinarias, vacunas anuales y responsabilidad civil para perros y gatos.',
              keywords: ['seguro de hogar', 'smart home', 'incendio', 'sismo', 'plomeria', 'seguro de mascotas', 'seguro de viaje', 'veterinario']
            },
            {
              article: 'Artículo 18° — Procedimiento de Denuncio de Siniestros y Reembolso Digital',
              text: 'Los reembolsos médicos ambulatorios se solicitan subiendo la boleta y orden médica en la App More Healthy, con abono en 72 horas. Para siniestros automotrices o de hogar, el denuncio debe realizarse dentro de los 10 días corridos siguientes al evento a través de /insurance/claims-and-assistance.html o llamando al 1-800-555-0199.',
              keywords: ['siniestro', 'reembolso', 'denuncio', '72 horas', '10 dias', 'boleta', 'asistencia']
            }
          ]
        }
      ],
      relatedRoutes: [
        { title: 'Health & Preventive Care Benefits ($0 Copay)', href: '/benefits/health-and-preventive-care.html' },
        { title: 'Pharmacy Red Wall Discounts', href: '/benefits/pharmacies.html' },
        { title: 'Waiting List Resolution Plan', href: '/benefits/waiting-list-plan.html' },
        { title: 'Insurance Hub & Quote Simulator', href: '/insurance/index.html' },
        { title: 'Claims & 24/7 Assistance', href: '/insurance/claims-and-assistance.html' }
      ]
    },
    {
      id: 'doc-beneficios-turismo-2026',
      code: 'GUI-BEN-TUR-2026-V5',
      title: 'Guía Oficial de Beneficios, Becas SER, Cultura (Teather Moon y Starlight Grand Theater) y Centros Turísticos en EE.UU.',
      shortTitle: 'Guía de Beneficios, Becas SER y Turismo 2026',
      category: 'Beneficios, Educación SER, Cultura y Turismo',
      authority: 'Healthy Portal Benefits, Tourism & Social Support Directorate',
      pdfUrl: '/assets/docs/guia-beneficios-turismo-apoyo-social-2026.pdf',
      updatedAt: 'Octubre 2026',
      pagesCount: 3,
      summary: 'Guía oficial en español sobre los 24 centros turísticos (Lake Tahoe, Aspen, Sedona, Santa Barbara, Asheville, Napa Valley, Carmel, Glacier National Park), descuentos culturales en Teather Moon y Starlight Grand Theater, Becas SER y Apoyo Social (Programa Cuidadores y Asignación Familiar).',
      pages: [
        {
          pageNumber: 1,
          heading: 'PARTE I: RED DE 24 CENTROS TURÍSTICOS, HOTELES Y CABAÑAS EN ESTADOS UNIDOS',
          articles: [
            {
              article: 'Norma 1° — Destinos Oficiales de Turismo y Recreación Healthy Portal',
              text: 'Los afiliados y sus familias cuentan con tarifas preferenciales durante todo el año en los 24 complejos propios y en convenio ubicados en Estados Unidos, destacando: Lake Tahoe Alpine Resort (California/Nevada), Aspen Mountain Lodge (Colorado), Sedona Red Rock Cabins (Arizona), Santa Barbara Coastal Villas (California), Asheville Blue Ridge Park (North Carolina), Napa Valley Vineyard Retreat (California), Carmel Oceanfront Inn y Glacier National Park Eco-Cabins (Montana).',
              keywords: ['turismo', 'vacaciones', 'cabañas', 'hoteles', 'lake tahoe', 'aspen', 'sedona', 'santa barbara', 'asheville', 'napa valley', 'carmel', 'glacier national park']
            },
            {
              article: 'Norma 3° — Descuento de 35% en Temporada Baja y Pago en 12 Cuotas Sin Interés',
              text: 'Las reservas realizadas para estadías en Temporada Baja (Low Season: marzo a junio y septiembre a noviembre, excluyendo feriados federales) gozan de hasta un 35% de descuento directo sobre la tarifa de afiliado y pueden financiarse hasta en 12 cuotas sin interés mediante Crédito Social Turístico o tarjeta HealthyPay. Las cancelaciones realizadas con al menos 7 días de anticipación tienen 100% de devolución.',
              keywords: ['temporada baja', 'low season', '35%', '12 cuotas sin interes', 'reservas', 'cancelacion', 'descuento turismo']
            }
          ]
        },
        {
          pageNumber: 2,
          heading: 'PARTE II: CULTURA, PANORAMAS (TEATHER MOON Y STARLIGHT GRAND THEATER) Y BECAS SER',
          articles: [
            {
              article: 'Norma 6° — Descuentos Culturales en Teather Moon y Starlight Grand Theater (New York)',
              text: 'Todos los afiliados a Healthy Portal acceden a un 25% de descuento permanente en entradas para obras de teatro, musicales y conciertos familiares en todas las salas de Teather Moon y en el Starlight Grand Theater de New York, además de precios rebajados en cines nacionales y cajas de experiencias gastronómicas y de spa (Your Box of Experiences).',
              keywords: ['teather moon', 'starlight grand theater', 'new york', 'cultura', 'teatro', 'cine', 'panoramas', '25%', 'entradas', 'box of experiences']
            },
            {
              article: 'Norma 9° — Premios a la Excelencia Académica y Puntajes de Admisión Universitaria SER',
              text: 'El programa de Excelencia Académica entrega más de 4,500 becas anuales a trabajadores, pensionados y cargas legales que cursen enseñanza media, institutos técnicos o universidades. Quienes obtengan puntajes destacados en la prueba de admisión universitaria SER (Standardized Educational Ranking) o promedio GPA igual o superior a 3.7 reciben bonos de matrícula de hasta $1,200 USD y equipamiento tecnológico (laptops).',
              keywords: ['ser', 'becas', 'excelencia academica', 'universidad', 'admision universitaria', 'gpa', 'laptops', 'educacion', 'estudiantes']
            }
          ]
        },
        {
          pageNumber: 3,
          heading: 'PARTE III: APOYO SOCIAL, ASIGNACIÓN FAMILIAR, BONOS FAMILIARES Y PROGRAMA CUIDADORES',
          articles: [
            {
              article: 'Norma 12° — Tramos Legales de Asignación Familiar (Family Allowance Tiers A, B, C y D)',
              text: 'El subsidio mensual de Asignación Familiar por cada carga acreditada se determina según el ingreso imponible mensual del trabajador: Tramo A (ingresos hasta $586 USD): $22 USD mensuales por carga; Tramo B (ingresos entre $587 y $856 USD): $14 USD mensuales por carga; Tramo C (ingresos entre $857 y $1,335 USD): $5 USD mensuales por carga; Tramo D (ingresos superiores a $1,335 USD): exento de pago monetario pero mantiene el 100% de los beneficios de salud, turismo y becas de Healthy Portal.',
              keywords: ['asignacion familiar', 'cargas familiares', 'tramos', 'tramo a', 'tramo b', 'tramo c', 'monto por carga', 'family allowance']
            },
            {
              article: 'Norma 15° — Bonos de Natalidad, Matrimonio, Acuerdo de Unión Civil y Fallecimiento',
              text: 'Healthy Portal otorga bonos directos no reembolsables por eventos vitales: Bono por Nacimiento o Adopción ($120 USD + ajuar infantil), Bono por Matrimonio o Acuerdo de Unión Civil ($110 USD), y Asignación por Fallecimiento para apoyo funerario familiar ($350 USD). El plazo para solicitarlos en My Portal es de 120 días corridos desde la fecha del certificado oficial.',
              keywords: ['bono natalidad', 'nacimiento', 'matrimonio', 'union civil', 'fallecimiento', 'bonos familiares', '120 dias']
            },
            {
              article: 'Norma 18° — Programa Integral de Apoyo a Cuidadores (Caregivers Support Program)',
              text: 'Los afiliados que cuidan a un familiar con dependencia severa o moderada tienen acceso gratuito al Programa Cuidadores, que incluye: 12 sesiones anuales de apoyo psicológico y contención emocional, asesoría legal previsional sin costo, talleres de terapia ocupacional domiciliaria y descuentos preferenciales de 45% en insumos de cuidado en Pharmacy Red Wall.',
              keywords: ['cuidadores', 'caregivers', 'dependencia', 'apoyo psicologico', 'terapia ocupacional', 'adulto mayor']
            }
          ]
        }
      ],
      relatedRoutes: [
        { title: 'Tourism & Recreation Hub (Lake Tahoe, Aspen, Sedona)', href: '/tourism/index.html' },
        { title: 'Low Season 35% Off Offers', href: '/tourism/low-season-offers.html' },
        { title: 'Culture & Events (Teather Moon & Starlight Grand Theater)', href: '/benefits/culture-and-events.html' },
        { title: 'Education & SER Academic Scholarships', href: '/benefits/education-and-academic-excellence.html' },
        { title: 'Caregivers Support Program', href: '/social-support/caregivers-program.html' },
        { title: 'Family Allowance & Dependents', href: '/social-support/family-allowance.html' }
      ]
    }
  ];

  const demoPrompts = [
    {
      label: '🩺 Apelación Licencia Médica (MRB / NSWB)',
      query: '¿Cómo apelar una licencia médica rechazada ante MRB y NSWB y cómo se calcula el subsidio?'
    },
    {
      label: '🏛️ Contrato REDEC y Pagos en Exceso',
      query: '¿Qué cubre el contrato REDEC, cómo funciona la portabilidad y cómo pido devolución de pagos en exceso?'
    },
    {
      label: '💊 Copago $0 HealthyNet y Pharmacy Red Wall',
      query: '¿Cómo funciona el copago $0 en HealthyNet, Clinic Dubal, SAI Health y el 40% en Pharmacy Red Wall?'
    },
    {
      label: '🏔️ Turismo (Lake Tahoe / Aspen), SER y Teather Moon',
      query: '¿Qué descuentos hay en Lake Tahoe, Aspen, Teather Moon y cómo postular a las becas SER?'
    }
  ];

  return {
    documents: documents,
    demoPrompts: demoPrompts
  };
});
