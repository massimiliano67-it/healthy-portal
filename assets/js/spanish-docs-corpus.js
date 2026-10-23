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
    },
    {
      id: 'doc-copiloto-360-sucursal-2026',
      code: 'COP-360-CRM-2026-V2',
      title: 'Manual Operativo del Copiloto 360° de Sucursal y Contact Center (Employee Experience en Gemini Enterprise)',
      shortTitle: 'Manual Copiloto 360° Sucursal y Contact Center 2026',
      category: 'Operaciones de Sucursal, CRM 360° y Experiencia de Ejecutivos',
      authority: 'Healthy Portal Branch Operations & Omnichannel Contact Center Directorate',
      pdfUrl: '/assets/docs/manual-operativo-sucursal-contact-center-2026.pdf',
      updatedAt: 'Octubre 2026',
      pagesCount: 3,
      summary: 'Protocolo oficial en español para ejecutivos de sucursal y agentes de Contact Center utilizando el Copiloto 360° de Gemini Enterprise: consolidación en tiempo real de CRM, REDEC, licencias MRB/NSWB, saldos de pagos en exceso y motor Next-Best-Action.',
      pages: [
        {
          pageNumber: 1,
          heading: 'CAPÍTULO I: FICHA ÚNICA 360° DEL AFILIADO Y CONSOLIDACIÓN MULTI-SISTEMA EN TIEMPO REAL',
          articles: [
            {
              article: 'Protocolo 1° — Unificación de Conectores Empresariales (CRM, Core REDEC, NSWB/MRB y HealthyNet)',
              text: 'Al ingresar el ID de Afiliado en el Copiloto 360° de Sucursal o Contact Center, Gemini Enterprise consulta simultáneamente 4 conectores internos: (1) CRM de Afiliación y Tramo de Asignación Familiar (A, B, C o D), (2) Core Financiero REDEC (cupo preaprobado y margen legal disponible dentro del tope del 25% para trabajadores o 15% para pensionados), (3) Core de Licencias Médicas Electrónicas MRB/NSWB, y (4) Cuenta Individual de Pagos en Exceso.',
              keywords: ['copiloto 360', 'sucursal', 'contact center', 'crm', 'conectores', 'ficha 360', 'ejecutivo', 'employee experience']
            },
            {
              article: 'Protocolo 3° — Detección Proactiva de Saldos de Pagos en Exceso y Abono Inmediato',
              text: 'Todo ejecutivo debe verificar en los primeros 15 segundos de atención si el afiliado registra saldo disponible de Pagos en Exceso (Excess Payments). Si existe un saldo superior a $50 USD, el Copiloto 360° activa una alerta prioritaria permitiendo transferir el 100% del monto en el acto a la cuenta bancaria del afiliado o imputarlo al prepago de cuotas de Crédito Social sin comisión.',
              keywords: ['alerta', 'pagos en exceso', 'ejecutivo sucursal', '15 segundos', 'abono inmediato', 'prepago sin comision']
            }
          ]
        },
        {
          pageNumber: 2,
          heading: 'CAPÍTULO II: MOTOR NEXT-BEST-ACTION (NBA), ELEGIBILIDAD CRUZADA Y GUIONES EJECUTIVOS',
          articles: [
            {
              article: 'Protocolo 6° — Reglas de Recomendación Next-Best-Action (NBA) Basadas en Perfil',
              text: 'El motor de inteligencia de Gemini Enterprise genera hasta 3 recomendaciones personalizadas por atención: (a) para afiliados Tramo A o B con cargas escolares, priorizar postulación a Becas SER y Bono de Escolaridad; (b) para afiliados con créditos bancarios externos a tasas mayores al 22% CAE, activar simulación de Portabilidad REDEC al 14.8% CAE; (c) para pensionados, ofrecer exención del 100% de mantención en Cuenta HealthyPay y descuento del 45% en Pharmacy Red Wall.',
              keywords: ['next best action', 'nba', 'recomendacion', 'elegibilidad cruzada', 'guion ejecutivo', 'retencion', 'pensionados']
            },
            {
              article: 'Protocolo 8° — Desbloqueo Asistido de Licencias Médicas Observadas desde Sucursal',
              text: 'Cuando el Copiloto 360° detecta una licencia médica en estado Pendiente de Antecedentes o Rechazada por MRB, el ejecutivo debe generar desde la misma pantalla el Checklist de Apelación Ley 20.585 y solicitar por conector interno las liquidaciones de sueldo faltantes al portal de RR.HH. del empleador, evitando que el afiliado deba acudir presencialmente una segunda vez.',
              keywords: ['desbloqueo licencia', 'atencion sucursal', 'primera resolucion', 'rrhh empleador', 'checklist apelacion']
            }
          ]
        },
        {
          pageNumber: 3,
          heading: 'CAPÍTULO III: SLA DE RESOLUCIÓN EN PRIMER CONTACTO (FCR) Y AUDITORÍA DE CALIDAD',
          articles: [
            {
              article: 'Protocolo 11° — Estándar de Tiempo Medio de Atención (AHT) y Resolución en Primer Contacto (FCR 92%)',
              text: 'La asistencia en vivo de Gemini Enterprise reduce el Tiempo Medio de Operación (AHT) de 11 minutos a 3.2 minutos por afiliado y eleva la tasa de Resolución en Primer Contacto (First Contact Resolution - FCR) al 92.4%. Toda respuesta verbal o escrita entregada por el ejecutivo queda respaldada con el código de cita verificable del documento normativo correspondiente.',
              keywords: ['sla', 'fcr', 'aht', 'resolucion primer contacto', 'tiempo atencion', '92.4%', 'calidad contact center']
            },
            {
              article: 'Protocolo 14° — Trazabilidad, Firma Biométrica en Sucursal Móvil y Resumen Post-Atención',
              text: 'Al finalizar la atención en cualquiera de las 64 sucursales físicas, módulos Express o Video-Sucursal, el Copiloto 360° emite automáticamente una Minuta Ejecutiva de Atención en PDF firmada digitalmente y la envía al correo del afiliado junto con los enlaces directos a los beneficios activados.',
              keywords: ['firma biometrica', 'video sucursal', 'minuta ejecutiva', '64 sucursales', 'resumen atencion']
            }
          ]
        }
      ],
      relatedRoutes: [
        { title: 'Branch & Service Center Locator', href: '/help-center/branch-locator.html' },
        { title: 'Customer Service & Contact Channels', href: '/help-center/customer-service-channels.html' },
        { title: 'Excess Payments & Unclaimed Balances', href: '/excess-payments.html' },
        { title: 'Social Credit Simulator', href: '/credits/social-credit.html' }
      ]
    },
    {
      id: 'doc-protocolo-apelacion-licencias-2026',
      code: 'APEL-LM-SUSESO-2026-V3',
      title: 'Protocolo Técnico-Jurídico de Apelación de Licencias Médicas ante MRB, NSWB y Conectores Google Workspace',
      shortTitle: 'Protocolo Apelación Licencias MRB/NSWB + Workspace 2026',
      category: 'Apelaciones Médicas, Jurisprudencia NSWB y Automatización Workspace',
      authority: 'National Social Welfare Board (NSWB) & Healthy Portal Medical Legal Division',
      pdfUrl: '/assets/docs/protocolo-apelacion-licencias-compin-suseso-2026.pdf',
      updatedAt: 'Octubre 2026',
      pagesCount: 3,
      summary: 'Guía técnico-jurídica oficial en español para estructurar recursos de reposición y apelación de licencias médicas rechazadas o reducidas ante MRB y NSWB, incluyendo requisitos de informe médico Clinic Dubal y automatización documental con Google Workspace (Docs, Drive y Gmail).',
      pages: [
        {
          pageNumber: 1,
          heading: 'SECCIÓN I: TIPIFICACIÓN DE CAUSALES DE RECHAZO Y ESTÁNDAR PROBATORIO ANTE MRB Y NSWB',
          articles: [
            {
              article: 'Directriz 1° — Causal A: Presentación Fuera de Plazo y Eximente de Fuerza Mayor (Art. 54 D.S. N° 3)',
              text: 'Cuando una licencia médica es rechazada por presentación extemporánea (pasados los 2 días hábiles en sector privado o 3 días en sector público), el recurso de apelación ante MRB y NSWB es admisible si se acredita Fuerza Mayor o Caso Fortuito: hospitalización de urgencia, impedimento físico agudo, caída certificada del operador de licencia electrónica (I-Med / Medipass) o retención imputable exclusivamente al empleador.',
              keywords: ['causal a', 'fuera de plazo', 'extemporanea', 'fuerza mayor', 'caso fortuito', 'art 54 ds 3', 'apelacion licencia']
            },
            {
              article: 'Directriz 3° — Causal B: Reposo Médico Injustificado o Prolongado y Peritaje en Clinic Dubal',
              text: 'Ante el rechazo o reducción de días por la causal de Reposo Injustificado, el afiliado debe acompañar un Informe Médico Complementario emitido por su médico tratante en Clinic Dubal o red HealthyNet, detallando: código CIE-10 exacto, evolución funcional, exámenes imagenológicos o de laboratorio (RMN, TAC, perfil bioquímico), esquema terapéutico activo y fecha estimada de reintegro laboral seguro.',
              keywords: ['causal b', 'reposo injustificado', 'reduccion de dias', 'informe medico complementario', 'cie-10', 'clinic dubal', 'examenes']
            }
          ]
        },
        {
          pageNumber: 2,
          heading: 'SECCIÓN II: CAUSAL PREVISIONAL, VÍNCULO LABORAL Y RECALCULO DE BASE DE SUBSIDIO',
          articles: [
            {
              article: 'Directriz 6° — Causal C: Observación de Vínculo Laboral o Lagunas de Cotización Previsional',
              text: 'Si la licencia es observada por falta de registro de los 90 días de cotizaciones (o 30 días en contratos temporales), el Centro de Apelación Inteligente verifica automáticamente el contrato de trabajo vigente, anexos firmados, certificado de cotizaciones previsionales pagadas o declaradas y comprobantes de pago de remuneraciones de los últimos 3 meses calendario anteriores al inicio del reposo.',
              keywords: ['causal c', 'vinculo laboral', 'cotizaciones', '90 dias', 'liquidaciones', 'contrato trabajo', 'recalculo subsidio']
            },
            {
              article: 'Directriz 8° — Jurisprudencia Obligatoria NSWB sobre Pago Retroactivo en 5 Días Hábiles',
              text: 'Acogido el recurso de reposición por MRB o el dictamen de apelación por NSWB (Ley N° 20.585), Healthy Portal reliquida el 100% del subsidio devengado sin aplicar descuentos administrativos y ejecuta la transferencia electrónica directa a la cuenta del trabajador dentro del plazo máximo improrrogable de 5 días hábiles bancarios.',
              keywords: ['jurisprudencia nswb', 'ley 20585', 'pago retroactivo', '5 dias habiles', 'reliquidacion', 'transferencia directa']
            }
          ]
        },
        {
          pageNumber: 3,
          heading: 'SECCIÓN III: FLUJO AUTOMATIZADO CON CONECTORES GOOGLE WORKSPACE (DOCS, DRIVE, GMAIL)',
          articles: [
            {
              article: 'Directriz 11° — Generación Automática del Escrito de Apelación en Google Docs y Expediente Drive',
              text: 'El Centro de Apelación Inteligente de Gemini Enterprise utiliza conectores nativos de Google Workspace con delegación segura (OAuth 2.0): (1) redacta el escrito jurídico-clínico formal en una plantilla oficial de Google Docs con citas normativas exactas, (2) compila y etiqueta los anexos clínicos (epicrisis Clinic Dubal y liquidaciones) en una carpeta segura de Google Drive, y (3) prepara el borrador de notificación oficial en Gmail listo para envío a MRB/NSWB.',
              keywords: ['google workspace', 'google docs', 'google drive', 'gmail', 'conectores workspace', 'escrito apelacion', 'automatizacion']
            }
          ]
        }
      ],
      relatedRoutes: [
        { title: 'Medical Leave Status & Calculator', href: '/medical-leaves/index.html' },
        { title: 'Documents Required for Medical Leaves', href: '/medical-leaves/required-documents.html' },
        { title: 'Subsidy Payment Calculation Rules', href: '/medical-leaves/subsidy-calculation.html' },
        { title: 'Appeal & Claims Filing Portal', href: '/help-center/complaints-and-claims.html' }
      ]
    },
    {
      id: 'doc-anexo-portabilidad-comparador-2026',
      code: 'PORT-21236-POL-2026-V4',
      title: 'Anexo Técnico de Portabilidad Financiera Ley 21.236 y Matriz Comparativa de Pólizas de Salud y Seguros 2026',
      shortTitle: 'Anexo Portabilidad Ley 21.236 y Comparador Pólizas 2026',
      category: 'Portabilidad Financiera, Subrogación REDEC y Comparativa de Seguros',
      authority: 'Healthy Portal Financial Portability & Actuarial Insurance Unit',
      pdfUrl: '/assets/docs/anexo-tecnico-portabilidad-financiera-comparador-polizas-2026.pdf',
      updatedAt: 'Octubre 2026',
      pagesCount: 3,
      summary: 'Especificación técnica y actuarial en español para comparar créditos externos bajo la Ley N° 21.236 de Portabilidad Financiera frente a Crédito Social Healthy Portal, y matriz comparativa cláusula por cláusula de seguros de Salud, Auto, Vida y Hogar.',
      pages: [
        {
          pageNumber: 1,
          heading: 'ANEXO I: REGLAS DE COMPARACIÓN DE PORTABILIDAD FINANCIERA LEY N° 21.236 Y SUBROGACIÓN',
          articles: [
            {
              article: 'Regla Técnica 1° — Metodología de Comparación de CAE, Cuota Mensual y Costo Total del Crédito',
              text: 'El Asesor de Portabilidad Financiera de Gemini Enterprise compara cualquier oferta o deuda bancaria vigente (tarjetas rotativas, créditos de consumo o automotrices con CAE promedio de mercado entre 23.5% y 34.8%) contra la tasa preferencial de Crédito Social Healthy Portal (14.8% CAE anual para trabajadores activos y 13.2% CAE anual para pensionados). La subrogación especial Ley 21.236 extingue las garantías del banco de origen sin cobro de gastos notariales adicionales.',
              keywords: ['portabilidad financiera', 'ley 21236', 'comparador creditos', 'cae 14.8%', 'cae 13.2%', 'subrogacion', 'ahorro mensual']
            },
            {
              article: 'Regla Técnica 3° — Verificación Automática del Tope de Descuento por Planilla (25% / 15%)',
              text: 'Toda propuesta de portabilidad emitida por el comparador incluye el Certificado de Holgura Previsional REDEC, garantizando que la nueva cuota consolidada no supere el 25% de la remuneración líquida mensual del trabajador ni el 15% de la pensión líquida del jubilado, liberando liquidez inmediata en el presupuesto familiar.',
              keywords: ['holgura previsional', 'tope 25%', 'tope 15%', 'liquidez familiar', 'certificado portabilidad']
            }
          ]
        },
        {
          pageNumber: 2,
          heading: 'ANEXO II: MATRIZ COMPARATIVA CLÁUSULA POR CLÁUSULA DE PÓLIZAS DE SEGUROS',
          articles: [
            {
              article: 'Regla Técnica 5° — Comparativa de Seguro Catastrófico y Oncológico vs. Aseguradoras Comerciales',
              text: 'A diferencia de las pólizas comerciales individuales que exigen deducibles anuales de 15 a 30 UF y carencias de 90 días, el Seguro de Salud Catastrófico y Oncológico de Healthy Portal ofrece: Deducible $0 USD en hospitalizaciones dentro de Clinic Dubal y Red HealthyNet, cobertura máxima de 5,000 UF anuales, carencia reducida a 30 días (0 días por accidente) y reembolso del 80% al 100% sobre copago Fonasa/Isapre.',
              keywords: ['comparador seguros', 'seguro catastrofico', 'oncologico', '5000 uf', 'deducible 0', 'carencia 30 dias', 'clinic dubal']
            },
            {
              article: 'Regla Técnica 7° — Comparativa de Seguro Automotriz Full Protection y Hogar Protegido',
              text: 'El Seguro Automotriz Full Protection de Healthy Portal ($34 USD base mensual) incluye Deducible Inteligente $0 en talleres oficiales de la red, auto de reemplazo hasta por 30 días sin límite de kilometraje y cobertura de responsabilidad civil de 1,500 UF, superando el estándar bancario externo que aplica deducibles fijos de 5 a 10 UF y topes de 10 días de vehículo de reemplazo.',
              keywords: ['seguro automotriz', 'full protection', 'auto reemplazo 30 dias', '1500 uf', 'hogar protegido', 'deducible inteligente']
            }
          ]
        },
        {
          pageNumber: 3,
          heading: 'ANEXO III: EXCLUSIONES EXPRESAS, BONIFICACIÓN I-MED Y TRANSPARENCIA CONTRACTUAL',
          articles: [
            {
              article: 'Regla Técnica 10° — Auditoría Transparente de Exclusiones y Preexistencias Declaradas',
              text: 'El motor de Grounding Documental de Gemini Enterprise destaca de forma explícita las exclusiones de cada póliza antes de la contratación digital: procedimientos meramente estéticos no reconstructivos, deportes aéreos extremos no federados y patologías hospitalarias diagnosticadas dentro de los 12 meses previos no declaradas en la DPS (Declaración Personal de Salud). Las enfermedades crónicas ambulatorias (hipertensión, diabetes tipo 2, dislipidemia) SÍ están cubiertas al 100% en el convenio de descuento de Pharmacy Red Wall (hasta 40% y 45%).',
              keywords: ['exclusiones', 'preexistencias', 'dps', 'declaracion personal de salud', 'enfermedades cronicas', 'pharmacy red wall']
            }
          ]
        }
      ],
      relatedRoutes: [
        { title: 'Credit Simulator & Portability', href: '/credits/index.html' },
        { title: 'Financial Consolidation Credit', href: '/credits/financial-consolidation.html' },
        { title: 'Insurance Hub & Quote Simulator', href: '/insurance/index.html' },
        { title: 'Health & Catastrophic Insurance', href: '/insurance/health-and-catastrophic.html' },
        { title: 'Auto Insurance Full Protection', href: '/insurance/auto-insurance.html' }
      ]
    },
    {
      id: 'doc-informe-b2b-esg-solvencia-2026',
      code: 'B2B-ESG-BASILEA-2026-V1',
      title: 'Reporte Integrado B2B de Bienestar Corporativo, Ausentismo Laboral, Solvencia Basilea III y Bonos Sociales ESG 2026',
      shortTitle: 'Reporte B2B Empresas, Solvencia Basilea III y ESG 2026',
      category: 'Inteligencia B2B Empresas, Inversionistas, Riesgo AA+ y Sostenibilidad ESG',
      authority: 'Healthy Portal Corporate B2B Division & Institutional Investor Relations',
      pdfUrl: '/assets/docs/informe-sostenibilidad-finanzas-sociales-esg-b2b-2026.pdf',
      updatedAt: 'Octubre 2026',
      pagesCount: 3,
      summary: 'Reporte oficial en español para Directores de RR.HH. de empresas afiliadas e Inversionistas Institucionales: benchmarking de ausentismo laboral, ROI de salud preventiva en terreno, indicadores de solvencia Basilea III, clasificación AA+ y trazabilidad de Bonos Sociales ESG.',
      pages: [
        {
          pageNumber: 1,
          heading: 'PARTE I: INTELIGENCIA B2B PARA EMPRESAS AFILIADAS, RR.HH. Y REDUCCIÓN DE AUSENTISMO',
          articles: [
            {
              article: 'Indicador B2B 1° — Benchmarking de Ausentismo Laboral y Retorno de Salud Preventiva (ROI 3.4x)',
              text: 'Las empresas afiliadas que implementan el Plan Anual de Salud Preventiva en Terreno de Healthy Portal (operativos móviles de pesquisa cardiovascular, oftalmológica y salud mental en el lugar de trabajo junto a Clinic Dubal) registran una reducción promedio del 24.6% en los días de ausentismo por licencias médicas curativas en un horizonte de 12 meses, generando un retorno social y productivo estimado de 3.4x por cada dólar invertido en bienestar.',
              keywords: ['b2b', 'empresas', 'rrhh', 'ausentismo laboral', 'salud preventiva', 'operativos moviles', 'roi 3.4x', 'productividad']
            },
            {
              article: 'Indicador B2B 3° — Optimización de Uso de Beneficios por Tramo Salarial y Retención de Talento',
              text: 'El Hub B2B de Gemini Enterprise analiza de forma agregada y anonimizada la nómina de la empresa afiliada para maximizar la adopción de beneficios libres de costo para el empleador: Asignación Familiar electrónica, convenios dentales y ópticos ($0 copago preventivo), Becas SER para hijos de trabajadores y educación financiera contra el sobreendeudamiento.',
              keywords: ['retencion talento', 'nomina empresa', 'adopcion beneficios', 'educacion financiera', 'bienestar corporativo']
            }
          ]
        },
        {
          pageNumber: 2,
          heading: 'PARTE II: SOLVENCIA PATRIMONIAL BASILEA III, CLASIFICACIÓN DE RIESGO AA+ Y CARTERA SOCIAL',
          articles: [
            {
              article: 'Indicador Financiero 5° — Clasificación de Riesgo AA+ (Perspectiva Estable) y Ratio Basilea III',
              text: 'Al cierre del tercer trimestre de 2026, Healthy Portal mantiene una clasificación de solvencia institucional AA+ con Perspectiva Estable otorgada por las principales agencias clasificadoras de riesgo. El Índice de Adecuación de Capital (IAC estándar Basilea III) alcanza el 18.4% (superando ampliamente el mínimo regulatorio del 10.5%), con un Ratio de Cobertura de Liquidez (LCR) de 164% y cobertura de provisiones de 2.35 veces la cartera deteriorada.',
              keywords: ['inversionistas', 'clasificacion aa+', 'basilea iii', 'solvencia', 'adecuacion de capital', '18.4%', 'liquidez lcr']
            },
            {
              article: 'Indicador Financiero 7° — Calidad de Cartera de Crédito Social y Tasa de Morosidad (1.82%)',
              text: 'La cartera colocada de Crédito Social asciende a $1,420 millones USD distribuida en 485,000 operaciones activas con un ticket promedio de $2,920 USD. Gracias al mecanismo de recaudación preferente por planilla (Payroll Deduction Code REDEC) y al tope estricto de endeudamiento del 25%/15%, la morosidad mayor a 90 días se sitúa en apenas 1.82%, el nivel más bajo de la industria financiera social.',
              keywords: ['morosidad 1.82%', 'cartera credito social', '1420 millones', 'recaudacion planilla', 'riesgo crediticio', 'estados financieros']
            }
          ]
        },
        {
          pageNumber: 3,
          heading: 'PARTE III: MARCO DE BONOS SOCIALES Y SOSTENIBLES (ESG ICMA) E IMPACTO AUDITADO',
          articles: [
            {
              article: 'Indicador ESG 10° — Trazabilidad y Asignación de Emisiones de Bonos Sociales ESG',
              text: 'El 100% de los fondos recaudados mediante la serie de Bonos Sociales y Sostenibles de Healthy Portal (certificados bajo los Social Bond Principles de ICMA y verificados por auditor externo independiente) se destina a tres carteras de impacto social medible: (1) 52% a Créditos Sociales para trabajadores Tramos A y B y microempresas lideradas por mujeres, (2) 31% a financiamiento preferencial para Adultos Mayores y Pensionados, y (3) 17% a infraestructura clínica regional y telemedicina gratuita.',
              keywords: ['bonos sociales', 'esg', 'icma', 'sostenibilidad', 'impacto social', 'adulto mayor', 'mujeres', 'inversion responsable']
            }
          ]
        }
      ],
      relatedRoutes: [
        { title: 'Employer Portal & Payroll Services', href: '/companies/index.html' },
        { title: 'Investor Relations & Risk Ratings', href: '/investors/index.html' },
        { title: 'Financial Statements & Solvency Reports', href: '/investors/financial-statements.html' },
        { title: 'ESG Bond Framework & Social Impact', href: '/investors/esg-and-social-bonds.html' },
        { title: 'Sustainability Strategy & Social Value', href: '/sustainability/index.html' }
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
