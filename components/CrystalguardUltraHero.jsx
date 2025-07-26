"use client";

import Image from "next/image";

export default function CrystalguardUltraHero() {
  return (
    <div className=" bg-white flex flex-col justify-center px-4 md:px-20 py-10 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 items-center px-3 md:px-0">
        {/* Left - Product Image */}
        <div className="mx-auto w-full md:w-[30%]">
          <Image
            src="/CRYSTALGUARD-ULTIMA.webp"
            alt="Supershield DPC ADMIXPLUS"
            width={400}
            height={400}
            className="object-contain w-full max-w-md"
          />
        </div>

        {/* Right - Product Details */}
        <div className=" w-full md:w-[60%]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 lg:leading-10 leading-8 poppins tracking-wide">
            <span className="text-[#C50022]">Supershield</span> CRYSTALGUARD
            ULTIMA
          </h1>
          <h2 className="text-xl md:text-2xl leading-8 md:leading-9 font-semibold mb-6 text-gray-800 poppins">
            Self-healing Cementitious Crystalline Waterproofing and Coating with
            Enhanced Performance
          </h2>
          <p className="text-gray-700 text-justify md:leading-7 space-y-2 open-sans leading-6 text-sm md:text-base">
            SUPERSHIELD CRYSTALGUARD ULTIMA is a highly concentrated and
            specially formulated crystalline waterproofing coating for concrete.
            It provides a hard top finish and blocks moisture transmission in
            concrete very quickly by crystallizing. It is mixed with water and
            applied as a slurry coat to the positive or negative side of the
            concrete, either by itself as a single-coat application or as the
            top coat of a two-coat application with Crystalguard. When
            Crystalguard and CRYSTALGUARD ULTIMA are combined in a single
            system, both products complement each other by providing a high
            degree of protection and durability.
          </p>
          <br />
        </div>
      </div>
      <p className="text-gray-700 text-justify md:leading-7 space-y-2 open-sans leading-6 text-sm md:text-base">
        CRYSTALGUARD ULTIMA waterproofs concrete by penetrating deep into the
        concrete and chemically reacting with the by-products of cement
        hydration creating non-soluble, highly resistant, needle-like
        crystalline structures. This makes the concrete highly durable and
        impermeable to water and other liquids from any direction, even under
        extreme hydrostatic pressure. It also protects the concrete from the
        various harsh environmental conditions that it is exposed to. This
        crystalline structure occurs where moisture is present, so at any later
        stage, if cracks form due to settling or shrinkage, the incoming water
        triggers the crystallization process and additional crystals begin to
        grow, and it has the ability to self-heal cracks. However, the
        CRYSTALGUARD ULTIMA layer will still allow the passage of water vapor
        through the structure, allowing the concrete to breathe. CRYSTALGUARD
        ULTIMA is approved for use in contact with potable water
      </p>
    </div>
  );
}
