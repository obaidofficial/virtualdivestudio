import React from "react";
import Hero from "./Hero/Hero";
import TrustedPartner from "./TrustedPartner/TrustedPartner";
import CoreServices from "./CoreServices/CoreServices";
import WhoWeAre from "./WhoWeAre/WhoWeAre";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <TrustedPartner />
      <CoreServices />
      <WhoWeAre />
    </div>
  );
};

export default Home;
