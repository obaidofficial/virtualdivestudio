import React from "react";
import Link from "next/link";
import Image from "next/image";

const ColOne = () => {
  return (
    <div className="lg:col-span-2 p-1">
      <Link href="/">
        <Image
          src="/images/logo.webp"
          alt="Virtual Dive Studio Logo"
          width={210}
          height={60}
          className="hidden md:block"
        />
        <Image
          src="/images/logo.webp"
          alt="Virtual Dive Studio Logo"
          width={160}
          height={60}
          className="block md:hidden"
        />
      </Link>
      <div className="mt-6">
        <h3 className="font-bold text-xl text-white mb-3">About Us</h3>
        <p className="text-white text-[15px] tracking-[0.17px] font-light">
          At Virtual Dive Studios, we specialize in crafting immersive digital
          experiences. Our expertise spans game development, game art creation,
          blockchain development, AI/ML services, metaverse development, digital
          twin technology, real-estate experiences, and virtual staging. Explore
          a world of innovation with us.
        </p>
      </div>
    </div>
  );
};

export default ColOne;
