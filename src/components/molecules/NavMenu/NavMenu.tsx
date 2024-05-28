interface NavItemProps {
  title: string
}

const NavItem = ({ title }: NavItemProps) => (
  <li className="h-[40px] flex items-center justify-center p-8 cursor-pointer">
    {title}
  </li>
)

export const NavMenu = () => {
  return (
    <div className="px-4 container mx-auto">
      <nav className="w-full rounded-lg bg-gray-700 text-white transition-transform">
        <div className="w-full flex justify-center">
          <ul className="w-full grid grid-cols-5 divide-x divide-[#69707C]">
            <NavItem title="O Projeto" />
            <NavItem title="Fotos" />
            <NavItem title="Dados" />
            <NavItem title="Specs" />
            <NavItem title="Contato" />
          </ul>
        </div>
      </nav>
    </div>
  )
}
