"use client";

import Image from "next/image";

export default function MultisealAdmixplusHero() {
  return (
    <div className=" bg-white flex flex-col justify-center px-4 md:px-20 py-10 ">
      <div className="flex flex-col lg:flex-row gap-10 items-center max-w-7xl mx-auto">
        {/* Left - Product Image */}
        <div className="mx-auto w-full lg:w-[30%]">
          <Image
            src="/MULTISEAL ADMIXPLUS.webp"
            alt="Supershield DPC ADMIXPLUS"
            width={400}
            height={400}
            className="object-contain w-full max-w-md"
          />
        </div>

        {/* Right - Product Details */}
        <div className="w-full lg:w-[60%]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-[#C50022]">Supershield</span> MULTISEAL
            ADMIXPLUS
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
            Self-healing Multifunctional Liquid Crystalline & Hydrophobic
            Waterproofing Admixtures for Concrete
          </h2>
          <p className="text-gray-700 text-justify leading-relaxed space-y-2 open-sans">
            Multiseal Admixplus is a combination of self-healing Dynamic
            Multifunctional crystals and hydrophobic pore lining Admixture that
            provides multi protection for concrete in extreme weather variable
            conditions. Well-suited for structures and infrastructure exposed to
            wet and dry cycles such as bridges and elevated highways and also to
            structures subjected to chemicals and coastal environmental
            conditions.Makes concrete Hydrophobic ,Iceophobic ,Impermeable
            equipping it to withstand the challenges of extreme casting
            conditions while delivering long-term protection against
            environmental stressors.
          </p>
        </div>
      </div>
    </div>
  );
}
