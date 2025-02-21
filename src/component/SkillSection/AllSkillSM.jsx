import React from "react";
import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { AiOutlineDotNet } from "react-icons/ai";
import { SiPytorch } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/variants";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "TailWindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "Python",
    icon: FaPython,
  },
  {
    skill: "Java",
    icon: FaJava,
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
  },
  {
    skill: "DotNet",
    icon: AiOutlineDotNet,
  },
  {
    skill: "PyTorch",
    icon: SiPytorch,
  },
];

const AllSkillSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4 text-white">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillSM;
