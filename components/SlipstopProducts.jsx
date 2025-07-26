"use client";

import Image from "next/image";
import Link from "next/link";

const relatedProducts = [
  {
    name: "SLIPSTOP 100",
    image: "/slipstop100.webp",
    description:
      "Anti-slip treatment for artificial stones, which improves the slip resistance of floors by increasing the coefficient of friction without altering the appearance of floors.",
    href: "/slipstop-100",
  },
  {
    name: "SLIPSTOP 200",
    image: "/slipstop200.webp",
    description:
      "Anti-slip treatment for natural and artificial stones that improves the slip resistance of floors without altering their appearance or texture.",
    href: "/slipstop-200",
  },
];

export default function SlipstopProducts() {
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
                    href={product.href}
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
