"use client";
import Image from "next/image";

const stages = [
  {
    id: 1,

    description:
      "Untreated concrete is naturally porous, making it highly vulnerable to water penetration and deterioration over time.",
    image: "/Crystalline1.webp",
  },
  {
    id: 2,

    description:
      "The active ingredients in Supershield penetrate the capillaries, forming insoluble, needle-like crystalline structures that seal the pores and enhance concrete durability.",
    image: "/Crystalline2.webp",
  },
  {
    id: 3,

    description:
      "If new cracks form due to settling or shrinkage, the presence of water reactivates the crystallization process, leading to the growth of additional crystals that seal the cracks.",
    image: "/Crystalline3.webp",
  },
];

export default function CrystallineFormations() {
  return (
    <section className="pb-12 pt-8 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto px-2 md:px-0">
        {/* Header */}
        <div className="text-center md:text-left lg:flex lg:justify-between lg:items-start mb-12 gap-3 ">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold sm:leading-8 md:leading-9 lg:leading-10 text-left poppins tracking-wide max-w-xl">
            Infrastructure Protection with SHIELD Crystalline Technologies for
            Resilient Concrete
          </h2>
          <p className="mt-8 lg:mt-0 lg:max-w-xl text-sm md:text-base  leading-6 text-black font-normal text-justify open-sans">
            Self-healing systems are transforming infrastructure by embedding
            resilience and self-repair capabilities into concrete. Roads,
            bridges, tunnels, and embankments often require costly repairs,
            causing financial and societal disruptions. Supershield’s advanced
            materials eliminate these challenges by enabling concrete to sense
            damage, repair cracks, and restore integrity autonomously. By
            integrating self-healing properties, our smart materials enhance
            durability, safety, and service life while significantly reducing
            maintenance costs. As the backbone of modern construction, concrete
            can now evolve over time, addressing durability concerns and
            redefining infrastructure maintenance.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 leading-10 poppins tracking-wide">
          Crystalline Formations
        </h2>

        <div className="relative py-10 overflow-hidden ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 relative z-10 ">
            {stages.map((stage, index) => (
              <div
                key={stage.id}
                className="relative text-center  p-6 pt-10 border border-gray-100 h-full flex flex-col bg-[#EDEDED]"
              >
                {/* Circular Image */}
                <div className="w-full h-65 mx-auto mb-4 relative  overflow-hidden border border-gray-200">
                  <Image
                    src={stage.image}
                    alt="staging"
                    fill
                    className="object-cover"
                  />
                </div>

              {/* Description */}
                <p className=" text-gray-700 font-normal px-3 leading-6 text-sm md:text-base  text-left open-sans ">
                  {stage.description}
                </p>

                {/* Arrow */}
                {index < stages.length - 1 && (
                  <div className="hidden lg:block absolute right-[-49px] top-1/2 transform -translate-y-1/2 z-10">
                    <img src="/arrows.png" alt="arrow" className="w-10 h-10 " />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
