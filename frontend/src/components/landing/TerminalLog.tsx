import { useEffect, useState } from 'react'
import { terminalLines } from '../../content/landing'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

const VISIBLE = 4
const TICK_MS = 1600
const total = terminalLines.length

function windowAt(index: number) {
  return Array.from({ length: VISIBLE }, (_, k) => {
    const pos = (((index - VISIBLE + 1 + k) % total) + total) % total
    return terminalLines[pos]
  })
}

export function TerminalLog() {
  const reduced = usePrefersReducedMotion()
  const [tick, setTick] = useState(0)

  useEffect(() => {
    if (reduced) return
    const id = window.setInterval(() => setTick((t) => t + 1), TICK_MS)
    return () => window.clearInterval(id)
  }, [reduced])

  const lines = windowAt(reduced ? total - 1 : tick % total)

  return (
    <div
      className="mt-5 space-y-1.5 rounded-lg border border-[var(--border-primary)] bg-[var(--bg-primary)] p-4 text-xs"
      style={{ fontFamily: 'var(--mono)' }}
      role="log"
      aria-label="Live device events"
    >
      {lines.map((line, i) => (
        <p key={line.id} className={i === lines.length - 1 ? 'text-[var(--text-primary)]' : 'text-[var(--text-faint)]'}>
          <span className="text-[var(--text-faint)]">{line.time}</span>{' '}
          <span className="text-[var(--signal)]">{line.device}</span>{' '}
          <span>{line.action}</span>
        </p>
      ))}
    </div>
  )
}
