"use client";
import Image from "next/image";

const wapprimeApplication = () => {
  return (
    <section className="px-3 sm:px-4 md:px-0 py-12 bg-white max-w-7xl mx-auto">
      {/* Applications */}
      <div>
        {/* Applications */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 poppins">
          Applications
        </h2>
        <ul className="space-y-2 Transparent waterproofing for balconies and terraces">
          {[
            "Transparent waterproofing for balconies and terraces",
            "Used as a top coat over the waterproofing membranes subjected to pedestrian traffic",
            "Transparent waterproofing for ceramic, glass, and natural stones",
            "Hygiene coating over existing walls",
            "Used as a top coat for bridges, flyovers, tunnels, and rail roads to enhance durability",
            "Laminate coating of concrete, steel, and wood",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <img
                src="/angle-right.png"
                alt="arrow"
                className="w-4 min-w-4 mt-2"
              />
              <div className="text-gray-700 text-sm md:text-base  font-normal leading-7 open-sans">
                {item}
              </div>
            </li>
          ))}
        </ul>

        {/* Features and Benefits */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-10 mb-4 poppins text-gray-900">
          Features and Benefits
        </h2>
        <ul className="space-y-2">
          {[
            "Easy application (roller or airless spray)",
            "Water-based and VOC-compliant",
            "Quick drying",
            "Deep penetrating",
            "Excellent anchoring to absorbent surfaces",
            "It is heat and frost-resistant.",
            "It seals the substrate and prevents dust formation.",
            "It has low and high temperature stability.",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <img
                src="/angle-right.png"
                alt="arrow"
                className="w-4 min-w-4 mt-2"
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

export default wapprimeApplication;
