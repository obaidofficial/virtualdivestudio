import React from "react";
import { Metadata } from "next";
import Banner from "./components/Banner/Banner";
import ContainedCTA from "@/components/Helper/ContainedCTA";
import HomePortfolio from "@/components/Home/HomePortfolio/HomePortfolio";
import CaseStudies from "@/components/Home/CaseStudies/CaseStudies";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import ARVRBlockchainServices from "./components/ARVRBlockchainServices/ARVRBlockchainServices";
import FAQs from "./components/Accordian/FAQs";
import TransformBlockchain from "./components/TransformBlockchain/TransformBlockchain";

export const metadata: Metadata = {
  title: "AR/VR Blockchain Integration | NFT Games & Virtual Economies",
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <ARVRBlockchainServices />
      <TransformBlockchain />
      <ContainedCTA />
      <HomePortfolio />
      <ContainedCTA />
      <CaseStudies />
      <Testimonials />
      <FAQs />
    </div>
  );
};

export default page;
