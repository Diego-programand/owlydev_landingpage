import { HeroAnimatedContent } from './HeroAnimatedContent'
import { HeroMascot } from './HeroMascot'
import { HeroScrollIndicator } from './HeroScrollIndicator'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100svh-80px)] xl:min-h-[calc(100svh-72px)] flex-col bg-[var(--color-surface-base)]"
    >
      <div className="mx-auto flex w-full max-w-[var(--max-hero)] flex-1 flex-col px-6 pb-16 pt-20 md:pb-24 md:pt-32 lg:px-8">
        <div className="flex flex-1 flex-col justify-center">
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[60fr_40fr] lg:items-center lg:gap-16">
            <HeroAnimatedContent />
            <HeroMascot />
          </div>
        </div>
        <HeroScrollIndicator />
      </div>
    </section>
  )
}
