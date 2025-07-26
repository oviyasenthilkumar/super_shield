// components/MultisealAdvantages.jsx
export default function MultisealAdvantages() {
  const advantages = [
    {
      title: "Multi-protection",
      description:
        "Combines SHIELD adaptive crystalline technology with a hydrophobic barrier for enhanced resilience.",
    },
    {
      title: "Durability in Extreme Conditions",
      description:
        "Adapts to wet-dry cycles, freeze-thaw conditions, and temperature extremes, ensuring structural integrity.",
    },
    {
      title: "Optimized Hydration and Thermal Regulation",
      description:
        "Retains moisture for cement hydration and stabilizes hydration heat to prevent thermal stress during casting.",
    },
    {
      title: "Resilience Against Environmental Stressors",
      description:
        "Provides resistance to chemical attacks, freeze-thaw cycles, and thermal fluctuations.",
    },
    {
      title: "Aesthetic and Hygiene Advantages",
      description:
        "Helps concrete stay whiter and brighter, maintaining a clean appearance. Prevents fungal and microbial growth, ensuring hygienic surfaces.",
    },
    {
      title: "Improved Workability",
      description:
        "Enhances workability during placement and finishing, even in complex environments.",
    },
    {
      title: "Low Maintenance and Longevity",
      description:
        "Reduces wear and cracking, requiring minimal upkeep. Extends service life and reduces maintenance demands.",
    },
    {
      title: "Icephobic Properties",
      description:
        "Prevents ice buildup, reducing the need for frequent ice cleaning and associated costs. Mitigates freeze-thaw damage, ensuring durability in harsh winter conditions. Helps prevent accidents caused by slippery surfaces due to ice accumulation.",
    },
    {
      title: "Cost-Effectiveness",
      description:
        "Minimizes repair and maintenance costs by proactively addressing vulnerabilities. Extends concrete lifespan, reducing overall lifecycle expenses. Icephobicity lowers operational costs associated with de-icing and surface repairs.",
    },
    {
      title: "Sustainability",
      description:
        "Supports eco-friendly construction practices by extending the lifespan of concrete structures. Reduces resource consumption by minimizing frequent repairs and replacements.",
    },
    {
      title: "Versatility",
      description:
        "Suitable for bridges, flyovers, industrial facilities, roads, pavements, and coastal structures exposed to wet-dry cycles, freeze-thaw conditions, and harsh environmental stressors.",
    },
    {
      title: "Easy to Apply",
      description:
        "Can be applied using a low-pressure sprayer, ensuring simplicity in implementation.",
    },
    {
      title: "Permanent",
      description:
        "Remains active throughout the lifespan of the concrete structure, providing lasting benefits.",
    },
  ];

  return (
    <section className=" px-4 md:px-8 lg:px-0">
      <div className="max-w-7xl mx-auto p-6 md:p-10 lg:px-0 ">
        <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-gray-900 sm:leading-8 md:leading-9 lg:leading-10 poppins">
          Multiseal Technology Advantages
        </h2>
        <ul className="space-y-4 text-gray-700 text-sm md:text-base ">
          {advantages.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <img
                src="/angle-right.png"
                alt="arrow"
                className="w-3 min-w-3 mt-2"
              />{" "}
              <li className="pb-4">
                <span className="font-semibold text-base lg:text-lg poppins sm:leading-6 md:leading-7 lg:leading-8 ">
                  {item.title} :{" "}
                </span>{" "}
                <span className="open-sans text-sm md:text-base ">
                  {item.description}
                </span>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}
