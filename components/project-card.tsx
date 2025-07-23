"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, ChevronRight } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  github: string
  demo: string
  featured?: boolean
  category: string
  impact: string
  status: string
  index: number
}

export function ProjectCard({
  title,
  description,
  technologies,
  github,
  demo,
  featured = false,
  category,
  impact,
  status,
  index,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={featured ? "col-span-full md:col-span-2" : "col-span-full md:col-span-1"}
    >
      <motion.div
        whileHover={{ y: -5 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="h-full"
      >
        <Card className="h-full overflow-hidden bg-black/40 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-300">
          <div className="p-6 border-b border-white/10">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <motion.div animate={{ rotate: isHovered ? 360 : 0 }} transition={{ duration: 0.5 }}>
                    <ChevronRight className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge
                      className={`${
                        status === "Live"
                          ? "bg-green-600/20 text-green-400 border-green-400/50"
                          : "bg-yellow-600/20 text-yellow-400 border-yellow-400/50"
                      }`}
                    >
                      {status}
                    </Badge>
                    <Badge className="bg-purple-600/20 text-purple-400 border-purple-400/50">{category}</Badge>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Link href={github} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full bg-white/10 border border-white/10 hover:border-white/20 text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </motion.div>
                </Link>
                <Link href={demo} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full bg-white/10 border border-white/10 hover:border-white/20 text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>

          <CardContent className="p-6">
            <p className="text-zinc-300 text-base leading-relaxed mb-6">{description}</p>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <motion.div
                  key={tech}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Badge
                    variant="outline"
                    className="border-white/20 text-white bg-white/10 hover:border-white/30 hover:bg-white/20 transition-colors"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
