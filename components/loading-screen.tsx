"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Zap, Rocket, Star, Heart, Coffee } from "lucide-react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState("Initializing...")

  const loadingTexts = [
    "Initializing...",
    "Loading AI Models...",
    "Compiling Code...",
    "Brewing Coffee...",
    "Connecting to Matrix...",
    "Almost Ready...",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.random() * 15 + 5
        const newProgress = Math.min(prev + increment, 100)

        // Update text based on progress
        const textIndex = Math.floor((newProgress / 100) * (loadingTexts.length - 1))
        setCurrentText(loadingTexts[textIndex])

        if (newProgress >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 800)
        }

        return newProgress
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#16213e] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="text-center relative z-10">
            {/* Doodle Animation */}
            <motion.div
              className="mb-12 relative"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="w-32 h-32 mx-auto relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                {/* Central Circle */}
                <motion.div
                  className="absolute inset-4 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center"
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 0 20px rgba(121, 40, 202, 0.5)",
                      "0 0 40px rgba(255, 0, 128, 0.8)",
                      "0 0 20px rgba(121, 40, 202, 0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Code className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>

                {/* Orbiting Icons */}
                {[
                  { icon: Zap, angle: 0, color: "#00f5a0" },
                  { icon: Rocket, angle: 120, color: "#ff0080" },
                  { icon: Star, angle: 240, color: "#00d9f5" },
                ].map(({ icon: Icon, angle, color }, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-8 h-8 flex items-center justify-center rounded-full"
                    style={{
                      backgroundColor: `${color}20`,
                      border: `2px solid ${color}`,
                      left: "50%",
                      top: "50%",
                    }}
                    animate={{
                      rotate: [angle, angle + 360],
                      x: [
                        Math.cos((angle * Math.PI) / 180) * 50 - 16,
                        Math.cos(((angle + 360) * Math.PI) / 180) * 50 - 16,
                      ],
                      y: [
                        Math.sin((angle * Math.PI) / 180) * 50 - 16,
                        Math.sin(((angle + 360) * Math.PI) / 180) * 50 - 16,
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color }} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Loading Text */}
            <motion.h1
              className="text-4xl md:text-6xl font-bold gradient-text mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Rishul.dev
            </motion.h1>

            <motion.p
              className="text-zinc-400 mb-8 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {currentText}
            </motion.p>

            {/* Progress Bar */}
            <motion.div
              className="w-80 max-w-sm mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="relative">
                <div className="h-2 bg-[#2A2A3C] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <motion.div
                  className="absolute -top-1 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full"
                  style={{ left: `calc(${progress}% - 8px)` }}
                  animate={{
                    boxShadow: [
                      "0 0 10px rgba(121, 40, 202, 0.5)",
                      "0 0 20px rgba(255, 0, 128, 0.8)",
                      "0 0 10px rgba(121, 40, 202, 0.5)",
                    ],
                  }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
              <motion.p
                className="text-center mt-4 text-primary font-mono text-lg font-bold"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                {Math.round(progress)}%
              </motion.p>
            </motion.div>

            {/* Fun Doodles */}
            <div className="absolute inset-0 pointer-events-none">
              {[Heart, Coffee, Star].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="absolute text-primary/30"
                  style={{
                    left: `${20 + index * 30}%`,
                    top: `${30 + index * 20}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2 + index,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.5,
                  }}
                >
                  <Icon className="w-6 h-6" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
