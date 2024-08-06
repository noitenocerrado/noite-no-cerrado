import 'server-only'
import type { Locale } from './i18n-config'
import type { TranslationProps } from './types/translation'

const dictionaries: { [key: string]: () => Promise<{}> } = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  pt: () => import('./dictionaries/pt.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale): Promise<any> =>
  (dictionaries[locale]?.() ?? dictionaries.en()) as Promise<any>
