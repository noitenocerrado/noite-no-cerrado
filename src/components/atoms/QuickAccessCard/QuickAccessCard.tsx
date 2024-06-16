'use client'
import { useTranslatedPath } from '@/hooks'

export const QuickAccessCard = ({
  title,
  href,
}: {
  title: string
  href: string
}) => {
  const fullPath = useTranslatedPath({ href })

  return (
    <a
      href={fullPath}
      className='py-1 bg-zinc-900 rounded-lg border border-gray-400 shadow-md hover:bg-gray-700 transition flex justify-center'
    >
      <h2 className='text-lg font-bold tracking-tight text-gray-300'>
        {title}
      </h2>
    </a>
  )
}
