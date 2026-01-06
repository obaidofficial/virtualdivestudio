import React from "react";
import Image from "next/image";

const WhyVRAR = () => {
  return (
    <div className="bg-[#170012] pt-16 pb-16">
      <div className="pt-6 w-[94%] lg:w-[90%] mx-auto pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-2">
          <div className="lg:col-span-6 py-2.5 px-4 flex flex-col justify-center">
            <h2 className="text-[28px] md:text-[32px] lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em]">
              Why VR/AR?
            </h2>
            <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
              In 2024, augmented reality (AR) and virtual reality (VR)
              technologies have significantly expanded, with millions of users
              engaging monthly. 171 million people use VR technology globally,
              and in the U.S., about 58.9 million people use VR, and 93.3
              million use AR, reflecting their increasing integration across
              various industries including healthcare, education, real estate,
              and retail. This widespread adoption underscores AR and VR's
              growing importance and potential in transforming traditional
              business practices and consumer experiences.
            </p>
            <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
              Virtual Dive Studio's vision is to advance AR and VR technologies,
              making them accessible and beneficial for all sectors, driving a
              new era of digital interaction and operational efficiency.
            </p>
          </div>

          <div className="lg:col-span-6 py-2.5 px-4 flex flex-col items-center">
            <Image
              src="/images/whyVRAR/Why-AR-VR.webp"
              alt="AR VR"
              width={500}
              height={60}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyVRAR;
