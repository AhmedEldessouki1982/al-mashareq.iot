import { faqs } from '../content/landing'
import { FaqItem } from '../components/landing/FaqItem'
import { SectionHeader } from '../components/landing/SectionHeader'

export function FAQ() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="hero-grid" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeader eyebrow="Before you ask" title="Frequently asked" align="center" />
        <div className="border-t border-[var(--border-primary)]">
          {faqs.map((item) => (
            <FaqItem key={item.q} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
