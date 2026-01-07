"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cases from "./Cases";

const responsive = {
  extraLarge: {
    breakpoint: { max: 4000, min: 1800 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  desktop: {
    breakpoint: { max: 1800, min: 1324 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CasesData = [
  {
    id: 1,
    url: "#",
    title: "Herculi",
    image: "/images/CaseStudies/Herculi.webp",
    description:
      "Explore the creation of 'Herculi' a 3D endless runner game by Nebula Interactive, featuring stunning visuals and exciting gameplay. Learn about its design, challenges, solutions, and key development insights of Virtual Dive.",
  },
  {
    id: 2,
    url: "#",
    title: "Burnout Ship",
    image: "/images/CaseStudies/BurnoutShip.webp",
    description:
      "Dive into Space Ship Battle Ground by Virtual Dive Studios. Race through space, overcome challenges, and outmaneuver rivals in this immersive 3D game. Experience thrilling gameplay and captivating sound effects.",
  },
  {
    id: 3,
    url: "#",
    title: "The Flip",
    image: "/images/CaseStudies/TheFlip.webp",
    description:
      "Discover 'Grass Field' a 3D endless runner by Nebula Interactive. Navigate wrecked forests and cosmic obstacles as a daring hoverboard rider. This study covers design, mechanics, and development challenges.",
  },
  {
    id: 4,
    url: "#",
    title: "Rush Mode Heaven",
    image: "/images/CaseStudies/RushModeHeaven.webp",
    description:
      "Explore 'Rush Mode Heaven' a captivating AR/VR game by VIRTUAL DIVE STUDIOS. Dive into its unique paper plane journey through enchanting heavenly landscapes, tackling obstacles, and collecting rewards.",
  },
];

const CasesCarousel = () => {
  return (
    <div className="w-full max-w-[1600px] mx-auto">
      <Carousel
        // swipeable={true}
        // draggable={true}
        // showDots={true}
        responsive={responsive}
        //   ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        // keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
        //   containerClass="carousel-container"
        removeArrowOnDeviceType={["mobile"]}
        //   deviceType={this.props.deviceType}
        // dotListClass="case-dot"
        //   itemClass="carousel-item-padding-40-px"
      >
        {CasesData.map((data) => {
          return <Cases key={data.id} data={data} />;
        })}
      </Carousel>
    </div>
  );
};

export default CasesCarousel;
