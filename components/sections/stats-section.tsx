"use client"

import { useRef } from "react"
import { useInView, useAnimation } from "framer-motion"
import { SectionHeader } from "@/components/ui/section-header"
import { StatCard } from "@/components/ui/stat-card"
import { brandConfig } from "@/config/brand-config"

export function StatsSection() {
  const statsRef = useRef<HTMLDivElement>(null)
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 })
  const statsControls = useAnimation()

  return (
    <section ref={statsRef} className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(93,63,211,0.1)_0,_rgba(0,0,0,0)_70%)]"></div>

      <div className="container mx-auto px-4">
        <SectionHeader title="Our" highlight="Track Record" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {brandConfig.stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              inView={statsInView}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
