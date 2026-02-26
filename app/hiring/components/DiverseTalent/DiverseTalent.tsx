"use client";
import React, { useState, useMemo } from "react";
import { CATEGORIES, TALENTS } from "./components/constants";
import { Category } from "./components/types";
import TalentCards from "./components/TalentCards/TalentCards";
import Link from "next/link";

const DiverseTalent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category>("Game Developers");

  const filteredTalents = useMemo(() => {
    return TALENTS.filter((t) => t.category === activeTab);
  }, [activeTab]);

  return (
    <div className="pt-10 pb-16 px-4 sm:px-6 lg:px-8 bg-[#170012]">
      <div className="pt-2 w-[94%] lg:w-[90%] mx-auto pb-6">
        <h2 className="text-[28px] md:text-[32] lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em] text-center">
          Hire Our Diverse Talent Pool
        </h2>
      </div>
      {/* Tabs Controller */}
      <div className="max-w-fit mx-auto mb-12 pt-1.5 pb-2 px-2 bg-[#320127] rounded-2xl border border-[#ef41de] flex gap-2">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`
              px-8 py-3 rounded-xl text-sm tracking-[0.17px] text-[16px] transition-all duration-300 cursor-pointer
              ${
                activeTab === category
                  ? "bg-[#ef41de] text-white scale-105"
                  : "text-white hover:text-gray-900 hover:bg-gray-50"
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Talents Grid */}
      <main className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTalents.map((talent, index) => (
            <div
              key={talent.id}
              className="duration-500 fill-mode-both"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <TalentCards talent={talent} />
            </div>
          ))}

          {/* Edge case: Empty state (though not possible with current constants) */}
          {filteredTalents.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <p className="text-gray-400 italic">
                No portfolios found for this category.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default DiverseTalent;
