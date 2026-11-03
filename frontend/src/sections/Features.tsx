import { services } from '../content/landing'
import { SectionHeader } from '../components/landing/SectionHeader'
import { ServiceCard } from '../components/landing/ServiceCard'

export function Features() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="What we do"
          title={
            <>
              Four layers.
              <br /> One system.
            </>
          }
          description="We connect the hardware, write the software that runs it, and automate the way your site behaves."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
