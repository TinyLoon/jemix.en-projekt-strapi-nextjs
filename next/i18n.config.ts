export const i18n = {
  locales: ['de', 'en', 'es'],
  defaultLocale: 'de',
};

export type Locale = (typeof i18n)['locales'][number];