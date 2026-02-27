import React from "react";

const HowItWorks = () => {
  return (
    <div className="bg-[#0c000a] pt-16 pb-16">
      <div className="pt-4 w-[94%] lg:w-[90%] mx-auto pb-4">
        <div>
          <h2 className="text-[28px] md:text-[32] lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em] text-center">
            How it works
          </h2>
          <p className="text-white text-[15px] lg:text-[18px] font-light tracking-[0.17px] mt-4 transition-all duration-300 delay-50 text-center max-w-260 mx-auto mb-3">
            To ensure the maximum output from our team, we utilize the following
            steps to carry out a smooth process that results in customer
            satisfaction.
          </p>
        </div>
        <div className="grid lg:grid-cols-10 gap-2 lg:gap-4">
          <div className="lg:col-span-2 py-1 px-1 gap-2 flex flex-col border hover:border-[#FF00E5] rounded-xl bg-[#320127] border-[#320127] transition-all duration-300">
            <div className="py-4 px-6">
              <h4 className="text-[12px] uppercase font-bold tracking-[0.17px] text-[#ef41de] pb-2">
                Step 1
              </h4>
              <p className="text-white text-[14px] font-light tracking-[0.17px] mt-4">
                We start by planning and assigning tasks to the respective team.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 py-1 px-1 gap-2 flex flex-col border hover:border-[#FF00E5] rounded-xl bg-[#320127] border-[#320127] transition-all duration-300">
            <div className="py-4 px-6">
              <h4 className="text-[12px] uppercase font-bold tracking-[0.17px] text-[#ef41de] pb-2">
                Step 2
              </h4>
              <p className="text-white text-[14px] font-light tracking-[0.17px] mt-4">
                We discuss project requirements with customers to get the best
                result.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 py-1 px-1 gap-2 flex flex-col border hover:border-[#FF00E5] rounded-xl bg-[#320127] border-[#320127] transition-all duration-300">
            <div className="py-4 px-6">
              <h4 className="text-[12px] uppercase font-bold tracking-[0.17px] text-[#ef41de] pb-2">
                Step 3
              </h4>
              <p className="text-white text-[14px] font-light tracking-[0.17px] mt-4">
                This step includes designing appealing visuals and interesting
                characters.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 py-1 px-1 gap-2 flex flex-col border hover:border-[#FF00E5] rounded-xl bg-[#320127] border-[#320127] transition-all duration-300">
            <div className="py-4 px-6">
              <h4 className="text-[12px] uppercase font-bold tracking-[0.17px] text-[#ef41de] pb-2">
                Step 4
              </h4>
              <p className="text-white text-[14px] font-light tracking-[0.17px] mt-4">
                Our development team turns the designs into functional and
                efficient codes.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 py-1 px-1 gap-2 flex flex-col border hover:border-[#FF00E5] rounded-xl bg-[#320127] border-[#320127] transition-all duration-300">
            <div className="py-4 px-6">
              <h4 className="text-[12px] uppercase font-bold tracking-[0.17px] text-[#ef41de] pb-2">
                Step 5
              </h4>
              <p className="text-white text-[14px] font-light tracking-[0.17px] mt-4">
                After development, the game is tested rigorously and is ready
                for launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
