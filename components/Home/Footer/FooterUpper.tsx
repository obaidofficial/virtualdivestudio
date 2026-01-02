import React from "react";
import Image from "next/image";

const FooterUpper = () => {
  return (
    <div className="bg-[#0c000a] pt-10">
      <div className="pt-6 w-[94%] lg:w-[90%] mx-auto pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-2">
          <div className="lg:col-span-7 py-2.5 px-4 ">
            <p className="text-[24px] lg:text-[32px] text-[#ef41de] tracking-[1px]">
              Our Journey So Far
            </p>
            <p className="text-white text-[15px] lg:text-[20px] tracking-[0.17px]">
              Since 2017, We have successfully developed over 100+ iOS and
              Android games, reaching 50 million downloads globally.
            </p>
            <Image
              src="/images/footer/50Million.webp"
              alt="50 Million"
              width={1000}
              height={60}
            />
          </div>

          <div className="lg:col-span-5 py-2.5 px-4 flex flex-col justify-between">
            <p className="text-white text-[15px] lg:text-[20px] tracking-[0.17px]">
              Virtual Dive Studios, our innovative gaming techniques and
              imaginative design create immersive experiences. We are pushing
              the boundaries of what's possible in gaming.
            </p>
            <p className="text-white text-[24px] mt-4 md:mt-0 lg:text-[42px] leading-[1.1em] tracking-[0.17px] mb-0 lg:mb-20">
              The Ultimate Online Gaming Community
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterUpper;
