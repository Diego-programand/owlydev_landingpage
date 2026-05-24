const rows = [
  { name: 'Camiseta M', local: 12, online: 8, total: 20, alertVar: null, alertIcon: '—' },
  { name: 'Camiseta L', local: 2, online: 1, total: 3, alertVar: '--color-warning', alertIcon: '⚠' },
  { name: 'Hoodie XL', local: 0, online: 0, total: 0, alertVar: '--color-danger', alertIcon: '✕' },
]

export function UIInventory() {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-surface-raised)] font-sans text-[13px]">
      <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] px-4 py-3">
        <span className="font-medium text-[var(--color-ink-secondary)]">Inventario unificado</span>
        <span className="text-[11px] text-[var(--color-success)]">● Sincronizado</span>
      </div>
      <div className="grid grid-cols-5 bg-[var(--color-surface-recessed)] px-4 py-2">
        {['Producto', 'Local', 'Online', 'Total', 'Alerta'].map((col) => (
          <span key={col} className="text-[var(--color-ink-quaternary)]">{col}</span>
        ))}
      </div>
      {rows.map((row) => (
        <div key={row.name} className="grid grid-cols-5 border-t border-[var(--color-border-subtle)] px-4 py-3">
          <span className="text-[var(--color-ink-tertiary)]">{row.name}</span>
          <span className="text-[var(--color-ink-tertiary)]">{row.local}</span>
          <span className="text-[var(--color-ink-tertiary)]">{row.online}</span>
          <span className="text-[var(--color-ink-tertiary)]">{row.total}</span>
          <span style={{ color: row.alertVar ? `var(${row.alertVar})` : 'var(--color-ink-quaternary)' }}>
            {row.alertIcon}
          </span>
        </div>
      ))}
    </div>
  )
}
