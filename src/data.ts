import type { L } from './i18n.js';

export const PROFILE = {
  name: 'Ibrahima Touré',
  email: 'ibrahima@fluixi.com',
  github: 'https://github.com/bambiste',
  fluixi: 'https://github.com/fluixi',
  linkedin: 'https://www.linkedin.com/in/ibrahima-toure-a31073184',
};

// ---------------------------------------------------------------------------
// Page copy (bilingual)
// ---------------------------------------------------------------------------
export const COPY = {
  status: { en: 'Open to work', fr: 'Disponible' } as L,

  nav: {
    work: { en: 'Work', fr: 'Projets' } as L,
    oss: { en: 'Open source', fr: 'Open source' } as L,
    about: { en: 'About', fr: 'À propos' } as L,
    contact: { en: 'Contact', fr: 'Contact' } as L,
  },
  langToggle: { en: 'Afficher la page en français', fr: 'Show the page in English' } as L,

  heroSlogan: { en: 'Engineered from first principles', fr: 'Conçu à partir des principes premiers' } as L,
  heroWho: {
    en: 'Software engineer · Dakar, Senegal',
    fr: 'Ingénieur logiciel · Dakar, Sénégal',
  } as L,
  heroNow: { en: 'Now', fr: 'Aujourd’hui' } as L,
  heroRoleFluixi: { en: 'Author of Fluixi', fr: 'Auteur de Fluixi' } as L,
  heroRoleAdafri: { en: 'Co-founder & CTO, Adafri', fr: 'Co-fondateur & CTO, Adafri' } as L,
  heroLedeA: { en: 'I build platforms, ', fr: 'Je construis des plateformes, ' } as L,
  heroLedeB: { en: 'down to the foundations', fr: 'jusqu’aux fondations' } as L,
  heroLedeC: {
    en: ': products people use every day, and the framework and tools they run on.',
    fr: ' : des produits utilisés au quotidien, et le framework et les outils sur lesquels ils tournent.',
  } as L,
  ctaWork: { en: 'Selected work', fr: 'Projets choisis' } as L,

  secWork: { en: 'Selected work', fr: 'Projets choisis' } as L,
  secWorkSub: {
    en: 'Systems I designed and built end to end, from the data layer to the screen.',
    fr: 'Des systèmes conçus et construits de bout en bout, de la couche de données à l’écran.',
  } as L,

  secOss: { en: 'Open source', fr: 'Open source' } as L,
  secOssSub: {
    en: 'Small tools that came out of real projects, each published on npm.',
    fr: 'De petits outils nés de vrais projets, tous publiés sur npm.',
  } as L,

  secAbout: { en: 'About', fr: 'À propos' } as L,
  about1: {
    en: 'I’ve written Python and Angular since 2018, and I learn tools by shipping with them: React since 2021, then Electron and React Native for point-of-sale work.',
    fr: 'J’écris du Python et de l’Angular depuis 2018, et j’apprends les outils en livrant avec : React depuis 2021, puis Electron et React Native pour des logiciels de caisse.',
  } as L,
  about2: {
    en: 'That habit led me to build Fluixi, where I explore framework design from first principles. It runs this page and a point-of-sale system used every day in a store.',
    fr: 'Cette habitude m’a mené à construire Fluixi, où j’explore la conception de frameworks à partir des principes. Il fait tourner cette page et un logiciel de caisse utilisé chaque jour en boutique.',
  } as L,
  about3: {
    en: 'I think long-term: small dependency surfaces, honest abstractions, and software that does exactly what it says.',
    fr: 'Je pense à long terme : peu de dépendances, des abstractions honnêtes, et des logiciels qui font exactement ce qu’ils annoncent.',
  } as L,

  secContact: { en: 'Contact', fr: 'Contact' } as L,
  contactTitleA: { en: 'Something that needs to ', fr: 'Un projet qui doit ' } as L,
  contactTitleB: { en: 'last?', fr: 'durer ?' } as L,
  copyEmail: { en: 'Copy email', fr: 'Copier l’email' } as L,
  copied: { en: 'Copied', fr: 'Copié' } as L,

  footNote: {
    en: 'Built with Fluixi, prerendered and hydrated.',
    fr: 'Construit avec Fluixi, prérendu puis hydraté.',
  } as L,
};

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------
export type Project = {
  id: string;
  name: L;
  role: L;
  when: L;
  tags: string[];
  blurb: L;
  links: { label: string; href: string }[];
  facts?: { label: L; value: L }[];
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: 'adafri',
    name: { en: 'Adafri', fr: 'Adafri' },
    role: { en: 'Co-founder & CTO', fr: 'Co-fondateur & CTO' },
    when: { en: 'Since 2020', fr: 'Depuis 2020' },
    featured: true,
    tags: ['Angular', 'Python · Flask', 'Firestore', 'Cloud Vision', 'Google Ads API'],
    blurb: {
      en: 'Let businesses create, manage and automate advertising across Google Ads, SMS, DOOH billboards and Mobile Money payments, for African markets. I led the technology: an Angular front end on a Python/Flask backend over Cloud Firestore, with Google Cloud Vision for content checks and deep Google Ads API integration.',
      fr: 'Permettait aux entreprises de créer, gérer et automatiser leur publicité sur Google Ads, SMS, panneaux DOOH et paiements Mobile Money, pour les marchés africains. J’en ai dirigé la technique : un front Angular sur un backend Python/Flask et Cloud Firestore, avec Google Cloud Vision pour la vérification des contenus et une intégration poussée de l’API Google Ads.',
    },
    facts: [
      { label: { en: 'Channels', fr: 'Canaux' }, value: { en: 'Ads, SMS, DOOH, Mobile Money', fr: 'Ads, SMS, DOOH, Mobile Money' } },
      { label: { en: 'Market', fr: 'Marché' }, value: { en: 'West Africa', fr: 'Afrique de l’Ouest' } },
    ],
    links: [{ label: 'adafri.co', href: 'https://adafri.co' }],
  },
  {
    id: 'fluixi',
    name: { en: 'Fluixi', fr: 'Fluixi' },
    role: { en: 'Author', fr: 'Auteur' },
    when: { en: 'Since 2025', fr: 'Depuis 2025' },
    tags: ['Signals', 'Compiler', 'SSR · SSG', 'TypeScript'],
    blurb: {
      en: 'A fine-grained reactive, compiled full-stack framework on a TC39-signals core: SSR, streaming, SSG, file routing, server functions, islands and i18n. Published on npm and running in production.',
      fr: 'Un framework full-stack réactif et compilé, sur un cœur à signaux TC39 : SSR, streaming, SSG, routage par fichiers, fonctions serveur, islands et i18n. Publié sur npm et utilisé en production.',
    },
    links: [
      { label: 'Docs', href: 'https://docs.fluixi.com' },
      { label: 'Playground', href: 'https://playground.fluixi.com' },
    ],
  },
  {
    id: 'commerce',
    name: { en: 'Commerce & point of sale', fr: 'Commerce & point de vente' },
    role: { en: 'Freelance', fr: 'Freelance' },
    when: { en: '2026', fr: '2026' },
    tags: ['Medusa', 'Fluixi', 'Electron', 'React Native'],
    blurb: {
      en: 'A Medusa commerce stack spanning online and in-store retail: storefront and admin on Fluixi, a desktop POS in Fluixi and Electron, and a React Native POS for mobile. Used daily by Leuzma, a retail business.',
      fr: 'Une stack e-commerce Medusa, du web à la boutique : vitrine et back-office sur Fluixi, un logiciel de caisse desktop en Fluixi et Electron, et une caisse mobile en React Native. Utilisée chaque jour par Leuzma, une entreprise de commerce.',
    },
    links: [],
  },
  {
    id: 'devtools',
    name: { en: 'Fluixi Devtools', fr: 'Fluixi Devtools' },
    role: { en: 'Tooling', fr: 'Outillage' },
    when: { en: '2025', fr: '2025' },
    tags: ['Tooling', 'Reactivity', 'SVG'],
    blurb: {
      en: 'A live dependency-graph inspector. It instruments signals, memos, stores and effects and draws the graph as updates propagate, so you can watch state flow in real time.',
      fr: 'Un inspecteur de graphe de dépendances en direct. Il instrumente signaux, mémos, stores et effets et dessine le graphe au fil des mises à jour, pour voir l’état circuler en temps réel.',
    },
    links: [{ label: 'Playground', href: 'https://playground.fluixi.com' }],
  },
  {
    id: 'countries',
    name: { en: 'Countries', fr: 'Countries' },
    role: { en: 'Open data', fr: 'Données ouvertes' },
    when: { en: '2025', fr: '2025' },
    tags: ['Data', 'Web components', 'Zero runtime deps'],
    blurb: {
      en: 'Countries as static data, with what a form needs around them: calling codes, names in any language, search, phone numbers, a country select and a phone input.',
      fr: 'Les pays en données statiques, avec ce qu’un formulaire demande autour : indicatifs, noms dans toutes les langues, recherche, numéros de téléphone, un sélecteur de pays et un champ téléphone.',
    },
    links: [{ label: 'GitHub', href: 'https://github.com/bambiste/countries' }],
  },
];

