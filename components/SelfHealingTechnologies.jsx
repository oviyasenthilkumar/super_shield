"use client";

import Link from "next/link";

export default function SelfHealingTechnologies() {
  return (
    <section className="py-16 px-6 text-center max-w-7xl mx-auto block lg:hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-6">
          Discover more of our{" "}
          <span className="font-semibold open-sans">
            Self-healing Crystalline Technologies
          </span>
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="/technology/dmc-technology"
            className="open-sans inline-block font-semibold border border-[#B41424] bg-[#B41424] text-white px-5 py-3 text-sm md:text-base hover:bg-white hover:text-[#B41424] transition-all duration-300"
          >
            DPC Crystalline Technology
          </Link>
          <Link
            href="/technology/multiseal"
            className="open-sans inline-block font-semibold border border-[#B41424] bg-[#B41424] text-white px-5 py-3 text-sm md:text-base hover:bg-white hover:text-[#B41424] transition-all duration-300"
          >
            Multiseal Crystalline Technology
          </Link>
        </div>
      </div>
    </section>
  );
}
