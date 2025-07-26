"use client";

import { useState } from "react";
import Image from "next/image";

export default function DryboxComponent() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const components = [
    {
      title: "WATERTIGHT CONCRETE",
      icon: "/drybox-component1.webp",
      pos: { top: "50%", left: "27%" },
    },
    {
      title: "CONSTRUCTION JOINTS",
      icon: "/drybox-component2.webp",
      pos: { top: "71%", left: "54%" },
    },
    {
      title: "EXPANSION JOINTS",
      icon: "/drybox-component3.webp",
      pos: { top: "61%", left: "21%" },
    },
    {
      title: "PROGRAMMED CRACKS",
      icon: "/drybox-component4.webp",
      pos: { top: "28%", left: "75%" },
    },
    {
      title: "FORMWORK SPACERS",
      icon: "/drybox-componet5.webp",
      pos: { top: "16%", left: "20%" },
    },
    {
      title: "PIPE PENETRATIONS",
      icon: "/drybox-componet6.webp",
      pos: { top: "16%", left: "48%" },
    },
  ];

  const sectionIds = [
    "watertight",
    "construction",
    "expansion",
    "cracks",
    "formwork",
    "pipe",
  ];

  return (
    <div
      id="drybox"
      className="bg-[#f7f7f7] min-h-screen flex flex-col items-center justify-center px-4 py-10 scroll-mt-28"
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-12 poppins">
        Supershield {' '}
        <span className="text-gray-800 poppins leading-10">
           DRYBOX System Components
        </span>
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left: 3D Image with markers */}
        <div className="relative w-full max-w-3xl">
          <Image
            src="/drybox-component.webp"
            alt="DRYBOX"
            width={900}
            height={600}
            className="w-full h-auto"
          />

          {/* Dynamic Numbered Markers */}
          {components.map((comp, idx) => (
            <span
              key={idx}
              style={{ top: comp.pos.top, left: comp.pos.left }}
              className={`absolute bg-[#C50022] text-white text-sm w-6 h-6 flex items-center justify-center rounded-full transition-all duration-200
                ${hoveredIndex === idx ? "scale-125 shadow-lg" : ""}
              `}
            >
              {idx + 1}
            </span>
          ))}
        </div>

        {/* Right: Component descriptions */}
        <div className="space-y-6 w-full  max-w-sm flex flex-wrap">
          {components.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => {
                document
                  .getElementById(sectionIds[idx])
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`flex items-center space-x-4 p-3 transition-all duration-200 cursor-pointer open-sans
                ${hoveredIndex === idx ? "bg-gray-200 shadow-md" : ""}
              `}
            >
              <Image
                src={item.icon}
                alt={`icon-${idx}`}
                width={48}
                height={48}
                className="w-16 h-16 object-contain"
              />
              <p className="text-lg open-sans font-semibold">{`${idx + 1}. ${
                item.title
              }`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
