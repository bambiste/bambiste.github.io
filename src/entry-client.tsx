// Import the stylesheet from the (non-lazy) client entry so its CSS lands in the entry chunk
// and gets linked into the prerendered HTML — otherwise a code-split route CSS isn't referenced
// in the static output and the page renders unstyled on first paint.
import './styles.css';
import { startClient } from '@fluixi/core/client';
import App from './app.js';

startClient(App, { root: '#root' });
