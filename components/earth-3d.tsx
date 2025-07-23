"use client"

import { useEffect, useRef } from "react"

export function Earth3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let rotation = 0
    let animationId: number

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Load Earth texture
    const earthImage = new Image()
    earthImage.crossOrigin = "anonymous"
    earthImage.src = "/placeholder.svg?height=400&width=800&text=Earth+Texture"

    const animate = () => {
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = Math.min(canvas.width, canvas.height) * 0.15

      ctx.clearRect(centerX - radius - 50, centerY - radius - 50, (radius + 50) * 2, (radius + 50) * 2)

      // Draw Earth shadow/atmosphere
      const atmosphereGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        radius * 0.8,
        centerX,
        centerY,
        radius * 1.5,
      )
      atmosphereGradient.addColorStop(0, "rgba(100, 149, 237, 0)")
      atmosphereGradient.addColorStop(0.7, "rgba(100, 149, 237, 0.2)")
      atmosphereGradient.addColorStop(1, "rgba(100, 149, 237, 0.5)")

      ctx.fillStyle = atmosphereGradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius * 1.5, 0, Math.PI * 2)
      ctx.fill()

      // Draw Earth
      ctx.save()
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.clip()

      // Earth base color (ocean blue)
      const earthGradient = ctx.createRadialGradient(
        centerX - radius * 0.3,
        centerY - radius * 0.3,
        0,
        centerX,
        centerY,
        radius,
      )
      earthGradient.addColorStop(0, "#4A90E2")
      earthGradient.addColorStop(0.5, "#2E5BBA")
      earthGradient.addColorStop(1, "#1A365D")

      ctx.fillStyle = earthGradient
      ctx.fillRect(centerX - radius, centerY - radius, radius * 2, radius * 2)

      // Draw continents (simplified)
      ctx.fillStyle = "#228B22"

      // Rotate for animation
      ctx.translate(centerX, centerY)
      ctx.rotate(rotation)
      ctx.translate(-centerX, -centerY)

      // Draw simplified continents
      const continents = [
        { x: centerX - 30, y: centerY - 20, w: 40, h: 30 }, // North America
        { x: centerX + 10, y: centerY - 10, w: 35, h: 40 }, // Europe/Africa
        { x: centerX + 50, y: centerY - 5, w: 30, h: 25 }, // Asia
        { x: centerX - 10, y: centerY + 20, w: 25, h: 20 }, // South America
        { x: centerX + 60, y: centerY + 25, w: 20, h: 15 }, // Australia
      ]

      continents.forEach((continent) => {
        ctx.fillRect(continent.x, continent.y, continent.w, continent.h)
      })

      // Add ice caps
      ctx.fillStyle = "#FFFFFF"
      ctx.fillRect(centerX - radius, centerY - radius, radius * 2, 15) // North pole
      ctx.fillRect(centerX - radius, centerY + radius - 15, radius * 2, 15) // South pole

      ctx.restore()

      // Add subtle glow
      ctx.shadowColor = "#00F5FF"
      ctx.shadowBlur = 20
      ctx.strokeStyle = "rgba(0, 245, 255, 0.3)"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.stroke()
      ctx.shadowBlur = 0

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
    <div className="fixed inset-0 z-10 pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
    </div>
  )
}
