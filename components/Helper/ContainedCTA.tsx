import React from "react";
import FillWhiteButton from "./FillWhiteButton";
import Link from "next/link";

const ContainedCTA = () => {
  return (
    <div className="bg-[#0c000a] pt-16 pb-16">
      <div className="pt-6 w-[94%] lg:w-[90%] mx-auto pb-6 bg-[url('/images/Contained-CTA.webp')] bg-center bg-cover bg-no-repeat rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 md:gap-2 items-center h-[180px] lg:h-[220px] px-2 md:px-20">
          <div className="lg:col-span-4 py-2.5 px-4 ">
            <p className="text-[32px] text-center md:text-left md:text-[42px] lg:text-[56px] text-white tracking-[1px] leading-[1.2em]">
              Have an Idea?
              <br />
              Lets Build And Scale It!
            </p>
          </div>

          <div className="lg:col-span-1 py-2.5 px-4 ">
            <div className="flex justify-center md:justify-end">
              <Link href="/contact">
                <FillWhiteButton>Let's Talk</FillWhiteButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainedCTA;
