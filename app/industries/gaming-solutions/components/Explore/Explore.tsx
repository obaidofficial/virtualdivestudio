import React from "react";
import Image from "next/image";
import FillPrimaryButton from "@/components/Helper/FillPrimaryButton";
import Link from "next/link";

const Explore = () => {
  return (
    <div className="bg-[#170012] pt-16 pb-16">
      <div className="pt-6 w-[94%] lg:w-[90%] mx-auto pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-2">
          <div className="lg:col-span-6 py-2.5 px-4 flex flex-col items-center">
            <Image
              src="/images/industries/explore.webp"
              alt="Explore"
              width={650}
              height={650}
              className="rounded-lg"
            />
          </div>
          <div className="lg:col-span-6 py-2.5 px-4 flex flex-col justify-center">
            <h2 className="text-[28px] md:text-[32px] lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em]">
              Explore the Gaming Industry with Virtual Dive Studios
            </h2>
            <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
              The technology is moving fast in the gaming field and it has
              brought a lot of innovations to how we play and experience games!
              Work with us and you will be a part of the game tech merging
              revolution.
            </p>
            <div className="mt-4">
              <Link href="/contact">
                <FillPrimaryButton>Let's Talk</FillPrimaryButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
