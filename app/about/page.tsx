import React from "react";
import { Metadata } from "next";
import Banner from "./AboutComponents/Banner/Banner";
import WhatCEOSays from "./AboutComponents/WhatCEOSays/WhatCEOSays";
import WhoWeAre from "@/components/Home/WhoWeAre/WhoWeAre";
import ContainedCTA from "@/components/Helper/ContainedCTA";
import Benefits from "../platforms/components/Benefits/Benefits";
import HomePortfolio from "@/components/Home/HomePortfolio/HomePortfolio";
import CaseStudies from "@/components/Home/CaseStudies/CaseStudies";
import Countries from "./AboutComponents/Countries/Countries";
import CoreStatements from "./AboutComponents/CoreStatements/CoreStatements";
import CoreValues from "./AboutComponents/CoreValues/CoreValues";
import OurStory from "./AboutComponents/OurStory/OurStory";
import ExpertTeam from "./AboutComponents/ExpertTeam/ExpertTeam";
export const metadata: Metadata = {
  title: "AI, Gaming & Real Estate Experts | About Virtual Dive Studio",
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <WhatCEOSays />
      <WhoWeAre />
      <Countries />
      <CoreStatements />
      <CoreValues />
      <ContainedCTA />
      <Benefits />
      <OurStory />
      <HomePortfolio />
      <ContainedCTA />
      <ExpertTeam />
      <CaseStudies />
    </div>
  );
};

export default page;
