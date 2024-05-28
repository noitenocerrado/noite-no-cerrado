'use client'

import { usePathname, useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'

export const LanguageSelector = () => {
  const router = useRouter()

  const pathname = usePathname()

  const [language, setLanguage] = useState(pathname.replace('/', ''))

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value
    setLanguage(selectedLanguage)
    router.push(selectedLanguage === 'pt' ? '/pt' : '/en')
  }

  return (
    <li className='relative group'>
      <div className='relative inline-block text-left'>
        <select
          value={language}
          onChange={handleLanguageChange}
          className='appearance-none cursor-pointer bg-black text-white text-sm border border-gray-600 p-2 rounded-md hover:border-gray-400 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 pr-8'
        >
          <option value='pt'>Português (Brasil)</option>
          <option value='en'>English</option>
        </select>

        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white'>
          <svg
            className='h-4 w-4 fill-current'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path d='M7 10l5 5 5-5H7z' />
          </svg>
        </div>
      </div>
    </li>
  )
}
