"use client";
import MyButton from "@/components/Helper/MyButton";
import { NavLinks } from "@/constants/navlinks";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 60) setNavBg(true);
      if (window.scrollY < 60) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`${
        navBg
          ? "backdrop-blur-sm bg-[#510136] shadow-lg shadow-black/5 dark:shadow-white/5"
          : "fixed"
      } transition-all duration-200 h-[74px] z-10000 fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[92%] 2xl:w-[88%] mx-auto">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="transition-all duration-200">
            <Image
              src="/images/logo.webp"
              alt="Virtual Dive Logo"
              width={210}
              height={60}
              className={`${
                navBg
                  ? "brightness-[1] invert-[0]"
                  : "brightness-[1] invert-[0]"
              }`}
            />
          </Link>
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p
                  className={`${
                    navBg
                      ? "text-white hover:text-[#ef41de]"
                      : "text-white hover:text-[#ef41de]"
                  } relative text-base tracking-[0.17px] w-fit text-[18px]`}
                >
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>

        <div className="flex gap-5 items-center">
          {/* Button */}
          <Link href="#">
            <button className="px-4.5 py-2 text-white text-base transition-all duration-200 rounded-full cursor-pointer bg-[#ef41de] shadow-none border-2 border-[#ef41de]">
              Contact Us <span className="pl-2">⇢</span>
            </button>
          </Link>

          {/* Theme Toggler */}
          {/* <ThemeToggler /> */}

          {/* Burger Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className={`w-8 h-8 cursor-pointer ${
              navBg ? "text-[#252525]" : "text-black"
            } lg:hidden`}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
