"use client";

import Image from "next/image";

export default function ThermokoteHero200() {
  return (
    <div className=" bg-white flex flex-col justify-center px-4 md:px-20 py-10 ">
      <div className="flex flex-col lg:flex-row gap-10 items-center max-w-7xl mx-auto">
        {/* Left - Product Image */}
        <div className="mx-auto w-full lg:w-[30%]">
          <Image
            src="/thermokote200.webp"
            alt="Supershield DPC ADMIXPLUS"
            width={400}
            height={400}
            className="object-contain w-full max-w-md"
          />
        </div>
        {/* Right - Product Details */}
        <div className="w-full lg:w-[60%]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 leading-7 md:leading-9 poppins">
            <span className="text-[#C50022]">Supershield</span> THERMOKOTE 200
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 leading-7 md:leading-8 poppins">
            Thermal Insulation and Protective Coatings for Interior Walls
          </h2>
          <p className="text-gray-700 text-justify md:leading-7 space-y-2 open-sans leading-6">
            Supershield THERMOKOTE 200 is a one component waterborne liquid
            applied insulation coating with high reflectivity, emissivity and
            very low conductivity. It is designed to insulate both hot and cold
            in a single application. THERMOKOTE is installed just like any other
            coating products with brush or a spraying machine. Once installed
            the coating becomes a seamless continuous monolithic membrane, which
            provides not only insulation, but also acts a waterproof, fire
            resistant and noise reduction system. Supershield Thermokote 200 is
            a highly durable flexible coating developed from advanced resins
            that are based on Supershield CROSSLINK Technology and filled with
            Supershield formulated vacuumed multi ceramic molecules. Thermokote
            is further enhanced with Supershield Enviro-Stable film technology
            which provides excellent resistance to dirt, mold, mildew and
            carbonation.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 space-y-2 mt-10 text-gray-800 poppins">
          CROSSLINK TECHNOLOGY
        </h2>
        <p className="text-gray-700 text-justify md:leading-7 space-y-2 open-sans leading-6">
          Our CROSSLINK TECHNOLOGY enables, long-chain polyurethane
          macromolecules to be incorporated in a water medium, forming a stable
          dispersion. CROSSLINK combines the high performance of the
          polyurethane dispersion with the application ease of a one-component
          water-based coating, in an ecological, low VOC, environmentally
          friendly product. The unique properties of CROSSLINK make THERMOKOTE
          exceptionally durable and resistant to UV, weather, and water; as a
          result, it prevents corrosion and surface deterioration.
        </p>
      </div>
    </div>
  );
}
