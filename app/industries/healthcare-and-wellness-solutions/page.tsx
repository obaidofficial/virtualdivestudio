import React from "react";
import { Metadata } from "next";
import Banner from "./components/Banner/Banner";

export const metadata: Metadata = {
  title: "Gaming Solutions for Sports & Lifestyle Brands | Fan Engagement Apps",
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
    </div>
  );
};

export default page;
