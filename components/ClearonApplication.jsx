"use client";
import Image from "next/image";

const ClearonApplication = () => {
  return (
    <section className="px-3 sm:px-4 md:px-0 py-12 bg-white max-w-7xl mx-auto">
      {/* Applications */}
      <div>
        {/* Applications */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 poppins">
          Applications
        </h2>
        <ul className="space-y-2">
          {[
            "Transparent waterproofing of Balconies and Terraces",
            "Used as a top coat over the waterproofing membranes subjected to pedestrian traffic",
            "Transparent waterproofing of ceramic, glass, and natural stones",
            "Hygiene coating over existing walls",
            "Used as a top coat for bridges, flyovers, tunnel, rail roads to enhance durability",
            "Laminate coating of concrete, steel and wood",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <img
                src="/angle-right.png"
                alt="arrow"
                className="w-3 min-w-3 mt-2"
              />
              <div className="text-gray-800 text-sm md:text-base font-normal leading-7 open-sans">
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
            "Forms a seamless, transparent waterproofing membrane.",
            "Resistant to abrasion and wear conditions yet flexible",
            "One component water based, VOC compliant",
            "High sheen with excellent weather, U.V. Light and water resistance",
            "Water vapour permeable",
            "Excellent resistance to carbonation and chemicals",
            "Low and high temperature stability and accommodate movements",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <img
                src="/angle-right.png"
                alt="arrow"
                className="w-3 min-w-3 mt-2"
              />
              <div className="text-gray-800 text-sm md:text-base font-normal leading-7 open-sans">
                {item}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ClearonApplication;
