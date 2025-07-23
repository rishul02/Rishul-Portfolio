"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function RotatingEarth() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Create Earth-like pattern
    const createEarthPattern = () => {
      const patternCanvas = document.createElement("canvas")
      patternCanvas.width = 200
      patternCanvas.height = 200
      const patternCtx = patternCanvas.getContext("2d")!

      // Create a simple Earth-like texture
      const gradient = patternCtx.createRadialGradient(100, 100, 0, 100, 100, 100)
      gradient.addColorStop(0, "#4ade80")
      gradient.addColorStop(0.3, "#22c55e")
      gradient.addColorStop(0.6, "#16a34a")
      gradient.addColorStop(1, "#15803d")

      patternCtx.fillStyle = gradient
      patternCtx.fillRect(0, 0, 200, 200)

      // Add some "continents"
      patternCtx.fillStyle = "#065f46"
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * 200
        const y = Math.random() * 200
        const size = Math.random() * 30 + 10
        patternCtx.beginPath()
        patternCtx.arc(x, y, size, 0, Math.PI * 2)
        patternCtx.fill()
      }

      return patternCanvas
    }

    const earthTexture = createEarthPattern()
    let rotation = 0

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.02)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = Math.min(canvas.width, canvas.height) * 0.15

      // Draw Earth
      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(rotation)

      // Create circular clipping path
      ctx.beginPath()
      ctx.arc(0, 0, radius, 0, Math.PI * 2)
      ctx.clip()

      // Draw the Earth texture
      ctx.drawImage(earthTexture, -radius, -radius, radius * 2, radius * 2)

      ctx.restore()

      // Add atmosphere glow
      const atmosphereGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        radius * 0.8,
        centerX,
        centerY,
        radius * 1.3,
      )
      atmosphereGradient.addColorStop(0, "rgba(59, 130, 246, 0)")
      atmosphereGradient.addColorStop(0.7, "rgba(59, 130, 246, 0.1)")
      atmosphereGradient.addColorStop(1, "rgba(59, 130, 246, 0.3)")

      ctx.fillStyle = atmosphereGradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius * 1.3, 0, Math.PI * 2)
      ctx.fill()

      rotation += 0.005
      animationId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    const handleResize = () => {
      resizeCanvas()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30" />

      {/* Additional space elements */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}
