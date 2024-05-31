import type { Metadata } from 'next'
import { Locale, i18n } from '../../i18n-config'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Noite no Cerrado',
  description:
    'Projeto de conscientização sobre os efeitos da poluição luminosa no Cerrado brasileiro',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'pt-BR': '/pt',
    },
  },
  openGraph: {
    url: 'https://noitenocerrado.vercel.app',
    siteName: 'Noite no Cerrado',
    images: 'https://noitenocerrado.vercel.app/logo.webp',
  },
}

export const generateStaticParams = async () =>
  i18n.locales.map((locale) => ({ lang: locale }))

const RootLayout = async ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { lang: Locale }
}>) => {
  return (
    <html lang={params.lang}>
      <body className='font-body'>{children}</body>
    </html>
  )
}

export default RootLayout
