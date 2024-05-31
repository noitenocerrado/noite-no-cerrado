import type { TranslationProps } from '../../../types/translation'
import { SectionTitle } from '../../atoms'

export const ProjectSection = ({ dictionary }: TranslationProps) => (
  <section id='project' className='text-center'>
    <div className='hidden sm:block'>
      <SectionTitle title={dictionary.projectSection.title} />
    </div>
    {/* TODO: Add content */}
    ...
  </section>
)
