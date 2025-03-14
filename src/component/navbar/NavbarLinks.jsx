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
    <ul className="flex flex-row flex-wrap gap-4 text-white font-bold text-center justify-center items-center w-full">
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
            text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl"
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
