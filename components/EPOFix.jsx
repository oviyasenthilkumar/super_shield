import Image from "next/image";

export default function EpoFix() {
  return (
    <section className="bg-white  px-6 py-12 md:px-16 text-gray-800">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
          {/* Product Image */}
          <div className="w-full md:w-[40%] mx-auto">
            <Image
              src="/EpoFix.png"
              alt="Supershield Sealon EP"
              width={400}
              height={300}
              className="object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="w-full md:w-[60%] space-y-3 ">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black poppins">
              <span className="text-[#c50022]">Supershield</span> EPOFIX
            </h1>
            <h2 className="text-xl font-medium text-gray-800 poppins ">
              Thixotropic Epoxy Adhesive for Fixing Elastic Bands and General
              Concrete Bonding Applications
            </h2>
            <p className="text-gray-700 open-sans leading-6">
              SUPERSHIELD EPOFIX is a two-component structural adhesive epoxy
              filler with a soft consistency and thixotropic properties, making
              it easy to spread as a malleable paste. This versatile epoxy
              adhesive is used for fixing elastic bands and for other general
              structural applications.
            </p>
          </div>
        </div>

        {/* Application Section */}
        <div className="bg-[#f7f7f7] p-6 md:p-10 rounded">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold  poppins mb-4">
            Applications
          </h3>
          <p className="text-gray-700 leading-6 open-sans font-normal text-sm md:text-base">
            EPOFIX is ideal for bonding elastic bands and reinforcing
            load-bearing elements like beams and columns by adhering steel
            plates, carbon fiber tapes, and similar materials to concrete. It is
            also suitable for reconstructing joints in concrete pavements and
            provides rigid structural bonding for prefabricated elements and
            artifacts made from materials such as concrete, steel, glass, wood,
            marble, bricks, and stones. Additionally, it excels in anchoring,
            bonding, and fastening connectors, tie rods, and other components in
            various construction projects.
          </p>
        </div>
      </div>
    </section>
  );
}
