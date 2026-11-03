import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Eyebrow } from '../components/landing/Eyebrow'
import { HudFrame } from '../components/landing/HudFrame'

export function CtaBand() {
  return (
    <section className="px-4 pb-24 sm:px-6 md:pb-32">
      <HudFrame className="mx-auto max-w-4xl rounded-2xl border border-[var(--border-primary)] bg-[var(--bg-card)] px-6 py-14 text-center md:px-16 md:py-20">
        <Eyebrow>Next step</Eyebrow>
        <h2 className="font-display mx-auto mb-8 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[var(--text-primary)] md:text-5xl">
          Tell us about your site. We will map the system.
        </h2>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="h-12 rounded-md bg-[var(--accent)] px-8 font-semibold text-[#1A1A1A] hover:bg-[var(--accent-hover)]">
            <Link to="/contact">Start a project</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-12 rounded-md px-8">
            <a href="https://wa.me/201285696767" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
        </div>
      </HudFrame>
    </section>
  )
}
