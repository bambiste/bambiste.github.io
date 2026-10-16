import { CAPABILITIES, COPY, PROFILE } from '../data.js';
import { t } from '../i18n.js';

export default function Closing() {
  const copied = $signal(false);
  let email!: HTMLElement;

  const copy = () => {
    const select = () => {
      const range = document.createRange();
      range.selectNodeContents(email);
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
    };
    if (!navigator.clipboard) return select();
    navigator.clipboard.writeText(PROFILE.email).then(() => {
      copied.set(true);
      setTimeout(() => copied.set(false), 1600);
    }, select);
  };

  return (
    <>
      <section class="block" id="about">
        <div class="wrap">
          <div class="sec-head" data-reveal>
            <h2>{() => t(COPY.secAbout)}</h2>
          </div>
          <div class="split">
            <div class="caps" data-reveal>
              {CAPABILITIES.map((c) => (
                <div class="cap">
                  <h4>{() => t(c.label)}</h4>
                  <p>{c.items}</p>
                </div>
              ))}
            </div>
            <div class="about" data-reveal>
              <p>{() => t(COPY.about1)}</p>
              <p>{() => t(COPY.about2)}</p>
              <p>{() => t(COPY.about3)}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="block" id="contact">
        <div class="wrap contact" data-reveal>
          <span class="label">{() => t(COPY.secContact)}</span>
          <h2>
            {() => t(COPY.contactTitleA)}
            <span>{() => t(COPY.contactTitleB)}</span>
          </h2>
          <div class="mail">
            <code ref={(el) => (email = el)}>{PROFILE.email}</code>
            <button type="button" onClick={copy}>
              {() => t(copied() ? COPY.copied : COPY.copyEmail)}
            </button>
            <a class="btn ghost" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a class="btn ghost" href={PROFILE.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer class="site-foot">
        <div class="wrap">
          <span>© 2026 {PROFILE.name}</span>
          <span>{() => t(COPY.footNote)}</span>
        </div>
      </footer>
    </>
  );
}
