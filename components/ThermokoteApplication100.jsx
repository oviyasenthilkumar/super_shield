"use client";
import Image from "next/image";

const ThermokoteApplication100 = () => {
  return (
    <section className="px-3 sm:px-4 md:px-0 py-12 bg-white max-w-7xl mx-auto">
      {/* Applications */}
      <div>
        {/* Applications */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 poppins">
          Applications
        </h2>
        {/* <ul className="space-y-2">
         
            <li className="flex items-center gap-2">
              <img
                src="/angle-right.png"
                alt="arrow"
                className="w-3 min-w-3 mt-0"
              /> */}
              <div className="text-gray-700 text-sm md:text-base  font-normal leading-7 open-sans">
                Roof Slabs, Interior and Exterior Walls, Metal Walls, Roofs and
                Asbestos, Cooling System, Sport Facilities, Storage Tanks,
                Pipelines, Mobile and Modular Homes
              </div>
            {/* </li>
      
        </ul> */}

        {/* Features and Benefits */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4 poppins text-gray-800">
          Features and Benefits
        </h2>
        <ul className="space-y-2">
          {[
           " One component water-based, environment-friendly",
           "High Reflectivity and low conductivity",
           "Dissipates thermal energy faster due to very high emissivity",
           'Acts as an elastomeric waterproofing membrane',
           "Excellent adhesion to most building materials",
           "Class A Fire Rating",
           "Enhanced with Supershield Crosslink and Enviro-Stable film technology",
           "Provides anti-condensation protection",
           "Reduces sound waves",
           "Energy-efficient and long-lasting",
           "Suitable for existing and new buildings",
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

export default ThermokoteApplication100;
