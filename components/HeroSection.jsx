"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero_bg.webp"
        alt="Adaptive Crystalline Technology"
        layout="fill"
        style={{ objectFit: "cover" }}
        className="z-0"
        priority
      />

      {/* Overlay Content */}
      <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 text-white text-left flex flex-col items-start md:items-start justify-center h-full">
        <div className=" p-6 md:p-10 max-w-4xl ">
          <h1 className="text-3xl md:text-7xl font-bold leading-tight poppins ">
            <span className=" font-bold">Adaptive</span>{" "}
            <span className="italic font-semibold pr-2">
              Crystalline Technology
            </span>
            <sup>®</sup>
          </h1>

          <p className="mt-4 text-2xl md:text-4xl font-semibold sm:leading-8 md:leading-9 lg:leading-10 open-sans">
            Future of Self–Healing Concrete for Sustainability
          </p>
          <p className="mt-4 text-lg md:text-xl text-white md:leading-9 open-sans">
            A suite of advanced{" "}
            <span className="font-semibold">
              self-healing crystalline technologies
            </span>{" "}
            engineered to adapt, protect, and enhance the resilience and
            longevity of concrete structures.
          </p>
        <Link
          href="/sustainability">
          <button className="mt-6 inline-flex items-center border-[1px] border-[#B41424] hover:border hover:border-[#B41424] bg-[#B41424] hover:bg-white  hover:text-[#B41424] text-white px-5 py-4 transition cursor-pointer open-sans">
            EXPLORE SHIELD<sup>® </sup> SOLUTIONS
          </button>
          </Link>
        </div>
      </div>

      {/* Optional gradient or overlay */}
      <div className="absolute inset-0 bg-black/18 z-5"/>
    </section>
  );
};

export default HeroSection;
