'use client'

import Image from 'next/image'
import { useScroll } from '@/hooks'
import type { TranslationProps } from '@/types/translation'
import { LanguageSelector, Logo } from '../../atoms'
import bgStarsImg from '../../../../public/bg_stars.webp'
import { useEffect, useState } from 'react'

interface NavItemProps {
  label: string
  href: string
}

const NavItem = ({ label, href }: NavItemProps) => (
  <li className='relative group select-none'>
    <a href={href} className='hover:text-emerald-300 md:text-xl xs:text-xs'>
      {label}
    </a>
    <div className='absolute left-0 right-0 h-1 bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out'></div>
  </li>
)

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
      className={`z-10 fixed w-full bg-black text-white ${
        scrolled ? 'py-2' : 'py-4'
      } transition-all duration-300 ${fadeIn ? 'fade-in-left-to-right' : 'opacity-0'}`}
    >
      <div className='absolute z-10 inset-0 bg-gradient-to-l from-white/70 to-transparent pointer-events-none' />

      <div
        className={`absolute z-20 top-2 right-4 transition-opacity duration-300 ${
          scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <LanguageSelector />
      </div>

      <div className='absolute inset-y-0 left-0 w-2/3 h-full'>
        <Image
          priority
          src={bgStarsImg}
          alt={dictionary.navMenu.bgImageAlt}
          className='pointer-events-none'
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            inset: '0px',
            objectFit: 'cover',
          }}
        />
        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-90% via-black/80 to-black pointer-events-none' />
      </div>

      <div className='container mt-2 mx-auto flex justify-between items-center relative z-10'>
        <ul className='flex space-x-4 flex-1 justify-evenly items-center'>
          {navItemLabelsLeftGroup.map(({ label, href }) => (
            <NavItem key={label} label={label} href={href} />
          ))}
        </ul>

        <div
          className={`flex items-center transition-all duration-300 ${
            scrolled ? 'h-10 w-10' : 'h-24 w-24 md:w-48 md:h-48'
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
