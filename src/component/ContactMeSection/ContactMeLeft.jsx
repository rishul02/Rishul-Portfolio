import React from "react";
import ContactForm from "./ContactForm";

const ContactMeLeft = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div>
        <h2 className="text-orange text-3xl mb-4 "> Get in Touch</h2>
        <p className="text-white">
          You Can also mail me at <br />
          <a
            href="mailto:rishul02.work@gmail.com"
            className="hover:text-cyan transition-all duration-300"
            target="_blank"
          >
            rishul02.work@gmail.com
          </a>
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactMeLeft;
