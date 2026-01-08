import PrimaryBorderButton from "@/components/Helper/PrimaryBorderButton";
import React from "react";
import Link from "next/link";
import TestimonialsCarousel from "./TestimonialsCarousel/TestimonialsCarousel";

const Testimonials = () => {
  return (
    <div className="bg-[#320127] pt-16 pb-16">
      <div className="pt-2 w-[94%] lg:w-[90%] mx-auto pb-2">
        <div className="py-2.5">
          <h2 className="text-[28px] md:text-[32] lg:text-[42px] text-center text-white tracking-[0.5px] leading-[1.1em]">
            Client Testimonials
          </h2>
          <p className="text-white text-[15px] lg:text-[18px] font-light tracking-[0.17px] mt-4 text-center md:w-[700px] mx-auto">
            Real stories from our global partners. Discover how we're
            transforming enterprise operations one testimonial at a time.
          </p>
        </div>
      </div>

      <TestimonialsCarousel />
    </div>
  );
};

export default Testimonials;
