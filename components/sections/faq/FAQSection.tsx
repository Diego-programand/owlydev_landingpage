import { FAQLayout } from './FAQLayout'

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="section-edge bg-[var(--color-surface-base)] py-[var(--padding-section-standard-mobile)] md:py-[var(--padding-section-standard)]"
    >
      <div className="mx-auto w-full max-w-[var(--max-content)] px-6 lg:px-8">
        <FAQLayout />
      </div>
    </section>
  )
}
