'use client'

import { useEffect, useState } from 'react'
import { useScroll } from '@/hooks'
import { LanguageSelector, Logo, NavBackground, NavItem } from '../../atoms'
import type { TranslationProps } from '@/types/translation'

export const MobileNavMenu = ({ dictionary }: TranslationProps) => {
  const { scrolled } = useScroll()
  const [fadeIn, setFadeIn] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: dictionary.navMenu.project, href: '#project' },
    { label: dictionary.navMenu.photos, href: '#photos' },
    { label: dictionary.navMenu.data, href: '#data' },
    { label: dictionary.navMenu.contact, href: '#contact' },
  ]

  useEffect(() => {
    setFadeIn(true)
  }, [])

  const toggleMenu = () => {
    setIsOpen((state) => !state)
  }

  return (
    <>
      <nav className='fixed w-full flex justify-between items-center'>
        <div className='z-10 m-4 flex items-center w-10 h-10'>
          <Logo dictionary={dictionary} />
        </div>

        <button
          onClick={toggleMenu}
          className={`absolute top-4 right-4 h-6 flex items-center`}
        >
          <span
            className={`relative z-50 block h-[1px] w-7 bg-transparent content-[''] before:absolute before:top-[-0.35rem] before:z-50 before:block before:h-full before:w-full before:bg-white before:transition-all before:duration-200 before:ease-out before:content-[''] after:absolute after:right-0 after:bottom-[-0.35rem] after:block after:h-full after:w-full after:bg-white after:transition-all after:duration-200 after:ease-out after:content-[''] ${
              isOpen
                ? 'bg-transparent before:top-1 before:w-full before:rotate-45 before:transform after:bottom-0 after:w-full after:-rotate-45 after:transform'
                : ''
            }`}
          />
        </button>

        <NavBackground dictionary={dictionary} />

        <div
          className={`fixed z-[11] h-full w-full bg-black/50 backdrop-blur-sm ${
            isOpen ? 'block' : 'hidden'
          }`}
        />

        <div
          className={`fixed top-0 right-0 z-[40] h-full w-full flex flex-col items-end overflow-y-auto overscroll-y-none transition duration-500 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className='flex flex-col float-right min-h-full w-[85%] bg-zinc-900 px-6 pt-10 shadow-2xl'>
            <menu>
              <LanguageSelector />
              {navItems.map((item, index) => (
                <NavItem key={index} {...item} />
              ))}
            </menu>
          </div>
        </div>
      </nav>
    </>
  )
}