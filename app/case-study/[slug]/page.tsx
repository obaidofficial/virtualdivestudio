"use client";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import { CASES } from "../Cases/constants";
import { useParams, useRouter } from "next/navigation";
import FillPrimaryButton from "@/components/Helper/FillPrimaryButton";
import ContainedCTA from "@/components/Helper/ContainedCTA";

const page: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useRouter();
  const caseData = CASES.find((p) => p.url === slug);

  useEffect(() => {
    // Scroll to top when slug changes
    window.scrollTo(0, 0);
  }, [caseData, navigate]);

  if (!caseData) {
    return (
      <div className="h-screen flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-4xl font-bold text-[#161616] dark:text-[#fcfcfc] mb-4">
            Case Study Not Found
          </h1>
          <p className="text-[#161616] dark:text-[#fcfcfc] mb-8">
            Redirecting you back to the case study...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="relative w-full h-[380px] lg:h-[380px] bg-black bg-[url('/images/inner-pages-banner-overlay-image.webp')] bg-center bg-cover bg-no-repeat">
        <div className="w-full h-full">
          <div className="relative z-4 flex items-center justify-center flex-col w-full h-full">
            <div className="md:w-[88%] w-[92%]">
              <div className="flex justify-center flex-col w-full h-full items-center gap-3">
                <p className="flex items-center gap-3 font-light">
                  <Link href="/">
                    <span className="text-[#ef41de]">Home </span>
                  </Link>{" "}
                  <ArrowRightIcon className="w-3 h-3 text-white" />{" "}
                  <Link href="/case-study">
                    <span className="text-[#ef41de]">Case Study </span>
                  </Link>{" "}
                  <ArrowRightIcon className="w-3 h-3 text-white" />{" "}
                  <span className="text-white">{caseData.title} </span>
                </p>
                <h1 className="text-[32px] text-center lg:text-[50px] leading-[1.1em] text-white max-w-280 mx-auto">
                  {caseData.title}
                </h1>
                <p className="text-white text-[15px] lg:text-[18px] font-light tracking-[0.17px] text-center w-full md:w-[800px]">
                  {caseData.description}
                </p>
                <Link href="/contact">
                  <FillPrimaryButton>Contact Us</FillPrimaryButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Content and Image */}
      <div className="bg-[#170012] pt-6 pb-16">
        <div className="pt-6 w-[94%] lg:w-[90%] mx-auto pb-6">
          <div className="max-w-300 mx-auto">
            <Image
              src={caseData.image}
              alt={caseData.title}
              width={1200}
              height={1200}
              className="rounded-lg mx-auto mb-4 md:mb-10"
            />
          </div>
          <div className="max-w-280 mx-auto">{caseData.content}</div>
        </div>
      </div>
      <ContainedCTA />
    </div>
  );
};

export default page;
