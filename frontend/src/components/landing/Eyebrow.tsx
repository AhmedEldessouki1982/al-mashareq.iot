import { cn } from '../../lib/utils'

export function Eyebrow({ children, className }: { children: string; className?: string }) {
  return (
    <p
      className={cn('mb-4 text-xs uppercase tracking-[0.3em] text-[var(--signal)]', className)}
      style={{ fontFamily: 'var(--mono)' }}
    >
      // {children}
    </p>
  )
}
