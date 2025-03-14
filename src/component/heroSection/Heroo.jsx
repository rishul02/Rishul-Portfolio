import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFileDownload,
} from "react-icons/fa";
import { fadeIn } from "../../FramerMotion/variants";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Hero Text */}
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        animate="show"
        className="text-5xl sm:text-6xl md:text-7xl font-bold text-white"
      >
        Rishul
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        animate="show"
        className="text-lg md:text-xl mt-4 text-cyan"
      >
        A curious coder with a passion <br /> for turning ideas into code
      </motion.p>

      {/* Resume Button */}
      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        <motion.a
          href="https://drive.google.com/file/d/1e9-63ttT06MQjJqS0J0gar_pKmgb82A8/view?usp=sharing"
          download="Rishul_Resume.pdf"
          className="bg-transparent border-2 border-white px-6 py-3 rounded-full hover:bg-cyan hover:text-black transition flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaFileDownload /> Download Resume
        </motion.a>
      </div>

      {/* Social Links with Same Hover Effect */}
      <div className="mt-6 flex gap-4">
        {[
          { href: "https://github.com/rishul02", icon: <FaGithub size={30} /> },
          {
            href: "https://www.linkedin.com/in/rishul-gurjar-87994922b",
            icon: <FaLinkedin size={30} />,
          },
          {
            href: "https://twitter.com/yourusername",
            icon: <FaTwitter size={30} />,
          },
        ].map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            className="border-2 border-white p-3 rounded-full hover:bg-cyan hover:text-black transition flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Hero;
