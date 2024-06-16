import type { TranslationProps } from '../../../types/translation'
import { SectionTitle } from '../../atoms'
import { LightPollutionGallery } from '../../molecules'

export const PhotosSection = ({ dictionary }: TranslationProps) => (
  <section id='photos' className='text-center'>
    <SectionTitle title={dictionary.photosSection.title} />

    <LightPollutionGallery dictionary={dictionary} />
  </section>
)
