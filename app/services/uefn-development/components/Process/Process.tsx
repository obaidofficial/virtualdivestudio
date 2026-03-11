import React from "react";

const Process = () => {
  return (
    <div className="bg-[#0c000a] pt-16 pb-16">
      <div className="pt-4 w-[94%] lg:w-[90%] mx-auto pb-4">
        <div>
          <h2 className="text-[28px] md:text-[32] lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em] text-center">
            Our UEFN Fortnite Development Processes
          </h2>
          <p className="text-white text-[15px] lg:text-[18px] font-light tracking-[0.17px] mt-4 transition-all duration-300 delay-50 text-center max-w-260 mx-auto mb-3">
            In order to get the most out of our team we follow the steps below
            which makes a smooth process and as a consequence customer
            satisfaction.
          </p>
        </div>
        <div className="grid lg:grid-cols-10 gap-2 lg:gap-4">
          <div className="lg:col-span-2 py-1 px-1 gap-2 flex flex-col border hover:border-[#FF00E5] rounded-xl bg-[#320127] border-[#320127] transition-all duration-300">
            <div className="py-4 px-6">
              <h4 className="text-[12px] uppercase font-bold tracking-[0.17px] text-[#ef41de] pb-2">
                Define Goals
              </h4>
              <p className="text-white text-[14px] font-light tracking-[0.17px] mt-4">
                The first step is to work with clients to set goals and design a
                special Fortnite experience.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 py-1 px-1 gap-2 flex flex-col border hover:border-[#FF00E5] rounded-xl bg-[#320127] border-[#320127] transition-all duration-300">
            <div className="py-4 px-6">
              <h4 className="text-[12px] uppercase font-bold tracking-[0.17px] text-[#ef41de] pb-2">
                Assets Development
              </h4>
              <p className="text-white text-[14px] font-light tracking-[0.17px] mt-4">
                Therefore, we prototype and iterate on the appearance,
                sensation, and mechanics of your Fortnite elements.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 py-1 px-1 gap-2 flex flex-col border hover:border-[#FF00E5] rounded-xl bg-[#320127] border-[#320127] transition-all duration-300">
            <div className="py-4 px-6">
              <h4 className="text-[12px] uppercase font-bold tracking-[0.17px] text-[#ef41de] pb-2">
                Development
              </h4>
              <p className="text-white text-[14px] font-light tracking-[0.17px] mt-4">
                Later on, we code and construct your Fortnite experience with
                the help of UEFN's know-how and Fortnite assets.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 py-1 px-1 gap-2 flex flex-col border hover:border-[#FF00E5] rounded-xl bg-[#320127] border-[#320127] transition-all duration-300">
            <div className="py-4 px-6">
              <h4 className="text-[12px] uppercase font-bold tracking-[0.17px] text-[#ef41de] pb-2">
                Testing
              </h4>
              <p className="text-white text-[14px] font-light tracking-[0.17px] mt-4">
                After that we check the prepared parts and thoroughly test and
                correct the Fortnite experience so that it is at its best in
                terms of performance.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 py-1 px-1 gap-2 flex flex-col border hover:border-[#FF00E5] rounded-xl bg-[#320127] border-[#320127] transition-all duration-300">
            <div className="py-4 px-6">
              <h4 className="text-[12px] uppercase font-bold tracking-[0.17px] text-[#ef41de] pb-2">
                Launch and Support
              </h4>
              <p className="text-white text-[14px] font-light tracking-[0.17px] mt-4">
                In the last step, we start your Fortnite adventure with
                continuous help to make a successful beginning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
