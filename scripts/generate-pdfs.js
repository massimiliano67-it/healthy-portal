/**
 * Healthy Portal — Generador de Documentos PDF Oficiales en Español (Zero-Dependency PDF-1.4)
 * Genera los 4 PDFs regulatorios, contractuales, de pólizas y de beneficios en /assets/docs/
 * con codificación WinAnsi completa para caracteres en español (á, é, í, ó, ú, ñ, ¿, ¡, °).
 */
'use strict';

const fs = require('fs');
const path = require('path');
const corpus = require('../assets/js/spanish-docs-corpus.js');

const OUT_DIR = path.resolve(__dirname, '..', 'assets', 'docs');
fs.mkdirSync(OUT_DIR, { recursive: true });

/**
 * Convierte un string UTF-8 a una cadena literal de PDF codificada en WinAnsi (CP1252 / Latin-1)
 * usando secuencias octales \ddd para caracteres fuera de ASCII imprimible básico.
 */
function encodePdfWinAnsi(str) {
  const winAnsiSpecial = {
    0x2013: 0x96, // en-dash –
    0x2014: 0x97, // em-dash —
    0x2018: 0x91, // ‘
    0x2019: 0x92, // ’
    0x201c: 0x93, // “
    0x201d: 0x94, // ”
    0x2022: 0x95, // •
    0x2026: 0x85, // …
    0x20ac: 0x80  // €
  };

  let out = '(';
  const s = String(str || '');
  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i);
    if (code === 0x28) {
      out += '\\(';
    } else if (code === 0x29) {
      out += '\\)';
    } else if (code === 0x5c) {
      out += '\\\\';
    } else if (code >= 0x20 && code <= 0x7e) {
      out += s[i];
    } else if (winAnsiSpecial[code] !== undefined) {
      out += '\\' + winAnsiSpecial[code].toString(8).padStart(3, '0');
    } else if (code >= 0xa0 && code <= 0xff) {
      // Latin-1 / ISO-8859-1 (á, é, í, ó, ú, ñ, Á, É, Í, Ó, Ú, Ñ, ¿, ¡, °, etc.)
      out += '\\' + code.toString(8).padStart(3, '0');
    } else {
      out += ' ';
    }
  }
  out += ')';
  return out;
}

/**
 * Envuelve texto en líneas de máximo `maxChars` caracteres respetando palabras.
 */
function wrapText(text, maxChars) {
  const words = String(text || '').split(/\s+/);
  const lines = [];
  let current = '';
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    if (!current) {
      current = w;
    } else if (current.length + 1 + w.length <= maxChars) {
      current += ' ' + w;
    } else {
      lines.push(current);
      current = w;
    }
  }
  if (current) lines.push(current);
  return lines;
}

/**
 * Construye el contenido gráfico y tipográfico de una página PDF (612 x 792 pt - Letter).
 */
