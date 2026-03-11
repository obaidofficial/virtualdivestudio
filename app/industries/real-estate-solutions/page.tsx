import React from "react";
import { Metadata } from "next";
import Banner from "./components/Banner/Banner";
import ContainedCTA from "@/components/Helper/ContainedCTA";
import HomePortfolio from "@/components/Home/HomePortfolio/HomePortfolio";
import CaseStudies from "@/components/Home/CaseStudies/CaseStudies";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import FAQs from "./components/Accordian/FAQs";
import TransformRealEstateIndustry from "./components/TransformRealEstateIndustry/TransformRealEstateIndustry";
import CuttingEdgeRealEstateSolutions from "./components/CuttingEdgeRealEstateSolutions/CuttingEdgeRealEstateSolutions";

export const metadata: Metadata = {
  title: "Real Estate Solutions",
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <CuttingEdgeRealEstateSolutions />
      <TransformRealEstateIndustry />
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
