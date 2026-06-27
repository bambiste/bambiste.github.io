import type { L } from './i18n.js';

export const PROFILE = {
  name: 'Ibrahima Touré',
  email: 'ibrahima.toure.dev@gmail.com',
  github: 'https://github.com/Bambiste',
  fluixi: 'https://github.com/fluixi',
};

// ---------------------------------------------------------------------------
// Chrome / narrative copy (bilingual)
// ---------------------------------------------------------------------------
export const COPY = {
  status: { en: 'Open to work', fr: 'Disponible' } as L,

  nav: {
    work: { en: 'Work', fr: 'Travaux' } as L,
    stack: { en: 'Stack', fr: 'Stack' } as L,
    about: { en: 'About', fr: 'À propos' } as L,
    contact: { en: 'Contact', fr: 'Contact' } as L,
  },

  heroEyebrow: {
    en: 'Co-founder & CTO · Adafri · since 2020',
    fr: 'Co-fondateur & CTO · Adafri · depuis 2020',
  } as L,
  heroNow: {
    en: 'Currently building Adafri — an AI-powered, omnichannel marketing platform for African markets.',
    fr: 'Je construis Adafri — une plateforme marketing omnicanale, dopée à l’IA, pour les marchés africains.',
  } as L,
  heroTitleA: { en: 'I build platforms —', fr: 'Je construis des plateformes —' } as L,
  heroTitleB: { en: 'down to the foundations.', fr: 'jusqu’aux fondations.' } as L,
  heroLede: {
    en: 'Full-stack engineer and co-founder/CTO of Adafri — an omnichannel marketing platform built with Angular and Python. On the side I build Fluixi, my own fine-grained reactive framework: this very page runs on it, prerendered to static HTML and hydrated into the live instrument on the right.',
    fr: 'Ingénieur full-stack, co-fondateur et CTO d’Adafri — une plateforme marketing omnicanale construite avec Angular et Python. En parallèle je développe Fluixi, mon propre framework réactif à granularité fine : cette page tourne dessus, prérendue en HTML statique puis hydratée dans l’instrument vivant ci-contre.',
  } as L,
  ctaWork: { en: 'See selected work', fr: 'Voir les projets' } as L,
  ctaContact: { en: 'Get in touch', fr: 'Me contacter' } as L,

  // section eyebrows
  secWork: { en: 'Selected work', fr: 'Projets sélectionnés' } as L,
  secWorkSub: {
    en: 'A few systems I designed and built end to end.',
    fr: 'Quelques systèmes conçus et construits de bout en bout.',
  } as L,
  filterAll: { en: 'All', fr: 'Tous' } as L,

  secStack: { en: 'Capabilities', fr: 'Compétences' } as L,
  secStackSub: {
    en: 'What I reach for, grouped by the layer it lives in.',
    fr: 'Mes outils, regroupés par couche.',
  } as L,

  secAbout: { en: 'About', fr: 'À propos' } as L,
  about1: {
    en: 'Since 2020 I’ve been co-founder and CTO of Adafri — an omnichannel marketing platform for African markets (Google Ads, SMS, DOOH billboards, Mobile Money). It’s an Angular front end on a Python/Flask backend over Cloud Firestore, with Google Cloud Vision handling prohibited-content, text and color detection, and deep Google Ads API integration.',
    fr: 'Depuis 2020, je suis co-fondateur et CTO d’Adafri — une plateforme marketing omnicanale pour les marchés africains (Google Ads, SMS, panneaux DOOH, Mobile Money). Un front Angular sur un backend Python/Flask et Cloud Firestore, avec Google Cloud Vision pour la détection de contenus interdits, de texte et de couleurs, et une intégration poussée de l’API Google Ads.',
  } as L,
  about2: {
    en: 'I’ve written Python and Angular since 2018 — my third year of a bachelor’s degree — and I pick up tools by shipping with them: Flutter and React since 2021. I learn a framework by building something real in it.',
    fr: 'J’écris du Python et de l’Angular depuis 2018 — ma troisième année de licence — et j’apprends les outils en livrant avec : Flutter et React depuis 2021. J’apprends un framework en construisant quelque chose de réel avec.',
  } as L,
  about3: {
    en: 'That habit led me to build Fluixi — my own fine-grained reactive framework, with a TC39-signals core, a JSX compiler and full-stack rendering. It’s where I explore framework design from first principles; this page runs on it.',
    fr: 'Cette habitude m’a mené à construire Fluixi — mon propre framework réactif à granularité fine, avec un cœur à signaux TC39, un compilateur JSX et un rendu full-stack. C’est là que j’explore la conception de frameworks à partir des principes ; cette page tourne dessus.',
  } as L,
  about4: {
    en: 'I think long-term and build foundations, not just features — small dependency surfaces, honest abstractions, and software that does exactly what it says.',
    fr: 'Je pense à long terme et je construis des fondations, pas seulement des fonctionnalités — des surfaces de dépendances réduites, des abstractions honnêtes, et des logiciels qui font exactement ce qu’ils annoncent.',
  } as L,

  secContact: { en: 'Contact', fr: 'Contact' } as L,
  contactLede: {
    en: 'Have something that needs to be fast, reactive, and built to last? Let’s talk.',
    fr: 'Un projet qui doit être rapide, réactif et durable ? Parlons-en.',
  } as L,
  contactEmail: { en: 'Email me', fr: 'M’écrire' } as L,

  footNote: {
    en: 'Designed & built by Ibrahima Touré — running on Fluixi, prerendered to static HTML, hydrated into a live signal graph.',
    fr: 'Conçu et développé par Ibrahima Touré — propulsé par Fluixi, prérendu en HTML statique, hydraté en graphe de signaux vivant.',
  } as L,
};

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------
export type Project = {
  id: string;
  name: string;
  kind: L;
  year: string;
  accent: 'cyan' | 'amber' | 'violet' | 'phos';
  tags: string[];
  blurb: L;
  links: { label: string; href: string }[];
  featured?: boolean;
  role?: L;
};

