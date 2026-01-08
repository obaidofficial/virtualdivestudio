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
    name: "Herculi",
    image: "/images/trustedPartner/Trusted-Partner.webp",
    review:
      "Explore the creation of 'Herculi' a 3D endless runner game by Nebula Interactive, featuring stunning visuals and exciting gameplay. Learn about its design, challenges, solutions, and key development insights of Virtual Dive.",
  },
  {
    id: 2,
    name: "Burnout Ship",
    image: "/images/CaseStudies/BurnoutShip.webp",
    review:
      "Dive into Space Ship Battle Ground by Virtual Dive Studios. Race through space, overcome challenges, and outmaneuver rivals in this immersive 3D game. Experience thrilling gameplay and captivating sound effects.",
  },
  {
    id: 3,
    name: "The Flip",
    image: "/images/CaseStudies/TheFlip.webp",
    review:
      "Discover 'Grass Field' a 3D endless runner by Nebula Interactive. Navigate wrecked forests and cosmic obstacles as a daring hoverboard rider. This study covers design, mechanics, and development challenges.",
  },
  {
    id: 4,
    name: "Rush Mode Heaven",
    image: "/images/CaseStudies/RushModeHeaven.webp",
    review:
      "Explore 'Rush Mode Heaven' a captivating AR/VR game by VIRTUAL DIVE STUDIOS. Dive into its unique paper plane journey through enchanting heavenly landscapes, tackling obstacles, and collecting rewards.",
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
