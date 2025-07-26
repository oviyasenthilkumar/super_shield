"use client";

import Image from "next/image";

const certifications = [
  {
    title: "Leading Self-Healing Concrete Research",
    description: "Enhancing durability, impermeability, and resilience.",
  },
  {
    title: "Lowering Carbon Footprint",
    description: "Reducing cement consumption and repair-related emissions.",
  },
  {
    title: "Enabling Climate-Resilient Infrastructure",
    description:
      "Addressing extreme weather conditions and ensuring long-term structural stability.",
  },
];

export default function Mission() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white text-gray-800 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Main Heading */}
        <h2 className="poppins text-2xl md:text-3xl lg:text-4xl font-semibold sm:leading-8 md:leading-9 lg:leading-10 text-center md:text-left">
          SHIELD Consortium: Pioneering Sustainable Concrete
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Left Content */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-6 poppins">
              Our Mission
            </h3>

            <div className="space-y-5">
              {certifications.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-lg bg-gray-50 hover:bg-white hover:border-b-4 hover:border-red-600 transition-all duration-300 max-w-xl mx-auto md:mx-0"
                >
                  <h4 className="font-semibold text-sm md:text-base poppins leading-7 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base open-sans leading-6">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="flex flex-col text-black bg-[#f7f7f7] py-8 px-6 md:py-10 md:px-10 hover:bg-[#c50022] hover:text-white shadow-sm transition-colors duration-500 max-w-xl mx-auto md:mx-0">
              <p className="text-sm md:text-base leading-6 md:leading-7 font-normal open-sans text-justify md:text-left">
                The SHIELD Consortium is an integral part of the{" "}
                <strong>"SHIELD of Concrete"</strong> Innovation Centre,
                established by Leaselife Holdings to revolutionize SHIELD
                crystalline technologies. These technologies are capable of
                extending the lifespan of structures and reducing environmental
                impact—even in extreme climatic conditions.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
