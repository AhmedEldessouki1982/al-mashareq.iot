import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'
import { Eyebrow } from './Eyebrow'

interface SectionHeaderProps {
  eyebrow: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeader({ eyebrow, title, description, align = 'left' }: SectionHeaderProps) {
  const center = align === 'center'
  return (
    <div className={cn('mb-12 max-w-3xl md:mb-16', center && 'mx-auto text-center')}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-[var(--text-primary)] md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
