import React from "react";
import { Metadata } from "next";
import Banner from "./components/Banner/Banner";
import BlockchainDevServices from "./components/BlockchainDevServices/BlockchainDevServices";
import ContainedCTA from "@/components/Helper/ContainedCTA";
import HomePortfolio from "@/components/Home/HomePortfolio/HomePortfolio";
import CaseStudies from "@/components/Home/CaseStudies/CaseStudies";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import FAQs from "./components/Accordian/FAQs";

export const metadata: Metadata = {
  title: "Blockchain Development",
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <BlockchainDevServices />
      <ContainedCTA />
      <HomePortfolio />
      <CaseStudies />
      <Testimonials />
      <FAQs />
    </div>
  );
};

export default page;
