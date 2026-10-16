import { COPY, OPEN_SOURCE } from '../data.js';
import { t } from '../i18n.js';

export default function OpenSource() {
  return (
    <section class="block" id="oss">
      <div class="wrap">
        <div class="sec-head" data-reveal>
          <h2>{() => t(COPY.secOss)}</h2>
          <p>{() => t(COPY.secOssSub)}</p>
        </div>
        <ul class="oss" data-reveal>
          {OPEN_SOURCE.map((p) => (
            <li>
              <a class="name" href={p.href} target="_blank" rel="noreferrer">
                {p.name}
              </a>
              <p>{() => t(p.blurb)}</p>
              <span class="pkg">{p.pkg}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
