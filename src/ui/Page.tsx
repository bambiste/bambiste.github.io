import { onMount, onCleanup } from '@fluixi/core';
import { seo, jsonld } from '@fluixi/start/head';
import Header from './Header.js';
import Hero from './Hero.js';
import Work from './Work.js';
import OpenSource from './OpenSource.js';
import Closing from './Closing.js';
import { initAmbient } from '../effects.js';
import { PROFILE, SEO } from '../data.js';
import { lang, type L, type Lang } from '../i18n.js';
import site from '../../site.config.json';

export const SITE = site.url;
// Canonical paths as the static host serves them: `fr/index.html` answers at `/fr/`.
export const PATHS: Record<Lang, string> = { en: '/', fr: '/fr/' };

// One page per language: `/` (English) and `/fr` (French), both prerendered, so search engines
// index each language with its own title, description and hreflang links.
export default function Page(props: { lang: Lang }) {
  lang.set(props.lang);
  const s = (x: L) => x[props.lang];
  const url = SITE + PATHS[props.lang];

  seo({
    title: s(SEO.title),
    description: s(SEO.description),
    keywords: s(SEO.keywords),
    canonical: url,
    lang: props.lang,
    author: PROFILE.name,
    themeColor: '#0e0d0c',
    robots: { index: true, follow: true, maxImagePreview: 'large' },
    alternates: [
      { hreflang: 'en', href: SITE + PATHS.en },
      { hreflang: 'fr', href: SITE + PATHS.fr },
      { hreflang: 'x-default', href: SITE + PATHS.en },
    ],
    og: {
      type: 'profile',
      siteName: PROFILE.name,
      url,
      title: s(SEO.title),
      description: s(SEO.description),
      locale: props.lang === 'fr' ? 'fr_SN' : 'en_US',
      localeAlternate: props.lang === 'fr' ? ['en_US'] : ['fr_SN'],
      image: { url: `${SITE}/og.png`, width: 1200, height: 630, alt: PROFILE.name },
    },
    twitter: {
      card: 'summary_large_image',
      title: s(SEO.title),
      description: s(SEO.description),
      image: `${SITE}/og.png`,
    },
    jsonLd: jsonld.person({
        name: PROFILE.name,
        url: SITE,
        image: `${SITE}/og.png`,
        jobTitle: s(SEO.jobTitle),
        description: s(SEO.description),
        email: `mailto:${PROFILE.email}`,
        address: { '@type': 'PostalAddress', addressLocality: 'Dakar', addressCountry: 'SN' },
        homeLocation: { '@type': 'Place', name: 'Dakar, Senegal' },
        nationality: { '@type': 'Country', name: 'Senegal' },
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'École Supérieure Multinationale des Télécommunications (ESMT)',
        },
        knowsLanguage: ['fr', 'en'],
        knowsAbout: SEO.knowsAbout,
        sameAs: [PROFILE.github, PROFILE.linkedin, PROFILE.fluixi],
      }),
  });

  onMount(() => {
    onCleanup(initAmbient());
  });

  return (
    <div class="page">
      <Header />
      <main>
        <Hero />
        <Work />
        <OpenSource />
        <Closing />
      </main>
    </div>
  );
}
