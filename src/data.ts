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
    en: 'framework & systems engineer',
    fr: 'ingénieur systèmes & frameworks',
  } as L,
  heroTitleA: { en: 'I build reactive systems', fr: 'Je construis des systèmes réactifs' } as L,
  heroTitleB: { en: 'from the signal up.', fr: 'du signal jusqu’au pixel.' } as L,
  heroLede: {
    en: 'Frameworks, compilers, and the full-stack products that run on them — all designed around fine-grained reactivity. This page is one of them: it runs on Fluixi, my own signals-based framework, prerendered to static HTML and hydrated into the live instrument on the right.',
    fr: 'Des frameworks, des compilateurs et les produits full-stack qui tournent dessus — tous pensés autour d’une réactivité fine. Cette page en fait partie : elle tourne sur Fluixi, mon propre framework à signaux, prérendue en HTML statique puis hydratée dans l’instrument vivant ci-contre.',
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
    en: 'I’m a software engineer focused on the runtime layer of the web — how state flows, when the DOM updates, and how it feels to build against. My work usually starts from one conviction: fine-grained reactivity is the right default.',
    fr: 'Je suis ingénieur logiciel, concentré sur la couche d’exécution du web — comment l’état circule, quand le DOM se met à jour, et ce que l’on ressent en construisant dessus. Mon travail part presque toujours d’une conviction : la réactivité fine est le bon réglage par défaut.',
  } as L,
  about2: {
    en: 'I built Fluixi to prove that end to end — a TC39-signals core, a JSX compiler, and a full-stack framework with SSR, streaming, SSG, routing and server functions — and I use it to ship real products, from commerce platforms to the tools around them.',
    fr: 'J’ai construit Fluixi pour le démontrer de bout en bout — un cœur à signaux TC39, un compilateur JSX et un framework full-stack avec SSR, streaming, SSG, routage et fonctions serveur — et je m’en sers pour livrer de vrais produits, des plateformes e-commerce aux outils qui les entourent.',
  } as L,
  about3: {
    en: 'I care about small dependency surfaces, honest abstractions, and software that does exactly what it says.',
    fr: 'J’aime les surfaces de dépendances réduites, les abstractions honnêtes, et les logiciels qui font exactement ce qu’ils annoncent.',
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
};

export const PROJECTS: Project[] = [
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
    id: 'reactivity',
    glyph: '◆',
    label: { en: 'Reactivity & compilers', fr: 'Réactivité & compilateurs' },
    items: ['TC39 Signals', 'Fine-grained rendering', 'JSX → DOM codegen', 'Hydration', 'Babel'],
  },
  {
    id: 'fullstack',
    glyph: 'ƒ',
    label: { en: 'Full-stack web', fr: 'Web full-stack' },
    items: ['SSR · SSG · streaming', 'File routing', 'Server functions', 'Edge runtimes', 'DI'],
  },
  {
    id: 'products',
    glyph: '▤',
    label: { en: 'Products & commerce', fr: 'Produits & e-commerce' },
    items: ['Medusa', 'Storefronts', 'Admin dashboards', 'i18n', 'Design systems'],
  },
  {
    id: 'foundations',
    glyph: '⟂',
    label: { en: 'Foundations', fr: 'Fondations' },
    items: ['TypeScript', 'Monorepos · pnpm/nx', 'Changesets · CI', 'Vitest', 'Vite'],
  },
];
