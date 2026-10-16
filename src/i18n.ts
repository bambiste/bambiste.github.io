export type Lang = 'en' | 'fr';
export type L = Record<Lang, string>;

// One module-level signal drives the page language. Toggling it re-runs only the text nodes
// that read it. The server renders English; the client switches after hydration.
export const lang = $signal<Lang>('en');

/** Bilingual string for the current language. Reactive when read inside a thunk: `{() => t(x)}`. */
export const t = (s: L): string => s[lang()];
