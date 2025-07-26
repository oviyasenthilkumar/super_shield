"use client";
import React from "react";

const StatsSection = () => {
  const stats = [
    { value: "25+", label: "Years of Expertise" },
    { value: "5", label: "Continents Served" },
    { value: "100+", label: "Certified Products" },
    { value: "3", label: "Proprietary Technologies" },
  ];

  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-8 text-center  ${
              index % 2 === 0 ? "bg-[#ededed]" : "bg-[#f7f7f7]"
            }`}
          >
            <div className="text-4xl font-semibold text-black poppins leading-10">
              {stat.value}
            </div>
            <div className="mt-2 text-black text-sm md:text-base  md:text-lg font-normal open-sans leading-7">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
