"use client";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "Supershield Swellbelt",
    subtitle: "For Construction Joints and Pipe Penetrations",
    description: `Supershield Swellbelt is the perfect solution for sealing construction joints in pipe penetrations. Designed with utmost precision and engineering excellence, this product ensures a watertight seal, providing unmatched protection against leaks and water damage. Its dual rubber composition enhances its sealing capabilities, allowing it to expand and swell upon contact with water, effectively sealing off any potential entry points. These profiles possess a unique ability to absorb water and expand, effortlessly conforming to gap variations along the joint.`,
    image: "/Swellbelt.webp",
    downloadLabel: "Download TDS",
  },
  {
    title: "Supershield Swelline",
    subtitle: "For Tunnel Segments, Concrete curbs",
    description: `Supershield Swelline is designed to provide an exceptional solution for sealing tunnel segment joints. With its unique double packing effect of compression and expansion, it ensures a reliable and efficient sealing process. The Supershield Swelline range of products is made of water-expandable chloroprene rubber polymerized specifically for the tunnel line segment. Supershield Swelline is available in different profiles and sizes, and in general, it has two types: single-structure seals (only hydrophilic rubber) and composite-structure seals (a combination of hydrophilic rubber and non-hydrophilic rubber).`,
    image: "/Swelline B.webp",
    downloadLabel: "Download TDS",
  },
  {
    title: "Supershield Swellrod",
    subtitle: "For Joint Repairs, Control joints and Special applications",
    description: `Supershield Swellrod is a dual rubber swellable waterstop rod for waterproofing and repairing precast joints that creates an effective compression seal within joints and shuts out the water path. Supershield Swellrod profiles effectively seal the control joints and repair the failed joints. Swellrod eliminates hydrostatic pressure below the sealant, thus extending the sealant’s life.`,
    image: "/Swellrod Ext.webp",
    downloadLabel: "Download TDS",
  },
  {
    title: "Supershield Swellplug",
    subtitle: "For Tie- Holes",
    description: `Form ties secure concrete wall forms against the lateral pressure of newly placed concrete. Supershield Swellplug, a hydrophilic waterstop plug, is used effortlessly to form a reliable compression seal inside or around tie-holes in any concrete structure.`,
    image: "/Swellplug.webp",
    downloadLabel: "Download TDS",
  },
  {
    title: "Supershield Swellring",
    subtitle: "For Formwork Spacers and Tie- Rods",
    description: `Supershield Swellring is a hydrophilic waterstop ring used for tie-rods and pipe penetrations in concrete to be sealed. Swellrings are available in a range of internal diameters to meet varying needs.`,
    image: "/Swellring.webp",
    downloadLabel: "Download TDS",
  },
  {
    title: "Supershield Swellgel",
    subtitle: "For Pipe Penetrations",
    description: `Supershield Swellgel is a hydro expansive sealant for pipe penetrations and fixing Swellbelt and Swelline if additional protection is required. The Supershield SWELLBELT, SWELLINE , SWELLROD profiles can be bonded to various piping materials , including concrete , steel and plastic .In Pipe Penetrations, which are more than 6 inches , Supershield SWELLBELT is used and sealed with SWELLGEL.`,
    image: "/Swellgel.webp",
    downloadLabel: "Download TDS",
  },
];

export default function SwellstopProduct() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 bg-white">
      <h1 className="text-2xl md:text-3xl font-semibold mb-12 pb-2 text-gray-900">
        Product Range
      </h1>

      <div className="space-y-16">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-[#EDEDED] p-8 grid md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <Image
                src={product.image}
                alt={product.title}
                width={350}
                height={200}
                className="w-auto h-auto object-contain"
              />
            </div>

            <div>
              <h2 className="text-xl md:text-3xl font-semibold poppins text-gray-900 mb-1">
                <span className="text-[#C50022]">Supershield</span>{" "}
                {product.title.replace("Supershield", "").trim()}
              </h2>
              <p className="text-lg md:text-xl font-semibold mb-3 text-gray-800 open-sans">
                {product.subtitle}
              </p>
              <p className="text-gray-700 leading-7 text-sm md:text-base  text-justify mb-6 open-sans">
                {product.description}
              </p>
              <Link
                href="/ProductCatalogueModal"
                className="open-sans mt-4 inline-block bg-[#C50022] text-white font-semibold px-6 py-4 hover:bg-[#C50022] transition"
              >
                {product.downloadLabel} <span className="ml-2">↓</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
