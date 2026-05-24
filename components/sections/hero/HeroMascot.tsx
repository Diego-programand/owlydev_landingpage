'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

export function HeroMascot() {
  const shouldReduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  // parallax: mascota sube al 30% de la velocidad del scroll
  const y = useTransform(scrollY, [0, 600], [0, -180])

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={
        shouldReduceMotion
          ? { duration: 0.12 }
          : { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.16 }
      }
      style={shouldReduceMotion ? undefined : { y }}
      className="order-first flex justify-center overflow-visible lg:order-none lg:justify-end"
    >
      <Image
        src="/mascota-saludo.webp"
        alt="Mascota de OwlyDev saludando"
        width={480}
        height={560}
        priority
        className="w-full max-w-[280px] lg:max-w-[440px]"
        style={{ height: 'auto' }}
      />
    </motion.div>
  )
}
