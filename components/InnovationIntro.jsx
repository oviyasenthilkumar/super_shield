"use client";
import React from "react";

const InnovationIntro = () => {
  return (
    <section className="bg-white px-6 md:px-12 py-16 text-black">
      <div className="max-w-7xl mx-auto text-center md:text-left">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-left poppins">
          Leading the Future of <span className="">Concrete Protection</span>
        </h2>

        {/* Paragraph */}
        <p className="mt-6 text-base md:text-lg leading-relaxed text-black text-left open-sans">
          Supershield is an innovator and global leader in self-healing concrete
          technologies, offering sustainable, high-performance solutions that
          enhance the durability, longevity, and resilience of concrete. Our{" "}
          <span className="font-semibold">
            SHIELD <sup>®</sup>
          </span>{" "}
          ( Self-Healing Innovations for Enhanced Longevity and Durability ){" "}
          <span className="font-semibold">Crystalline Technologies</span> power
          a complete range of eco-friendly products—including waterproofing
          admixtures, coatings, mortars, repair systems — designed to extend
          concrete lifespan and reduce maintenance. Built for extreme conditions
          and evolving infrastructure needs, Supershield combines innovation
          with localized expertise to deliver customized, system-based solutions
          worldwide.
        </p>

        {/* CTA */}
        <div className="mt-6 text-left open-sans">
          <a
            href="#"
            className="text-[#b51724] font-semibold uppercase text-sm inline-flex items-center gap-2 hover:underline"
          >
            Discover Our Innovations <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InnovationIntro;
