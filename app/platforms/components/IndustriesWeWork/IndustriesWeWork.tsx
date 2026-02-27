import Link from "next/link";
import React from "react";

const IndustriesWeWork = () => {
  return (
    <div className="bg-[#170012] pt-16 pb-16">
      <div className="pt-4 w-[94%] lg:w-[90%] mx-auto pb-4">
        <div>
          <h2 className="text-[28px] md:text-[32] lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em] text-center">
            Industries We Have Worked With!
          </h2>
        </div>
        <div className="grid lg:grid-cols-9 gap-2 lg:gap-4">
          <div className="lg:col-span-3 py-1 md:py-8 px-1 gap-2 flex flex-col">
            <Link href="#">
              <div className="py-4 px-6 border hover:border-[#FF00E5] rounded-xl bg-[#320127] border-[#320127] transition-all duration-300">
                <h2 className="text-[17px] md:text-[20px] font-semibold text-white tracking-[0.5px] leading-[1.1em] text-center">
                  Gaming
                </h2>
              </div>
            </Link>

            <Link href="#">
              <div className="py-4 px-6 border hover:border-[#FF00E5] rounded-xl bg-[#320127] border-[#320127] transition-all duration-300">
                <h2 className="text-[17px] md:text-[20px] font-semibold text-white tracking-[0.5px] leading-[1.1em] text-center">
                  Traveling
                </h2>
              </div>
            </Link>

            <Link href="#">
              <div className="py-4 px-6 border hover:border-[#FF00E5] rounded-xl bg-[#320127] border-[#320127] transition-all duration-300">
                <h2 className="text-[17px] md:text-[20px] font-semibold text-white tracking-[0.5px] leading-[1.1em] text-center">
                  E-commerce
                </h2>
              </div>
            </Link>
          </div>

          <div className="lg:col-span-3 py-1 md:py-8 px-1 gap-2 flex flex-col">
            <Link href="#">
              <div className="py-4 px-6 border hover:border-[#FF00E5] rounded-xl bg-[#320127] border-[#320127] transition-all duration-300">
                <h2 className="text-[17px] md:text-[20px] font-semibold text-white tracking-[0.5px] leading-[1.1em] text-center">
                  Sports & Lifestyle
                </h2>
              </div>
            </Link>

            <Link href="#">
              <div className="py-4 px-6 border hover:border-[#FF00E5] rounded-xl bg-[#320127] border-[#320127] transition-all duration-300">
                <h2 className="text-[17px] md:text-[20px] font-semibold text-white tracking-[0.5px] leading-[1.1em] text-center">
                  Blockchain
                </h2>
              </div>
            </Link>

            <Link href="#">
              <div className="py-4 px-6 border hover:border-[#FF00E5] rounded-xl bg-[#320127] border-[#320127] transition-all duration-300">
                <h2 className="text-[17px] md:text-[20px] font-semibold text-white tracking-[0.5px] leading-[1.1em] text-center">
                  Real Estate
                </h2>
              </div>
            </Link>
          </div>

          <div className="lg:col-span-3 py-1 md:py-8 px-1 gap-2 flex flex-col">
            <Link href="#">
              <div className="py-4 px-6 border hover:border-[#FF00E5] rounded-xl bg-[#320127] border-[#320127] transition-all duration-300">
                <h2 className="text-[17px] md:text-[20px] font-semibold text-white tracking-[0.5px] leading-[1.1em] text-center">
                  Health & Wellness
                </h2>
              </div>
            </Link>

            <Link href="#">
              <div className="py-4 px-6 border hover:border-[#FF00E5] rounded-xl bg-[#320127] border-[#320127] transition-all duration-300">
                <h2 className="text-[17px] md:text-[20px] font-semibold text-white tracking-[0.5px] leading-[1.1em] text-center">
                  Education
                </h2>
              </div>
            </Link>

            <Link href="#">
              <div className="py-4 px-6 border hover:border-[#FF00E5] rounded-xl bg-[#320127] border-[#320127] transition-all duration-300">
                <h2 className="text-[17px] md:text-[20px] font-semibold text-white tracking-[0.5px] leading-[1.1em] text-center">
                  Social Networking And Entertainment
                </h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesWeWork;
