import FillPrimaryButton from "@/components/Helper/FillPrimaryButton";
import Link from "next/link";
import React from "react";

const HiringModels = () => {
  return (
    <div className="bg-[#170012] pt-16 pb-16">
      <div className="pt-4 w-[94%] lg:w-[90%] mx-auto pb-4">
        <div className="grid lg:grid-cols-12 gap-2 md:gap-4">
          <div className="lg:col-span-12 py-2.5 px-4">
            <div>
              <h2 className="text-[28px] md:text-[32] lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em] text-center">
                Flexible Hiring Models for Your Projects
              </h2>
              <p className="text-white text-[15px] lg:text-[18px] font-light tracking-[0.17px] mt-4 transition-all duration-300 delay-50 text-center max-w-260 mx-auto">
                Virtual Dive Studios will provide you with expert game
                development and design services within your required timeframe.
                The best part about us? We are extremely affordable!
              </p>
            </div>
          </div>
          <div className="lg:col-span-4 px-6 pt-8 pb-6 rounded-2xl border border-[#ef41de] bg-linear-to-b from-[#1e001b] to-[#5f0055] flex flex-col justify-between">
            <div>
              <h4 className="text-[12px] uppercase font-bold tracking-[0.17px] text-[#ef41de] pb-2">
                Tier 1
              </h4>
              <h4 className="text-[24px] md:text-[28px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                $2500 - $3000 (Monthly)
              </h4>
              <ul className="list-disc list-outside text-[16px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                <li>4−6 years of experience.</li>
                <li>
                  Working experience in 2D, Hypercasual, Simulation, and Racing
                  Games.
                </li>
                <li>Working experience on 15+ game development projects.</li>
                <li>Completed over 1500 to 2000+ development hours.</li>
                <li>Handling general-level and mid-scale complex projects.</li>
              </ul>
            </div>
            <div className="mt-4">
              <Link href="/contact">
                <FillPrimaryButton>Choose Plan</FillPrimaryButton>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 rounded-2xl border border-[#ef41de] bg-linear-to-b from-[#1e001b] to-[#5f0055] px-6 pt-8 pb-6 flex flex-col justify-between">
            <div>
              <h4 className="text-[12px] uppercase font-bold tracking-[0.17px] text-[#ef41de] pb-2">
                Tier 2
              </h4>
              <h4 className="text-[24px] md:text-[28px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                $3000 - $3500 (Monthly)
              </h4>
              <ul className="list-disc list-outside text-[16px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                <li>6 - 10 years of experience.</li>
                <li>
                  Working experience in Strategic, Concept, Action, and
                  Role-Playing Games.
                </li>
                <li>
                  Working experience on 20 to 30+ game development projects.
                </li>
                <li>Completed over 2000 to 3000+ development hours.</li>
                <li>Ideal for advanced and complex projects.</li>
              </ul>
            </div>
            <div className="mt-4">
              <Link href="/contact">
                <FillPrimaryButton>Choose Plan</FillPrimaryButton>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 rounded-2xl border border-[#ef41de] bg-linear-to-b from-[#1e001b] to-[#5f0055] px-6 pt-8 pb-6 flex flex-col justify-between">
            <div>
              <h4 className="text-[12px] uppercase font-bold tracking-[0.17px] text-[#ef41de] pb-2">
                Tier 3
              </h4>
              <h4 className="text-[24px] md:text-[28px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                Dedicated Development Team
              </h4>
              <ul className="list-disc list-outside text-[16px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                <li>Build Dedicated Unity Development Team.</li>
                <li>Working Full-time 8 hours a day and 160 hours/month.</li>
                <li>Get dedicated project managers on demand.</li>
                <li>Scale up or scale down teams as per your requirements.</li>
                <li>
                  Build a team of up to 10 developers (Senior, Mid-Senior)
                  within $25,000 USD.
                </li>
                <li>The dedicated team of mixed-tier developers.</li>
              </ul>
            </div>
            <div className="mt-4">
              <Link href="/contact">
                <FillPrimaryButton>Choose Plan</FillPrimaryButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringModels;
