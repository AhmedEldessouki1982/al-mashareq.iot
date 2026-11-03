import { Hero } from '../sections/Hero'
import { Marquee } from '../sections/Marquee'
import { Features } from '../sections/Features'
import { Pipeline } from '../sections/Pipeline'
import { Stats } from '../sections/Stats'
import { Founder } from '../sections/Founder'
import { FAQ } from '../sections/FAQ'
import { CtaBand } from '../sections/CtaBand'

export default function Home() {
  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <Hero />
      <Marquee />
      <Features />
      <Pipeline />
      <Stats />
      <Founder />
      <FAQ />
      <CtaBand />
    </div>
  )
}
