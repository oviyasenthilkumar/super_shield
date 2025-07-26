"use client";
import Image from "next/image";

const products = [
  {
    title: "Supershield Flexstrip 250",
    subtitle: "TPE Based, Elastic Dilatation Tape",
    description: `FLEXSTRIP 250 Dilatation Tape is a 250 mm wide, highly elastic elastomer designed for the insulation of expansion joint gaps, large cracks, and thermal gaps in all types of buildings. It is widely used in foundations, walls, wastewater treatment plants, water tanks, tunnels, and concrete pipes. The tape is resistant to UV light and external weather conditions, providing reliable performance across a wide range of temperatures. FLEXSTRIP 250 is available in thicknesses of 1 mm, 1.5 mm, and 2 mm, with options for versions with holes and without holes.`,
    image: "/Flexstrip250.webp",
    pdfLink: "/FLEXSTRIP250.pdf",
    downloadLabel: "Download TDS",
  },
  {
    title: "Supershield Flexstrip LF 120",
    subtitle: "Elastic Tapes for Construction Joints",
    description: `FLEXSTRIP LF 120 Tape, made from a thermoplastic elastomer polyester mesh, is designed for isolating critical points in construction. It is ideal for use in wet areas such as bathrooms and toilets, as well as watertight constructions, roofs, and parapets.`,
    image: "/FlexstripLT.webp",
    pdfLink: "/FLEXSTRIPLF120.pdf",
    downloadLabel: "Download TDS",
  },
];

export default function FlexstripProducts() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-0 py-12 bg-white">
      <h1 className="text-2xl md:text-3xl lg:text-4xl poppins font-semibold mb-12 pb-2 text-gray-900">
        Product Range
      </h1>

      <div className="space-y-16">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-gray-50 p-8 rounded-md grid md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={200}
                className="w-auto h-auto object-contain"
              />
            </div>

            <div>
              <h2 className="text-xl md:text-3xl font-semibold poppins text-gray-900 mb-1">
                <span className="text-[#C50022]">Supershield {" "}</span>
                {product.title.replace("Supershield", "").trim()}
              </h2>
              <p className="text-lg md:text-xl font-semibold mb-3 text-gray-800 open-sans">
                {product.subtitle}
              </p>
              <p className="text-gray-700 leading-7 text-sm md:text-base  text-justify mb-6 open-sans">
                {product.description}
              </p>
              <a
                href={product.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="open-sans mt-4 font-semibold border border-[#B41424] bg-[#B41424] text-white px-6 py-4 text-sm md:text-base hover:bg-white hover:text-[#B41424] transition-all duration-300"
              >
                {product.downloadLabel} <span className="ml-2">↓</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
