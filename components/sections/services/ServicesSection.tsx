import { ServicesSectionHeader } from './ServicesSectionHeader'
import { ServicesItems } from './ServicesItems'

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section-edge bg-[var(--color-surface-base)] py-[var(--padding-section-transitional-mobile)] md:py-[var(--padding-section-transitional)]"
    >
      <div className="mx-auto w-full max-w-[var(--max-content)] px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          <ServicesSectionHeader />
          <ServicesItems />
        </div>
      </div>
    </section>
  )
}
