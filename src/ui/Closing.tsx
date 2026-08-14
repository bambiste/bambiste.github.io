import { COPY, PROFILE } from '../data.js';
import { t } from '../i18n.js';

export default function Closing() {
  const year = new Date().getFullYear();
  return (
    <div class="closing">
      <section class="section about" id="about">
        <div class="section-head" data-reveal>
          <span class="section-no">03</span>
          <h2 class="section-title">{() => t(COPY.secAbout)}</h2>
        </div>
        <div class="about-body" data-reveal>
          <p>{() => t(COPY.about1)}</p>
          <p>{() => t(COPY.about2)}</p>
          <p>{() => t(COPY.about3)}</p>
          <p class="about-coda">{() => t(COPY.about4)}</p>
        </div>
      </section>

      <section class="section contact" id="contact">
        <div class="contact-card" data-reveal>
          <span class="section-no">04 — {() => t(COPY.secContact)}</span>
          <p class="contact-lede">{() => t(COPY.contactLede)}</p>
          <div class="contact-row">
            <a class="btn primary big" href={`mailto:${PROFILE.email}`}>
              {() => t(COPY.contactEmail)} <span class="arr">→</span>
            </a>
            <a class="contact-handle" href={PROFILE.github} target="_blank" rel="noreferrer">
              github.com/Bambiste ↗
            </a>
            <a class="contact-handle" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>
          <code class="contact-email">{PROFILE.email}</code>
        </div>
      </section>

      <footer class="site-foot">
        <span class="foot-mark">✦</span>
        <p class="foot-note">{() => t(COPY.footNote)}</p>
        <span class="foot-year">© {year}</span>
      </footer>
    </div>
  );
}
