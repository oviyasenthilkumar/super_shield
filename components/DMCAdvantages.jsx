"use client";

const advantages = [
  {
    title: "1. Improved Workability",
    points: [
      "Enhances the workability of concrete during placement and finishing.",
      "Facilitates better results even in complex construction environments.",
    ],
  },
  {
    title: "2. Optimized Hydration",
    points: [
      "Retains the right amount of moisture to ensure complete cement hydration for optimal strength development.",
      "Prevents rapid drying in hot climates.",
      "Stabilizes hydration heat, reducing thermal stress during casting and curing.",
      "Prevents water from freezing in cold climates, ensuring uninterrupted hydration.",
      "Enhances hydration efficiency, contributing to a crack-free, stronger, and more durable concrete matrix.",
    ],
  },
  {
    title: "3. Self-Healing Mechanism",
    points: [
      "Automatically seals micro-cracks that develop over time.",
      "Activated by moisture exposure, forming crystals that seal the cracks.",
      "Reduces the need for frequent maintenance and repairs.",
      "Contributes to the longevity and cost-effectiveness of concrete structures.",
    ],
  },
  {
    title: "4. Dynamic Adaptation to Environmental Stressors",
    points: [
      "Adapts dynamically to a wide range of environmental challenges, suitable for both freezing and hot climates.",
      "Prevents freeze-thaw damage in cold conditions.",
      "Minimizes shrinkage in high temperatures.",
      "Extends the lifespan of concrete structures in challenging environments.",
    ],
  },
  {
    title: "5. Resilience Against Diverse Environmental Challenges",
    points: [
      "Provides comprehensive protection against water and moisture damage, de-icing chemicals, freeze-thaw cycles, shrinkage cracks, chemical attacks, and thermal fluctuations.",
      "Ensures the long-term structural integrity of concrete in various environments.",
    ],
  },
];

export default function DMCAdvantages() {
  return (
    <section className="px-6 md:px-12 lg:px-0 py-12 bg-white text-gray-900 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold poppins sm:leading-8 md:leading-9 lg:leading-10 tracking-wide mb-10">
        DMC Technology Advantages
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {advantages.map((adv, index) => (
          <div
            key={index}
            className="bg-[#f7f7f7]  shadow-sm p-6 flex flex-col h-full"
          >
            <h3 className="text:lg md:text-xl font-semibold text-[#c50022] mb-4 poppins sm:leadin-6 md:leading-7 lg:leading-8">
              {adv.title}
            </h3>
            <ul className="space-y-2">
              {adv.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <img
                    src="/angle-right.png"
                    alt="arrow"
                    className="w-3 min-w-3 mt-2"
                  />
                  <div>
                    <p className="text-sm md:text-base text-gray-800 open-sans leading-7">{point}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
