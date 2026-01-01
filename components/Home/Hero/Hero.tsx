"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full h-[70vh] sm:h-screen">
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-contain bg-center bg-no-repeat bg-[url('/images/hero/hero_overlay.webp')] z-1 opacity-80"></div>

      {/* Video */}
      <video
        src="/images/hero/hero-video.mp4"
        autoPlay
        muted
        loop
        preload="metadata"
        className="w-full h-full object-cover"
      />

      {/* Text Content */}
      <div className="absolute z-100 w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex items-center justify-center flex-col w-full h-full">
          <div className="md:w-[1000px] w-[92%]">
            <h1 className="text-[28px] mb-4 md:mb-3 text-center lg:text-[70px] leading-[1.1em] tracking-[-3px] text-white font-normal uppercase">
              TRANSFORM{" "}
              <span className="text-[#ef41de] font-medium">YOUR IDEAS</span>{" "}
              INTO GRAPHICALLY IMMERSIVE EXPERIENCES
            </h1>
            <p className="text-[14px] mb-4 md:mb-6 w-full lg:w-[800px] mx-auto text-center lg:text-[24px] leading-[1.5em] text-white font-light">
              Explore immersive gaming solutions with Virtual Dive Studios,
              where innovation meets execution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
