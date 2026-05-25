'use client'

import { m, useReducedMotion } from 'framer-motion'
import { useLocale } from 'next-intl'
import { cn } from '@/lib/utils'
import { pricingContent, type PricingColumnData } from '@/lib/pricing-content'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

const MARKER: Record<PricingColumnData['id'], { icon: string; colorVar: string }> = {
  'no-system':    { icon: '✕', colorVar: '--color-danger' },
  'recommended':  { icon: '✓', colorVar: '--color-success' },
  'premium':      { icon: '✓', colorVar: '--color-ink-tertiary' },
}

interface PricingColumnProps {
  column: PricingColumnData
  reducedMotion: boolean | null
}

function PricingColumn({ column, reducedMotion }: PricingColumnProps) {
  const marker = MARKER[column.id]

  const colVariant = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reducedMotion ? 0.12 : 0.5, ease: EASE_OUT_EXPO },
    },
  }

  return (
    <m.div
      variants={colVariant}
      className={cn(
        'relative flex flex-col rounded-xl p-6',
        column.id === 'no-system' && 'bg-[var(--color-surface-recessed)]',
        column.id === 'recommended' && [
          'pricing-shimmer',
          'border border-[var(--color-accent)]',
          'bg-[var(--color-surface-raised)]',
          'shadow-[var(--shadow-raised)]',
          'lg:-translate-y-2',
        ],
        column.id === 'premium' && [
          'border border-[0.5px] border-[var(--color-border-default)]',
          'bg-[var(--color-surface-base)]',
        ]
      )}
    >
      {column.badge && (
        <div className="mb-4 self-start">
          <span
            className="rounded px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.06em] text-[var(--color-ink-primary)]"
            style={{ background: 'var(--color-accent)' }}
          >
            {column.badge}
          </span>
        </div>
      )}

      <p
        className={cn(
          'text-[15px] font-medium',
          column.id === 'no-system' ? 'text-[var(--color-ink-quaternary)]' : 'text-[var(--color-ink-secondary)]'
        )}
      >
        {column.label}
      </p>

      <div className="mt-3 mb-5">
        {column.price ? (
          <p
            className="font-display text-[26px] leading-none text-[var(--color-ink-primary)]"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50, 'wght' 500" }}
          >
            {column.price}
          </p>
        ) : (
          <p
            className="font-display text-[22px] leading-none text-[var(--color-ink-quaternary)]"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50, 'wght' 400" }}
          >
            —
          </p>
        )}
        <p
          className={cn(
            'mt-1.5 text-[13px] leading-[1.4]',
            column.id === 'no-system'
              ? 'italic text-[var(--color-ink-quaternary)]'
              : 'text-[var(--color-ink-tertiary)]'
          )}
        >
          {column.priceNote}
        </p>
      </div>

      <div className="mb-5 h-px bg-[var(--color-border-subtle)]" />

      <ul className="flex flex-col gap-3">
        {column.features.map((feat) => (
          <li key={feat} className="flex items-start gap-2.5">
            <span
              className="mt-0.5 shrink-0 text-[14px] leading-none"
              style={{ color: `var(${marker.colorVar})` }}
            >
              {marker.icon}
            </span>
            <span
              className={cn(
                'text-[14px] leading-[1.5]',
                column.id === 'no-system'
                  ? 'text-[var(--color-ink-quaternary)]'
                  : 'text-[var(--color-ink-tertiary)]'
              )}
            >
              {feat}
            </span>
          </li>
        ))}
      </ul>

      {column.cta && column.ctaUrl && (
        <div className="mt-auto pt-6">
          {column.id === 'recommended' ? (
            <a
              href={column.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg py-3 text-[14px] font-medium text-[var(--color-ink-primary)] transition-opacity duration-[220ms] hover:opacity-90"
              style={{ background: 'var(--color-accent)' }}
            >
              <WhatsAppIcon size={16} className="text-[var(--color-whatsapp)]" />
              {column.cta}
            </a>
          ) : (
            <a
              href={column.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center rounded-lg border border-[var(--color-border-default)] py-3 text-[14px] font-medium text-[var(--color-ink-secondary)] transition-[border-color,background-color] duration-[220ms] hover:border-[var(--color-ink-secondary)] hover:bg-[var(--color-surface-recessed)]"
            >
              {column.cta}
            </a>
          )}
        </div>
      )}

      {!column.cta && <div className="mt-auto pt-6" />}
    </m.div>
  )
}

export function PricingColumns() {
  const reducedMotion = useReducedMotion()
  const locale = useLocale()
  const { columns, disclaimer } = pricingContent[locale as 'es' | 'en']

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  }

  return (
    <div>
      <m.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-start lg:gap-6"
      >
        {columns.map((col) => (
          <PricingColumn key={col.id} column={col} reducedMotion={reducedMotion} />
        ))}
      </m.div>

      <p className="mt-8 text-center text-[13px] text-[var(--color-ink-quaternary)]">
        {disclaimer}
      </p>
    </div>
  )
}
