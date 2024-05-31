'use client'

import { PersonInfo } from '../../molecules'
import profileImageMateus from '../../../../public/mateus-profile-512x512.png'
import profileImageLucas from '../../../../public/lucas-profile-512x512.png'
import type { TranslationProps } from '../../../types/translation'
import { SectionTitle } from '../../atoms'

export const AboutUsSection = ({ dictionary }: TranslationProps) => (
  <section id='about-us' className='container mx-auto'>
    <SectionTitle title={dictionary.aboutUs.title} />

    <div className='flex flex-col sm:grid sm:grid-cols-2 sm:items-start sm:gap-10'>
      <div className='flex justify-center'>
        <PersonInfo
          social={{
            instagram: 'https://www.instagram.com/skyframefelix',
            linkedin: 'https://www.linkedin.com/in/mateusfelix/',
          }}
          name='Mateus Félix'
          profileImgSrc={profileImageMateus}
          description={dictionary.aboutUs.collaborator1.description}
        />
      </div>

      <div className='flex justify-center'>
        <div className='mt-10 sm:mt-0'>
          <PersonInfo
            social={{
              instagram: 'https://www.instagram.com/cometsinthesky',
              linkedin: 'https://www.linkedin.com/in/lucasferreiraunb/',
              orcid: 'https://orcid.org/0000-0002-7945-6005',
            }}
            name='Lucas Ferreira'
            profileImgSrc={profileImageLucas}
            description={dictionary.aboutUs.collaborator2.description}
          />
        </div>
      </div>
    </div>
  </section>
)
