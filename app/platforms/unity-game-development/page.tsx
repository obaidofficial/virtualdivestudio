import React from "react";
import Banner from "./components/Banner/Banner";
import Genres from "@/app/industries/components/Genres/Genres";
import ContainedCTA from "@/components/Helper/ContainedCTA";
import HomePortfolio from "@/components/Home/HomePortfolio/HomePortfolio";
import CaseStudies from "@/components/Home/CaseStudies/CaseStudies";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import FAQs from "./components/FAQs/FAQs";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Unity3DGameDevelopment from "./components/Unity3DGameDevelopment/Unity3DGameDevelopment";
import Benefits from "./components/Benefits/Benefits";
import WhyChooseUnity from "./components/WhyChooseUnity/WhyChooseUnity";

const page = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <Unity3DGameDevelopment />
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
