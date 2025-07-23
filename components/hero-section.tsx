"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-light text-white mb-6"
            style={{ lineHeight: 1.1 }}
          >
            Developer
            <br />
            <span className="text-zinc-400">Researcher</span>
          </motion.h1>

          <motion.p
            className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            AI/ML Engineer & Full Stack Developer crafting digital experiences
            with precision and creativity.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.button
              onClick={() => scrollToSection("work")}
              className="px-8 py-4 border border-white/20 text-white font-light hover:bg-white hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-cursor="View Work"
            >
              View My Work
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 text-zinc-400 font-light hover:text-white transition-colors duration-300"
              whileHover={{ x: 10 }}
              data-cursor="Get in Touch"
            >
              Get in Touch →
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ArrowDown className="w-5 h-5 text-zinc-400" />
      </motion.div>
    </section>
  );
}
