// Import the stylesheet from the client entry so its CSS lands in the entry chunk and is linked
// into the prerendered HTML.
import './styles.css';
import { startClient } from '@fluixi/core/client';
import App, { appRoutes } from './app.js';

// The route tree lets startClient preload the matched route before hydrating, so the
// prerendered DOM is adopted in place.
startClient(App, { root: '#root', routes: appRoutes });
