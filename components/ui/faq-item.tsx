"use client"

import { motion } from "framer-motion"

interface FAQItemProps {
  question: string
  answer: string
  index: number
}

export function FAQItem({ question, answer, index }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 * index }}
      className="mb-6 bg-black/50 border border-purple-900/50 backdrop-blur-sm rounded-lg p-6"
    >
      <h3 className="text-xl font-bold mb-3">{question}</h3>
      <p className="text-gray-400">{answer}</p>
    </motion.div>
  )
}
