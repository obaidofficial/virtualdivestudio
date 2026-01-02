import React from "react";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <ul className="flex gap-5">
      <li className="text-white/80 text-[18px] lg:text-[22px] cursor-pointer hover:text-[#ef41de]">
        <Link
          href="https://www.facebook.com/virtualdivestudios/"
          target="_blank"
        >
          <FaFacebookF />
        </Link>
      </li>
      <li className="text-white/80 text-[18px] lg:text-[22px] cursor-pointer hover:text-[#ef41de]">
        <Link
          href="https://www.linkedin.com/company/virtual-dive-studios/"
          target="_blank"
        >
          <FaLinkedinIn />
        </Link>
      </li>
      <li className="text-white/80 text-[18px] lg:text-[22px] cursor-pointer hover:text-[#ef41de]">
        <Link
          href="https://www.instagram.com/virtualdivestudios/"
          target="_blank"
        >
          <FiInstagram />
        </Link>
      </li>
      <li className="text-white/80 text-[18px] lg:text-[22px] cursor-pointer hover:text-[#ef41de]">
        <Link href="https://x.com/virtual30454" target="_blank">
          <FaXTwitter />
        </Link>
      </li>
    </ul>
  );
};

export default SocialIcons;
