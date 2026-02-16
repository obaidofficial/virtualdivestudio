import React from "react";
import PlatformBanner from "./Banner/PlatformBanner";
import CoreEngines from "@/components/Home/CoreEngines/CoreEngines";
import Genres from "../industries/components/Genres/Genres";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import CaseStudies from "@/components/Home/CaseStudies/CaseStudies";
import HomePortfolio from "@/components/Home/HomePortfolio/HomePortfolio";
import ContainedCTA from "@/components/Helper/ContainedCTA";
import HowItWorks from "./HowItWorks/HowItWorks";
import DifferenceUnrealUnity from "./DifferenceUnrealUnity/DifferenceUnrealUnity";
import IndustriesWeWork from "./IndustriesWeWork/IndustriesWeWork";

const page = () => {
  return (
    <div className="overflow-hidden">
      <PlatformBanner />
      <CoreEngines />
      <Genres />
      <IndustriesWeWork />
      <DifferenceUnrealUnity />
      <ContainedCTA />
      <CaseStudies />
      <ContainedCTA />
      <HowItWorks />
      <HomePortfolio />
      <Testimonials />
    </div>
  );
};

export default page;
