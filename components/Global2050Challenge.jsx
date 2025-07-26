"use client";

import Image from "next/image";

export default function Global2050Challenge() {
  return (
    <section className="px-4 lg:px-12 md:py-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2  gap-10">
        {/* Left content */}
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl sm:leading-8 md:leading-9 lg:leading-10 font-semibold mb-4 poppins">
            The Global 2050 Challenge
          </h2>
          <p className="text-gray-700 mb-4 open-sans leading-6 lg:leading-7">
            The construction industry plays a pivotal role in the fight against
            climate change, with concrete alone contributing nearly 8% of global
            CO₂ emissions. Achieving net-zero embodied carbon by 2050 requires
            urgent and innovative solutions to transform how we build and
            maintain infrastructure.
          </p>
          <p className="text-gray-700 open-sans leading-7">
            At SUPERSHIELD, we are committed to driving this change through our
            advanced SHIELD Crystalline Technology, which significantly reduces
            the carbon footprint of concrete, extends its lifespan, and
            eliminates the need for high-emission waterproofing materials.
          </p>
        </div>

        {/* Right image */}
        <div className="w-full">
          <Image
            src="/NetZero-2050-sustainable-concrete.webp"
            alt="Net Zero 2050"
            width={600}
            height={600}
            className=" object-cover"
          />
        </div>
      </div>
    </section>
  );
}
