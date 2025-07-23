"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function RealisticEarth() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let rotation = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Create realistic Earth texture
    const createEarthTexture = () => {
      const textureCanvas = document.createElement("canvas")
      const size = 400
      textureCanvas.width = size
      textureCanvas.height = size
      const textureCtx = textureCanvas.getContext("2d")!

      // Create base ocean color
      const oceanGradient = textureCtx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
      oceanGradient.addColorStop(0, "#1e40af") // Deep blue center
      oceanGradient.addColorStop(0.7, "#1e3a8a") // Darker blue
      oceanGradient.addColorStop(1, "#1e293b") // Very dark blue edges

      textureCtx.fillStyle = oceanGradient
      textureCtx.fillRect(0, 0, size, size)

      // Add continents (simplified shapes)
      textureCtx.fillStyle = "#22c55e" // Green for land

      // North America
      textureCtx.beginPath()
      textureCtx.ellipse(80, 120, 40, 60, 0, 0, Math.PI * 2)
      textureCtx.fill()

      // South America
      textureCtx.beginPath()
      textureCtx.ellipse(100, 220, 25, 70, 0.3, 0, Math.PI * 2)
      textureCtx.fill()

      // Africa
      textureCtx.beginPath()
      textureCtx.ellipse(200, 180, 35, 80, 0, 0, Math.PI * 2)
      textureCtx.fill()

      // Europe
      textureCtx.beginPath()
      textureCtx.ellipse(190, 100, 20, 25, 0, 0, Math.PI * 2)
      textureCtx.fill()

      // Asia
      textureCtx.beginPath()
      textureCtx.ellipse(280, 120, 60, 50, 0, 0, Math.PI * 2)
      textureCtx.fill()

      // Australia
      textureCtx.beginPath()
      textureCtx.ellipse(320, 260, 25, 15, 0, 0, Math.PI * 2)
      textureCtx.fill()

      // Add some mountain ranges (darker green)
      textureCtx.fillStyle = "#16a34a"
      for (let i = 0; i < 15; i++) {
        const x = Math.random() * size
        const y = Math.random() * size
        const radius = Math.random() * 8 + 3
        textureCtx.beginPath()
        textureCtx.arc(x, y, radius, 0, Math.PI * 2)
        textureCtx.fill()
      }

      // Add ice caps
      textureCtx.fillStyle = "#f8fafc" // White for ice

      // North pole
      textureCtx.beginPath()
      textureCtx.ellipse(size / 2, 20, 60, 20, 0, 0, Math.PI * 2)
      textureCtx.fill()

      // South pole
      textureCtx.beginPath()
      textureCtx.ellipse(size / 2, size - 20, 70, 25, 0, 0, Math.PI * 2)
      textureCtx.fill()

      // Add cloud layer
      textureCtx.fillStyle = "rgba(255, 255, 255, 0.3)"
      for (let i = 0; i < 30; i++) {
        const x = Math.random() * size
        const y = Math.random() * size
        const radius = Math.random() * 20 + 10
        textureCtx.beginPath()
        textureCtx.arc(x, y, radius, 0, Math.PI * 2)
        textureCtx.fill()
      }

      return textureCanvas
    }

    const earthTexture = createEarthTexture()

    const animate = () => {
      // Clear with space background
      ctx.fillStyle = "rgba(0, 0, 0, 0.02)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = Math.min(canvas.width, canvas.height) * 0.12

      // Save context for Earth rendering
      ctx.save()
      ctx.translate(centerX, centerY)

      // Create circular clipping path for Earth
      ctx.beginPath()
      ctx.arc(0, 0, radius, 0, Math.PI * 2)
      ctx.clip()

      // Apply rotation and draw Earth texture
      ctx.rotate(rotation)
      ctx.drawImage(earthTexture, -radius, -radius, radius * 2, radius * 2)

      ctx.restore()

      // Add realistic atmosphere glow
      const atmosphereGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        radius * 0.9,
        centerX,
        centerY,
        radius * 1.4,
      )
      atmosphereGradient.addColorStop(0, "rgba(135, 206, 235, 0)")
      atmosphereGradient.addColorStop(0.6, "rgba(135, 206, 235, 0.1)")
      atmosphereGradient.addColorStop(0.8, "rgba(135, 206, 235, 0.2)")
      atmosphereGradient.addColorStop(1, "rgba(135, 206, 235, 0.4)")

      ctx.fillStyle = atmosphereGradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius * 1.4, 0, Math.PI * 2)
      ctx.fill()

      // Add subtle shadow for 3D effect
      const shadowGradient = ctx.createRadialGradient(
        centerX - radius * 0.3,
        centerY - radius * 0.3,
        0,
        centerX,
        centerY,
        radius,
      )
      shadowGradient.addColorStop(0, "rgba(0, 0, 0, 0)")
      shadowGradient.addColorStop(0.7, "rgba(0, 0, 0, 0.1)")
      shadowGradient.addColorStop(1, "rgba(0, 0, 0, 0.3)")

      ctx.fillStyle = shadowGradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.fill()

      rotation += 0.003 // Slower, more realistic rotation
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
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40" />

      {/* Additional space elements */}
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
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

      {/* Shooting stars */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-2 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 200],
            y: [0, 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 3 + Math.random() * 5,
            repeatDelay: 10,
          }}
        />
      ))}
    </div>
  )
}
