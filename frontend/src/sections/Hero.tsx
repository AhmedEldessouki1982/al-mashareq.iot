import { HeroCopy } from '../components/landing/HeroCopy'
import { HeroVisual } from '../components/landing/HeroVisual'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="hero-grid" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <HeroCopy />
        <HeroVisual />
      </div>
    </section>
  )
}
