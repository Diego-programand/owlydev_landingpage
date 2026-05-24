const metrics = [
  { label: 'Ventas semana', value: '$4.2M' },
  { label: 'Cumpl. meta', value: '84%' },
  { label: 'Zonas activas', value: '6 / 8' },
]

const zones = [
  { name: 'Norte', pct: 92 },
  { name: 'Sur', pct: 78 },
  { name: 'Centro', pct: 61 },
  { name: 'Oriente', pct: 45 },
]

export function UIDashboard() {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-surface-raised)] font-sans text-[13px]">
      {/* Topbar */}
      <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] px-4 py-3">
        <span className="font-medium text-[var(--color-ink-secondary)]">Ventas por zona</span>
        <span className="text-[11px] text-[var(--color-ink-quaternary)]">Semana actual</span>
      </div>

      {/* Compact metric row */}
      <div className="grid grid-cols-3 divide-x divide-[var(--color-border-subtle)] border-b border-[var(--color-border-subtle)]">
        {metrics.map((m) => (
          <div key={m.label} className="flex flex-col gap-0.5 px-4 py-3">
            <span className="text-[11px] text-[var(--color-ink-quaternary)]">{m.label}</span>
            <span className="text-[18px] font-medium leading-none text-[var(--color-ink-primary)]">{m.value}</span>
          </div>
        ))}
      </div>

      {/* Zone progress */}
      <div className="flex flex-col gap-0 divide-y divide-[var(--color-border-subtle)]">
        {zones.map((zone) => (
          <div key={zone.name} className="flex items-center gap-3 px-4 py-3">
            <span className="w-14 shrink-0 text-[var(--color-ink-tertiary)]">{zone.name}</span>
            <div className="flex-1 overflow-hidden rounded-full bg-[var(--color-surface-deep)]" style={{ height: '6px' }}>
              <div
                className="h-full rounded-full bg-[var(--color-ink-quaternary)]"
                style={{ width: `${zone.pct}%` }}
              />
            </div>
            <span
              className="w-8 shrink-0 text-right text-[11px]"
              style={{ color: zone.pct < 70 ? 'var(--color-warning)' : 'var(--color-ink-quaternary)' }}
            >
              {zone.pct}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
