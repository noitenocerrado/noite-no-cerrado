import type { TranslationProps } from '../../../types/translation'
import { SectionTitle } from '../../atoms'
import { LightPollutionGallery } from '../../molecules'

export const PhotosSection = ({
  dictionary,
}: {
  dictionary: TranslationProps
}) => (
  <section id='photos' className='text-center'>
    <SectionTitle title={dictionary.photosSection.title} />

    <div className='container m-auto'>
      <LightPollutionGallery dictionary={dictionary} />
    </div>
  </section>
)
