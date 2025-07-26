"use client";

import Image from "next/image";
import Link from "next/link";

const relatedProducts = [
  {
    name: "INJECT 6870",
    image: "/inject6870.webp",
    description:
      "Hydro- expansive polyurethane resin with low viscosity , ideal for sealing and ensuring water tighness in cracks and joints on walls and floors , concrete constructions, and sewer systems.",
    href: "/Inject6870",
  },
  {
    name: "INJECT 6890",
    image: "/inject6890.webp",
    description:
      "Hydro- expansive polyurethane resin with medium viscosity, ideal for sealing and ensuring water tighness in cracks and joints on wallls and floors, concrete constructions, and sewer systems.",
    href: "/Inject6890",
  },
  {
    name: "INJECT 1000",
    image: "/inject1000.webp",
    description:
      "Hydro- expansive , semi- flexible injectable polyurethane resin perfect for filling and sealing small cavities , joints and discontinuites subject to movement.",
    href: "/Inject1000",
  },
  {
    name: "INJECT 2000",
    image: "/inject2000.webp",
    description:
      "Hydro-expansive, solvent-free polyurethane resin, specially formulated for injection sealing of small and large water leaks in concrete and solid masonry, ensuring a durable and watertight solution.",
    href: "/Inject2000",
  },
  {
    name: "INJECT PACKER",
    image: "/inject-packer.webp",
    description:
      "Flat-head steel and rubber injectors for masonry injections, designed for direct insertion at damage points to instantly stop water infiltration.",
    href: "/Injectpacker",
  },
  {
    name: "INJECT CONNECTOR",
    image: "/inject-connector.webp",
    description:
      "A connecting element between the pumping tube and flat-head injectors, designed to block water infiltration with water-reactive polyurethane resin injections.",
    href: "/Injectconnector",
  },
  {
    name: "PUMP CLEANER",
    image: "/pump-cleaner.webp",
    description:
      "Specialized cleaning agent designed for cleaning injection equipment used with resins to stop water infiltration in buildings.",
    href: "/pumpcleaner",
  },
];

export default function InjectProducts() {
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
              <img
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
