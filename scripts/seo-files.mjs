// Writes robots.txt and sitemap.xml into the build output from site.config.json, so the site
// address lives in one place.
import { readFileSync, writeFileSync } from 'node:fs';

const { url } = JSON.parse(readFileSync(new URL('../site.config.json', import.meta.url), 'utf8'));
const out = new URL('../dist/client/', import.meta.url);
const pages = { en: `${url}/`, fr: `${url}/fr/` };
const alternates = Object.entries(pages)
  .concat([['x-default', pages.en]])
  .map(([lang, href]) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${href}"/>`)
  .join('\n');

writeFileSync(new URL('robots.txt', out), `User-agent: *\nAllow: /\n\nSitemap: ${url}/sitemap.xml\n`);
writeFileSync(
  new URL('sitemap.xml', out),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${Object.values(pages)
  .map((loc) => `  <url>\n    <loc>${loc}</loc>\n${alternates}\n  </url>`)
  .join('\n')}
</urlset>
`,
);
