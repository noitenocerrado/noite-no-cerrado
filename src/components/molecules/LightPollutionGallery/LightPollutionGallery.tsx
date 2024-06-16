'use client'

import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import { TranslationProps } from '../../../types/translation'
import { images } from './images'
import Image from 'next/image'

export const LightPollutionGallery = ({ dictionary }: TranslationProps) => (
  <div className='w-full flex justify-center items-center flex-col'>
    <p className='mb-5'>{dictionary.photosSection.pl_gallery.description}</p>
    <p className='mb-2 text-xl'>EXIF</p>
    <ul className='mb-5'>
      <li>{dictionary.photosSection.pl_gallery.exif.focalLength}24mm</li>
      <li>ISO 4000</li>
      <li>{dictionary.photosSection.pl_gallery.exif.aperture}f/4</li>
      <li>{dictionary.photosSection.pl_gallery.exif.exposureTime}20s</li>
    </ul>
    <div className='xs:w-full sm:w-1/2'>
      <ImageGallery
        items={images}
        renderItem={({ original, description }) => (
          <div className='w-full pb-5 flex flex-col items-center justify-center'>
            <div className='w-full flex justify-center relative'>
              <Image alt='' width={800} height={100} src={original} />
            </div>
            {/* @ts-ignore */}
            <p className='mt-4'>{`${dictionary.photosSection.pl_gallery[description].description}`}</p>
          </div>
        )}
      />
    </div>
  </div>
)
