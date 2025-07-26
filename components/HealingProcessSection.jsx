"use client";
import Image from "next/image";

const stages = [
  {
    id: 1,
    title: "Crack Formation with Moisture",
    description:
      "Visible cracks have formed in the concrete, allowing moisture infiltration, which can lead to long-term deterioration if left untreated.",
    image: "/crack-stage-1.webp",
  },
  {
    id: 2,
    title: "Crack Partially Sealed",
    description:
      "Supershield’s self-healing crystalline technology has been activated, with crystal growth beginning to seal the crack, reducing moisture penetration.",
    image: "/crack-stage-2.webp",
  },
  {
    id: 3,
    title: "Crack Fully Sealed and Dry",
    description:
      "The crack is now completely sealed by dense crystalline formations, preventing further water ingress and ensuring long-term durability and protection.",
    image: "/crack-stage-3.webp",
  },
];

export default function HealingProcessSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 text-left lg:text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-10 md:mb-16 sm:leading-8 md:leading-9 lg:leading-10 poppins tracking-wide">
          Case Study: Supershield in Action <br />
          <span className="text-[#C50022]">
            Self-Healing Crystalline Technology at Work
          </span>
        </h2>

        {/* Grid */}
        <div className="relative py-6 md:py-10 overfSelf-Healing Crystalline Technology at Worklow-hidden">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 relative z-10">
            
            {stages.map((stage, index) => (
              <div
                key={stage.id}
                className="relative bg-white text-center p-6 pt-10 border border-gray-200 h-full flex flex-col"
              >
                
                {/* Number Circle */}
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-10 h-10 rounded-full bg-[#C50022] text-white font-bold flex items-center justify-center shadow-md poppins">
                    {stage.id}
                  </div>
                </div>

                {/* Image */}
                <div className="w-full h-56 mx-auto mb-4 relative overflow-hidden border border-gray-200">
                  <Image
                    src={stage.image}
                    alt={stage.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-left text-gray-800 poppins leading-7 md:leading-9">
                  {stage.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 font-normal leading-6 text-sm md:text-base text-left open-sans">
                  {stage.description}
                </p>

                {/* Arrow - Only show on large screens */}
                {index < stages.length - 1 && (
                  <div className="hidden lg:block absolute right-[-35px] top-1/2 transform -translate-y-1/2 z-10">
                    <img src="/arrows.png" alt="arrow" className="w-8 h-8" />
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
