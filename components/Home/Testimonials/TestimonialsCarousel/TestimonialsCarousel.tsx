"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialsCards from "./TestimonialsCards";

const responsive = {
  extraLarge: {
    breakpoint: { max: 4000, min: 1800 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  desktop: {
    breakpoint: { max: 1800, min: 1324 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const TestimonialsData = [
  {
    id: 1,
    name: "Valer",
    image: "/images/testimonials/Valer.webp",
    review:
      "I have connected with Virtual Dive Studios regarding my game development project. My project was to build a Rocket Car Ball Game on the Unity platform. They have maintained the graphics quality & performance.",
  },
  {
    id: 2,
    name: "Ahmed Abdul Aziz",
    image: "/images/testimonials/AhmedAbdulAziz.webp",
    review:
      "They have successfully delivered my VR-based real estate application within the timeline. Virtual Dive truly fulfills their commitment by meeting hard deadlines. I am truly amazed by their modern and innovative development solutions.",
  },
  {
    id: 3,
    name: "Saadat Ali",
    image: "/images/testimonials/SaadatAli.webp",
    review:
      "We have approached them for the UI/UX Design for our packaging company. Their design approach helps us in generating some good business. Our form submission rate has increased by 20% after the updated design.",
  },
];

const TestimonialsCarousel = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <Carousel
        arrows={true}
        // renderDotsOutside={false}
        showDots={false}
        responsive={responsive}
        //   ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={8000}
        customTransition="transform 1.2s"
        transitionDuration={1000}
        // containerClass="carousel-container overflow-visible"
        removeArrowOnDeviceType={["mobile"]}
        // dotListClass="case-dot"
        // itemClass="px-0"
      >
        {TestimonialsData.map((data) => (
          <div key={data.id} className="w-full">
            <TestimonialsCards data={data} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialsCarousel;
