"use client";

import Image from "next/image";

export default function ResearchMarket() {
  return (
    <section className="px-4 lg:px-12 md:py-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2  gap-10">
        {/* Left content */}
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl sm:leading-8 md:leading-9 lg:leading-10 font-semibold mb-4 poppins">
            Research to Market-Ready Innovation
          </h2>
          <p className="text-gray-700 mb-4 open-sans leading-7">
            Many research institutions, industry bodies, and government agencies
            are actively working to develop self-healing, climate-resilient
            concrete solutions for both new and existing structures, recognizing
            their critical role in the future of sustainable infrastructure.
          </p>
          <p className="text-gray-700 open-sans leading-7">
            At the "SHIELD of Concrete" Innovation Centre, we have achieved
            groundbreaking advancements in concrete technology. Our innovations
            enable concrete to self-heal, manage thermal, vapor, and water
            dynamics across all three stages, and intelligently respond to
            environmental changes. This revolutionary approach enhances the
            durability, adaptability, and sustainability of concrete
            infrastructure—even in the most extreme and changing climates.
          </p>
          <p className="text-gray-700 open-sans leading-7">
            We believe the future of construction lies in adopting proven
            self-healing technologies. Our goal is to collaborate with global
            research institutions, industry leaders, and certification bodies to
            accelerate the expansion and integration of SHIELD Crystalline
            Technology across a wide spectrum of applications in the
            construction industry—transforming the built environment and driving
            global sustainability efforts.
          </p>
          <p className="text-gray-700 open-sans leading-7">
            Extensive research and scientific validation of SHIELD Crystalline
            Technologies have demonstrated remarkable potential, redefining
            modern concrete solutions to be more durable, resilient,
            long-lasting, and environmentally responsible.
          </p>
        </div>

        {/* Right image */}
        <div className="w-full">
          <Image
            src="/NetZero-2050-sustainable-concrete.webp"
            alt="Net Zero 2050"
            width={600}
            height={600}
            className=" object-cover"
          />
        </div>
      </div>
    </section>
  );
}
