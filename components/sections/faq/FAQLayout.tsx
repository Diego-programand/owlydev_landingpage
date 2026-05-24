'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { faqContent } from '@/lib/faq-content'

const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  reducedMotion: boolean | null
}

function FAQItem({ question, answer, isOpen, onToggle, reducedMotion }: FAQItemProps) {
  return (
    <div className="border-t border-[var(--color-border-subtle)]">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
      >
        <span className="text-[16px] font-medium leading-[1.4] text-[var(--color-ink-secondary)]">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: reducedMotion ? 0.12 : 0.22, ease: EASE_OUT_QUART }}
          className="mt-0.5 shrink-0 text-[var(--color-ink-tertiary)]"
        >
          <Plus size={16} strokeWidth={1.5} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reducedMotion ? 0.12 : 0.3, ease: EASE_OUT_EXPO }}
            style={{ overflow: 'hidden' }}
          >
            <p className="pb-5 text-[15px] leading-[1.65] text-[var(--color-ink-tertiary)]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQLayout() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const reducedMotion = useReducedMotion()
  const t = useTranslations('faq')
  const locale = useLocale()
  const { items } = faqContent[locale as 'es' | 'en']

  const headerVariant = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reducedMotion ? 0.12 : 0.5, ease: EASE_OUT_EXPO },
    },
  }

  return (
    <div
      ref={ref}
      className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16"
    >
      <motion.div
        variants={headerVariant}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="flex flex-col gap-4 lg:w-[40%] lg:self-start lg:sticky lg:top-32"
      >
        <p
          className="text-[12px] font-medium uppercase text-[var(--color-ink-quaternary)]"
          style={{ letterSpacing: 'var(--tracking-eyebrow)' }}
        >
          {t('eyebrow')}
        </p>
        <h2
          className="font-display text-[28px] leading-[1.1] text-[var(--color-ink-primary)] md:text-[36px] xl:text-[40px] 2xl:text-[44px]"
          style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50, 'wght' 500" }}
        >
          {t('heading')}
        </h2>
        <p className="text-[14px] leading-[1.6] text-[var(--color-ink-tertiary)]">
          {t('subtext')}
        </p>
      </motion.div>

      <div className="lg:flex-1">
        {items.map((item, i) => (
          <FAQItem
            key={i}
            question={item.q}
            answer={item.a}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            reducedMotion={reducedMotion}
          />
        ))}
      </div>
    </div>
  )
}
