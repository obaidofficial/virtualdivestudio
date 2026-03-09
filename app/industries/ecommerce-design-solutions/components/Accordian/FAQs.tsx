"use client";
import React from "react";
import Accordian from "../../../../../constants/Accordian";
import { AccordianItemData } from "../../../../../constants/accordianItemData";
import { DEFAULT_ACCORDIAN_ITEMS } from "./acoordianConstants";
import { useState } from "react";

const FAQs: React.FC = () => {
  const [items, setItems] = useState<AccordianItemData[]>(
    DEFAULT_ACCORDIAN_ITEMS,
  );
  const [allowMultiple, setAllowMultiple] = useState(false);

  return (
    <div className="pt-16 pb-16 bg-[#170012]">
      <div className="pb-4">
        <h2 className="text-[28px] md:text-[32] text-center lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em]">
          Freequently Ask Questions
        </h2>
      </div>
      <Accordian items={items} allowMultiple={allowMultiple} />
    </div>
  );
};

export default FAQs;
