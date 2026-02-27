import { ArrowRightIcon } from "@heroicons/react/24/outline";
import FillPrimaryButton from "@/components/Helper/FillPrimaryButton";
import Link from "next/link";
import React from "react";

const PlatformBanner = () => {
  return (
    <div className="relative w-full h-[460px] lg:h-[420px] bg-black bg-[url('/images/inner-pages-banner-overlay-image.webp')] bg-center bg-cover bg-no-repeat">
      <div className="w-full h-full">
        <div className="relative z-4 flex items-center justify-center flex-col w-full h-full">
          <div className="md:w-[88%] w-[92%]">
            <div className="flex justify-center flex-col w-full h-full items-center gap-3">
              <p className="flex items-center gap-3 font-light">
                <Link href="/">
                  <span className="text-[#ef41de]">Home </span>
                </Link>{" "}
                <ArrowRightIcon className="w-3 h-3 text-white" />{" "}
                <span className="text-white">Platforms </span>
              </p>
              <h1 className="text-[32px] text-center lg:text-[50px] leading-[1.1em] text-white">
                Platform
              </h1>
              <p className="text-white text-[15px] lg:text-[18px] font-light tracking-[0.17px] text-center w-full md:w-[800px]">
                The selection of a platform in game development is so important
                that it should be done carefully. Platforms are the basis of
                game development, they determine the technical specifications,
                distribution channels, and monetization strategies that
                developers can use. The audience reaches and accessibility of a
                game is what they determine, thus designing the choices and
                ensuring quality standards. Furthermore, platforms offer
                developers the means to enhance their performance.
              </p>
              <Link href="/contact">
                <FillPrimaryButton>Contact Us</FillPrimaryButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformBanner;
