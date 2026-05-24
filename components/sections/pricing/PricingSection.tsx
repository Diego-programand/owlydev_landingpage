import { PricingSectionHeader } from './PricingSectionHeader'
import { PricingMascot } from './PricingMascot'
import { PricingColumns } from './PricingColumns'

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="section-edge bg-[var(--color-surface-base)] py-[var(--padding-section-narrative-mobile)] md:py-[var(--padding-section-narrative)]"
    >
      <div className="mx-auto w-full max-w-[var(--max-content)] px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <PricingSectionHeader />
          <PricingMascot />
          <PricingColumns />
        </div>
      </div>
    </section>
  )
}
