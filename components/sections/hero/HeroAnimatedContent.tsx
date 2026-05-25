'use client'

import { useState, useEffect } from 'react'
import { m, useReducedMotion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { HeroCTAGroup } from './HeroCTAGroup'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

export function HeroAnimatedContent() {
  const shouldReduceMotion = useReducedMotion()
  const [ready, setReady] = useState(false)
  const t = useTranslations('hero')
  const locale = useLocale()

  useEffect(() => {
    const raf = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  const whatsappUrl =
    locale === 'en'
      ? "https://wa.me/573028584906?text=Hi%2C+I'd+like+to+know+more+about+OwlyDev"
      : 'https://wa.me/573028584906?text=Hola%2C+quiero+saber+m%C3%A1s+sobre+OwlyDev'

  const fadeUp = (delay: number, y = 12, duration = 0.4) => {
    if (shouldReduceMotion) {
      return {
        initial: { opacity: 1 as number, y: 0 as number },
        animate: { opacity: 1 as number, y: 0 as number },
        transition: { duration: 0.12 },
      }
    }
    return {
      initial: { opacity: 0 as number, y: y as number },
      animate: ready
        ? { opacity: 1 as number, y: 0 as number }
        : { opacity: 0 as number, y: y as number },
      transition: { duration, ease: EASE_OUT_EXPO, delay: delay / 1000 },
    }
  }

  return (
    <div className="flex flex-col gap-4 lg:gap-5">
      <m.span
        {...fadeUp(0, 8)}
        className="block text-[12px] font-medium uppercase tracking-[0.08em] text-[var(--color-ink-quaternary)]"
      >
        {t('eyebrow')}
      </m.span>

      {shouldReduceMotion ? (
        <m.h1
          {...fadeUp(80, 16, 0.7)}
          className="font-display text-[2.625rem] leading-[1.05] tracking-[-0.02em] sm:text-[3.25rem] lg:text-[4.5rem]"
        >
          {t('headline')}
        </m.h1>
      ) : (
        <m.h1
          initial="hidden"
          animate={ready ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
          }}
          className="font-display text-[2.625rem] leading-[1.05] tracking-[-0.02em] sm:text-[3.25rem] lg:text-[4.5rem]"
        >
          {t('headline').split(' ').map((word, i) => (
            <m.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              style={{ display: 'inline-block', marginRight: '0.28em' }}
            >
              {word}
            </m.span>
          ))}
        </m.h1>
      )}

      <m.p
        {...fadeUp(320, 12)}
        className="max-w-[var(--max-prose)] text-[1.125rem] leading-[1.65] text-[var(--color-ink-tertiary)]"
      >
        {t('subhead')}
      </m.p>

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
