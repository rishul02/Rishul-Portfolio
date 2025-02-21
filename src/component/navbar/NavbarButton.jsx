import React from "react";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarButton = () => {
  return (
    <a href="#contact">
      <button className="px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border flex item-centrer gap-1 bg-gradient-to-r from-cyan to-orange hover:border-white  hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow">
        Contact Me
        <div className="sm:hidden md:block">
          <LuArrowDownRight />
        </div>
      </button>
    </a>
  );
};

export default NavbarButton;
