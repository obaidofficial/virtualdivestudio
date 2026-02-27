import React from "react";
import { Metadata } from "next";
import Banner from "./components/Banner/Banner";
import ContainedCTA from "@/components/Helper/ContainedCTA";
import WeHire from "../industries/components/WeHire/WeHire";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import PowerYourVision from "../platforms/components/PowerYourVision/PowerYourVision";
import TopTalent from "./components/TopTalent/TopTalent";
import BestOffshoreProgrammers from "./components/BestOffshoreProgrammers/BestOffshoreProgrammers";
import HireFromUs from "./components/HireFromUs/HireFromUs";
import DedicatedDev from "./components/DedicatedDev/DedicatedDev";
import HiringModels from "./components/HiringModels/HiringModels";
import TailoredSolutions from "./components/TailoredSolutions/TailoredSolutions";
import DiverseTalent from "./components/DiverseTalent/DiverseTalent";

export const metadata: Metadata = {
  title: "Hire Dedicated Game Developers | Unity, Unreal & Mobile Experts",
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <DedicatedDev />
      <TailoredSolutions />
      <ContainedCTA />
      <DiverseTalent />
      <PowerYourVision />
      <HiringModels />
      <HireFromUs />
      <BestOffshoreProgrammers />
      <TopTalent />
      <ContainedCTA />
      <WeHire />
      <Testimonials />
    </div>
  );
};

export default page;
