"use client";

import Image from "next/image";

export default function DPCAdmixplusHero() {
  return (
    <div className=" bg-white flex flex-col justify-center px-4 md:px-20 py-10 ">
      <div className="flex flex-col lg:flex-row gap-10 items-center max-w-7xl mx-auto">
        {/* Left - Product Image */}
        <div className="mx-auto w-full lg:w-[30%]">
          <Image
            src="/DPC-ADMIXPLUS.webp"
            alt="Supershield DPC ADMIXPLUS"
            width={400}
            height={400}
            className="object-contain w-full max-w-md"
          />
        </div>

        {/* Right - Product Details */}
        <div className="w-full lg:w-[60%] px-3 md:px-0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold poppins mb-4">
            <span className="text-[#C50022]">Supershield</span> DPC ADMIXPLUS
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 poppins">
            Self-healing Liquid Crystalline Waterproofing Admixtures for
            Concrete
          </h2>
          <p className="text-gray-800 text-justify leading-7 font-normal space-y-2 open-sans text-sm md:text-base">
            SUPERSHIELD DPC ADMIXPLUS is a liquid crystalline chemical admixture
            for waterproofing, protecting and improving the durability of
            concrete. The proprietary blend of chemicals in DPC ADMIXPLUS reacts
            with the moisture and the by-products of cement hydration to form a
            highly resistant crystalline formation that becomes an integral part
            of the concrete and acts as an impermeable barrier thus the concrete
            becomes permanently sealed against the penetration of water and
            other chemicals from any direction.
          </p>
          <p className="text-gray-800 text-justify leading-7 font-normal mt-4 open-sans text-sm md:text-base">
            SUPERSHIELD ADMIXPLUS is specifically formulated to meet all modern
            concrete practices that incorporate additives and other
            supplementary cementitious materials. For most concrete mix designs
            adding DPC ADMIXPLUS will have minimal or no effect on setting time.
          </p>
        </div>
      </div>
    </div>
  );
}
