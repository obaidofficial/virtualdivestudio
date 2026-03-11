import React from "react";
import { Metadata } from "next";
import Banner from "./components/Banner/Banner";
import FAQs from "./components/Accordian/FAQs";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import CaseStudies from "@/components/Home/CaseStudies/CaseStudies";
import ContainedCTA from "@/components/Helper/ContainedCTA";
import UEFNFortniteServices from "./components/UEFNFortniteServices/UEFNFortniteServices";
import Advantages from "./components/Advantages/Advantages";
import Process from "./components/Process/Process";
import ContentImage from "./components/ContentImage/ContentImage";

export const metadata: Metadata = {
  title: "AR Travel Apps | Interactive Guides & Virtual Tourism",
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <UEFNFortniteServices />
      <Advantages />
      <ContainedCTA />
      <ContentImage />
      <Process />
      <CaseStudies />
      <Testimonials />
      <FAQs />
    </div>
  );
};

export default page;
