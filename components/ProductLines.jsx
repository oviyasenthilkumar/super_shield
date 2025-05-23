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
    <section className="w-full bg-[#f7f7f7] py-12 px-4 md:px-8 lg:px-16 lg:py-16">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-3xl md:text-4xl font-semibold text-black leading-10 tracking-wide text-center mb-10 poppins ">
          Product Lines
        </h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 text-left ">
          {itemsToRender.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden shadow-md bg-white transition hover:shadow-md flex flex-col h-full min-h-[420px] sm:min-h-[440px] lg:min-h-[460px]"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={300}
                className="w-full h-60 sm:h-64 lg:h-72 object-cover"
              />
              <div className="px-8 py-8 flex-grow flex flex-col ">
                <h4 className="font-semibold leading-8 text-lg md:text-xl text-black mb-1 text-left open-sans ">
                  {item.title}
                </h4>
                <p className=" text-gray-700 text-base leading-7 text-left open-sans font-normal pt-2">
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
            className={`w-10 h-10 flex items-center justify-center rounded-full border text-black transition ${
              startIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            <FaChevronLeft size={14} />
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
            className={`w-10 h-10 flex items-center justify-center rounded-full border text-black border-black transition ${
              startIndex >= totalSteps - visibleCards
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductLines;
