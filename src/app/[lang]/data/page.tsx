import { DataSection } from '@/components'
import { getDictionary } from '../../../getDictionary'
import { Locale } from '../../../i18n-config'

const Photos = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(lang)

  return (
    <div className='flex flex-col px-10 h-full sm:px-6 justify-between'>
      <div className='mb-16 container m-auto'>
        <DataSection dictionary={dictionary} />
      </div>
    </div>
  )
}

export default Photos
