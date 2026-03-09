import React from "react";
import { Metadata } from "next";
import Banner from "./components/Banner/Banner";
import TransformTheECommerce from "./components/TransformTheECommerce/TransformTheECommerce";
import ContainedCTA from "@/components/Helper/ContainedCTA";
import HomePortfolio from "@/components/Home/HomePortfolio/HomePortfolio";
import CaseStudies from "@/components/Home/CaseStudies/CaseStudies";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import Stats from "./components/Stats/Stats";
import FAQs from "./components/Accordian/FAQs";
import ECommerceServices from "./ECommerceServices/ECommerceServices";

export const metadata: Metadata = {
  title: "Gamified Ecommerce Design | 3D Product Showrooms & AR Try-On",
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <ECommerceServices />
      <TransformTheECommerce />
      <ContainedCTA />
      <Stats />
      <HomePortfolio />
      <ContainedCTA />
      <CaseStudies />
      <Testimonials />
      <FAQs />
    </div>
  );
};

export default page;
