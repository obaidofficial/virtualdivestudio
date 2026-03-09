import React from "react";
import Link from "next/link";
import { BiData, BiDumbbell, BiHeart, BiTrophy } from "react-icons/bi";
import { PiVirtualReality } from "react-icons/pi";
import { GrTechnology } from "react-icons/gr";

const SportsLifestyleServices = () => {
  return (
    <div className="bg-[#0c000a] pt-16 pb-16">
      <div className="pt-6 w-[94%] lg:w-[90%] mx-auto pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-4">
          <div className="lg:col-span-12 py-2.5 px-4">
            <h2 className="text-[28px] md:text-[32] text-center lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em]">
              Our Sports and Lifestyle Services
            </h2>
            <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4 text-center">
              We embrace different areas of this industry.
            </p>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <Link href="#" className="cursor-pointer">
              <div className="px-2 pt-8 pb-6 text-center mx-auto">
                <PiVirtualReality className="w-15 h-15 text-white mx-auto" />
                <div>
                  <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                    AR/VR as the Best Way to Involve Athletes
                  </h4>
                  <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                    We design individual AR training simulations for athletes,
                    which exceed the limits and increase their performance to a
                    maximum. We can make VR tours of venues and facilities for
                    you so that athletes and their fans can virtually scout the
                    locations.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <Link href="#" className="cursor-pointer">
              <div className="px-2 pt-8 pb-6 text-center mx-auto">
                <BiDumbbell className="w-15 h-15 text-white mx-auto" />
                <div>
                  <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                    Apps for Personalized Health and Fitness
                  </h4>
                  <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                    We make health and fitness apps that give a personalized
                    workout plan, monitor the progress, and even suggest meals
                    with nutrition apps for athletes and fitness fans. Besides,
                    we also provide users with mindfulness and meditation apps
                    that can improve their general health.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <Link href="#" className="cursor-pointer">
              <div className="px-2 pt-8 pb-6 text-center mx-auto">
                <GrTechnology className="w-15 h-15 text-white mx-auto" />
                <div>
                  <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                    Wearable Tech Integration
                  </h4>
                  <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                    Get wearable technology such as fitness trackers and
                    smartwatches linked to your platform using our services.
                    Real-time sensor data is the best way to give your sports
                    clients valuable performance insights and help them track
                    and improve their lifestyle.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <Link href="#" className="cursor-pointer">
              <div className="px-2 pt-8 pb-6 text-center mx-auto">
                <BiData className="w-15 h-15 text-white mx-auto" />
                <div>
                  <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                    Data-Driven Sports Programs
                  </h4>
                  <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                    We develop custom software that allows coaches and athletes
                    to digitally analyze performance data, get real-time
                    insights during competitions, and even use predictive
                    analytics to prevent and manage injuries.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <Link href="#" className="cursor-pointer">
              <div className="px-2 pt-8 pb-6 text-center mx-auto">
                <BiTrophy className="w-15 h-15 text-white mx-auto" />
                <div>
                  <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                    E-Sports Services
                  </h4>
                  <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                    Come and join us to make a league of professional eSports
                    tournaments. We design fun platforms for fitness,
                    rehabilitation, and virtual training programs that make the
                    boundary between play and progress very thin.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <Link href="#" className="cursor-pointer">
              <div className="px-2 pt-8 pb-6 text-center mx-auto">
                <BiHeart className="w-15 h-15 text-white mx-auto" />
                <div>
                  <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                    Custom Wellness Services
                  </h4>
                  <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                    Create on-demand fitness classes and individualized training
                    sessions on your platform with our assistance. Moreover, you
                    can also team up with healthy meal delivery services to
                    provide convenient and nutritional food.
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

export default SportsLifestyleServices;
