# Ibrahima Touré — portfolio

A single-page developer portfolio, **built with [Fluixi](https://github.com/fluixi)** — my own
fine-grained reactive framework — and prerendered to static HTML.

The site is its own demo. The hero is a live oscilloscope wired as a real reactive graph:
two `createSignal`s (frequency, amplitude) feed a `createMemo` (the SVG waveform), and an
animation loop nudges a phase signal each frame — so the trace you see is genuine
signal → memo → DOM propagation. The EN/FR toggle and the work filter are signals too; nothing
re-renders that doesn't depend on the value that changed.

## Stack

- **[@fluixi/start](https://github.com/fluixi)** — file routing + SSG (prerender)
- **@fluixi/dom / @fluixi/reactive** — the compiled, fine-grained runtime
- **@fluixi/server** — request-scoped server rendering for the static build
- No UI framework, no CSS framework — one hand-written stylesheet.

## Develop

```bash
pnpm install      # needs a GitHub Packages token for @fluixi/* (see .npmrc)
pnpm dev          # http://localhost:3400
```

`@fluixi/*` packages come from GitHub Packages. Set a token before installing:

```bash
export NODE_AUTH_TOKEN=<github token with read:packages>
```

## Build (static)

```bash
pnpm build        # → dist/client  (static HTML + assets)
pnpm preview      # serve the build
```

## Deploy (Cloudflare Pages)

- **Build command:** `pnpm build`
- **Output directory:** `dist/client`
- **Env:** `NODE_AUTH_TOKEN` (read:packages), `NODE_VERSION=22`, `PNPM_VERSION=10`

## Structure

```
src/
  app.tsx            router shell (single route)
  routes/index.tsx   the page (composes the sections)
  ui/                Header · Hero · Oscilloscope · Work · Stack · Closing
  data.ts            projects, capabilities, bilingual copy
  i18n.ts            the language signal + t()
  effects.ts         pointer spotlight + scroll-reveal (client-only)
  styles.css         the phosphor / oscilloscope theme
```
