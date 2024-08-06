import Link from 'next/link'
import type { TranslationProps } from '../../../types/translation'
import { SectionTitle } from '../../atoms'

interface SectionItemProps {
  dictionary: TranslationProps
  title: string
  description: string
  info: {
    date: string
    timeOfCapture: string
    place: {
      coordinates: string
      mapsUrl: string
    }
  }
}

const SectionItem = ({
  dictionary,
  title,
  description,
  info,
}: SectionItemProps) => {
  return (
    <div className='mb-4 md:mb-8'>
      <h2 className='text-2xl mb-2 md:text-3xl md:mb-4'>{title}</h2>

      <p className='text-sm md:text-xl'>{description}</p>

      <div className='text-left mt-3'>
        <p>
          {dictionary.dataSection.labels.date}: {info.date}
        </p>
        <p>
          {dictionary.dataSection.labels.time}: {info.timeOfCapture}
        </p>
        <p>
          {dictionary.dataSection.labels.place}: {info.place.coordinates}
        </p>
        <p>
          {dictionary.dataSection.labels.maps}:{' '}
          <Link
            href={info.place.mapsUrl}
            rel='noopener noreferrer'
            target='_blank'
          >
            {info.place.mapsUrl}
          </Link>
        </p>
      </div>
    </div>
  )
}

export const DataSection = ({
  dictionary,
}: {
  dictionary: TranslationProps
}) => (
  <section id='data' className='text-center'>
    <SectionTitle title={dictionary.dataSection.title} />

    <SectionItem
      dictionary={dictionary}
      title={dictionary.dataSection.content.firstStop.title}
      description={dictionary.dataSection.content.firstStop.description}
      info={dictionary.dataSection.content.firstStop.info}
    />
    <SectionItem
      dictionary={dictionary}
      title={dictionary.dataSection.content.secondStop.title}
      description={dictionary.dataSection.content.secondStop.description}
      info={dictionary.dataSection.content.secondStop.info}
    />
    <SectionItem
      dictionary={dictionary}
      title={dictionary.dataSection.content.thirdStop.title}
      description={dictionary.dataSection.content.thirdStop.description}
      info={dictionary.dataSection.content.thirdStop.info}
    />
    <SectionItem
      dictionary={dictionary}
      title={dictionary.dataSection.content.fourthStop.title}
      description={dictionary.dataSection.content.fourthStop.description}
      info={dictionary.dataSection.content.fourthStop.info}
    />
  </section>
)