export const PROJECTS: Project[] = [
  {
    id: 'adafri',
    name: 'Adafri',
    kind: { en: 'Marketing & advertising platform', fr: 'Plateforme marketing & publicité' },
    role: { en: 'Co-founder & CTO · since 2020', fr: 'Co-fondateur & CTO · depuis 2020' },
    year: '2020 —',
    accent: 'phos',
    featured: true,
    tags: ['Angular', 'Python · Flask', 'Firestore', 'Cloud Vision', 'Google Ads'],
    blurb: {
      en: 'The platform I lead as co-founder and CTO. Adafri lets businesses create, manage and automate advertising across channels — Google Ads, SMS, DOOH billboards and Mobile Money payments — for African markets. An Angular front end on a Python/Flask backend over Cloud Firestore, with Google Cloud Vision for prohibited-content, text and color detection, and deep Google Ads API integration. Now growing into an AI-powered marketing suite with built-in business tools.',
      fr: 'La plateforme que je dirige en tant que co-fondateur et CTO. Adafri permet aux entreprises de créer, gérer et automatiser leur publicité sur tous les canaux — Google Ads, SMS, panneaux DOOH et paiements Mobile Money — pour les marchés africains. Un front Angular sur un backend Python/Flask et Cloud Firestore, avec Google Cloud Vision pour la détection de contenus interdits, de texte et de couleurs, et une intégration poussée de l’API Google Ads. En route vers une suite marketing dopée à l’IA, avec des outils métier intégrés.',
    },
    links: [{ label: 'adafri.co', href: 'https://adafri.co' }],
  },
  {
    id: 'fluixi',
    name: 'Fluixi',
    kind: { en: 'Reactive framework', fr: 'Framework réactif' },
    year: '2025 —',
    accent: 'phos',
    tags: ['Reactivity', 'Compiler', 'SSR/SSG', 'TypeScript'],
    blurb: {
      en: 'A fine-grained reactive, compiled full-stack web framework on a TC39-signals core — SSR, streaming, SSG, file routing, server functions, islands, dependency injection and i18n. The framework this site runs on.',
      fr: 'Un framework web full-stack réactif et compilé, sur un cœur à signaux TC39 — SSR, streaming, SSG, routage par fichiers, fonctions serveur, islands, injection de dépendances et i18n. Le framework qui propulse ce site.',
    },
    links: [
      { label: 'Docs', href: 'https://docs.fluixi.com' },
      { label: 'Playground', href: 'https://playground.fluixi.com' },
    ],
  },
  {
    id: 'leuzma',
    name: 'Leuzma',
    kind: { en: 'Commerce platform', fr: 'Plateforme e-commerce' },
    year: '2024 —',
    accent: 'amber',
    tags: ['Full-stack', 'Commerce', 'Medusa', 'TypeScript'],
    blurb: {
      en: 'A full-stack commerce platform — a Medusa backend, a storefront and an admin dashboard — built as a multi-package monorepo for real-world retail, with i18n and a typed data layer throughout.',
      fr: 'Une plateforme e-commerce full-stack — un backend Medusa, une boutique et un tableau de bord d’administration — construite en monorepo multi-paquets pour le commerce réel, avec i18n et une couche de données typée de bout en bout.',
    },
    links: [],
  },
  {
    id: 'devtools',
    name: 'Fluixi Devtools',
    kind: { en: 'Developer tooling', fr: 'Outillage développeur' },
    year: '2025',
    accent: 'cyan',
    tags: ['Tooling', 'Reactivity', 'SVG'],
    blurb: {
      en: 'A live dependency-graph inspector for Fluixi — it instruments signals, memos, stores and effects and renders the reactive graph as it propagates, so you can watch state flow in real time.',
      fr: 'Un inspecteur de graphe de dépendances en direct pour Fluixi — il instrumente signaux, mémos, stores et effets et dessine le graphe réactif au fil de la propagation, pour voir l’état circuler en temps réel.',
    },
    links: [{ label: 'Playground', href: 'https://playground.fluixi.com' }],
  },
  {
    id: 'countries',
    name: 'Bambiste Countries',
    kind: { en: 'Open-data package', fr: 'Paquet de données ouvertes' },
    year: '2025',
    accent: 'violet',
    tags: ['Data', 'Zero-dep', 'Codegen'],
    blurb: {
      en: 'A zero-dependency country dataset and helpers, generated from world-countries — names, currencies, calling codes and flags, fully typed. Built to drop the need for a paid geo API.',
      fr: 'Un jeu de données pays sans dépendances et ses utilitaires, générés depuis world-countries — noms, devises, indicatifs et drapeaux, entièrement typés. Conçu pour se passer d’une API géo payante.',
    },
    links: [],
  },
];

