import React from "react";
import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  // { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  // { link: "Contact", section: "contact" },
];

const NavBarLinks = () => {
  return (
    <ul className="flex flex-row gap-2 sm:gap-2 md:gap-6 text-white font-bold text-center justify-center items-center w-full">
      {links.map((link, index) => (
        <li key={index} className="relative group">
          <Link
            to={link.section}
            smooth={true}
            spy={true}
            duration={500}
            offset={-130}
            activeClass="active-link"
            className="cursor-pointer text-white hover:text-cyan transition-all duration-500 
            text-[12px] sm:text-[14px] md:text-[16px] leading-none"
          >
            {link.link}
          </Link>
          {/* Active & Hover Underline */}
          <div
            className="h-[2px] bg-cyan w-0 transition-all duration-500 group-hover:w-full 
            active-underline"
          ></div>
        </li>
      ))}
    </ul>
  );
};

export default NavBarLinks;
