const orders = [
  { id: '#1042', client: 'García Hnos', status: '● En producción', statusVar: '--color-warning', date: '14 jun' },
  { id: '#1041', client: 'Muebles Norte', status: '✓ Despachado', statusVar: '--color-success', date: '12 jun' },
  { id: '#1040', client: 'Casa Moderna', status: '✓ Entregado', statusVar: '--color-success', date: '10 jun' },
]

export function UIOrders() {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-surface-raised)] font-sans text-[13px]">
      <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] px-4 py-3">
        <span className="font-medium text-[var(--color-ink-secondary)]">Pedidos activos</span>
        <span className="text-[11px] text-[var(--color-ink-quaternary)]">Jun 2025</span>
      </div>
      <div className="grid grid-cols-4 bg-[var(--color-surface-recessed)] px-4 py-2">
        {['Pedido', 'Cliente', 'Estado', 'Entrega'].map((col) => (
          <span key={col} className="text-[var(--color-ink-quaternary)]">{col}</span>
        ))}
      </div>
      {orders.map((row) => (
        <div key={row.id} className="grid grid-cols-4 border-t border-[var(--color-border-subtle)] px-4 py-3">
          <span className="text-[var(--color-ink-tertiary)]">{row.id}</span>
          <span className="text-[var(--color-ink-tertiary)]">{row.client}</span>
          <span style={{ color: `var(${row.statusVar})` }}>{row.status}</span>
          <span className="text-[var(--color-ink-tertiary)]">{row.date}</span>
        </div>
      ))}
    </div>
  )
}
