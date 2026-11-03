import { hub, signalNodes } from '../../content/landing'
import { NetworkLink } from './NetworkLink'
import { NetworkNode } from './NetworkNode'

export function SignalNetwork() {
  return (
    <div className="relative aspect-square w-full">
      <div aria-hidden="true" className="absolute inset-[14%] rounded-full border border-dashed border-[var(--border-primary)]" />
      <div aria-hidden="true" className="absolute inset-[30%] rounded-full border border-dashed border-[var(--border-primary)]" />
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
        {signalNodes.map((node, i) => (
          <NetworkLink key={node.label} from={node} to={hub} delay={i * 0.45} />
        ))}
      </svg>
      <NetworkNode node={hub} hub />
      {signalNodes.map((node) => (
        <NetworkNode key={node.label} node={node} />
      ))}
    </div>
  )
}
