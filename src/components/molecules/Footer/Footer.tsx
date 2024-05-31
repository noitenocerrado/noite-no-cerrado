import { TranslationProps } from '../../../types/translation'
import { SocialIcons } from '../../atoms'

export const Footer = ({ dictionary }: TranslationProps) => (
  <div className='container mx-auto flex flex-col md:flex-row gap-2 py-4 justify-evenly items-center text-white'>
    <div className='flex justify-center'>
      <p className='text-[0.7rem] text-center'>{dictionary.footer.copyright}</p>
    </div>

    <div className='flex justify-center'>
      <p className='text-[0.7rem] text-center px-2 sm:px-0'>
        {dictionary.footer.developedBy}
        <a
          className='mx-1 underline whitespace-nowrap'
          href='https://github.com/thebinaryfelix'
          target='_blank'
        >
          Mateus Félix
        </a>
        {dictionary.footer.contribution}
        <a
          className='mx-1 underline whitespace-nowrap'
          href='https://github.com/cometsinthesky'
          target='_blank'
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
