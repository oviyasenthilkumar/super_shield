"use client";

import Image from "next/image";

export default function SealonHero() {
  return (
    <div className=" bg-white flex flex-col justify-center px-4 md:px-20 py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
        {/* Left - Product Image */}
        <div className="flex justify-center">
          <Image
            src="/sealon.webp"
            alt="Supershield DPC ADMIXPLUS"
            width={400}
            height={400}
            className="object-contain w-full max-w-md"
          />
        </div>
        {/* Right - Product Details */}
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold poppins mb-4 leading-8">
            <span className="text-[#C50022]">Supershield</span> SEALON
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-gray-800 poppins">
            High Elastic Polyurethane Sealant
          </h2>
          <p className="text-gray-700 text-justify leading-7 text-sm md:text-base open-sans mb-4">
            SUPERSHIELD SEALON is a single-component, moisture-curing, and
            fast-hardening polyurethane sealant featuring a medium-to-high
            modulus of elasticity. It remains permanently elastic while offering
            high surface hardness, making it both tear- and weather-resistant.
            SEALON is ideal for adhesion of Swellbar at expansion joints on
            terraces and balconies, as well as for filling joints on
            prefabricated walls. It is also suitable for use on wooden, steel,
            aluminum, copper, and plastic materials, as well as plasters and
            other substrates.
          </p>
        </div>
      </div>
    </div>
  );
}
