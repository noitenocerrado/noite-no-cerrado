'use client'

import { sendGAEvent } from '@next/third-parties/google'
import { SocialIcons } from '../../atoms'
import type { TranslationProps } from '../../../types/translation'

export const Footer = ({ dictionary }: TranslationProps) => {
  const handleClickSocialIcon = (label: string) => {
    sendGAEvent('event', 'personal_social_icon', {
      action: 'click',
      value: `${label}`,
    })
  }

  return (
    <div className='container mx-auto flex flex-col md:flex-row gap-2 py-4 justify-evenly items-center text-white'>
      <div className='flex justify-center'>
        <p className='text-[0.7rem] text-center'>
          {dictionary.footer.copyright}
        </p>
      </div>

      <div className='flex justify-center'>
        <p className='text-[0.7rem] text-center px-2 sm:px-0'>
          {dictionary.footer.developedBy}
          <a
            className='mx-1 underline whitespace-nowrap'
            href='https://github.com/thebinaryfelix'
            target='_blank'
            onClick={() => handleClickSocialIcon('github_thebinaryfelix')}
          >
            Mateus Félix
          </a>
          {dictionary.footer.contribution}
          <a
            className='mx-1 underline whitespace-nowrap'
            href='https://github.com/cometsinthesky'
            target='_blank'
            onClick={() => handleClickSocialIcon('github_cometsinthesky')}
          >
            Lucas Ferreira
          </a>
        </p>
      </div>

      <div className='flex justify-center'>
        <SocialIcons size='small' />
      </div>
    </div>
  )
}
