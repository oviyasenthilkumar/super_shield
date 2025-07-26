"use client";
import Image from "next/image";

const products = [
  {
    title: "Supershield Swellbelt",
    subtitle: "For Construction Joints and Pipe Penetrations",
    description: `Supershield Swellbelt is the perfect solution for sealing construction joints in pipe penetrations. Designed with utmost precision and engineering excellence, this product ensures a watertight seal, providing unmatched protection against leaks and water damage. Its dual rubber composition enhances its sealing capabilities, allowing it to expand and swell upon contact with water, effectively sealing off any potential entry points. These profiles possess a unique ability to absorb water and expand, effortlessly conforming to gap variations along the joint.`,
    image: "/Swellbeltproduct.webp",
    downloadLabel: "Download TDS",
  },
  {
    title: "Supershield Swelline",
    subtitle: "For Tunnel Segments, Concrete curbs",
    description: `Supershield Swelline is designed to provide an exceptional solution for sealing tunnel segment joints. With its unique double packing effect of compression and expansion, it ensures a reliable and efficient sealing process. The Supershield Swelline range of products is made of water-expandable chloroprene rubber polymerized specifically for the tunnel line segment. Supershield Swelline is available in different profiles and sizes, and in general, it has two types: single-structure seals (only hydrophilic rubber) and composite-structure seals (a combination of hydrophilic rubber and non-hydrophilic rubber).`,
    image: "/Swellineproduct.webp",
    downloadLabel: "Download TDS",
  },
  {
    title: "Supershield Swellrod",
    subtitle: "For Joint Repairs, Control joints and Special applications",
    description: `Supershield Swellrod is a dual rubber swellable waterstop rod for waterproofing and repairing precast joints that creates an effective compression seal within joints and shuts out the water path. Supershield Swellrod profiles effectively seal the control joints and repair the failed joints. Swellrod eliminates hydrostatic pressure below the sealant, thus extending the sealant’s life..

`,
    image: "/Swellrodproduct.webp",
    downloadLabel: "Download TDS",
  },
  {
    title: "Supershield Swellplug",
    subtitle: "For Tie- Holes",
    description: `Form ties secure concrete wall forms against the lateral pressure of newly placed concrete. Supershield Swellplug, a hydrophilic waterstop plug, is used effortlessly to form a reliable compression seal inside or around tie-holes in any concrete structure.
`,
    image: "/Swellplugproduct.webp",
    downloadLabel: "Download TDS",
  },
  {
    title: "Supershield Swellring",
    subtitle: "For Formwork Spacers and Tie- Rods",
    description: `Supershield Swellring is a hydrophilic waterstop ring used for tie-rods and pipe penetrations in concrete to be sealed. Swellrings are available in a range of internal diameters to meet varying needs.`,
    image: "/Swellringproduct.webp",
    downloadLabel: "Download TDS",
  },
  {
    title: "Supershield Swellgel",
    subtitle: "For Pipe Penetrations",
    description: `Supershield Swellgel is a hydro expansive sealant for pipe penetrations and fixing Swellbelt and Swelline if additional protection is required. The Supershield SWELLBELT, SWELLINE , SWELLROD profiles can be bonded to various piping materials , including concrete , steel and plastic .In Pipe Penetrations, which are more than 6 inches , Supershield SWELLBELT is used and sealed with SWELLGEL.`,
    image: "/Swellgelproduct.webp",
    downloadLabel: "Download TDS",
  },
];

export default function ProductForSwell() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-0 py-12 bg-white">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold poppins mb-12 pb-2 text-gray-900">
        Product Range
      </h1>

      <div className="space-y-18">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-[#F6F6F6] md:p-12 p-6 rounded-lg flex flex-col md:flex-row md:items-start gap-6"
          >
            {/* <div
            key={index}
            className="bg-[#F6F6F6] md:p-12 rounded-lg flex flex-col md:flex-row items-center"
          > */}
            {/* Product Image */}
            <div className=" w-full md:w-[30%] mx-auto">
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className="object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="w-full px-3 md:px-0 md:w-[60%]">
              <h2 className="text-2xl md:text-3xl font-semibold poppins text-gray-900 mb-1">
                <span className="text-[#C50022]">Supershield</span>{" "}
                {product.title.replace("Supershield", "").trim()}
              </h2>
              <p className="text-lg md:text-xl font-semibold poppins mb-3 text-gray-800 leading-7">
                {product.subtitle}
              </p>
              <p className="text-gray-700 leading-7 text-sm md:text-base text-justify mb-6 open-sans">
                {product.description}
              </p>

              <div className="w-full sm:w-fit">
                <a
                  href="/ProductCatalogueModal"
                  rel="noopener noreferrer"
                  className="block open-sans text-center font-semibold border border-[#c50022] bg-[#c50022] text-white px-6 py-3 text-sm md:text-base hover:bg-white hover:text-[#B41424] transition-all duration-300 "
                >
                  {product.downloadLabel} <span className="ml-2">↓</span>
                </a>                
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
