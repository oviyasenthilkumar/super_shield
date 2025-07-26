"use client";

import Image from "next/image";

export default function WapprimeHero() {
  return (
    <div className=" bg-white flex flex-col justify-center px-4 md:px-20 py-10 ">
      <div className="flex flex-col lg:flex-row gap-10 items-center max-w-7xl mx-auto">
        {/* Left - Product Image */}
        <div className="mx-auto w-full lg:w-[30%]">
          <Image
            src="/wapprime.webp"
            alt="Supershield DPC ADMIXPLUS"
            width={400}
            height={400}
            className="object-contain w-full max-w-md"
          />
        </div>

        {/* Right - Product Details */}
        <div className="w-full lg:w-[60%]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 leading-8 poppins">
            <span className="text-[#C50022]">Supershield</span> WAPPRIME
          </h1>
          <h2 className="text-xl md:text-2xl poppins font-semibold mb-6 text-gray-800">
            Water-based Polyurethane Primer for Waterproofing
          </h2>
          <p className="text-gray-700 text-justify md:leading-7 space-y-2 open-sans  font-normal leading-6">
            SUPERSHIELD WAPPRIME is a one-component, water-based primer that is
            transparent, semi-rigid, and deep-penetrating, specifically designed
            for waterproofing and floor coating applications. It excels in
            creating strong adhesion between substrates and subsequent coatings
            while also serving effectively as a sealer coat. Formulated with
            Supershield WAPELASTIC technology, SUPERSHIELD WAPPRIME uses 100%
            aliphatic polyurethane dispersion to provide exceptional sheen, UV
            resistance, and durability. This advanced technology ensures that
            long-chain polyurethane macromolecules are stably dispersed in
            water, blending the durability of polyurethane with the ease of
            application of a water-based coating. The result is a low-VOC,
            eco-friendly primer that adheres to the highest performance
            standards and emphasizes environmental safety.
          </p>
        </div>
      </div>
    </div>
  );
}
