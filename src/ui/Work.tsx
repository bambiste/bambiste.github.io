import { COPY, PROJECTS, type Project } from '../data.js';
import { t } from '../i18n.js';

function Links(props: { links: Project['links'] }) {
  return (
    <div class="links">
      {props.links.map((l) => (
        <a href={l.href} target="_blank" rel="noreferrer">
          {l.label}
        </a>
      ))}
    </div>
  );
}

function Tags(props: { tags: string[] }) {
  return (
    <ul class="tags">
      {props.tags.map((tag) => (
        <li>{tag}</li>
      ))}
    </ul>
  );
}

export default function Work() {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section class="block" id="work">
      <div class="wrap">
        <div class="sec-head" data-reveal>
          <h2>{() => t(COPY.secWork)}</h2>
          <p>{() => t(COPY.secWorkSub)}</p>
        </div>
        <div class="work">
          {featured.map((p) => (
            <article class="card feature" data-tilt data-reveal>
              <div class="c-main">
                <div class="c-top">
                  <span class="role-tag">{() => t(p.role)}</span>
                  <span class="label">{() => t(p.when)}</span>
                </div>
                <h3>{() => t(p.name)}</h3>
                <p>{() => t(p.blurb)}</p>
                <Tags tags={p.tags} />
              </div>
              <div class="c-side">
                {(p.facts ?? []).map((f) => (
                  <div class="fact">
                    <span>{() => t(f.label)}</span>
                    <span>{() => t(f.value)}</span>
                  </div>
                ))}
                <Links links={p.links} />
              </div>
            </article>
          ))}
          {rest.map((p) => (
            <article class="card" data-tilt data-reveal>
              <div class="c-top">
                <span class="role-tag">{() => t(p.role)}</span>
                <span class="label">{() => t(p.when)}</span>
              </div>
              <h3>{() => t(p.name)}</h3>
              <p>{() => t(p.blurb)}</p>
              <Tags tags={p.tags} />
              <Links links={p.links} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
