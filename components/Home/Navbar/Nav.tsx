"use client";
import { NavLinks } from "@/constants/navlinks";
import FillPrimaryButton from "@/components/Helper/FillPrimaryButton";
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
              className="hidden md:block"
            />
            <Image
              src="/images/logo.webp"
              alt="Virtual Dive Logo"
              width={160}
              height={60}
              className="block md:hidden"
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
          <Link href="/contact" className="hidden lg:block">
            <FillPrimaryButton>Contact Us</FillPrimaryButton>
          </Link>

          {/* Theme Toggler */}
          {/* <ThemeToggler /> */}

          {/* Burger Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className={`w-8 h-8 cursor-pointer ${
              navBg ? "text-white" : "text-white"
            } lg:hidden`}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
