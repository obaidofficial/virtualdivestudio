import React from "react";
import Link from "next/link";

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
          <div className="lg:col-span-4 py-8 px-8 flex flex-col justify-end border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3] group h-[260px]">
            <Link href="#" className="cursor-pointer">
              <h3 className="text-[22px] md:text-[24] lg:text-[28px] text-white tracking-[0.5px] leading-[1.1em]">
                Game Development
              </h3>
            </Link>
            <p className="text-white text-[15px] lg:text-[18px] font-light tracking-[0.17px] mt-4 group-hover:opacity-100 transition-all duration-300 delay-50 opacity-0 h-0 group-hover:h-full -z-1 group-hover:z-3">
              Our Game development experts can excel in your idea from concept
              to launch, ensuring the highest quality standards. Collaborate
              with us for development needs, and our experts will ensure your
              game stands out in the market, polished and perfected for gamers.
            </p>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col justify-end border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3] group h-[260px]">
            <h3 className="text-[22px] md:text-[24] lg:text-[28px] text-white tracking-[0.5px] leading-[1.1em]">
              Metaverse Development Services
            </h3>
            <p className="text-white text-[15px] lg:text-[18px] font-light tracking-[0.17px] mt-4 group-hover:opacity-100 transition-all duration-300 delay-50 opacity-0 h-0 group-hover:h-full -z-1 group-hover:z-3">
              Metaverse is expanding in Virtual meetings, Education, Events, and
              Ecommerce. You can access different parts of popular metaverse
              domains through our metaverse development services.
            </p>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col justify-end border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3] group h-[260px]">
            <h3 className="text-[22px] md:text-[24] lg:text-[28px] text-white tracking-[0.5px] leading-[1.1em]">
              AR/VR Development Services
            </h3>
            <p className="text-white text-[15px] lg:text-[18px] font-light tracking-[0.17px] mt-4 group-hover:opacity-100 transition-all duration-300 delay-50 opacity-0 h-0 group-hover:h-full -z-1 group-hover:z-3">
              Our team of experts designs close-to real-life AR/VR games to make
              entertainment to the maximum. With us, you will unlock a new level
              of innovation in the AR/VR domain.
            </p>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col justify-end border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3] group h-[260px]">
            <h3 className="text-[22px] md:text-[24] lg:text-[28px] text-white tracking-[0.5px] leading-[1.1em]">
              Design and Art Development
            </h3>
            <p className="text-white text-[15px] lg:text-[18px] font-light tracking-[0.17px] mt-4 group-hover:opacity-100 transition-all duration-300 delay-50 opacity-0 h-0 group-hover:h-full -z-1 group-hover:z-3">
              Gamification itself is not enough if it does not have the magic of
              the 3D artwork and the captivating visuals. Our services include
              everything from the creation of concept art and detailed character
              designs to the making of immersive environments and intuitive
              UI/UX experiences.
            </p>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col justify-end border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3] group h-[260px]">
            <h3 className="text-[22px] md:text-[24] lg:text-[28px] text-white tracking-[0.5px] leading-[1.1em]">
              Real Estate Services
            </h3>
            <p className="text-white text-[15px] lg:text-[18px] font-light tracking-[0.17px] mt-4 group-hover:opacity-100 transition-all duration-300 delay-50 opacity-0 h-0 group-hover:h-full -z-1 group-hover:z-3">
              Harness the full potential of real estate solutions with us for
              immersive digital experiences that are also cost-effective. Our
              offerings include Digital Twins, AR/VR experiences, Virtual
              apartment tours, Virtual renovation, rendering, and virtual
              staging solutions.
            </p>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col justify-end border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3] group h-[260px]">
            <h3 className="text-[22px] md:text-[24] lg:text-[28px] text-white tracking-[0.5px] leading-[1.1em]">
              UEFN Services
            </h3>
            <p className="text-white text-[15px] lg:text-[18px] font-light tracking-[0.17px] mt-4 group-hover:opacity-100 transition-all duration-300 delay-50 opacity-0 h-0 group-hover:h-full -z-1 group-hover:z-3">
              Elevate your Fortnite experience with our expert solutions. With
              our expertise in using Unreal Editor, we craft stunning and
              immersive levels for Fortnite, bringing your vision to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreServices;
