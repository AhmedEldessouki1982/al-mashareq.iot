import type { ProcessItem } from '../../content/landing'

interface ProcessStepProps {
  step: ProcessItem
  index: number
}

export function ProcessStep({ step, index }: ProcessStepProps) {
  return (
    <li className="relative pl-14 md:pl-0 md:pt-14">
      <span
        className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--signal-border)] bg-[var(--bg-primary)] text-xs text-[var(--signal)]"
        style={{ fontFamily: 'var(--mono)' }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="font-display mb-2 text-xl font-bold text-[var(--text-primary)]">{step.title}</h3>
      <p className="text-sm leading-relaxed text-[var(--text-muted)]">{step.desc}</p>
    </li>
  )
}
