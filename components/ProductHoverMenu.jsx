"use client";
import { useState } from "react";
import Image from "next/image";

const productData = {
  dpc: {
    label: "DPC Crystalline Additives, Topical Treatment And Repair",
    subcategories: [
      "Crystalline Waterproofing Admixtures",
      "Topical Waterproofing Systems",
      "Crack Healing Agents",
    ],
    image: "/Productline2.png",
  },
  dmc: {
    label: "Dynamic Multifunctional Crystalline (DMC) Additives",
    subcategories: [
      "Multifunctional Mix Enhancers",
      "DMC for Structural Durability",
    ],
    image: "/Productline3.png",
  },
  multiseal: {
    label: "Multiseal Crystalline Additives And Topical Treatment",
    subcategories: [
      "Additives for Masonry",
      "Topical Sealers",
      "Surface Hardening Solutions",
    ],
    image: "/products3.png",
  },
};

export default function ProductHoverMenu() {
  const [activeKey, setActiveKey] = useState("dpc");

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto bg-white shadow-md rounded-lg p-6">
      {/* LEFT COLUMN */}
      <div className="flex flex-col gap-4">
        {Object.entries(productData).map(([key, { label }]) => (
          <div
            key={key}
            className={`cursor-pointer p-4 text-sm font-medium border rounded transition duration-300 ${
              key === activeKey
                ? "bg-[#C50022] text-white"
                : "hover:bg-gray-100"
            }`}
            onMouseEnter={() => setActiveKey(key)}
          >
            {label}
          </div>
        ))}
      </div>

      {/* CENTER COLUMN */}
      <div className="flex flex-col justify-center gap-2 border-l pl-6">
        <h3 className="text-lg font-semibold text-[#C50022]">Subcategories</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm">
          {productData[activeKey].subcategories.map((sub, index) => (
            <li key={index}>{sub}</li>
          ))}
        </ul>
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex justify-center items-center">
        <Image
          src={productData[activeKey].image}
          alt="Product Preview"
          width={300}
          height={300}
          className="rounded shadow-md object-contain"
        />
      </div>
    </div>
  );
}
