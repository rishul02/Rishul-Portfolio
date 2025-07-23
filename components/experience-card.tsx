"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Star } from "lucide-react"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  location: string
  description: string
  technologies: string[]
  achievements: string[]
  type: string
  index: number
}

export function ExperienceCard({
  title,
  company,
  period,
  location,
  description,
  technologies,
  achievements,
  type,
  index,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <motion.div
        whileHover={{ y: -5 }}
        className="p-8 glass rounded-xl border border-[#2A2A3C] hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
      >
        {/* Experience Type Badge */}
        <div className="absolute top-4 right-4">
          <Badge
            className={`${
              type === "Research"
                ? "bg-primary/20 text-primary border-primary/50"
                : "bg-secondary/20 text-secondary border-secondary/50"
            }`}
          >
            {type}
          </Badge>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <motion.h3
              className="text-2xl font-bold text-white mb-2"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {title}
            </motion.h3>
            <motion.div
              className="text-primary font-bold mb-4 text-lg"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {company}
            </motion.div>
            <div className="flex flex-col gap-2 text-zinc-400 text-sm">
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ x: 5, color: "#7928CA" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Calendar className="w-4 h-4" />
                {period}
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ x: 5, color: "#FF0080" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <MapPin className="w-4 h-4" />
                {location}
              </motion.div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <p className="text-zinc-400 mb-6 leading-relaxed">{description}</p>

            {/* Achievements */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">Key Achievements</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {achievements.map((achievement, i) => (
                  <motion.div
                    key={i}
                    className="p-3 bg-[#1A1A2E] rounded-lg border border-[#2A2A3C] hover:border-accent/50 transition-all duration-300"
                    whileHover={{ y: -2, x: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-zinc-300 text-sm font-medium">{achievement}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Badge
                    variant="outline"
                    className="border-[#2A2A3C] text-zinc-400 hover:border-secondary/50 hover:text-secondary transition-colors bg-[#1A1A2E]"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
