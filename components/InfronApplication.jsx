"use client";
import Image from "next/image";

const InfronApplication = () => {
  return (
    <section className="px-3 sm:px-4 md:px-0 py-12  max-w-7xl mx-auto">
      {/* Applications */}
      <div>
        {/* Applications */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 poppins ">
          Applications
        </h2>
        <ul className="space-y-2">
          {[
            "Used as a top coat over the waterproofing membranes subjected to pedestrian traffic",
            "Floor coating for covered and open car park decks",
            "Hygiene coating for floors and walls",
            "Protective coating for bridges, flyovers, tunnel, rail roads",
            "Laminate coating for steel and wood",
            "Protection of polyurethane foam insulation",
            "Waterproofing of most surfaces exposed to wear and weathering conditions",
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
            "Resistant to abrasion and wear conditions, yet flexible",
            "Forms a fully bonded, seamless waterproofing membrane",
            "One-component, water-based, and VOC-compliant",
            "High sheen with excellent weather, U.V. light, and water resistance",
            "Water vapor permeable",
            "High solar reflectance",
            "Excellent resistance to carbonation and chemicals",
            "Low and high-temperature stability and accommodating movements",
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

export default InfronApplication;
