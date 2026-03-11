import React from "react";
import { BiDollar } from "react-icons/bi";
import { FaChartColumn } from "react-icons/fa6";
import { GiTargetArrows } from "react-icons/gi";
import { PiChats } from "react-icons/pi";

const Advantages = () => {
  return (
    <div className="bg-[#170012] pt-16 pb-16">
      <div className="pt-4 w-[94%] lg:w-[90%] mx-auto pb-4">
        <div className="grid lg:grid-cols-12 gap-2 lg:gap-2">
          <div className="lg:col-span-12 py-2.5 px-4">
            <h2 className="text-[28px] md:text-[32] text-center lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em]">
              Advantages of selecting Virtual Dive Studios for{" "}
              <span className="text-[#ef41de]">UEFN</span>
            </h2>
          </div>
          <div className="lg:col-span-3 rounded-2xl m-1 bg-linear-to-b from-[#1e001b] to-[#5f0055]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <FaChartColumn className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[17px] md:text-[20px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Scalable Solutions
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  The game elements are designed to be scaled up and fit the
                  users’ needs for a smooth gaming experience of the game.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-2xl m-1 bg-linear-to-b from-[#1e001b] to-[#5f0055]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <PiChats className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[17px] md:text-[20px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Transparent Communication
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  Our aim of open communication is to keep the transparency at
                  all stages of development. This promotes the participation of
                  all partners and in turn, creates a very active project team.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-2xl m-1 bg-linear-to-b from-[#1e001b] to-[#5f0055]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <BiDollar className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[17px] md:text-[20px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Monetization Potential
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  UEFN creations can be part of the revenue-sharing programs of
                  Fortnite, which means that creators might be able to earn from
                  player engagement.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-2xl m-1 bg-linear-to-b from-[#1e001b] to-[#5f0055]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <GiTargetArrows className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[17px] md:text-[20px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Cost Effective Solutions
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  Through the exploitation of already existing Fortnite
                  infrastructure, UEFN can provide competitive prices for
                  development solutions of custom content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
