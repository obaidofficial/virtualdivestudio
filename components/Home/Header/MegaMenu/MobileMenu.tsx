import React, { useState } from "react";
import { NAVIGATION_DATA } from "../constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (label: string) => {
    setActiveAccordion(activeAccordion === label ? null : label);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-1600 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white z-1700 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } overflow-y-auto`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              NexusUI
            </span>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="grow space-y-4">
            {NAVIGATION_DATA.map((item) => (
              <div key={item.label}>
                {item.megaMenu ? (
                  <div>
                    <button
                      onClick={() => toggleAccordion(item.label)}
                      className="w-full flex items-center justify-between py-3 text-lg font-medium text-gray-900 border-b border-gray-50"
                    >
                      {item.label}
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${
                          activeAccordion === item.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeAccordion === item.label
                          ? "max-h-[1600px] py-4"
                          : "max-h-0"
                      }`}
                    >
                      {item.megaMenu.columns.map((col, cIdx) => (
                        <div
                          key={cIdx}
                          className="mb-4 pl-4 border-l-2 border-gray-100"
                        >
                          <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">
                            {col.title}
                          </h4>
                          <ul className="space-y-2">
                            {col.items.map((sub, sIdx) => (
                              <li key={sIdx}>
                                <a
                                  href={sub.href}
                                  className="text-gray-600 hover:text-blue-600 py-1 block"
                                  onClick={onClose}
                                >
                                  {sub.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block py-3 text-lg font-medium text-gray-900 border-b border-gray-50"
                    onClick={onClose}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-8 space-y-3">
            <button className="w-full py-3 px-4 border border-gray-200 rounded-xl text-gray-900 font-semibold hover:bg-gray-50 transition-colors">
              Log in
            </button>
            <button className="w-full py-3 px-4 bg-blue-600 rounded-xl text-white font-semibold hover:bg-blue-700 transition-shadow shadow-lg shadow-blue-500/30">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
