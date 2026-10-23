/**
 * Healthy Portal — Suite Completa Gemini Enterprise (Casos 2, 3, 4 y 5)
 * Provee los escenarios estructurados, conectores simulados/reales, cálculos financieros
 * y citas verificables a los 8 documentos PDF oficiales en /assets/docs/.
 * Funciona tanto en servidor Node.js (junto a Vertex AI Gemini 3 Flash) como en navegador.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.HP_GEMINI_CASES = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  /* ==========================================================================
     CASO 2: COPILOTO 360° DE SUCURSAL Y CONTACT CENTER (EMPLOYEE EXPERIENCE)
     ========================================================================== */
  const case2Profiles = {
    'valentina-morales': {
      id: 'valentina-morales',
      memberId: 'HP-849201-US',
      fullName: 'Valentina Morales Vance',
      segment: 'Trabajadora Activa (Sector Salud & Educación)',
      tier: 'Tramo B (Ingreso Imponible: $780 USD/mes)',
      dependents: '2 cargas acreditadas (1 escolar en edad Beca SER, 1 preescolar)',
      branchChannel: 'Sucursal Denver Downtown / Video-Sucursal Simultánea',
      excessBalanceUSD: 485,
      creditStatus: {
        activeLoanBalanceUSD: 1850,
        currentQuotaUSD: 98,
        payrollDeductionRatio: '12.5% (Holgura disponible: 12.5% hasta tope legal 25% REDEC)',
        preApprovedAmountUSD: 4200,
        preferentialRateCAE: '14.8% CAE Anual'
      },
      medicalLeaveStatus: {
        folio: 'LM-2026-99412',
        days: 15,
        status: 'Observada por MRB (Pendiente Liquidación Mes 2)',
        estimatedSubsidyUSD: 390,
        diagnosticCenter: 'Clinic Dubal — Centro Médico Denver'
      },
      healthAndInsurance: {
        activePolicy: 'Seguro Salud Catastrófico Plan Full (Cobertura 5,000 UF)',
        pharmacyBenefit: '40% descuento activo en Pharmacy Red Wall + Copago $0 Preventivo'
      },
      executiveSynthesis:
        'Afiliada Tramo B con alta prioridad de atención integral en Primer Contacto (FCR) [Cita 1]. Registra un saldo líquido de Pagos en Exceso de $485 USD disponible para abono inmediato en sucursal en los primeros 15 segundos de atención [Cita 2]. Adicionalmente, presenta la Licencia Médica LM-2026-99412 por 15 días en estado Observada por falta de liquidación del segundo mes; el ejecutivo puede desbloquearla en línea mediante conector RR.HH. y asegurar el pago de $390 USD en 5 días hábiles [Cita 3].',
      nextBestActions: [
        '1. Abono Inmediato Pagos en Exceso ($485 USD): Transferir en un clic a su Cuenta HealthyPay sin costo de mantención o abonar al Crédito Social vigente sin comisión de prepago [Cita 2].',
        '2. Desbloqueo en Línea Licencia LM-2026-99412: Extraer liquidaciones faltantes vía conector empleador y enviar a MRB para liberar el subsidio de $390 USD [Cita 3].',
        '3. Postulación Automática Beca SER ($1,200 USD): Su carga escolar registra GPA 3.8, cumpliendo requisitos de Excelencia Académica SER [Cita 4].'
      ],
      executiveScript:
        '«Hola Valentina, bienvenida a Healthy Portal. En mi pantalla 360° veo tres excelentes noticias para resolver hoy mismo: primero, tienes $485 USD disponibles por Pagos en Exceso que podemos transferir ahora mismo a tu cuenta; segundo, ya conecté con tu empleador para adjuntar la liquidación faltante de tu licencia médica atendida en Clinic Dubal para que recibas tus $390 USD en 5 días hábiles; y tercero, dejamos inscrito a tu hijo en la Beca de Excelencia SER.»',
      citations: [
        {
          index: 1,
          docCode: 'COP-360-CRM-2026-V2',
          docShortTitle: 'Manual Copiloto 360° Sucursal y Contact Center 2026',
          pageNumber: 1,
          article: 'Protocolo 1° — Unificación de Conectores Empresariales (CRM, Core REDEC, NSWB/MRB y HealthyNet)',
          excerpt: 'Al ingresar el ID de Afiliado en el Copiloto 360°, Gemini Enterprise consulta simultáneamente CRM, Core Financiero REDEC, Licencias MRB/NSWB y Cuenta de Pagos en Exceso.',
          pdfUrl: '/assets/docs/manual-operativo-sucursal-contact-center-2026.pdf',
          pdfDeepLink: '/assets/docs/manual-operativo-sucursal-contact-center-2026.pdf#page=1'
        },
        {
          index: 2,
          docCode: 'COP-360-CRM-2026-V2',
          docShortTitle: 'Manual Copiloto 360° Sucursal y Contact Center 2026',
          pageNumber: 1,
          article: 'Protocolo 3° — Detección Proactiva de Saldos de Pagos en Exceso y Abono Inmediato',
          excerpt: 'Todo ejecutivo debe verificar en los primeros 15 segundos si el afiliado registra saldo de Pagos en Exceso superior a $50 USD para transferir el 100% en el acto.',
          pdfUrl: '/assets/docs/manual-operativo-sucursal-contact-center-2026.pdf',
          pdfDeepLink: '/assets/docs/manual-operativo-sucursal-contact-center-2026.pdf#page=1'
        },
        {
          index: 3,
          docCode: 'COP-360-CRM-2026-V2',
          docShortTitle: 'Manual Copiloto 360° Sucursal y Contact Center 2026',
          pageNumber: 2,
          article: 'Protocolo 8° — Desbloqueo Asistido de Licencias Médicas Observadas desde Sucursal',
          excerpt: 'Cuando el Copiloto 360° detecta una licencia en estado Pendiente de Antecedentes, el ejecutivo solicita por conector interno las liquidaciones al portal de RR.HH. del empleador.',
          pdfUrl: '/assets/docs/manual-operativo-sucursal-contact-center-2026.pdf',
          pdfDeepLink: '/assets/docs/manual-operativo-sucursal-contact-center-2026.pdf#page=2'
        },
        {
          index: 4,
          docCode: 'GUI-BEN-TUR-2026-V5',
          docShortTitle: 'Guía de Beneficios, Becas SER y Turismo 2026',
          pageNumber: 2,
          article: 'Norma 9° — Premios a la Excelencia Académica y Puntajes de Admisión Universitaria SER',
          excerpt: 'Quienes obtengan puntajes destacados en la prueba SER o promedio GPA igual o superior a 3.7 reciben bonos de matrícula de hasta $1,200 USD.',
          pdfUrl: '/assets/docs/guia-beneficios-turismo-apoyo-social-2026.pdf',
          pdfDeepLink: '/assets/docs/guia-beneficios-turismo-apoyo-social-2026.pdf#page=2'
        }
      ]
    },
    'roberto-sterling': {
      id: 'roberto-sterling',
      memberId: 'HP-512098-PEN',
      fullName: 'Roberto Sterling Vance',
      segment: 'Pensionado / Adulto Mayor Dorado',
      tier: 'Tramo A (Pensión Líquida: $560 USD/mes — Asignación Máxima)',
      dependents: '1 carga acreditada (Cónyuge en Programa Cuidadores)',
      branchChannel: 'Contact Center Voz Asistida / Sucursal Móvil Austin',
      excessBalanceUSD: 140,
      creditStatus: {
        activeLoanBalanceUSD: 0,
        currentQuotaUSD: 0,
        payrollDeductionRatio: '0% en Healthy Portal (Deuda bancaria externa detectada a 31.4% CAE)',
        preApprovedAmountUSD: 2800,
        preferentialRateCAE: '13.2% CAE Preferencial Pensionados (Tope legal 15% pensión)'
      },
      medicalLeaveStatus: {
        folio: 'N/A (Pensionado — Acceso prioritario Telemedicina SAI Health)',
        days: 0,
        status: 'Beneficio Activo: Copago $0 Consulta General y Oftalmología Preventiva',
        estimatedSubsidyUSD: 0,
        diagnosticCenter: 'SAI Health & Clinic Dubal Senior Network'
      },
      healthAndInsurance: {
        activePolicy: 'Cuenta HealthyPay 100% Costo $0 + Programa Integral Cuidadores Activo',
        pharmacyBenefit: '45% descuento preferencial Senior en insumos y medicamentos Pharmacy Red Wall'
      },
      executiveSynthesis:
        'Afiliado Pensionado Tramo A con saldo a favor de $140 USD en Pagos en Exceso [Cita 1]. El Copiloto 360° identifica oportunidad crítica de bienestar financiero: mantiene un crédito de consumo en banca comercial externa con CAE 31.4%, el cual puede portarse bajo la Ley 21.236 a Crédito Social Pensionado con tasa rebajada del 13.2% CAE respetando el tope estricto del 15% de su pensión líquida ($84 USD/mes máx.) [Cita 2, Cita 3]. Su cónyuge califica al Programa Cuidadores con 45% de descuento en Pharmacy Red Wall [Cita 4].',
      nextBestActions: [
        '1. Portabilidad Ley 21.236 Pensionado (Tasa 13.2% CAE): Refinanciar deuda bancaria externa reduciendo su cuota mensual en 38% dentro del tope legal del 15% de su pensión [Cita 3].',
        '2. Abono de $140 USD de Pagos en Exceso: Transferir directamente a su Cuenta HealthyPay Senior ($0 comisión perpetua) [Cita 1].',
        '3. Activación Programa Cuidadores + Reserva Temporada Baja Aspen/Sedona: Inscribir las 12 sesiones gratuitas de terapia ocupacional domiciliaria y 45% de descuento en Pharmacy Red Wall [Cita 4].'
      ],
      executiveScript:
        '«Don Roberto, un gusto saludarlo. Revisando su ficha integral en el Copiloto 360°, primero le depositaremos hoy mismo $140 USD que tiene a su favor por Pagos en Exceso en su cuenta HealthyPay costo $0. Además, podemos bajar casi a la mitad el interés de su préstamo bancario externo trayéndolo a su tasa preferencial de pensionado de 13.2% CAE, cuidando que la cuota nunca supere el 15% de su pensión, y activamos el 45% de descuento en Pharmacy Red Wall para usted y su esposa.»',
      citations: [
        {
          index: 1,
          docCode: 'COP-360-CRM-2026-V2',
          docShortTitle: 'Manual Copiloto 360° Sucursal y Contact Center 2026',
          pageNumber: 2,
          article: 'Protocolo 6° — Reglas de Recomendación Next-Best-Action (NBA) Basadas en Perfil',
          excerpt: 'Para pensionados, ofrecer exención del 100% de mantención en Cuenta HealthyPay, portabilidad a tasa preferencial y descuento del 45% en Pharmacy Red Wall.',
          pdfUrl: '/assets/docs/manual-operativo-sucursal-contact-center-2026.pdf',
          pdfDeepLink: '/assets/docs/manual-operativo-sucursal-contact-center-2026.pdf#page=2'
        },
        {
          index: 2,
          docCode: 'REDEC-CRED-2026-V8',
          docShortTitle: 'Contrato REDEC, Portabilidad y Pagos en Exceso 2026',
          pageNumber: 1,
          article: 'Cláusula 2° — Tope Máximo de Descuento por Planilla (25% Trabajadores y 15% Pensionados)',
          excerpt: 'Para afiliados pensionados, el límite máximo de descuento mensual es de un 15% de su pensión líquida con tasa preferencial de 13.2% CAE.',
          pdfUrl: '/assets/docs/contrato-redec-portabilidad-credito-social-2026.pdf',
          pdfDeepLink: '/assets/docs/contrato-redec-portabilidad-credito-social-2026.pdf#page=1'
        },
        {
          index: 3,
          docCode: 'PORT-21236-POL-2026-V4',
          docShortTitle: 'Anexo Portabilidad Ley 21.236 y Comparador Pólizas 2026',
          pageNumber: 1,
          article: 'Regla Técnica 1° — Metodología de Comparación de CAE, Cuota Mensual y Costo Total',
          excerpt: 'Compara deudas bancarias vigentes contra la tasa preferencial de Crédito Social Healthy Portal (13.2% CAE anual para pensionados).',
          pdfUrl: '/assets/docs/anexo-tecnico-portabilidad-financiera-comparador-polizas-2026.pdf',
          pdfDeepLink: '/assets/docs/anexo-tecnico-portabilidad-financiera-comparador-polizas-2026.pdf#page=1'
        },
        {
          index: 4,
          docCode: 'GUI-BEN-TUR-2026-V5',
          docShortTitle: 'Guía de Beneficios, Becas SER y Turismo 2026',
          pageNumber: 3,
          article: 'Norma 18° — Programa Integral de Apoyo a Cuidadores (Caregivers Support Program)',
          excerpt: 'Acceso gratuito a 12 sesiones anuales de apoyo psicológico, terapia ocupacional domiciliaria y 45% de descuento en insumos de cuidado en Pharmacy Red Wall.',
          pdfUrl: '/assets/docs/guia-beneficios-turismo-apoyo-social-2026.pdf',
          pdfDeepLink: '/assets/docs/guia-beneficios-turismo-apoyo-social-2026.pdf#page=3'
        }
      ]
    },
    'camila-vance': {
      id: 'camila-vance',
      memberId: 'HP-390441-TECH',
      fullName: 'Camila Vance Hamilton',
      segment: 'Trabajadora Activa (Sector Tecnología & Servicios)',
      tier: 'Tramo C (Ingreso Imponible: $1,220 USD/mes)',
      dependents: '1 carga acreditada (Recién nacido — elegible Bono Natalidad)',
      branchChannel: 'Omnicanal WhatsApp Empresarial + Sucursal Seattle',
      excessBalanceUSD: 95,
      creditStatus: {
        activeLoanBalanceUSD: 920,
        currentQuotaUSD: 52,
        payrollDeductionRatio: '4.2% (Holgura disponible: 20.8% hasta tope legal 25% REDEC)',
        preApprovedAmountUSD: 6500,
        preferentialRateCAE: '14.8% CAE Anual'
      },
      medicalLeaveStatus: {
        folio: 'LM-2026-88104 (Maternal Postnatal)',
        days: 84,
        status: 'Aprobada por NSWB — Pago 100% desde Día 1 ($0 carencia)',
        estimatedSubsidyUSD: 3416,
        diagnosticCenter: 'Clinic Dubal — Maternidad Integral'
      },
      healthAndInsurance: {
        activePolicy: 'Elegible a Seguro Salud Catastrófico Deducible $0 + Bono Natalidad ($120 USD)',
        pharmacyBenefit: '40% descuento pediátrico en Pharmacy Red Wall'
      },
      executiveSynthesis:
        'Afiliada Tramo C cursando Licencia Maternal Postnatal LM-2026-88104 aprobada con pago del 100% de los 84 días sin carencia de 3 días según el Artículo 9° del Reglamento NSWB [Cita 1]. El Copiloto 360° detecta que aún no ha cobrado su Bono por Nacimiento de $120 USD + ajuar infantil (vigente por 120 días corridos) ni su saldo de Pagos en Exceso de $95 USD [Cita 2, Cita 3]. Se recomienda activar en el mismo contacto la incorporación del recién nacido al Seguro Catastrófico con Deducible $0 en Clinic Dubal [Cita 4].',
      nextBestActions: [
        '1. Pago Inmediato Bono Natalidad ($120 USD) + Pagos en Exceso ($95 USD): Abonar $215 USD totales hoy mismo a su cuenta bancaria registrada [Cita 2, Cita 3].',
        '2. Confirmación Subsidio Maternal ($3,416 USD): Certificar que su licencia maternal se paga íntegra desde el día 1 sin carencia de 3 días [Cita 1].',
        '3. Incorporación de Recién Nacido a Red Clinic Dubal ($0 Copago Pediátrico): Activar cobertura pediátrica preventiva y 40% en Pharmacy Red Wall [Cita 4].'
      ],
      executiveScript:
        '«¡Felicitaciones por tu bebé, Camila! En el Copiloto 360° confirmé que tu licencia postnatal ya está aprobada al 100% desde el primer día sin descuentos de carencia. Además, activé ahora mismo el depósito de tu Bono de Natalidad de $120 USD más $95 USD de Pagos en Exceso ($215 USD en total directo a tu cuenta), y dejamos inscrito a tu bebé con copago $0 preventivo en Clinic Dubal.»',
      citations: [
        {
          index: 1,
          docCode: 'REG-NSWB-MRB-2026-V4',
          docShortTitle: 'Reglamento NSWB / MRB Licencias Médicas 2026',
          pageNumber: 2,
          article: 'Artículo 9° — Período de Carencia de 3 Días y Exención desde el Día 11',
          excerpt: 'Las licencias maternales (prenatal, postnatal y permiso parental) se pagan íntegramente desde el día 1 sin período de carencia.',
          pdfUrl: '/assets/docs/reglamento-nswb-mrb-licencias-medicas-2026.pdf',
          pdfDeepLink: '/assets/docs/reglamento-nswb-mrb-licencias-medicas-2026.pdf#page=2'
        },
        {
          index: 2,
          docCode: 'GUI-BEN-TUR-2026-V5',
          docShortTitle: 'Guía de Beneficios, Becas SER y Turismo 2026',
          pageNumber: 3,
          article: 'Norma 15° — Bonos de Natalidad, Matrimonio, Acuerdo de Unión Civil y Fallecimiento',
          excerpt: 'Bono por Nacimiento o Adopción ($120 USD + ajuar infantil). El plazo para solicitarlo en My Portal es de 120 días corridos.',
          pdfUrl: '/assets/docs/guia-beneficios-turismo-apoyo-social-2026.pdf',
          pdfDeepLink: '/assets/docs/guia-beneficios-turismo-apoyo-social-2026.pdf#page=3'
        },
        {
          index: 3,
          docCode: 'COP-360-CRM-2026-V2',
          docShortTitle: 'Manual Copiloto 360° Sucursal y Contact Center 2026',
          pageNumber: 3,
          article: 'Protocolo 11° — Estándar de Tiempo Medio de Atención (AHT) y Resolución en Primer Contacto (FCR 92%)',
          excerpt: 'La asistencia de Gemini Enterprise reduce el AHT a 3.2 minutos y eleva el First Contact Resolution (FCR) al 92.4%.',
          pdfUrl: '/assets/docs/manual-operativo-sucursal-contact-center-2026.pdf',
          pdfDeepLink: '/assets/docs/manual-operativo-sucursal-contact-center-2026.pdf#page=3'
        },
        {
          index: 4,
          docCode: 'POL-SEG-SALUD-2026-V6',
          docShortTitle: 'Condiciones de Pólizas, Salud $0 y Pharmacy Red Wall 2026',
          pageNumber: 1,
          article: 'Condición General 1° — Copago $0 en Consultas Preventivas, Telemedicina y Exámenes en HealthyNet',
          excerpt: 'Acceso a Copago $0 en consultas preventivas y telemedicina 24/7 en Clinic Dubal y SAI Health.',
          pdfUrl: '/assets/docs/condiciones-polizas-seguros-red-salud-2026.pdf',
          pdfDeepLink: '/assets/docs/condiciones-polizas-seguros-red-salud-2026.pdf#page=1'
        }
      ]
    }
  };

  /* ==========================================================================
     CASO 3: CENTRO DE APELACIÓN INTELIGENTE DE LICENCIAS + CONECTORES WORKSPACE
     ========================================================================== */
  const case3Scenarios = {
    'causal-plazo-fuerza-mayor': {
      id: 'causal-plazo-fuerza-mayor',
      folio: 'LM-2026-77310',
      causalTitle: 'Causal A: Presentación Fuera de Plazo (Eximente Fuerza Mayor — Art. 54 D.S. N° 3)',
      days: 14,
      subsidyAmountUSD: 676,
      medicalCenter: 'Clinic Dubal — Urgencia Traumatológica Austin',
      admissibilityScore: '96.8% Probabilidad de Acogida (Jurisprudencia NSWB / Art. 54 D.S. N° 3)',
      legalAnalysis:
        'El rechazo inicial de la licencia LM-2026-77310 (14 días, subsidio estimado $676 USD sin carencia por superar 10 días [Cita 3]) se fundó en presentación extemporánea pasadas las 48 horas. Sin embargo, conforme a la Directriz 1° del Protocolo de Apelación [Cita 1], concurre causal eximente de Fuerza Mayor y Caso Fortuito debidamente acreditada: hospitalización aguda en Clinic Dubal e interrupción certificada del portal electrónico del empleador.',
      appealLetterDraft:
        'A LA COMISIÓN DE EVALUACIÓN DE BENEFICIOS MÉDICOS (MRB) Y JUNTA NACIONAL DE BIENESTAR SOCIAL (NSWB):\n\nPor medio de la presente, en representación del afiliado titular de la Licencia Médica Folio LM-2026-77310 por 14 días de reposo emitida en Clinic Dubal, interpongo formal Recurso de Reposición y Apelación Subsidiaria conforme a la Ley N° 20.585 y al Artículo 54 del D.S. N° 3 [Cita 1, Cita 2].\n\nFUNDAMENTOS DE HECHO Y DERECHO:\n1. La tramitación posterior al plazo de 2 días hábiles obedeció a impedimento físico agudo por hospitalización de urgencia en Clinic Dubal, configurando la eximente legal de Caso Fortuito o Fuerza Mayor prevista en la Directriz 1° [Cita 1].\n2. Al tratarse de una licencia de 14 días (superior a 10 días), corresponde el pago íntegro de los 14 días sin descuento de los 3 primeros días de carencia conforme al Artículo 9° del Reglamento NSWB [Cita 3].\n\nPETICIÓN CONCRETA:\nSolicito acoger la apelación, dejar sin efecto el rechazo por plazo y ordenar la reliquidación y transferencia electrónica de $676 USD dentro del plazo legal máximo de 5 días hábiles [Cita 2].',
      workspaceConnectors: [
        {
          app: 'Google Docs Connector',
          status: '✓ Documento Creado',
          detail: 'Escrito_Apelacion_LM-2026-77310_NSWB.docx generado con citas normativas verificadas.'
        },
        {
          app: 'Google Drive Connector',
          status: '✓ Carpeta Compilada (3 PDFs)',
          detail: 'Expediente /Drive/Apelaciones-MRB/LM-2026-77310 con Epicrisis Clinic Dubal + Certificado Empleador.'
        },
        {
          app: 'Gmail & Calendar Connector',
          status: '✓ Notificación Lista + Alerta SLA',
          detail: 'Borrador oficial listo para apelaciones@mrb-nswb.org + recordatorio de pago a 5 días hábiles.'
        }
      ],
      citations: [
        {
          index: 1,
          docCode: 'APEL-LM-SUSESO-2026-V3',
          docShortTitle: 'Protocolo Apelación Licencias MRB/NSWB + Workspace 2026',
          pageNumber: 1,
          article: 'Directriz 1° — Causal A: Presentación Fuera de Plazo y Eximente de Fuerza Mayor (Art. 54 D.S. N° 3)',
          excerpt: 'El recurso de apelación ante MRB y NSWB es admisible si se acredita Fuerza Mayor o Caso Fortuito: hospitalización de urgencia o caída del operador electrónico.',
          pdfUrl: '/assets/docs/protocolo-apelacion-licencias-compin-suseso-2026.pdf',
          pdfDeepLink: '/assets/docs/protocolo-apelacion-licencias-compin-suseso-2026.pdf#page=1'
        },
        {
          index: 2,
          docCode: 'APEL-LM-SUSESO-2026-V3',
          docShortTitle: 'Protocolo Apelación Licencias MRB/NSWB + Workspace 2026',
          pageNumber: 2,
          article: 'Directriz 8° — Jurisprudencia Obligatoria NSWB sobre Pago Retroactivo en 5 Días Hábiles',
          excerpt: 'Acogido el recurso por MRB o NSWB, Healthy Portal reliquida el 100% del subsidio y ejecuta la transferencia electrónica en un máximo de 5 días hábiles.',
          pdfUrl: '/assets/docs/protocolo-apelacion-licencias-compin-suseso-2026.pdf',
          pdfDeepLink: '/assets/docs/protocolo-apelacion-licencias-compin-suseso-2026.pdf#page=2'
        },
        {
          index: 3,
          docCode: 'REG-NSWB-MRB-2026-V4',
          docShortTitle: 'Reglamento NSWB / MRB Licencias Médicas 2026',
          pageNumber: 2,
          article: 'Artículo 9° — Período de Carencia de 3 Días y Exención desde el Día 11',
          excerpt: 'En licencias de 11 días o más, el subsidio se paga desde el primer día de incapacidad laboral (0 días de carencia).',
          pdfUrl: '/assets/docs/reglamento-nswb-mrb-licencias-medicas-2026.pdf',
          pdfDeepLink: '/assets/docs/reglamento-nswb-mrb-licencias-medicas-2026.pdf#page=2'
        },
        {
          index: 4,
          docCode: 'APEL-LM-SUSESO-2026-V3',
          docShortTitle: 'Protocolo Apelación Licencias MRB/NSWB + Workspace 2026',
          pageNumber: 3,
          article: 'Directriz 11° — Generación Automática del Escrito de Apelación en Google Docs y Expediente Drive',
          excerpt: 'El Centro de Apelación Inteligente utiliza conectores nativos de Google Workspace (Docs, Drive, Gmail) para automatizar el expediente probatorio.',
          pdfUrl: '/assets/docs/protocolo-apelacion-licencias-compin-suseso-2026.pdf',
          pdfDeepLink: '/assets/docs/protocolo-apelacion-licencias-compin-suseso-2026.pdf#page=3'
        }
      ]
    },
    'causal-reposo-clinic-dubal': {
      id: 'causal-reposo-clinic-dubal',
      folio: 'LM-2026-81509',
      causalTitle: 'Causal B: Reposo Injustificado / Reducción de Días (Peritaje Clínico Clinic Dubal — Ley 20.585)',
      days: 21,
      subsidyAmountUSD: 1085,
      medicalCenter: 'Clinic Dubal — Unidad de Neurocirugía y Columna',
      admissibilityScore: '94.5% Probabilidad de Acogida (Respaldo Imagenológico RMN + Informe Clinic Dubal)',
      legalAnalysis:
        'MRB redujo inicialmente de 21 a 7 días el reposo de la licencia LM-2026-81509. Conforme a la Directriz 3° del Protocolo de Apelación [Cita 1] y al Artículo 15° de la Ley N° 20.585 [Cita 2], la incorporación del Informe Médico Complementario emitido en Clinic Dubal junto con la Resonancia Magnética Nuclear (RMN) y el plan de rehabilitación kinésica desvirtúa íntegramente la objeción, obligando a restituir los 21 días completos ($1,085 USD).',
      appealLetterDraft:
        'A LA COMISIÓN DE EVALUACIÓN DE BENEFICIOS MÉDICOS (MRB) Y JUNTA NACIONAL DE BIENESTAR SOCIAL (NSWB):\n\nEn representación del afiliado titular de la Licencia Médica Folio LM-2026-81509 por 21 días, deduzco formal Apelación conforme al Artículo 15° del Reglamento NSWB (Ley N° 20.585) y la Directriz 3° del Protocolo Técnico-Jurídico [Cita 1, Cita 2].\n\nFUNDAMENTOS CLÍNICOS Y PROBATORIOS:\n1. Se acompaña Informe Médico Complementario suscrito por especialista tratante de Clinic Dubal detallando código CIE-10, limitación funcional aguda y resultado de Resonancia Magnética (RMN) [Cita 1].\n2. El reposo de 21 días resulta estrictamente indispensable para completar el esquema terapéutico y permitir un reintegro laboral seguro.\n\nPETICIÓN CONCRETA:\nSolicito restituir la totalidad de los 21 días de reposo médico y ordenar el pago íntegro del subsidio de $1,085 USD en un máximo de 5 días hábiles bancarios [Cita 3].',
      workspaceConnectors: [
        {
          app: 'Google Docs Connector',
          status: '✓ Informe Jurídico-Clínico Generado',
          detail: 'Apelacion_Clinica_LM-2026-81509_Ley20585.docx con fundamentación CIE-10 e índice probatorio.'
        },
        {
          app: 'Google Drive Connector',
          status: '✓ Anexos Médicos Vinculados',
          detail: 'Informe Médico Tratante Clinic Dubal + Informe Imagenológico RMN adjuntados desde Drive.'
        },
        {
          app: 'Gmail & Calendar Connector',
          status: '✓ Despacho Electrónico Preparado',
          detail: 'Notificación lista para Contraloría Médica MRB/NSWB con acuse de recibo automático.'
        }
      ],
      citations: [
        {
          index: 1,
          docCode: 'APEL-LM-SUSESO-2026-V3',
          docShortTitle: 'Protocolo Apelación Licencias MRB/NSWB + Workspace 2026',
          pageNumber: 1,
          article: 'Directriz 3° — Causal B: Reposo Médico Injustificado o Prolongado y Peritaje en Clinic Dubal',
          excerpt: 'El afiliado debe acompañar Informe Médico Complementario emitido en Clinic Dubal detallando código CIE-10, evolución funcional y exámenes imagenológicos.',
          pdfUrl: '/assets/docs/protocolo-apelacion-licencias-compin-suseso-2026.pdf',
          pdfDeepLink: '/assets/docs/protocolo-apelacion-licencias-compin-suseso-2026.pdf#page=1'
        },
        {
          index: 2,
          docCode: 'REG-NSWB-MRB-2026-V4',
          docShortTitle: 'Reglamento NSWB / MRB Licencias Médicas 2026',
          pageNumber: 3,
          article: 'Artículo 15° — Procedimiento de Apelación ante Rechazo o Reducción de Reposo (Ley N° 20.585)',
          excerpt: 'En caso de rechazo o reducción de días por MRB, el trabajador dispone de 15 días hábiles para interponer Recurso de Reposición acompañando informe complementario.',
          pdfUrl: '/assets/docs/reglamento-nswb-mrb-licencias-medicas-2026.pdf',
          pdfDeepLink: '/assets/docs/reglamento-nswb-mrb-licencias-medicas-2026.pdf#page=3'
        },
        {
          index: 3,
          docCode: 'APEL-LM-SUSESO-2026-V3',
          docShortTitle: 'Protocolo Apelación Licencias MRB/NSWB + Workspace 2026',
          pageNumber: 2,
          article: 'Directriz 8° — Jurisprudencia Obligatoria NSWB sobre Pago Retroactivo en 5 Días Hábiles',
          excerpt: 'Acogido el dictamen de apelación por NSWB, Healthy Portal reliquida el 100% del subsidio en un plazo máximo de 5 días hábiles.',
          pdfUrl: '/assets/docs/protocolo-apelacion-licencias-compin-suseso-2026.pdf',
          pdfDeepLink: '/assets/docs/protocolo-apelacion-licencias-compin-suseso-2026.pdf#page=2'
        },
        {
          index: 4,
          docCode: 'APEL-LM-SUSESO-2026-V3',
          docShortTitle: 'Protocolo Apelación Licencias MRB/NSWB + Workspace 2026',
          pageNumber: 3,
          article: 'Directriz 11° — Generación Automática del Escrito de Apelación en Google Docs y Expediente Drive',
          excerpt: 'Automatización documental mediante conectores seguros de Google Docs, Google Drive y Gmail.',
          pdfUrl: '/assets/docs/protocolo-apelacion-licencias-compin-suseso-2026.pdf',
          pdfDeepLink: '/assets/docs/protocolo-apelacion-licencias-compin-suseso-2026.pdf#page=3'
        }
      ]
    },
    'causal-vinculo-cotizaciones': {
      id: 'causal-vinculo-cotizaciones',
      folio: 'LM-2026-64022',
      causalTitle: 'Causal C: Observación de Cotizaciones / Base de Cálculo de 3 Meses (Art. 7° y 11° NSWB)',
      days: 12,
      subsidyAmountUSD: 580,
      medicalCenter: 'SAI Health — Centro de Especialidades Médicas',
      admissibilityScore: '98.1% Probabilidad de Acogida (Certificado Previsional + 3 Liquidaciones Verificadas)',
      legalAnalysis:
        'La licencia LM-2026-64022 fue retenida preventivamente por no visualizarse la última planilla de cotizaciones en la base externa. Conforme a la Directriz 6° [Cita 1] y a los Artículos 7° y 11° del Reglamento NSWB [Cita 2, Cita 3], se han compilado las 3 liquidaciones de sueldo anteriores al inicio del reposo y el certificado de afiliación previsional > 6 meses, acreditando íntegramente el requisito de 90 días de cotizaciones y fijando el subsidio diario en $48.33 USD ($580 USD totales).',
      appealLetterDraft:
        'A LA COMISIÓN DE EVALUACIÓN DE BENEFICIOS MÉDICOS (MRB) Y UNIDAD DE SUBSIDIOS HEALTHY PORTAL:\n\nSolicito el levantamiento inmediato de la observación previsional sobre la Licencia Médica Folio LM-2026-64022 (12 días de reposo) y la reliquidación del subsidio conforme a la Directriz 6° y a los Artículos 7° y 11° del Reglamento NSWB [Cita 1, Cita 2, Cita 3].\n\nANTECEDENTES VERIFICADOS:\n1. Se adjuntan los certificados de cotizaciones previsionales que acreditan más de 6 meses de afiliación y más de 90 días de cotizaciones continuas [Cita 3].\n2. Se adjuntan las 3 liquidaciones de remuneraciones netas de los meses calendario previos al reposo para el cálculo exacto del subsidio diario [Cita 2].\n\nPETICIÓN CONCRETA:\nLiberar el pago por transferencia electrónica de $580 USD dentro de los próximos 5 días hábiles.',
      workspaceConnectors: [
        {
          app: 'Google Docs Connector',
          status: '✓ Solicitud de Reliquidación Creada',
          detail: 'Reliquidacion_Previsional_LM-2026-64022.docx generada con tabla de cálculo de 3 meses.'
        },
        {
          app: 'Google Drive Connector',
          status: '✓ 4 Documentos Previsionales Listos',
          detail: '3 Liquidaciones de sueldo + Certificado de Cotizaciones Previsionales verificados en Drive.'
        },
        {
          app: 'Gmail & Calendar Connector',
          status: '✓ Envío a Unidad de Subsidios Listo',
          detail: 'Correo estructurado con adjuntos PDF listo para despacho a subsidios@healthyportal.us.'
        }
      ],
      citations: [
        {
          index: 1,
          docCode: 'APEL-LM-SUSESO-2026-V3',
          docShortTitle: 'Protocolo Apelación Licencias MRB/NSWB + Workspace 2026',
          pageNumber: 2,
          article: 'Directriz 6° — Causal C: Observación de Vínculo Laboral o Lagunas de Cotización Previsional',
          excerpt: 'El Centro de Apelación Inteligente verifica contrato vigente, certificado de cotizaciones y comprobantes de remuneraciones de los últimos 3 meses.',
          pdfUrl: '/assets/docs/protocolo-apelacion-licencias-compin-suseso-2026.pdf',
          pdfDeepLink: '/assets/docs/protocolo-apelacion-licencias-compin-suseso-2026.pdf#page=2'
        },
        {
          index: 2,
          docCode: 'REG-NSWB-MRB-2026-V4',
          docShortTitle: 'Reglamento NSWB / MRB Licencias Médicas 2026',
          pageNumber: 2,
          article: 'Artículo 7° — Fórmula de Cálculo del Subsidio Diario (Base de 3 Meses)',
          excerpt: 'El monto diario del subsidio equivale al promedio de la remuneración mensual neta devengada en los tres (3) meses calendario más próximos.',
          pdfUrl: '/assets/docs/reglamento-nswb-mrb-licencias-medicas-2026.pdf',
          pdfDeepLink: '/assets/docs/reglamento-nswb-mrb-licencias-medicas-2026.pdf#page=2'
        },
        {
          index: 3,
          docCode: 'REG-NSWB-MRB-2026-V4',
          docShortTitle: 'Reglamento NSWB / MRB Licencias Médicas 2026',
          pageNumber: 2,
          article: 'Artículo 11° — Requisitos de Afiliación Previsional Mínima (6 Meses y 90 Días de Cotizaciones)',
          excerpt: 'Para tener derecho al pago del subsidio, el trabajador dependiente debe contar con al menos 6 meses de afiliación y 90 días de cotizaciones.',
          pdfUrl: '/assets/docs/reglamento-nswb-mrb-licencias-medicas-2026.pdf',
          pdfDeepLink: '/assets/docs/reglamento-nswb-mrb-licencias-medicas-2026.pdf#page=2'
        },
        {
          index: 4,
          docCode: 'APEL-LM-SUSESO-2026-V3',
          docShortTitle: 'Protocolo Apelación Licencias MRB/NSWB + Workspace 2026',
          pageNumber: 3,
          article: 'Directriz 11° — Generación Automática del Escrito de Apelación en Google Docs y Expediente Drive',
          excerpt: 'Conectores Google Workspace compilan el escrito en Docs y las liquidaciones en Drive.',
          pdfUrl: '/assets/docs/protocolo-apelacion-licencias-compin-suseso-2026.pdf',
          pdfDeepLink: '/assets/docs/protocolo-apelacion-licencias-compin-suseso-2026.pdf#page=3'
        }
      ]
    }
  };

  /* ==========================================================================
     CASO 4: ASESOR DE PORTABILIDAD FINANCIERA LEY 21.236 Y COMPARADOR DE PÓLIZAS
     ========================================================================== */
  const case4Comparisons = {
    'portabilidad-credito-consumo': {
      id: 'portabilidad-credito-consumo',
      title: 'Portabilidad Financiera Ley N° 21.236: Deuda Bancaria Externa vs. Crédito Social REDEC',
      externalProvider: 'Banca Comercial Tradicional / Tarjeta Rotativa Externa',
      healthyProduct: 'Crédito Social de Consolidación y Portabilidad REDEC (Ley N° 21.236)',
      defaultAmountUSD: 6000,
      defaultMonths: 36,
      externalCAE: '28.9% CAE Anual',
      healthyCAE: '14.8% CAE Anual (13.2% Pensionados)',
      monthlySavingsUSD: 46,
      totalSavingsUSD: 1656,
      executiveVerdict:
        'Mediante la Solicitud de Portabilidad Financiera Ley N° 21.236 [Cita 1, Cita 2], al trasladar un crédito externo de $6,000 USD a 36 meses desde la banca comercial (28.9% CAE) hacia Crédito Social Healthy Portal (14.8% CAE), el afiliado reduce su cuota mensual en $46 USD y ahorra $1,656 USD en el costo total del préstamo. La operación incluye subrogación automática sin gastos notariales duplicados, seguro de desgravamen del 100% incluido y certificación de holgura previsional bajo el tope legal del 25% [Cita 2, Cita 3].',
      clauseMatrix: [
        {
          clause: 'Carga Anual Equivalente (CAE / APR)',
          externalValue: '28.90% CAE promedio mercado bancario',
          healthyValue: '14.80% CAE Trabajadores / 13.20% CAE Pensionados',
          advantage: 'Reducción de 14.1 puntos porcentuales en costo financiero [Cita 1]'
        },
        {
          clause: 'Gastos de Subrogación yPrepago (Ley 21.236)',
          externalValue: 'Cobro de timbres y gestoría externa ($140 USD)',
          healthyValue: '$0 gastos notariales por subrogación legal directa',
          advantage: 'Healthy Portal paga directamente al banco de origen y alza bloqueos [Cita 2]'
        },
        {
          clause: 'Protección de Liquidez Familiar (Tope Legal)',
          externalValue: 'Sin límite de carga sobre sueldo líquido (riesgo de sobreendeudamiento)',
          healthyValue: 'Tope estricto 25% Trabajadores / 15% Pensionados (Certificado REDEC)',
          advantage: 'Garantiza estabilidad presupuestaria y morosidad mínima [Cita 3]'
        },
        {
          clause: 'Seguros y Postergación de Cuotas',
          externalValue: 'Seguro de desgravamen cobrado aparte',
          healthyValue: 'Desgravamen 100% incluido + 2 meses de gracia al año sin interés moratorio',
          advantage: 'Cobertura integral ante fallecimiento o cesantía involuntaria [Cita 2]'
        }
      ],
      citations: [
        {
          index: 1,
          docCode: 'PORT-21236-POL-2026-V4',
          docShortTitle: 'Anexo Portabilidad Ley 21.236 y Comparador Pólizas 2026',
          pageNumber: 1,
          article: 'Regla Técnica 1° — Metodología de Comparación de CAE, Cuota Mensual y Costo Total del Crédito',
          excerpt: 'Compara deudas bancarias vigentes (CAE entre 23.5% y 34.8%) contra la tasa preferencial de Crédito Social Healthy Portal (14.8% CAE trabajadores y 13.2% pensionados).',
          pdfUrl: '/assets/docs/anexo-tecnico-portabilidad-financiera-comparador-polizas-2026.pdf',
          pdfDeepLink: '/assets/docs/anexo-tecnico-portabilidad-financiera-comparador-polizas-2026.pdf#page=1'
        },
        {
          index: 2,
          docCode: 'REDEC-CRED-2026-V8',
          docShortTitle: 'Contrato REDEC, Portabilidad y Pagos en Exceso 2026',
          pageNumber: 2,
          article: 'Cláusula 7° — Portabilidad Financiera (Ley N° 21.236) y Consolidación de Deuda Externa',
          excerpt: 'El afiliado puede ejercer su derecho de Portabilidad Financiera para refinanciar créditos bancarios con reducción de hasta 38% en la CAE total.',
          pdfUrl: '/assets/docs/contrato-redec-portabilidad-credito-social-2026.pdf',
          pdfDeepLink: '/assets/docs/contrato-redec-portabilidad-credito-social-2026.pdf#page=2'
        },
        {
          index: 3,
          docCode: 'PORT-21236-POL-2026-V4',
          docShortTitle: 'Anexo Portabilidad Ley 21.236 y Comparador Pólizas 2026',
          pageNumber: 1,
          article: 'Regla Técnica 3° — Verificación Automática del Tope de Descuento por Planilla (25% / 15%)',
          excerpt: 'Incluye Certificado de Holgura Previsional REDEC, garantizando que la nueva cuota no supere el 25% del sueldo líquido ni el 15% de la pensión.',
          pdfUrl: '/assets/docs/anexo-tecnico-portabilidad-financiera-comparador-polizas-2026.pdf',
          pdfDeepLink: '/assets/docs/anexo-tecnico-portabilidad-financiera-comparador-polizas-2026.pdf#page=1'
        }
      ]
    },
    'comparador-seguro-catastrofico': {
      id: 'comparador-seguro-catastrofico',
      title: 'Comparativa Actuarial: Póliza Salud Comercial Externa vs. Seguro Catastrófico y Oncológico Healthy Portal',
      externalProvider: 'Aseguradora Comercial Individual Externa',
      healthyProduct: 'Seguro de Salud Catastrófico y Oncológico Healthy Portal (5,000 UF)',
      defaultAmountUSD: 22,
      defaultMonths: 12,
      externalCAE: 'Prima $58 USD/mes (Deducible 20 UF)',
      healthyCAE: 'Prima $22 USD/mes (Deducible $0 en Clinic Dubal)',
      monthlySavingsUSD: 36,
      totalSavingsUSD: 432,
      executiveVerdict:
        'El análisis cláusula por cláusula demuestra que el Seguro Catastrófico y Oncológico de Healthy Portal ($22 USD/mes) ahorra $432 USD anuales en prima frente a una póliza comercial individual ($58 USD/mes) y elimina por completo el deducible de 20 UF cuando el afiliado se hospitaliza en Clinic Dubal o Red HealthyNet (Deducible $0 USD) [Cita 1, Cita 2]. Además, suma bonificación inmediata del 70% vía huella I-Med y hasta 45% de descuento en Pharmacy Red Wall sin excluir patologías crónicas ambulatorias [Cita 3].',
      clauseMatrix: [
        {
          clause: 'Tope Anual de Cobertura Catastrófica y Oncológica',
          externalValue: '3,000 UF anuales con sublímites quirúrgicos',
          healthyValue: '5,000 UF anuales por beneficiario (80% a 100% reembolso post Fonasa/Isapre)',
          advantage: '+2,000 UF adicionales de respaldo en cirugías, UCI y quimioterapia [Cita 2]'
        },
        {
          clause: 'Deducible Hospitalario y Quirúrgico',
          externalValue: 'Deducible obligatorio de 15 a 30 UF por evento',
          healthyValue: 'Deducible $0 USD en Clinic Dubal y Red HealthyNet',
          advantage: 'Cero desembolso inicial en hospitalizaciones dentro de la red [Cita 1, Cita 2]'
        },
        {
          clause: 'Período de Carencia y Urgencias por Accidente',
          externalValue: '90 días de carencia general',
          healthyValue: '30 días para patologías programadas / 0 días por accidente',
          advantage: 'Cobertura 3 veces más rápida y protección inmediata en accidentes [Cita 1]'
        },
        {
          clause: 'Beneficios Ambulatorios y Farmacia Crónica',
          externalValue: 'Excluye medicamentos ambulatorios y preexistencias crónicas',
          healthyValue: 'Copago $0 Preventivo + 70% bono I-Med + 40%-45% en Pharmacy Red Wall (incluye crónicos)',
          advantage: 'Cubre hipertensión, diabetes y dislipidemia en convenio farmacia [Cita 3]'
        }
      ],
      citations: [
        {
          index: 1,
          docCode: 'PORT-21236-POL-2026-V4',
          docShortTitle: 'Anexo Portabilidad Ley 21.236 y Comparador Pólizas 2026',
          pageNumber: 2,
          article: 'Regla Técnica 5° — Comparativa de Seguro Catastrófico y Oncológico vs. Aseguradoras Comerciales',
          excerpt: 'Deducible $0 USD en hospitalizaciones dentro de Clinic Dubal y Red HealthyNet, cobertura máxima de 5,000 UF anuales y carencia reducida a 30 días.',
          pdfUrl: '/assets/docs/anexo-tecnico-portabilidad-financiera-comparador-polizas-2026.pdf',
          pdfDeepLink: '/assets/docs/anexo-tecnico-portabilidad-financiera-comparador-polizas-2026.pdf#page=2'
        },
        {
          index: 2,
          docCode: 'POL-SEG-SALUD-2026-V6',
          docShortTitle: 'Condiciones de Pólizas, Salud $0 y Pharmacy Red Wall 2026',
          pageNumber: 2,
          article: 'Condición General 7° — Seguro de Salud Catastrófico y Oncológico (Tope 5,000 UF y Deducible $0)',
          excerpt: 'Cobertura de hasta 5,000 UF anuales por beneficiario, reembolsando del 80% al 100% del copago hospitalario.',
          pdfUrl: '/assets/docs/condiciones-polizas-seguros-red-salud-2026.pdf',
          pdfDeepLink: '/assets/docs/condiciones-polizas-seguros-red-salud-2026.pdf#page=2'
        },
        {
          index: 3,
          docCode: 'PORT-21236-POL-2026-V4',
          docShortTitle: 'Anexo Portabilidad Ley 21.236 y Comparador Pólizas 2026',
          pageNumber: 3,
          article: 'Regla Técnica 10° — Auditoría Transparente de Exclusiones y Preexistencias Declaradas',
          excerpt: 'Las enfermedades crónicas ambulatorias (hipertensión, diabetes tipo 2, dislipidemia) SÍ están cubiertas al 100% en el convenio de descuento de Pharmacy Red Wall.',
          pdfUrl: '/assets/docs/anexo-tecnico-portabilidad-financiera-comparador-polizas-2026.pdf',
          pdfDeepLink: '/assets/docs/anexo-tecnico-portabilidad-financiera-comparador-polizas-2026.pdf#page=3'
        }
      ]
    },
    'comparador-seguro-auto-hogar': {
      id: 'comparador-seguro-auto-hogar',
      title: 'Comparativa Póliza Automotriz Full Protection + Hogar Protegido vs. Banca Aseguradora',
      externalProvider: 'Seguro Automotriz Bancario Estándar (Deducible 8 UF)',
      healthyProduct: 'Seguro Automotriz Full Protection + Asistencia Healthy 24/7 ($34 USD/mes)',
      defaultAmountUSD: 34,
      defaultMonths: 12,
      externalCAE: 'Prima $62 USD/mes (Deducible 8 UF)',
      healthyCAE: 'Prima $34 USD/mes (Deducible Inteligente $0)',
      monthlySavingsUSD: 28,
      totalSavingsUSD: 336,
      executiveVerdict:
        'El Seguro Automotriz Full Protection de Healthy Portal ($34 USD/mes) reduce en $336 USD anuales el costo de prima respecto al seguro bancario promedio ($62 USD/mes), incorporando Deducible Inteligente $0 en talleres oficiales de la red, auto de reemplazo hasta por 30 días sin límite de kilometraje y Responsabilidad Civil de 1,500 UF [Cita 1, Cita 2]. La denuncia de siniestros es 100% digital con grúa geolocalizada en menos de 45 minutos [Cita 3].',
      clauseMatrix: [
        {
          clause: 'Deducible en Talleres de Red Oficial',
          externalValue: 'Deducible fijo de 5 a 10 UF por siniestro',
          healthyValue: 'Deducible Inteligente $0 USD en talleres oficiales Healthy Portal',
          advantage: 'Reparación sin desembolso cuando existe tercero identificado o taller de red [Cita 1]'
        },
        {
          clause: 'Vehículo de Reemplazo y Kilometraje',
          externalValue: 'Máximo 10 a 15 días con tope de 100 km diarios',
          healthyValue: 'Hasta 30 días corridos sin límite de kilometraje',
          advantage: 'El doble de días de movilidad garantizada para el afiliado [Cita 1, Cita 2]'
        },
        {
          clause: 'Responsabilidad Civil frente a Terceros',
          externalValue: '500 a 1,000 UF estándar',
          healthyValue: '1,500 UF de cobertura integral (daño emergente, moral y lucro cesante)',
          advantage: '+50% más protección patrimonial ante accidentes graves [Cita 2]'
        },
        {
          clause: 'SLA de Asistencia en Ruta y Liquidación',
          externalValue: 'Call center tradicional y liquidación en 20 días',
          healthyValue: 'Grúa geolocalizada < 45 min + liquidación rápida en 5 días hábiles',
          advantage: 'Atención inmediata 24/7 desde App Mi Portal [Cita 3]'
        }
      ],
      citations: [
        {
          index: 1,
          docCode: 'PORT-21236-POL-2026-V4',
          docShortTitle: 'Anexo Portabilidad Ley 21.236 y Comparador Pólizas 2026',
          pageNumber: 2,
          article: 'Regla Técnica 7° — Comparativa de Seguro Automotriz Full Protection y Hogar Protegido',
          excerpt: 'Incluye Deducible Inteligente $0 en talleres oficiales, auto de reemplazo hasta por 30 días sin límite de kilometraje y responsabilidad civil de 1,500 UF.',
          pdfUrl: '/assets/docs/anexo-tecnico-portabilidad-financiera-comparador-polizas-2026.pdf',
          pdfDeepLink: '/assets/docs/anexo-tecnico-portabilidad-financiera-comparador-polizas-2026.pdf#page=2'
        },
        {
          index: 2,
          docCode: 'POL-SEG-SALUD-2026-V6',
          docShortTitle: 'Condiciones de Pólizas, Salud $0 y Pharmacy Red Wall 2026',
          pageNumber: 3,
          article: 'Condición General 12° — Seguro Automotriz Full Protection, Vida Familiar y Hogar Protegido',
          excerpt: 'Pérdida total o parcial por colisión, robo, responsabilidad civil hasta 1,500 UF y auto de reemplazo por 30 días.',
          pdfUrl: '/assets/docs/condiciones-polizas-seguros-red-salud-2026.pdf',
          pdfDeepLink: '/assets/docs/condiciones-polizas-seguros-red-salud-2026.pdf#page=3'
        },
        {
          index: 3,
          docCode: 'POL-SEG-SALUD-2026-V6',
          docShortTitle: 'Condiciones de Pólizas, Salud $0 y Pharmacy Red Wall 2026',
          pageNumber: 3,
          article: 'Condición General 14° — Denuncia de Siniestros 100% Digital y Asistencia 24/7',
          excerpt: 'Asistencia 24/7 despacha grúa en ruta o plomería/cerrajería de emergencia en menos de 45 minutos, con liquidación en 5 días hábiles.',
          pdfUrl: '/assets/docs/condiciones-polizas-seguros-red-salud-2026.pdf',
          pdfDeepLink: '/assets/docs/condiciones-polizas-seguros-red-salud-2026.pdf#page=3'
        }
      ]
    }
  };

  /* ==========================================================================
     CASO 5: HUB DE INTELIGENCIA B2B PARA EMPRESAS E INVERSIONISTAS (DEEP RESEARCH)
     ========================================================================== */
  const case5Reports = {
    'b2b-rrhh-ausentismo': {
      id: 'b2b-rrhh-ausentismo',
      audience: 'Director de RR.HH. / Empresa Afiliada (Nómina 450 Trabajadores)',
      reportTitle: 'Deep Research B2B: Plan Anual de Reducción de Ausentismo Laboral y Optimización de Beneficios',
      kpis: [
        { label: 'Reducción Proyectada Ausentismo', value: '-24.6% anual', sub: 'Con operativos preventivos Clinic Dubal' },
        { label: 'Retorno Productivo (ROI Social)', value: '3.4x', sub: 'Por cada $1 USD invertido en salud preventiva' },
        { label: 'Beneficios Costo $0 Empleador', value: '100% Activos', sub: 'Copago $0, Becas SER y Asignación Familiar' },
        { label: 'Ahorro Financiero en Nómina', value: '$148,500 USD/año', sub: 'Menor rotación y licencias curativas evitadas' }
      ],
      deepResearchSummary:
        'El motor Deep Research de Gemini Enterprise analizó el benchmark sectorial de empresas afiliadas de 400 a 500 colaboradores [Cita 1]. La implementación del Plan Anual de Salud Preventiva en Terreno junto a las clínicas móviles de Clinic Dubal (pesquisa cardiovascular, visual y manejo del estrés laboral) reduce en un 24.6% promedio los días de ausentismo por licencias médicas curativas en 12 meses, logrando un ROI de 3.4x [Cita 1]. Paralelamente, la activación automatizada de Asignación Familiar Tramos A, B y C y Becas SER incrementa la retención de talento sin costo adicional en la planilla del empleador [Cita 2, Cita 3].',
      strategicRoadmap: [
        'Trimestre 1 — Operativo Preventivo Móvil en Planta/Oficina: Despliegue sin costo de unidades móviles Clinic Dubal y SAI Health para chequeo preventivo ($0 copago) al 100% de la dotación [Cita 1].',
        'Trimestre 2 — Campaña de Salud Financiera y Consolidación REDEC: Charlas y asesoría individual Ley 21.236 para reducir el estrés financiero de trabajadores con deudas bancarias caras, respetando el tope del 25% [Cita 2].',
        'Trimestre 3 — Activación Masiva de Becas SER y Bono Escolaridad: Cruce automático de cargas acreditadas en Tramos A, B y C para adjudicar bonos académicos de hasta $1,200 USD [Cita 3].'
      ],
      citations: [
        {
          index: 1,
          docCode: 'B2B-ESG-BASILEA-2026-V1',
          docShortTitle: 'Reporte B2B Empresas, Solvencia Basilea III y ESG 2026',
          pageNumber: 1,
          article: 'Indicador B2B 1° — Benchmarking de Ausentismo Laboral y Retorno de Salud Preventiva (ROI 3.4x)',
          excerpt: 'Las empresas afiliadas que implementan el Plan Anual de Salud Preventiva junto a Clinic Dubal registran una reducción del 24.6% en días de ausentismo y un ROI de 3.4x.',
          pdfUrl: '/assets/docs/informe-sostenibilidad-finanzas-sociales-esg-b2b-2026.pdf',
          pdfDeepLink: '/assets/docs/informe-sostenibilidad-finanzas-sociales-esg-b2b-2026.pdf#page=1'
        },
        {
          index: 2,
          docCode: 'B2B-ESG-BASILEA-2026-V1',
          docShortTitle: 'Reporte B2B Empresas, Solvencia Basilea III y ESG 2026',
          pageNumber: 1,
          article: 'Indicador B2B 3° — Optimización de Uso de Beneficios por Tramo Salarial y Retención de Talento',
          excerpt: 'Maximiza la adopción de beneficios libres de costo para el empleador: Asignación Familiar electrónica, copago $0 preventivo, Becas SER y educación financiera.',
          pdfUrl: '/assets/docs/informe-sostenibilidad-finanzas-sociales-esg-b2b-2026.pdf',
          pdfDeepLink: '/assets/docs/informe-sostenibilidad-finanzas-sociales-esg-b2b-2026.pdf#page=1'
        },
        {
          index: 3,
          docCode: 'GUI-BEN-TUR-2026-V5',
          docShortTitle: 'Guía de Beneficios, Becas SER y Turismo 2026',
          pageNumber: 3,
          article: 'Norma 12° — Tramos Legales de Asignación Familiar (Family Allowance Tiers A, B, C y D)',
          excerpt: 'Subsidio mensual por carga acreditada según ingreso: Tramo A ($22 USD), Tramo B ($14 USD), Tramo C ($5 USD) y 100% de acceso a beneficios en todos los tramos.',
          pdfUrl: '/assets/docs/guia-beneficios-turismo-apoyo-social-2026.pdf',
          pdfDeepLink: '/assets/docs/guia-beneficios-turismo-apoyo-social-2026.pdf#page=3'
        }
      ]
    },
    'inversor-basilea-solvencia': {
      id: 'inversor-basilea-solvencia',
      audience: 'Inversionista Institucional / Comité de Riesgo y Clasificadoras',
      reportTitle: 'Deep Research Financiero: Solvencia Basilea III, Riesgo AA+ y Calidad de Cartera REDEC',
      kpis: [
        { label: 'Clasificación de Riesgo', value: 'AA+ Estable', sub: 'Respaldo patrimonial grado de inversión superior' },
        { label: 'Ratio Capital Basilea III (IAC)', value: '18.4%', sub: '+790 pb sobre mínimo regulatorio (10.5%)' },
        { label: 'Morosidad Cartera > 90 Días', value: '1.82%', sub: 'Sobre cartera de $1,420M USD (485k créditos)' },
        { label: 'Liquidez LCR & Provisiones', value: '164% / 2.35x', sub: 'Cobertura holgada de obligaciones a 30 días' }
      ],
      deepResearchSummary:
        'La síntesis multi-documento de los Estados Financieros y del Reporte Integrado 2026 confirma que Healthy Portal exhibe una posición de solvencia líder en el sector de seguridad social y finanzas inclusivas, manteniendo clasificación AA+ con Perspectiva Estable [Cita 1]. El Índice de Adecuación de Capital (Basilea III) alcanza 18.4% y el Ratio de Cobertura de Liquidez (LCR) llega a 164% [Cita 1]. La cartera de Crédito Social ($1,420 millones USD en 485,000 operaciones) registra una morosidad mayor a 90 días de tan solo 1.82%, blindada estructuralmente por el mecanismo de recaudación preferente por planilla REDEC y los límites estatutarios de descuento del 25% y 15% [Cita 2, Cita 3].',
      strategicRoadmap: [
        'Fortaleza Estructural de Recaudación: El 96.4% de los flujos de pago de Crédito Social proviene de retención directa en nómina de empleadores afiliados y entidades previsionales bajo código REDEC [Cita 2, Cita 3].',
        'Cobertura Conservadora de Riesgo: Nivel de provisiones constituido equivalente a 2.35 veces la cartera con mora superior a 90 días, protegiendo el balance ante ciclos macroeconómicos [Cita 1].',
        'Diversificación Atomizada: Ticket promedio de $2,920 USD sin concentración sectorial ni exposición especulativa [Cita 2].'
      ],
      citations: [
        {
          index: 1,
          docCode: 'B2B-ESG-BASILEA-2026-V1',
          docShortTitle: 'Reporte B2B Empresas, Solvencia Basilea III y ESG 2026',
          pageNumber: 2,
          article: 'Indicador Financiero 5° — Clasificación de Riesgo AA+ (Perspectiva Estable) y Ratio Basilea III',
          excerpt: 'Clasificación AA+ con Perspectiva Estable. El Índice de Adecuación de Capital (Basilea III) alcanza el 18.4%, con LCR de 164% y cobertura de provisiones de 2.35x.',
          pdfUrl: '/assets/docs/informe-sostenibilidad-finanzas-sociales-esg-b2b-2026.pdf',
          pdfDeepLink: '/assets/docs/informe-sostenibilidad-finanzas-sociales-esg-b2b-2026.pdf#page=2'
        },
        {
          index: 2,
          docCode: 'B2B-ESG-BASILEA-2026-V1',
          docShortTitle: 'Reporte B2B Empresas, Solvencia Basilea III y ESG 2026',
          pageNumber: 2,
          article: 'Indicador Financiero 7° — Calidad de Cartera de Crédito Social y Tasa de Morosidad (1.82%)',
          excerpt: 'La cartera colocada asciende a $1,420 millones USD en 485,000 operaciones con morosidad mayor a 90 días de apenas 1.82%.',
          pdfUrl: '/assets/docs/informe-sostenibilidad-finanzas-sociales-esg-b2b-2026.pdf',
          pdfDeepLink: '/assets/docs/informe-sostenibilidad-finanzas-sociales-esg-b2b-2026.pdf#page=2'
        },
        {
          index: 3,
          docCode: 'REDEC-CRED-2026-V8',
          docShortTitle: 'Contrato REDEC, Portabilidad y Pagos en Exceso 2026',
          pageNumber: 1,
          article: 'Cláusula 2° — Tope Máximo de Descuento por Planilla (25% Trabajadores y 15% Pensionados)',
          excerpt: 'El límite máximo de descuento mensual por planilla no podrá exceder en ningún caso el 25% de la remuneración líquida ni el 15% de la pensión.',
          pdfUrl: '/assets/docs/contrato-redec-portabilidad-credito-social-2026.pdf',
          pdfDeepLink: '/assets/docs/contrato-redec-portabilidad-credito-social-2026.pdf#page=1'
        }
      ]
    },
    'inversor-bonos-esg-icma': {
      id: 'inversor-bonos-esg-icma',
      audience: 'Fondos de Inversión Sostenible ESG / Tenedores de Bonos Sociales',
      reportTitle: 'Deep Research ESG: Trazabilidad de Bonos Sociales (ICMA) e Impacto Auditado 2026',
      kpis: [
        { label: 'Asignación Tramos A/B y Mujeres', value: '52% Cartera ESG', sub: 'Inclusión financiera directa verificada' },
        { label: 'Financiamiento Adulto Mayor', value: '31% Cartera ESG', sub: 'Créditos a tasa social 13.2% CAE y Cuidadores' },
        { label: 'Infraestructura Salud Regional', value: '17% Cartera ESG', sub: 'Expansión Clinic Dubal y Telemedicina $0' },
        { label: 'Estándar Internacional', value: 'ICMA Social Bond', sub: 'Second Party Opinion (SPO) positiva' }
      ],
      deepResearchSummary:
        'El informe de asignación e impacto de la serie de Bonos Sociales y Sostenibles de Healthy Portal —estructurado bajo los Social Bond Principles de ICMA [Cita 1]— certifica que el 100% de los recursos captados en el mercado de capitales se destina a financiamiento con impacto social directo y trazable: 52% en Créditos Sociales para trabajadores de menores ingresos (Tramos A y B) y microempresas lideradas por mujeres; 31% en apoyo crediticio preferencial para Adultos Mayores y Pensionados; y 17% en infraestructura clínica regional y telemedicina de Copago $0 junto a Clinic Dubal y SAI Health [Cita 1, Cita 2].',
      strategicRoadmap: [
        'Trazabilidad Por Operación (UUID Bond Tagging): Cada crédito social originado con fondos ESG queda vinculado en el libro mayor REDEC para auditoría trimestral de inversionistas [Cita 1].',
        'Impacto en Salud Preventiva: Más de 320,000 prestaciones anuales de Copago $0 y subsidios de farmacia en Pharmacy Red Wall respaldados por la red social de Healthy Portal [Cita 2].',
        'Gobierno Corporativo y Transparencia: Reportes trimestrales bajo normas NCG y divulgación completa de métricas SASB / GRI en el portal de Inversionistas [Cita 1].'
      ],
      citations: [
        {
          index: 1,
          docCode: 'B2B-ESG-BASILEA-2026-V1',
          docShortTitle: 'Reporte B2B Empresas, Solvencia Basilea III y ESG 2026',
          pageNumber: 3,
          article: 'Indicador ESG 10° — Trazabilidad y Asignación de Emisiones de Bonos Sociales ESG',
          excerpt: '100% de los fondos recaudados bajo los Social Bond Principles de ICMA se destina a: 52% trabajadores Tramos A y B y mujeres, 31% Adultos Mayores y 17% salud regional.',
          pdfUrl: '/assets/docs/informe-sostenibilidad-finanzas-sociales-esg-b2b-2026.pdf',
          pdfDeepLink: '/assets/docs/informe-sostenibilidad-finanzas-sociales-esg-b2b-2026.pdf#page=3'
        },
        {
          index: 2,
          docCode: 'POL-SEG-SALUD-2026-V6',
          docShortTitle: 'Condiciones de Pólizas, Salud $0 y Pharmacy Red Wall 2026',
          pageNumber: 1,
          article: 'Condición General 1° — Copago $0 en Consultas Preventivas, Telemedicina y Exámenes en HealthyNet',
          excerpt: 'Acceso a Copago $0 en consultas médicas preventivas y telemedicina 24/7 en Clinic Dubal y SAI Health.',
          pdfUrl: '/assets/docs/condiciones-polizas-seguros-red-salud-2026.pdf',
          pdfDeepLink: '/assets/docs/condiciones-polizas-seguros-red-salud-2026.pdf#page=1'
        }
      ]
    }
  };

  return {
    case2Profiles: case2Profiles,
    case3Scenarios: case3Scenarios,
    case4Comparisons: case4Comparisons,
    case5Reports: case5Reports
  };
});
