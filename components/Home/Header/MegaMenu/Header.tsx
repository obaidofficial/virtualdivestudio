"use client";
import React, { useState, useEffect } from "react";
import { NAVIGATION_DATA } from "../constants";
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";
import FillPrimaryButton from "@/components/Helper/FillPrimaryButton";
import Image from "next/image";
import Link from "next/link";

export const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeItemData = NAVIGATION_DATA.find(
    (item) => item.label === activeMenu
  )?.megaMenu;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-1500 transition-all duration-500 ${
          isScrolled || activeMenu
            ? "bg-[#510136] backdrop-blur-sm py-4 shadow-lg shadow-black/20"
            : "bg-transparent py-4"
        }`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="max-w-[94%] mx-auto px-2 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between gap-10">
            {/* Logo */}
            <Link href="/" className="transition-all duration-200">
              <Image
                src="/images/logo.webp"
                alt="Virtual Dive Studio Logo"
                width={210}
                height={60}
                className="hidden md:block"
              />
              <Image
                src="/images/logo.webp"
                alt="Virtual Dive Studio Logo"
                width={160}
                height={60}
                className="block md:hidden"
              />
            </Link>

            {/* Desktop Navigation - 5 Options */}
            <nav className="hidden lg:flex items-center space-x-2">
              {NAVIGATION_DATA.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.megaMenu && setActiveMenu(item.label)
                  }
                >
                  <a
                    href={item.href}
                    className={`px-5 py-2.5 flex items-center text-[14px] font-bold uppercase tracking-[0.05em] transition-all rounded-full ${
                      activeMenu === item.label
                        ? "text-[#ef41de] opacity-100"
                        : "text-[#ef41de]"
                    } rounded-full ${
                      isScrolled || activeMenu
                        ? "text-white hover:text-[#ef41de]"
                        : "text-white hover:text-[#ef41de]"
                    }`}
                  >
                    {item.label}
                    {item.megaMenu && (
                      <svg
                        className={`ml-2 w-4 h-4 opacity-50 transition-transform duration-300 ${
                          activeMenu === item.label
                            ? "rotate-180 hover:text-[#ef41de] opacity-100"
                            : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </a>
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-3">
                <Link href="/contact">
                  <FillPrimaryButton>Contact Us</FillPrimaryButton>
                </Link>
              </div>

              {/* Mobile toggle */}
              <button
                onClick={() => setIsMobileOpen(true)}
                className="lg:hidden p-1 text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Full-width Mega Menu Container */}
        {activeItemData && (
          <MegaMenu data={activeItemData} isOpen={!!activeMenu} />
        )}
      </header>

      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  );
};
