import { COPY, PROFILE } from '../data.js';
import { t, lang, toggleLang } from '../i18n.js';

export default function Header() {
  return (
    <header class="site-head">
      <a class="monogram" href="#top" aria-label="Ibrahima Touré">
        <span class="mono-mark">✦</span>
        <span class="mono-name">{PROFILE.name}</span>
      </a>

      <nav class="site-nav">
        <a href="#work">{() => t(COPY.nav.work)}</a>
        <a href="#stack">{() => t(COPY.nav.stack)}</a>
        <a href="#about">{() => t(COPY.nav.about)}</a>
        <a href="#contact">{() => t(COPY.nav.contact)}</a>
      </nav>

      <div class="head-right">
        <span class="status">
          <i class="status-dot" />
          {() => t(COPY.status)}
        </span>
        <button class="lang" onClick={toggleLang} aria-label="Toggle language">
          {() => (lang() === 'en' ? 'FR' : 'EN')}
        </button>
      </div>
    </header>
  );
}
