import type { TranslationProps } from '../../../types/translation'
import { SectionTitle } from '../../atoms'
import { Accordion } from '../../molecules'

const createMarkup = (html: string) => {
  return { __html: html.replace(/<a /g, '<a class="underline" ') }
}

export const ProjectSection = ({ dictionary }: TranslationProps) => (
  <section id='project' className='container mx-auto max-w-screen-md px-4'>
    <div className='hidden sm:block text-center'>
      <SectionTitle title={dictionary.projectSection.title} />
    </div>

    <p className='text-2xl mb-5'>{dictionary.projectSection.subtitle}</p>

    <p className='mb-3'>{dictionary.projectSection.content.paragraph1}</p>
    <p>{dictionary.projectSection.content.paragraph2}</p>

    <Accordion title={dictionary.projectSection.accordion.lightPollutionTitle}>
      <p className='mb-3'>
        {dictionary.projectSection.accordion.lightPollutionContent.paragraph1}
      </p>
      <p className='mb-3'>
        {dictionary.projectSection.accordion.lightPollutionContent.paragraph2}
      </p>
      <p>
        {dictionary.projectSection.accordion.lightPollutionContent.paragraph3}
      </p>
    </Accordion>

    <Accordion title={dictionary.projectSection.accordion.impactTitle}>
      <p className='mb-3'>
        {dictionary.projectSection.accordion.impactContent.paragraph1}
      </p>

      <p className='text-xl my-5'>
        {dictionary.projectSection.accordion.impactContent.reduceTitle}
      </p>

      <p>{dictionary.projectSection.accordion.impactContent.reduceContent}</p>

      <ul className='list-disc pl-5 space-y-2 pt-2'>
        {dictionary.projectSection.accordion.impactContent.listItems.map(
          (item, index) => (
            <li key={index}>{item}</li>
          )
        )}
      </ul>
    </Accordion>

    <Accordion title={dictionary.projectSection.accordion.worldHeritageTitle}>
      <p
        dangerouslySetInnerHTML={createMarkup(
          dictionary.projectSection.accordion.worldHeritageContent
        )}
      />
    </Accordion>
  </section>
)
