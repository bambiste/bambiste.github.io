import { createSignal } from '@fluixi/reactive/signal';
import { COPY, PROJECTS } from '../data.js';
import { t } from '../i18n.js';

const ALL_TAGS = Array.from(new Set(PROJECTS.flatMap((p) => p.tags))).sort();

export default function Work() {
  // A tiny reactive filter: clicking a tag writes a signal; each card derives its dimmed state
  // from it. No list re-render — just the cards whose class depends on the signal update.
  const [active, setActive] = createSignal<string | null>(null);
  const toggle = (tag: string) => setActive((a) => (a === tag ? null : tag));
  const dim = (tags: string[]) => {
    const a = active();
    return a !== null && !tags.includes(a);
  };

  return (
    <section class="section" id="work">
      <div class="section-head" data-reveal>
        <span class="section-no">01</span>
        <h2 class="section-title">{() => t(COPY.secWork)}</h2>
        <p class="section-sub">{() => t(COPY.secWorkSub)}</p>
      </div>

      <div class="filters" data-reveal>
        <button class={() => 'chip' + (active() === null ? ' on' : '')} onClick={() => setActive(null)}>
          {() => t(COPY.filterAll)}
        </button>
        {ALL_TAGS.map((tag) => (
          <button class={() => 'chip' + (active() === tag ? ' on' : '')} onClick={() => toggle(tag)}>
            {tag}
          </button>
        ))}
      </div>

      {PROJECTS.filter((p) => p.featured).map((p) => (
        <article
          class={() => 'work-card featured a-' + p.accent + (dim(p.tags) ? ' is-dim' : '')}
          data-reveal
        >
          <div class="work-top">
            <span class="work-glyph">{p.name.charAt(0)}</span>
            <div class="work-meta">
              {p.role ? <span class="work-role">{() => t(p.role!)}</span> : null}
              <h3 class="work-name big">{p.name}</h3>
              <span class="work-kind">{() => t(p.kind)}</span>
            </div>
            <span class="work-year">{p.year}</span>
          </div>
          <p class="work-blurb big">{() => t(p.blurb)}</p>
          <div class="work-foot row">
            <div class="work-tags">
              {p.tags.map((tag) => (
                <span class={() => 'tag' + (active() === tag ? ' hit' : '')}>{tag}</span>
              ))}
            </div>
            <div class="work-links">
              {p.links.map((l) => (
                <a class="work-link" href={l.href} target="_blank" rel="noreferrer">
                  {l.label} <span class="arr">↗</span>
                </a>
              ))}
            </div>
          </div>
        </article>
      ))}

      <div class="work-grid">
        {PROJECTS.filter((p) => !p.featured).map((p) => (
          <article class={() => 'work-card a-' + p.accent + (dim(p.tags) ? ' is-dim' : '')} data-reveal>
            <div class="work-top">
              <span class="work-glyph">{p.name.charAt(0)}</span>
              <div class="work-meta">
                <h3 class="work-name">{p.name}</h3>
                <span class="work-kind">{() => t(p.kind)}</span>
              </div>
              <span class="work-year">{p.year}</span>
            </div>
            <p class="work-blurb">{() => t(p.blurb)}</p>
            <div class="work-foot">
              <div class="work-tags">
                {p.tags.map((tag) => (
                  <span class={() => 'tag' + (active() === tag ? ' hit' : '')}>{tag}</span>
                ))}
              </div>
              <div class="work-links">
                {p.links.map((l) => (
                  <a class="work-link" href={l.href} target="_blank" rel="noreferrer">
                    {l.label} <span class="arr">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
