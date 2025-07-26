"use client";
import Image from "next/image";

const FlexiApplication = () => {
  return (
    <section className="px-3 sm:px-4 md:px-12 py-12 bg-white max-w-7xl mx-auto">

          <div>
  {/* Applications */}
  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 poppins">
    Applications
  </h2>
  <ul className="space-y-2">
    {[
      "Waterproofing of concrete basins used for containing water",
      "Waterproofing bathrooms, showers, balconies, terraces, swimming pools, etc. before laying ceramic tile finishes",
      "Waterproofing of construction joints and horizontal and vertical junctions",
      "Flexible smoothing layer for light-sectioned concrete structures, including those subjected to minor deformation when under load (eg. pre-cast panels)",
      "Protection of renders or concrete with cracks caused by shrinkage, against the infiltration of water and aggressive atmospheric elements",
      "Protection against the penetration of carbon dioxide, of concrete pillars, beams, and road and railway viaducts.",  
    ].map((item, idx) => (
      <li key={idx} className="flex items-start gap-2">
        <img
          src="/angle-right.png"
          alt="arrow"
          className="w-3 min-w-3 mt-2"
        />
        <div className="text-gray-700 text-base font-normal leading-7 open-sans">
          {item}
        </div>
      </li>
    ))}
  </ul>

  {/* Features and Benefits */}
  <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4 poppins text-gray-900">
    Features and Benefits
  </h2>
  <ul className="">
    {[
      "Excellent water resistance",
      "High and low temperature flexibility and good tensile strength simultaneously",
      "Efflorescence, alkali, and chloride resistance",
      "Excellent elongation and is suitable for areas of potential cracking",
      "For concrete and masonry with excellent adhesion",
      "Environment-friendly and suitable for potable water storage tanks",
      "Active barrier against carbon dioxide (CO₂)",
      "Resistant to UV rays",
      "Permeable to water vapor",
    ].map((item, idx) => (
      <li key={idx} className="flex items-start gap-2 mb-3">
        <img
          src="/angle-right.png"
          alt="arrow"
          className="w-3 min-w-3 mt-2"
        />
        <div className="text-gray-700 text-base font-normal leading-7 open-sans">
          {item}
        </div>
      </li>
    ))}
  </ul>
</div>

    </section>
  )
}

export default FlexiApplication;
