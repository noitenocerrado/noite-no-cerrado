interface NavItemProps {
  label: string
  href: string
}

export const NavItem = ({ label, href }: NavItemProps) => (
  <li className='relative group select-none'>
    <a href={href} className='hover:text-emerald-300 md:text-xl xs:text-xs'>
      {label}
    </a>
    <div className='absolute left-0 right-0 h-1 bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out'></div>
  </li>
)
