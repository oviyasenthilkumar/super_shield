"use client";
import Image from "next/image";

export default function MultisealMechanism() {
  return (
    <section className="px-4 py-12 md:px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section 1: Intro */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold sm:leading-8 md:leading-9 lg:leading-10 text-gray-900 poppins">
              Principle mechanism of{" "}
              <span className="text-[#C50022]">Multiseal Technology</span> when
              applied as a topical treatment
            </h2>
            <p className="text-gray-700 text-sm md:text-base open-sans leading-6 lg:leding-7">
              When applied to concrete surfaces, Multiseal, a low-viscosity
              compound, initiates simultaneous chemical reactions. These
              reactions accelerate as active chemical compounds concentrate due
              to evaporation, forming a repellent layer both on the surface and
              within the penetrated depth of the concrete. Additionally,{" "}
              <strong>SHIELD crystals</strong>
              further enhance its effectiveness by blocking water and moisture
              permeability while also regulating temperature, vapor, and
              humidity, ensuring long-term durability, longevity, and
              resilience.
            </p>
          </div>
          <div>
            <Image
              src="/multiseal-adv-1.webp"
              alt="Surface Repellence"
              width={500}
              height={300}
              className="w-full h-auto object-contain rounded"
            />
          </div>
        </div>

        {/* Section 2: Hydrophobic Molecular Layer */}
        <div className="bg-[#f7f7f7] px-4 md:px-6 lg:px-10 py-12 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div>
              <Image
                src="/multiseal-adv-2.webp"
                alt="Hydrophobic Layer"
                width={500}
                height={300}
                className="w-full h-auto object-contain rounded"
              />
            </div>
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 poppins">
                Hydrophobic Molecular Layer
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-6 lg:leading-7 open-sans">
                As Multiseal dries on the concrete surface, it reacts with
                atmospheric carbon dioxide, forming an invisible protective film
                on both the surface and inner walls of concrete pores. This
                hydrophobic barrier significantly reduces moisture penetration
                by enhancing the surface tension of water and other liquids,
                including jet fuel and oils.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: SHIELD Crystals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 poppins">
              SHIELD Crystals
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-6 lg:leading-7 open-sans">
              Beneath the surface, Multiseal initiates the formation of{" "}
              <strong>SHIELD Crystals</strong>, penetrating deep into the
              concrete matrix. These insoluble and stable crystals are formed
              through chemical reactions with calcium hydroxide and other
              cementitious byproducts, creating a permanent barrier that blocks
              water and external contaminants, significantly enhancing
              durability and waterproofing performance.
            </p>
          </div>
          <div>
            <Image
              src="/multiseal-adv-3.webp"
              alt="SHIELD Crystals"
              width={500}
              height={300}
              className="w-full h-auto object-contain rounded"
            />
          </div>
        </div>

        {/* Section 4: Dynamic SHIELD Crystals */}
        <div className="bg-[#f7f7f7] px-4 md:px-6 lg:px-10 py-12 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div>
              <Image
                src="/multiseal-adv-4.webp"
                alt="Dynamic SHIELD Crystals"
                width={500}
                height={300}
                className="w-full h-auto object-contain rounded"
              />
            </div>
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 poppins">
                Dynamic SHIELD Crystals
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-6 lg:leading-7 open-sans">
                Beyond the initial SHIELD Crystal formation, Multifunctional
                Dynamic Adaptive <strong>SHIELD Crystals</strong> are formed
                that provide enhanced resistance by regulating temperature,
                vapor, and humidity. This process:
              </p>
              <ul className="space-y-4 mt-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <img
                    src="/angle-right.png"
                    alt="arrow"
                    className="w-3 mt-2"
                  />
                  <span className="open-sans text-sm lg:text-base font-normal">
                    Balances internal humidity, allowing the concrete to breathe
                    and preventing moisture buildup.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <img
                    src="/angle-right.png"
                    alt="arrow"
                    className="w-3 mt-2"
                  />
                  <span className="open-sans text-sm lg:text-base font-normal">
                    Reduces thermal stress and prevents thermal cracks, ensuring
                    structural stability.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <img
                    src="/angle-right.png"
                    alt="arrow"
                    className="w-3 mt-2"
                  />
                  <span className="open-sans text-sm lg:text-base font-normal">
                    Supports self-healing, as Dynamic SHIELD Crystals grow to
                    seal micro-cracks upon exposure to water or moisture.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
