import React from "react";
import Link from "next/link";
import { BiHome, BiLogoMeta, BiSolidBrush } from "react-icons/bi";
import { FaGamepad } from "react-icons/fa";
import { PiVirtualReality } from "react-icons/pi";
import { TbBrandFortnite } from "react-icons/tb";

const CoreServices = () => {
  return (
    <div className="bg-[#0c000a] pt-16 pb-16">
      <div className="pt-6 w-[94%] lg:w-[90%] mx-auto pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-4">
          <div className="lg:col-span-12 py-2.5 px-4">
            <h2 className="text-[28px] md:text-[32] lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em]">
              Our Core Services
            </h2>
          </div>
          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <Link href="#" className="cursor-pointer">
              <div className="px-2 pt-8 pb-6 text-center mx-auto">
                <FaGamepad className="w-15 h-15 text-white mx-auto" />
                <div>
                  <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                    Game Development
                  </h4>
                  <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                    Our Game development experts can excel in your idea from
                    concept to launch, ensuring the highest quality standards.
                    Collaborate with us for development needs, and our experts
                    will ensure your game stands out in the market, polished and
                    perfected for gamers.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <Link href="#" className="cursor-pointer">
              <div className="px-2 pt-8 pb-6 text-center mx-auto">
                <BiLogoMeta className="w-15 h-15 text-white mx-auto" />
                <div>
                  <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                    Metaverse Development Services
                  </h4>
                  <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                    Metaverse is expanding in Virtual meetings, Education,
                    Events, and Ecommerce. You can access different parts of
                    popular metaverse domains through our metaverse development
                    services.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <Link href="#" className="cursor-pointer">
              <div className="px-2 pt-8 pb-6 text-center mx-auto">
                <PiVirtualReality className="w-15 h-15 text-white mx-auto" />
                <div>
                  <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                    AR/VR Development Services
                  </h4>
                  <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                    Our team of experts designs close-to real-life AR/VR games
                    to make entertainment to the maximum. With us, you will
                    unlock a new level of innovation in the AR/VR domain.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <Link href="#" className="cursor-pointer">
              <div className="px-2 pt-8 pb-6 text-center mx-auto">
                <BiSolidBrush className="w-15 h-15 text-white mx-auto" />
                <div>
                  <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                    Design and Art Development
                  </h4>
                  <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                    Gamification itself is not enough if it does not have the
                    magic of the 3D artwork and the captivating visuals. Our
                    services include everything from the creation of concept art
                    and detailed character designs to the making of immersive
                    environments and intuitive UI/UX experiences.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <Link href="#" className="cursor-pointer">
              <div className="px-2 pt-8 pb-6 text-center mx-auto">
                <BiHome className="w-15 h-15 text-white mx-auto" />
                <div>
                  <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                    Real Estate Services
                  </h4>
                  <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                    Harness the full potential of real estate solutions with us
                    for immersive digital experiences that are also
                    cost-effective. Our offerings include Digital Twins, AR/VR
                    experiences, Virtual apartment tours, Virtual renovation,
                    rendering, and virtual staging solutions.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <Link href="#" className="cursor-pointer">
              <div className="px-2 pt-8 pb-6 text-center mx-auto">
                <TbBrandFortnite className="w-15 h-15 text-white mx-auto" />
                <div>
                  <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                    UEFN Services
                  </h4>
                  <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                    Elevate your Fortnite experience with our expert solutions.
                    With our expertise in using Unreal Editor, we craft stunning
                    and immersive levels for Fortnite, bringing your vision to
                    life.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreServices;
