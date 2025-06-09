"use client"

import { motion } from "framer-motion"
import { PageHero } from "@/components/sections/page-hero"
import { SectionHeader } from "@/components/ui/section-header"
import { brandConfig } from "@/config/brand-config"
import { Shield, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="pt-24 bg-black text-white">
      <PageHero
        title={`About ${brandConfig.name}`}
        description="We are a team of elite security specialists dedicated to recovering digital assets and accounts with unmatched precision and expertise."
      />

      {/* Our Story Section */}
      <section className="py-16 bg-gradient-to-b from-black to-purple-950/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="h-1 w-20 bg-purple-500 mb-6"></div>
              <p className="text-gray-300 mb-4">{brandConfig.story.mission}</p>
              <p className="text-gray-300 mb-4">{brandConfig.story.growth}</p>
              <p className="text-gray-300">{brandConfig.story.expertise}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl"></div>
              <div className="relative rounded-xl overflow-hidden bg-purple-900/30 border border-purple-500/30 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Shield className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                  <p className="text-gray-400">Team Image Placeholder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeader title="Our" highlight="Values" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandConfig.values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="bg-black/50 border border-purple-900/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 rounded-lg p-6"
              >
                <div className="mb-4 p-3 rounded-lg bg-purple-900/20 w-fit">
                  <value.icon className="h-10 w-10 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-b from-purple-950/20 to-black">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our"
            highlight="Team"
            description="Our team consists of world-class security experts, cryptographers, and recovery specialists with decades of combined experience."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandConfig.team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="bg-black/50 border border-purple-900/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 rounded-lg overflow-hidden"
              >
                <div className="relative bg-purple-900/30 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <Users className="h-12 w-12 text-purple-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Team Member Photo</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-purple-400 mb-3">{member.role}</p>
                  <p className="text-gray-400">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
