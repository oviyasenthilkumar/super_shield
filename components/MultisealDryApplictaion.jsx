"use client";
import Image from "next/image";


const MultisealDryApplication = () => {
  return (
    <section className="px-3 sm:px-4 md:px-0 py-12 bg-white max-w-7xl mx-auto">
      {/* Applications */}
          <div>
  {/* Applications */}
  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 poppins">
    Applications
  </h2>
  <ul className="space-y-2 text-sm md:text-base font-normal open-sans">
    {[
      "Airport runways and parking areas",
      "Bridges and highway structures",
      "Flyovers",
      "Tunnels",
      "Multi-story car park decks and structures",
      "Seaports",
      "Marine structures",
      "Buildings",
      "Walkways",
      "Effluent treatment plants",
      
    ].map((item, idx) => (
      <li key={idx} className="flex items-start gap-2 pl-2">
        <img
          src="/angle-right.png"
          alt="arrow"
          className="w-3 min-w-3 mt-2"
        />
        <div className="text-gray-700 text-sm md:text-base font-normal leading-7 open-sans">
          {item}
        </div>
      </li>
    ))}
  </ul>

  {/* Features and Benefits */}
  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-10 mb-4 poppins text-gray-900 leading-9">
    Features and Benefits
  </h2>
  <ul className="space-y-2 text-sm md:text-base font-normal open-sans">
    {[
      "MULTISEAL is easy to apply; just spray with a low-pressure sprayer",
      "It is water-based, non-toxic, and totally environment-safe. It is certified for use in potable water bodies",
      "Provides repellence and multifunctional crystallization",
      "Single application and its permanently active",
      "Self-healing cracks up to 0.5 mm, and waterproof cracks up to 1.2 mm",
      "Provides permanent internal waterproofing and moisture blocking from both positive and negative sources",
      "Protects against damage caused by repeated freezing and thawing cycles",
      "Provides excellent repelling properties against water, jet fuel, and oil penetration from the surface",
      "High resistance against chloride ion penetration and thereby protects reinforcing steel bars against corrosion",
      "High chemical resistance",
      "Reduces alkali silica reactions, thus eliminating silica dusting",
      "Allows concrete to breathe",
      "Enhances the adhesion properties of sealants and coatings",
      "Prevents concrete scaling and premature cracking on concrete surfaces",
      "No appearance changes after the treatment",
      "No further protection is required after the treatment like protective plastering",
      "Prevents the growth of algae and other vegetation",
    ].map((item, idx) => (
      <li key={idx} className="flex items-start gap-2 mb-3 pl-2">
        <img
          src="/angle-right.png"
          alt="arrow"
          className="w-3 min-w-3 mt-2"
        />
        <div className="text-gray-700 text-sm md:text-base font-normal leading-7 open-sans">
          {item}
        </div>
      </li>
    ))}
  </ul>
</div>

    </section>
  )
}

export default MultisealDryApplication;
