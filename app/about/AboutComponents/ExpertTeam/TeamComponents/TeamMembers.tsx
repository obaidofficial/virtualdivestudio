import React from "react";
import Image from "next/image";

type Props = {
  data: {
    id: number;
    title: string;
    image: string;
  };
};

const TeamMembers = ({ data }: Props) => {
  return (
    <div className="rounded-2xl m-3.5 border border-[#ef41de] bg-linear-to-b from-[#1e001b] to-[#0C000A]">
      <div className="mx-auto">
        <Image
          src={data.image}
          alt={data.title}
          width={600}
          height={600}
          className="rounded-2xl rounded-b-none h-[620px] w-fill object-cover"
        />
      </div>

      <div className="px-6 pt-3 pb-6">
        <div>
          <h4 className="text-[20px] md:text-[24px] pt-3 text-[#ffffff] leading-[1.3em] tracking-[0.1px]">
            {data.title}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
