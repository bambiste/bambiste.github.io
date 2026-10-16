import { onMount, onCleanup } from '@fluixi/core';
import { COPY, PROFILE } from '../data.js';
import { t } from '../i18n.js';
import { startParticles } from '../particles.js';

export default function Hero() {
  let stage!: HTMLDivElement;
  let canvas!: HTMLCanvasElement;

  // The heading is real text on the server and without JS; once the particles are built the
  // stage gets `.live` and the text turns transparent, keeping its layout and accessible name.
  onMount(() => {
    onCleanup(startParticles(stage, canvas));
  });

  return (
    <section class="hero" id="top">
      <div class="stage" ref={(el) => (stage = el)}>
        <canvas class="particles" ref={(el) => (canvas = el)} aria-hidden="true" />
        <h1>{PROFILE.name}</h1>
        <span class="label hint">{() => t(COPY.heroSlogan)}</span>
      </div>
      <div class="wrap hero-foot">
        <div class="role">
          <span class="who">{() => t(COPY.heroWho)}</span>
          <span class="label">{() => t(COPY.heroNow)}</span>
          <strong>{() => t(COPY.heroRoleFluixi)}</strong>
          <strong>{() => t(COPY.heroRoleAdafri)}</strong>
        </div>
        <p class="lede">
          {() => t(COPY.heroLedeA)}
          <em>{() => t(COPY.heroLedeB)}</em>
          {() => t(COPY.heroLedeC)}
        </p>
        <div class="ctas">
          <a class="btn primary" href="#work">
            {() => t(COPY.ctaWork)}
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
              <path d="M8 3v10M3.5 8.5 8 13l4.5-4.5" />
            </svg>
          </a>
          <a class="btn ghost" href={PROFILE.github} target="_blank" rel="noreferrer">
            GitHub
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
              <path d="M5 11 11 5M6 5h5v5" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
