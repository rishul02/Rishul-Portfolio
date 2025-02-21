import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://github.com/rishul02" Icon={FaGithub} />
      <SingleContactSocial
        link="https://www.linkedin.com/in/rishul-gurjar-87994922b"
        Icon={FaLinkedin}
      />
      <SingleContactSocial
        link="https://x.com/_rishuu02"
        Icon={FaSquareTwitter}
      />
    </div>
  );
};

export default ContactSocial;
