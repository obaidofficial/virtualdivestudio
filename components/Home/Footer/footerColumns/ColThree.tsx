import React from "react";
import Link from "next/link";

const ColThree = () => {
  return (
    <div className="lg:col-span-1 p-1">
      <h3 className="font-medium tracking-[0.17px] text-xl text-[#ef41de]">
        Services
      </h3>
      <ul className="text-white font-light mt-2">
        <li className="mb-0.5">
          <Link
            href="#"
            className="cursor-pointer hover:text-white/70 text-[15px]"
          >
            Game Development
          </Link>
        </li>
        <li className="mb-0.5">
          <Link
            href="#"
            className="cursor-pointer hover:text-white/70 text-[15px]"
          >
            Metaverse Development
          </Link>
        </li>
        <li className="mb-0.5">
          <Link
            href="#"
            className="cursor-pointer hover:text-white/70 text-[15px]"
          >
            AR/VR App Development
          </Link>
        </li>
        <li className="mb-0.5">
          <Link
            href="#"
            className="cursor-pointer hover:text-white/70 text-[15px]"
          >
            Blockchain Development
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
        <li className="mb-0.5">
          <Link
            href="#"
            className="cursor-pointer hover:text-white/70 text-[15px]"
          >
            Design & Art Development
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ColThree;
