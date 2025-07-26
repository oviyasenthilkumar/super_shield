
"use client";
import Image from "next/image";

export default function PlanningPhase() {
  return (
    <section className="px-4 md:px-0 py-12 bg-white max-w-7xl mx-auto">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-gray-900 poppins leading-10">
            Planning Phase
          </h2>
          <p className="text-gray-700 leading-6 lg:leading-7 open-sans font-normal text-justify text-sm md:text-base ">
            Our planning phase is designed to set your project up for success
            from the start. We collaborate closely with you to understand your
            project requirements, goals, and challenges. Our expert team
            provides detailed analysis, strategic guidance, and tailored
            recommendations to ensure every aspect of your project is thoroughly
            planned.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/proven.webp"
            alt="Planning Illustration"
            width={400}
            height={350}
            className="object-contain"
          />
        </div>
      </div>

      {/* Card Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Product selection advice",
            img: "/Planning1.png",
            desc: "Selecting the right products is critical to your project's success. Our experts offer valuable guidance and tailored recommendations to help you choose the most suitable solutions based on your specific needs and requirements.",
          },
          {
            title: "Comprehensive system recommendations",
            img: "/Planning2.png",
            desc: "Beyond product selection, we provide system recommendations covering every aspect of your project, including joints, penetrations, and detailing. Our aim is to deliver a complete solution that ensures optimal performance.",
          },
          {
            title: "Extensive product documentation",
            img: "/Planning5.png",
            desc: "We provide comprehensive documentation, ensuring you have all the technical details and support material needed for a successful implementation.",
          },
          {
            title: "Product sample deliveries and suitability tests",
            img: "/Planning4.png",
            desc: "We can arrange for sample deliveries and conduct suitability tests to ensure our products meet your expectations before final approval.",
          },
          {
            title: "Drawing production with BIM models",
            img: "/Planning3.png",
            desc: "We create detailed drawings using BIM models, including installation plans and element drawings, for clear implementation guidance.",
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="bg-white shadow-sm p-6  hover:bg-[#EDEDED] transition duration-300 flex flex-col py-10 lg:py-7"
          >
            <div className="mb-4 flex justify-center">
              <img
                src={card.img}
                alt={card.title}
                className="w-20 h-20 object-contain"
              />
            </div>
            <h3 className="font-semibold leading-8 text-lg md:text-xl mb-2 text-center poppins">
              {card.title}
            </h3>
            <p className="text-gray-700 text-sm md:text-base font-normal open-sans text-justify leading-6 lg:leading-7 lg:pt-4">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
