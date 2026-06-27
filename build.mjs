// Bin-independent production build: invoke @fluixi/start's build programmatically so it works
// in fresh CI / Cloudflare installs (no reliance on the `fluixi` bin being symlinked).
import { loadConfig, build } from '@fluixi/start';

await build(await loadConfig());
