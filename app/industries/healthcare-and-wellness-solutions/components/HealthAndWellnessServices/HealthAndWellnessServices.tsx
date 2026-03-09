import React from "react";
import Link from "next/link";
import { BiBrain, BiHeart } from "react-icons/bi";
import { SiBlockchaindotcom } from "react-icons/si";
import { TbHandFinger } from "react-icons/tb";
import { FaComments, FaUserTie } from "react-icons/fa6";

const HealthAndWellnessServices = () => {
  return (
    <div className="bg-[#0c000a] pt-16 pb-16">
      <div className="pt-6 w-[94%] lg:w-[90%] mx-auto pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-4">
          <div className="lg:col-span-12 py-2.5 px-4">
            <h2 className="text-[28px] md:text-[32] text-center lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em]">
              Our Health and Wellness Services
            </h2>
            <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4 text-center">
              Start your journey to a healthier, more vibrant life with our
              innovative health and wellness services, designed to empower your
              well-being.
            </p>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <BiHeart className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Health Apps
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  Today's health apps enable you to monitor many different
                  aspects of your health from food, sleep and exercise habits.
                  They are being more and more popular with the high probability
                  of a good income which is a reason enough to invest in them.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <FaUserTie className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Wellness Coaching App Development
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  Develop new online platforms that will be the source of
                  wellness coaching and counseling services, thus providing
                  personalized guidance and support for mental health,
                  nutrition, fitness as well as overall well-being of your
                  customers.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <SiBlockchaindotcom className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Blockchain Technology in Health Apps
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  The use of Blockchain technology in your health apps is the
                  guarantee that electronic health records are stored and
                  managed securely, thus patients can access and share their
                  medical information safely across healthcare providers.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <TbHandFinger className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Remote Monitoring Apps
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  Wearable devices and remote monitoring technologies are now a
                  common thing among the people with health issues. They monitor
                  the vital signs, activity levels, and health metrics hence
                  enabling individuals to keep track of their health and fitness
                  in real time.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <BiBrain className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Meditation Apps
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  Let your clients have a seat and relax with our top-class
                  meditation apps. Having such characteristics as the nature
                  sounds, guided meditation, and others they can provide your
                  customers with a chance to restore their mental health.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 py-8 px-8 flex flex-col border border-[#1e001b] hover:border-[#FF00E5] rounded-xl bg-linear-to-b from-[#1e001b] to-[#b500a3]">
            <div className="px-2 pt-8 pb-6 text-center mx-auto">
              <FaComments className="w-15 h-15 text-white mx-auto" />
              <div>
                <h4 className="text-[18px] md:text-[22px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Virtual Consultation
                </h4>
                <p className="text-[15px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  AR/VR in health apps can be a great tool for customers since
                  they will be able to have virtual consultations with medical
                  practitioners and get health tips.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthAndWellnessServices;
