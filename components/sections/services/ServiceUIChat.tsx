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
        await new Promise((resolve) => setTimeout(resolve, 2000))
        if (!active) break
        setStep(2) // AI is typing
        await new Promise((resolve) => setTimeout(resolve, 1500))
        if (!active) break
        setStep(3) // AI response appears
        await new Promise((resolve) => setTimeout(resolve, 6500))
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
    <div className="flex w-full min-h-[200px] flex-col gap-4 rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-recessed)] p-6 font-sans relative overflow-hidden shadow-inner">
      {/* Subtle brand colored background glow */}
      <div className="absolute top-0 right-0 h-[120px] w-[120px] rounded-full bg-[var(--color-accent)] opacity-[0.06] blur-[40px] pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 h-[100px] w-[100px] rounded-full bg-[var(--color-ink-primary)] opacity-[0.04] blur-[30px] pointer-events-none" />

      {/* User message */}
      {step >= 1 && (
        <m.div 
          className="flex flex-col items-end gap-1.5 self-end max-w-[85%]"
          initial="hidden"
          animate="visible"
          variants={bubbleVariants}
        >
          {/* Label / Avatar info */}
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-ink-quaternary)] mr-1">
            Tú
          </span>
          <div className="rounded-2xl rounded-tr-sm bg-[var(--color-ink-primary)] px-4 py-2.5 shadow-raised text-white border border-[oklch(0.20_0.05_264/0.1)]">
            <p className="text-[13px] font-medium leading-relaxed">
              ¿Cuántos pedidos llegaron ayer?
            </p>
          </div>
        </m.div>
      )}

      {/* AI Typing Indicator */}
      {step === 2 && (
        <m.div 
          className="flex flex-col items-start gap-1.5 self-start max-w-[85%]"
          initial="hidden"
          animate="visible"
          variants={bubbleVariants}
        >
          {/* Label / Avatar info */}
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-ink-quaternary)] ml-1 flex items-center gap-1">
            <span>🦉</span> OwlyBot
          </span>
          <div className="rounded-2xl rounded-tl-sm border border-[var(--color-border-subtle)] bg-[var(--color-surface-raised)] px-4 py-3.5 flex items-center gap-1.5 shadow-subtle">
            <m.span className="h-2 w-2 rounded-full bg-[var(--color-blueLight)]" animate="bounce" variants={pulseDotVariants} />
            <m.span className="h-2 w-2 rounded-full bg-[var(--color-blueLight)]" animate="bounce" variants={pulseDotVariants} transition={{ delay: 0.15 }} />
            <m.span className="h-2 w-2 rounded-full bg-[var(--color-blueLight)]" animate="bounce" variants={pulseDotVariants} transition={{ delay: 0.3 }} />
          </div>
        </m.div>
      )}

      {/* AI response */}
      {step >= 3 && (
        <m.div 
          className="flex flex-col items-start gap-1.5 self-start max-w-[85%]"
          initial="hidden"
          animate="visible"
          variants={bubbleVariants}
        >
          {/* Label / Avatar info */}
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-ink-quaternary)] ml-1 flex items-center gap-1">
            <span>🦉</span> OwlyBot
          </span>
          <div className="rounded-2xl rounded-tl-sm border-l-3 border-l-[var(--color-accent)] border-y border-r border-[var(--color-border-subtle)] bg-[var(--color-surface-raised)] px-4 py-3 shadow-raised relative">
            <p className="text-[13px] leading-relaxed text-[var(--color-ink-secondary)] font-medium inline">
              Llegaron 47 pedidos. 38 fueron despachados, 9 están pendientes. El producto más vendido fue Camiseta M (12 unidades).
            </p>
            <span className="inline-block w-1.5 h-3 ml-1.5 bg-[var(--color-accent)] animate-pulse" />
          </div>
        </m.div>
      )}
    </div>
  )
}
