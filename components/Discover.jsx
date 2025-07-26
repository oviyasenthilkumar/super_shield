"use client";
import Image from "next/image";

export default function Discover() {
  const techs = [
    {
      title: "DPC Crystalline Technology",
      badge: "SHIELD Crystalline",
      image: "/tech1.jpg",
      link: "/technology/dpc",
      paragraphs: [
        "Our Deep Penetrating Capillary (DPC) Crystalline Technology creates permanent, waterproof barriers within concrete, enhancing durability and extending the life of concrete structures. This technology enhances the approach to concrete protection by working within the concrete rather than on its surface.",
        "DPC Crystalline Technology takes advantage of concrete’s nature to create an integral reaction that permanently waterproofs and protects the concrete by sealing its pores and capillaries with non-soluble crystalline formations.",
      ],
    },
    {
      title: "Dynamic Multifunctional Crystalline (DMC) Technology",
      badge: "SHIELD Adaptive Crystalline",
      image: "/tech2.jpg",
      link: "/technology/dmc-technology",
      paragraphs: [
        "Dynamic Multifunctional Crystalline Technology ensures that concrete is resilient from day one and built to withstand environmental challenges. It manages water and thermal energy during casting, regulates temperature, vapor, and moisture in hardened concrete, and makes concrete impermeable for long-term protection.",
        "DMC technology improves durability, sustainability, and longevity, making concrete stronger and more resilient in any environment.",
      ],
    },
    {
      title: "Multiseal Crystalline Technology",
      badge: "SHIELD Adaptive Crystalline",
      image: "/tech3.jpg",
      link: "/technology/multiseal",
      paragraphs: [
        "Multiseal Crystalline Technology waterproofs and protects concrete infrastructure by enhancing sustainability through self-healing, multifunctional, adaptive, dynamic SHIELD crystals and a hydrophobic barrier.",
        "Ideal for both above-ground and below-ground structures, it ensures concrete remains resilient, watertight, and sustainable, even in extreme conditions.",
      ],
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-gray-900 sm:leading-8 md:leading-9 lg:leading-10 mb-12 poppins">
          Discover our Transformative{" "}
          <span className="text-[#1d1d1f]">
            SHIELD Crystalline Technologies
          </span>
        </h2>

        {/* Sections */}
        {techs.map((tech, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              {/* Image */}
              <div className="w-full md:w-1/3 flex justify-center">
                <img
                  src={tech.image}
                  alt={tech.title}
                  className="w-full max-w-[350px] object-contain"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-2/3 space-y-4 px-2">
                <h3 className="text-2xl sm:text-2xl md:text-3xl font-medium text-gray-900 poppins">
                  {tech.title} <sup>®</sup>
                </h3>

                {/* <div>
                  <span className="inline-block text-[#C50022] font-semibold text-xs sm:text-sm px-4 py-2 poppins">
                    {tech.badge}
                  </span>
                </div> */}

                {tech.paragraphs.map((para, i) => (
                  <p
                    key={i}
                    className="text-gray-700 text-sm sm:text-base leading-6 lg:leading-7 text-justify open-sans"
                  >
                    {para}
                  </p>
                ))}

                <div className="mt-4 md:mt-10">
                  <a
                    href={tech.link}
                    className="bg-[#c50022]  text-white px-6 py-3 text-sm font-semibold border border-transparent hover:bg-white hover:text-[#c50022] hover:border-[#B41424] transition duration-300 open-sans"
                  >
                    Explore More
                  </a>
                </div>
              </div>
            </div>

            {/* Divider - only show if not the last section */}
            {index < techs.length - 1 && (
              <div className="my-12 border-t border w-full"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
