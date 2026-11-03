import { useEffect, useState } from 'react'
import { useInView } from '../../hooks/useInView'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

const STEPS = 40
const STEP_MS = 30

export function StatCounter({ value }: { value: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>()
  const reduced = usePrefersReducedMotion()
  const target = parseInt(value, 10)
  const isNumeric = !Number.isNaN(target)
  const suffix = value.replace(/^\d+/, '')
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView || !isNumeric || reduced) return
    let step = 0
    const id = window.setInterval(() => {
      step += 1
      setCount(Math.round((target * step) / STEPS))
      if (step >= STEPS) window.clearInterval(id)
    }, STEP_MS)
    return () => window.clearInterval(id)
  }, [inView, reduced, target, isNumeric])

  const shown = reduced ? target : count

  return <span ref={ref}>{isNumeric ? `${shown}${suffix}` : value}</span>
}
