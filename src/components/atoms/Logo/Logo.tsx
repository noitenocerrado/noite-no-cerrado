'use client'
import Image from 'next/image'
import Link from 'next/link'
import type { TranslationProps } from '@/types/translation'
import { useTranslatedPath } from '@/hooks'
import logoImg from '../../../../public/logo.webp'

export const Logo = ({ dictionary }: { dictionary: TranslationProps }) => {
  const fullPath = useTranslatedPath({ href: '/' })

  return (
    <Link href={fullPath}>
      <Image priority src={logoImg} alt={dictionary.navMenu.logoImageAlt} />
    </Link>
  )
}
