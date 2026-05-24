import Navbar from '@/components/Navbar'
import HeroSection from '@/components/sections/hero/HeroSection'
import WhyUsSection from '@/components/sections/why-us/WhyUsSection'
import ServicesSection from '@/components/sections/services/ServicesSection'
import PortfolioSection from '@/components/sections/portfolio/PortfolioSection'
import PricingSection from '@/components/sections/pricing/PricingSection'
import TestimonialsSection from '@/components/sections/testimonials/TestimonialsSection'
import FAQSection from '@/components/sections/faq/FAQSection'
import CTASection from '@/components/sections/cta/CTASection'

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--color-surface-base)]">
      <Navbar />
      <HeroSection />
      <WhyUsSection />
      <ServicesSection />
      <PortfolioSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
