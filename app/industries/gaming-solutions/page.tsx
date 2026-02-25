import React from "react";
import FAQs from "./components/Accordian/FAQs";
import SingleIndustriesBanner from "./components/banner/SingleIndustriesBanner";
import { Metadata } from "next";
import Testimonials from "../../../components/Home/Testimonials/Testimonials";
import HomePortfolio from "../../../components/Home/HomePortfolio/HomePortfolio";
import CaseStudies from "../../../components/Home/CaseStudies/CaseStudies";
import ContainedCTA from "@/components/Helper/ContainedCTA";
import Genres from "../components/Genres/Genres";
import Stats from "./components/Stats/Stats";
import Explore from "./components/Explore/Explore";
import Experiences from "./components/Experiences/Experiences";

export const metadata: Metadata = {
  title: "Custom Gaming Solutions | Live Ops, Manotization & Porting",
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <SingleIndustriesBanner />
      <Experiences />
      <Explore />
      <ContainedCTA />
      <Stats />
      <Genres />
      <HomePortfolio />
      <ContainedCTA />
      <CaseStudies />
      <Testimonials />
      <FAQs />
    </div>
  );
};

export default page;
