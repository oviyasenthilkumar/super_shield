"use client";

import Image from "next/image";

export default function BondplaseHero() {
  return (
    <div className=" bg-white flex flex-col justify-center px-4 md:px-20 py-10 ">
      <div className="flex flex-col lg:flex-row gap-10 items-center max-w-7xl mx-auto">
        {/* Left - Product Image */}
        <div className="mx-auto w-full lg:w-[30%]">
          <Image
            src="/bondplast.webp"
            alt="Supershield DPC ADMIXPLUS"
            width={400}
            height={400}
            className="object-contain w-full max-w-md"
          />
        </div>

        {/* Right - Product Details */}
        <div className="w-full lg:w-[60%] px-3 md:px-0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold poppins mb-4">
            <span className="text-[#C50022]">Supershield</span> BONDPLAST
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 poppins">
            Multi Purpose Polymer dispersion
          </h2>
          <p className="text-gray-700 text-justify leading-7 space-y-2 open-sans">
             SUPERSHIELD BONDPLAST is a Multipurpose high solids, polymer dispersion, specially designed for fortifying Portland cement compositions, used in primer waterproofing coating, waterproofing plastering, anticorrosive coating, Industrial flooring, Tile adhesives and in repair mortars. SUPERSHIELD BONDPLAST improves curing qualities, enhances bond and strength, Imparts excellent water and weather resistance, and reduces shrinkage cracking.
          </p>
        </div>
      </div>
    </div>
  );
}
