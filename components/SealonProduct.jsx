"use client";

import Image from "next/image";
import Link from "next/link";

const relatedProducts = [
  {
    name: "WAPPRIME",
    image: "/wapprime.webp",
    description:
      "Water-based, transparent, semi-rigid, deep-penetrating polyurethane primer for waterproofing, based on Supershield Wapelastic technology.",
  },
  {
    name: "INFRON",
    image: "/infron.webp",
    description:
      "One component water borne liquid applied abrasion and a wear-resistant protective coating based on Supershield Wapelastic technology.",
  },
  {
    name: "ROOFON",
    image: "/roofon.webp",
    description:
      "One-component waterborne, eco-friendly liquid applied waterproofing and cool roof membrane for roofs, walls, and concretes.",
  },
  {
    name: "CLERON",
    image: "/clearon.webp",
    description:
      "Waterborne liquid applied, transparent, abrasion-resistant protective coating based on Supershield wapleastic technology.",
  },
  {
    name: "ELASTAKOTE 100",
    image: "/elastakote100.webp",
    description:
      "Eco-friendly, one-component liquid-applied waterproofing coating based on modified polyurethane, forming a resilient barrier over concrete and masonry walls.",
  },
  {
    name: "ELASTAKOTE",
    image: "/elastakote.webp",
    description:
      "Eco-friendly, one-component liquid-applied waterproofing coating based on modified polyurethane, forming a resilient barrier over concrete and masonry walls.",
  },
  {
    name: "SEALON",
    image: "/sealon.webp",
    description:
      "Single-component, highly elastic, fast-hardening polyurethane sealant with medium to high modulus elasticity.",
  },
];

export default function SealonProduct() {
  return (
    <div className=" py-16 px-6 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl poppins font-semibold text-gray-800 mb-10">
          Related Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {relatedProducts.map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white border transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {/* Product Image */}
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-full object-contain mb-[32%]"
              />

              {/* Hover Slide-up Content */}
              <div className="absolute bottom-0 left-0 w-full bg-[#c50022] max-h-[70px] group-hover:max-h-[300px] transition-all duration-700 ease-in-out overflow-hidden p-4">
                <h4 className="text-white font-semibold poppins leading-7 tracking-wide text-center text-lg lg:text-lg">
                  {product.name}
                </h4>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 mt-2">
                  <p className="text-md text-white open-sans leading-6 text-left">
                    {product.description}
                  </p>
                  {/* Navigation Button */}
                  <Link
                    href={`/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="mt-4 text-white font-semibold hover:underline w-full text-center block"
                  >
                    VIEW MORE
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
