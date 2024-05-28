import Image from 'next/image'
import logoImg from '../../../../public/logo.webp'

export const Logo = () => (
  <div className='w-full flex justify-center flex-col mt-5 items-center gap-4'>
    <Image
      priority
      width={150}
      height={150}
      src={logoImg}
      alt='logo noite no cerrado'
    />

    <p className='text-3xl'>Noite no Cerrado</p>
  </div>
)
