import {
  AboutUsSection,
  Footer,
  MobileNavMenu,
  NavMenu,
  PhotosSection,
  ProjectSection,
} from '@/components'
import { Locale } from '../../i18n-config'
import { getDictionary } from '../../getDictionary'

const Home = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(lang)

  return (
    <main className='flex flex-col gap-5 bg-black text-white relative'>
      <div className='flex flex-col px-10 h-full mt-20 sm:px-6 sm:mt-36 justify-between'>
        <div className='mb-16'>
          <ProjectSection dictionary={dictionary} />
        </div>

        <div className='mb-16'>
          <PhotosSection dictionary={dictionary} />
        </div>

        <div className='mb-16'>
          <AboutUsSection dictionary={dictionary} />
        </div>

        <Footer dictionary={dictionary} />
      </div>
    </main>
  )
}

export default Home
