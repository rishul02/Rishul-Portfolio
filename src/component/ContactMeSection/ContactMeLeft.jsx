import React from "react";
import ContactForm from "./ContactForm";

const ContactMeLeft = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div>
        <h2 className="text-orange text-3xl mb-4 "> Get in Touch</h2>
        <p className="text-white">
          You Can also mail me at <br /> rishul02.work2gmail.com
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactMeLeft;
