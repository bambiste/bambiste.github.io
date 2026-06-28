// Import the stylesheet from the (non-lazy) client entry so its CSS lands in the entry chunk
// and gets linked into the prerendered HTML — otherwise a code-split route CSS isn't referenced
// in the static output and the page renders unstyled on first paint.
import './styles.css';
import { startClient } from '@fluixi/core/client';
import App, { appRoutes } from './app.js';

// Pass the route tree so startClient preloads the current route's lazy chunk before hydrating —
// the prerendered DOM is adopted in place (flash-free, no duplicate). Needs core ≥ alpha.36 (the
// SVG-attr hydration fix; without it the hero's <linearGradient> threw and killed reactivity).
startClient(App, { root: '#root', routes: appRoutes });
