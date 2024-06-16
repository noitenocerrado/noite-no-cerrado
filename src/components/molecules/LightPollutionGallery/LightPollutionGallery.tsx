'use client'

import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import { TranslationProps } from '../../../types/translation'
import { images } from './images'

export const LightPollutionGallery = ({ dictionary }: TranslationProps) => (
  <div className='w-full flex justify-center'>
    <div className='w-1/2'>
      <ImageGallery items={images} />
    </div>
  </div>
)
