import { pipeline } from '../content/landing'
import { SectionHeader } from '../components/landing/SectionHeader'
import { ProcessStep } from '../components/landing/ProcessStep'

export function Pipeline() {
  return (
    <section id="process" className="relative border-t border-[var(--border-primary)] bg-[var(--bg-secondary)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="How it runs"
          title={
            <>
              From site visit to a system
              <br className="hidden md:block" /> that runs itself.
            </>
          }
          description="Five steps. Each one ends with something you can check."
        />
        <ol className="relative grid gap-10 md:grid-cols-5 md:gap-6">
          <span aria-hidden="true" className="pipeline-line hidden md:block" />
          {pipeline.map((step, i) => (
            <ProcessStep key={step.title} step={step} index={i} />
          ))}
        </ol>
      </div>
    </section>
  )
}
