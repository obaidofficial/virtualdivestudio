import React from "react";
import { Metadata } from "next";
import IndustriesBanner from "./components/banner/IndustriesBanner";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import HomePortfolio from "@/components/Home/HomePortfolio/HomePortfolio";
import { GlobalRecognitions } from "@/components/Home/GlobalRecognitions/GlobalRecognitions";
import ContainedCTA from "@/components/Helper/ContainedCTA";
import Genres from "./components/Genres/Genres";
import CoreEngines from "@/components/Home/CoreEngines/CoreEngines";
import IndustriesWeWork from "./components/IndustriesWeWork/IndustriesWeWork";
import DifferentDomains from "./components/DifferentDomains/DifferentDomains";
import WeHire from "./components/WeHire/WeHire";

export const metadata: Metadata = {
  title: "Industries",
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <IndustriesBanner />
      <IndustriesWeWork />
      <DifferentDomains />
      <ContainedCTA />
      <Genres />
      <GlobalRecognitions />
      <CoreEngines />
      <WeHire />
      <HomePortfolio />
      <ContainedCTA />
      <Testimonials />
    </div>
  );
};

export default page;
