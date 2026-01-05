import React from "react";
import OutsourceModels from "../OutsourceModels/OutsourceModels";

const WhoWeAre = () => {
  return (
    <div className="bg-[#170012] pt-16 pb-16">
      <div className="pt-6 w-[94%] lg:w-[90%] mx-auto pb-2">
        <div className="grid grid-cols-12 lg:grid-cols-12 gap-2 lg:gap-4">
          <div className="col-span-12 py-2.5 px-4">
            <h2 className="text-[28px] md:text-[32] lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em]">
              Who We Are
            </h2>
          </div>
          <div className="col-span-6 lg:col-span-3 py-8 px-8 flex flex-col justify-center items-center border border-[#FF00E5] rounded-xl">
            <h3 className="text-[48px] md:text-[58px] lg:text-[70px] text-white tracking-[0.5px] leading-[1.1em]">
              7+
            </h3>
            <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] transition-all duration-300 delay-50">
              Years
            </p>
          </div>

          <div className="col-span-6 lg:col-span-3 py-8 px-8 flex flex-col justify-center items-center border border-[#FF00E5] rounded-xl">
            <h3 className="text-[48px] md:text-[58px] lg:text-[70px] text-white tracking-[0.5px] leading-[1.1em]">
              200+
            </h3>
            <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] transition-all duration-300 delay-50">
              Projects
            </p>
          </div>

          <div className="col-span-6 lg:col-span-3 py-8 px-8 flex flex-col justify-center items-center border border-[#FF00E5] rounded-xl">
            <h3 className="text-[48px] md:text-[58px] lg:text-[70px] text-white tracking-[0.5px] leading-[1.1em]">
              150+
            </h3>
            <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] transition-all duration-300 delay-50">
              Clients
            </p>
          </div>

          <div className="col-span-6 lg:col-span-3 py-8 px-8 flex flex-col justify-center items-center border border-[#FF00E5] rounded-xl">
            <h3 className="text-[48px] md:text-[58px] lg:text-[70px] text-white tracking-[0.5px] leading-[1.1em]">
              100+
            </h3>
            <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] transition-all duration-300 delay-50">
              Employees
            </p>
          </div>
        </div>
      </div>

      <div className="pt-6 w-[94%] lg:w-[90%] mx-auto pb-6">
        <OutsourceModels />
      </div>
    </div>
  );
};

export default WhoWeAre;
