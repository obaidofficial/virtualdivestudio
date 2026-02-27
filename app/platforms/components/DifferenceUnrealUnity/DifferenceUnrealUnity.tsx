import React from "react";
import { FaUnity } from "react-icons/fa";
import { SiUnrealengine } from "react-icons/si";

const DifferenceUnrealUnity = () => {
  return (
    <div className="bg-[#0c000a] pt-16 pb-16">
      <div className="pt-4 w-[94%] lg:w-[90%] mx-auto pb-4">
        <div className="grid lg:grid-cols-12 gap-2 lg:gap-2">
          <div className="lg:col-span-12 py-2.5 px-4">
            <h2 className="text-[28px] md:text-[32] text-center lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em]">
              Difference between Unreal Engine & Unity Game Development
            </h2>
          </div>
          <div className="lg:col-span-2">{/*  */}</div>

          <div className="lg:col-span-4 rounded-2xl m-2.5 border border-[#ef41de] bg-linear-to-b from-[#1e001b] to-[#5f0055]">
            <div className="px-6 pt-8 pb-6">
              <SiUnrealengine className="w-18 h-18 text-white" />
              <div>
                <h4 className="text-[24px] md:text-[28px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Unreal Engine Game Development
                </h4>
                <ul className="list-disc list-outside text-[16px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  <li>
                    Unreal Engine excels in photorealistic graphics and advanced
                    rendering capabilities.
                  </li>
                  <li>
                    Unreal Engine has a steeper learning curve due to its more
                    complex toolset and blueprint system.
                  </li>
                  <li>
                    Unreal Engine features a visual scripting system called
                    Blueprints.
                  </li>
                  <li>
                    Unreal Engine is restricted in terms of platform
                    utilization.
                  </li>
                  <li>
                    Unreal Engine has a thriving community still in the making.
                  </li>
                  <li>
                    Unreal Engine offers a royalty-based model, whereas the
                    engine is free to use.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 rounded-2xl m-2.5 border border-[#ef41de] bg-linear-to-b from-[#1e001b] to-[#5f0055]">
            <div className="px-6 pt-8 pb-6">
              <FaUnity className="w-18 h-18 text-white" />
              <div>
                <h4 className="text-[24px] md:text-[28px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                  Unity Game Development
                </h4>
                <ul className="list-disc list-outside text-[16px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                  <li>
                    Unity also offers impressive graphics, but Unreal Engine
                    often provides more out-of-the-box features.
                  </li>
                  <li>
                    Unity is known for its beginner-friendly interface and
                    documentation, making it easier for newcomers.
                  </li>
                  <li>
                    Unity relies primarily on traditional coding languages like
                    C# for scripting.
                  </li>
                  <li>Unity has access to a wider range of platforms.</li>
                  <li>
                    Unity has a larger and more active community of developers.
                  </li>
                  <li>Unity has a subscription-based pricing tier.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">{/*  */}</div>
        </div>
      </div>
    </div>
  );
};

export default DifferenceUnrealUnity;
