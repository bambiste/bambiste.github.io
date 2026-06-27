import { createSignal } from '@fluixi/reactive/signal';

export type Lang = 'en' | 'fr';
export type L = Record<Lang, string>;

// A single module-level signal drives the whole page's language. Toggling it re-runs only the
// reactive text nodes that read it — no reload, no route change. (Fine for a prerendered single
// page: the server renders once with the default locale, the client hydrates the same.)
const [lang, setLang] = createSignal<Lang>('en');
export { lang };
export const toggleLang = () => setLang((l) => (l === 'en' ? 'fr' : 'en'));

/** Read a bilingual string for the current language. Reactive when read inside a thunk: `{() => t(x)}`. */
export const t = (s: L): string => s[lang()];
