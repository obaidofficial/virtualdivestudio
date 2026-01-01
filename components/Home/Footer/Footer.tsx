import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import FooterCTA from "./FooterCTA";
import ColOne from "./footerColumns/ColOne";
import ColTwo from "./footerColumns/ColTwo";
import ColThree from "./footerColumns/ColThree";
import ColFour from "./footerColumns/ColFour";
import ColFive from "./footerColumns/ColFive";

const Footer = () => {
  return (
    <div className="bg-[#1d0117]">
      <div className="pt-6 w-[94%] lg:w-[90%] mx-auto pb-3">
        <FooterCTA />
        <hr className="mt-3 mb-6 text-white/20" />

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-3 lg:gap-10">
          <ColOne />
          <ColTwo />
          <ColThree />
          <ColFour />
          <ColFive />
        </div>

        <hr className="text-white/20 mt-4 mb-5" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-10">
          <div className="lg:col-span-1 p-1">
            <div className="flex-wrap flex items-center justify-center lg:justify-start gap-5">
              <Image
                src="/images/footer/amazon.png"
                alt="team"
                width={60}
                height={60}
              />
              <Image
                src="/images/footer/clutch.png"
                alt="team"
                width={60}
                height={60}
              />
              <Image
                src="/images/footer/Goodfirms.png"
                alt="team"
                width={100}
                height={100}
              />
              <Image
                src="/images/footer/dmca.png"
                alt="team"
                width={55}
                height={55}
              />
              <Image
                src="/images/footer/iso.png"
                alt="team"
                width={50}
                height={50}
              />
              <Image
                src="/images/footer/sortlist.png"
                alt="team"
                width={65}
                height={65}
              />
            </div>
          </div>
          <div className="lg:col-span-1 p-1">
            <ul className="flex lg:justify-end justify-center items-center gap-5 mt-1">
              <li className="text-white/80 text-[22px] cursor-pointer hover:text-[#ef41de]">
                <Link href="#">
                  <FaFacebookF />
                </Link>
              </li>
              <li className="text-white/80 text-[22px] cursor-pointer hover:text-[#ef41de]">
                <Link href="#">
                  <FaLinkedinIn />
                </Link>
              </li>
              <li className="text-white/80 text-[22px] cursor-pointer hover:text-[#ef41de]">
                <Link href="#">
                  <FiInstagram />
                </Link>
              </li>
              <li className="text-white/80 text-[22px] cursor-pointer hover:text-[#ef41de]">
                <Link href="#">
                  <FaXTwitter />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="text-white/20 mt-5 mb-0.5" />

        <div className="text-center pt-2">
          <p className="text-white text-[15px] font-light">
            © 2026 Virtual Dive Studio. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
