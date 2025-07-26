"use client";
import React from "react";
import Link from "next/link";

const DmcIntro = () => {
  return (
    <section className="bg-white px-6 md:px-14 py-16 md:py-8 text-black">
      <div className="max-w-7xl mx-auto text-center md:text-left">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold sm:leading-8 md:leading-9 lg:leading-10 tracking-wide text-left poppins">
          Dynamic Multifunctional Crystalline (DMC) Technology
        </h2>

        {/* Paragraph */}
        <p className="mt-6 text-left text-sm md:text-base max-w-6xl md:text-lg font-normal leading-7 text-black tracking-normal open-sans">
          Our Dynamic Multifunctional Crystalline Technology transforms concrete performance by embedding advanced multifunctional, adaptive, dynamic{" "}
          <span className="font-semibold">
            SHIELD<sup>®</sup>
          </span>{" "}
            crystals directly into the concrete matrix. This innovative technology is designed to enhance concrete resilience in challenging and changing environments from the casting stage of the concrete to its life cycle by effectively managing thermal energy and water in all its forms—liquid, vapor, and ice.
        </p>

        {/* CTA */}
        <section className="max-w-7xl mx-auto py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-[#f7f7f7] rounded-lg p-5 md:p-10 ">
            {/* Left Section */}
            <div>
              <h2 className="text-lg md:text-3xl font-semibold leading-7 lg:leading-9 tracking-wide text-left poppins mb-10">
                Discover our DMC products, designed to enhance resilience for
                long lasting concrete.
              </h2>
              <Link
                href="/products/dmc-crystalline-waterproofing"
                className="inline-block font-semibold border border-[#B41424] bg-[#c50022] open-sans text-white px-5 py-3 cursor-pointer text-sm md:text-base hover:bg-white hover:text-[#c50022] transition-all duration-300"
              >
                VIEW PRODUCTS
              </Link>
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-center justify-center mx-auto">
              <div className="w-[80%] md:w-full max-w-xs md:max-w-sm ">
                <img
                  src="/book_multiseal.webp"
                  alt="Product Catalogue"
                  width={250}
                  height={300}
                />
              </div>
              <a
                href="/ProductCatalogueModal"
                //  download
                className="mt-4 underline-hover open-sans"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default DmcIntro;
