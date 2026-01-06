import React from "react";

const OutsourceModels = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-12 gap-2 lg:gap-4">
        <div className="lg:col-span-6 py-2 md:py-8 px-1 md:px-8 flex flex-col justify-center">
          <h2 className="text-[28px] md:text-[32] lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em]">
            Our Outsource Models
          </h2>
          <p className="text-white text-[15px] lg:text-[18px] font-light tracking-[0.17px] mt-4 transition-all duration-300 delay-50">
            We allow our clients the choice of working with experts in different
            fields directly or we can bring in our dedicated staff of designers,
            illustrators, game developers, and other professionals.
          </p>
        </div>

        <div className="lg:col-span-6 py-1 md:py-8 px-1 gap-2 flex flex-col">
          <div className="py-4 px-6 border hover:border-[#FF00E5] rounded-xl bg-[#320127] border-[#320127] transition-all duration-300">
            <h2 className="text-[20px] md:text-[24] lg:text-[30px] text-white tracking-[0.5px] leading-[1.1em]">
              Game Development Outsourcing:
            </h2>
            <p className="text-white text-[15px] lg:text-[18px] font-light tracking-[0.17px] mt-4">
              Want to hand out the chores to a brilliant team? Whether you want
              to delegate a task or a complete phase of the project, we will be
              accountable for it while you keep control.
            </p>
          </div>

          <div className="py-4 px-6 border hover:border-[#FF00E5] rounded-xl bg-[#320127] border-[#320127] transition-all duration-300">
            <h2 className="text-[20px] md:text-[24] lg:text-[30px] text-white tracking-[0.5px] leading-[1.1em]">
              Staff Augmentation:
            </h2>
            <p className="text-white text-[15px] lg:text-[18px] font-light tracking-[0.17px] mt-4">
              Expand your in-house team and fill the resource gap by hiring our
              skilled developers in an efficient way to the maximum working
              capacity and revenue potential.
            </p>
          </div>

          <div className="py-4 px-6 border hover:border-[#FF00E5] rounded-xl bg-[#320127] border-[#320127] transition-all duration-300">
            <h2 className="text-[20px] md:text-[24] lg:text-[30px] text-white tracking-[0.5px] leading-[1.1em]">
              Dedicated Game Development Team:
            </h2>
            <p className="text-white text-[15px] lg:text-[18px] font-light tracking-[0.17px] mt-4">
              Hire a dedicated game development team from our cross-functional
              pool within 3-4 working days, including 2D/3D artists, UI/UX
              designers, game developers, QA engineers, and ASO experts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutsourceModels;
