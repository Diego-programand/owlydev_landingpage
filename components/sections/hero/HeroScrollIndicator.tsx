'use client'

import { useState, useEffect } from 'react'
import { m, AnimatePresence, useScroll, useMotionValueEvent, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function HeroScrollIndicator() {
  const [visible, setVisible] = useState(true)
  const [looping, setLooping] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const { scrollY } = useScroll()

  useEffect(() => {
    const timer = setTimeout(() => setLooping(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  useMotionValueEvent(scrollY, 'change', (v) => {
    if (v > 60) setVisible(false)
  })

  return (
    <AnimatePresence>
      {visible && (
        <m.div
          initial={{ opacity: 0 }}
          animate={
            shouldReduceMotion
              ? { opacity: 0.6 }
              : looping
                ? { opacity: [0.6, 1, 0.6], y: [0, 4, 0] }
                : { opacity: 0.6 }
          }
          exit={{
            opacity: 0,
            transition: { duration: 0.22, ease: [0.25, 1, 0.5, 1] },
          }}
          transition={
            shouldReduceMotion
              ? { duration: 0.12 }
              : looping
                ? { duration: 1.5, ease: 'easeInOut', repeat: Infinity }
                : { duration: 0.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }
          }
          className="pointer-events-none flex select-none justify-center pt-8"
        >
          <ChevronDown
            size={20}
            strokeWidth={1.5}
            className="text-[var(--color-ink-quaternary)]"
          />
        </m.div>
      )}
    </AnimatePresence>
  )
}
