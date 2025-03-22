import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/variants";

const projects = [
  {
    name: "PDF Proceessing and Summarization Tool",
    year: "Dec 2024",
    align: "right",
    image: "../../images/website-img-3.png",
    link: "https://github.com/rishul02/wasserstoff-AiInternTask",
  },
  {
    name: "Gen-Vision: Text to Image Generator",
    year: "March 2025",
    align: "right",
    image: "../../images/sample_img_1.jpg",
    link: "hhttps://gen-vision.netlify.app/",
  },
];

const ProjectMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4 ">
      <section className="relative w-full pt-0 pb-10 text-white overflow-hidden">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          <ProjectText />
        </motion.div>

        <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-0 lg:mt-0 xl:mt-0">
          {projects.map((item, index) => {
            return (
              <SingleProject
                key={index}
                name={item.name}
                year={item.year}
                align={item.align}
                image={item.image}
                link={item.link}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ProjectMain;
