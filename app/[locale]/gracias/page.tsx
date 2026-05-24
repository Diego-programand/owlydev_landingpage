import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { GraciasContent } from './GraciasContent'

export const metadata: Metadata = {
  title: 'Mensaje enviado — OwlyDev',
  robots: { index: false, follow: false },
}

export default async function GraciasPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'confirmation' })
  const backHref = locale === 'en' ? '/en' : '/'

  return (
    <GraciasContent
      heading={t('heading')}
      body={t('body')}
      backLink={t('backLink')}
      backHref={backHref}
    />
  )
}
