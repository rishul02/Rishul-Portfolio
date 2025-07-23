"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface Star {
  x: number
  y: number
  z: number
  size: number
  speed: number
}

export function ThreeDBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createStars = () => {
      const stars: Star[] = []
      for (let i = 0; i < 200; i++) {
        stars.push({
          x: Math.random() * canvas.width - canvas.width / 2,
          y: Math.random() * canvas.height - canvas.height / 2,
          z: Math.random() * 1000,
          size: Math.random() * 2,
          speed: Math.random() * 0.5 + 0.1,
        })
      }
      starsRef.current = stars
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      starsRef.current.forEach((star) => {
        star.z -= star.speed

        if (star.z <= 0) {
          star.x = Math.random() * canvas.width - canvas.width / 2
          star.y = Math.random() * canvas.height - canvas.height / 2
          star.z = 1000
        }

        const x = (star.x / star.z) * 100 + centerX
        const y = (star.y / star.z) * 100 + centerY
        const size = (1 - star.z / 1000) * star.size

        const opacity = 1 - star.z / 1000
        ctx.fillStyle = `rgba(139, 92, 246, ${opacity})`
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()

        // Add trailing effect
        ctx.strokeStyle = `rgba(236, 72, 153, ${opacity * 0.5})`
        ctx.lineWidth = size * 0.5
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(
          (star.x / (star.z + star.speed * 10)) * 100 + centerX,
          (star.y / (star.z + star.speed * 10)) * 100 + centerY,
        )
        ctx.stroke()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createStars()
    animate()

    window.addEventListener("resize", () => {
      resizeCanvas()
      createStars()
    })

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)" }}
      />
      {/* Additional floating elements */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-500/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.2, 0.8, 0.2],
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}
