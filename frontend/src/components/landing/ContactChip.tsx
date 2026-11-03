import type { ContactLink } from '../../content/landing'

export function ContactChip({ link }: { link: ContactLink }) {
  const Icon = link.icon
  return (
    <a
      href={link.href}
      target={link.external ? '_blank' : undefined}
      rel={link.external ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-primary)] bg-[var(--bg-card)] px-4 py-2.5 text-sm text-[var(--text-primary)] transition-colors hover:border-[var(--signal-border)] hover:text-[var(--signal)]"
    >
      <Icon className="h-4 w-4 text-[var(--signal)]" aria-hidden="true" />
      {link.value}
    </a>
  )
}
