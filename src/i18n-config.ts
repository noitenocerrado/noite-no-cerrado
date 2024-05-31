export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'pt'],
}

export type Locale = (typeof i18n)['locales'][number]
