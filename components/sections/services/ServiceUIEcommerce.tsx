const rows = [
  {
    name: 'Camiseta M',
    stock: '24 uds',
    price: '$45.000',
    status: '● Disponible',
    statusVar: '--color-success',
  },
  {
    name: 'Camiseta L',
    stock: '3 uds',
    price: '$45.000',
    status: '⚠ Stock bajo',
    statusVar: '--color-warning',
  },
  {
    name: 'Hoodie XL',
    stock: '0 uds',
    price: '$89.000',
    status: '✕ Agotado',
    statusVar: '--color-danger',
  },
]

export function ServiceUIEcommerce() {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-surface-raised)] font-sans text-[13px]">
      {/* Topbar */}
      <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] px-4 py-3">
        <span className="font-medium text-[var(--color-ink-secondary)]">Inventario</span>
        <span className="text-[11px] text-[var(--color-success)]">● Sincronizado</span>
      </div>

      {/* Column headers */}
      <div className="grid grid-cols-4 bg-[var(--color-surface-recessed)] px-4 py-2">
        {['Producto', 'Stock', 'Precio', 'Estado'].map((col) => (
          <span key={col} className="text-[var(--color-ink-quaternary)]">
            {col}
          </span>
        ))}
      </div>

      {/* Data rows */}
      {rows.map((row) => (
        <div
          key={row.name}
          className="grid grid-cols-4 border-t border-[var(--color-border-subtle)] px-4 py-3"
        >
          <span className="text-[var(--color-ink-tertiary)]">{row.name}</span>
          <span className="text-[var(--color-ink-tertiary)]">{row.stock}</span>
          <span className="text-[var(--color-ink-tertiary)]">{row.price}</span>
          <span style={{ color: `var(${row.statusVar})` }}>{row.status}</span>
        </div>
      ))}
    </div>
  )
}
