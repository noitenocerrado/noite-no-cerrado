'use client'

import { sendGAEvent } from '@next/third-parties/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItemProps {
  label: string
  href: string
}

export const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname()

  const currentLanguage = pathname.split('/')[1]

  const fullPath = href.startsWith('/')
    ? `/${currentLanguage}${href}`
    : `/${currentLanguage}${href}`

  const handleClick = () => {
    sendGAEvent('event', `click:nav_item:${label}`)
  }

  return (
    <Link
      href={fullPath}
      className='hover:text-[#19EA5C] md:text-xl xs:text-xs'
      onClick={handleClick}
    >
      <li className='relative group select-none'>
        {label}
        <div className='absolute left-0 right-0 h-1 bg-gradient-radial from-[#19EA5C] to-transparent via-transparent via-80% transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out' />
      </li>
    </Link>
  )
}
