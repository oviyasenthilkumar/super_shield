"use client";

import Image from "next/image";

export default function CrystalmixHero() {
  return (
    <div className=" bg-white flex flex-col justify-center px-4 md:px-20 py-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10 items-center ">
        {/* Left - Product Image */}
        <div className="mx-auto w-full md:w-[30%]">
          <Image
            src="/crystalmix.webp"
            alt="Supershield DPC ADMIXPLUS"
            width={400}
            height={400}
            className="object-contain w-full max-w-md"
          />
        </div>

        {/* Right - Product Details */}
        <div className=" w-full md:w-[60%] px-3 md:px-0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 poppins leading-8 md:leading-10">
            <span className="text-[#C50022]">Supershield</span> CRYSTALMIX
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold poppins mb-6 text-gray-800 leading-7 lg:leading-9">
            Cementitious Crystalline Mortar for Repair
          </h2>
          <p className="text-gray-800 text-justify md:leading-7 space-y-2 open-sans leading-6">
            SUPERSHIELD CRYSTALMIX is a high-strength, thick repair mortar
            designed for the patching, resurfacing, and repair of deteriorated
            concrete. It is reinforced with fibers to enhance its durability.
            The formulation of Supershield CRYSTALMIX provides exceptional
            bonding, minimal shrinkage, resistance to chemicals, and high
            strength. The mortar is a single-component material that offers the
            flexibility of being applied either through spraying or troweling.
            SUPERSHIELD CRYSTALMIX’s high-performance features are further
            enhanced by Supershield Crystalline Technology.
          </p>
        </div>
      </div>
    </div>
  );
}
