import React from "react";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <ul className="flex gap-5">
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
  );
};

export default SocialIcons;
