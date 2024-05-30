import Link from 'next/link'
import Image from 'next/image'
import githubIcon from '../../../../public/github150.png'
import instagramIcon from '../../../../public/instagram150.png'

const githubLink = 'https://github.com/cometsinthesky/noite-no-cerrado'
const instagramLink = 'https://www.instagram.com/noitenocerrado'

interface SocialIconsProps {
  size?: string
}

export const SocialIcons = ({ size }: SocialIconsProps) => {
  let width = 20
  let height = 20
  let gap = 4

  if (size === 'large') {
    width = 40
    height = 40
    gap = 10
  }

  return (
    <div className={`flex gap-${gap} mt-1`}>
      <Link href={instagramLink} target='_blank'>
        <Image alt='' src={instagramIcon} width={width} height={height} />
      </Link>

      <Link href={githubLink} target='_blank'>
        <Image alt='' src={githubIcon} width={width} height={height} />
      </Link>
    </div>
  )
}
