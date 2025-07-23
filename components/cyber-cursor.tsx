"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CyberCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)

      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setIsVisible(false), 3000)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Only add cursor on desktop
    if (window.innerWidth >= 768) {
      document.addEventListener("mousemove", updateMousePosition)

      const interactiveElements = document.querySelectorAll("button, a, [role='button'], input, textarea")
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter)
        el.addEventListener("mouseleave", handleMouseLeave)
      })

      return () => {
        document.removeEventListener("mousemove", updateMousePosition)
        clearTimeout(timeoutId)
        interactiveElements.forEach((el) => {
          el.removeEventListener("mouseenter", handleMouseEnter)
          el.removeEventListener("mouseleave", handleMouseLeave)
        })
      }
    }
  }, [])

  // Don't render on mobile
  if (typeof window !== "undefined" && window.innerWidth < 768) return null
  if (!isVisible) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
        <div className="absolute inset-1 bg-black rounded-full" />
        <div className="absolute inset-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-cyan-400/50 rounded-full pointer-events-none z-[9998]"
        style={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          rotate: [0, 360],
        }}
        transition={{
          scale: { type: "spring", stiffness: 300, damping: 20 },
          rotate: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
        }}
      />
    </>
  )
}
