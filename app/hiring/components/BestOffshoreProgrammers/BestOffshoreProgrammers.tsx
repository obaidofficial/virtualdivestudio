import React from "react";
import { FaCode } from "react-icons/fa6";

const BestOffshoreProgrammers = () => {
  return (
    <div className="bg-[#0c000a] pt-16 pb-16">
      <div className="pt-4 w-[94%] lg:w-[90%] mx-auto pb-4">
        <div className="grid lg:grid-cols-12 gap-2 lg:gap-2">
          <div className="lg:col-span-12 py-2.5 px-4">
            <div>
              <h2 className="text-[28px] md:text-[32] lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em] text-center">
                Hire The Best Offshore Programmers With Virtual Dive Studios
              </h2>
              <p className="text-white text-[15px] lg:text-[18px] font-light tracking-[0.17px] mt-4 transition-all duration-300 delay-50 text-center max-w-260 mx-auto">
                Expand your existing team capabilities with Virtual Dive Studios
                offshore development services to hire developers with both
                technical and other soft skills.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2">{/*  */}</div>

          <div className="lg:col-span-4 rounded-2xl m-2.5 border border-[#ef41de] bg-linear-to-b from-[#1e001b] to-[#5f0055]">
            <div className="px-6 pt-8 pb-6">
              <FaCode className="w-18 h-18 text-white" />
              <div>
                <h4 className="text-[24px] md:text-[28px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Technical Game Developer Skills
                </h4>
                <ul className="list-disc list-outside text-[16px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  <li>
                    Proficiency across modern programming languages and
                    frameworks.
                  </li>
                  <li>Unity and Unreal Gripped Developers.</li>
                  <li>Expertise in developing Low to high-scale games.</li>
                  <li>
                    Expertise in game development frameworks and libraries.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 rounded-2xl m-2.5 border border-[#ef41de] bg-linear-to-b from-[#1e001b] to-[#5f0055]">
            <div className="px-6 pt-8 pb-6">
              <FaCode className="w-18 h-18 text-white" />
              <div>
                <h4 className="text-[24px] md:text-[28px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Non-Technical Game Developer Skills
                </h4>
                <ul className="list-disc list-outside text-[16px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  <li>
                    Embracing global work environments with sensitivity to
                    cultural differences.
                  </li>
                  <li>
                    Anticipating challenges and proposing innovative solutions.
                  </li>
                  <li>Delivering quality work within timelines.</li>
                  <li>
                    Fluent in English speaking to avoid communication gaps.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">{/*  */}</div>
        </div>
      </div>
    </div>
  );
};

export default BestOffshoreProgrammers;
