import FillPrimaryButton from "@/components/Helper/FillPrimaryButton";
import { NavLinks } from "@/constants/navlinks";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "Translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-10002 bg-[#510136]/40 w-full h-screen`}
      ></div>

      {/* NavLinks */}
      <div
        className={`${navOpen} fixed pt-[100px] flex flex-col h-full transform transition-all duration-500 delay-300 w-full bg-[#510136] space-y-2 z-10050`}
      >
        {NavLinks.map((link) => {
          return (
            <Link href={link.url} key={link.id}>
              <p className="relative text-white hover:text-[#ef41de] w-fit text-[20px] ml-8 pb-1 sm:text-[24px] font-light">
                {link.label}
              </p>
            </Link>
          );
        })}
        <div className="ml-8 mr-2 mt-4">
          <Link href="/contact">
            <FillPrimaryButton>Contact Us</FillPrimaryButton>
          </Link>
        </div>

        {/* Close BTN */}
        <CgClose
          onClick={closeNav}
          className="absolute text-white top-[1.4rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </div>
  );
};

export default MobileNav;
