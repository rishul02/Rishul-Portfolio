import React from "react";
import SkillText from "./SkillText";
import AllSkills from "./AllSkills";
import AllSkillSM from "./AllSkillSM";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/variants";

const SkillMain = () => {
  return (
    <div id="skills">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden"
      >
        <SkillText />
        <div className="absolute left-[50%] -translate-x-[50%] lg:block sm:hidden">
          <AllSkills />
        </div>
        <div className="sm:block lg:hidden">
          <AllSkillSM />
        </div>
      </motion.div>
    </div>
  );
};

export default SkillMain;
