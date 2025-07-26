"use client";
import Image from "next/image";

export default function RoofonHero() {
  return (
    <div className=" bg-white flex flex-col justify-center px-4 md:px-20 py-10 ">
      <div className="flex flex-col lg:flex-row gap-10 items-center max-w-7xl mx-auto">
        {/* Left - Product Image */}
        <div className="mx-auto w-full lg:w-[30%]">
          <Image
            src="/roofon.webp"
            alt="Supershield DPC ADMIXPLUS"
            width={400}
            height={400}
            className="object-contain w-full max-w-md"
          />
        </div>
        {/* Right - Product Details */}
        <div className="w-full lg:w-[60%]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold poppins mb-4 leading-8">
            <span className="text-[#C50022]">Supershield</span> ROOFON
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 poppins">
            Eco-friendly, Waterproofing and Protective Coating for Roofs, Walls
            and Concrete
          </h2>
          <p className="text-gray-700 text-justify md:leading-7 space-y-2 open-sans text-sm md:text-base font-normal leading-6">
            SUPERSHIELD ROOFON is a cold-applied, one-component, waterborne
            liquid coating designed for waterproofing and protecting roofs,
            walls, and concrete infrastructures. It forms a resilient barrie is a one-component, waterborne, liquid-applied protective coating that is transparent, abrasion-resistant, and wear-resistant. It is vr
            that waterproofs the substrate, shields it from weather and
            atmospheric degradation, and functions as a cool roof coating due to
            its reflective properties. SUPERSHIELD ROOFON is formulated with
            WAPELASTIC TECHNOLOGY, which incorporates long-chain polyurethane
            macromolecules into a water-based medium to create a stable
            dispersion. This technology combines the high performance of
            polyurethane with the ease of application of a one-component,
            water-based coating. The result is an ecological, low-VOC, and
            environmentally friendly product. SUPERSHIELD ROOFON maintains its
            elasticity, bridging and sealing hairline cracks. Developed from a
            100% aliphatic polyurethane dispersion, it offers excellent UV
            resistance and does not require an additional topcoat for UV
            protection.
          </p>
        </div>
      </div>
    </div>
  );
}
