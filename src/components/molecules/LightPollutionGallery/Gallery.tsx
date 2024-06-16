'use client'
import { TranslationProps } from '@/types/translation'
import Image from 'next/image'

interface GalleryProps extends TranslationProps {
  images: {
    description: string
    thumbnail: string
    original: string
    blurDataURL: string
  }[]
}

const MobileGallery = ({ dictionary, images }: GalleryProps) => (
  <div className='flex overflow-x-scroll space-x-4 p-4 no-scrollbar md:hidden'>
    {images.map(({ description, original, blurDataURL }) => (
      <div key={description} className='min-w-[300px]'>
        <div className='relative'>
          <Image
            alt={description}
            width={1614}
            height={1291}
            src={original}
            placeholder='blur'
            blurDataURL={blurDataURL}
            className='rounded-lg'
          />
        </div>
      </div>
    ))}
  </div>
)

export const Gallery = ({ dictionary, images }: GalleryProps) => (
  <>
    <MobileGallery dictionary={dictionary} images={images} />

    <div className='hidden md:grid grid-cols-2 justify-items-center gap-5 lg:grid-cols-4 lg:gap-8'>
      {images.map(({ description, original, blurDataURL }) => (
        <div key={description} className='min-w-[200px] max-w-[300px]'>
          <div className='relative'>
            <Image
              alt={description}
              width={1614}
              height={1291}
              src={original}
              placeholder='blur'
              blurDataURL={blurDataURL}
              className='rounded-lg'
            />
          </div>
        </div>
      ))}
    </div>
  </>
)
