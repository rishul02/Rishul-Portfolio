import React from "react";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarButton = () => {
  return (
    <a href="#contact">
      <button className="px-2 py-2 rounded-full text-md sm:text-lg font-bold text-white border-cyan border flex item-center gap-2 bg-gradient-to-r from-cyan to-orange hover:border-white  hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow">
        Contact
        <div className="">
          <LuArrowDownRight />
        </div>
      </button>
    </a>
  );
};

export default NavbarButton;
