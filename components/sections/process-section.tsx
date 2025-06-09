import { SectionHeader } from "@/components/ui/section-header"
import { ProcessStep } from "@/components/ui/process-step"
import { brandConfig } from "@/config/brand-config"

export function ProcessSection() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(93,63,211,0.1)_0,_rgba(0,0,0,0)_70%)]"></div>

      <div className="container mx-auto px-4">
        <SectionHeader
          title="How We"
          highlight="Work"
          description="Our systematic approach ensures maximum efficiency and success rate for all recovery operations."
        />

        <div className="max-w-4xl mx-auto">
          {brandConfig.process.map((step, index) => (
            <ProcessStep
              key={index}
              step={step.step}
              title={step.title}
              description={step.description}
              index={index}
              isLast={index === brandConfig.process.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
