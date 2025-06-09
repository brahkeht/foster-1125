"use client"

import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { StatsSection } from "@/components/sections/stats-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ProcessSection } from "@/components/sections/process-section"
import { CTASection } from "@/components/sections/cta-section"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <ProcessSection />
      <CTASection
        title="Ready to Recover Your Digital Assets?"
        description="Don't let digital barriers stand between you and your valuable assets. Our team is ready to help you regain access with our industry-leading recovery techniques."
        buttonText="Contact Our Team"
        buttonLink="/contact"
      />
    </main>
  )
}
