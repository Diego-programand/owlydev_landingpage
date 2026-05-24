export function UIChatbot() {
  return (
    <div className="flex w-full flex-col gap-3 rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-surface-raised)] p-4 font-sans">
      {/* User */}
      <div className="flex justify-end">
        <div className="max-w-[75%] rounded-2xl rounded-tr-sm bg-[var(--color-surface-deep)] px-4 py-2.5">
          <p className="text-[13px] text-[var(--color-ink-secondary)]">
            ¿Tienen disponibilidad esta semana?
          </p>
        </div>
      </div>

      {/* Bot */}
      <div className="flex justify-start">
        <div className="max-w-[78%] rounded-2xl rounded-tl-sm border border-[var(--color-border-subtle)] bg-[var(--color-surface-raised)] px-4 py-2.5">
          <p className="text-[13px] leading-relaxed text-[var(--color-ink-tertiary)]">
            Sí, tenemos turnos el miércoles y viernes. ¿Cuál prefieres?
          </p>
        </div>
      </div>

      {/* User */}
      <div className="flex justify-end">
        <div className="max-w-[75%] rounded-2xl rounded-tr-sm bg-[var(--color-surface-deep)] px-4 py-2.5">
          <p className="text-[13px] text-[var(--color-ink-secondary)]">
            ¿Puedo hablar con alguien?
          </p>
        </div>
      </div>

      {/* Bot with escalation */}
      <div className="flex justify-start">
        <div className="max-w-[78%] rounded-2xl rounded-tl-sm border border-[var(--color-border-subtle)] bg-[var(--color-surface-raised)] px-4 py-2.5">
          <p className="text-[13px] leading-relaxed text-[var(--color-ink-tertiary)]">
            Claro, te conecto con el equipo.
          </p>
          <p
            className="mt-1 text-[12px] italic"
            style={{ color: 'var(--color-info)' }}
          >
            ← Escalando a agente humano
          </p>
        </div>
      </div>
    </div>
  )
}
