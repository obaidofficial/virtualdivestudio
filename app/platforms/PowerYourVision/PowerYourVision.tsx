import React from "react";
import { FaApple, FaDesktop, FaGamepad, FaMobile } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa6";
import { ImPacman } from "react-icons/im";
import { PiVirtualReality } from "react-icons/pi";
import { TbAugmentedReality } from "react-icons/tb";

const PowerYourVision = () => {
  return (
    <div className="bg-[#0c000a] pt-16 pb-16">
      <div className="pt-4 w-[94%] lg:w-[90%] mx-auto pb-4">
        <div className="grid lg:grid-cols-12 gap-2 lg:gap-2">
          <div className="lg:col-span-12 py-2.5 px-4">
            <h2 className="text-[28px] md:text-[32] text-center lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em]">
              Power Your Vision with Our Game Development Platforms
            </h2>
          </div>
          <div className="lg:col-span-3 rounded-2xl m-1 bg-linear-to-b from-[#1e001b] to-[#5f0055]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <FaMobile className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[17px] md:text-[20px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Mobile Game Development
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  Get a wider audience and make your games more available by
                  developing mobile games.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-2xl m-1 bg-linear-to-b from-[#1e001b] to-[#5f0055]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <PiVirtualReality className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[17px] md:text-[20px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  VR Game Development
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  Go to the virtual world of fun and games with our VR gaming
                  services that have a lot of interactivity.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-2xl m-1 bg-linear-to-b from-[#1e001b] to-[#5f0055]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <ImPacman className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[17px] md:text-[20px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Instant Game Development
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  Avoid the trouble of downloading and installing and let your
                  customers play games instantly.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-2xl m-1 bg-linear-to-b from-[#1e001b] to-[#5f0055]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <FaApple className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[17px] md:text-[20px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  IOS Game Development
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  Design a special gaming for the IOS users by using our IOS
                  game development services.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-2xl m-1 bg-linear-to-b from-[#1e001b] to-[#5f0055]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <FaGamepad className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[17px] md:text-[20px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Console Game Development
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  Let your users have the opportunity to play games with high
                  performance hardware and at the same time drive sales through
                  an established customer base.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-2xl m-1 bg-linear-to-b from-[#1e001b] to-[#5f0055]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <FaDesktop className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[17px] md:text-[20px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  PC Game Development
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  Try to address the different groups of people, from the ones
                  who just play games for fun and those who are really into it
                  by providing flexible PC gaming options.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 rounded-2xl m-1 bg-linear-to-b from-[#1e001b] to-[#5f0055]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <FaAndroid className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[17px] md:text-[20px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Android Game Development
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  Design a unique gaming environment for Android users through
                  the use of our services in developing games on Android.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-2xl m-1 bg-linear-to-b from-[#1e001b] to-[#5f0055]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <TbAugmentedReality className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[17px] md:text-[20px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  AR Game Development
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  Utilize the augmented reality technology in order to make
                  gaming more immersive and blend the virtual with real worlds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerYourVision;
