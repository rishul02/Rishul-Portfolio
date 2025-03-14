import React, { useState, useEffect } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarButton from "./NavbarButton";

const NavbarMain = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-50 flex transition-all duration-300`}
    >
      <div
        className={`flex  items-center w-full max-w-[1200px] mx-auto p-3 sm:p-4 md:p-6 transition-all duration-300 border-none
        ${
          scrolling
            ? "bg-black/80 backdrop-blur-md border border-gray-700 rounded-full shadow-lg"
            : "bg-transparent"
        }
        `}
      >
        <div className="flex-1">
          <NavbarLogo />
        </div>
        <div className=" flex justify-center">
          <NavbarLinks />
        </div>
        <div className="flex-1 flex justify-end pl-2">
          <NavbarButton />
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
