import type { FaqItem as FaqEntry } from '../../content/landing'

export function FaqItem({ item }: { item: FaqEntry }) {
  return (
    <details className="group border-b border-[var(--border-primary)] transition-colors open:bg-[var(--bg-card)]">
      <summary className="flex cursor-pointer list-none select-none items-center justify-between gap-6 py-5 text-[var(--text-primary)] transition-colors hover:text-[var(--signal)] md:py-6">
        <span className="font-display text-base font-semibold md:text-lg">{item.q}</span>
        <span
          aria-hidden="true"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--signal-border)] text-[var(--signal)] transition-transform duration-200 group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <p className="max-w-2xl pb-6 text-sm leading-relaxed text-[var(--text-muted)] md:text-base">{item.a}</p>
    </details>
  )
}
