'use client';

import Image from "next/image";

export default function clearguardHero() {
  return (
    <div className=" bg-white flex flex-col justify-center px-4 md:px-20 py-10 ">
      <div className="flex flex-col lg:flex-row gap-10 items-center max-w-7xl mx-auto">
        {/* Left - Product Image */}
        <div className="mx-auto w-full lg:w-[30%]">
          <Image
            src="/clearseal.webp"
            alt="Supershield DPC ADMIXPLUS"
            width={400}
            height={400}
            className="object-contain w-full max-w-md"
          />
        </div>
        {/* Right - Product Details */}
        <div className="w-full lg:w-[60%]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 leading-8 lg:leading-10 poppins">
            <span className="text-[#C50022]">Supershield</span> CLEARSEAL
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-gray-800 poppins leading-7">
            Water-based Repellant Sealer for Concrete
          </h2>
          <p className="text-gray-700 text-justify text-sm md:text-base font-normal leading-7 open-sans mb-4">
            SUPERSHIELD CLEARSEAL is a ready to use water based sealer that
            penetrates deep into the concrete and masonry surfaces and
            hydrolysis in the pores and capillaries forming a weather and
            chemical barrier without changing the appearance. It is specially
            formulated to work by itself and in conjunction as a topcoat with
            SUPERSHIELD CRYSTALSPRAY as well with Supershield Hardseal.
            SUPERSHIELD CLEARSEAL is applied by itself to concrete, bricks,
            stones, masonary surfaces, terracotta tiles, pavers, grout, and any
            neutral substrates to form a weather and chemical barrier without
            changing their original appearance.
          </p>
        </div>
      </div>
    </div>
  );
}