"use client";

import Image from "next/image";

export default function crystalguardHero() {
  return (
    <div className=" bg-white flex flex-col justify-center px-4 md:px-20 py-10 ">
      <div className="flex flex-col lg:flex-row gap-10 items-center max-w-7xl mx-auto px-3 md:px-0">
        {/* Left - Product Image */}
        <div className="mx-auto w-full md:w-[30%]">
          <Image
            src="/crystalguard.webp"
            alt="Supershield DPC ADMIXPLUS"
            width={400}
            height={400}
            className="object-contain w-full max-w-md"
          />
        </div>

        {/* Right - Product Details */}
        <div className="w-full lg:w-[60%]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 leading-8 poppins">
            <span className="text-[#C50022]">Supershield</span> CRYSTALGUARD
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 poppins">
            Self-healing Cementitious Crystalline Waterproofing Coating
          </h2>
          <p className="text-gray-800 text-justify md:leading-7 space-y-2 open-sans leading-6 text-sm md:text-base">
            SUPERSHIELD CRYSTALGUARD is a single-compound self-healing
            cementitious crystalline waterproofing coating that is mixed with
            water and applied as a slurry coat to the positive or negative side
            of the concrete to waterproof and protect it. It is either applied
            as a two-coat application or as the first coat of a two-coat
            application. SUPERSHIELD CRYSTALGUARD waterproofs concrete by
            penetrating deep into the concrete and chemically reacting with the
            by-products of cement hydration creating a non-soluble, highly
            resistant, needle-like crystalline structure. This makes the
            concrete highly durable and impermeable to water and other liquids
            from any direction, even under extreme hydrostatic pressure. It also
            protects the concrete from the various harsh environmental
            conditions that it is exposed to. The crystalline structure occurs
            where moisture is present, so at any later stage, if cracks form due
            to settling or shrinkage, the incoming water triggers the
            crystallization process and additional crystals begin to grow, and
            it has the ability to self-heal cracks. However, the SUPERSHIELD
            CRYSTALGUARD layer will still allow the passage of water vapor
            through the structure, allowing the concrete to breathe.
          </p>
        </div>
      </div>
    </div>
  );
}
