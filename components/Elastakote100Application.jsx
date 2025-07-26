"use client";
import Image from "next/image";

const Elastakote100Application = () => {
  return (
    <section className="px-3 sm:px-4 md:px-0 py-12 bg-white max-w-7xl mx-auto">
      <div>
        {/* Applications */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 poppins md:leading-8 lg:leading-10">
          Applications
        </h2>
        <ul className="space-y-2">
          {[
            "Architectural and protective coatings for bridges, flyovers, tunnels and other infrastructures",
            "Exposed roof waterproofing solutions in both new construction and refurbishment projects",
            "Exposed roofs with many details and complex geometry when accessibility is limited",
            "Reflective coatings to enhance energy efficiency by reducing cooling cost",
            "Side walls/ Slope roofs/ Parapet walls",
            "Protection of polyurethane foam insulation",
            "Substrates: Cementitious, brick, stone, metal and existing bituminous membranes",
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <img
                src="/angle-right.png"
                alt="arrow"
                className="w-3 min-w-3 mt-2"
              />
              <div className="text-gray-700 text-sm md:text-base  font-normal leading-7 open-sans">
                {item}
              </div>
            </li>
          ))}
        </ul>
        {/* Features and Benefits */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl md:leading-8 lg:leading-10 font-semibold mt-10 mb-4 poppins text-gray-900">
          Features and Benefits
        </h2>
        <ul className="space-y-2">
          {[
            "One component water based, VOC complaint",
            "Excellent weather, UV light, and water resistance",
            "Forms fully bonded seamless membrane without joints",
            "High sheen with excellent weather, U.V. Light and water resistance",
            "Flexible coating accommodates substrate movements and bridges cracks",
            "Water vapor permeable",
            "The waterproofed surface can take light foot traffic",
            "Provides high solar reflectance",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <img
                src="/angle-right.png"
                alt="arrow"
                className="w-3 min-w-3 mt-2"
              />
              <div className="text-gray-700 text-sm md:text-base  font-normal leading-7 open-sans">
                {item}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Elastakote100Application;
