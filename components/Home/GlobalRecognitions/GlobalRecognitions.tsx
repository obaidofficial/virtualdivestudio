import React from "react";
import Image from "next/image";

export const GlobalRecognitions = () => {
  return (
    <div className="bg-[#0c000a] pt-16 pb-16">
      <div className="pt-4 w-[94%] lg:w-[90%] mx-auto pb-4">
        <div className="grid lg:grid-cols-12 gap-2 lg:gap-4">
          <div className="lg:col-span-12 py-2.5 px-4">
            <h2 className="text-[28px] md:text-[32] text-center lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em]">
              Our Global Recognitions
            </h2>
          </div>
          <div className="lg:col-span-3 py-8 px-8 flex flex-col justify-center h-[180px] md:h-[260px] items-center border border-[#FF00E5] rounded-xl">
            <Image
              src="/images/globalrecognitions/manifest.webp"
              alt="The Manifest Logo"
              width={160}
              height={60}
              className=""
            />
          </div>

          <div className="lg:col-span-3 py-8 px-8 flex flex-col justify-center h-[180px] md:h-[260px] items-center border border-[#FF00E5] rounded-xl">
            <Image
              src="/images/globalrecognitions/clutch.webp"
              alt="Clutch Logo"
              width={160}
              height={60}
              className=""
            />
          </div>

          <div className="lg:col-span-3 py-8 px-8 flex flex-col justify-center h-[180px] md:h-[260px] items-center border border-[#FF00E5] rounded-xl">
            <Image
              src="/images/globalrecognitions/G2.webp"
              alt="G2 Logo"
              width={120}
              height={60}
              className=""
            />
          </div>

          <div className="lg:col-span-3 py-8 px-8 flex flex-col justify-center h-[180px] md:h-[260px] items-center border border-[#FF00E5] rounded-xl">
            <Image
              src="/images/globalrecognitions/goodfirms.webp"
              alt="Good Firms Logo"
              width={240}
              height={60}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
