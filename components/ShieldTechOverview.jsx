"use client";

export default function ShieldTechOverview() {
  return (
    <section className="px-4 md:px-8 lg:px-0 py-5 lg:py-12 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 poppins leading-8 md:leading-9 lg:leading-10">
            SHIELD Crystalline Technologies <br /> At a Glance
          </h2>
          <p className="text-gray-700 max-w-xl open-sans text-base md:text-lg font-normal leading-6 lg:leading-7">
            Supershield offers three advanced self-healing crystalline
            technologies under its SHIELD platform. Each is uniquely engineered
            to waterproof, protect, and enhance concrete resilience for varying
            environmental and structural demands.
          </p>
        </div>

        {/* Right Content */}
        <div>
          <h3 className="text-base lg:text-lg font-semibold text-text mb-2 poppins ">
            Key Highlights:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* DPC */}
            <div className="bg-white shadow-sm border  p-4 ">
              <h4 className="font-semibold text-lg mb-1 poppins">DPC</h4>
              <p className="text-gray-700 text-sm open-sans font-normal">
                Deep capillary action for long-term internal protection.
              </p>
            </div>
            {/* DMC */}
            <div className="bg-white shadow-sm border  p-4">
              <h4 className="font-semibold text-lg mb-1 poppins">DMC</h4>
              <p className="text-gray-700 text-sm open-sans font-normal">
                Optimizes hydration, regulates thermal effects, adapts to
                changing environments.
              </p>
            </div>
            {/* Multiseal */}
            <div className="bg-white shadow-sm border  p-4">
              <h4 className="font-semibold text-lg mb-1 poppins">Multiseal</h4>
              <p className="text-gray-700 text-sm open-sans font-normal">
                Adds surface-level hydrophobic and icephobic benefits for
                aggressive conditions.
              </p>
            </div>
          </div>
          <p className="text-gray-700 text-sm mt-4 open-sans font-normal">
            All technologies offer self-healing, durability, and sustainability
            in demanding concrete applications.
          </p>
        </div>
      </div>
    </section>
  );
}
