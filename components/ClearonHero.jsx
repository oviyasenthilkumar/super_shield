"use client";

import Image from "next/image";

export default function CleronHero() {
  return (
    <div className=" bg-white flex flex-col justify-center px-4 md:px-0 py-10 max-w-7xl  mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 items-center ">
        {/* Left - Product Image */}
        <div className="mx-auto w-full lg:w-[30%]">
          <Image
            src="/clearon.webp"
            alt="Supershield DPC ADMIXPLUS"
            width={400}
            height={400}
            className="object-contain w-full max-w-md"
          />
        </div>
        {/* Right - Product Details */}
        <div className="w-full lg:w-[60%]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 leading-8 lg:leading-10 poppins">
            <span className="text-[#C50022]">Supershield</span> CLEARON
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 leading-7 poppins">
            Transparent Abrasion and Wear Resistant Protective Coatings
          </h2>

          {/* Intro Paragraph */}
          <p className="text-gray-800 text-justify md:leading-7 text-sm md:text-base font-normal open-sans mb-4 leading-6">
            SUPERSHIELD CLEARON is a one-component, waterborne, liquid-applied
            protective coating that is transparent, abrasion-resistant, and
            wear-resistant. It is versatile for various applications, including:
          </p>

          {/* Bullet List */}
          <ul className="list-disc pl-2 space-y-2 text-sm md:text-base open-sans text-gray-700 ">
            <li className="flex items-start gap-2  ">
              <img
                src="/angle-right.png"
                alt="arrow"
                className="w-3 min-w-3 mt-2"
              />
              <div className="text-gray-700 text-sm md:text-base font-normal open-sans ">
                Waterproofing tiled substrates without the need for removal
              </div>
            </li>
            <li className="flex items-start gap-2  ">
              <img
                src="/angle-right.png"
                alt="arrow"
                className="w-3 min-w-3 mt-2"
              />
              <div className="text-gray-700 text-sm md:text-base font-normal open-sans ">
                Top coating for protective membranes on buildings and
                infrastructure exposed to wear and weathering
              </div>
            </li>
            <li className="flex items-start gap-2  ">
              <img
                src="/angle-right.png"
                alt="arrow"
                className="w-3 min-w-3 mt-2"
              />
              <div className="text-gray-700 text-sm md:text-base font-normal open-sans ">
                Hygiene coatings for the food and pharmaceutical industries
              </div>
            </li>
            <li className="flex items-start gap-2  ">
              <img
                src="/angle-right.png"
                alt="arrow"
                className="w-3 min-w-3 mt-2"
              />
              <div className="text-gray-700 text-sm md:text-base  font-normal open-sans ">
                Laminate coating to protect and enhance concrete, wood, and
                steel surfaces
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Extended Description */}
      <p className="text-gray-800 text-justify md:leading-8 open-sans leading-7 text-sm md:text-base mt-0 md:mt-5">
        SUPERSHIELD CLEARON is available in both glossy and matte finishes. When
        applied, it forms a seamless, durable coating that provides effective,
        long-term protection. CLEARON is formulated with SUPERSHIELD WAPELASTIC
        TECHNOLOGY, which integrates long-chain polyurethane macromolecules into
        a water-based medium to create a stable dispersion. This advanced
        technology merges the high performance of polyurethane with the ease of
        application of a one-component, water-based coating. Upon application,
        SUPERSHIELD CLEARON forms a seamless, durable coating that provides
        efficient, long-lasting protection.
      </p>
    </div>
  );
}
