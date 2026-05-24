'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

export function CTAContent() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const reducedMotion = useReducedMotion()
  const t = useTranslations('cta')
  const locale = useLocale()

  const ctaUrl =
    locale === 'en'
      ? "https://wa.me/573028584906?text=Hi%2C+I'd+like+to+know+more+about+OwlyDev"
      : 'https://wa.me/573028584906?text=Hola%2C+quiero+saber+m%C3%A1s+sobre+OwlyDev'

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0 },
    },
  }

  const itemVariant = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reducedMotion ? 0.12 : 0.5, ease: EASE_OUT_EXPO },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="flex flex-col items-center text-center"
    >
      <motion.div variants={itemVariant} className="mb-6">
        <Image
          src="/mascota-presentando.webp"
          alt="OwlyDev — talk to us"
          width={300}
          height={340}
          className="mx-auto w-full max-w-[300px]"
        />
      </motion.div>

      <motion.p
        variants={itemVariant}
        className="mb-3 text-[12px] font-medium uppercase text-[var(--color-ink-quaternary)]"
        style={{ letterSpacing: 'var(--tracking-eyebrow)' }}
      >
        {t('eyebrow')}
      </motion.p>

      <motion.h2
        variants={itemVariant}
        className="mx-auto max-w-[560px] font-display text-[30px] leading-[1.1] text-[var(--color-ink-primary)] md:text-[40px] xl:text-[44px] 2xl:text-[48px]"
        style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50, 'wght' 500" }}
      >
        {t('heading')}
      </motion.h2>

      <motion.p
        variants={itemVariant}
        className="mx-auto mt-4 max-w-[480px] text-[16px] leading-[1.6] text-[var(--color-ink-tertiary)]"
      >
        {t('subtext')}
      </motion.p>

      <motion.div variants={itemVariant} className="mt-10">
        <a
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-lg px-8 py-4 text-[16px] font-medium text-[var(--color-ink-primary)] transition-opacity duration-[220ms] hover:opacity-90"
          style={{ background: 'var(--color-accent)' }}
        >
          <WhatsAppIcon size={18} className="text-[var(--color-whatsapp)]" />
          {t('button')}
        </a>
      </motion.div>

      <motion.p
        variants={itemVariant}
        className="mt-4 text-[13px] text-[var(--color-ink-quaternary)]"
      >
        {t('trustLine')}
      </motion.p>
    </motion.div>
  )
}
