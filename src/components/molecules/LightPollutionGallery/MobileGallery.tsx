import { TranslationProps } from '@/types/translation'
import Image from 'next/image'
import ReactImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

export interface GalleryProps extends TranslationProps {
  images: {
    description: string
    thumbnail: string
    original: string
    blurDataURL: string
  }[]
}

export const MobileGallery = ({ dictionary, images }: GalleryProps) => (
  <ReactImageGallery
    showPlayButton={false}
    items={images}
    renderItem={({ original, description }) => (
      <div className='w-full flex flex-col items-center justify-center'>
        <div className='w-full flex justify-center relative'>
          <Image
            alt={description || ''}
            className='rounded-lg'
            width={1614}
            height={1291}
            src={original}
            placeholder='blur'
            blurDataURL={
              images.find((image) => image.description === description)
                ?.blurDataURL
            }
          />
        </div>
        {/* @ts-ignore */}
        <p className='image-gallery-description'>{`${dictionary.photosSection.pl_gallery[description].description}`}</p>
      </div>
    )}
  />
)
