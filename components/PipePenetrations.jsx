"use client";

import Image from "next/image";
import Accordion from "./Accordian";

export default function PipePenetrations() {
  return (
    <div
      id="pipe"
      className="px-6 md:px-16 py-10 max-w-7xl mx-auto scroll-mt-28 "
    >
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <div className="w-full lg:w-[60%]">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4 poppins leading-10">
            6. PIPE PENETRATIONS
          </h1>
          <p className=" text-gray-700 space-y-4 text-justify open-sans leading-7 text-sm md:text-base ">
            Supershield SWELLSTOP can seal the penetration and isolation joints
            between different materials very easily. It can be bonded to many
            different substrates as well as concrete, including stone, metals,
            and many plastics.
          </p>
        </div>
        {/* Right Image */}
        <div className="w-full lg:w-[30%] mx-auto">
          <Image
            src="/PIPE PENETRATIONS.webp"
            alt="Watertight Concrete"
            width={1000}
            height={1000}
            className="object-contain w-full"
          />
        </div>
      </div>

      {/* Products Used Section */}
      <div className="bg-gray-50 mt-10 p-6  shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 poppins leading-8">
          Products for Sealing Pipe Penetrations
        </h2>
        <Accordion
          title="Supershield SWELLBELT"
          content="Supershield SWELLBELT is a dual rubber swellable waterstop belt for sealing construction joints in pipe penetrations."
          imageSrc="/PIPE1.webp"
          readMoreLink="/expansionjoint/Swellstop"
        />

        <Accordion
          title="Supershield SWELLGEL"
          content="Supershield SWELLGEL is a hydroexpansive sealant for pipe penetrations and fixing SWELLBELT and SWELLINE if additional protection is required."
          imageSrc="/PIPE2.webp"
          readMoreLink="/expansionjoint/Swellstop"
        />
      </div>

      {/* <div className="mt-8 text-right">
        <button  onClick={() => {
          document.getElementById("drybox")?.scrollIntoView({ behavior: "smooth" });
        }} className="border border-gray-800 px-4 py-2 text-sm hover:bg-gray-100 transition open-sans">
          Slide up
        </button>
      </div> */}
      <div className="mt-8 text-right">
        <button
          onClick={() => {
            document
              .getElementById("drybox")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="relative overflow-hidden border border-gray-800 px-4 py-2 text-sm text-gray-800 transition duration-300 group"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white hover:text-white">
            Slide up
          </span>
          <span className="absolute inset-0 bg-[#C50022] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></span>
        </button>
      </div>
    </div>
  );
}
