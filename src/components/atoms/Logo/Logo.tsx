import Image from 'next/image'
import type { TranslationProps } from '@/types/translation'
import logoImg from '../../../../public/logo.webp'

export const Logo = ({ dictionary }: TranslationProps) => (
  <Image priority src={logoImg} alt={dictionary.navMenu.logoImageAlt} />
)
