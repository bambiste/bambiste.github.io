import { COPY } from '../data.js';
import { t } from '../i18n.js';
import Oscilloscope from './Oscilloscope.js';

export default function Hero() {
  return (
    <section class="hero" id="top">
      <div class="hero-copy">
        <div class="eyebrow">
          <span class="eyebrow-prompt">~</span> {() => t(COPY.heroEyebrow)}
        </div>
        <h1 class="hero-title">
          {() => t(COPY.heroTitleA)} <span class="grad">{() => t(COPY.heroTitleB)}</span>
        </h1>
        <p class="hero-lede">{() => t(COPY.heroLede)}</p>
        <div class="hero-cta">
          <a class="btn primary" href="#work">
            {() => t(COPY.ctaWork)} <span class="arr">→</span>
          </a>
          <a class="btn ghost" href="#contact">
            {() => t(COPY.ctaContact)}
          </a>
        </div>
      </div>

      <div class="hero-instrument" data-reveal>
        <Oscilloscope />
      </div>
    </section>
  );
}