function buildPageContentStream(doc, pageObj, totalPages) {
  const ops = [];

  // 1. Fondo superior institucional (#08090e obsidian + acento azul #1a2ffb)
  ops.push('0.031 0.035 0.055 rg');
  ops.push('0 700 612 92 re f');

  ops.push('0.102 0.184 0.984 rg');
  ops.push('0 695 612 5 re f');

  // Etiqueta verde lima (#c1ff00)
  ops.push('0.757 1.000 0.000 rg');
  ops.push('BT /F2 8.5 Tf 42 768 Td ' + encodePdfWinAnsi('HEALTHY PORTAL  |  DOCUMENTO OFICIAL REGULATORIO EN ESPAÑOL  |  CÓDIGO: ' + doc.code) + ' Tj ET');

  // Título del documento en el encabezado (blanco)
  ops.push('1 1 1 rg');
  const titleLines = wrapText(doc.title, 82);
  let headerY = 750;
  for (let i = 0; i < Math.min(titleLines.length, 2); i++) {
    ops.push('BT /F2 11.5 Tf 42 ' + headerY + ' Td ' + encodePdfWinAnsi(titleLines[i]) + ' Tj ET');
    headerY -= 15;
  }

  // Subtítulo autoridad y fecha
  ops.push('0.82 0.85 0.95 rg');
  ops.push(
    'BT /F1 8.5 Tf 42 712 Td ' +
      encodePdfWinAnsi('Autoridad Supervisora: ' + doc.authority + '   |   Vigencia: ' + doc.updatedAt) +
      ' Tj ET'
  );

  // 2. Caja de resumen del documento (solo en página 1)
  let cursorY = 668;
  if (pageObj.pageNumber === 1) {
    ops.push('0.941 0.945 0.980 rg');
    ops.push('42 602 528 58 re f');
    ops.push('0.102 0.184 0.984 rg');
    ops.push('42 602 4 58 re f');

    ops.push('0.06 0.08 0.15 rg');
    ops.push('BT /F2 9.5 Tf 54 644 Td ' + encodePdfWinAnsi('RESUMEN EJECUTIVO PARA AFILIADOS Y AUDITORÍA (GEMINI ENTERPRISE CORPUS)') + ' Tj ET');

    ops.push('0.20 0.23 0.32 rg');
    const sumLines = wrapText(doc.summary, 94);
    let sumY = 630;
    for (let i = 0; i < Math.min(sumLines.length, 3); i++) {
      ops.push('BT /F1 8.8 Tf 54 ' + sumY + ' Td ' + encodePdfWinAnsi(sumLines[i]) + ' Tj ET');
      sumY -= 12;
    }
    cursorY = 578;
  }

  // 3. Encabezado de Sección de la Página
  ops.push('0.102 0.184 0.984 rg');
  ops.push('BT /F2 10.5 Tf 42 ' + cursorY + ' Td ' + encodePdfWinAnsi(pageObj.heading) + ' Tj ET');
  cursorY -= 8;
  ops.push('0.80 0.83 0.90 RG 1 w 42 ' + cursorY + ' m 570 ' + cursorY + ' l S');
  cursorY -= 22;

  // 4. Artículos / Cláusulas / Normas de la página
  for (let aIdx = 0; aIdx < pageObj.articles.length; aIdx++) {
    const art = pageObj.articles[aIdx];
    const bodyLines = wrapText(art.text, 92);
    const boxHeight = 36 + bodyLines.length * 13.5 + 16;

    // Fondo suave de tarjeta por artículo
    ops.push('0.975 0.980 0.996 rg');
    ops.push('42 ' + (cursorY - boxHeight + 14) + ' 528 ' + boxHeight + ' re f');
    ops.push('0.86 0.88 0.94 RG 0.75 w');
    ops.push('42 ' + (cursorY - boxHeight + 14) + ' 528 ' + boxHeight + ' re S');

    // Título del Artículo
    ops.push('0.031 0.035 0.055 rg');
    ops.push('BT /F2 10.2 Tf 54 ' + (cursorY - 4) + ' Td ' + encodePdfWinAnsi(art.article) + ' Tj ET');

    // Cuerpo del Artículo
    let lineY = cursorY - 21;
    ops.push('0.16 0.18 0.25 rg');
    for (let l = 0; l < bodyLines.length; l++) {
      ops.push('BT /F1 9.3 Tf 54 ' + lineY + ' Td ' + encodePdfWinAnsi(bodyLines[l]) + ' Tj ET');
      lineY -= 13.5;
    }

    // Etiquetas clave de indexación
    const kwText = 'Palabras clave indexadas: ' + (art.keywords || []).join(', ');
    ops.push('0.35 0.40 0.55 rg');
    ops.push('BT /F1 7.8 Tf 54 ' + (lineY - 2) + ' Td ' + encodePdfWinAnsi(kwText) + ' Tj ET');

    cursorY -= boxHeight + 14;
  }

  // 5. Rutas digitales vinculadas en el portal
  if (cursorY > 95) {
    ops.push('0.941 0.945 0.980 rg');
    ops.push('42 54 528 38 re f');
    ops.push('0.102 0.184 0.984 rg');
    const routeList = (doc.relatedRoutes || []).map((r) => r.href).join('  |  ');
    const routeLines = wrapText(routeList, 98);
    ops.push('BT /F2 7.8 Tf 52 80 Td ' + encodePdfWinAnsi('RUTAS DIGITALES VINCULADAS EN HEALTHY PORTAL:') + ' Tj ET');
    ops.push('0.18 0.20 0.28 rg');
    for (let r = 0; r < Math.min(routeLines.length, 2); r++) {
      ops.push('BT /F1 7.6 Tf 52 ' + (69 - r * 10) + ' Td ' + encodePdfWinAnsi(routeLines[r]) + ' Tj ET');
    }
  }

  // 6. Pie de página oficial
  ops.push('0.80 0.83 0.90 RG 0.75 w 42 44 m 570 44 l S');
  ops.push('0.35 0.38 0.48 rg');
  ops.push(
    'BT /F1 8 Tf 42 30 Td ' +
      encodePdfWinAnsi(
        'Healthy Portal Digital Ecosystem — Documento Verificable para Gemini Enterprise Search  |  Página ' +
          pageObj.pageNumber +
          ' de ' +
          totalPages
      ) +
      ' Tj ET'
  );

  return ops.join('\n');
}

