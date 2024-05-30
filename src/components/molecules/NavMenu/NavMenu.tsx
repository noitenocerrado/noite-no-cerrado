'use client'

import { useEffect, useState } from 'react'
import { useScroll } from '@/hooks'
import type { TranslationProps } from '@/types/translation'
import {
  LanguageSelector,
  Logo,
  NavBackground,
  NavItem,
  SocialIcons,
} from '../../atoms'

export const NavMenu = ({ dictionary }: TranslationProps) => {
  const { scrolled } = useScroll()
  const [fadeIn, setFadeIn] = useState(false)

  const navItemLabelsLeftGroup = [
    { label: dictionary.navMenu.project, href: '#project' },
    { label: dictionary.navMenu.photos, href: '#photos' },
  ]

  const navItemLabelsRightGroup = [
    { label: dictionary.navMenu.data, href: '#data' },
    { label: dictionary.navMenu.contact, href: '#contact' },
  ]

  useEffect(() => {
    setFadeIn(true)
  }, [])

  return (
    <nav
      className={`z-10 pt-6 md:pt-4 fixed w-full bg-black text-white ${
        scrolled ? 'py-2' : 'py-4'
      } transition-all duration-300 ${
        fadeIn ? 'fade-in-left-to-right' : 'opacity-0'
      }`}
    >
      <NavBackground dictionary={dictionary} />

      <div
        className={`absolute flex justify-around z-20 top-2 right-4 transition-opacity duration-300 ${
          scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className='mx-4'>
          <SocialIcons />
        </div>

        <LanguageSelector />
      </div>

      <div className='container mx-auto flex justify-between items-center relative z-10'>
        <ul className='flex space-x-4 flex-1 justify-evenly items-center'>
          {navItemLabelsLeftGroup.map(({ label, href }) => (
            <NavItem key={label} label={label} href={href} />
          ))}
        </ul>

        <div
          className={`flex items-center transition-all duration-300 ${
            scrolled ? 'h-10 w-10' : 'h-20 w-20 md:w-28 md:h-28'
          }`}
        >
          <Logo dictionary={dictionary} />
        </div>

        <ul className='flex space-x-4 flex-1 justify-evenly items-center'>
          {navItemLabelsRightGroup.map(({ label, href }) => (
            <NavItem key={label} label={label} href={href} />
          ))}
        </ul>
      </div>
    </nav>
  )
}
