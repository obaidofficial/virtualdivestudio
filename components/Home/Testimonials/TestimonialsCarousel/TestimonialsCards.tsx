import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: {
    id: number;
    name: string;
    image: string;
    review: string;
  };
};

const TestimonialsCards = ({ data }: Props) => {
  return (
    <div className="rounded-2xl m-3 px-4 py-8 text-center mx-30 bg-[#170012]/80 backdrop-blur-lg shadow-lg">
      <div className="px-6 pt-3 pb-6">
        <p className="text-[24px] font-light text-white leading-[1.5em] tracking-[0.1px] italic">
          <span>"</span>
          {data.review}
          <span>"</span>
        </p>
      </div>

      <div className="flex flex-col items-center">
        <Image
          src={data.image}
          alt={data.name}
          width={140}
          height={140}
          className="rounded-full object-cover h-[90px] w-[90px] object-top border-5 border-[#fcb4f57c] shadow-md"
        />
        <h4 className="text-[16px] md:text-[20px] pt-3 text-white leading-[1.3em] tracking-[0.1px]">
          {data.name}
        </h4>
      </div>
    </div>
  );
};

export default TestimonialsCards;
