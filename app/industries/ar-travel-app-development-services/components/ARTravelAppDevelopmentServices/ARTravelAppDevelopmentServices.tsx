import React from "react";
import Link from "next/link";
import {
  BiBrain,
  BiCalendarCheck,
  BiHeart,
  BiPaperPlane,
} from "react-icons/bi";
import { SiApplepay, SiBlockchaindotcom } from "react-icons/si";
import { TbHandFinger } from "react-icons/tb";
import {
  FaComments,
  FaPlane,
  FaPlaneArrival,
  FaUserTie,
} from "react-icons/fa6";
import { PiVirtualReality } from "react-icons/pi";
import { BsTranslate } from "react-icons/bs";
import { FaApplePay } from "react-icons/fa";

const ARTravelAppDevelopmentServices = () => {
  return (
    <div className="bg-[#0c000a] pt-16 pb-16">
      <div className="pt-6 w-[94%] lg:w-[90%] mx-auto pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-4">
          <div className="lg:col-span-12 py-2.5 px-4">
            <h2 className="text-[28px] md:text-[32] text-center lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em]">
              Our AR Travel App Development Services
            </h2>
            <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4 text-center">
              Unleash the expertise of our Travelling App Development Services.
            </p>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <BiCalendarCheck className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Online Booking Platforms
                </h4>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <PiVirtualReality className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  AR and VR Travel Integration
                </h4>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <BiPaperPlane className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Travel Apps for Direction
                </h4>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <SiBlockchaindotcom className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Blockchain Integration in Travel
                </h4>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <BsTranslate className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Language Translation Apps
                </h4>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <SiApplepay className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Mobile Wallets and Online Payment Solutions
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ARTravelAppDevelopmentServices;
