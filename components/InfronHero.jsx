"use client";

import Image from "next/image";

export default function InfronHero() {
  return (
    <div className=" bg-white flex flex-col justify-center px-4 md:px-20 py-10 ">
      <div className="flex flex-col lg:flex-row gap-10 items-center max-w-7xl mx-auto">
        {/* Left - Product Image */}
        <div className="mx-auto w-full lg:w-[30%]">
          <Image
            src="/infron.webp"
            alt="Supershield DPC ADMIXPLUS"
            width={400}
            height={400}
            className="object-contain w-full max-w-md"
          />
        </div>
        {/* Right - Product Details */}
        <div className="w-full lg:w-[60%]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl poppins font-semibold mb-4 leading-8">
            <span className="text-[#C50022]">Supershield</span> INFRON
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold poppins mb-6 text-gray-800">
            Abrasion and Wear Resistant Water-Based Protective Coatings
          </h2>
          <p className="text-gray-700 text-justify md:leading-7 space-y-2 text-sm md:text-base font-normal open-sans leading-6">
            SUPERSHIELD INFRON is a one-component, waterborne, liquid-applied
            coating designed to provide exceptional abrasion and wear
            resistance. It is suitable for a variety of applications, including
            top coats for protective membranes on buildings and infrastructure
            exposed to wear and weathering, hygiene coatings for the food and
            pharmaceutical industries, and as a laminate coating for enhancing
            and protecting wood and steel surfaces. INFRON is formulated with
            SUPERSHIELD WAPELASTIC TECHNOLOGY, which integrates long-chain
            polyurethane macromolecules into a water-based medium to create a
            stable dispersion. This advanced technology merges the high
            performance of polyurethane with the ease of application of a
            one-component, water-based coating. Utilizing a 100% aliphatic
            polyurethane dispersion, WAPELASTIC TECHNOLOGY delivers excellent
            sheen, UV resistance, and long-term protection. Upon application,
            SUPERSHIELD INFRON forms a seamless, durable coating that provides
            efficient, long-lasting protection.
          </p>
        </div>
      </div>
    </div>
  );
}
