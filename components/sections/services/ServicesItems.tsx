'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { type ServiceVisual } from '@/lib/services-content'
import { ServiceUIEcommerce } from './ServiceUIEcommerce'
import { ServiceUIChat } from './ServiceUIChat'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

const SERVICE_VISUALS: ServiceVisual[] = ['mascot', 'ui-ecommerce', 'ui-chat']

interface ServiceItem {
  number: string
  headline: string
  hook: string
  copy: string
}

function ServiceVisualEl({ type }: { type: ServiceVisual }) {
  if (type === 'mascot') {
    return (
      <div className="flex justify-center lg:justify-end">
        <Image
          src="/mascota-laptop.webp"
          alt="OwlyDev mascot working on a laptop"
          width={320}
          height={320}
          className="w-[240px] lg:w-[320px] object-contain select-none"
        />
      </div>
    )
  }
  if (type === 'ui-ecommerce') {
    return <ServiceUIEcommerce />
  }
  return <ServiceUIChat />
}

interface ServiceRowProps {
  number: string
  headline: string
  hook: string
  copy: string
  visual: ServiceVisual
  reversed: boolean
  reducedMotion: boolean | null
}

function ServiceRow({ number, headline, hook, copy, visual, reversed, reducedMotion }: ServiceRowProps) {
  const rowVariant = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0.12 : 0.5,
        ease: EASE_OUT_EXPO,
      },
    },
  }

  return (
    <motion.div
      variants={rowVariant}
      className={cn(
        'flex flex-col gap-6 border-t border-[var(--color-border-subtle)] py-10',
        'lg:flex-row lg:items-center lg:gap-16',
        reversed && 'lg:flex-row-reverse'
      )}
    >
      <div className={cn('flex flex-col gap-3', reversed ? 'lg:flex-[40]' : 'lg:flex-[60]')}>
        <span
          className="font-display text-[13px] text-[var(--color-ink-quaternary)]"
          style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 0, 'wght' 400" }}
        >
          {number}
        </span>
        <h3
          className="font-display text-[22px] leading-[1.2] text-[var(--color-ink-primary)] md:text-[28px]"
          style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50, 'wght' 500" }}
        >
          {headline}
        </h3>
        {hook && (
          <p className="mt-2 text-[14px] leading-[1.5] text-[var(--color-ink-quaternary)]">
            {hook}
          </p>
        )}
        <p className="mt-3 text-[16px] leading-[1.6] text-[var(--color-ink-tertiary)]">{copy}</p>
      </div>

      <div className={cn(reversed ? 'lg:flex-[60]' : 'lg:flex-[40]')}>
        <ServiceVisualEl type={visual} />
      </div>
    </motion.div>
  )
}

export function ServicesItems() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const reducedMotion = useReducedMotion()
  const t = useTranslations('services')
  const rawItems = t.raw('items') as ServiceItem[]
  const services = rawItems.map((item, i) => ({ ...item, visual: SERVICE_VISUALS[i] }))

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {services.map((service, i) => (
        <ServiceRow
          key={service.number}
          number={service.number}
          headline={service.headline}
          hook={service.hook}
          copy={service.copy}
          visual={service.visual}
          reversed={i % 2 === 1}
          reducedMotion={reducedMotion}
        />
      ))}
    </motion.div>
  )
}
