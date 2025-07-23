"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <h2 className="text-4xl md:text-6xl font-light text-white mb-8">
              About
            </h2>
            <p className="text-zinc-400 text-lg font-light leading-relaxed mb-8">
              I'm a passionate AI/ML and full-stack developer with 1+ years of
              experience building scalable web applications and intelligent
              systems. My journey started with a fascination for machine
              learning, and it has evolved into a deep love for creating digital
              experiences that make a difference.
            </p>
            <p className="text-zinc-400 text-lg font-light leading-relaxed">
              I specialize in creating seamless user experiences through clean
              code, innovative design, and cutting-edge technology.
            </p>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="grid grid-cols-2 gap-8">
              {[
                { number: "5+", label: "Projects Completed" },
                { number: "1+", label: "Years Experience" },
                { number: "3", label: "Internships" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 border border-white/10 hover:border-white/20 transition-colors duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl font-light text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-zinc-400 text-sm font-light">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-light text-white">Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Python",
                  "JavaScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "TensorFlow",
                  "PyTorch",
                  "MongoDB",
                  "PostgreSQL",
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 border border-white/10 text-zinc-400 text-sm font-light hover:border-white/20 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
