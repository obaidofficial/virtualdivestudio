import React from "react";
import Image from "next/image";
import { BsDatabase, BsUnity } from "react-icons/bs";
import { FaFacebook, FaGamepad, FaUnity } from "react-icons/fa";
import { PiVirtualReality } from "react-icons/pi";
import { TbAugmentedReality, TbSocial } from "react-icons/tb";

const WhyChooseUnity = () => {
  return (
    <div className="bg-[#0c000a] pt-16 pb-16">
      <div className="pt-4 w-[94%] lg:w-[90%] mx-auto pb-4">
        <div className="grid lg:grid-cols-12 gap-2 lg:gap-2">
          <div className="lg:col-span-12 py-2.5 px-4">
            <h2 className="text-[28px] md:text-[32] text-center lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em]">
              Why Choose Unity For Game Development?
            </h2>
            <p className="text-white text-[15px] lg:text-[18px] font-light tracking-[0.17px] mt-4 transition-all duration-300 delay-50 text-center max-w-260 mx-auto mb-3">
              Unity is the top cross-platform choice, it includes all of the
              known modern platforms. Design games of any type, both casual
              mobile games and AAA ones. Besides, it is a source of AR and VR
              activities as well.
            </p>
          </div>
          <div className="lg:col-span-3 rounded-2xl m-1 bg-linear-to-b from-[#1e001b] to-[#1e001b] border border-[#ef41de]">
            <div className="text-center mx-auto">
              <Image
                src="/images/platforms/unity/why-choose-unity/1.webp"
                alt="Development Process"
                width={500}
                height={500}
                className="rounded-lg mx-auto"
              />
              <div>
                <h4 className="text-[17px] md:text-[20px] py-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px] px-2">
                  Solutions for Game Development
                </h4>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-2xl m-1 bg-linear-to-b from-[#1e001b] to-[#1e001b] border border-[#ef41de]">
            <div className="text-center mx-auto">
              <Image
                src="/images/platforms/unity/why-choose-unity/2.webp"
                alt="Development Process"
                width={500}
                height={500}
                className="rounded-lg mx-auto"
              />
              <div>
                <h4 className="text-[17px] md:text-[20px] py-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px] px-2">
                  Cross Platform Game Development
                </h4>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-2xl m-1 bg-linear-to-b from-[#1e001b] to-[#1e001b] border border-[#ef41de]">
            <div className="text-center mx-auto">
              <Image
                src="/images/platforms/unity/why-choose-unity/3.webp"
                alt="Development Process"
                width={500}
                height={500}
                className="rounded-lg mx-auto"
              />
              <div>
                <h4 className="text-[17px] md:text-[20px] py-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px] px-2">
                  Maximum Efficiency & Flexibility
                </h4>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-2xl m-1 bg-linear-to-b from-[#1e001b] to-[#1e001b] border border-[#ef41de]">
            <div className="text-center mx-auto">
              <Image
                src="/images/platforms/unity/why-choose-unity/4.webp"
                alt="Development Process"
                width={500}
                height={500}
                className="rounded-lg mx-auto"
              />
              <div>
                <h4 className="text-[17px] md:text-[20px] py-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px] px-2">
                  Support for AR/VR Solutions
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUnity;
