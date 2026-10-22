/**
 * Healthy Portal — Local Static Preview Server
 * Follows SecureCoder security standards:
 * - Binds strictly to 127.0.0.1 (loopback)
 * - Strict path traversal defense via path.resolve() + directory prefix check
 * - Strong Content-Security-Policy and security headers
 */
'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

const HOST = process.env.BIND_HOST || '127.0.0.1';
const PORT = Number(process.env.PORT) || 8080;
const ROOT_DIR = path.resolve(__dirname);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon'
};

function setSecurityHeaders(res, contentType) {
  res.setHeader('Content-Type', contentType);
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'"
  );
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
}

const server = http.createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    setSecurityHeaders(res, 'text/plain; charset=utf-8');
    res.writeHead(405);
    res.end('Method Not Allowed');
    return;
  }

  let pathname = '/';
  try {
    const parsedUrl = new URL(req.url || '/', 'http://localhost');
    pathname = decodeURIComponent(parsedUrl.pathname);
  } catch (_err) {
    setSecurityHeaders(res, 'text/plain; charset=utf-8');
    res.writeHead(400);
    res.end('Bad Request');
    return;
  }

  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  }

  // Normalize and enforce strict containment inside ROOT_DIR
  const safeRelative = pathname.replace(/^\/+/, '');
  let candidatePath = path.resolve(ROOT_DIR, safeRelative);

  if (candidatePath !== ROOT_DIR && !candidatePath.startsWith(ROOT_DIR + path.sep)) {
    setSecurityHeaders(res, 'text/plain; charset=utf-8');
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  // Prevent serving internal scripts or server file
  if (
    candidatePath === path.resolve(ROOT_DIR, 'server.js') ||
    candidatePath.startsWith(path.resolve(ROOT_DIR, 'scripts') + path.sep)
  ) {
    setSecurityHeaders(res, 'text/plain; charset=utf-8');
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  // Support clean URLs and directory index resolution
  if (!path.extname(candidatePath)) {
    if (fs.existsSync(candidatePath + '.html')) {
      candidatePath = candidatePath + '.html';
    } else if (fs.existsSync(path.join(candidatePath, 'index.html'))) {
      candidatePath = path.join(candidatePath, 'index.html');
    }
  }

  fs.stat(candidatePath, (statErr, stats) => {
    if (statErr || !stats.isFile()) {
      setSecurityHeaders(res, 'text/html; charset=utf-8');
      res.writeHead(404);
      res.end('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>404 — Healthy Portal</title><link rel="stylesheet" href="/assets/css/styles.css"></head><body style="padding:4rem;text-align:center;"><h1>Page Not Found</h1><p>Return to <a href="/index.html" style="color:#1a2ffb;font-weight:700;">Healthy Portal Home</a>.</p></body></html>');
      return;
    }

    const ext = path.extname(candidatePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    setSecurityHeaders(res, contentType);
    res.writeHead(200);

    if (req.method === 'HEAD') {
      res.end();
      return;
    }

    const stream = fs.createReadStream(candidatePath);
    stream.on('error', () => {
      if (!res.headersSent) {
        res.writeHead(500);
      }
      res.end('Internal Server Error');
    });
    stream.pipe(res);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Healthy Portal server running at http://${HOST}:${PORT}`);
});
