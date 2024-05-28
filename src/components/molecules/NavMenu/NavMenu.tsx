'use client'

interface NavItemProps {
  title: string

  onClick: (title: string) => void
}

const NavItem = ({ title, onClick }: NavItemProps) => (
  <li className="h-[40px] flex items-center justify-center p-8 cursor-pointer" onClick={() => onClick(title)}>
    {title}
  </li>
)

interface NavMenuProps {
  onClickItem: (title: string) => void
}

export const NavMenu = ({ onClickItem }: NavMenuProps) => {
  return (
    <div className="px-4 container mx-auto">
      <nav className="w-full rounded-lg bg-gray-700 text-white transition-transform">
        <div className="w-full flex justify-center">
          <ul className="w-full grid grid-cols-5 divide-x divide-[#69707C]">
            <NavItem title="O Projeto" onClick={onClickItem} />
            <NavItem title="Fotos" onClick={onClickItem} />
            <NavItem title="Dados" onClick={onClickItem} />
            <NavItem title="Specs" onClick={onClickItem} />
            <NavItem title="Contato" onClick={onClickItem} />
          </ul>
        </div>
      </nav>
    </div>
  )
}
