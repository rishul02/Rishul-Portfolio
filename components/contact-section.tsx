"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { ContactForm } from "./contact-form";
import { useState } from "react";

export function ContactSection() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("rishul02.work@gmail.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 3000);
    } catch (error) {
      alert("Email: rishul02.work@gmail.com");
    }
  };

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

          {emailCopied && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-green-400 text-sm"
            >
              ✓ Email copied to clipboard!
            </motion.div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 max-w-2xl mx-auto">
            <motion.button
              onClick={copyEmail}
              className="flex flex-col items-center space-y-2 text-zinc-400 hover:text-white transition-colors duration-300 bg-transparent border border-white/10 hover:border-white/20 rounded-lg p-4"
              whileHover={{ y: -5 }}
              data-cursor="Copy Email"
            >
              <Mail className="w-6 h-6" />
              <span className="text-sm font-light">Copy Email</span>
            </motion.button>

            <motion.a
              href="https://mail.google.com/mail/?view=cm&to=rishul02.work@gmail.com&su=Portfolio%20Contact&body=Hi%20Rishul%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 text-zinc-400 hover:text-white transition-colors duration-300 border border-white/10 hover:border-white/20 rounded-lg p-4"
              whileHover={{ y: -5 }}
              data-cursor="Gmail"
            >
              <ExternalLink className="w-6 h-6" />
              <span className="text-sm font-light">Gmail</span>
            </motion.a>

            <motion.a
              href="https://github.com/rishul02"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 text-zinc-400 hover:text-white transition-colors duration-300 border border-white/10 hover:border-white/20 rounded-lg p-4"
              whileHover={{ y: -5 }}
              data-cursor="GitHub"
            >
              <Github className="w-6 h-6" />
              <span className="text-sm font-light">GitHub</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/rishul-gurjar-87994922b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 text-zinc-400 hover:text-white transition-colors duration-300 border border-white/10 hover:border-white/20 rounded-lg p-4"
              whileHover={{ y: -5 }}
              data-cursor="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
              <span className="text-sm font-light">LinkedIn</span>
            </motion.a>
          </div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-zinc-500 text-sm mb-2">Or reach out directly:</p>
            <motion.button
              onClick={copyEmail}
              className="text-white hover:text-zinc-300 transition-colors duration-300 text-lg font-light bg-transparent border-none cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              rishul02.work@gmail.com
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
