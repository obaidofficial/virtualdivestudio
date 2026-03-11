import React from "react";
import { Metadata } from "next";
import Banner from "./components/Banner/Banner";
import ContainedCTA from "@/components/Helper/ContainedCTA";
import HomePortfolio from "@/components/Home/HomePortfolio/HomePortfolio";
import CaseStudies from "@/components/Home/CaseStudies/CaseStudies";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import FAQs from "./components/Accordian/FAQs";
import EducationalGameDevelopmentServices from "./components/EducationalGameDevelopmentServices/EducationalGameDevelopmentServices";
import TransformEducationIndustry from "./components/TransformEducationIndustry/TransformEducationIndustry";

export const metadata: Metadata = {
  title: "EdTech Game Development | STEM & Language Learning Games",
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <EducationalGameDevelopmentServices />
      <TransformEducationIndustry />
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
