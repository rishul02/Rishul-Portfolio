import React from "react";

import Heroo from "./Heroo";

const HeroMain = () => {
  return (
    <div className="py-0 -mb-40">
      <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-2">
        <Heroo />
      </div>
    </div>
  );
};

export default HeroMain;