// ---------------------------------------------------------------------------
// Capabilities
// ---------------------------------------------------------------------------
export type StackGroup = { id: string; label: L; glyph: string; items: string[] };

export const STACK: StackGroup[] = [
  {
    id: 'languages',
    glyph: '◆',
    label: { en: 'Languages & frameworks', fr: 'Langages & frameworks' },
    items: ['Python', 'TypeScript', 'Angular', 'React', 'Flutter'],
  },
  {
    id: 'backend',
    glyph: 'ƒ',
    label: { en: 'Backend & cloud', fr: 'Backend & cloud' },
    items: ['Python · Flask', 'Cloud Firestore', 'Google Cloud Vision', 'Google Ads API', 'REST APIs'],
  },
  {
    id: 'reactivity',
    glyph: '▤',
    label: { en: 'Reactivity & frameworks', fr: 'Réactivité & frameworks' },
    items: ['TC39 Signals', 'JSX → DOM compiler', 'SSR · SSG', 'Fine-grained rendering', 'Hydration'],
  },
  {
    id: 'foundations',
    glyph: '⟂',
    label: { en: 'Craft & foundations', fr: 'Méthode & fondations' },
    items: ['Monorepos · pnpm/nx', 'CI · changesets', 'Vitest', 'GDPR · privacy', 'Design systems'],
  },
];
