import Image from "next/image";
import React from "react";

const ContactForm = () => {
  return (
    <div className="pb-2 pt-2">
      <div className="mx-auto">
        <form id="contactForm" name="contactForm">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mx-auto pt-2">
            <div className="lg:col-span-4 flex flex-col justify-center">
              <input
                type="text"
                id="fullName"
                className="border border-[#ef41de] bg-[#320127] py-3.5 px-6 rounded-lg text-white"
                placeholder="Full Name*"
                required
              />
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center">
              <input
                type="tel"
                id="phone"
                className="border border-[#ef41de] bg-[#320127] py-3.5 px-6 rounded-lg text-white"
                placeholder="Phone*"
                required
              />
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center">
              <input
                type="email"
                id="email"
                className="border border-[#ef41de] bg-[#320127] py-3.5 px-6 rounded-lg text-white"
                placeholder="Email*"
                required
              />
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center">
              <textarea
                id="message"
                className="border border-[#ef41de] bg-[#320127] py-3.5 px-6 rounded-lg text-white h-[220px] resize-none"
                placeholder="Message"
              />
            </div>

            <div className="lg:col-span-4 flex flex-col">
              <div className="flex gap-2 text-white">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  className="w-[60px] lg:w-6"
                />
                <span className="font-light text-[14px]">
                  By sending this form you agree to our Privacy Policy and Terms
                  & Conditions. The information you provide will be added to our
                  system for further communication.
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center">
              <input
                type="submit"
                id="submitBtn"
                className="py-3.5 text-white text-base transition-all duration-200 rounded-lg cursor-pointer border-2 border-[#ef41de] bg-[#ef41de]"
                value="SUBMIT"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
