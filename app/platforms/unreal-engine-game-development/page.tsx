import React from "react";
import Banner from "./components/Banner/Banner";
import UnrealEngineGameDevelopment from "./components/UnrealEngineGameDevelopment/UnrealEngineGameDevelopment";
import Genres from "@/app/industries/components/Genres/Genres";
import WhyChooseUnity from "../unity-game-development/components/WhyChooseUnity/WhyChooseUnity";
import ContainedCTA from "@/components/Helper/ContainedCTA";
import Benefits from "../unity-game-development/components/Benefits/Benefits";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import HomePortfolio from "@/components/Home/HomePortfolio/HomePortfolio";
import CaseStudies from "@/components/Home/CaseStudies/CaseStudies";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import FAQs from "./components/FAQs/FAQs";

const page = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <UnrealEngineGameDevelopment />
      <Genres />
      <WhyChooseUnity />
      <ContainedCTA />
      <Benefits />
      <HowItWorks />
      <HomePortfolio />
      <ContainedCTA />
      <CaseStudies />
      <Testimonials />
      <FAQs />
    </div>
  );
};

export default page;
