import React from "react";
import { FaCode } from "react-icons/fa6";

const DedicatedDev = () => {
  return (
    <div className="bg-[#0c000a] pt-16 pb-16">
      <div className="pt-4 w-[94%] lg:w-[90%] mx-auto pb-4">
        <div className="grid lg:grid-cols-12 gap-2 md:gap-4">
          <div className="lg:col-span-12 py-2.5 px-4">
            <div>
              <h2 className="text-[28px] md:text-[32] lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em] text-center">
                Hire a Dedicated Game Developer for Your Project!
              </h2>
            </div>
          </div>
          <div className="lg:col-span-4 rounded-2xl border border-[#ef41de] bg-linear-to-b from-[#1e001b] to-[#5f0055]">
            <div className="px-6 pt-8 pb-6">
              <FaCode className="w-15 h-15 text-white" />
              <div>
                <h4 className="text-[24px] md:text-[28px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Junior Level Developer
                </h4>
                <ul className="list-disc list-outside text-[16px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  <li>1-2 years of experience.</li>
                  <li>
                    Working experience in developing action sequences in games,
                    graphical user interfaces, and other basic tools.
                  </li>
                  <li>Working experience on 5+ game development projects.</li>
                  <li>Handling ongoing and low-scale projects.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 rounded-2xl border border-[#ef41de] bg-linear-to-b from-[#1e001b] to-[#5f0055]">
            <div className="px-6 pt-8 pb-6">
              <FaCode className="w-15 h-15 text-white" />
              <div>
                <h4 className="text-[24px] md:text-[28px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Mid Level Developer
                </h4>
                <ul className="list-disc list-outside text-[16px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  <li>4−6 years of experience.</li>
                  <li>
                    Working experience in 2D, Hypercasual, Simulation, and
                    Racing Games.
                  </li>
                  <li>Working experience on 15+ game development projects.</li>
                  <li>Completed over 1500 to 2000+ development hours.</li>
                  <li>
                    Handling general-level and mid-scale complex projects.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 rounded-2xl border border-[#ef41de] bg-linear-to-b from-[#1e001b] to-[#5f0055]">
            <div className="px-6 pt-8 pb-6">
              <FaCode className="w-18 h-18 text-white" />
              <div>
                <h4 className="text-[24px] md:text-[28px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Senior Level Developer
                </h4>
                <ul className="list-disc list-outside text-[16px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  <li>6−10 years of experience.</li>
                  <li>
                    Working experience in Strategic, Concept, Action, and
                    Role-Playing Games.
                  </li>
                  <li>
                    Working experience on 20 to 30+ game development projects.
                  </li>
                  <li>Completed over 2000 to 3000+ development hours.</li>
                  <li>Ideal for advanced and complex projects.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DedicatedDev;
