'use client'

import { useState, useEffect } from 'react'
import { m, AnimatePresence } from 'framer-motion'

export function ServiceUIEcommerce() {
  const [stockM, setStockM] = useState(24)
  const [syncing, setSyncing] = useState(false)

  useEffect(() => {
    let active = true

    const runInventoryLoop = async () => {
      while (active) {
        // Wait 6 seconds
        await new Promise((resolve) => setTimeout(resolve, 6000))
        if (!active) break

        // Trigger sync
        setSyncing(true)
        await new Promise((resolve) => setTimeout(resolve, 1400))
        if (!active) break

        // Decrement stock or reset if it gets low
        setStockM((prev) => (prev > 18 ? prev - 1 : 24))
        setSyncing(false)
      }
    }

    runInventoryLoop()

    return () => {
      active = false
    }
  }, [])

  const rows = [
    {
      name: 'Camiseta M',
      stock: `${stockM} uds`,
      price: '$45.000',
      status: '● Disponible',
      statusVar: '--color-success',
      highlight: true,
    },
    {
      name: 'Camiseta L',
      stock: '3 uds',
      price: '$45.000',
      status: '⚠ Stock bajo',
      statusVar: '--color-warning',
      highlight: false,
    },
    {
      name: 'Hoodie XL',
      stock: '0 uds',
      price: '$89.000',
      status: '✕ Agotado',
      statusVar: '--color-danger',
      highlight: false,
    },
  ]

  return (
    <div className="w-full overflow-hidden rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-surface-raised)] font-sans text-[13px] relative shadow-sm">
      {/* Topbar */}
      <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] px-4 py-3 bg-[var(--color-surface-raised)]">
        <span className="font-medium text-[var(--color-ink-secondary)]">Panel de Inventario</span>
        
        <div className="flex items-center gap-1.5 min-w-[100px] justify-end">
          <AnimatePresence mode="wait">
            {syncing ? (
              <m.div
                key="syncing"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                className="flex items-center gap-1.5 text-[11px] text-[var(--color-warning)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-warning)] animate-ping" />
                <span>Actualizando...</span>
              </m.div>
            ) : (
              <m.div
                key="synced"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                className="flex items-center gap-1.5 text-[11px] text-[var(--color-success)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-success)] animate-pulse" />
                <span>Sincronizado</span>
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Column headers */}
      <div className="grid grid-cols-4 bg-[var(--color-surface-recessed)] px-4 py-2 border-b border-[var(--color-border-subtle)]">
        {['Producto', 'Stock', 'Precio', 'Estado'].map((col) => (
          <span key={col} className="text-[var(--color-ink-quaternary)] text-[11px] uppercase tracking-wider font-semibold">
            {col}
          </span>
        ))}
      </div>

      {/* Data rows */}
      <div className="flex flex-col">
        {rows.map((row) => (
          <div
            key={row.name}
            className="grid grid-cols-4 border-b border-[var(--color-border-subtle)] last:border-b-0 px-4 py-3 relative overflow-hidden transition-colors duration-300 hover:bg-[var(--color-surface-recessed)]"
          >
            <span className="text-[var(--color-ink-tertiary)] font-medium">{row.name}</span>
            
            {/* Animate Stock changes specifically for the dynamic item */}
            {row.highlight ? (
              <m.span 
                key={row.stock}
                initial={{ scale: 1.15, color: 'var(--color-blueLight)' }}
                animate={{ scale: 1, color: 'var(--color-ink-tertiary)' }}
                transition={{ duration: 0.5 }}
                className="font-medium"
              >
                {row.stock}
              </m.span>
            ) : (
              <span className="text-[var(--color-ink-tertiary)]">{row.stock}</span>
            )}
            
            <span className="text-[var(--color-ink-tertiary)]">{row.price}</span>
            
            <span 
              className="flex items-center gap-1"
              style={{ color: `var(${row.statusVar})` }}
            >
              {row.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
