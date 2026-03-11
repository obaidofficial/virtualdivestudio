import React from "react";
import Image from "next/image";
import FillPrimaryButton from "@/components/Helper/FillPrimaryButton";
import Link from "next/link";

const ContentImage = () => {
  return (
    <div className="bg-[#320127] pt-16 pb-16">
      <div className="pt-4 w-[94%] lg:w-[90%] mx-auto pb-4">
        <div className="grid lg:grid-cols-12 gap-2 lg:gap-4">
          <div className="lg:col-span-6 py-1 px-3 flex flex-col justify-center items-center">
            <Image
              src="/images/Services/UEFN/UEFN0.webp"
              alt="Unity Engine"
              width={500}
              height={60}
              className="rounded-lg h-[60vh] object-cover object-top"
            />
          </div>

          <div className="lg:col-span-6 py-2 px-4 flex flex-col justify-center">
            <h3 className="text-[26px] lg:text-[36px] leading-[1.1em] text-white">
              What are the requirements for UEFN Development?
            </h3>
            <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
              Fortnite has generated a revenue of $5 billion in the last few
              years, consequently, UEFN should be your number-one investment at
              the moment! UEFN Development needs a team of first-rate engineers
              who are deeply in Fornite and have enough technical knowledge to
              add new features to the Fornite kingdom. We at Virtual Dive, the
              leading game development company, get a team instantly!
            </p>
            <div className="mt-4">
              <Link href="/contact">
                <FillPrimaryButton>Contact Us</FillPrimaryButton>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 py-2 px-4 flex flex-col justify-center">
            <h3 className="text-[26px] lg:text-[36px] leading-[1.1em] text-white">
              How to select a UEFN Development Team?
            </h3>
            <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
              Picking a team for the UEFN development might be difficult because
              of the market that is less crowded and there are fewer experts
              around. Nevertheless, we have a special team that has the
              technical knowledge and vast experience with Unreal engine
              development who can assure you an error-free UEFN elements. Not
              only do we have the technical skills, but also we communicate with
              our customers on a regular basis to keep our development goals in
              line with their requirements.
            </p>
            <div className="mt-4">
              <Link href="/contact">
                <FillPrimaryButton>Contact Us</FillPrimaryButton>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 py-1 px-3 flex flex-col justify-center items-center">
            <Image
              src="/images/Services/UEFN/UEFN1.webp"
              alt="Unreal Engine"
              width={500}
              height={60}
              className="rounded-lg h-[60vh] object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentImage;
