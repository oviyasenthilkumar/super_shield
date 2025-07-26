"use client";

import Image from "next/image";

export default function HardsealHero() {
  return (
    <div className=" bg-white flex flex-col justify-center px-4 md:px-20 py-10 ">
      <div className="flex flex-col lg:flex-row gap-10 items-center max-w-7xl mx-auto">
        {/* Left - Product Image */}
        <div className="mx-auto w-full lg:w-[30%]">
          <Image
            src="/hardseal.webp"
            alt="Supershield DPC ADMIXPLUS"
            width={400}
            height={400}
            className="object-contain w-full max-w-md"
          />
        </div>

        {/* Right - Product Details */}
        <div className="w-full lg:w-[60%] px-3 md:px-0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold poppins mb-4">
            <span className="text-[#C50022]">Supershield</span> HARDSEAL
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 poppins">
            Concrete Hardening, Sealing & Dustproofing Compound
          </h2>
          <p className="text-gray-700 text-justify leading-7 space-y-2 open-sans">
             Supershield HARDSEAL is a concrete hardner, sealer and dustproofing compound based on salts from the catalyzed inorganic chemistry. Supershield Hardseal is a single component ready to use, transparent, chemically reactive water based sealer that penetrates concrete and other masonry building materials to protect, preserve and strengthen them permanently by curing, sealing, hardening, dustproofing, neutralizing alkali and increasing bonding on the subsequent coatings. It is non-toxic and contains no volatile organic compound.
          </p>
        </div>
      </div>
    </div>
  );
}
