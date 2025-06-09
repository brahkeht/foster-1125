"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

export function ServiceCard({ icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 * index }}
    >
      <Card className="bg-black/50 border border-purple-900/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 h-full">
        <CardContent className="p-6">
          <div className="mb-4 p-3 rounded-lg bg-purple-900/20 w-fit">{icon}</div>
          <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
