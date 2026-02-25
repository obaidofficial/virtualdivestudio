import React from "react";
import Image from "next/image";

const WhatCEOSays = () => {
  return (
    <div className="bg-[#320127] pt-16 pb-16">
      <div className="pt-6 w-[94%] lg:w-[90%] mx-auto pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-2">
          <div className="lg:col-span-6 py-2.5 px-4 flex flex-col items-center">
            <Image
              src="/images/about/ceo.webp"
              alt="Development Process"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>

          <div className="lg:col-span-6 py-2.5 px-4 flex flex-col justify-center">
            <h2 className="text-[28px] md:text-[32px] lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em]">
              What CEO Says
            </h2>
            <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
              We are deeply committed to pushing the boundaries of innovation
              and excellence. My team is determined to provide you with the best
              gaming experiences and the newest solutions that are designed for
              your specific needs. Our expertise in free-to-play design, live
              operations, cross-platform deployment, and parallel launch
              strategies deliver world-class graphical development services
              while investing in technology R&D to cement our reputation as an
              innovation partner for creative industries.
            </p>
            <p className="text-white text-[15px] lg:text-[18px] font-light tracking-[0.17px] mt-4">
              Muhammad Soban Raheel
              <br />
              CEO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatCEOSays;
