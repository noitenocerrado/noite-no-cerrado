interface SectionTitleProps {
  title: string
}

export const SectionTitle = ({ title }: SectionTitleProps) => (
  <div className="flex flex-col items-center">
    <p className='mb-2 text-3xl md:text-5xl font-title text-center'>{title}</p>
    <div className='mb-10 h-1 w-full max-w-[600px] bg-gradient-radial from-white to-transparent via-transparent mx-auto' />
  </div>
)
