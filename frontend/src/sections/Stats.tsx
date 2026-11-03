import { stats } from '../content/landing'
import { StatCounter } from '../components/landing/StatCounter'

export function Stats() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="hero-grid" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-10 px-4 sm:px-6 lg:grid-cols-4 lg:gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center lg:text-left">
            <p className="font-display mb-3 text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-none tracking-tight text-[var(--text-primary)]">
              <StatCounter value={s.value} />
            </p>
            <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--signal)] md:text-xs" style={{ fontFamily: 'var(--mono)' }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
