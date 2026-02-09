import React from "react";
import {
  GiBrain,
  GiClockwork,
  GiEyeTarget,
  GiGamepad,
  GiGears,
  GiLockedBox,
  GiNetworkBars,
  GiThumbUp,
} from "react-icons/gi";

const DifferentDomains = () => {
  return (
    <div className="bg-[#170012] pt-16 pb-16">
      <div className="pt-4 w-[94%] lg:w-[90%] mx-auto pb-4">
        <div className="grid lg:grid-cols-12 gap-2 lg:gap-4">
          <div className="lg:col-span-12 py-2.5 px-4">
            <h2 className="text-[28px] md:text-[32] text-center lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em]">
              We Cover different domains for this industry
            </h2>
          </div>
          <div className="lg:col-span-3 py-8 px-8 flex flex-col justify-center h-[180px] md:h-[260px] items-center border border-[#5f0055] rounded-xl bg-[#5f0055]">
            <GiGamepad className="w-25 h-25" />
            <h4 className="text-[20px] font-semibold md:text-[24px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
              Extensive Expertise
            </h4>
          </div>

          <div className="lg:col-span-3 py-8 px-8 flex flex-col justify-center h-[180px] md:h-[260px] items-center border border-[#5f0055] rounded-xl bg-[#5f0055]">
            <GiGears className="w-25 h-25" />
            <h4 className="text-[20px] font-semibold md:text-[24px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
              Client-Oriented Approach
            </h4>
          </div>

          <div className="lg:col-span-3 py-8 px-8 flex flex-col justify-center h-[180px] md:h-[260px] items-center border border-[#5f0055] rounded-xl bg-[#5f0055]">
            <GiClockwork className="w-25 h-25" />
            <h4 className="text-[20px] font-semibold md:text-[24px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
              On-time Delivery
            </h4>
          </div>

          <div className="lg:col-span-3 py-8 px-8 flex flex-col justify-center h-[180px] md:h-[260px] items-center border border-[#5f0055] rounded-xl bg-[#5f0055]">
            <GiLockedBox className="w-25 h-25" />
            <h4 className="text-[20px] font-semibold md:text-[24px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
              Complete Data Security
            </h4>
          </div>

          <div className="lg:col-span-3 py-8 px-8 flex flex-col justify-center h-[180px] md:h-[260px] items-center border border-[#5f0055] rounded-xl bg-[#5f0055]">
            <GiEyeTarget className="w-25 h-25" />
            <h4 className="text-[20px] font-semibold md:text-[24px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
              Innovative Solutions
            </h4>
          </div>

          <div className="lg:col-span-3 py-8 px-8 flex flex-col justify-center h-[180px] md:h-[260px] items-center border border-[#5f0055] rounded-xl bg-[#5f0055]">
            <GiNetworkBars className="w-25 h-25" />
            <h4 className="text-[20px] font-semibold md:text-[24px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
              Cutting-Edge Technology
            </h4>
          </div>

          <div className="lg:col-span-3 py-8 px-8 flex flex-col justify-center h-[180px] md:h-[260px] items-center border border-[#5f0055] rounded-xl bg-[#5f0055]">
            <GiThumbUp className="w-25 h-25" />
            <h4 className="text-[20px] font-semibold md:text-[24px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
              Relentless Commitment
            </h4>
          </div>

          <div className="lg:col-span-3 py-8 px-8 flex flex-col justify-center h-[180px] md:h-[260px] items-center border border-[#5f0055] rounded-xl bg-[#5f0055]">
            <GiBrain className="w-25 h-25" />
            <h4 className="text-[20px] font-semibold md:text-[24px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
              Unparalleled Creativity
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DifferentDomains;
