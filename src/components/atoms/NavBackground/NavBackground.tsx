import Image from 'next/image'
import type { TranslationProps } from '@/types/translation'
import bgStarsImg from '../../../../public/bg_stars.webp'

export const NavBackground = ({ dictionary }: TranslationProps) => (
  <div>
    <div className='absolute inset-0 bg-black/10 pointer-events-none' />
    <div className='absolute inset-y-0 left-0 w-full h-full'>
      <Image
        priority
        src={bgStarsImg}
        alt={dictionary.navMenu.bgImageAlt}
        className='pointer-events-none'
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
        }}
      />
      <div className='absolute inset-0 bg-gradient-radial from-transparent via-50% via-black/60 to-black pointer-events-none' />
      <div className='absolute inset-0 bg-gradient-to-t from-black from-1% via-5% via-black/50 to-transparent to-90% pointer-events-none' />
    </div>
  </div>
)
