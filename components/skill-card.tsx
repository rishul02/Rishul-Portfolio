"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SkillCardProps {
  title: string
  icon: React.ReactNode
  skills: string[]
  index: number
}

export function SkillCard({ title, icon, skills, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full bg-black/40 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-300">
        <CardContent className="p-6">
          <motion.div
            className="flex items-center gap-3 mb-6"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div
              className="p-2 bg-white/10 rounded-lg border border-white/10 text-white"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              {icon}
            </motion.div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </motion.div>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Badge
                  variant="outline"
                  className="border-white/20 text-white bg-white/10 hover:border-white/30 hover:bg-white/20 transition-colors"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
