'use client'

import { m, useReducedMotion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

interface WhyUsItem {
  number: string
  headline: string
  copy: string
}

const separatorVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export function WhyUsItems() {
  const reducedMotion = useReducedMotion()
  const t = useTranslations('whyUs')
  const items = t.raw('items') as WhyUsItem[]

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const numberVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: reducedMotion ? 0.12 : 0.4,
        ease: EASE_OUT_EXPO,
      },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0.12 : 0.4,
        ease: EASE_OUT_EXPO,
      },
    },
  }

  return (
    <m.ul
      variants={listVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="list-none p-0 m-0"
    >
      {items.map((item) => (
        <li key={item.number} className="flex flex-col">
          {/* Línea separadora que se dibuja de izquierda a derecha */}
          <m.div
            variants={separatorVariants}
            style={{ transformOrigin: 'left' }}
            className="h-px w-full bg-[var(--color-border-subtle)]"
            aria-hidden="true"
          />

          {/* Contenido — flex-row en desktop */}
          <div className="flex flex-col gap-4 py-8 md:flex-row md:items-start md:gap-0">
            <m.div variants={numberVariants} className="shrink-0 md:w-20">
              <span
                className="font-display text-[44px] leading-none text-[var(--color-ink-quaternary)] md:text-[56px]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 0, 'wght' 400" }}
              >
                {item.number}
              </span>
            </m.div>

            <m.div variants={contentVariants} className="flex flex-col gap-2 md:flex-1">
              <h3
                className="font-display text-[22px] leading-[1.2] text-[var(--color-ink-primary)] md:text-[28px]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50, 'wght' 500" }}
              >
                {item.headline}
              </h3>
              <p className="text-[16px] leading-relaxed text-[var(--color-ink-tertiary)]">
                {item.copy}
              </p>
            </m.div>
          </div>
        </li>
      ))}
    </m.ul>
  )
}
