import { COPY, STACK } from '../data.js';
import { t } from '../i18n.js';

export default function Stack() {
  return (
    <section class="section" id="stack">
      <div class="section-head" data-reveal>
        <span class="section-no">02</span>
        <h2 class="section-title">{() => t(COPY.secStack)}</h2>
        <p class="section-sub">{() => t(COPY.secStackSub)}</p>
      </div>

      <div class="stack-grid">
        {STACK.map((g) => (
          <div class="stack-card" data-reveal>
            <div class="stack-top">
              <span class="stack-glyph">{g.glyph}</span>
              <h3 class="stack-label">{() => t(g.label)}</h3>
            </div>
            <ul class="stack-items">
              {g.items.map((it) => (
                <li>
                  <span class="bullet">/</span> {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
