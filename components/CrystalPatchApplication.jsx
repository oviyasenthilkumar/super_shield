"use client";
import Image from "next/image";

const CrystalPatchApplication = () => {
  return (
    <section className="px-3 sm:px-4 md:px-0 py-12 bg-white max-w-7xl mx-auto">
      {/* Applications */}
      <div>
        {/* Applications */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl leading-8 lg:leading-10 font-semibold mb-4 poppins">
          Applications
        </h2>
        <ul className="space-y-2">
          {[
            "Stopping an active flow of water through cracks",
            "Repair of honeycombs",
            "Make coves, fill tie holes, cold joints",
            "Repair of leaking construction joints",
            "Sealing around pipe penetrations",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <img
                src="/angle-right.png"
                alt="arrow"
                className="w-3 min-w-3 mt-2"
              />
              <div className="text-gray-800 text-base font-normal leading-7 open-sans">
                {item}
              </div>
            </li>
          ))}
        </ul>

        {/* Features and Benefits */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl leading-8 lg:leading-10 font-semibold mt-10 mb-4 poppins text-gray-900">
          Features and Benefits
        </h2>
        <ul className="space-y-2">
          {[
            "Stops active flow of leakages quickly in seconds",
            "Enhanced with Supershield Crystalline technology for self-healing of cracks and other defects",
            "Excellent structural strength",
            "Non-shrink with high bond strength",
            "Single component (simply add water)",
            "Non toxic and Approved for potable water",
            "Non-metallic (won’t rust or deteriorate)",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-4 ">
              <img
                src="/angle-right.png"
                alt="arrow"
                className="w-3 min-w-3 mt-2"
              />
              <div className="text-gray-800 text-base font-normal leading-7 open-sans">
                {item}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CrystalPatchApplication;
