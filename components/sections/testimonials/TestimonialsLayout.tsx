'use client'

import Image from 'next/image'
import { m, useReducedMotion } from 'framer-motion'
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
    <m.div variants={itemVariant} className="border-t border-[var(--color-border-subtle)] py-8">
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
    </m.div>
  )
}

export function TestimonialsLayout() {
  const reducedMotion = useReducedMotion()
  const t = useTranslations('testimonials')
  const locale = useLocale()
  const { testimonials } = testimonialsContent[locale as 'es' | 'en']

  const listVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.10, delayChildren: 0.15 },
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
    <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
      <m.div
        variants={mascotVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col items-center gap-6 lg:w-[35%] lg:self-start lg:sticky lg:top-32"
      >
        <m.div
          animate={reducedMotion ? undefined : { y: [0, -4, 0] }}
          transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
        >
          <Image
            src="/mascota-aprobacion.webp"
            alt="OwlyDev approval"
            width={280}
            height={320}
            className="w-full max-w-[200px] lg:max-w-[280px]"
          />
        </m.div>
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
      </m.div>

      <m.div
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="lg:flex-1"
      >
        {testimonials.map((testimonial) => (
          <TestimonialItem key={testimonial.id} testimonial={testimonial} reducedMotion={reducedMotion} />
        ))}
      </m.div>
    </div>
  )
}
