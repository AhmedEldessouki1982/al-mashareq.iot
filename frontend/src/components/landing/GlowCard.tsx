import type { PointerEvent, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/utils'

interface GlowCardProps {
  children: ReactNode
  className?: string
  to?: string
}

function trackPointer(e: PointerEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
}

export function GlowCard({ children, className, to }: GlowCardProps) {
  const classes = cn(
    'glow-card group block overflow-hidden rounded-xl border border-[var(--border-primary)] bg-[var(--bg-card)] p-6 transition-colors duration-300 hover:border-[var(--signal-border)] md:p-8',
    className,
  )

  if (to) {
    return (
      <Link to={to} className={classes} onPointerMove={trackPointer}>
        {children}
      </Link>
    )
  }

  return (
    <div className={classes} onPointerMove={trackPointer}>
      {children}
    </div>
  )
}
