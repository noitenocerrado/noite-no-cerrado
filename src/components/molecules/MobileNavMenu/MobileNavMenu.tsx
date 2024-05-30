'use client'

import { useState } from 'react'
import {
  LanguageSelector,
  Logo,
  NavBackground,
  NavItem,
  SocialIcons,
} from '../../atoms'
import type { TranslationProps } from '@/types/translation'

export const MobileNavMenu = ({ dictionary }: TranslationProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: dictionary.navMenu.project, href: '#project' },
    { label: dictionary.navMenu.photos, href: '#photos' },
    { label: dictionary.navMenu.data, href: '#data' },
    { label: dictionary.navMenu.contact, href: '#contact' },
  ]

  const toggleMenu = () => {
    setIsOpen((state) => !state)
  }

  return (
    <>
      <nav className='fixed w-full flex justify-between items-center'>
        <button
          onClick={toggleMenu}
          className={`absolute top-5 right-4 h-6 flex items-center`}
        >
          <span
            className={`relative z-50 block h-[1px] w-7 bg-transparent content-[''] before:z-50 before:block before:h-full before:w-full before:bg-white before:transition-all before:duration-200 before:ease-out before:content-[''] after:block after:h-full after:w-full after:bg-white after:transition-all after:duration-200 after:ease-out after:content-[''] ${
              isOpen
                ? 'bg-transparent before:top-0 before:w-full before:rotate-45 before:transform after:bottom-0 after:w-full after:-rotate-45 after:transform'
                : 'before:absolute before:top-[-0.35rem] after:absolute after:right-0 after:bottom-[-0.35rem]'
            }`}
          />
        </button>

        <div className='z-10 m-4 flex items-center w-10 h-10'>
          <Logo dictionary={dictionary} />
        </div>

        <p className='z-10 flex-1 text-white text-center text-2xl pr-16'>
          {dictionary.navMenu.title}
        </p>

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
          <div className='flex flex-col float-right min-h-full w-[85%] bg-zinc-900 px-6 pt-3 shadow-2xl'>
            <menu>
              <LanguageSelector />
              <div className='flex flex-col divide-y mt-4'>
                {navItems.map((item) => (
                  <div key={item.label} className='py-2'>
                    <NavItem {...item} />
                  </div>
                ))}
              </div>

              <div className='mt-4 w-full flex justify-center'>
                <SocialIcons />
              </div>
            </menu>
          </div>
        </div>
      </nav>
    </>
  )
}
