import type { SignalNode } from '../../content/landing'
import { cn } from '../../lib/utils'

interface NetworkNodeProps {
  node: SignalNode
  hub?: boolean
}

export function NetworkNode({ node, hub = false }: NetworkNodeProps) {
  const Icon = node.icon
  return (
    <div
      className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
      style={{ left: `${node.x}%`, top: `${node.y}%` }}
    >
      <div
        className={cn(
          'relative flex items-center justify-center rounded-lg border bg-[var(--bg-primary)]',
          hub
            ? 'h-16 w-16 border-[var(--signal)] shadow-[0_0_32px_var(--signal-muted)]'
            : 'h-11 w-11 border-[var(--border-secondary)]',
        )}
      >
        <Icon className={cn(hub ? 'h-7 w-7 text-[var(--signal)]' : 'h-5 w-5 text-[var(--accent-ink)]')} />
        {!hub && <span aria-hidden="true" className="status-pulse absolute -right-1 -top-1" />}
      </div>
      <span
        className="whitespace-nowrap text-[10px] uppercase tracking-[0.15em] text-[var(--text-secondary)]"
        style={{ fontFamily: 'var(--mono)' }}
      >
        {node.label}
      </span>
    </div>
  )
}
