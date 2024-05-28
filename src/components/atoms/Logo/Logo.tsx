import Image from 'next/image'
import logoImg from '../../../../public/logo.webp'

const imageSize = 180

export const Logo = () => (
  <Image
    priority
    width={imageSize}
    height={imageSize}
    src={logoImg}
    alt='logo noite no cerrado'
  />
)
