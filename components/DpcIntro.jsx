"use client";
import React from "react";
import Link from "next/link";

const DpcIntro = () => {
  return (
    <section className="px-4 py-12 md:px-0 lg:px-0 max-w-screen-xl mx-auto">
      {/* Brochure Section */}
          <div className="mt-16 max-w-6xl">
            {/* Outer wrapper for tablet & desktop background */}
            <div className="hidden md:block bg-gray-100 p-6 md:p-10 ">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Text Content */}
                <div className="text-left space-y-4 w-[60%] ">
                  <p className="text-lg md:text-xl font-medium text-gray-800 poppins leading-8">
                    Discover  <strong>"DPC Crystalline"</strong> products, engineered to enhance resilience, durability, and waterproofing performance for long-lasting concrete structures.{" "}
                  </p>
                  <button className="open-sans inline-block font-semibold border border-[#B41424] bg-[#B41424] text-white px-5 py-3 text-sm md:text-base hover:bg-white hover:text-[#B41424] transition-all duration-300">
                    View Products
                  </button>
                </div>
    
                {/* Image & Link */}
                <div className="flex flex-col items-center gap-2 w-[30%] mx-auto">
                  <div className="relative w-60 h-76">
                     <img
                  src="/book_multiseal.webp"
                  alt="Product Catalogue"
                  width={250}
                  height={300}
                />
                  </div>
                  <Link
                    href="/ProductCatalogueModal"
                    className="mt-4 underline-hover open-sans"
                  >
                    Download Brochure
                  </Link>
                </div>
              </div>
            </div>
    
            {/* Mobile view with no outer bg, just spacing */}
            <div className="block md:hidden space-y-6">
              <div className="space-y-4 bg-[#f7f7f7] p-5 text-justify">
                <p className="text-base font-medium text-gray-800 poppins">
                  Discover unique{" "}
                  <span className="font-bold">Multiseal Crystalline</span> products,
                  designed to deliver exceptional waterproofing, durability, and
                  self-healing protection for concrete structures.
                </p>
                <div className="w-full text-center">
                  <button className="open-sans inline-block font-semibold border border-[#B41424] bg-[#B41424] text-white px-5 py-3 text-sm hover:bg-white hover:text-[#B41424] transition-all duration-300">
                    View Products
                  </button>
                </div>
              </div>
    
              <div className="flex flex-col items-center gap-2">
                <div className="relative w-60 h-76">
                  <img
                    src="/book_multiseal.webp"
                    alt="Multiseal Brochure"
                    
                    className="object-contain"
                  />
                </div>
                <Link
                  href="/ProductCatalogueModal"
                  className="mt-4 underline-hover open-sans"
                >
                  Download Brochure
                </Link>
              </div>
            </div>
          </div>
        </section>
  );
};

export default DpcIntro;
