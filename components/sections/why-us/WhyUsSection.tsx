import { WhyUsSectionHeader } from './WhyUsSectionHeader'
import { WhyUsItems } from './WhyUsItems'

export default function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="section-edge bg-[var(--color-surface-recessed)] py-[var(--padding-section-standard)] md:py-[var(--padding-section-narrative)]"
    >
      <div className="mx-auto w-full max-w-[var(--max-content)] px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          <WhyUsSectionHeader />
          <WhyUsItems />
        </div>
      </div>
    </section>
  )
}
