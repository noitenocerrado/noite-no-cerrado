import { AboutUsSection, Footer, MobileNavMenu, NavMenu } from '@/components'
import { Locale } from '../../i18n-config'
import { getDictionary } from '../../getDictionary'

const Home = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(lang)

  return (
    <main className='flex flex-col gap-5 bg-zinc-950 text-white relative h-full'>
      <div className='hidden sm:block'>
        <NavMenu dictionary={dictionary} />
      </div>

      <div className='sm:hidden'>
        <MobileNavMenu dictionary={dictionary} />
      </div>

      <div className='flex flex-col px-10 h-full mt-20 sm:mt-36 md:mt-40 justify-between'>
        <div className='mb-8'>
          <AboutUsSection dictionary={dictionary} />
        </div>

        <Footer dictionary={dictionary} />
      </div>
    </main>
  )
}

export default Home
