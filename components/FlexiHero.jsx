"use client";

import Image from "next/image";

export default function FlexiHero() {
  return (
    <div className=" bg-white flex flex-col justify-center px-4 md:px-20 py-10 ">
      <div className="flex flex-col lg:flex-row gap-10 items-center max-w-7xl mx-auto">
        {/* Left - Product Image */}
        <div className="mx-auto w-full lg:w-[30%]">
          <Image
            src="/flexi.webp"
            alt="Supershield DPC ADMIXPLUS"
            width={400}
            height={400}
            className="object-contain w-full max-w-md"
          />
        </div>

        {/* Right - Product Details */}
        <div className="w-full lg:w-[60%] px-3 md:px-0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold poppins mb-4">
            <span className="text-[#C50022]">Supershield</span> FLEXI
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 poppins">
            Two-Component Flexible Cementitious Waterproofing Membrane
          </h2>
          <p className="text-gray-700 text-justify leading-7 space-y-2 open-sans">
             SUPERSHIELD FLEXI is a two-component, flexible cementitious waterproofing membrane consisting of a specialized liquid polymer dispersion and a cementitious powder. These components are mixed just before application. SUPERSHIELD FLEXI is suitable for areas of potential cracking. The initial and final bonding ability of SUPERSHIELD FLEXI is excellent, making it suitable to be applied on horizontal as well as vertical surfaces. It is durable, resistant to frost and UV after setting and at the same time vapor permeable. SUPERSHIELD FLEXI is an active barrier to carbon dioxide (CO2). This will ensure that all crevices and fine cracks are all sealed and waterproofed. SUPERSHIELD FLEXI is not a decorative material. SUPERSHIELD FLEXI is applied to surfaces such as concrete, masonry, and render which have to be sealed and protected against the influence of water and moisture. Owing to its elastic properties, it is used in zones posing cracking or deforming problems. SUPERSHIELD FLEXI is tested for use in drinking water reservoirs.
          </p>
        </div>
      </div>
    </div>
  );
}
