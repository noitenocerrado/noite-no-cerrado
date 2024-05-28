import { LanguageSelector, Logo } from '../../atoms'

const navItemLabelsLeftGroup = [
  { label: 'O Projeto', href: '#project' },
  { label: 'Fotos', href: '#photos' },
]

const navItemLabelsRightGroup = [
  { label: 'Dados', href: '#data' },
  { label: 'Contato', href: '#contact' },
]

interface NavItemProps {
  label: string
  href: string
}

const NavItem = ({ label, href }: NavItemProps) => (
  <li className='relative group select-none'>
    <a href={href} className='hover:text-gray-400 text-xl'>
      {label}
    </a>
    <div className='absolute left-0 right-0 h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out'></div>
  </li>
)

export const NavMenu = () => (
  <nav className='bg-black text-white py-4'>
    <div className='container mx-auto flex justify-between items-center'>
      <ul className='flex space-x-4 flex-1 justify-evenly items-center'>
        {navItemLabelsLeftGroup.map(({ label, href }) => (
          <NavItem key={label} label={label} href={href} />
        ))}
      </ul>

      <div className='flex items-center'>
        <Logo />
      </div>

      <ul className='flex space-x-4 flex-1 justify-evenly items-center'>
        {navItemLabelsRightGroup.map(({ label, href }) => (
          <NavItem key={label} label={label} href={href} />
        ))}

        <LanguageSelector />
      </ul>
    </div>
  </nav>
)
