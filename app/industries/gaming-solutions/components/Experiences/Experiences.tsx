import React from "react";
import Link from "next/link";
import { BiBitcoin, BiLogoMeta, BiMobileAlt } from "react-icons/bi";
import { PiVirtualReality } from "react-icons/pi";
import { MdLoop } from "react-icons/md";

const Experiences = () => {
  return (
    <div className="bg-[#0c000a] pt-16 pb-16">
      <div className="pt-6 w-[94%] lg:w-[90%] mx-auto pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-4">
          <div className="lg:col-span-12 py-2.5 px-4">
            <h2 className="text-[28px] md:text-[32] text-center lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em]">
              Explore Our Cutting-Edge Gaming Solutions for Unmatched Player
              Experiences
            </h2>
            <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4 text-center">
              We cover different domains for this industry!
            </p>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <BiMobileAlt className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Mobile Game Development
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  The ease of gaming can be increased by using our mobile game
                  development services. If you want to develop an application
                  that can run on multiple platforms, create a native app, or
                  use other solution combinations we will help you with this.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <BiLogoMeta className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Metaverse Game Development
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  Are you in the market for top-tier metaverse solutions?
                  Through the virtual space you can make your own Meraverse that
                  will be unique and personalized.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <PiVirtualReality className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  AR/VR Game Development
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  We turn the dreams of people into reality and help businesses
                  communicate with their customers more profoundly by using the
                  newest techniques of AR and VR.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <MdLoop className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Full Cycle Game Development
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  Give us a chance to cover all the game development stages from
                  idea creation to release.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <BiBitcoin className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  NFT Game Development
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  Through the NFT game development, you can unlock the
                  possibility of making amazing and profitable gaming
                  experiences for your audience by working with our studio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
