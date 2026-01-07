import React from "react";
import PortfolioBanner from "./components/PortfolioBanner/PortfolioBanner";
import { Metadata } from "next";
import PortfolioTabs from "./components/PortfolioTabs/PortfolioTabs";

export const metadata: Metadata = {
  title: "Portfolio",
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <PortfolioBanner />
      <PortfolioTabs />
    </div>
  );
};

export default page;
