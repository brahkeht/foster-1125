"use client"

import type React from "react"
import { brandConfig } from "@/config/brand-config"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PageHero } from "@/components/sections/page-hero"
import { CTASection } from "@/components/sections/cta-section"

interface ServiceDetailProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  index: number
}

function ServiceDetail({ icon, title, description, features, index }: ServiceDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 * index }}
      className="mb-20 last:mb-0"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className={index % 2 === 0 ? "order-1 md:order-1" : "order-2 md:order-2"}>
          <div className="mb-4 p-4 rounded-lg bg-purple-900/20 w-fit">{icon}</div>
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <div className="h-1 w-20 bg-purple-500 mb-6"></div>
          <p className="text-gray-300 mb-6">{description}</p>

          <ul className="space-y-3 mb-8">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>

          <Link href="/contact">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
          </Link>
        </div>

        <div className={index % 2 === 0 ? "order-2 md:order-2" : "order-1 md:order-1"}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl"></div>
            <div className="relative h-64 md:h-80 rounded-xl bg-purple-900/30 border border-purple-500/30 flex items-center justify-center">
              <div className="p-8">{icon}</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ServicesPage() {
  return (
    <main className="pt-24 bg-black text-white">
      <PageHero
        title="Our Services"
        description="We offer specialized recovery services with industry-leading success rates, backed by advanced proprietary technology."
      />

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {brandConfig.services.map((service, index) => (
            <ServiceDetail
              key={service.id}
              icon={<service.icon className="h-12 w-12 text-purple-400" />}
              title={service.title}
              description={service.fullDescription}
              features={service.features}
              index={index}
            />
          ))}
        </div>
      </section>

      <CTASection
        title="Need a Custom Recovery Solution?"
        description="We understand that every recovery case is unique. Contact us for a personalized consultation and solution tailored to your specific needs."
        buttonText="Contact Our Team"
        buttonLink="/contact"
      />
    </main>
  )
}
