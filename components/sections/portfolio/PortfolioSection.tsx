import { PortfolioHeader } from './PortfolioHeader'
import { PortfolioItems } from './PortfolioItems'

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="section-edge bg-[var(--color-surface-deep)] py-[var(--padding-section-standard-mobile)] md:py-[var(--padding-section-standard)]"
    >
      <div className="mx-auto w-full max-w-[var(--max-content)] px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          <PortfolioHeader />
          <PortfolioItems />
        </div>
      </div>
    </section>
  )
}
