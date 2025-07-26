'use client';

import Image from "next/image";

export default function MultisealDryHero() {
  return (
    <div className=" bg-white flex flex-col justify-center px-4 md:px-20 py-10 ">
      <div className="flex flex-col lg:flex-row gap-10 items-center max-w-7xl mx-auto">
        {/* Left - Product Image */}
        <div className="mx-auto w-full lg:w-[30%]">
          <Image
            src="/multiguard.webp"
            alt="Supershield DPC ADMIXPLUS"
            width={400}
            height={400}
            className="object-contain w-full max-w-md"
          />
        </div>
        {/* Right - Product Details */}
        <div className="w-full lg:w-[60%]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 leading-8 poppins">
            <span className="text-[#C50022]">Supershield</span> MULTISEAL
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-gray-800 poppins">
            Self-healing Multifunctional Crystalline Waterproofing and Surface
            Protection for Concrete
          </h2>
          <p className="text-gray-700 text-justify leading-7 text-sm md:text-base font-normal open-sans mb-4">
            SUPERSHIELD MULTISEAL is a unique water-based, environmentally
            friendly waterproofing and protective treatment for concrete. With a
            single application SUEPRSHIELD MULTISEAL guarantees the long-term
            sustainability and durability of concrete structures . The
            protective capabilities of SUPERSHIELD MULTISEAL are a combination
            of hydrophobic, icephobic, and permeability resistant
            characteristics that are made possible through the presence of
            dynamic SHIELD crystals that dynamically respond to environmental
            changes experienced by concrete structures, particularly those
            subjected to periodic wet and dry cycles, such as flyovers, bridges,
            roads, and similar infrastructure. MULTISEAL self-heals concrete
            cracks, effectively addressing moisture infiltration even on the
            negative side. It protects against harsh environmental conditions
            and aggressive chemicals, making it a unique and highly versatile
            solution.
          </p>
        </div>
      </div>
    </div>
  );
}