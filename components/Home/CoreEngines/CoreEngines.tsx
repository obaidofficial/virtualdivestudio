import React from "react";
import Image from "next/image";
import FillPrimaryButton from "@/components/Helper/FillPrimaryButton";
import Link from "next/link";

const CoreEngines = () => {
  return (
    <div className="bg-[#320127] pt-16 pb-16">
      <div className="pt-4 w-[94%] lg:w-[90%] mx-auto pb-4">
        <div className="grid lg:grid-cols-12 gap-2 lg:gap-4">
          <div className="lg:col-span-12 py-2.5 px-4">
            <h2 className="text-[28px] md:text-[36px] text-center lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em]">
              Core Engines We Use For Game Development
            </h2>
          </div>
          <div className="lg:col-span-6 py-1 px-3 flex flex-col justify-center items-center">
            <Image
              src="/images/coreEngines/Unity-Engine.webp"
              alt="Unity Engine"
              width={500}
              height={60}
              className="rounded-lg h-[55vh] object-cover"
            />
          </div>

          <div className="lg:col-span-6 py-2 px-4 flex flex-col justify-center">
            <h3 className="text-[26px] lg:text-[36px] leading-[1.1em] text-white">
              Unity Game Development
            </h3>
            <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
              Unity is the main part of our game development process and is a
              powerful engine famous for its flexibility and creativity. Unity
              is one of the best options for game creation, it has an
              unparalleled capability that outclasses many other creative
              engines in this field.
            </p>
            <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
              Unity is the platform that we use to create new and innovative
              gaming experiences that are interesting for people all over the
              world. Its easy-to-use interface and the variety of its functions
              make our creative ideas come to life smoothly and quickly. Unity
              gives us the means and the freedom to explore new territories,
              create extraordinary visuals, and make our games playable on all
              platforms. The choice of Unity as our main engine is the guarantee
              that we will get top-quality results for our clients and create a
              new standard of excellence in game development.
            </p>
            <div className="mt-4">
              <Link href="/contact">
                <FillPrimaryButton>More About Unity Engine</FillPrimaryButton>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 py-2 px-4 flex flex-col justify-center">
            <h3 className="text-[26px] lg:text-[36px] leading-[1.1em] text-white">
              Unreal Engine Game Development
            </h3>
            <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
              Unreal Engine is the base of our game development set and it has
              unprecedented abilities that make us go beyond what we can in the
              gaming industry. Being the only creative engine, Unreal Engine has
              numerous features and tools that enable developers to design
              magnificent worlds with ease.
            </p>
            <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
              Unreal Engine because of its high-level graphics rendering is the
              quickest way to make a game. It also has an easy blueprint system
              for rapid prototyping which makes the development process very
              simple and fast. It makes us realize our most daring ideas.
              Besides, the fact that Unreal Engine is compatible with different
              platforms makes our games more accessible to a larger group of
              people who can play them on PC, console, or mobile devices.
            </p>
            <div className="mt-4">
              <Link href="/contact">
                <FillPrimaryButton>More About Unreal Engine</FillPrimaryButton>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 py-1 px-3 flex flex-col justify-center items-center">
            <Image
              src="/images/coreEngines/Unreal-Engine.webp"
              alt="Unreal Engine"
              width={500}
              height={60}
              className="rounded-lg h-[55vh] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreEngines;
