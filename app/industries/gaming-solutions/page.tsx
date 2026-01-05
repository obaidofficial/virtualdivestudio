import React from "react";
import FAQs from "./components/Accordian/FAQs";
import SingleIndustriesBanner from "./components/banner/SingleIndustriesBanner";

const page = () => {
  return (
    <div className="overflow-hidden">
      <SingleIndustriesBanner />
      <FAQs />
    </div>
  );
};

export default page;
