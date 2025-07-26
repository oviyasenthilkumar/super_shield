
"use client";

import Image from "next/image";
import dpcImage from "/public/product2.webp";

export default function BentoCard2() {
  return (
    <section className="p-4 md:p-6 max-w-7xl mx-auto lg:mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2 gap-5 auto-rows-[minmax(120px,_auto)] grid-flow-dense">
        {/* Image Block */}
        <div className="relative overflow-hidden  shadow-sm bg-white lg:col-span-3 lg:row-span-2">
          <Image
            src={dpcImage}
            alt="DPC Crystalline Image"
            width={600}
            height={600}
            className="w-full h-full object-cover "
          />
        </div>

        {/* Waterproofing Mechanism */}
        <div className="bg-white p-5  shadow-sm md:row-span-1 lg:col-span-1 lg:row-span-1">
          <h2 className="text-xl font-semibold text-[#c50022] poppins mb-3">
            Waterproofing Mechanism
          </h2>
          <ul className="mt-2 space-y-2">
            <li className="flex items-start gap-2">
              <img
                src="/angle-right.png"
                alt="arrow"
                className="w-3 min-w-3 mt-1"
              />
              <div className="text-gray-700 text-sm md:text-base font-normal leading-6 open-sans">
                Impermeable via SHIELD Adaptive Crystalline
              </div>
            </li>
          </ul>
        </div>

        {/* Performance Capabilities */}
        <div className="bg-white p-5  shadow-sm lg:col-span-2 lg:row-span-1">
          <h2 className="text-xl font-semibold text-[#c50022] poppins">
            Performance Capabilities
          </h2>
          <ul className="mt-2 pl-1 space-y-2">
            {[
              "Improves hydration and early strength",
              "Reduces shrinkage cracking",
              "Thermal, moisture & vapor regulation",
              "Long-term durability in extreme climates",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <img
                  src="/angle-right.png"
                  alt="arrow"
                  className="w-3 min-w-3 mt-1"
                />
                <div className="text-gray-700 text-sm md:text-base font-normal leading-5 open-sans">
                  {item}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Types */}
        <div className="bg-white p-5  shadow-sm lg:col-span-1 lg:row-span-1">
          <h2 className="text-xl font-semibold text-[#c50022] poppins">
            Product Types
          </h2>
          <ul className="mt-2 pl-1 space-y-2">
            {[
              { label: "Liquid Admixtures", value: "Admixplus" }
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <img
                  src="/angle-right.png"
                  alt="arrow"
                  className="w-3 min-w-3 mt-1"
                />
                <div className="text-gray-700 text-sm md:text-base font-normal leading-5 open-sans">
                  <span className="font-medium text-gray-800">
                    {item.label}:
                  </span>{" "}
                  {item.value}
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Core Properties */}
        <div className="bg-white p-5  shadow-sm lg:col-span-2 lg:row-span-1">
          <h2 className="text-xl font-semibold text-[#c50022] poppins">
            Core Properties
          </h2>
          <ul className="mt-2 space-y-2">
            {[
              "Self-Healing",
              "Casting Performance Enhancer",
              "Enhances Initial & Long Term Curing",
              "Adaptive to Environment",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <img
                  src="/angle-right.png"
                  alt="arrow"
                  className="w-3 min-w-3 mt-1"
                />
                <div className="text-gray-700 text-sm md:text-base font-normal leading-5 open-sans">
                  {item}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
