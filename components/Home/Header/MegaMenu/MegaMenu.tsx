import React from "react";
import { MegaMenuData } from "../types";

interface MegaMenuProps {
  data: MegaMenuData;
  isOpen: boolean;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ data, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div
      className="absolute left-0 top-full w-full z-50 animate-in fade-in slide-in-from-top-1 duration-300 shadow-2xl bg-[#320127] border-t border-[#ffffff]/20"
      style={{ pointerEvents: "auto" }}
    >
      <div className="max-w-[1700px] mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Navigation Grid Area */}
          <div
            className={`${data.featured ? "lg:col-span-8" : "lg:col-span-12"}`}
          >
            <div
              className={`grid gap-x-16 gap-y-12 ${
                data.columns.length > 1 ? "sm:grid-cols-4" : "grid-cols-1"
              }`}
            >
              {data.columns.map((column, idx) => (
                <div key={idx} className="space-y-6">
                  {column.title && (
                    <h3 className="text-[12px] font-bold text-white uppercase tracking-[0.2em]">
                      {column.title}
                    </h3>
                  )}
                  <ul className="grid gap-8">
                    {column.items.map((item, iIdx) => (
                      <li key={iIdx}>
                        <a
                          href={item.href}
                          className="group flex items-start gap-5 p-2 -my-3.5 rounded-md hover:bg-[#ffffff]/10 transition-all duration-300"
                        >
                          {item.icon && (
                            <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-white text-gray-400 group-hover:text-white transition-all duration-300 shadow-sm border border-gray-100">
                              {item.icon}
                            </div>
                          )}
                          <div className="flex-1">
                            <div className="text-[16px] font-light text-white transition-colors leading-tight">
                              {item.label}
                            </div>
                            {item.description && (
                              <p className="text-[14px] text-gray-500 mt-1.5 leading-relaxed opacity-80 font-medium">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Highlight Section */}
          {data.featured && (
            <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-[#ffffff]/20 pt-12 lg:pt-0 lg:pl-16">
              <div className="flex flex-col h-full">
                <div className="group cursor-pointer">
                  <div className="overflow-hidden rounded-4xl mb-8 shadow-lg ring-1 ring-gray-200/50">
                    <img
                      src={data.featured.image}
                      alt={data.featured.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors tracking-tight">
                    {data.featured.title}
                  </h3>
                  <p className="text-[15px] text-gray-600 mb-8 leading-relaxed font-medium">
                    {data.featured.description}
                  </p>
                  <a
                    href={data.featured.href}
                    className="inline-flex items-center text-[15px] font-bold text-blue-600 hover:text-blue-800 transition-colors group/link"
                  >
                    {data.featured.cta}
                    <svg
                      className="ml-3 w-5 h-5 transform group-hover/link:translate-x-2 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>

                {/* Status Indicator */}
                <div className="mt-auto pt-8 border-t border-gray-50 hidden lg:block">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                      Platform: Operational
                    </p>
                    <span className="text-[11px] font-bold text-gray-300">
                      v4.2.0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
