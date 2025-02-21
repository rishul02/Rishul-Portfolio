import React from "react";
import { useState, useEffect } from "react";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  // { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const FooterMain = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Get the stored visit count from localStorage
    const visits = localStorage.getItem("visitCount");

    if (visits) {
      const newCount = parseInt(visits) + 1;
      setVisitCount(newCount);
      localStorage.setItem("visitCount", newCount);
    } else {
      setVisitCount(1);
      localStorage.setItem("visitCount", 1);
    }
  }, []);

  return (
    <div className="px-4 ">
       <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex justify-between items-center mt-4 max-w-[1200px] mx-auto">
        <p className="text-3xl text-white ">Rishul</p>
        <ul className="flex gap-4 text-white text-xl  justify-end ">
          {links.map((item, index) => {
            return (
              <li key={index}>
                <a
                  href={`#${item.section}`}
                  className="hover:text-white transition-all duration-500 cursor-pointer"
                >
                  {item.link}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
        Site visited <span className="font-bold text-orange">{visitCount}</span>{" "}
        times.
      </p>
    </div>
  );
};

export default FooterMain;
