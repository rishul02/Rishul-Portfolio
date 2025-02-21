import React from "react";

const SubheroSection = () => {
  return (
    <div className="w-full border-b-2 border-t-2 border-lightOrange  text-lightOrange  flex flex-wrap justify-around uppercase xl:text-3xl md:text-2xl sm:text-4xl py-4 items-center gap-4 mt-16 bg-brown ">
      <p className="md:block sm:hidden">Problem-Solving</p>
      <p className="md:block sm:hidden">Adaptability</p>
      <p className="md:block sm:hidden">Critical-Thinking</p>
      <p>Quick-Learner</p>
    </div>
  );
};

export default SubheroSection;
