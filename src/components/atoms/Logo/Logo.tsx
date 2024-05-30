import Image from 'next/image'
import type { TranslationProps } from '@/types/translation'
import Link from 'next/link'
import logoImg from '../../../../public/logo.webp'

export const Logo = ({ dictionary }: TranslationProps) => (
  <Link href='/'>
    <Image priority src={logoImg} alt={dictionary.navMenu.logoImageAlt} />
  </Link>
)
