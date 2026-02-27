import React from "react";
import { FaHeadset, FaImage } from "react-icons/fa";
import { FaChartColumn } from "react-icons/fa6";
import { TbSocial } from "react-icons/tb";

const Benefits = () => {
  return (
    <div className="bg-[#170012] pt-16 pb-16">
      <div className="pt-4 w-[94%] lg:w-[90%] mx-auto pb-4">
        <div className="grid lg:grid-cols-12 gap-2 lg:gap-2">
          <div className="lg:col-span-12 py-2.5 px-4">
            <h2 className="text-[28px] md:text-[32] text-center lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em]">
              Benefits of Choosing Virtual Dive Studios for{" "}
              <span className="text-[#ef41de]">Unity Game Development</span>
            </h2>
          </div>
          <div className="lg:col-span-3 rounded-2xl m-1 bg-linear-to-b from-[#1e001b] to-[#5f0055]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <FaImage className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[17px] md:text-[20px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Enhanced Visuals and Graphics
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  Unity's powerful rendering system and advanced graphics tools
                  can produce amazing visual effects and lifelike environments
                  in games.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-2xl m-1 bg-linear-to-b from-[#1e001b] to-[#5f0055]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <TbSocial className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[17px] md:text-[20px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Seamless Cross-Platform Compatibility
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  The virtual dive for Unity game development investment means
                  the compatibility of the application on different platforms
                  will be perfect including PC, consoles, mobile devices, and VR
                  headsets.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-2xl m-1 bg-linear-to-b from-[#1e001b] to-[#5f0055]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <FaChartColumn className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[17px] md:text-[20px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Efficient Development Workflow
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  Unity provides a set of tools and resources that are designed
                  to simplify the game development procedure.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-2xl m-1 bg-linear-to-b from-[#1e001b] to-[#5f0055]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <FaHeadset className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[17px] md:text-[20px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Vast Community Support
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  With the selection of Unity for game development, developers
                  get the opportunity to be a part of a huge and dynamically
                  growing community of fellow developers, artists, and fans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
