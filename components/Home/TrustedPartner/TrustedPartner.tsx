import React from "react";
import Image from "next/image";

const TrustedPartner = () => {
  return (
    <div className="bg-[#170012] pt-16 pb-16">
      <div className="pt-6 w-[94%] lg:w-[90%] mx-auto pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-2">
          <div className="lg:col-span-6 py-2.5 px-4 flex flex-col justify-center">
            <h2 className="text-[28px] md:text-[32px] lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em]">
              Your Trusted Partner For Game Development:
            </h2>
            <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
              Virtual Dive Studios – An immersive experiences company that
              offers development services across diverse platforms.
            </p>
            <ul className="text-white font-light list-disc list-inside text-[15px] md:text-[18px] mt-2 leading-[1.6em]">
              <li>100+ Mobile Games.</li>
              <li>15+ PC and Console Games.</li>
              <li>20+ VR Games and Real Estate Experiences.</li>
              <li>15+ AR Health and Real Estate Experiences.</li>
              <li>3+ Cloud Games.</li>
              <li>100+ Pre-vetted Game Developers</li>
            </ul>
            <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
              Our dedication to innovation, exceptional quality, and customer
              satisfaction has established us as a trusted and reliable partner
              in the industry. We constantly strive to push the boundaries of
              technology and creativity, ensuring every project surpasses our
              clients expectations.
            </p>
          </div>

          <div className="lg:col-span-6 py-2.5 px-4 flex flex-col items-center">
            <Image
              src="/images/trustedPartner/trusted-partner.webp"
              alt="Trusted Partner"
              width={500}
              height={60}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedPartner;
