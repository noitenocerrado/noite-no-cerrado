import { MobileNavMenu, NavMenu } from '@/components'
import { getDictionary } from '../../getDictionary'
import { Locale } from '../../i18n-config'

export const Home = async ({
  params: { lang },
}: {
  params: { lang: Locale }
}) => {
  const dictionary = await getDictionary(lang)

  return (
    <main className='flex flex-col gap-5 bg-zinc-950 text-white relative'>
      <div className='hidden sm:block mb-32 md:mb-56'>
        <NavMenu dictionary={dictionary} />
      </div>

      <div className='sm:hidden'>
        <MobileNavMenu dictionary={dictionary} />
      </div>
    </main>
  )
}

export default Home
