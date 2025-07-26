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
    image: "/red-cube.webp",
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
     
      <div className="max-w-7xl mx-auto text-center lg:text-left lg:flex lg:justify-between lg:items-start mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold sm:leading-8 md:leading-9 lg:leading-10 text-left poppins tracking-wide">
            Supershield's Core Competencies <br />
            in Advanced Concrete Protection
          </h2>
        </div>
        <p className="mt-8 lg:mt-0 lg:max-w-xl text-sm md:text-base leading-6 md:leading-7 lg:leading-7 text-black font-normal text-left open-sans">
          Supershield is dedicated to advancing concrete infrastructure
          protection with innovative self-healing technologies designed to
          withstand evolving environmental challenges. Beyond conventional
          solutions, our cutting-edge approach enhances durability, resilience,
          and sustainability. Through a complete, integrated system, we ensure
          long-term structural integrity and superior protection for concrete
          infrastructure.
        </p>
      </div>

     
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {protectionPoints.map((item, index) => (
          <div key={index} className="flex flex-col h-full items-start ">
            
            {item.image ? (
              <img
                src={item.image}
                alt="Concrete visual"
                className="w-full md:w-[65%] h-auto object-cover align-middle mx-auto"
              />
            ) : (
              // Text content block
              <div className="flex flex-col text-black flex-1 bg-[#f7f7f7] py-10 px-7 lg:px-11 hover:bg-[#c50022] hover:text-white shadow-sm transition-colors duration-500">
                {item.title && (
                  <h3 className="font-semibold leading-7 text-lg md:text-xl mb-2 poppins">
                    {item.title}
                  </h3>
                )}
                <p className=" text-sm md:text-base text-gray-800 leading-6 md:leading-7 lg:leading-7 font-normal open-sans">
                  {item.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
