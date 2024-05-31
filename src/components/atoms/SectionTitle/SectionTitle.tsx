interface SectionTitleProps {
  title: string
}

export const SectionTitle = ({ title }: SectionTitleProps) => (
  <>
    <p className='mb-2 text-3xl md:text-5xl font-title text-center'>{title}</p>
    <div className='mb-10 h-1 w-96 bg-gradient-radial from-white to-transparent via-transparent mx-auto' />
  </>
)
