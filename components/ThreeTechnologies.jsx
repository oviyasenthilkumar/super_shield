"use client";
import Image from "next/image";
import Link from "next/link";

const technologyData = [
  {
    id: 1,
    image: "/product1.webp", 
    badge: "01",
    titleTop:
      "Self–Healing Technology for Concrete Waterproofing and Protection",
    title: "DPC Crystalline Technology",
    description:
      "Deep Penetrating Capillary (DPC) Crystalline Technology® creates permanent, self-healing waterproof barriers within concrete. By sealing pores and capillaries with non-soluble crystalline structures, it ensures long-term durability and protection against water ingress and environmental damage, enhancing the resilience and lifespan of concrete structures.",
    link: "#",
  },
  {
    id: 2,
    image: "/product2.webp",
    badge: "02",
    titleTop:
      "Self–Healing Technology for Extreme Climates and Changing Environments",
    title: "DMC Technology",
    description:
      "Dynamic Multifunctional Crystalline (DMC) Technology® enhances concrete resilience from day one through its entire lifecycle, adapting to changing environmental conditions. It actively manages water and thermal energy during casting while regulating temperature, vapor, and moisture in hardened concrete, ensuring it remains resilient, durable, long-lasting, and sustainable.",
    link: "#",
  },
  {
    id: 3,
    image: "/product3.webp",
    badge: "03",
    titleTop:
      "Self–Healing Technology to Protect Existing and New Mega Concrete Infrastructure",
    title: "Multiseal Technology",
    description:
      "Multiseal Crystalline Technology® waterproofs and protects concrete infrastructure by integrating self-healing multifunctional SHIELD Crystals and a hydrophobic barrier, ensuring long-term durability. Ideal for both above-ground and below-ground structures, it keeps concrete resilient, watertight, and sustainable, even in aggressive and extreme climatic conditions.",
    link: "#",
  },
];

const ThreeTechnologies = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16 text-black">
      {/* Title Section */}
      <div className="max-w-7xl mx-auto text-center lg:text-left lg:flex lg:justify-between lg:items-start mb-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-left poppins">
            Three Powerful <br />
            <span className="text-[#b51724]">Technologies. One Purpose</span>
          </h2>
          <p className="mt-4 text-xl font-medium text-left poppins">
            To Make Concrete Last a Lifetime.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:max-w-xl text-base text-black font-normal text-left open-sans">
          Supershield is the global innovator behind the patented SHIELD
          Crystalline Technologies – the most advanced self-healing concrete
          solution engineered for real-world resilience. Our technologies go
          beyond conventional crystalline systems, creating structures that
          self-adapt, self-protect, and self-sustain across the entire
          lifecycle.
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologyData.map((tech) => (
          <div
            key={tech.id}
            className="bg-white shadow-lg rounded-lg flex flex-col overflow-hidden"
          >
            {/* Image + Top Title */}
            <div className="relative">
              <Image
                src={tech.image}
                alt={tech.title}
                width={600}
                height={400}
                className="w-full object-cover rounded-t-lg"
              />
            </div>

            <div className="px-6 py-6 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold text-gray-800 mb-3 poppins">
                {tech.titleTop}
              </h2>

              <h3 className="text-[#b51724] font-bold text-lg mb-4 poppins">
                {tech.title}
              </h3>

              <p className="text-gray-700 text-sm leading-relaxed flex-grow open-sans font-normal">
                {tech.description}
              </p>

              <Link
                href={tech.link}
                className="mt-6 text-[#b51724] text-base font-semibold inline-flex items-center gap-2 hover:underline open-sans"
              >
                EXPLORE MORE → 
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThreeTechnologies;
