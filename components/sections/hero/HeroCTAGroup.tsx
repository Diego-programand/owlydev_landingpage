'use client'

import { useState, useEffect } from 'react'
import { m } from 'framer-motion'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

interface CopyShape {
  ctaPrimary: string
  ctaSecondary: string
  whatsappUrl: string
}

interface HeroCTAGroupProps {
  copy: CopyShape
  reducedMotion: boolean
}

export function HeroCTAGroup({ copy, reducedMotion }: HeroCTAGroupProps) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  const fadeUp = (delay: number) => {
    if (reducedMotion) {
      return {
        initial: { opacity: 1 as number, y: 0 as number },
        animate: { opacity: 1 as number, y: 0 as number },
        transition: { duration: 0.12 },
      }
    }
    return {
      initial: { opacity: 0 as number, y: 8 as number },
      animate: ready
        ? { opacity: 1 as number, y: 0 as number }
        : { opacity: 0 as number, y: 8 as number },
      transition: { duration: 0.4, ease: EASE_OUT_EXPO, delay: delay / 1000 },
    }
  }

  return (
    <div className="flex flex-col items-start gap-3 pt-3">
      <m.a
        {...fadeUp(480)}
        href={copy.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 rounded-lg bg-[var(--color-accent)] px-5 py-3 text-[14px] font-medium text-[var(--color-ink-primary)] transition-colors duration-[220ms] [transition-timing-function:var(--ease-out-quart)] hover:bg-[var(--color-accent-deep)]"
      >
        <WhatsAppIcon size={18} className="shrink-0 text-[var(--color-whatsapp)]" />
        {copy.ctaPrimary}
      </m.a>

      <m.a
        {...fadeUp(560)}
        href="#portfolio"
        className="group relative inline-block text-[14px] text-[var(--color-ink-tertiary)]"
      >
        {copy.ctaSecondary}
        <span
          aria-hidden
          className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-[220ms] [transition-timing-function:var(--ease-out-quart)] group-hover:scale-x-100"
        />
      </m.a>
    </div>
  )
}
