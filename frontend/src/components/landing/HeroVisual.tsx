import { HudFrame } from './HudFrame'
import { SignalNetwork } from './SignalNetwork'
import { TerminalLog } from './TerminalLog'

export function HeroVisual() {
  return (
    <div className="w-full max-w-md justify-self-center lg:justify-self-end">
      <HudFrame className="rounded-xl border border-[var(--border-primary)] bg-[var(--bg-card)]/70 p-5 backdrop-blur-sm">
        <div className="mb-4 flex items-center justify-between text-xs" style={{ fontFamily: 'var(--mono)' }}>
          <span className="uppercase tracking-[0.2em] text-[var(--text-secondary)]">System map</span>
          <span className="flex items-center gap-2 text-[var(--signal)]">
            <span className="status-pulse" aria-hidden="true" />
            Online
          </span>
        </div>
        <SignalNetwork />
        <TerminalLog />
      </HudFrame>
    </div>
  )
}
