import React from "react";
import SingleInfo from "./SingleInfo";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocation } from "react-icons/io5";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo
        text={
          <a
            href="mailto:rishul02.work@gmail.com"
            className="hover:text-cyan transition-all duration-300"
            target="_blank"
          >
            rishul02.work@gmail.com
          </a>
        }
        Image={AiOutlineMail}
      />
      <SingleInfo text="Noida,Uttar Pradesh, India" Image={IoLocation} />
    </div>
  );
};

export default ContactInfo;
