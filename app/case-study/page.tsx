import React from "react";
import CaseStudyBanner from "./Banner/CaseStudyBanner";
import Cases from "./Cases/Cases";

const page = () => {
  return (
    <div className="overflow-hidden">
      <CaseStudyBanner />
      <Cases />
    </div>
  );
};

export default page;
