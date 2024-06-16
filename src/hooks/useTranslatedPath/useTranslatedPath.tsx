import { usePathname } from 'next/navigation'

export const useTranslatedPath = ({ href }: { href: string }) => {
  const pathname = usePathname()

  const currentLanguage = pathname.split('/')[1]

  const fullPath = href.startsWith('/')
    ? `/${currentLanguage}${href}`
    : `/${currentLanguage}${href}`

  return fullPath
}
