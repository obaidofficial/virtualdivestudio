import React from "react";
import { Metadata } from "next";
import Banner from "./components/Banner/Banner";
import ContainedCTA from "@/components/Helper/ContainedCTA";
import HomePortfolio from "@/components/Home/HomePortfolio/HomePortfolio";
import CaseStudies from "@/components/Home/CaseStudies/CaseStudies";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import FAQs from "./components/Accordian/FAQs";
import ChangeTheHealthIndustry from "./components/ChangeTheHealthIndustry/ChangeTheHealthIndustry";
import HealthAndWellnessServices from "./components/HealthAndWellnessServices/HealthAndWellnessServices";

export const metadata: Metadata = {
  title: "Health-Focused Game Development | Therapy & Fitness App",
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <HealthAndWellnessServices />
      <ChangeTheHealthIndustry />
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
