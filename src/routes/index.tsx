import { onMount, onCleanup } from '@fluixi/core';
import { seo, jsonld } from '@fluixi/start/head';
import Header from '../ui/Header.js';
import Hero from '../ui/Hero.js';
import Work from '../ui/Work.js';
import Stack from '../ui/Stack.js';
import Closing from '../ui/Closing.js';
import { initAmbient } from '../effects.js';
import { PROFILE } from '../data.js';
import { lang } from '../i18n.js';

const SITE = 'https://dev.fluixi.com';
const TITLE = 'Ibrahima Touré — Co-founder & CTO of Adafri';
const DESC =
  'Co-founder & CTO of Adafri and full-stack engineer. I build platforms — and the foundations under them, including Fluixi, my own fine-grained reactive framework. This page runs on it.';

export default function Home() {
  // Built-in SEO — collected into <head> at SSR, reconciled + updated live on the client.
  seo({
    title: TITLE,
    description: DESC,
    canonical: `${SITE}/`,
    lang: () => lang(),
    author: PROFILE.name,
    themeColor: '#06080b',
    og: {
      type: 'website',
      siteName: PROFILE.name,
      url: `${SITE}/`,
      title: TITLE,
      description: DESC,
      image: { url: `${SITE}/og.png`, width: 1200, height: 630, alt: TITLE },
    },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESC, image: `${SITE}/og.png` },
    jsonLd: jsonld.person({
      name: PROFILE.name,
      url: SITE,
      jobTitle: 'Co-founder & CTO, Adafri',
      sameAs: [PROFILE.github, 'https://adafri.co'],
    }),
  });

  onMount(() => {
    const dispose = initAmbient();
    onCleanup(dispose);
  });

  return (
    <div class="page">
      <div class="spotlight" />
      <div class="scanlines" />
      <Header />
      <main>
        <Hero />
        <Work />
        <Stack />
        <Closing />
      </main>
    </div>
  );
}