/**
 * Ensambla un archivo PDF-1.4 válido con tabla xref exacta en bytes Latin-1.
 */
function generatePdfBuffer(doc) {
  const objects = [];
  function addObject(bodyStr) {
    const id = objects.length + 1;
    objects.push({ id, body: bodyStr });
    return id;
  }

  // Obj 1: Catalog (placeholder, se actualiza al final)
  const catalogId = addObject('');
  // Obj 2: Pages (placeholder, se actualiza al final)
  const pagesId = addObject('');
  // Obj 3: Font F1 (Helvetica con WinAnsiEncoding)
  const fontRegularId = addObject(
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>'
  );
  // Obj 4: Font F2 (Helvetica-Bold con WinAnsiEncoding)
  const fontBoldId = addObject(
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>'
  );

  const pageIds = [];
  const totalPages = doc.pages.length;

  for (let i = 0; i < totalPages; i++) {
    const streamContent = buildPageContentStream(doc, doc.pages[i], totalPages);
    const streamByteLen = Buffer.byteLength(streamContent, 'latin1');
    const contentId = addObject(
      `<< /Length ${streamByteLen} >>\nstream\n${streamContent}\nendstream`
    );

    const pageId = addObject(
      `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 ${fontRegularId} 0 R /F2 ${fontBoldId} 0 R >> >> /Contents ${contentId} 0 R >>`
    );
    pageIds.push(pageId);
  }

  // Info dictionary
  const infoId = addObject(
    `<< /Title ${encodePdfWinAnsi(doc.title)} /Author ${encodePdfWinAnsi(doc.authority)} /Subject ${encodePdfWinAnsi(doc.summary)} /Creator (Healthy Portal PDF Generator) /Producer (Healthy Portal Gemini Enterprise Corpus) >>`
  );

  objects[catalogId - 1].body = `<< /Type /Catalog /Pages ${pagesId} 0 R /Lang (es-ES) >>`;
  objects[pagesId - 1].body = `<< /Type /Pages /Kids [${pageIds.map((id) => id + ' 0 R').join(' ')}] /Count ${pageIds.length} >>`;

  const chunks = [];
  let offset = 0;
  function pushStr(s) {
    const buf = Buffer.from(s, 'latin1');
    chunks.push(buf);
    offset += buf.length;
  }

  pushStr('%PDF-1.4\n%\xE2\xE3\xCF\xD3\n');

  const offsets = [0];
  for (let i = 0; i < objects.length; i++) {
    offsets.push(offset);
    const obj = objects[i];
    pushStr(`${obj.id} 0 obj\n${obj.body}\nendobj\n`);
  }

  const xrefStart = offset;
  pushStr(`xref\n0 ${objects.length + 1}\n`);
  pushStr('0000000000 65535 f \n');
  for (let i = 1; i <= objects.length; i++) {
    pushStr(String(offsets[i]).padStart(10, '0') + ' 00000 n \n');
  }

  pushStr(
    `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R /Info ${infoId} 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`
  );

  return Buffer.concat(chunks);
}

for (const doc of corpus.documents) {
  const fileName = path.basename(doc.pdfUrl);
  const fullPath = path.join(OUT_DIR, fileName);
  const pdfBuffer = generatePdfBuffer(doc);
  fs.writeFileSync(fullPath, pdfBuffer);
  console.log(`Generated Spanish PDF: ${fileName} (${pdfBuffer.length} bytes, ${doc.pagesCount} pages)`);
}
