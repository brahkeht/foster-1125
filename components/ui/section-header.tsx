"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  title: string
  highlight?: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({ title, highlight, description, centered = true, className = "" }: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""} mb-16 ${className}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        {title} {highlight && <span className="text-purple-400">{highlight}</span>}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: "100px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`h-1 bg-gradient-to-r from-purple-500 to-blue-500 ${centered ? "mx-auto" : ""} mb-6`}
      ></motion.div>
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
