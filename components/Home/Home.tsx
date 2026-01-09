import React from "react";
import Hero from "./Hero/Hero";
import TrustedPartner from "./TrustedPartner/TrustedPartner";
import CoreServices from "./CoreServices/CoreServices";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import FullWidthCTA from "../Helper/FullWidthCTA";
import { GlobalRecognitions } from "./GlobalRecognitions/GlobalRecognitions";
import WhyVRAR from "./WhyVRAR/WhyVRAR";
import CoreEngines from "./CoreEngines/CoreEngines";
import DevelopmentProcess from "./DevelopmentProcess/DevelopmentProcess";
import WhyChoose from "./WhyChosse/WhyChoose";
import CaseStudies from "./CaseStudies/CaseStudies";
import Testimonials from "./Testimonials/Testimonials";
import HomePortfolio from "./HomePortfolio/HomePortfolio";
import GlobeSection from "./GlobeSection/GlobeSection";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      {/* <TrustedPartner /> */}
      <GlobeSection />
      <CoreServices />
      <WhoWeAre />
      <GlobalRecognitions />
      <FullWidthCTA />
      <WhyVRAR />
      <CoreEngines />
      <DevelopmentProcess />
      <WhyChoose />
      <CaseStudies />
      <HomePortfolio />
      <Testimonials />
    </div>
  );
};

export default Home;
