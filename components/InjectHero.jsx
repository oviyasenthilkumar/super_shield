"use client";

import Image from "next/image";

export default function InjectHero({ details }) {
  return (
    <div className=" bg-white flex flex-col justify-center px-4 md:px-20 py-10 ">
      <div className="flex flex-col lg:flex-row gap-10 items-center max-w-7xl mx-auto">
        {/* Left - Product Image */}
        <div className="mx-auto w-full lg:w-[30%]">
          <img
            src={details.img}
            alt="Supershield DPC ADMIXPLUS"
            width={400}
            height={400}
            className="object-contain w-full max-w-md"
          />
        </div>
        {/* Right - Product Details */}
        <div className="w-full lg:w-[60%]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-8 md:leading-9 poppins">
            <span className="text-[#C50022]">Supershield</span> {details.title}
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 leading-7 md:leading-8 poppins">
            {details.subtitle}
          </h2>
          <p className="text-gray-700 text-justify md:leading-7 space-y-2 open-sans leading-6">
            {details.para}
          </p>
        </div>
      </div>
    </div>
  );
}
