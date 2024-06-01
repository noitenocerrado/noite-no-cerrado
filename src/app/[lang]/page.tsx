import { AboutUsSection, ProjectSection } from '@/components'
import { Locale } from '../../i18n-config'
import { getDictionary } from '../../getDictionary'

const Home = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(lang)

  return (
    <div className='flex flex-col px-10 h-full mt-20 sm:px-6 sm:mt-36 justify-between'>
      <div className='mb-16'>
        <ProjectSection dictionary={dictionary} />
      </div>

      <div className='mb-16'>
        <AboutUsSection dictionary={dictionary} />
      </div>
    </div>
  )
}

export default Home
