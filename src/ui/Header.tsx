import { Link } from '@fluixi/start/router';
import { COPY, PROFILE } from '../data.js';
import { t, lang } from '../i18n.js';

export default function Header() {
  return (
    <header class="site-head">
      <div class="wrap head-row">
        <Link class="mark" href={() => (lang() === 'fr' ? '/fr/' : '/')}>
          {PROFILE.name}
        </Link>
        <nav class="site-nav" aria-label="Sections">
          <a href="#work">{() => t(COPY.nav.work)}</a>
          <a href="#oss">{() => t(COPY.nav.oss)}</a>
          <a href="#about">{() => t(COPY.nav.about)}</a>
          <a href="#contact">{() => t(COPY.nav.contact)}</a>
        </nav>
        <span class="status">
          <i aria-hidden="true" />
          {() => t(COPY.status)}
        </span>
        <Link
          class="lang"
          href={() => (lang() === 'fr' ? '/' : '/fr/')}
          hreflang={() => (lang() === 'fr' ? 'en' : 'fr')}
          aria-label={() => t(COPY.langToggle)}
        >
          {() => (lang() === 'fr' ? 'EN' : 'FR')}
        </Link>
      </div>
    </header>
  );
}
