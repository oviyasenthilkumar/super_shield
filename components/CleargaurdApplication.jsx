"use client";
import Image from "next/image";


const CleargaurdApplication = () => {
  return (
    <section className="px-3 sm:px-4 md:px-12 py-12 bg-white max-w-7xl mx-auto">
      {/* Applications */}
          <div>
  {/* Applications */}
  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 leading-10 poppins">
    Applications
  </h2>
  <ul className="space-y-2 ">
    {[
      "Prevention of deterioration arising from soluble salts and freeze-thaw damage in reinforced concrete and porous block or brickwork",
      "Building facades and civil engineering structures",
      "Suitable for use on exposed horizontal and vertical surfaces, including bridges and parking decks, barriers and marine structures",
      "To help prolong the design or service life of buildings and civil engineering structures",
      
    ].map((item, idx) => (
      <li key={idx} className="flex items-start gap-2">
        <img
          src="/angle-right.png"
          alt="arrow"
          className="w-3 min-w-3 mt-2"
        />
        <div className="text-gray-800 text-sm md:text-base font-normal leading-7 open-sans font-normal ">
          {item}
        </div>
      </li>
    ))}
  </ul>

  {/* Features and Benefits */}
  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 mt-8 poppins leading-10">
    Features and Benefits
  </h2>
  <ul className="">
    {[
      "Applied to pressure or non-pressure concrete face",
      "Quick-acting and easy to apply",
      "Does not alter the appearance of the surface",
      "Long-lasting and cost-effective",
      "Deep penetration protects it from weathering and ultraviolet rays",
      "Reduces chloride ion intrusion and its negative effects through the repelling of water",
      "Manages corrosion to expand the service life of reinforced concrete",
      "Not a vapor barrier allowing treated surfaces to “breathe",
      "Reduces water absorption",
      "It is water-based, non-toxic, and eco-friendly"
    ].map((item, idx) => (
      <li key={idx} className="flex items-start gap-2 mb-3">
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
  )
}

export default CleargaurdApplication
