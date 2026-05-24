import { useTranslations } from 'next-intl'

export function WhyUsSectionHeader() {
  const t = useTranslations('whyUs')

  return (
    <header className="max-w-[580px]">
      <p
        className="mb-3 text-[12px] font-medium uppercase text-[var(--color-ink-quaternary)]"
        style={{ letterSpacing: 'var(--tracking-eyebrow)' }}
      >
        {t('eyebrow')}
      </p>
      <h2
        className="font-display text-[30px] leading-[1.1] text-[var(--color-ink-primary)] md:text-[40px] xl:text-[44px] 2xl:text-[48px]"
        style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50, 'wght' 500" }}
      >
        {t('heading')}
      </h2>
    </header>
  )
}
