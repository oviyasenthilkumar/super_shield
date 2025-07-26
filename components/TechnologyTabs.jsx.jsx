"use client";

import Image from "next/image";
import { useState } from "react";

const techData = {
  DPC: {
    image: "/product1.webp",
    title: "DPC Crystalline Technology",
    waterproofing: "Impermeable via non-soluble capillary crystals",
    core: ["Self-Healing", "Deep Penetration Crystallization"],
    performance: [
      "Internal waterproofing",
      "Crack sealing",
      "Fills microcracks and pores",
      "Durable long-term matrix protection",
    ],
    products: {
      "Liquid Admixtures": ["DPC Admixplus"],
      "Powder Admixtures": ["Admix 100", "Admix 200", "Admix 300"],
      "Powder Coating": ["Crystalguard", "Crystalguard Ultima"],
      "Liquid Coating": ["Crystalspray"],
      "Repair Products": ["Crystalmix", "Crystalmix Ultra", "Crystalpatch"],
    },
  },
  DMC: {
    image: "/product2.webp",
    title: "DMC Technology",
    waterproofing: "Impermeable via SHIELD Adaptive Crystalline",
    core: [
      "Self-Healing",
      "Casting Performance Enhancer",
      "Enhances Initial & Long Term Curing",
      "Adaptive to Environment",
    ],
    performance: [
      "Improves hydration and early strength",
      "Reduces shrinkage cracking",
      "Thermal, moisture & vapor regulation",
      "Long-term durability in extreme climates",
    ],
    products: {
      "Liquid Admixtures": ["Admixplus"],
    },
  },
  Multiseal: {
    image: "/product3.webp",
    title: "Multiseal Technology",
    waterproofing:
      "Impermeable via SHIELD Adaptive Crystalline + Surface Repellent",
    core: [
      "Self-Healing",
      "Casting Performance Enhancer",
      "Enhances Initial & Long-Term Curing",
      "Hydrophobic & Icephobic",
      "Adaptive to Environment",
    ],
    performance: [
      "Dual protection (internal + surface)",
      "Reduces shrinkage & thermal cracking",
      "Repels oil, salt, water, chemicals",
      "Advanced durability in aggressive environments",
    ],
    products: {
      "Liquid Admixtures": ["Multiseal Admixplus"],
      "Liquid Coating": ["Multiseal", "Clearseal"],
      "Powder Coating": ["Multiguard"],
    },
  },
};

export default function TechnologyTabs() {
  const [activeTab, setActiveTab] = useState("DPC");
  const data = techData[activeTab];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0 py-5 lg:py-12">
      {/* Tabs */}
      <div className="flex space-x-4 border-b mb-4 lg:hidden">
        {Object.keys(techData).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-4 py-2 poppins font-medium ${
              activeTab === key
                ? "border-b-4 border-[#c50022]  text-[#c50022]"
                : "text-gray-700"
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Desktop Table View */}

      <div className="hidden lg:grid grid-cols-3 gap-6">
        {Object.entries(techData).map(([key, tech]) => (
          <div
            key={key}
            className="bg-[#f7f7f7] p-6 shadow-sm flex flex-col gap-4 text-sm font-medium"
          >
            {/* Title */}
            <h3 className="text-black text-lg font-semibold mb-2 poppins">
              {tech.title}
            </h3>

            {/* Image */}
            <Image
              src={tech.image}
              alt={tech.title}
              width={320}
              height={160}
              className="rounded-md"
            />

            {/* Waterproofing Mechanism */}
            <div>
              <p className="font-semibold text-black mt-4 mb-2 poppins">
                Waterproofing Mechanism
              </p>
              <p className="text-gray-700 open-sans text-sm leading-6">
                {tech.waterproofing}
              </p>
            </div>

            {/* Core Properties */}
            <div>
              <p className="font-semibold text-black mt-4 mb-2 poppins">
                Core Properties
              </p>
              <ul className="space-y-2">
                {tech.core.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-gray-700"
                  >
                    <img
                      src="/angle-right.png"
                      alt="arrow"
                      className="w-3 h-3 mt-1"
                    />
                    <span className="text-gray-700 open-sans text-sm leading-6">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Performance Capabilities */}
            <div>
              <p className="font-semibold text-black mt-4 mb-2 poppins">
                Performance Capabilities
              </p>
              <ul className="space-y-2">
                {tech.performance.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-gray-700"
                  >
                    <img
                      src="/angle-right.png"
                      alt="arrow"
                      className="w-3 h-3 mt-1"
                    />
                    <span className="text-gray-700 open-sans text-sm leading-6">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Types */}
            <div>
              <p className="font-semibold text-black mt-4 mb-2 poppins">
                Product Types
              </p>
              <div className="space-y-4">
                {Object.entries(tech.products).map(([type, items], i) => (
                  <div key={i}>
                    <p className="text-black mb-1 font-medium pl-3 ">{type}</p>
                    <ul className="ml-2 space-y-2 pl-2">
                      {items.map((prod, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-gray-700"
                        >
                          <img
                            src="/angle-right.png"
                            alt="arrow"
                            className="w-3 h-3 mt-1"
                          />
                          <span className="text-gray-700 open-sans text-sm leading-6">
                            {prod}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="lg:hidden flex flex-col gap-6 bg-white rounded-lg p-4 shadow-md">
        <Image
          src={data.image}
          alt={data.title}
          width={700}
          height={400}
          className="rounded-md"
        />
        <h2 className="text-2xl font-semibold text-black  mb-4">
          {data.title}
        </h2>

        {/* Waterproofing Mechanism */}
        <div>
          <h3 className="font-semibold text-lg mb-2 text-black poppins">
            Waterproofing Mechanism
          </h3>
          <p className="open-sans text-sm lg:text-base leading-6 text-gray-700">
            {data.waterproofing}
          </p>
        </div>

        {/* Core Properties */}
        <div>
          <h3 className="font-semibold text-lg mb-2 text-black poppins">
            Core Properties
          </h3>
          <ul className="ml-2 space-y-2">
            {data.core.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-sm text-gray-700"
              >
                <img
                  src="/angle-right.png"
                  alt="arrow"
                  className="w-3 h-3 mt-1"
                />
                <span className="open-sans text-sm lg:text-base leading-6 text-gray-700">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Performance Capabilities */}
        <div>
          <h3 className="font-semibold text-lg mb-2 text-black poppins">
            Performance Capabilities
          </h3>
          <ul className="ml-2 space-y-2">
            {data.performance.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-sm text-gray-700"
              >
                <img
                  src="/angle-right.png"
                  alt="arrow"
                  className="w-3 h-3 mt-1"
                />
                <span className="open-sans text-sm lg:text-base leading-6 text-gray-700">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Types */}
        <div>
          <h3 className="font-semibold text-lg mb-2 text-black poppins">
            Product Types
          </h3>
          <div className="text-sm text-gray-700 space-y-4">
            {Object.entries(data.products).map(([type, items], i) => (
              <div key={i}>
                <p className="text-black text-base poppins mb-2 font-medium">
                  {type}
                </p>
                <ul className="ml-2 space-y-2 mt-1">
                  {items.map((prod, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <img
                        src="/angle-right.png"
                        alt="arrow"
                        className="w-3 h-3 mt-1"
                      />
                      <span className="open-sans text-sm lg:text-base leading-6 text-gray-700">
                        {prod}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
