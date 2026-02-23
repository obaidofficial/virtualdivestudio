import React from "react";
import { Portfolio } from "../types";
import Link from "next/link";

interface PortfolioCardProps {
  portfolio: Portfolio;
}

const PortfolioCards: React.FC<PortfolioCardProps> = ({ portfolio }) => {
  return (
    <div className="group relative flex flex-col bg-[#320127] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#ef41de]">
      <Link href={`portfolio/${portfolio.link}`}>
        <div className="relative h-64 overflow-hidden">
          <img
            src={portfolio.image}
            alt={portfolio.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <div className="flex flex-wrap gap-2">
              {portfolio.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-semibold uppercase tracking-wider text-white bg-white/20 backdrop-blur-md px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 flex flex-col grow">
          <div className="mb-2">
            <span className="text-xs font-bold text-[#ef41de] uppercase tracking-widest">
              {portfolio.category}
            </span>
          </div>
          <h3 className="text-xl font-medium text-white mb-2">
            {portfolio.title}
          </h3>
          <p className="text-white/80 text-sm leading-relaxed grow">
            {portfolio.description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PortfolioCards;
