import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center sm:text-center md:text-left">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
        I'm Rishul, an AI and software development enthusiast with a strong
        foundation in Python, machine learning, and Generative AI. Experienced
        in developing real-world solutions using advanced AI techniques and
        collaborating on technical projects to deliver measurable outcomes.
        Additionally, I have expertise in technologies like JavaScript, React,
        .NET, HTML, and CSS, allowing me to build full-stack applications
        efficiently.
      </p>
      {/* <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-black">
        My Projects
      </button> */}
    </div>
  );
};

export default AboutMeText;
