"use client";

import Image from "next/image";

export default function AdmixplusHero() {
  return (
    <div className=" bg-white flex flex-col justify-center px-4 md:px-0 py-10 ">
      <div className="flex flex-col lg:flex-row gap-10 items-center max-w-7xl mx-auto">
        {/* Left - Product Image */}
        <div className="mx-auto w-full lg:w-[30%]">
          <Image
            src="/ADMIXPLUS.webp"
            alt="Supershield DPC ADMIXPLUS"
            width={400}
            height={400}
            className="object-contain w-full max-w-md"
          />
        </div>

        {/* Right - Product Details */}
        <div className="w-full lg:w-[60%]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold poppins mb-4 leading-10">
            <span className="text-[#C50022]">Supershield</span> ADMIXPLUS
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800 leading-7 lg:leading-8">
            Self-healing Multifunctional Liquid Crystalline Waterproofing
            Admixtures for Concrete
          </h2>
          <p className="text-gray-700 text-justify space-y-2 open-sans leading-6">
            Admixplus is engineered to enhance concrete resilience from casting
            to its life cycle in extreme cold and hot climatic conditions. The
            dynamic multifunctional crystalline technology effectively manages
            water, thermal variations, humidity and prevents water freezing
            within fresh and hardened concrete, ensuring long-term durability
            and reducing maintenance for infrastructure exposed to harsh weather
            fluctuations.
          </p>
        </div>
      </div>

      {/* Optional Scroll Note */}
      <div className="text-center mt-12 text-sm text-gray-400 rotate-90 fixed right-4 top-1/2 origin-bottom-right">
        SCROLL
      </div>
    </div>
  );
}
