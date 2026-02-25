import PrimaryBorderButton from "@/components/Helper/PrimaryBorderButton";
import React from "react";
import Link from "next/link";
import TeamCarousel from "./TeamComponents/TeamCarousel";

const ExpertTeam = () => {
  return (
    <div className="bg-[#170012] pt-16 pb-16">
      <div className="pt-2 w-[94%] lg:w-[90%] mx-auto pb-2">
        <div className="grid lg:grid-cols-12 gap-1 lg:gap-2">
          <div className="lg:col-span-3 py-2.5 px-4">
            <h2 className="text-[28px] md:text-[32] lg:text-[42px] text-center md:text-left text-white tracking-[0.5px] leading-[1.1em]">
              Our expert Team
            </h2>
          </div>

          <div className="lg:col-span-7 py-2.5 px-4 flex flex-col justify-center">
            <hr className="text-[#ef41de]" />
          </div>

          <div className="lg:col-span-2 py-2.5 px-4 flex flex-col items-center md:items-end">
            <Link href="/case-study">
              <PrimaryBorderButton>View All Cases</PrimaryBorderButton>
            </Link>
          </div>
        </div>

        <TeamCarousel />
      </div>
    </div>
  );
};

export default ExpertTeam;
