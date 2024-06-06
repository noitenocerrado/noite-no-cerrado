import type { TranslationProps } from '../../../types/translation'
import { SectionTitle } from '../../atoms'

export const DataSection = ({ dictionary }: TranslationProps) => (
  <section id='data' className='text-center'>
    <SectionTitle title={dictionary.dataSection.title} />
    {dictionary.common.contentToBeDefined}
  </section>
)
