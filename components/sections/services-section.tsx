import { SectionHeader } from "@/components/ui/section-header"
import { ServiceCard } from "@/components/ui/service-card"
import { brandConfig } from "@/config/brand-config"

export function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-950/20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our"
          highlight="Services"
          description="We offer specialized recovery services with industry-leading success rates, backed by advanced proprietary technology."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandConfig.services.map((service, index) => (
            <ServiceCard
              key={service.id}
              icon={<service.icon className="h-10 w-10 text-purple-400" />}
              title={service.title}
              description={service.shortDescription}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
