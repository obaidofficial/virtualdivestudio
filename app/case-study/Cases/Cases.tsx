import React from "react";
import { CASES } from "./constants";
import CasesCards from "./CasesCards";

const Cases = () => {
  return (
    <div className="bg-[#0c000a] pt-16 pb-16">
      <div className="pt-4 w-[94%] lg:w-[90%] mx-auto pb-4">
        <div className="grid md:grid-cols-3 gap-2 lg:gap-2">
          {CASES.map((casedata) => {
            return (
              <div key={casedata.id}>
                <CasesCards casedata={casedata} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cases;
