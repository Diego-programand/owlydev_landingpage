'use client'

import { useState, useEffect } from 'react'
import { m } from 'framer-motion'

export function ServiceUIChat() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    let active = true

    const runLoop = async () => {
      while (active) {
        if (!active) break
        setStep(0)
        await new Promise((resolve) => setTimeout(resolve, 800))
        if (!active) break
        setStep(1) // User speaks
        await new Promise((resolve) => setTimeout(resolve, 1800))
        if (!active) break
        setStep(2) // AI is typing
        await new Promise((resolve) => setTimeout(resolve, 1600))
        if (!active) break
        setStep(3) // AI response appears
        await new Promise((resolve) => setTimeout(resolve, 6000))
      }
    }

    runLoop()

    return () => {
      active = false
    }
  }, [])

  const bubbleVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.96 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: 'spring' as const, stiffness: 260, damping: 22 }
    }
  }

  const pulseDotVariants = {
    bounce: {
      y: [0, -4, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        ease: 'easeInOut' as const
      }
    }
  }

  return (
    <div className="flex w-full min-h-[170px] flex-col gap-3 rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-surface-raised)] p-5 font-sans relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 h-[100px] w-[100px] rounded-full bg-[var(--color-blueLight)] opacity-[0.03] blur-[40px] pointer-events-none" />

      {/* User message */}
      {step >= 1 && (
        <m.div 
          className="flex justify-end"
          initial="hidden"
          animate="visible"
          variants={bubbleVariants}
        >
          <div className="max-w-[75%] rounded-2xl rounded-tr-sm bg-[var(--color-surface-deep)] px-4 py-2.5 shadow-sm border border-[var(--color-border-subtle)]">
            <p className="text-[13px] font-medium text-[var(--color-ink-secondary)]">
              ¿Cuántos pedidos llegaron ayer?
            </p>
          </div>
        </m.div>
      )}

      {/* AI Typing Indicator */}
      {step === 2 && (
        <m.div 
          className="flex justify-start"
          initial="hidden"
          animate="visible"
          variants={bubbleVariants}
        >
          <div className="max-w-[80%] rounded-2xl rounded-tl-sm border border-[var(--color-border-subtle)] bg-[var(--color-surface-recessed)] px-4 py-3 flex items-center gap-1.5">
            <m.span className="h-2 w-2 rounded-full bg-[var(--color-ink-quaternary)]" animate="bounce" variants={pulseDotVariants} />
            <m.span className="h-2 w-2 rounded-full bg-[var(--color-ink-quaternary)]" animate="bounce" variants={pulseDotVariants} transition={{ delay: 0.15 }} />
            <m.span className="h-2 w-2 rounded-full bg-[var(--color-ink-quaternary)]" animate="bounce" variants={pulseDotVariants} transition={{ delay: 0.3 }} />
          </div>
        </m.div>
      )}

      {/* AI response */}
      {step >= 3 && (
        <m.div 
          className="flex justify-start"
          initial="hidden"
          animate="visible"
          variants={bubbleVariants}
        >
          <div className="max-w-[80%] rounded-2xl rounded-tl-sm border border-[var(--color-border-subtle)] bg-[var(--color-surface-base)] px-4 py-2.5 shadow-sm relative">
            <p className="text-[13px] leading-relaxed text-[var(--color-ink-tertiary)] inline">
              Llegaron 47 pedidos. 38 fueron despachados, 9 están pendientes. El producto más vendido fue Camiseta M (12 unidades).
            </p>
            <span className="inline-block w-1.5 h-3 ml-1.5 bg-[var(--color-blueLight)] animate-pulse" />
          </div>
        </m.div>
      )}
    </div>
  )
}
