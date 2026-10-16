# Ibrahima Touré, portfolio

Source of [bambiste.github.io](https://bambiste.github.io), also served at
[ibrahima.fluixi.com](https://ibrahima.fluixi.com). Built with [Fluixi](https://github.com/fluixi)
and prerendered to static HTML: English at `/`, French at `/fr/`.

## Develop

```bash
pnpm install
pnpm dev          # http://localhost:3400
```

All `@fluixi/*` packages install from public npm.

## Build

```bash
pnpm build        # static site in dist/client, plus robots.txt and sitemap.xml
pnpm preview      # serve the build
```

The site address lives in `site.config.json`; the SEO tags, sitemap and robots.txt read it.

## Deploy

- GitHub Pages: `.github/workflows/pages.yml` builds every pull request and deploys `main`.
- Cloudflare Pages: build command `pnpm build`, output directory `dist/client`.

## Structure

```
src/
  routes/          index.tsx (English) and fr.tsx (French)
  ui/              Page (SEO and layout), Header, Hero, Work, OpenSource, Closing
  particles.ts     the particle name in the hero (three.js, loaded on demand)
  effects.ts       scroll reveal and card tilt
  data.ts          bilingual copy, projects, open source, SEO text
  i18n.ts          the language signal and t()
  styles.css       theme and layout
public/fonts/      self-hosted Instrument Sans and Geist Mono
scripts/           robots.txt and sitemap.xml generation
cv/                CVs in English and French
```
