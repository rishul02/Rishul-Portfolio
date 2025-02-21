import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/variants";

const ProjectText = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="flex flex-col items-center mt-[100px] lg:mt-[160px] md:mt-[120px] sm:mt-16 "
    >
      <h2 className="text-6xl text-cyan mb-16">Projects</h2>
      <p></p>
    </motion.div>
  );
};

export default ProjectText;