// ---------------------------------------------------------------------------
// Open source
// ---------------------------------------------------------------------------
export type Package = { name: string; pkg: string; href: string; blurb: L };

export const OPEN_SOURCE: Package[] = [
  {
    name: 'mix-builder',
    pkg: '@bambiste/mix-builder',
    href: 'https://github.com/bambiste/mix-builder',
    blurb: {
      en: 'A fast esbuild and Rollup library bundler with multi-format output, CDN globals and per-file gzip size reports.',
      fr: 'Un bundler de bibliothèques rapide, sur esbuild et Rollup : sortie multi-format, globales CDN et taille gzip par fichier.',
    },
  },
  {
    name: 'mappel',
    pkg: 'mappel',
    href: 'https://github.com/bambiste/mappel',
    blurb: {
      en: 'Generates the import map a page needs from a workspace, resolving every transitive subpath through each package’s exports.',
      fr: 'Génère l’import map dont une page a besoin à partir d’un workspace, en résolvant chaque sous-chemin via les exports de chaque paquet.',
    },
  },
  {
    name: 'mix-env',
    pkg: '@bambiste/mix-env',
    href: 'https://github.com/bambiste/mix-builder/tree/main/packages/mix-env',
    blurb: {
      en: 'Syncs .env files with GitHub Actions secrets across a monorepo, then writes them back into files locally, in CI or on a VPS.',
      fr: 'Synchronise les fichiers .env avec les secrets GitHub Actions d’un monorepo, puis les réécrit en fichiers en local, en CI ou sur un VPS.',
    },
  },
  {
    name: 'Medusa plugins',
    pkg: '@bambiste/medusa-*',
    href: 'https://github.com/bambiste/medusa-plugins',
    blurb: {
      en: 'Plugins for MedusaJS v2: barcode lookup, Odoo sync, QR codes, product extensions, social commerce and stories.',
      fr: 'Des plugins pour MedusaJS v2 : codes-barres, synchronisation Odoo, QR codes, extensions produit, social commerce et stories.',
    },
  },
];

