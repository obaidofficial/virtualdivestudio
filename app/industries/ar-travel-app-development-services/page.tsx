import React from "react";
import { Metadata } from "next";
import Banner from "./components/Banner/Banner";
import ARTravelAppDevelopmentServices from "./components/ARTravelAppDevelopmentServices/ARTravelAppDevelopmentServices";
import ContainedCTA from "@/components/Helper/ContainedCTA";
import HomePortfolio from "@/components/Home/HomePortfolio/HomePortfolio";
import CaseStudies from "@/components/Home/CaseStudies/CaseStudies";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import TransformTheTravellingIndustry from "./components/TransformTheTravellingIndustry/TransformTheTravellingIndustry";
import FAQs from "./components/Accordian/FAQs";

export const metadata: Metadata = {
  title: "AR Travel Apps | Interactive Guides & Virtual Tourism",
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <ARTravelAppDevelopmentServices />
      <TransformTheTravellingIndustry />
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
