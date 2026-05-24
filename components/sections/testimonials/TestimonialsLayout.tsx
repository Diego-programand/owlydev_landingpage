'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { testimonialsContent, type Testimonial } from '@/lib/testimonials-content'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

interface TestimonialItemProps {
  testimonial: Testimonial
  reducedMotion: boolean | null
}

function TestimonialItem({ testimonial, reducedMotion }: TestimonialItemProps) {
  const itemVariant = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reducedMotion ? 0.12 : 0.4, ease: EASE_OUT_EXPO },
    },
  }

  return (
    <motion.div variants={itemVariant} className="border-t border-[var(--color-border-subtle)] py-8">
      <blockquote
        className="text-[20px] leading-[1.5] text-[var(--color-ink-secondary)]"
        style={{
          fontFamily: 'var(--font-display)',
          fontVariationSettings: "'opsz' 144, 'SOFT' 50, 'wght' 400",
          fontStyle: 'italic',
        }}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <p className="mt-3 text-[13px] text-[var(--color-ink-quaternary)]">
        {testimonial.author} · {testimonial.role} · {testimonial.company}
      </p>
    </motion.div>
  )
}

export function TestimonialsLayout() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const reducedMotion = useReducedMotion()
  const t = useTranslations('testimonials')
  const locale = useLocale()
  const { testimonials } = testimonialsContent[locale as 'es' | 'en']

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.10,
        delayChildren: 0.15,
      },
    },
  }

  const mascotVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: reducedMotion ? 0.12 : 0.5, ease: EASE_OUT_EXPO },
    },
  }

  return (
    <div
      ref={ref}
      className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16"
    >
      <motion.div
        variants={mascotVariant}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="flex flex-col items-center gap-6 lg:w-[35%] lg:self-start lg:sticky lg:top-32"
      >
        <Image
          src="/mascota-aprobacion.webp"
          alt="OwlyDev approval"
          width={280}
          height={320}
          className="w-full max-w-[200px] lg:max-w-[280px]"
        />
        <div className="text-center lg:text-left">
          <p
            className="mb-3 text-[12px] font-medium uppercase text-[var(--color-ink-quaternary)]"
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
        </div>
      </motion.div>

      <motion.div
        variants={listVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="lg:flex-1"
      >
        {testimonials.map((testimonial) => (
          <TestimonialItem key={testimonial.id} testimonial={testimonial} reducedMotion={reducedMotion} />
        ))}
      </motion.div>
    </div>
  )
}
