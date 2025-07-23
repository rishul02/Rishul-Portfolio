"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

export function WorkSection() {
  const projects = [
    {
      title: "SignAI - Sign Language to Speech",
      description: "Real-time sign language interpreter using computer vision and deep learning with 95% accuracy.",
      tech: ["Python", "MediaPipe", "TensorFlow", "React.js"],
      github: "https://github.com/rishul02",
      demo: "https://signai-demo.vercel.app",
      year: "2024",
    },
    {
      title: "Gen-Vision: Text to Image Generator",
      description: "Full-stack AI-powered image generation platform with secure payment integration.",
      tech: ["React.js", "Express.js", "MongoDB", "Clipdrop API"],
      github: "https://github.com/rishul02",
      demo: "https://gen-vision.vercel.app",
      year: "2024",
    },
    {
      title: "Big Mart Sales Prediction",
      description: "ML-powered sales forecasting system with interactive dashboards and real-time analytics.",
      tech: ["Python", "Machine Learning", "React.js", "D3.js"],
      github: "https://github.com/rishul02",
      demo: "https://bigmart-prediction.vercel.app",
      year: "2024",
    },
    {
      title: "PDF Processing Suite",
      description: "NLP-based tool for extracting and summarizing text from PDFs with intelligent analysis.",
      tech: ["Python", "NLP", "FastAPI", "MongoDB"],
      github: "https://github.com/rishul02",
      demo: "https://pdf-processor.vercel.app",
      year: "2023",
    },
    {
      title: "Smart Portfolio Analytics",
      description: "AI-driven portfolio optimization tool with risk assessment and performance tracking.",
      tech: ["Python", "Pandas", "Vue.js", "PostgreSQL"],
      github: "https://github.com/rishul02",
      demo: "https://portfolio-analytics.vercel.app",
      year: "2023",
    },
  ]

  return (
    <section id="work" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6">Selected Work</h2>
          <p className="text-zinc-400 text-lg font-light max-w-2xl">
            A collection of projects that showcase my expertise in AI/ML and full-stack development.
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500 text-sm font-light">{project.year}</span>
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        data-cursor="GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        data-cursor="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-light text-white">{project.title}</h3>

                  <p className="text-zinc-400 font-light leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 border border-white/10 text-zinc-400 text-xs font-light">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <motion.div
                  className="aspect-video bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  data-cursor="View Project"
                >
                  <span className="text-zinc-500 font-light">Project Preview</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