// ---------------------------------------------------------------------------
// Capabilities
// ---------------------------------------------------------------------------
export type Capability = { id: string; label: L; items: string };

export const CAPABILITIES: Capability[] = [
  {
    id: 'frameworks',
    label: { en: 'Frameworks & reactivity', fr: 'Frameworks & réactivité' },
    items: 'TC39 signals, JSX to DOM compilation, SSR, SSG, hydration',
  },
  {
    id: 'product',
    label: { en: 'Product engineering', fr: 'Développement produit' },
    items: 'TypeScript, Angular, React, React Native, Electron, Python, Flask',
  },
  {
    id: 'cloud',
    label: { en: 'Platform & cloud', fr: 'Plateforme & cloud' },
    items: 'Google Cloud, Firestore, Cloud Vision, Google Ads API, Cloudflare',
  },
  {
    id: 'tooling',
    label: { en: 'Tooling', fr: 'Outillage' },
    items: 'pnpm and Nx monorepos, changesets, Vitest, bundlers, import maps',
  },
];

// ---------------------------------------------------------------------------
// Search: titles, descriptions and structured data per language
// ---------------------------------------------------------------------------
export const SEO = {
  title: {
    en: 'Ibrahima Touré, Software Engineer in Dakar, Senegal',
    fr: 'Ibrahima Touré, Ingénieur logiciel à Dakar, Sénégal',
  } as L,
  description: {
    en: 'Full-stack software engineer and web developer based in Dakar, Senegal. Co-founder & CTO of Adafri and author of Fluixi, a reactive JavaScript framework. Open to remote and international roles.',
    fr: 'Ingénieur logiciel et développeur web full-stack basé à Dakar, au Sénégal. Co-fondateur & CTO d’Adafri et auteur de Fluixi, un framework JavaScript réactif. Ouvert au télétravail et aux missions internationales.',
  } as L,
  keywords: {
    en: 'software engineer Dakar, web developer Senegal, full-stack developer Dakar, TypeScript, JavaScript framework, Fluixi, Ibrahima Touré',
    fr: 'ingénieur logiciel Dakar, développeur web Sénégal, développeur full-stack Dakar, TypeScript, framework JavaScript, Fluixi, Ibrahima Touré',
  } as L,
  jobTitle: {
    en: 'Full-stack Software Engineer',
    fr: 'Ingénieur logiciel full-stack',
  } as L,
  knowsAbout: [
    'Software engineering',
    'Web development',
    'TypeScript',
    'JavaScript',
    'Python',
    'Angular',
    'React',
    'Server-side rendering',
    'Reactive programming',
    'Developer tooling',
    'MedusaJS',
  ],
};
