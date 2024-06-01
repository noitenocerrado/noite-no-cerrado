'use client'

import { ReactNode, useRef, useState } from 'react'

interface AccordionProps {
  title: string
  children: ReactNode
}

export const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div className='mb-5'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='text-xl sm:text-2xl my-5 w-full text-left flex justify-between items-center'
      >
        {title}
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          ▼
        </span>
      </button>
      <div
        ref={contentRef}
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
        style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight : 0 }}
      >
        <div className='mt-2'>{children}</div>
      </div>
    </div>
  )
}
