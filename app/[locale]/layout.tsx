import type { Metadata, Viewport } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { GeistSans } from 'geist/font/sans'
import { fraunces } from '../fonts'
import Footer from '@/components/Footer'
import { MotionProvider } from '@/components/MotionProvider'
import { routing } from '@/i18n/routing'
import '../globals.css'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export const viewport: Viewport = {
  themeColor: '#16263a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://owlydev.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  applicationName: 'OwlyDev',
  title: {
    default: 'OwlyDev | Desarrollo de Software y Soluciones Digitales',
    template: '%s | OwlyDev',
  },
  description:
    'Transforma tu negocio con desarrollo de software a medida y landing pages profesionales. Soluciones digitales escalables por OwlyDev Medellín.',
  keywords: [
    'desarrollo de software',
    'landing pages profesionales',
    'soluciones digitales',
    'OwlyDev Medellín',
    'Next.js',
    'ecommerce',
    'software',
  ],
  authors: [{ name: 'OwlyDev', url: baseUrl }],
  creator: 'OwlyDev',
  alternates: { canonical: baseUrl },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
      { url: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'OwlyDev | Desarrollo de Software y Soluciones Digitales',
    description:
      'Transforma tu negocio con desarrollo de software a medida y landing pages profesionales. Soluciones digitales escalables por OwlyDev Medellín.',
    url: baseUrl,
    siteName: 'OwlyDev',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/branding/logo.webp',
        width: 1200,
        height: 630,
        alt: 'OwlyDev - Desarrollo de Software y Soluciones Digitales',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OwlyDev | Desarrollo de Software y Soluciones Digitales',
    description:
      'Transforma tu negocio con desarrollo de software a medida y landing pages profesionales.',
    images: ['/branding/logo.webp'],
  },
  appleWebApp: {
    capable: true,
    title: 'OwlyDev',
    statusBarStyle: 'black-translucent',
  },
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!routing.locales.includes(locale as 'es' | 'en')) notFound()

  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className={`${fraunces.variable} ${GeistSans.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="antialiased overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'OwlyDev',
              url: baseUrl,
              logo: `${baseUrl}/branding/logo.webp`,
              email: 'owlydev.team@gmail.com',
              description:
                'Desarrollo de software y soluciones digitales en Medellín. Expertos en landing pages profesionales y desarrollo web a medida.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Medellín',
                addressRegion: 'Antioquia',
                addressCountry: 'CO',
              },
              image: `${baseUrl}/branding/logo.webp`,
            }),
          }}
        />
        <NextIntlClientProvider messages={messages}>
          <MotionProvider>
            {children}
            <Footer />
          </MotionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
