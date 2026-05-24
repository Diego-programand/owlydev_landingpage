import { CTAContent } from './CTAContent'

export default function CTASection() {
  return (
    <section
      id="contact"
      className="bg-[var(--color-surface-deep)] py-[var(--padding-section-narrative-mobile)] md:py-[var(--padding-section-narrative)]"
    >
      <div className="mx-auto w-full max-w-[var(--max-content)] px-6 lg:px-8">
        <CTAContent />
      </div>
    </section>
  )
}
