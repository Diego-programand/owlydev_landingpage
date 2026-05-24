export function ServiceUIChat() {
  return (
    <div className="flex w-full flex-col gap-3 rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-surface-raised)] p-5 font-sans">
      {/* User message */}
      <div className="flex justify-end">
        <div className="max-w-[75%] rounded-2xl rounded-tr-sm bg-[var(--color-surface-deep)] px-4 py-2.5">
          <p className="text-[13px] text-[var(--color-ink-secondary)]">
            ¿Cuántos pedidos llegaron ayer?
          </p>
        </div>
      </div>

      {/* AI response */}
      <div className="flex justify-start">
        <div className="max-w-[80%] rounded-2xl rounded-tl-sm border border-[var(--color-border-subtle)] bg-[var(--color-surface-raised)] px-4 py-2.5">
          <p className="text-[13px] leading-relaxed text-[var(--color-ink-tertiary)]">
            Llegaron 47 pedidos. 38 fueron despachados, 9 están pendientes. El producto más vendido
            fue Camiseta M (12 unidades).
          </p>
        </div>
      </div>
    </div>
  )
}
