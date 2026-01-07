"use client";
import React, { useState, useMemo } from "react";
import { CATEGORIES, PORTFOLIOS } from "./components/constants";
import { Category } from "./components/types";
import PortfolioCards from "./components/PortfolioCards/PortfolioCards";

const PortfolioTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category>("Gaming");

  const filteredPortfolios = useMemo(() => {
    return PORTFOLIOS.filter((p) => p.category === activeTab);
  }, [activeTab]);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-[#170012]">
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

      {/* Portfolios Grid */}
      <main className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolios.map((portfolio, index) => (
            <div
              key={portfolio.id}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <PortfolioCards portfolio={portfolio} />
            </div>
          ))}

          {/* Edge case: Empty state (though not possible with current constants) */}
          {filteredPortfolios.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <p className="text-gray-400 italic">
                No portfolios found for this category.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Tailwind specific standard animations inject */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-in-from-bottom-4 { from { transform: translateY(1rem); } to { transform: translateY(0); } }
        .animate-in { animation: fade-in 0.5s ease-out, slide-in-from-bottom-4 0.5s ease-out; }
      `,
        }}
      />
    </div>
  );
};

export default PortfolioTabs;
