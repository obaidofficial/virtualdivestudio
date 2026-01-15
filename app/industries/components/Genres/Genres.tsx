import React from "react";
import Link from "next/link";
import FillWhiteButton from "@/components/Helper/FillWhiteButton";
import { LiaPennyArcade } from "react-icons/lia";
import { FaPennyArcade } from "react-icons/fa";
import { BiJoystick } from "react-icons/bi";
import { LuGamepad } from "react-icons/lu";
import { MdGamepad } from "react-icons/md";

const Genres = () => {
  return (
    <div className="bg-[#320127] pt-16 pb-16">
      <div className="w-[94%] lg:w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 md:gap-2 items-center">
          <div className="lg:col-span-5 py-2.5 px-4 ">
            <p className="text-[32px] text-center md:text-left md:text-[42px] text-white tracking-[0.17px] leading-[1.2em]">
              Our Game Development Genres
            </p>
            <p className="text-white text-[15px] lg:text-[18px] font-light tracking-[0.17px] mt-2 mb-4 max-w-[600px]">
              Real stories from our global partners. Discover how we're
              transforming enterprise operations one testimonial at a time.
            </p>
            <Link href="/contact">
              <FillWhiteButton>Let's Talk</FillWhiteButton>
            </Link>
          </div>

          <div className="lg:col-span-7 py-2.5 px-4 ">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-4 py-8 px-8 border-r border-b border-t-0 border-l-0 border-[#ef41de]">
                <div className="flex flex-col justify-center md:justify-start">
                  <p className="h-[42px] w-[42px] flex justify-center items-center text-[24px] p-1 rounded-full mb-4 bg-white/90 backdrop-blur-md text-[#320127] font-black tracking-[-1px]">
                    01
                  </p>
                  <p className="text-[#ef41de] text-[22px] lg:text-[22px] tracking-[0.17px] leading-[1.2em]">
                    Arcade Games
                  </p>
                </div>
              </div>
              <div className="lg:col-span-4 py-8 px-8 border-r-2 border-b border-t-0 border-l border-[#ef41de]">
                <div className="flex flex-col justify-center md:justify-start">
                  <p className="h-[42px] w-[42px] flex justify-center items-center text-[24px] p-1 rounded-full mb-4 bg-white/90 backdrop-blur-md text-[#320127] font-black tracking-[-1px]">
                    02
                  </p>
                  <p className="text-[#ef41de] text-[22px] lg:text-[22px] tracking-[0.17px] leading-[1.2em]">
                    Action & RPG Games
                  </p>
                </div>
              </div>
              <div className="lg:col-span-4 py-8 px-8 border-r-0 border-b border-t-0 border-l border-[#ef41de]">
                <div className="flex flex-col justify-center md:justify-start">
                  <p className="h-[42px] w-[42px] flex justify-center items-center text-[24px] p-1 rounded-full mb-4 bg-white/90 backdrop-blur-md text-[#320127] font-black tracking-[-1px]">
                    03
                  </p>
                  <p className="text-[#ef41de] text-[22px] lg:text-[22px] tracking-[0.17px] leading-[1.2em]">
                    Racing Games
                  </p>
                </div>
              </div>
              <div className="lg:col-span-4 py-8 px-8 border-r border-b-0 border-t border-l-0 border-[#ef41de]">
                <div className="flex flex-col justify-center md:justify-start">
                  <p className="h-[42px] w-[42px] flex justify-center items-center text-[24px] p-1 rounded-full mb-4 bg-white/90 backdrop-blur-md text-[#320127] font-black tracking-[-1px]">
                    04
                  </p>
                  <p className="text-[#ef41de] text-[22px] lg:text-[22px] tracking-[0.17px] leading-[1.2em]">
                    Casino & Card Games
                  </p>
                </div>
              </div>
              <div className="lg:col-span-4 py-8 px-8 border-r-2 border-b-0 border-t border-l border-[#ef41de]">
                <div className="flex flex-col justify-center md:justify-start">
                  <p className="h-[42px] w-[42px] flex justify-center items-center text-[24px] p-1 rounded-full mb-4 bg-white/90 backdrop-blur-md text-[#320127] font-black tracking-[-1px]">
                    05
                  </p>
                  <p className="text-[#ef41de] text-[22px] lg:text-[22px] tracking-[0.17px] leading-[1.2em]">
                    Sport Games
                  </p>
                </div>
              </div>
              <div className="lg:col-span-4 py-8 px-8 border-r-0 border-b-0 border-t border-l border-[#ef41de]">
                <div className="flex flex-col justify-center md:justify-start">
                  <p className="h-[42px] w-[42px] flex justify-center items-center text-[24px] p-1 rounded-full mb-4 bg-white/90 backdrop-blur-md text-[#320127] font-black tracking-[-1px]">
                    06
                  </p>
                  <p className="text-[#ef41de] text-[22px] lg:text-[22px] tracking-[0.17px] leading-[1.2em]">
                    Adventure Games
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

export default Genres;
