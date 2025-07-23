"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface MinimalNavProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export function MinimalNav({ activeSection, scrollToSection }: MinimalNavProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/10" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          <motion.button
            onClick={() => scrollToSection("home")}
            className="text-white font-light text-lg"
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.2 }}
          >
            Rishul
          </motion.button>

          <div className="hidden md:flex space-x-12">
            {navItems.map(({ id, label }) => (
              <motion.button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-sm font-light transition-colors duration-300 ${
                  activeSection === id ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                data-cursor="Click"
              >
                {label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
