import React from "react";
import Image from "next/image";

const DevelopmentProcess = () => {
  return (
    <div className="bg-[#170012] pt-16 pb-16">
      <div className="pt-6 w-[94%] lg:w-[90%] mx-auto pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-2">
          <div className="lg:col-span-6 py-2.5 px-4 flex flex-col items-center">
            <Image
              src="/images/developmentProcess/Our-Process.webp"
              alt="Development Process"
              width={500}
              height={60}
              className="rounded-lg"
            />
          </div>

          <div className="lg:col-span-6 py-2.5 px-4 flex flex-col justify-center">
            <h2 className="text-[28px] md:text-[32px] lg:text-[42px] text-white tracking-[0.5px] leading-[1.1em]">
              Our Development Process
            </h2>
            <p className="text-white text-[16px] lg:text-[20px] font-light tracking-[0.17px] mt-4">
              A series of clear steps that will help to achieve the smooth
              delivery of a project.
            </p>
            <h4 className="text-[20px] md:text-[28px] leading-[1.1em] text-[#ef41de] mt-4">
              Project Planning
            </h4>
            <p className="text-white text-[15px] lg:text-[18px] font-light tracking-[0.17px] mt-2">
              Our team of specialists will meet with you and draft a plan to
              implement the project including the planning and the assignment of
              tasks to the individuals. To reduce the complexity and to avoid
              obstacles in the communication, normally the criteria of the
              customer are the ones followed to the maximum to get the project
              done.
            </p>

            <h4 className="text-[20px] md:text-[28px] leading-[1.1em] text-[#ef41de] mt-4">
              Design and Development
            </h4>
            <p className="text-white text-[15px] lg:text-[18px] font-light tracking-[0.17px] mt-2">
              This is the place where our artists and designers come into play!
              They will meticulously design the distinct characters, the
              captivating images, and the delicious environments to make the
              final product appealing. Then, the designs are given to the
              developers so that they can turn their imagination into reality by
              writing the code.
            </p>

            <h4 className="text-[20px] md:text-[28px] leading-[1.1em] text-[#ef41de] mt-4">
              QA and Launch
            </h4>
            <p className="text-white text-[15px] lg:text-[18px] font-light tracking-[0.17px] mt-2">
              After the creation and development, the quality team will check it
              with various users and on different devices to be sure that the
              app is working perfectly. Any bugs are ironed out in the process
              so an app that is easy to use, up-to-date and bug-free is ready to
              be launched.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentProcess;
