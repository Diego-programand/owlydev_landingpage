import { TestimonialsLayout } from './TestimonialsLayout'

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="section-edge bg-[var(--color-surface-recessed)] py-[var(--padding-section-transitional-mobile)] md:py-[var(--padding-section-transitional)]"
    >
      <div className="mx-auto w-full max-w-[var(--max-content)] px-6 lg:px-8">
        <TestimonialsLayout />
      </div>
    </section>
  )
}
