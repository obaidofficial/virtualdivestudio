import React from "react";
import Image from "next/image";

const OurStory = () => {
  return (
    <div className="bg-[#320127] pt-16 pb-16">
      <div className="pt-4 w-[94%] lg:w-[90%] mx-auto pb-4">
        <h2 className="text-[28px] md:text-[32] text-center lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em]">
          Our Story
        </h2>
        <p className="text-[15px] text-center md:text-[18px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] p-4">
          Take a look at our journey up to the present day.
        </p>
        <div className="grid md:grid-cols-11 gap-4">
          <div className="md:col-span-5">
            <div className="px-2 pt-6 pb-6 text-center mx-auto">
              <Image
                src="/images/about/OurStory1.webp"
                alt="Timeline"
                width={500}
                height={500}
                className="text-center mx-auto"
              />
            </div>
            <div className="px-2 pt-6 pb-6 text-right">
              <h4 className="text-[22px] md:text-[28px] text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                2021
              </h4>
              <p className="text-[15px] md:text-[16px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px]">
                Strengthened and added more services, which resulted in local
                industry recognition.
              </p>
            </div>
            <div className="px-2 pt-6 pb-6 text-right">
              <h4 className="text-[22px] md:text-[28px] text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                2022
              </h4>
              <p className="text-[15px] md:text-[16px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px]">
                Expanded services for Real Estate mainly for Saudia and USA
                region for Digital twin, and VR Experiences
              </p>
            </div>
            <div className="px-2 pt-6 pb-6 text-right">
              <h4 className="text-[22px] md:text-[28px] text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                2023
              </h4>
              <p className="text-[15px] md:text-[16px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px]">
                Focused on new emerging innovation, Stepped into Unreal Engine
                for Fortnite and Roblox
              </p>
            </div>
            <div className="px-2 pt-6 pb-6 text-right">
              <h4 className="text-[22px] md:text-[28px] text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                2024
              </h4>
              <p className="text-[15px] md:text-[16px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px]">
                Established strategic partnerships and initiated community
                involvement programs.
              </p>
            </div>
          </div>

          <div className="md:col-span-1 flex flex-col justify-center items-center">
            <div className="px-2 pt-6 pb-6 text-center mx-auto">
              <Image
                src="/images/about/timeline.webp"
                alt="Timeline"
                width={15}
                height={15}
              />
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="px-2 pt-6 pb-6 text-left">
              <h4 className="text-[22px] md:text-[28px] text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                2017
              </h4>
              <p className="text-[15px] md:text-[16px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px]">
                Virtual Dive Studios was established as a Product-based and
                Services-based company.
              </p>
            </div>

            <div className="px-2 pt-6 pb-6 text-left">
              <h4 className="text-[22px] md:text-[28px] text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                2018
              </h4>
              <p className="text-[15px] md:text-[16px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px]">
                Expanded local clientele, establishing a core team for Game and
                VR development
              </p>
            </div>

            <div className="px-2 pt-6 pb-6 text-left">
              <h4 className="text-[22px] md:text-[28px] text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                2019
              </h4>
              <p className="text-[15px] md:text-[16px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px]">
                Our Mobile game products performed well and hit their millions
                in downloads.
              </p>
            </div>

            <div className="px-2 pt-6 pb-6 text-left">
              <h4 className="text-[22px] md:text-[28px] text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                2020
              </h4>
              <p className="text-[15px] md:text-[16px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px]">
                Secured initial international clients from the USA and Middle
                East Region.
              </p>
            </div>

            <div className="px-2 pt-6 pb-6 text-center mx-auto">
              <Image
                src="/images/about/OurStory2.webp"
                alt="Timeline"
                width={500}
                height={500}
                className="text-center mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
