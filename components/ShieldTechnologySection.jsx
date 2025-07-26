"use client";
import Image from "next/image";

const features = [
  {
    title: "Environmentally Friendly Products",
    description:
      "Our products are free from harmful VOCs (volatile organic compounds) and contain no Red List chemicals or forever chemicals (PFAS), ensuring safer, healthier environments for builders and end-users.",
    icon: "/EcoFriendly.webp", 
  },
  {
    title: "Self-healing and Resilient Concrete",
    description:
      "Our self-healing technology extends service life, often tripling structural durability. It reduces repairs and replacements, lowering environmental impact, while minimizing material waste, enhancing overall sustainability.",
    icon: "/SS_Icon_Innovation.webp",
  },
  {
    title: "Durable and Resistant to Environmental Stressors",
    description:
      "Our technology protects against chloride ion penetration, ASR, carbonation, and freeze-thaw cycles, ensuring superior concrete durability. It strengthens internal and external structures, preventing premature deterioration, and adapts to climatic changes, guaranteeing long-term resilience.",
    icon: "/Durable.webp",
  },
  {
    title: "Supplementary Cementitious Materials (SCM) and Cement Reduction",
    description:
      "Enabling cement reduction and the use of supplementary cementitious materials (SCMs), this approach maintains long-term durability without compromising strength. It also supports low-carbon concrete production, promoting more sustainable construction practices.",
    icon: "/Cement.webp",
  },
  {
    title: "Recyclability and Resource Efficiency",
    description:
      "Concrete protected with SHIELD products remains fully recyclable, reducing waste generation and supporting circular economy principles. This approach also lowers embodied carbon throughout the structure’s lifecycle, contributing to sustainable construction.",
    icon: "/recycle.webp",
  },
  {
    title: "Accelerated Construction and Reduced Manpower",
    description:
      "Faster application shortens construction time, while lower manpower requirements ensure a more cost-effective installation, improving overall project efficiency.",
    icon: "/Manpower.webp",
  },
];

export default function ShieldTechnologySection() {
  return (
    <section className="px-4 md:px-12 py-12 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 ">
        {/* Left Image */}
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold  sm:leading-8 md:leading-9 lg:leading-10 mb-4 poppins max-w-xl">
            Pathway to zero carbon footprint with SHIELD crystalline technology
          </h2>
          <p className="text-sm lg:text-base font-normal leading-6 lg:leading-7 text-gray-600 open-sans">
            At SUPERSHIELD, we are committed to sustainable construction by
            providing innovative, environmentally friendly, and high-performance
            solutions that reduce the carbon footprint of concrete. Our SHIELD
            Crystalline Technology enhances durability, resilience, and
            longevity, making concrete stronger, self-healing, and truly
            sustainable.
          </p>
        </div>
        {/* Right Content */}
        <div>
          <Image
            src="/netZero.webp"
            alt="Net Zero"
            width={400}
            height={400}
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Features */}
      <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-gray-100 p-10 shadow hover:shadow-sm transition "
          >
            <div className="mb-4">
              <Image
                src={feature.icon}
                alt={`${feature.title} icon`}
                width={55}
                height={55}
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 leading-7 poppins">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base  leading-6 lg:leading-7 font-normal open-sans">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
