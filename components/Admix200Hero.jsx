"use client";

import Image from "next/image";

export default function Admix200Hero() {
  return (
    <div className=" bg-white flex flex-col justify-center px-4 md:px-20 py-10 ">
      <div className="flex flex-col lg:flex-row gap-10 items-center max-w-7xl mx-auto px-3 md:px-0">
        {/* Left - Product Image */}
        <div className="mx-auto w-full lg:w-[30%]">
          <Image
            src="/admix200.webp"
            alt="Supershield DPC ADMIXPLUS"
            width={400}
            height={400}
            className="object-contain w-full max-w-md"
          />
        </div>

        {/* Right - Product Details */}
        <div className="w-full lg:w-[60%]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 leading-8 poppins">
            <span className="text-[#C50022]">Supershield</span> ADMIX 200
          </h1>
          <h2 className="text-xl md:text-2xl leading-8 md:leading-9 font-semibold mb-6 text-gray-800 poppins">
            Self-healing Cementitious Crystalline Admixture for Concrete,
            Specifically for OPC Based Concrete Mix
          </h2>
          <p className="text-gray-700 text-justify md:leading-7 space-y-2 open-sans leading-6 text-sm md:text-base">
            SUPERSHIELD ADMIX 200 is a chemical admixture for waterproofing,
            protecting and improving the durability of concrete. The proprietary
            blend of chemicals in SUPERSHIELD ADMIX 200 reacts with the moisture
            and the by products of cement hydration to form a highly resistant
            crystalline formation that becomes an integral part of the concrete
            and acts as an impermeable barrier against water and other
            chemicals. Thus the concrete becomes permanently sealed against
            penetration of water and other chemicals from any direction. This
            crystalline structure occurs where moisture is present, so later if
            cracks form due to settling or shrinkage the incoming water triggers
            the crystallization process and additional crystals begin to grow.
            Supershield ADMIX 200 is specially designed for waterproofing
            concrete with self-healing properties. Specifically formulated for
            Type 1 cements (OPC-based concrete mixes) in projects where a normal
            to mild retarded set is required.
          </p>
        </div>
      </div>
    </div>
  );
}
