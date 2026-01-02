import React from "react";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const FooterLocations = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-3 lg:gap-10">
      <div className="md:col-span-2">
        <div className="py-1 px-1">
          <h4 className="text-[20px] mb-4 md:text-[22px] leading-[1.2em] text-white">
            Pakistan
          </h4>

          <div className="w-[96%] lg:w-[96%] grid grid-cols-12 mb-2">
            <div className="col-span-2 md:col-span-1 flex items-center justify-center">
              <PhoneIcon width={20} height={20} className="text-[#ef41de]" />
            </div>
            <div className="col-span-10 md:col-span-11 text-left flex items-center">
              <p className="text-md text-white font-light text-[15px] lg:text-[18px]">
                (042) 35941258
              </p>
            </div>
          </div>

          <div className="w-[96%] lg:w-[96%] grid grid-cols-12 mb-2">
            <div className="col-span-2 md:col-span-1 flex items-center justify-center">
              <EnvelopeIcon width={20} height={20} className="text-[#ef41de]" />
            </div>
            <div className="col-span-10 md:col-span-11 text-left flex items-center">
              <p className="text-md text-white font-light text-[15px] lg:text-[18px]">
                info@virtualdivestudio.com
              </p>
            </div>
          </div>

          <div className="w-[96%] lg:w-[96%] grid grid-cols-12 mb-2">
            <div className="col-span-2 md:col-span-1 flex items-center justify-center">
              <MapPinIcon width={20} height={20} className="text-[#ef41de]" />
            </div>
            <div className="col-span-10 md:col-span-11 text-left flex items-center">
              <p className="text-white font-light text-[15px] lg:text-[18px]">
                Office 102 Garden tower, 47 Babar block, Garden town Lahore
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-span-2">
        <div className="py-1 px-1">
          <h4 className="text-[20px] mb-4 md:text-[22px] leading-[1.2em] text-white">
            USA
          </h4>

          <div className="w-[96%] lg:w-[96%] grid grid-cols-12 mb-2">
            <div className="col-span-2 md:col-span-1 flex items-center justify-center">
              <PhoneIcon width={20} height={20} className="text-[#ef41de]" />
            </div>
            <div className="col-span-10 md:col-span-11 text-left flex items-center">
              <p className="text-md text-white font-light text-[15px] lg:text-[18px]">
                +1(407) 606-7197
              </p>
            </div>
          </div>

          <div className="w-[96%] lg:w-[96%] grid grid-cols-12 mb-2">
            <div className="col-span-2 md:col-span-1 flex items-center justify-center">
              <EnvelopeIcon width={20} height={20} className="text-[#ef41de]" />
            </div>
            <div className="col-span-10 md:col-span-11 text-left flex items-center">
              <p className="text-md text-white font-light text-[15px] lg:text-[18px]">
                info@virtualdivestudio.com
              </p>
            </div>
          </div>

          <div className="w-[96%] lg:w-[96%] grid grid-cols-12 mb-2">
            <div className="col-span-2 md:col-span-1 flex items-center justify-center">
              <MapPinIcon width={20} height={20} className="text-[#ef41de]" />
            </div>
            <div className="col-span-10 md:col-span-11 text-left flex items-center">
              <p className="text-white font-light text-[15px] lg:text-[18px]">
                5944 Coral Ridge Dr, Coral Springs, FL
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-span-2">
        <div className="py-1 px-1">
          <h4 className="text-[20px] mb-4 md:text-[22px] leading-[1.2em] text-white">
            Sweden
          </h4>

          <div className="w-[96%] lg:w-[96%] grid grid-cols-12 mb-2">
            <div className="col-span-2 md:col-span-1 flex items-center justify-center">
              <PhoneIcon width={20} height={20} className="text-[#ef41de]" />
            </div>
            <div className="col-span-10 md:col-span-11 text-left flex items-center">
              <p className="text-md text-white font-light text-[15px] lg:text-[18px]">
                +4 6767559366
              </p>
            </div>
          </div>

          <div className="w-[96%] lg:w-[96%] grid grid-cols-12 mb-2">
            <div className="col-span-2 md:col-span-1 flex items-center justify-center">
              <EnvelopeIcon width={20} height={20} className="text-[#ef41de]" />
            </div>
            <div className="col-span-10 md:col-span-11 text-left flex items-center">
              <p className="text-md text-white font-light text-[15px] lg:text-[18px]">
                info@virtualdivestudio.com
              </p>
            </div>
          </div>

          <div className="w-[96%] lg:w-[96%] grid grid-cols-12 mb-2">
            <div className="col-span-2 md:col-span-1 flex items-center justify-center">
              <MapPinIcon width={20} height={20} className="text-[#ef41de]" />
            </div>
            <div className="col-span-10 md:col-span-11 text-left flex items-center">
              <p className="text-white font-light text-[15px] lg:text-[18px]">
                Örebrogatan 4,418 71 , Göteborg
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLocations;
