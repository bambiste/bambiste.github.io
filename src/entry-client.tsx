// Import the stylesheet from the (non-lazy) client entry so its CSS lands in the entry chunk
// and gets linked into the prerendered HTML — otherwise a code-split route CSS isn't referenced
// in the static output and the page renders unstyled on first paint.
import './styles.css';
import { startClient } from '@fluixi/core/client';
import App from './app.js';

// hydrate:false forces the render() path (clear #root + rebuild). alpha.34 auto-hydrates a
// non-empty root, but DOM-reuse hydration still duplicates this lazy-route/Suspense app, so we
// opt out: a brief first-paint re-render flash, but correct output. SSR SEO (seo() → <head>) is
// unaffected. Drop this once async lazy-route hydration is fixed and re-released.
startClient(App, { root: '#root', hydrate: false });
