import Image from "next/image";

const protectionPoints = [
  {
    title:
      "Comprehensive Set of Self–Healing Technologies for Concrete Protection",
    description:
      "Powered by SHIELD Crystalline Technologies, our extensive product range includes waterproofing admixtures, protective coatings, mortars, adhesive mortars, and repair products. These advanced solutions enhance durability, prevent deterioration, and extend the lifespan of concrete structures, ensuring long-term protection and resilience.",
  },
  {
    title:
      "Self–Healing Technologies for Extreme Climates and Changing Environments",
    description:
      "Designed for both intense heat and freezing temperatures, they effectively manage phase changes within concrete, reducing thermal stress and minimizing shrinkage cracks. By adapting to environmental fluctuations, these solutions ensure long-term resilience and durability of concrete structures.",
  },
  {
    title:
      "Self-Healing Technologies to Protect Existing and New Mega Concrete Infrastructure",
    description:
      "Our self-healing technologies ensure long-term protection against environmental stressors, minimizing deterioration and extending the service life of concrete structures. By strengthening and safeguarding both new and aging infrastructure, they enhance durability and resilience for lasting performance.",
  },
  {
    title: "Complete System for Concrete Protection",
    description:
      "Our comprehensive concrete protection solutions include jointing systems for construction joints, expansion joints, and programmed cracks, structural protection for cracks, pipe penetrations, and waterproofing vulnerabilities, and repair systems with advanced materials for surface restoration and long-term durability.",
  },
  {
    title: "Customized and Tailored Solutions",
    description:
      "We provide project-specific solutions tailored to diverse construction needs, combining localized expertise with a global reach to deliver high-performance results. Our advanced concrete protection systems empower infrastructure industries worldwide, ensuring durability, resilience, and long-term structural integrity.",
  },
];

export default function CoreCompetenciesSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight poppins mb-6">
            Supershield's Core Competencies in Advanced Concrete Protection
          </h2>
          <p className="text-base leading-7 open-sans text-gray-800 mb-2">
            Supershield is dedicated to advancing concrete infrastructure
            protection with innovative self-healing technologies designed to
            withstand evolving environmental challenges. Beyond conventional
            solutions, our cutting-edge approach enhances durability,
            resilience, and sustainability.
          </p>
          <p className="text-base leading-7 open-sans text-gray-800">
            Through a complete, integrated system, we ensure long-term
            structural integrity and superior protection for concrete
            infrastructure.
          </p>
        </div>

        {/* Right image */}
        <div className="flex justify-center">
          <Image
            src="/red-cube.webp"
            alt="Highlighted Concrete Cubes"
            width={400}
            height={400}
            className="w-full max-w-md "
          />
        </div>
      </div>

      {/* Info cards */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 gap-6">
        {protectionPoints.map((item, idx) => (
          <div
            key={idx}
            className={`pb-6 ${
              idx !== protectionPoints.length - 1
                ? "border-b border-b-[#d3d3d3]"
                : ""
            }`}
          >
            <h3 className="text-black font-semibold leading-8 text-lg md:text-xl mb-4 poppins text-left">
              {item.title}
            </h3>
            <p className="text-gray-700 text-base leading-7 flex-grow text-left open-sans font-normal">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
