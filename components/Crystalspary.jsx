"use client";

import Image from "next/image";

export default function Crystalspary() {
  return (
    <div className=" bg-white flex flex-col justify-center px-4 md:px-20 py-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10 items-center ">
        {/* Left - Product Image */}
        <div className="mx-auto w-full md:w-[30%]">
          <Image
            src="/crystalspray.webp"
            alt="Supershield DPC ADMIXPLUS"
            width={400}
            height={400}
            className="object-contain w-full max-w-md"
          />
        </div>

        {/* Right - Product Details */}
        <div className=" w-full md:w-[60%] px-3 md:px-0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 leading-10 md:leading-8 poppins tracking-wide">
            <span className="text-[#C50022]">Supershield</span> CRYSTALSPRAY
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 poppins">
            Liquid Crystalline Waterproofing Coating for Concrete
          </h2>
          <p className="text-gray-800 text-justify leading-7 space-y-2 open-sans ">
            SUPERSHIELD CRYSTALSPRAY is a single-compound, water-based,
            crystalline waterproofing coating used by itself or in combination
            with Supershield Crystalguard Ultima for a high degree of chemical
            resistance. CRYSTALSPRAY is applied using simple low-pressure
            sprayers. SUPERSHIELD CRYSTALSPRAY can be used as a crystalline
            enhancer in the Supershield Multiseal H System with Supershield
            Multiseal for substrates that need more resistance to high
            hydrostatic pressure. SUPERSHIELD CRYSTALSPRAY can also be
            top-coated with Supershield Clearseal to provide a repellent
            barrier.
          </p>
        </div>
      </div>
      <p className="text-gray-800 text-justify leading-7 space-y-2 open-sans">
        SUPERSHIELD CRYSTALSPRAY, when spray applied, would take advantage of
        its low viscosity and seep into the pores and capillaries of the
        concrete by capillary action, and the active components in the product
        would move further deep into the concrete using the moisture presence
        and the pressure of osmosis. Once the active components are made
        available for the byproducts of the cement inside the concrete matrix,
        they form non-soluble crystals. These crystals block the capillaries and
        minor shrinkage cracks in the concrete to prevent any further water
        ingress (even under pressure). However, the SUPERSHIELD CRYSTALSPRAY
        will still allow the passage of water vapor through the structure (i.e.,
        the concrete will still be able to “breathe”). In addition to
        waterproofing the structure, SUPERSHIELD CRYSTALSPRAY protects concrete
        against seawater, wastewater, aggressive groundwater, and certain
        chemical solutions. SUPERSHIELD CRYSTALSPRAY is approved for use in
        contact with potable water and is therefore suitable for the treatment
        of water storage tanks, reservoirs, water towers, etc
      </p>
    </div>
  );
}
