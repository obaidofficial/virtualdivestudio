import React from "react";
import Link from "next/link";

const ColTwo = () => {
  return (
    <div className="lg:col-span-1 p-1">
      <h3 className="font-medium tracking-[0.17px] text-xl text-[#ef41de]">
        Explore
      </h3>
      <ul className="text-white font-light mt-2">
        <li className="mb-0.5">
          <Link
            href="#"
            className="cursor-pointer hover:text-white/70 text-[15px]"
          >
            About
          </Link>
        </li>
        <li className="mb-0.5">
          <Link
            href="#"
            className="cursor-pointer hover:text-white/70 text-[15px]"
          >
            Blog
          </Link>
        </li>
        <li className="mb-0.5">
          <Link
            href="#"
            className="cursor-pointer hover:text-white/70 text-[15px]"
          >
            Hiring
          </Link>
        </li>
        <li className="mb-0.5">
          <Link
            href="#"
            className="cursor-pointer hover:text-white/70 text-[15px]"
          >
            Portfolio
          </Link>
        </li>
        <li className="mb-0.5">
          <Link
            href="#"
            className="cursor-pointer hover:text-white/70 text-[15px]"
          >
            Privacy Policy
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ColTwo;
