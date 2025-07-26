"use client";

import Image from "next/image";

const certifications = [
  {
    title: "EPD & HPD Certified",
    description:
      "Environmental Product Declarations (EPD) and Health Product Declarations (HPD) validate our commitment to transparency and sustainability.",
  },
  {
    title: "Compliant with Global Green Standards",
    description: "Ensures minimal environmental impact.",
  },
  {
    title: "Cradle-to-Grave, Type III EPDs",
    description: "Third-party validated as per ISO 14025.",
  },
];

const tiles = [
  "/tiles/no-vocs.png",
  "/tiles/reduces-repair.png",
  "/tiles/extends-service-life.png",
  "/tiles/epds-leed.png",
  "/tiles/supershield-admixus.png",
  "/tiles/supershield-multiseal.png",
  "/tiles/reduces-construction.png",
  "/tiles/reduces-human-presence.png",
  "/tiles/100-recyclable.png",
  "/tiles/lca.png",
  "/tiles/low-carbon.png",
];

export default function CertifiedSection() {
  return (
    <section className="px-4 md:px-12 lg:py-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 leading-6 lg:leading-7 poppins">
            Certifications and Standards
          </h2>
          <p className="text-gray-600 mb-6 open-sans">
            Contributes to LEED and other green certifications, helping
            architects and builders earn sustainability points while enhancing
            environmental performance and long-term durability.
          </p>

          {/* <div className="space-y-4">
            {certifications.map((item, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-lg shadow ${
                  item.highlighted
                    ? "border-b-4 border-red-600 bg-white"
                    : "bg-gray-50"
                }`}
              >
                <h3 className="font-semibold text-sm md:text-base ">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div> */}
          <div className="space-y-4">
            {certifications.map((item, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-lg shadow transition-all duration-300 max-w-xl ${
                  item.highlighted
                    ? ""
                    : "bg-gray-50 hover:bg-white hover:border-b-4 hover:border-red-600"
                }`}
              >
                <h3 className="font-semibold text-sm md:text-base  poppins">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm open-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right img */}

        <div className="relative overflow-hidden">
          <img
            src="sustainability-shield-crystalline-technologies-concrete.webp"
            alt="sustainability-shield-crystalline-technologies-concrete image"
            className="w-[70%] mx-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
