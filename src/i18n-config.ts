export const i18n = {
  defaultLocale: 'pt',
  locales: ['en', 'pt'],
}

export type Locale = (typeof i18n)['locales'][number]
