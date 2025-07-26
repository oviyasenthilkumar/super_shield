import React from "react";

const GroundStructureNeeds = () => {
  return (
    <div className="py-12 px-4 md:px-0 max-w-7xl mx-auto space-y-12">
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row md:items-start gap-8 bg-[#f7f7f7] p-6 md:p-10 rounded-lg">
        {/* Left Content */}
        <div className="md:w-2/3">
          <h1 className="text-2xl md:text-3xl lg:text-4xl lg:leading-10 md:leading-9 sm:leading-8 font-semibold mb-4 poppins">
            Supershield Drybox System meets below-ground structure needs
          </h1>
          <p className="mb-4 text-justify text-sm md:text-base font-normal leading-7 open-sans text-gray-700">
            Supershield's DRYBOX system ensures that the structure is completely
            waterproofed. It makes the concrete structure impermeable to water
            not only through the concrete matrix but also through the joints,
            installation parts, service penetrations, cracks, and other defects
            within the concrete.
          </p>
          <p className="mb-4 text-justify text-sm md:text-base font-normal open-sans leading-7 text-gray-700">
            The DRYBOX System has a full range of Supershield Crystalline
            Waterproofing Admixtures, which waterproof the whole concrete mass
            right from the start. It also has a complete spectrum of products
            designed for construction joints, penetrations, and crack limits,
            such as hydrophilic sealants and profiles, waterstops in different
            material qualities, and sealing tapes, depending on the type and
            location of the joint and its requirements.
          </p>
        </div>

        {/* Right: Image & Link */}
        <div className="md:w-1/3 flex justify-center md:justify-end items-start">
          <div className="flex flex-col items-center">
            <img
              src="/drybox-side.jpg"
              alt="Drybox Brochure"
              className="w-60 md:w-48 lg:w-60 shadow-lg"
            />
            <a
              href="/ProductCatalogueModal"
              className="mt-4 underline-hover open-sans text-sm md:text-base"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col lg:flex-row md:items-start gap-8 p-6 md:p-10 lg:px-0">
        {/* Left: Key Advantages */}
        <div className="lg:w-2/3">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold poppins lg:leading-10 leading-8 tracking-wide mb-5">
            Key Advantages
          </h2>

          <ul className="list-disc text-gray-700 open-sans leading-6 space-y-4">
            {[
              "Time is saved during the design and construction stages because complex detailing and installation are no longer required.",
              "The compatibility of multiple products used in the construction of waterproof concrete is ensured.",
              "In comparison to other systems, it is less expensive.",
              "The total amount of material used on the job site is decreased.",
              "Work is completed faster and with less environmental impact while maintaining the durability goal.",
            ].map((text, index) => (
              <li key={index} className="flex items-start gap-3">
                <img
                  src="/angle-right.png"
                  alt="arrow"
                  className="w-3 h-3 mt-[1%] min-w-3"
                />
                <p className="text-gray-700 text-sm md:text-base font-normal open-sans leading-6 text-justify">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Video Thumbnail */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 md:mt-0">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
            <img
              src="/YoutubeThumb.jpg"
              alt="Drybox System Video"
              className="w-full cursor-pointer"
            />
            <div className="bg-[#c50022] text-white text-center py-4 text-sm md:text-base font-semibold poppins">
              Supershield Drybox System in action
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroundStructureNeeds;
