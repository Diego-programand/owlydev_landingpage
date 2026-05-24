'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { HeroCTAGroup } from './HeroCTAGroup'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

export function HeroAnimatedContent() {
  const shouldReduceMotion = useReducedMotion()
  const t = useTranslations('hero')
  const locale = useLocale()

  const whatsappUrl =
    locale === 'en'
      ? "https://wa.me/573028584906?text=Hi%2C+I'd+like+to+know+more+about+OwlyDev"
      : 'https://wa.me/573028584906?text=Hola%2C+quiero+saber+m%C3%A1s+sobre+OwlyDev'

  const fadeUp = (delay: number, y = 12, duration = 0.4) =>
    shouldReduceMotion
      ? {
          initial: { opacity: 1 as number, y: 0 as number },
          animate: { opacity: 1 as number, y: 0 as number },
          transition: { duration: 0.12 },
        }
      : {
          initial: { opacity: 0 as number, y: y as number },
          animate: { opacity: 1 as number, y: 0 as number },
          transition: {
            duration,
            ease: EASE_OUT_EXPO,
            delay: delay / 1000,
          },
        }

  return (
    <div className="flex flex-col gap-4 lg:gap-5">
      <motion.span
        {...fadeUp(0, 8)}
        className="block text-[12px] font-medium uppercase tracking-[0.08em] text-[var(--color-ink-quaternary)]"
      >
        {t('eyebrow')}
      </motion.span>

      <motion.h1
        {...fadeUp(80, 16, 0.7)}
        className="font-display text-[2.625rem] leading-[1.05] tracking-[-0.02em] sm:text-[3.25rem] lg:text-[4.5rem]"
      >
        {t('headline')}
      </motion.h1>

      <motion.p
        {...fadeUp(320, 12)}
        className="max-w-[var(--max-prose)] text-[1.125rem] leading-[1.65] text-[var(--color-ink-tertiary)]"
      >
        {t('subhead')}
      </motion.p>

      <HeroCTAGroup
        copy={{
          ctaPrimary: t('ctaPrimary'),
          ctaSecondary: t('ctaSecondary'),
          whatsappUrl,
        }}
        reducedMotion={!!shouldReduceMotion}
      />
    </div>
  )
}
