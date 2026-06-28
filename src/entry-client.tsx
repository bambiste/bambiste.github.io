// Import the stylesheet from the (non-lazy) client entry so its CSS lands in the entry chunk
// and gets linked into the prerendered HTML — otherwise a code-split route CSS isn't referenced
// in the static output and the page renders unstyled on first paint.
import './styles.css';
import { startClient } from '@fluixi/core/client';
import App from './app.js';

// NB: no `hydrate: true`. On the published alpha, true hydration over this Router/Suspense/Outlet
// structure duplicates the whole app (renders it ~3×) instead of reusing the server DOM, so we
// stay on the render() path (clears #root + rebuilds). Trade-off: a brief first-paint re-render
// flash, but correct output. Revisit once @fluixi/dom hydration handles nested Router/Suspense.
startClient(App, { root: '#root' });
