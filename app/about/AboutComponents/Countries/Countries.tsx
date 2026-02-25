import React from "react";
import Image from "next/image";

const Countries = () => {
  return (
    <div className="bg-[#320127] pt-16 pb-16 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/images/about/countries.webp')] z-1 opacity-30"></div>
      <div className="pt-4 w-[94%] lg:w-[90%] mx-auto pb-4">
        <div className="grid lg:grid-cols-12 gap-2 lg:gap-2">
          <div className="lg:col-span-12 py-2.5 px-4">
            <h2 className="text-[28px] md:text-[32] text-center lg:text-[42px] max-w-270 mx-auto text-white tracking-[0.5px] leading-[1.1em]">
              100+ employees based in multiple countries worldwide
              USA,Pakistan,Sweden And UAE
            </h2>
          </div>
          <div className="lg:col-span-12 m-1 text-center mx-auto">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <div className="flex-wrap flex items-center justify-center gap-5">
                <Image
                  src="/images/about/flags/f1.webp"
                  alt="Development Process"
                  width={100}
                  height={100}
                />
                <Image
                  src="/images/about/flags/f2.webp"
                  alt="Development Process"
                  width={100}
                  height={100}
                />
                <Image
                  src="/images/about/flags/f3.webp"
                  alt="Development Process"
                  width={100}
                  height={100}
                />
                <Image
                  src="/images/about/flags/f4.webp"
                  alt="Development Process"
                  width={100}
                  height={100}
                />
                <Image
                  src="/images/about/flags/f5.webp"
                  alt="Development Process"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
