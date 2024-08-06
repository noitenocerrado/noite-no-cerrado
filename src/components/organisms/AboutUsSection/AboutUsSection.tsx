'use client'

import { PersonInfo } from '../../molecules'
import profileImageMateus from '../../../../public/mateus-profile-512x512.png'
import profileImageLucas from '../../../../public/lucas-profile-512x512.png'
import { SectionTitle } from '../../atoms'
import type { TranslationProps } from '@/types/translation'

export const AboutUsSection = ({
  dictionary,
}: {
  dictionary: TranslationProps
}) => (
  <section id='about-us' className='container mx-auto max-w-screen-xl'>
    <SectionTitle title={dictionary.aboutUs.title} />

    <div className='px-2 flex flex-col items-center sm:flex-row sm:justify-center sm:gap-20'>
      <div className='max-w-96 flex justify-center'>
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

      <div className='max-w-96 flex justify-center'>
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
