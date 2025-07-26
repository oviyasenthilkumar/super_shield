"use client";
import Image from "next/image";
import Link from "next/link";

export default function MultisealMechanismSection() {
  return (
    <section className="bg-white px-4 md:px-8 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 leading-10 poppins">
          Principle mechanism of
          <span className="text-[#c50022]"> Multiseal Technology </span> when
          added as Admixture
        </h2>

        {/* Content + Image */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Text */}
          <div className="w-full lg:w-2/3 space-y-2 text-gray-700 text-sm md:text-base  leading-7  text-justify order-2 lg:order-1">
            <p className="open-sans text-sm md:text-base leading-6 lg:leading-7 ">
              When added to the concrete mix, Multiseal Crystalline Technology
              initiates a multi-action process, combining the benefits of
              self-healing dynamic <strong>SHIELD crystals</strong> and a
              hydrophobic barrier system, enhancing performance at every stage
              of the concrete lifecycle.
            </p>
            <p className="open-sans text-sm md:text-base leading-7">
              During casting and initial curing, these crystals seal pores and
              capillaries, creating a dense, impermeable structure, while the
              hydrophobic molecular barrier forms within the matrix, repelling
              water and reducing moisture infiltration, even in challenging
              wet-dry cycles. <strong>Dynamic SHIELD Crystals</strong> ensure
              optimal hydration by regulating moisture availability and
              distribution, preventing water loss in hot climates and freezing
              in cold conditions. Additionally, Multiseal balances heat
              generation effectively reducing thermal stress, preventing
              shrinkage cracks, and ensuring long-term durability and structural
              integrity.
            </p>
            <p className="open-sans text-sm md:text-base leading-7">
              As the concrete hardens, <strong>Dynamic SHIELD Crystals</strong>{" "}
              continue to grow, forming crystalline structures within the matrix
              that block water ingress and resist chemical attacks. These
              crystals dynamically respond to environmental phase changes,
              managing moisture, vapor, and temperature. This process:
            </p>
            <ul className="list-disc pl-2 text-sm md:text-base leading-8 open-sans text-gray-700 ">
              <li className="flex items-start gap-2  ">
                <img
                  src="/angle-right.png"
                  alt="arrow"
                  className="w-3 min-w-3 mt-2"
                />
                <div className="text-gray-700 mb-6 text-sm md:text-base font-normal leading-7 open-sans ">
                  Regulates internal humidity, allowing the concrete to breathe
                  and preventing excess moisture buildup.
                </div>
              </li>
              <li className="flex items-start gap-2  ">
                <img
                  src="/angle-right.png"
                  alt="arrow"
                  className="w-3 min-w-3 mt-2"
                />
                <div className="text-gray-700 mb-6 text-sm md:text-base  font-normal leading-7 open-sans ">
                  Reduces thermal stress and prevents thermal cracks, ensuring
                  structural stability.
                </div>
              </li>
              <li className="flex items-start gap-2  ">
                <img
                  src="/angle-right.png"
                  alt="arrow"
                  className="w-3 min-w-3 mt-2"
                />
                <div className="text-gray-700 mb-6 text-sm md:text-base  font-normal leading-7 open-sans ">
                  Enables self-healing, as dynamic SHIELD crystals grow to seal
                  micro-cracks when exposed to water or moisture.
                </div>
              </li>
            </ul>
            <p className="open-sans text-sm md:text-base font-normal text-gray-700 leading-7">
              This combined mechanism of{" "}
              <strong>Multifunctional Adaptive Dynamic SHIELD Crystals</strong>{" "}
              and hydrophobic barrier ensures that the concrete remains
              impermeable, durable, and resilient against environmental
              fluctuations. By dynamically adapting to moisture and temperature
              variations, it effectively prevents deterioration and enhances the
              structural integrity of concrete over time. When used as an
              admixture, Multiseal Technology provides enhanced durability,
              reduced maintenance, and long-term protection, making it an ideal
              solution for sustainable mega-infrastructure projects exposed to
              wet-dry cycles and aggressive environments. It is suitable for
              both above-ground and below-ground applications.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/3 flex flex-col order-1 lg:order-2">
            <Image
              src="/multiseal-shield-crystalline-concrete-waterproofing-surafce-treatment-2.webp"
              alt="Multiseal Technology"
              width={400}
              height={300}
              className="w-full object-contain"
            />
            {/* in laptop */}
            <div className="hidden lg:flex bg-[#B41424] text-white mt-12 px-6 py-8 flex-col items-center justify-between gap-4">
              <p className="text-lg font-semibold text-center lg:text-left poppins">
                To learn more about the principle mechanism of{" "}
                <span className="font-bold">Multiseal Technology</span>
              </p>
              <Link
                href="/contact"
                className="bg-white text-[#B41424] text-sm font-semibold px-6 py-3 hover:bg-gray-100 transition open-sans"
              >
                Contact us today!
              </Link>
            </div>
          </div>
        </div>
        {/* in mobile and tab */}
        <div className="lg:hidden bg-[#B41424] text-white mt-12 px-6 py-8 flex flex-col items-center justify-between gap-4">
          <p className="text-lg font-semibold text-center lg:text-left poppins">
            To learn more about the principle mechanism of{" "}
            <span className="font-bold">Multiseal Technology</span>
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#B41424] text-sm font-semibold px-6 py-3 hover:bg-gray-100 transition open-sans"
          >
            Contact us today!
          </Link>
        </div>
        {/* Final Section with Buttons */}
        <div className="mt-12 text-center block lg:hidden">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 poppins">
            Discover more of our Self–healing Crystalline Technologies
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/technology/dmc-technology"
              className="open-sans inline-block font-semibold border border-[#B41424] bg-[#B41424] text-white px-5 py-3 text-sm md:text-base hover:bg-white hover:text-[#B41424] transition-all duration-300 "
            >
              DMC Crystalline Technology
            </Link>
            <Link
              href="/technology/dpc"
              className="open-sans inline-block font-semibold border border-[#B41424] bg-[#B41424] text-white px-5 py-3 text-sm md:text-base hover:bg-white hover:text-[#B41424] transition-all duration-300 "
            >
              DPC Crystalline Technology
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
