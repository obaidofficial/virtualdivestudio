import React from "react";

const CoreStatements = () => {
  return (
    <div className="bg-[#170012] pt-16 pb-16">
      <div className="pt-4 w-[94%] lg:w-[90%] mx-auto pb-4">
        <h2 className="text-[28px] md:text-[32] text-center lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em] pb-4">
          Our Core Statements
        </h2>
        <div className="grid lg:grid-cols-12 gap-0 border-2 border-md border-[#ef41de] rounded-2xl">
          <div className="lg:col-span-6">
            <div className="mt-8 lg:mt-0 rounded-tl-xl h-[260px] md:h-[400px] w-fill border-2 border-md border-[#ef41de] bg-[url('/images/about/cores1.webp')] bg-cover bg-position-[50%_75%]"></div>
          </div>

          <div className="lg:col-span-6 p-6 flex flex-col justify-center items-center border-2 border-md border-[#ef41de] rounded-tr-xl">
            <div className="px-2 pt-6 pb-6 text-center mx-auto">
              <div>
                <h4 className="text-[24px] md:text-[34px] text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  The Mission we follow
                </h4>
                <p className="text-[15px] md:text-[18px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  Virtual Dive Studios is dedicated to the production of
                  fascinating gaming adventures and the development of
                  technologies that attract audiences and change the limits of
                  what can be done.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 p-6 flex flex-col justify-center items-center border-2 border-md border-[#ef41de] rounded-bl-xl">
            <div className="px-2 pt-6 pb-6 text-center mx-auto">
              <div>
                <h4 className="text-[24px] md:text-[34px] text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  The Vision we follow
                </h4>
                <p className="text-[15px] md:text-[18px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  We want to enlarge the gaming industry by providing an
                  outstanding deal of services to our clients. Our creativity
                  does not have any limits and our work will always be based on
                  the things that are outside of the box.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-2xl">
            <div className="mt-8 lg:mt-0 rounded-br-xl h-[260px] lg:h-[400px] w-fill border-2 border-md border-[#ef41de] bg-[url('/images/about/cores2.webp')] bg-cover bg-position-[50%_75%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreStatements;
