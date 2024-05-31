import { Footer, MobileNavMenu, NavMenu } from '@/components'
import { getDictionary } from '../../getDictionary'
import { Locale } from '../../i18n-config'

export const Home = async ({
  params: { lang },
}: {
  params: { lang: Locale }
}) => {
  const dictionary = await getDictionary(lang)

  return (
    <main className='flex flex-col gap-5 bg-zinc-950 text-white relative h-screen'>
      <div className='hidden sm:block'>
        <NavMenu dictionary={dictionary} />
      </div>

      <div className='sm:hidden'>
        <MobileNavMenu dictionary={dictionary} />
      </div>

      <div className='flex flex-col h-full mt-32 justify-between'>
        <div className='mb-8'>{/* TODO: Add content sections */}</div>

        <Footer dictionary={dictionary} />
      </div>
    </main>
  )
}

export default Home
