'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface GraciasContentProps {
  heading: string
  body: string
  backLink: string
  backHref: string
}

export function GraciasContent({ heading, body, backLink, backHref }: GraciasContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex min-h-screen flex-col items-center justify-center px-6 bg-[var(--color-surface-base)]"
    >
      <Image
        src="/mascota-victoria.webp"
        alt="OwlyDev mascot celebrating"
        width={320}
        height={360}
        priority
        className="mx-auto w-full max-w-[320px]"
      />

      <div className="mt-6 flex flex-col items-center gap-3 text-center">
        <h1
          className="font-display text-[2rem] leading-[1.1] text-[var(--color-ink-secondary)] sm:text-[2.5rem]"
          style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50, 'wght' 500" }}
        >
          {heading}
        </h1>

        <p className="max-w-[480px] text-[1rem] leading-[1.65] text-[var(--color-ink-tertiary)]">
          {body}
        </p>

        <div className="mt-8">
          <Link
            href={backHref}
            className="text-[14px] text-[var(--color-ink-quaternary)] transition-colors duration-[120ms] hover:text-[var(--color-ink-secondary)]"
          >
            {backLink}
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
