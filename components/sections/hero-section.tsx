"use client"

import { motion, useTransform, useScroll } from "framer-motion"
import { Shield, Lock, Code, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { brandConfig } from "@/config/brand-config"

export function HeroSection() {
  const { scrollY } = useScroll()
  const heroTextY = useTransform(scrollY, [0, 500], [0, 150])
  const heroBackgroundY = useTransform(scrollY, [0, 500], [0, -50])

  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      {/* Background gradient (lighter, cheaper) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>
      </div>

      {/* Hero content */}
      <div className="container relative z-10 mx-auto px-4 py-12 flex flex-col justify-center">
        <motion.div className="max-w-4xl">
          {/* Glitch effect badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6 relative"
          >
            <div className="py-2 px-4 rounded-full bg-black/80 border border-purple-500/50 backdrop-blur-sm relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
              />
              <span className="text-sm font-medium text-purple-300 relative z-10">🔒 {brandConfig.tagline}</span>
            </div>
          </motion.div>

          {/* Main heading with typewriter effect */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight"
          >
            <motion.span
              className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              BREACH
            </motion.span>
            <motion.span
              className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              THE IMPOSSIBLE
              {/* Glitch effect overlay */}
              <motion.span
                className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-400"
                animate={{
                  opacity: [0, 0.7, 0],
                  x: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 4,
                  times: [0, 0.1, 0.2, 1],
                }}
              >
                THE IMPOSSIBLE
              </motion.span>
            </motion.span>
          </motion.h1>

          {/* Subtitle with terminal-style cursor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-8 font-mono text-lg md:text-xl text-green-400"
          >
            <span className="text-gray-500">root@securerecover:~$ </span>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ duration: 2, delay: 1.2 }}
              className="inline-block overflow-hidden"
            >
              Recovering what others can't access...
            </motion.span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
              className="inline-block w-2 h-5 bg-green-400 ml-1"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl leading-relaxed"
          >
            When digital barriers stand between you and your assets, we break through.
            <span className="text-purple-300 font-semibold"> Advanced cryptographic techniques</span>,
            <span className="text-blue-300 font-semibold"> proprietary recovery tools</span>, and
            <span className="text-purple-300 font-semibold"> unmatched expertise</span> - your digital fortress awaits
            breach.
          </motion.p>

          {/* CTA Buttons with hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-wrap gap-6"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 hover:from-purple-700 hover:via-purple-800 hover:to-blue-700 text-white border-0 px-8 py-6 text-lg font-bold relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center">
                  INITIATE RECOVERY
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </span>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-500/50 text-purple-300 hover:bg-purple-950/50 hover:border-purple-400 px-8 py-6 text-lg font-bold backdrop-blur-sm relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-purple-500/10"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">VIEW CASE STUDIES</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Security badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-wrap items-center gap-6 mt-12 text-sm text-gray-400"
          >
            {brandConfig.securityBadges.map((badge, index) => (
              <div key={index} className="flex items-center">
                <badge.icon className="h-4 w-4 text-green-400 mr-2" />
                <span>{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          className="flex flex-col items-center cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <span className="text-xs text-gray-500 mb-2 font-mono">SCROLL TO BREACH</span>
          <div className="w-6 h-10 rounded-full border-2 border-purple-500/50 flex justify-center pt-2 relative overflow-hidden">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="w-1 h-3 rounded-full bg-purple-500"
            />
            <motion.div
              className="absolute inset-0 border-2 border-purple-400 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Threat detection overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
        className="absolute top-4 right-4 bg-red-900/20 border border-red-500/30 rounded-lg p-3 backdrop-blur-sm"
      >
        <div className="flex items-center text-red-400 text-sm font-mono">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            className="w-2 h-2 bg-red-500 rounded-full mr-2"
          />
          THREAT DETECTED
        </div>
      </motion.div>
    </section>
  )
}
