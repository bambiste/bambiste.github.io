import { defineConfig } from '@fluixi/start/config';

export default defineConfig({
  port: 3400,
  // SSG: `fluixi build` prerenders both language pages to static HTML in dist/client.
  prerender: { routes: ['/', '/fr'] },
});
