import React from "react";
import { Metadata } from "next";
import IndustriesBanner from "./components/banner/IndustriesBanner";

export const metadata: Metadata = {
  title: "Industries",
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <IndustriesBanner />
    </div>
  );
};

export default page;
