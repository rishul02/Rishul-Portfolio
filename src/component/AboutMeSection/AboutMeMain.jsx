import React from "react";
import AboutMeText from "./AboutMeText.jsx";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/variants";

const AboutMeMain = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      id="about"
      className="flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center"
    >
      <AboutMeText />
    </motion.div>
  );
};

export default AboutMeMain;
