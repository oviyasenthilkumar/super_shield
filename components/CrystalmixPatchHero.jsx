"use client";

import Image from "next/image";

export default function CrystalmixPatchHero() {
  return (
    <div className=" bg-white flex flex-col justify-center px-4 md:px-20 py-10 ">
      <div className="flex flex-col lg:flex-row gap-10 items-center max-w-7xl mx-auto">
        {/* Left - Product Image */}
        <div className="mx-auto w-full lg:w-[30%]">
          <Image
            src="/crystalpatch.webp"
            alt="Supershield DPC ADMIXPLUS"
            width={400}
            height={400}
            className="object-contain w-full max-w-md"
          />
        </div>
        {/* Right - Product Details */}
        <div className="w-full lg:w-[60%]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold poppins mb-4 leading-8">
            <span className="text-[#C50022]">Supershield</span> CRYSTALPATCH
          </h1>
          <h2 className="text-xl md:text-2xl font-medium poppins mb-6 text-gray-800 leading-7 lg:leading-9">
            Cementitious Crystalline Quick Setting Mortar to Plug Active
            Leakages
          </h2>
          <p className="text-gray-800 text-justify md:leading-7 space-y-2 open-sans leading-6">
            SUPERSHIELD CRYSTALPATCH is a fast-setting, non-shrink cementitious
            compound with a high bond strength. It is specifically designed for
            the efficient patching and repair of concrete structures. It is
            enhanced with SUPERSHIELD Crystalline Waterproofing Technology.
            CRYSTALPATCH is mixed with water to form a mortar consistency that
            is used to stop flowing water in seconds and to effectively seal
            cracks, joints, and other concrete defects. It is used in
            conjunction with Supershield Crystalguard, Ultima, Supershield
            Crystalmix, and other coatings and patching mortars.
          </p>
        </div>
      </div>
    </div>
  );
}
