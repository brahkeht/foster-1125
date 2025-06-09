"use client"

import { motion } from "framer-motion"

interface ProcessStepProps {
  step: string
  title: string
  description: string
  index: number
  isLast?: boolean
}

export function ProcessStep({ step, title, description, index, isLast = false }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 * index }}
      className="flex items-start mb-12 relative"
    >
      {!isLast && (
        <div className="absolute left-10 top-16 w-1 h-24 bg-gradient-to-b from-purple-500 to-transparent"></div>
      )}

      <div className="flex-shrink-0 mr-6">
        <div className="w-20 h-20 rounded-full bg-purple-900/30 border border-purple-500/50 flex items-center justify-center text-2xl font-bold text-purple-400">
          {step}
        </div>
      </div>

      <div className="pt-3">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  )
}
