import React from "react";
import { EyeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { PiCardholder, PiGlobe } from "react-icons/pi";

const WhyChoose = () => {
  return (
    <div className="bg-[#0c000a] pt-16 pb-16">
      <div className="pt-4 w-[94%] lg:w-[90%] mx-auto pb-4">
        <div className="grid lg:grid-cols-12 gap-2 lg:gap-4">
          <div className="lg:col-span-12 py-2.5 px-4">
            <h2 className="text-[28px] md:text-[32] text-center lg:text-[42px] w-full md:w-[800px] mx-auto text-white tracking-[0.5px] leading-[1.1em]">
              Why choose Virtual Dive Studios as your Game Development Partner
            </h2>
          </div>
          <div className="lg:col-span-3 py-8 px-8 flex flex-col items-center">
            <PiCardholder className="text-white h-[70px] w-[70px] bg-[#ef41de] rounded-full p-2.5" />
            <h5 className="text-[17px] md:text-[22px] leading-[1.1em] text-[#ef41de] mt-4 text-center">
              Agile Development Approach
            </h5>
            <p className="text-white text-[13px] lg:text-[16px] font-light tracking-[0.17px] mt-2 text-center">
              Our agile development starts with the ideation and goes to the
              deployment.
            </p>
          </div>

          <div className="lg:col-span-3 py-8 px-8 flex flex-col items-center">
            <PiGlobe className="text-white h-[70px] w-[70px] bg-[#ef41de] rounded-full p-2.5" />
            <h5 className="text-[17px] md:text-[22px] leading-[1.1em] text-[#ef41de] mt-4 text-center">
              AI Powered Solutions
            </h5>
            <p className="text-white text-[13px] lg:text-[16px] font-light tracking-[0.17px] mt-2 text-center">
              We offer AI-based solutions that are the most advanced for gaming
              which are the games that have interactivity and realism.
            </p>
          </div>

          <div className="lg:col-span-3 py-8 px-8 flex flex-col items-center">
            <EyeIcon className="text-white h-[70px] w-[70px] bg-[#ef41de] rounded-full p-2.5" />
            <h5 className="text-[17px] md:text-[22px] leading-[1.1em] text-[#ef41de] mt-4 text-center">
              Transparency
            </h5>
            <p className="text-white text-[13px] lg:text-[16px] font-light tracking-[0.17px] mt-2 text-center">
              We have 80% of the recurring business thanks to our excellent
              communication and careful consideration of the client's needs.
            </p>
          </div>

          <div className="lg:col-span-3 py-8 px-8 flex flex-col items-center">
            <LockClosedIcon className="text-white h-[70px] w-[70px] bg-[#ef41de] rounded-full p-2.5" />
            <h5 className="text-[17px] md:text-[22px] leading-[1.1em] text-[#ef41de] mt-4 text-center">
              Best Security
            </h5>
            <p className="text-white text-[13px] lg:text-[16px] font-light tracking-[0.17px] mt-2 text-center">
              At Virtual Dive Studios we guarantee the privacy of client’s data,
              systems, and infrastructure according to security management
              systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
