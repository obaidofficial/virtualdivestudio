import React from "react";
import FillPrimaryButton from "@/components/Helper/FillPrimaryButton";
import Link from "next/link";

const FooterCTA = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 md:gap-2 items-center">
      <div className="lg:col-span-4 py-2.5 px-4 ">
        <p className="text-[32px] text-center md:text-left lg:text-[42px] text-white tracking-[1px] leading-[1.2em]">
          <span className="text-[#ef41de]">Virtual Dive </span>Studio
        </p>
      </div>

      <div className="lg:col-span-1 py-2.5 px-4 ">
        <div className="flex justify-center md:justify-end">
          <Link href="/contact">
            <FillPrimaryButton>Contact Us</FillPrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterCTA;
