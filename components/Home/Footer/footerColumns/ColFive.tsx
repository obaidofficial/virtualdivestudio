import React from "react";
import Link from "next/link";

const ColFive = () => {
  return (
    <div className="lg:col-span-1 p-1">
      <h3 className="font-medium tracking-[0.17px] text-xl text-[#ef41de]">
        Game Engines
      </h3>
      <ul className="text-white font-light mt-2">
        <li className="mb-0.5">
          <Link
            href="#"
            className="cursor-pointer hover:text-white/70 text-[15px]"
          >
            Unity Game Development
          </Link>
        </li>
        <li className="mb-0.5">
          <Link
            href="#"
            className="cursor-pointer hover:text-white/70 text-[15px]"
          >
            Unreal Engine Game Development
          </Link>
        </li>
        <li className="mb-0.5">
          <Link
            href="#"
            className="cursor-pointer hover:text-white/70 text-[15px]"
          >
            UEFN Development
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ColFive;
