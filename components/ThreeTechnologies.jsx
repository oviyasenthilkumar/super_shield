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
      <div className="max-w-7xl mx-auto text-center lg:text-left lg:flex lg:justify-between lg:items-start mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold sm:leading-8 md:leading-9 lg:leading-10 text-left poppins tracking-wide">
            Three Powerful <br />
            Technologies. One Purpose
          </h2>
          <h3 className="mt-4 text-xl md:text-2xl leading-9 font-medium text-left poppins">
            To Make Concrete Last a Lifetime.
          </h3>
        </div>
        <p className="mt-8 lg:mt-0 lg:max-w-xl text-sm md:text-base  leading-6 lg:leading-7 text-black font-normal text-left open-sans">
          Supershield is the global innovator behind the patented SHIELD
          Crystalline Technologies – the most advanced self-healing concrete
          solution engineered for real-world resilience. Our technologies go
          beyond conventional crystalline systems, creating structures that
          self-adapt, self-protect, and self-sustain across the entire
          lifecycle. <a href="/ShieldTechOverview" className="text-[#c50022] underline">view more</a>
        </p>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologyData.map((tech) => (
          <div
            key={tech.id}
            className="bg-white shadow-md flex flex-col overflow-hidden"
          >
            {/* Image + Top Title */}
            <div className="relative">
              <Image
                src={tech.image}
                alt={tech.title}
                width={600}
                height={400}
                className="w-full object-cover "
              />
            </div>

            <div className="px-9 py-9 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold text-gray-800 mb-3 leading-7 poppins text-left">
                {tech.titleTop}
              </h2>

              <h3 className="text-[#b51724] font-semibold leading-8 text-lg md:text-xl mb-4 poppins text-left">
                {tech.title}
              </h3>

              <p className="text-gray-700 text-sm md:text-base  leading-7 flex-grow text-left open-sans font-normal">
                {tech.description}
              </p>

              <Link
                href={tech.link}
                className="mt-6 text-[#b51724] text-sm md:text-base  font-semibold inline-flex items-center uppercase gap-2 hover:underline open-sans"
              >
                <img
                  src="/angle-right.png"
                  alt="arrow"
                  width={12}
                  className=" inline"
                />
                EXPLORE MORE
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThreeTechnologies;
