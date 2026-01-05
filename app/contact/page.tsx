import React from "react";
import ContactBanner from "./components/banner/ContactBanner";
import ContactFormSection from "./components/contactFormSection/ContactFormSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <ContactBanner />
      <ContactFormSection />
    </div>
  );
};

export default page;
