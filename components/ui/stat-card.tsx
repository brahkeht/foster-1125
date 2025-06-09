"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import CountUp from "react-countup"

interface StatCardProps {
  value: number
  suffix: string
  label: string
  inView: boolean
  index: number
}

export function StatCard({ value, suffix, label, inView, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 * index }}
      className="text-center"
    >
      <Card className="bg-black/50 border border-purple-900/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 overflow-hidden relative h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10"></div>
        <CardContent className="p-6 relative">
          <div className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            {inView && <CountUp end={value} duration={2.5} suffix={suffix} preserveValue />}
          </div>
          <p className="text-gray-400">{label}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
