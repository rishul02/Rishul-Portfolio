import React from "react";
import SingleInfo from "./SingleInfo";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocation } from "react-icons/io5";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="rishul02.work@gmail.com" Image={AiOutlineMail} />
      <SingleInfo text="Noida,Uttar Prades, India" Image={IoLocation} />
    </div>
  );
};

export default ContactInfo;
