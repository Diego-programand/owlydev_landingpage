'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useLocale } from 'next-intl'
import { cn } from '@/lib/utils'
import { portfolioContent, type ProjectVisual } from '@/lib/portfolio-content'
import { UIOrders } from './UIOrders'
import { UIDashboard } from './UIDashboard'
import { UIInventory } from './UIInventory'
import { UIChatbot } from './UIChatbot'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

function ProjectVisualEl({ type }: { type: ProjectVisual }) {
  switch (type) {
    case 'ui-orders':    return <UIOrders />
    case 'ui-dashboard': return <UIDashboard />
    case 'ui-inventory': return <UIInventory />
    case 'ui-chatbot':   return <UIChatbot />
  }
}

interface PortfolioRowProps {
  number: string
  tag: string
  headline: string
  description: string
  tech: string[]
  visual: ProjectVisual
  reversed: boolean
  reducedMotion: boolean | null
}

function PortfolioRow({
  number,
  tag,
  headline,
  description,
  tech,
  visual,
  reversed,
  reducedMotion,
}: PortfolioRowProps) {
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
        'lg:flex-row lg:items-center lg:gap-14',
        reversed && 'lg:flex-row-reverse'
      )}
    >
      <div className={cn('flex flex-col gap-3', reversed ? 'lg:flex-[45]' : 'lg:flex-[55]')}>
        <div className="flex items-baseline gap-3">
          <span
            className="font-display text-[13px] text-[var(--color-ink-quaternary)]"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 0, 'wght' 400" }}
          >
            {number}
          </span>
          <span className="text-[12px] text-[var(--color-ink-quaternary)]">{tag}</span>
        </div>

        <h3
          className="font-display text-[22px] leading-[1.2] text-[var(--color-ink-primary)] md:text-[26px]"
          style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50, 'wght' 500" }}
        >
          {headline}
        </h3>

        <p className="text-[15px] leading-[1.65] text-[var(--color-ink-tertiary)]">
          {description}
        </p>

        <div className="mt-1 flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded border border-[var(--color-border-subtle)] bg-[var(--color-surface-deep)] px-2 py-0.5 text-[11px] text-[var(--color-ink-quaternary)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className={cn(reversed ? 'lg:flex-[55]' : 'lg:flex-[45]')}>
        <ProjectVisualEl type={visual} />
      </div>
    </motion.div>
  )
}

export function PortfolioItems() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })
  const reducedMotion = useReducedMotion()
  const locale = useLocale()
  const { projects } = portfolioContent[locale as 'es' | 'en']

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.10,
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
      {projects.map((project, i) => (
        <PortfolioRow
          key={project.id}
          number={project.number}
          tag={project.tag}
          headline={project.headline}
          description={project.description}
          tech={project.tech}
          visual={project.visual}
          reversed={i % 2 === 1}
          reducedMotion={reducedMotion}
        />
      ))}
    </motion.div>
  )
}
