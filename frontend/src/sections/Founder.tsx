import { contactLinks } from '../content/landing'
import { ContactChip } from '../components/landing/ContactChip'
import { Eyebrow } from '../components/landing/Eyebrow'
import { OperatorCard } from '../components/landing/OperatorCard'

export function Founder() {
  return (
    <section className="relative border-t border-[var(--border-primary)] bg-[var(--bg-secondary)] py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-4 sm:px-6 md:grid-cols-2 md:gap-16">
        <div className="order-2 md:order-1">
          <Eyebrow>The engineer</Eyebrow>
          <h2 className="font-display mb-2 text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl">
            Ahmed Eldessouki
          </h2>
          <p className="mb-6 text-base text-[var(--accent-ink)] md:text-lg">Automation Specialist</p>
          <p className="mb-8 max-w-lg leading-relaxed text-[var(--text-muted)]">
            I design and install smart systems across Egypt: homes, offices and warehouses. Hardware you own, networks
            you control, and a phone number that actually answers. Every project starts with a room plan and ends with
            you using it yourself.
          </p>
          <div className="flex flex-wrap gap-3">
            {contactLinks.map((link) => (
              <ContactChip key={link.label} link={link} />
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2">
          <OperatorCard />
        </div>
      </div>
    </section>
  )
}
