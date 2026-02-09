import React from "react";
import Image from "next/image";

const WeHire = () => {
  return (
    <div className="bg-[#0c000a] pt-16 pb-16">
      <div className="pt-4 w-[94%] lg:w-[90%] mx-auto pb-4">
        <div>
          <h2 className="text-[28px] md:text-[32] lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em] text-center">
            How We Hire Game Developers
          </h2>
          <p className="text-white text-[15px] lg:text-[18px] font-light tracking-[0.17px] mt-4 transition-all duration-300 delay-50 text-center max-w-260 mx-auto">
            Our recruitment team has streamlined these hiring procedures to make
            the process smoother for our organization. By adhering to these
            steps, we ensure that we hire only productive and highly talented
            engineers in our teams.
          </p>
        </div>
        <div className="grid lg:grid-cols-12 gap-2 lg:gap-4">
          <div className="lg:col-span-4 py-1 md:py-8 px-1 gap-2 flex flex-col">
            <div className="py-4 px-6 border hover:border-[#FF00E5] rounded-xl bg-[#320127] border-[#320127] transition-all duration-300">
              <h2 className="text-[19px] md:text-[22px] text-white tracking-[0.5px] leading-[1.1em]">
                Technical Role Assessment
              </h2>
              <p className="text-white text-[14px] font-light tracking-[0.17px] mt-4">
                Our HR specialists compile information from the relevant
                department that wants to add any new team member to their
                existing team.
              </p>
            </div>

            <div className="py-4 px-6 border hover:border-[#FF00E5] rounded-xl bg-[#320127] border-[#320127] transition-all duration-300">
              <h2 className="text-[19px] md:text-[22px] text-white tracking-[0.5px] leading-[1.1em]">
                Shortlisting Candidates
              </h2>
              <p className="text-white text-[14px] font-light tracking-[0.17px] mt-4">
                Initially, our hiring experts shortlist candidates then look
                into their experience and assess their likelihood of long-term
                retention.
              </p>
            </div>

            <div className="py-4 px-6 border hover:border-[#FF00E5] rounded-xl bg-[#320127] border-[#320127] transition-all duration-300">
              <h2 className="text-[19px] md:text-[22px] text-white tracking-[0.5px] leading-[1.1em]">
                HR Interview
              </h2>
              <p className="text-white text-[14px] font-light tracking-[0.17px] mt-4">
                In this interview, HR has the introductory interview and solely
                assesses the candidate's personality traits.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 py-1 md:py-8 px-1 gap-2 flex flex-col">
            <div className="py-4 px-6 border hover:border-[#FF00E5] rounded-xl bg-[#320127] border-[#320127] transition-all duration-300">
              <h2 className="text-[19px] md:text-[22px] text-white tracking-[0.5px] leading-[1.1em]">
                Technical Interview
              </h2>
              <p className="text-white text-[14px] font-light tracking-[0.17px] mt-4">
                The team lead and project manager will evaluate the soft skills
                and technical expertise of the shortlisted candidates.
              </p>
            </div>

            <div className="py-4 px-6 border hover:border-[#FF00E5] rounded-xl bg-[#320127] border-[#320127] transition-all duration-300">
              <h2 className="text-[19px] md:text-[22px] text-white tracking-[0.5px] leading-[1.1em]">
                Background Checks
              </h2>
              <p className="text-white text-[14px] font-light tracking-[0.17px] mt-4">
                We conduct comprehensive background checks to guarantee
                trustworthiness and a commitment to user privacy and security.
              </p>
            </div>

            <div className="py-4 px-6 border hover:border-[#FF00E5] rounded-xl bg-[#320127] border-[#320127] transition-all duration-300">
              <h2 className="text-[19px] md:text-[22px] text-white tracking-[0.5px] leading-[1.1em]">
                Onboarding
              </h2>
              <p className="text-white text-[14px] font-light tracking-[0.17px] mt-4">
                After confirmation of employee selection, they are introduced to
                the team. Resources are acquainted with the project and smooth
                onboarding is ensured.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 py-1 md:py-8 px-1 gap-2 flex flex-col">
            <div className="mx-auto">
              <Image
                src="/images/industries/how-we-hire/game-dev.webp"
                alt="Herculi"
                width={600}
                height={600}
                className="rounded-2xl h-[365px] w-fill object-cover object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeHire;
