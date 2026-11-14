// Runs after `expo export -p web`. Cleans up the static output for search engines:
//  - removes duplicate/utility pages Expo emits (route groups like /(tabs)/…, _sitemap, modal,
//    unfilled dynamic templates such as /projects/[name]),
//  - writes 404.html so Vercel answers unknown URLs with a real 404,
//  - generates sitemap.xml from the pages that remain.
import fs from 'node:fs';
import path from 'node:path';

const SITE_URL = 'https://sevketaydogdu.com'; // keep in sync with src/constants/site.ts
const DIST = path.resolve(process.argv[2] ?? 'dist');

// Dynamic templates that must stay because vercel.json rewrites to them.
const KEEP_TEMPLATES = new Set(['zikirmatik/c/[code].html']);
// Real pages that should not be listed in the sitemap.
const NOT_IN_SITEMAP = [/^zikirmatik\/c\//, /^download-zikirmatik/];

const rel = (p) => path.relative(DIST, p).split(path.sep).join('/');

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

// 1. 404 page (from the catch-all route, which renders with noindex).
const notFoundSource = ['[...missing].html', '+not-found.html']
  .map((f) => path.join(DIST, f))
  .find((f) => fs.existsSync(f));
if (notFoundSource) fs.copyFileSync(notFoundSource, path.join(DIST, '404.html'));

// 2. Remove duplicates and utility pages.
const removed = [];
for (const entry of fs.readdirSync(DIST, { withFileTypes: true })) {
  if (entry.isDirectory() && entry.name.startsWith('(')) {
    fs.rmSync(path.join(DIST, entry.name), { recursive: true, force: true });
    removed.push(`${entry.name}/`);
  }
}
for (const file of walk(DIST)) {
  const r = rel(file);
  if (KEEP_TEMPLATES.has(r) || r === '404.html') continue;
  const utility = /^(_sitemap|modal|\+not-found|\[\.\.\.missing\])\.html$/.test(r);
  const template = r.includes('[');
  if (utility || template) {
    fs.rmSync(file);
    removed.push(r);
    const dir = path.dirname(file);
    if (dir !== DIST && fs.readdirSync(dir).length === 0) fs.rmdirSync(dir);
  }
}

// 3. sitemap.xml
const urls = walk(DIST)
  .map(rel)
  .filter((r) => r !== '404.html' && !r.includes('[') && !NOT_IN_SITEMAP.some((re) => re.test(r)))
  .map((r) => '/' + r.replace(/(^|\/)index\.html$/, '').replace(/\.html$/, ''))
  .map((p) => (p === '/' ? p : p.replace(/\/$/, '')))
  .sort((a, b) => a.split('/').length - b.split('/').length || a.localeCompare(b));

const lastmod = new Date().toISOString().slice(0, 10);
const priority = (p) => (p === '/' ? '1.0' : p.startsWith('/zikirmatik') ? '0.3' : '0.8');
const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map(
    (p) =>
      `  <url><loc>${SITE_URL}${p === '/' ? '' : p}</loc><lastmod>${lastmod}</lastmod><priority>${priority(p)}</priority></url>`
  ),
  '</urlset>',
  '',
].join('\n');
fs.writeFileSync(path.join(DIST, 'sitemap.xml'), xml);

console.log(`postbuild: removed ${removed.length} duplicate/utility pages`);
console.log(`postbuild: sitemap.xml with ${urls.length} URLs\n  ${urls.join('\n  ')}`);
