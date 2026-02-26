import React from "react";
import Link from "next/link";
import FillPrimaryButton from "@/components/Helper/FillPrimaryButton";

const TailoredSolutions = () => {
  return (
    <div className="bg-[#320127] pt-16 pb-16">
      <div className="w-[94%] lg:w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 md:gap-2 items-center">
          <div className="lg:col-span-5 py-2.5 px-4 ">
            <p className="text-[32px] text-center md:text-left md:text-[42px] text-white tracking-[0.17px] leading-[1.2em]">
              Tailored Solutions for Businesses of All Sizes!
            </p>
            <p className="text-white text-[15px] lg:text-[18px] font-light tracking-[0.17px] mt-2 mb-4 max-w-[600px] text-center md:text-left">
              Getting custom solutions according to your project demands is a
              given at Virtual Dive. We offer services for all types of
              businesses!
            </p>
            <div className="flex flex-col items-center md:items-start">
              <Link href="/contact">
                <FillPrimaryButton>Contact Us</FillPrimaryButton>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 py-2.5 px-4 ">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-4 py-8 px-8 border md:border-r border-b-0 md:border-t-0 md:border-l-0 border-[#ef41de]">
                <div className="flex flex-col justify-center md:justify-start">
                  <p className="h-[42px] w-[42px] flex justify-center items-center text-[24px] p-1 rounded-full mb-4 bg-white/90 backdrop-blur-md text-[#320127] font-black tracking-[-1px]">
                    01
                  </p>
                  <p className="text-[#ef41de] text-[22px] md:text-[26px] tracking-[0.17px] leading-[1.2em]">
                    For Startups
                  </p>
                  <p className="text-white text-[15px] md:text-[16px] tracking-[0.17px] leading-[1.2em]">
                    Need assistance at a small level? We are here for you.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-4 py-8 px-8 border md:border-r border-b-0 md:border-t-0 md:border-l-0 border-[#ef41de]">
                <div className="flex flex-col justify-center md:justify-start">
                  <p className="h-[42px] w-[42px] flex justify-center items-center text-[24px] p-1 rounded-full mb-4 bg-white/90 backdrop-blur-md text-[#320127] font-black tracking-[-1px]">
                    02
                  </p>
                  <p className="text-[#ef41de] text-[22px] md:text-[26px] tracking-[0.17px] leading-[1.2em]">
                    For Business
                  </p>
                  <p className="text-white text-[15px] md:text-[16px] tracking-[0.17px] leading-[1.2em]">
                    Our services include creative solutions for business owners.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-4 py-8 px-8 border md:border-r-0 border-b-0 md:border-t-0 md:border-l-0 border-[#ef41de]">
                <div className="flex flex-col justify-center md:justify-start">
                  <p className="h-[42px] w-[42px] flex justify-center items-center text-[24px] p-1 rounded-full mb-4 bg-white/90 backdrop-blur-md text-[#320127] font-black tracking-[-1px]">
                    03
                  </p>
                  <p className="text-[#ef41de] text-[22px] md:text-[26px] tracking-[0.17px] leading-[1.2em]">
                    For Enterprise
                  </p>
                  <p className="text-white text-[15px] md:text-[16px] tracking-[0.17px] leading-[1.2em]">
                    Scale up your business with our specialized gaming services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailoredSolutions;
