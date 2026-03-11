import React from "react";
import Link from "next/link";
import { BiBrain, BiHeart, BiRocket } from "react-icons/bi";
import { SiBlockchaindotcom } from "react-icons/si";
import { TbHandFinger } from "react-icons/tb";
import { FaComments, FaThumbsUp, FaUserTie } from "react-icons/fa6";
import { BsCodeSlash, BsImages } from "react-icons/bs";
import { MdCheckBox } from "react-icons/md";
import { RocketLaunchIcon } from "@heroicons/react/16/solid";
import { GiSwordSlice } from "react-icons/gi";

const UEFNFortniteServices = () => {
  return (
    <div className="bg-[#0c000a] pt-16 pb-16">
      <div className="pt-6 w-[94%] lg:w-[90%] mx-auto pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-4">
          <div className="lg:col-span-12 py-2.5 px-4">
            <h2 className="text-[28px] md:text-[32] text-center lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em]">
              Our UEFN Fortnite Services
            </h2>
            <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4 text-center">
              Step into the future of Fortnite with our UEFN services
            </p>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <FaThumbsUp className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Level Design
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  Being the Unreal Editor specialists, we develop exciting and
                  interactive Fortnite experiences that bring your vision to
                  life. Our endeavor with Unreal is proven by our great
                  achievements.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <GiSwordSlice className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Special Mechanics and Graphics
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  We go beyond the limits of Fortnite by coming up with special
                  gameplay mechanics and features that make your brand stand out
                  from the rest. This also involves the addition of top visuals
                  and functions.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <BsCodeSlash className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Building Code
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  We are good at using Fortnite's code to invent special items
                  and features for you only. Knowing the structure and
                  principles of Fortnite we are able to create unique elements.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <BsImages className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Asset Creation
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  We make great pictures and thrilling movie-like scenes which
                  are the main reasons why Fortnite players stay addicted to it.
                  Just think of the real-life like explosions, characters with
                  cool glows and dramatic scenes which will make your experience
                  great.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <BiRocket className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Performance Optimization
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  We guarantee that the game is fast and enjoyable to play. We
                  achieve this by using techniques like "level streaming" which
                  helps to load the game world in sections, so your computer
                  will not be overloaded and you can fully concentrate on the
                  game.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <MdCheckBox className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Testing and Quality Assurance
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  We check that the new Fortnite elements created by you
                  function and are error-free. After the quality is verified,
                  they are ready to be incorporated in the Fortnite universe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UEFNFortniteServices;
