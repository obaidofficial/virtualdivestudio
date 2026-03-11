import React from "react";
import { BiBitcoin } from "react-icons/bi";
import { SiBlockchaindotcom } from "react-icons/si";
import { BsCashStack, BsCodeSlash } from "react-icons/bs";
import { FaGamepad } from "react-icons/fa6";
import { TbSocial } from "react-icons/tb";

const ARVRBlockchainServices = () => {
  return (
    <div className="bg-[#0c000a] pt-16 pb-16">
      <div className="pt-6 w-[94%] lg:w-[90%] mx-auto pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-4">
          <div className="lg:col-span-12 py-2.5 px-4">
            <h2 className="text-[28px] md:text-[32] text-center lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em]">
              Explore Our AR/VR Blockchain App Development Services
            </h2>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <BsCodeSlash className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Custom Blockchain Development
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  We are ready to tailor the solutions for you that will fit
                  your business needs, and at the same time, we will make it
                  more efficient, secure, and transparent.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <SiBlockchaindotcom className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Blockchain Integration
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  The flawless transfer of information and assets among
                  platforms with our integration services is what we offer.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <FaGamepad className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  P2E Blockchain Games
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  The flawless transfer of information and assets among
                  platforms with our integration services is what we offer.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <TbSocial className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Decentralized Apps
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  Boost your business with platforms that are trustless,
                  transparent, and secure which will lead to innovation and
                  efficiency.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <BsCashStack className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Decentralized Finance Solution
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  Make traditional financial services to be accessible for all
                  with smart contracts and decentralized networks.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <BiBitcoin className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  NFT Marketplace Development
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  Start your own marketplace using our services for buying,
                  selling, and exchanging non-fungible tokens that represent
                  digital assets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ARVRBlockchainServices;
