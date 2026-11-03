import { HudFrame } from './HudFrame'

const fields = [
  { key: 'Role', value: 'Automation Specialist' },
  { key: 'Base', value: 'Cairo, Egypt' },
  { key: 'Active since', value: '2019' },
  { key: 'Coverage', value: 'Nationwide' },
]

export function OperatorCard() {
  return (
    <HudFrame className="mx-auto w-full max-w-sm rounded-xl border border-[var(--border-primary)] bg-[var(--bg-card)] p-8">
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-xl border border-[var(--signal-border)] bg-[var(--signal-muted)]">
        <span className="font-display text-3xl font-bold text-[var(--signal)]">AE</span>
      </div>
      <p className="mb-6 text-xs uppercase tracking-[0.25em] text-[var(--text-faint)]" style={{ fontFamily: 'var(--mono)' }}>
        Operator ID · AL-MASHAREQ
      </p>
      <dl className="space-y-3 text-sm" style={{ fontFamily: 'var(--mono)' }}>
        {fields.map((f) => (
          <div key={f.key} className="flex justify-between gap-6 border-b border-[var(--border-primary)] pb-3">
            <dt className="text-[var(--text-faint)]">{f.key}</dt>
            <dd className="text-right text-[var(--text-primary)]">{f.value}</dd>
          </div>
        ))}
      </dl>
    </HudFrame>
  )
}
