import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import Heroo from "./Heroo";

const HeroMain = () => {
  return (
    <div className="py-0 -mb-40">
      <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-2">
        {/* <HeroText />
        <HeroPic /> */}
        <Heroo />
      </div>
    </div>
  );
};

export default HeroMain;
