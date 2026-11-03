import { ArrowUpRight } from 'lucide-react'
import type { Service } from '../../content/landing'
import { cn } from '../../lib/utils'
import { GlowCard } from './GlowCard'

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <GlowCard to={service.to} className={cn('flex min-h-[230px] flex-col gap-6', service.wide && 'md:col-span-2')}>
      <div className="flex items-start justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--signal-border)] bg-[var(--signal-muted)]">
          <Icon className="h-5 w-5 text-[var(--signal)]" aria-hidden="true" />
        </span>
        <ArrowUpRight
          aria-hidden="true"
          className="h-5 w-5 text-[var(--text-faint)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent-ink)]"
        />
      </div>
      <div>
        <h3 className="font-display mb-2 text-2xl font-bold tracking-tight text-[var(--text-primary)]">{service.title}</h3>
        <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)] md:text-base">{service.desc}</p>
      </div>
      <ul className="mt-auto flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-[var(--border-primary)] px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-[var(--text-secondary)]"
            style={{ fontFamily: 'var(--mono)' }}
          >
            {tag}
          </li>
        ))}
      </ul>
    </GlowCard>
  )
}
