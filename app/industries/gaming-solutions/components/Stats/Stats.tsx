import React from "react";
import Image from "next/image";

export const Stats = () => {
  return (
    <div className="bg-[#0c000a] pt-16 pb-16">
      <div className="pt-4 w-[94%] lg:w-[90%] mx-auto pb-4">
        <div className="grid lg:grid-cols-8 gap-2 lg:gap-4">
          <div className="lg:col-span-8 py-2.5 px-4">
            <h2 className="text-[28px] md:text-[32] text-center lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em]">
              Interesting Statistics About Gaming Industry
            </h2>
          </div>
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-2 py-8 px-8 flex flex-col justify-center h-[180px] md:h-[260px] items-center border border-[#FF00E5] rounded-xl">
            <h2 className="text-[28px] md:text-[32] text-center lg:text-[38px] text-white tracking-[0.5px] leading-[1.1em] pb-2">
              347 Billion
            </h2>
            <p className="text-[18px] font-light text-center mx-auto">
              of game sales happen in the digital world.
            </p>
          </div>

          <div className="lg:col-span-2 py-8 px-8 flex flex-col justify-center h-[180px] md:h-[260px] items-center border border-[#FF00E5] rounded-xl">
            <h2 className="text-[28px] md:text-[32] text-center lg:text-[38px] text-white tracking-[0.5px] leading-[1.1em] pb-2">
              3.220 Billion
            </h2>
            <p className="text-[18px] font-light text-center mx-auto">
              people worldwide play video games.
            </p>
          </div>

          <div className="lg:col-span-2 py-8 px-8 flex flex-col justify-center h-[180px] md:h-[260px] items-center border border-[#FF00E5] rounded-xl">
            <h2 className="text-[28px] md:text-[32] text-center lg:text-[38px] text-white tracking-[0.5px] leading-[1.1em] pb-2">
              By 2025
            </h2>
            <p className="text-[18px] font-light text-center mx-auto">
              Global gaming market will amount to 503.14 billion U.S. Dollars.
            </p>
          </div>
          <div className="lg:col-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
