import React from "react";
import PlatformBanner from "./components/Banner/PlatformBanner";
import CoreEngines from "@/components/Home/CoreEngines/CoreEngines";
import Genres from "../industries/components/Genres/Genres";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import CaseStudies from "@/components/Home/CaseStudies/CaseStudies";
import HomePortfolio from "@/components/Home/HomePortfolio/HomePortfolio";
import ContainedCTA from "@/components/Helper/ContainedCTA";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import DifferenceUnrealUnity from "./components/DifferenceUnrealUnity/DifferenceUnrealUnity";
import IndustriesWeWork from "./components/IndustriesWeWork/IndustriesWeWork";
import PowerYourVision from "./components/PowerYourVision/PowerYourVision";
import Benefits from "./components/Benefits/Benefits";

const page = () => {
  return (
    <div className="overflow-hidden">
      <PlatformBanner />
      <CoreEngines />
      <PowerYourVision />
      <Genres />
      <IndustriesWeWork />
      <DifferenceUnrealUnity />
      <ContainedCTA />
      <Benefits />
      <CaseStudies />
      <ContainedCTA />
      <HowItWorks />
      <HomePortfolio />
      <Testimonials />
    </div>
  );
};

export default page;
