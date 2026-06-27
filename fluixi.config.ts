import { defineConfig } from '@fluixi/start/config';

export default defineConfig({
  port: 3400,
  // SSG: `fluixi build` prerenders the single page to static HTML in dist/client,
  // then the client hydrates it into the live signal instrument.
  prerender: true,
});
