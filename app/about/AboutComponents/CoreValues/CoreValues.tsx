import React from "react";
import Image from "next/image";

const CoreValues = () => {
  return (
    <div className="bg-[#320127] pt-16 pb-16">
      <div className="pt-4 w-[94%] lg:w-[90%] mx-auto pb-4">
        <h2 className="text-[28px] md:text-[32] text-center lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em]">
          Our Core Values
        </h2>
        <p className="text-[15px] text-center md:text-[18px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] p-4">
          At Virtual Dive Studios, we recruit people who have a good moral
          character and those who are in full compliance with our core values to
          enhance our output.
        </p>
        <div className="grid md:grid-cols-12 gap-4">
          <div className="md:col-span-4 flex flex-col justify-center items-center">
            <div className="px-2 pt-6 pb-6 text-center mx-auto">
              <h4 className="text-[22px] md:text-[28px] text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                Creativity
              </h4>
              <p className="text-[15px] md:text-[16px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                We have a group of people who are always ready to help and
                effect solutions.
              </p>
            </div>

            <div className="px-2 pt-6 pb-6 text-center mx-auto">
              <h4 className="text-[22px] md:text-[28px] text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                Innovation
              </h4>
              <p className="text-[15px] md:text-[16px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                Our team is always looking for new ways to improve the
                technology, and game mechanics and discover new trends.
              </p>
            </div>

            <div className="px-2 pt-6 pb-6 text-center mx-auto">
              <h4 className="text-[22px] md:text-[28px] text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                Transparency
              </h4>
              <p className="text-[15px] md:text-[16px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                We are calling for transparency on all game development stages,
                starting from design up to release.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col justify-center items-center">
            <div className="px-2 pt-6 pb-6 text-center mx-auto">
              <Image
                src="/images/about/CoreValues.webp"
                alt="Development Process"
                width={500}
                height={500}
              />
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col justify-center items-center">
            <div className="px-2 pt-6 pb-6 text-center mx-auto">
              <h4 className="text-[22px] md:text-[28px] text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                People First
              </h4>
              <p className="text-[15px] md:text-[16px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                While the game is being produced, we constantly emphasize users'
                engagement as our top priority.
              </p>
            </div>

            <div className="px-2 pt-6 pb-6 text-center mx-auto">
              <h4 className="text-[22px] md:text-[28px] text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                Quality
              </h4>
              <p className="text-[15px] md:text-[16px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                We intend that all our development projects will be of top
                quality and we will give the best results.
              </p>
            </div>

            <div className="px-2 pt-6 pb-6 text-center mx-auto">
              <h4 className="text-[22px] md:text-[28px] text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
                Diversity
              </h4>
              <p className="text-[15px] md:text-[16px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px] px-4">
                We are all for diversity of any kind and create a friendly
                atmosphere where everyone is welcomed by our team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
