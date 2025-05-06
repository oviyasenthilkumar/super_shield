"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useResponsiveCards from "./UseResponsiveCards";

const products = [
  {
    title: "DPC Crystalline Concrete Waterproofing",
    description:
      "A fully integrated, functional range of Self-healing Crystalline products based on Supershield Crystalline Technology.",
    image: "/Productline1.png",
  },
  {
    title: "Dynamic Multifunctional Crystalline (DMC) Additives",
    description:
      "Self-Healing DMC (Dynamic Multifunctional Crystalline) Resilient Admixture for Concrete",
    image: "/Productline2.png",
  },
  {
    title: "Multiseal Crystalline Topical Treatment and Additives",
    description:
      "Sustainable Concrete Waterproofing Solution for Improving the Durability and Performance of Mass Concrete Structures",
    image: "/Productline3.png",
  },
  {
    title: "DPC Crystalline Concrete Waterproofing",
    description:
      "A fully integrated, functional range of Self-healing Crystalline products based on Supershield Crystalline Technology.",
    image: "/Productline4.png",
  },
  {
    title: "Dynamic Multifunctional Crystalline (DMC) Additives",
    description:
      "Self-Healing DMC (Dynamic Multifunctional Crystalline) Resilient Admixture for Concrete",
    image: "/Productline2.png",
  },
  {
    title: "Multiseal Crystalline Topical Treatment and Additives",
    description:
      "Sustainable Concrete Waterproofing Solution for Improving the Durability and Performance of Mass Concrete Structures",
    image: "/Productline3.png",
  },
  {
    title: "DPC Crystalline Concrete Waterproofing",
    description:
      "A fully integrated, functional range of Self-healing Crystalline products based on Supershield Crystalline Technology.",
    image: "/Productline4.png",
  },
];

const ProductLines = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = useResponsiveCards();

  const totalSteps = products.length;
  const currentStep = startIndex;

  const handleNext = () => {
    if (startIndex < products.length - visibleCards) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleItems = products.slice(startIndex, startIndex + visibleCards);
  const itemsToRender =
    visibleItems.length === visibleCards
      ? visibleItems
      : [
          ...visibleItems,
          ...products.slice(0, visibleCards - visibleItems.length),
        ];

  const progressPercent = Math.min(
    (currentStep / (totalSteps - visibleCards)) * 100,
    100
  );

  return (
    <section className="w-full bg-[#EDEDED] py-28 px-10 md:px-12 lg:px-18">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-black text-center mb-12 poppins ">
          Product Lines
        </h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 text-left px-6 ">
          {itemsToRender.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden shadow-lg bg-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl  flex flex-col h-full min-h-[420px] sm:min-h-[440px] lg:min-h-[460px]"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={300}
                className="w-full h-60 sm:h-64 lg:h-72 object-cover "
              />
              <div className="p-6 flex-grow flex flex-col justify-between">
                <h4 className="font-semibold text-black mb-2 text-left open-sans text-xl sm:text-2xl lg:text-2xl">
                  {item.title}
                </h4>
                <p className="text-[#515050] text-left open-sans font-normal text-base sm:text-lg md:text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows + Progress */}
        <div className="flex justify-center items-center mt-8 gap-6">
          {/* Left Button */}
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className={`w-10 h-10 flex items-center justify-center rounded-full border text-black transition-all ${
              startIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            <FaChevronLeft size={16} />
          </button>

          {/* Progress Bar */}
          <div className="w-60 h-[2px] bg-gray-300 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gray-900 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Right Button */}
          <button
            onClick={handleNext}
            disabled={startIndex >= totalSteps - visibleCards}
            className={`w-10 h-10 flex items-center justify-center rounded-full border text-black border-black transition-all ${
              startIndex >= totalSteps - visibleCards
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            <FaChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductLines;
