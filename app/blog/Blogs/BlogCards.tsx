import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  blogdata: {
    id: number;
    url: string;
    title: string;
    image: string;
    description: string;
  };
};

const BlogCards = ({ blogdata }: Props) => {
  return (
    <div className="col-span-1 h-full rounded-2xl m-1 border border-[#ef41de] bg-linear-to-b from-[#1e001b] to-[#5f0055] hover:from-[#5f0055] hover:to-[#1e001b]">
      <Link href={`/${blogdata.url}`}>
        <div className="mx-auto">
          <Image
            src={blogdata.image}
            alt={blogdata.title}
            width={600}
            height={600}
            className="rounded-2xl rounded-b-none"
          />
        </div>

        <div className="px-6 pt-3 pb-1">
          <div>
            <h4 className="text-[20px] md:text-[24px] pt-3 text-[#ffffff] leading-[1.1em] tracking-[0.1px]">
              {blogdata.title}
            </h4>
            <p className="text-[16px] font-light pt-2 text-white leading-[1.4em] tracking-[0.1px]">
              {blogdata.description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCards;
