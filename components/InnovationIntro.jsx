"use client";
import React from "react";
import Link from "next/link";

const InnovationIntro = () => {
  return (
    <section className="bg-white px-6 md:px-14 py-16 md:py-8 text-black">
      <div className="max-w-7xl mx-auto text-center md:text-left">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-10 tracking-wide text-left poppins">
          Leading the Future of Concrete Protection
        </h2>

        {/* Paragraph */}
        <p className="mt-6 text-justify text-sm md:text-base  max-w-6xl md:text-lg font-normal leading-7 text-black tracking-normal open-sans">
          Supershield is an innovator and global leader in self-healing concrete
          technologies, offering sustainable, high-performance solutions that
          enhance the durability, longevity, and resilience of concrete. Our{" "}
          <span className="font-semibold">
            SHIELD<sup>®</sup>
          </span>{" "}
          ( <span className="font-bold">S</span>elf-
          <span className="font-bold">H</span>ealing{" "}
          <span className="font-bold">I</span>nnovations for{" "}
          <span className="font-bold">E</span>nhanced{" "}
          <span className="font-bold">L</span>ongevity and{" "}
          <span className="font-bold">D</span>urability ){" "}
          <span className="font-bold">Crystalline Technologies</span> power a
          complete range of eco-friendly products—including waterproofing
          admixtures, coatings, mortars, repair systems — designed to extend
          concrete lifespan and reduce maintenance. Built for extreme conditions
          and evolving infrastructure needs, Supershield combines innovation
          with localized expertise to deliver customized, system-based solutions
          worldwide.
        </p>

        {/* CTA */}
        <div className="mt-6 text-left open-sans">
          <Link
            href="/innovation"
            className="text-[#b51724] font-semibold uppercase text-sm md:text-base  inline-flex items-center gap-2 hover:underline"
          >
            <img
              src="/angle-right.png"
              alt="arrow"
              width={12}
              className=" inline"
            />
            Discover Our Innovations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InnovationIntro;
