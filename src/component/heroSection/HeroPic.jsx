import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/variants";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFileDownload,
} from "react-icons/fa"; // Icons for social media and resume

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="relative h-screen flex flex-col items-center justify-center text-center"
    >
      {/* Download Resume Button */}
      <motion.a
        href="/path/to/your/resume.pdf" // Replace with the actual path to your resume
        download="Rishul_Resume.pdf"
        className="bg-cyan text-white px-2 py-3 rounded-lg flex items-center gap-2 hover:bg-cyan/80 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaFileDownload className="text-lg" />
        Download Resume
      </motion.a>

      {/* Social Media Links */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        <motion.a
          href="https://github.com/yourusername" // Replace with your GitHub link
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-cyan hover:text-cyan/80 transition-colors"
        >
          <FaGithub className="text-2xl" />
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/yourusername" // Replace with your LinkedIn link
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-cyan hover:text-cyan/80 transition-colors"
        >
          <FaLinkedin className="text-2xl" />
        </motion.a>
        <motion.a
          href="https://twitter.com/yourusername" // Replace with your Twitter link
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-cyan hover:text-cyan/80 transition-colors"
        >
          <FaTwitter className="text-2xl" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default HeroPic;
