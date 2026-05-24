'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useReducedMotion } from 'framer-motion'

export function PricingMascot() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
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
    </motion.div>
  )
}
