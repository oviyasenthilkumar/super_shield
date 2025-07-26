"use client";

import Image from "next/image";

export default function ElastakoteHero() {
  return (
    <div className=" bg-white flex flex-col justify-center px-4 md:px-20 py-10 ">
      <div className="flex flex-col lg:flex-row gap-10 items-center max-w-7xl mx-auto">
        {/* Left - Product Image */}
        <div className="mx-auto w-full lg:w-[30%]">
          <Image
            src="/elastakote.webp"
            alt="Supershield DPC ADMIXPLUS"
            width={400}
            height={400}
            className="object-contain w-full max-w-md"
          />
        </div>
        {/* Right - Product Details */}
        <div className="w-full lg:w-[60%]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 leading-8 md:leading-9 poppins">
            <span className="text-[#C50022]">Supershield</span> ELASTAKOTE
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-gray-800 leading-7 md:leading-8 poppins">
            Eco-friendly Liquid-Applied Waterproofing Membrane for Roofs, Walls
            and Concrete
          </h2>
          <p className="text-gray-800 text-justify md:leading-7 text-sm md:text-base font-normal space-y-1 open-sans leading-6">
            SUPERSHIELD ELASTAKOTE is a cold applied, one component waterborne
            liquid applied waterproofing membrane that is easily applied to form
            a resilient barrier over concrete and masonry roofs and walls.
            SUPERSHIELD ELASTAKOTE will waterproof the substrate, protect it
            from weather and atmospheric degradation and also acts as a cool
            roof coating owing to its reflective properties. ELASTAKOTE will
            remain elastic and will bridge and seal hairline cracks. SUPERSHIELD
            ELASTAKOTE is based on innovative SUPERSHIELD PUMO (Polyurethane
            Modified) technology that is developed based on the modification of
            aliphatic polyurethane dispersion with excellent U.V resistance and
            does not require any top coat.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 space-y-2 mt-10 text-gray-800 leading-8 poppins">
          PUMO TECHNOLOGY
        </h2>
        <p className="text-gray-700 text-justify md:leading-7 text-sm md:text-base font-normal space-y-1 open-sans leading-6">
          Our PUMO TECHNOLOGY enables long-chain polyurethane macromolecules to
          be incorporated in a water medium, forming stable dispersion. PUMO
          TECHNOLOGY combines the high performance of the poly urethane
          dispersion with the application ease of a one-component water-based
          coating in an ecological, low-VOC, environmentally friendly product.
        </p>
      </div>
    </div>
  );
}
