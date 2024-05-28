'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

export const LanguageSelector = () => {
  const router = useRouter()

  const pathname = usePathname()

  const currentLanguage = pathname.replace('/', '')

  const [checked, setChecked] = useState(currentLanguage !== 'pt')

  const toggleLanguage = () => {
    const selectedLanguage = checked ? 'pt' : 'en'
    setChecked(!checked)
    router.push(`/${selectedLanguage}`)
  }

  return (
    <label className='flex cursor-pointer select-none items-center'>
      <span className='mr-1 text-xl'>🇧🇷</span>
      <div className='relative'>
        <input
          type='checkbox'
          checked={checked}
          onChange={toggleLanguage}
          className='peer sr-only'
        />
        <div className='block h-5 w-8 rounded-full bg-gray-700' />
        <div
          className={`dot absolute left-1 top-1 h-3 w-3 rounded-full bg-white transition peer-checked:translate-x-full`}
        />
      </div>
      <span className='ml-1 text-xl'>🇺🇸</span>
    </label>
  )
}
