import type { TranslationProps } from '../../../types/translation'
import { SectionTitle } from '../../atoms'

export const PhotosSection = ({ dictionary }: TranslationProps) => (
  <section id='photos' className='text-center'>
    <SectionTitle title={dictionary.photosSection.title} />
    ...
  </section>
)
