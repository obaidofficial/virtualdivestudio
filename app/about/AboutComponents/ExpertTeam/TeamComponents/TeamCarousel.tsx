"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TeamMembers from "./TeamMembers";

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

const TeamMembersData = [
  {
    id: 1,
    title: "Usama Ameen",
    image: "/images/about/team/usamaameen.webp",
  },
  {
    id: 2,
    title: "Muhammad Khizar",
    image: "/images/about/team/khizar.webp",
  },
  {
    id: 3,
    title: "Muhammad Muzammil Bela",
    image: "/images/about/team/bela.webp",
  },
  {
    id: 4,
    title: "Syed Ghufran Abbas",
    image: "/images/about/team/ghufran.webp",
  },
  {
    id: 5,
    title: "Muhammad Abdul Rehman",
    image: "/images/about/team/dastan.webp",
  },
  {
    id: 6,
    title: "Ali Hamza Qureshi",
    image: "/images/about/team/ali.webp",
  },
  {
    id: 7,
    title: "Haris Toor",
    image: "/images/about/team/haris.webp",
  },
  {
    id: 8,
    title: "Faizan Munir",
    image: "/images/about/team/faizanmunir.webp",
  },
];

const TeamCarousel = () => {
  return (
    <div className="w-full max-w-[1600px] mx-auto">
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
        {TeamMembersData.map((data) => (
          <div key={data.id} className="w-full">
            <TeamMembers data={data} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TeamCarousel;
