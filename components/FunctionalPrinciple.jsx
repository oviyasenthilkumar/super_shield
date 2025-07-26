"use client";

import Image from "next/image";
import Link from "next/link";

export default function FunctionalPrinciple() {
  return (
    <section className="px-4 py-16 md:px-8 lg:px-0 bg-white max-w-7xl mx-auto">
      {/* Text and Image Section */}
      <div className="flex flex-col lg:flex-row items-start gap-10">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 poppins tracking-wide">
            Functional Principle
          </h2>
          <p className="text-gray-700 leading-7 text-sm md:text-base  mb-4 open-sans text-justify">
            Utilizing water as a catalyst, our DPC crystalline products react
            chemically with the by-products of cement hydration to form a
            needle-like, highly resistant crystalline structure that becomes
            part of the concrete. The resulting crystalline structure is
            remarkably resilient and provides comprehensive protection against
            water ingress, even under extreme hydrostatic pressure. This
            protective barrier effectively shields the concrete from harsh
            environmental conditions, ensuring long-term durability and
            structural integrity.
          </p>
          <p className="text-gray-700 leading-7 text-sm md:text-base  open-sans text-justify">
            An essential feature of our Crystalline Technology is its ability to
            self-heal. Crystalline formation occurs wherever moisture is
            present. Therefore, if cracks develop due to settling or shrinkage,
            the incoming water activates the crystallization process, leading to
            the formation of additional crystals that seal and repair the
            cracks. This makes DPC Crystalline Technology a robust solution for
            maintaining the performance and longevity of concrete structures.
          </p>
        </div>

        {/* Image */}
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <Image
            src="/dpc-principle.webp"
            alt="Crystalline structure"
            width={400}
            height={400}
            className="mx-auto h-auto object-cover "
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-10 bg-gray-100  p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-base md:text-lg text-gray-700 font-normal poppins">
          To learn more about the principle mechanism of <br />
          <span className="font-bold">DPC Crystalline Technology</span>
        </p>
        <Link href="/contact">
          <button className="inline-block font-semibold border border-[#B41424] bg-[#c50022] open-sans text-white px-5 py-3 cursor-pointer text-sm md:text-base hover:bg-white hover:text-[#c50022] transition-all duration-300">
            Contact us today!
          </button>
        </Link>
      </div>
    </section>
  );
}
