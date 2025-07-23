"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-light text-white mb-8">
            Let's Work Together
          </h2>
          <p className="text-zinc-400 text-lg font-light max-w-2xl mx-auto mb-16">
            Have a project in mind? I'd love to hear about it. Let's create
            something amazing together.
          </p>

          <ContactForm />

          {/* <motion.a
            href="mailto:rishul02.work@gmail.com"
            className="inline-block text-2xl md:text-4xl font-light text-white hover:text-zinc-400 transition-colors duration-300 mb-16"
            whileHover={{ scale: 1.05 }}
            data-cursor="Send Email"
          >
            rishul02.work@gmail.com
          </motion.a> */}

          <div className="flex justify-center space-x-8 mt-8">
            {[
              {
                href: "mailto:rishul02.work@gmail.com",
                icon: Mail,
                label: "Email",
              },
              {
                href: "https://github.com/rishul02",
                icon: Github,
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/rishul-gurjar-87994922b",
                icon: Linkedin,
                label: "LinkedIn",
              },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2 text-zinc-400 hover:text-white transition-colors duration-300"
                whileHover={{ y: -5 }}
                data-cursor={label}
              >
                <Icon className="w-6 h-6" />
                <span className="text-sm font-light">{label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
