import Link from 'next/link'

interface NavItemProps {
  label: string
  href: string
}

export const NavItem = ({ label, href }: NavItemProps) => (
  <Link href={href} className='hover:text-emerald-300 md:text-xl xs:text-xs'>
    <li className='relative group select-none'>
      {label}

      <div className='absolute left-0 right-0 h-1 bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out'></div>
    </li>
  </Link>
)
