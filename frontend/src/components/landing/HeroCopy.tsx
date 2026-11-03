import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

export function HeroCopy() {
  return (
    <div>
      <p className="arabic-wordmark mb-2 text-[1.75rem] leading-none text-[var(--text-primary)] md:text-[2.125rem]">
        المشارق
      </p>
      <p className="mb-8 text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]" style={{ fontFamily: 'var(--mono)' }}>
        AL-Mashareq · Est. 2019
      </p>
      <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[var(--signal)]" style={{ fontFamily: 'var(--mono)' }}>
        Integration · Software · Automation
      </p>
      <h1 className="font-display mb-6 text-[clamp(2.75rem,6.5vw,5rem)] font-bold leading-[0.95] tracking-tight text-[var(--text-primary)]">
        Connect it.
        <br />
        Automate it.
        <br />
        <span className="text-[var(--accent-ink)]">Own it.</span>
      </h1>
      <p className="mb-10 max-w-lg text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
        We integrate, program and automate smart hardware for homes and offices across Egypt. One platform, no
        monthly subscription, and a phone number that answers.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg" className="h-12 rounded-md bg-[var(--accent)] px-8 font-semibold text-[#1A1A1A] hover:bg-[var(--accent-hover)]">
          <Link to="/contact">
            Start a project
            <ArrowRight />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="h-12 rounded-md border-[var(--signal-border)] px-8 text-[var(--text-primary)] hover:bg-[var(--signal-muted)]">
          <Link to="/shop">Explore hardware</Link>
        </Button>
      </div>
    </div>
  )
}
