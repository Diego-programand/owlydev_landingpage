'use client'

import Image from 'next/image'
import { m, useReducedMotion } from 'framer-motion'

export function PricingMascot() {
  const reducedMotion = useReducedMotion()

  return (
    <m.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: reducedMotion ? 0.12 : 0.5, delay: 0.1 }}
      className="flex justify-center"
    >
      <Image
        src="/mascota-duo.webp"
        alt="Before and after having a system"
        width={480}
        height={300}
        className="mx-auto w-full max-w-[480px]"
      />
    </m.div>
  )
}
