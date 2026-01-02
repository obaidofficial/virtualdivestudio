import React from "react";
import FooterCTA from "./FooterCTA";
import ColOne from "./footerColumns/ColOne";
import ColTwo from "./footerColumns/ColTwo";
import ColThree from "./footerColumns/ColThree";
import ColFour from "./footerColumns/ColFour";
import ColFive from "./footerColumns/ColFive";
import SocialIcons from "@/constants/SocialIcons";
import FooterLocations from "./FooterLocations";

const FooterBottom = () => {
  return (
    <div className="bg-[#1d0117]">
      <div className="pt-6 w-[94%] lg:w-[90%] mx-auto pb-3">
        <FooterCTA />
        <hr className="mt-3 mb-6 text-white/20" />

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-3 lg:gap-10">
          <ColOne />
          <ColTwo />
          <ColThree />
          <ColFour />
          <ColFive />
        </div>

        <hr className="text-white/20 mt-4 mb-5" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 lg:gap-3">
          <div className="lg:col-span-3 p-1">
            <div className="lg:justify-end justify-center items-center gap-5">
              <FooterLocations />
            </div>
          </div>
          <div className="lg:col-span-3 p-1">
            <div className="lg:justify-end justify-center items-center gap-5">
              <SocialIcons />
            </div>
          </div>
        </div>

        <hr className="text-white/20 mt-5 mb-0.5" />

        <div className="text-center pt-2">
          <p className="text-white text-[15px] font-light">
            © 2026 Virtual Dive Studio. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
