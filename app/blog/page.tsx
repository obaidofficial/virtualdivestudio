import React from "react";
import { Metadata } from "next";
import Banner from "./Banner/Banner";
import Blogs from "./Blogs/Blogs";
export const metadata: Metadata = {
  title: "Blog",
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <Blogs />
    </div>
  );
};

export default page;
