'use server'
import { TranslationProps } from '@/types/translation'
import { getBase64Image } from '@/utils'
import { images } from './images'
import { Gallery } from './Gallery'

interface Images {
  description: string
  thumbnail: string
  original: string
  blurDataURL: string
}

const getImages = async (): Promise<Images[]> => {
  const imagesWithBlurData = await Promise.all(
    images.map(async (image) => {
      const blurDataURL = await getBase64Image(image.thumbnail)
      return { ...image, blurDataURL }
    })
  )
  return imagesWithBlurData
}

export const LightPollutionGallery = async ({
  dictionary,
}: {
  dictionary: TranslationProps
}) => {
  const images = await getImages()

  return (
    <div className='gallery'>
      <Gallery images={images} dictionary={dictionary} />
    </div>
  )
}
