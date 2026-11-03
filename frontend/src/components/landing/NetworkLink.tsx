import type { Point } from '../../content/landing'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

interface NetworkLinkProps {
  from: Point
  to: Point
  delay: number
}

export function NetworkLink({ from, to, delay }: NetworkLinkProps) {
  const reduced = usePrefersReducedMotion()
  const path = `M ${from.x} ${from.y} L ${to.x} ${to.y}`
  return (
    <g>
      <path d={path} className="flow-line" />
      {!reduced && (
        <circle cx={from.x} cy={from.y} r="0.9" className="fill-[var(--signal)]">
          <animateMotion dur="2.8s" begin={`${delay}s`} repeatCount="indefinite" path={path} />
        </circle>
      )}
    </g>
  )
}
