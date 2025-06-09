import { brandConfig } from "@/config/brand-config"
import { SectionHeader } from "@/components/ui/section-header"
import { TestimonialCard } from "@/components/ui/testimonial-card"

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-950/20">
      <div className="container mx-auto px-4">
        <SectionHeader title="Client" highlight="Testimonials" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandConfig.testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
