import React from "react";
import { Talent } from "../types";
import Link from "next/link";
import FillPrimaryButton from "@/components/Helper/FillPrimaryButton";

interface TalentCardProps {
  talent: Talent;
}

const TalentCards: React.FC<TalentCardProps> = ({ talent }) => {
  return (
    <div className="group relative flex flex-col bg-[#320127] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#ef41de]">
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={talent.image}
          alt={talent.title}
          className="w-full h-full object-cover object-[top_-4rem_left_0rem]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="flex flex-wrap gap-2">
            {talent.tags.map((tag) => (
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
            {talent.expYears}+ Years Experience in this Field
          </span>
        </div>
        <h3 className="text-xl font-medium text-white mb-2">{talent.title}</h3>
        <p className="text-white/80 text-sm leading-relaxed grow">
          Verified Expert in {talent.verify}
        </p>
        <div className="mt-3">
          <Link href="/contact">
            <FillPrimaryButton>HIRE NOW!</FillPrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TalentCards;
