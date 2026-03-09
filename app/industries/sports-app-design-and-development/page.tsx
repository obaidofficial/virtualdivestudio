import React from "react";
import { Metadata } from "next";
import Banner from "./components/Banner/Banner";
import ContainedCTA from "@/components/Helper/ContainedCTA";
import HomePortfolio from "@/components/Home/HomePortfolio/HomePortfolio";
import CaseStudies from "@/components/Home/CaseStudies/CaseStudies";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import Transform from "./components/Transform/Transform";
import SportsLifestyleServices from "./components/SportsLifestyleServices/SportsLifestyleServices";
import FAQs from "./components/Accordian/FAQs";

export const metadata: Metadata = {
  title: "Gaming Solutions for Sports & Lifestyle Brands | Fan Engagement Apps",
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <SportsLifestyleServices />
      <Transform />
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
