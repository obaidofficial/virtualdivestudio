import React from "react";
import Link from "next/link";

const ColFour = () => {
  return (
    <div className="lg:col-span-1 p-1">
      <h3 className="font-medium tracking-[0.17px] text-xl text-[#ef41de]">
        Industries
      </h3>
      <ul className="text-white font-light mt-2">
        <li className="mb-0.5">
          <Link
            href="#"
            className="cursor-pointer hover:text-white/70 text-[15px]"
          >
            Gaming
          </Link>
        </li>
        <li className="mb-0.5">
          <Link
            href="#"
            className="cursor-pointer hover:text-white/70 text-[15px]"
          >
            Sports and Lifestyle
          </Link>
        </li>
        <li className="mb-0.5">
          <Link
            href="#"
            className="cursor-pointer hover:text-white/70 text-[15px]"
          >
            Health and Wellness
          </Link>
        </li>
        <li className="mb-0.5">
          <Link
            href="#"
            className="cursor-pointer hover:text-white/70 text-[15px]"
          >
            Social Networking and Entertainment
          </Link>
        </li>
        <li className="mb-0.5">
          <Link
            href="#"
            className="cursor-pointer hover:text-white/70 text-[15px]"
          >
            Traveling
          </Link>
        </li>
        <li className="mb-0.5">
          <Link
            href="#"
            className="cursor-pointer hover:text-white/70 text-[15px]"
          >
            Blockchain
          </Link>
        </li>
        <li className="mb-0.5">
          <Link
            href="#"
            className="cursor-pointer hover:text-white/70 text-[15px]"
          >
            Education
          </Link>
        </li>
        <li className="mb-0.5">
          <Link
            href="#"
            className="cursor-pointer hover:text-white/70 text-[15px]"
          >
            E-commerce
          </Link>
        </li>
        <li className="mb-0.5">
          <Link
            href="#"
            className="cursor-pointer hover:text-white/70 text-[15px]"
          >
            Real Estate
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ColFour;
