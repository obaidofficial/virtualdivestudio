import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const ContactBanner = () => {
  return (
    <div className="relative w-full h-[230px] lg:h-[380px] bg-black bg-[url('/images/inner-pages-banner-overlay-image.webp')] bg-center bg-cover bg-no-repeat">
      <div className="w-full h-full">
        <div className="relative z-4 flex items-center justify-center flex-col w-full h-full">
          <div className="md:w-[88%] w-[92%]">
            <div className="flex justify-center flex-col w-full h-full items-center">
              <h1 className="text-[32px] text-center lg:text-[50px] leading-[1.1em] text-white">
                Contact Us
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
