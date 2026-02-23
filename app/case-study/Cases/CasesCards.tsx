import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  casedata: {
    id: number;
    url: string;
    title: string;
    image: string;
    description: string;
  };
};

const CasesCards = ({ casedata }: Props) => {
  return (
    <div className="col-span-1 rounded-2xl m-2.5 border border-[#ef41de] bg-linear-to-b from-[#1e001b] to-[#5f0055]">
      <Link href={`/${casedata.url}`}>
        <div className="mx-auto">
          <Image
            src={casedata.image}
            alt={casedata.title}
            width={600}
            height={600}
            className="rounded-2xl rounded-b-none h-[280px] w-fill object-cover hover:brightness-70"
          />
        </div>

        <div className="px-6 pt-3 pb-6">
          <div>
            <h4 className="text-[24px] md:text-[28px] pt-3 text-[#ef41de] leading-[1.3em] tracking-[0.1px]">
              {casedata.title}
            </h4>
            <p className="text-[16px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px]">
              {casedata.description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CasesCards;
