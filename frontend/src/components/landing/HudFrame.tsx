import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

const corner = 'pointer-events-none absolute h-4 w-4 border-[var(--accent)]'

export function HudFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('relative', className)}>
      <span aria-hidden="true" className={cn(corner, '-left-px -top-px border-l-2 border-t-2')} />
      <span aria-hidden="true" className={cn(corner, '-right-px -top-px border-r-2 border-t-2')} />
      <span aria-hidden="true" className={cn(corner, '-bottom-px -left-px border-b-2 border-l-2')} />
      <span aria-hidden="true" className={cn(corner, '-bottom-px -right-px border-b-2 border-r-2')} />
      {children}
    </div>
  )
}
