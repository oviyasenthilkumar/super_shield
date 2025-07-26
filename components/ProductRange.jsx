// "use client";
// import Image from "next/image";

// const products = [
//   {
//     title: "Supershield Panelstop",
//     subtitle: "Waterstops for construction joints",
//     description: `Supershield PANELSTOP galvanised steel waterstops are engineered from galvanized steel sheets, featuring a specialized double-sided coating designed to create a robust bond with fresh concrete. This unique coating ensures a durable seal and long-lasting performance by effectively binding the overlapping joints, which are then secured with clamps that integrate seamlessly with the concrete. The entire surface of the coated sheet is protected by a thin layer of foil, preserving its integrity during handling and installation. Clamping brackets are provided as accessories, further facilitating the achievement of a watertight seal.`,
//     image: "/panelstop1.webp",
//     pdfLink: "/Panelstop.pdf",
//     downloadLabel: "Download TDS",
//   },
//   {
//     title: "Supershield Panelstop F",
//     subtitle: "Waterstops with Fixing Brackets for Construction Joints",
//     description: `SUPERSHIELD PANELSTOP F galvanised steel waterstops are engineered from galvanized steel sheets, featuring a specialized double-sided coating designed to create a robust bond with fresh concrete. This unique coating ensures a durable seal and long-lasting performance by effectively binding the overlapping joints, which are then secured with clamps that integrate seamlessly with the concrete. The entire surface of the coated sheet is protected by a thin layer of foil, preserving its integrity during handling and installation. The Supershield PANELSTOP F comes with fixing brackets, simplifying the installation process to meet different project requirements. Additionally, clamping brackets are provided as accessories, further facilitating the achievement of a watertight seal.`,
//     image: "/Panelstop F.webp",
//     pdfLink: "/Panelstop-F.pdf",
//     downloadLabel: "Download TDS",
//   },
//   {
//     title: "Supershield  Panelstop SL",
//     subtitle: "Waterstops with Swellable Lining for Construction Joints",
//     description: `Supershield PANELSTOP SL galvanised steel waterstops are engineered from galvanized steel sheets featuring a specialized double-sided coating designed to create a strong bond with fresh concrete, and a dual rubber swellable lining is based on Supershield SWELLSTOP. The unique coating ensures a durable seal and long-lasting performance by effectively binding the overlapping joints, which are then secured with clamps that integrate seamlessly with the concrete. When in contact with water, the swellable lining expands to seal within the concrete joints, effectively blocking the passage of water while ensuring a durable seal and long-lasting performance. A thin layer of foil protects the entire surface of the coated sheet, maintaining its integrity during handling and installation. Clamping brackets are provided as accessories, further facilitating the achievement of a watertight seal.`,
//     image: "/Panelstop SL.webp",
//     pdfLink: "/PanelstopSL.pdf",
//     downloadLabel: "Download TDS",
//   },
//   {
//     title: "Supershield Panelstop SL-F",
//     subtitle: "Waterstops with Swellable Lining and Fixing Brackets for Construction Joints",
//     description: `Supershield PANELSTOP SL-F galvanised steel waterstops are engineered from galvanized steel sheets featuring a specialized double-sided coating designed to create a strong bond with fresh concrete, and a dual rubber swellable lining is based on Supershield SWELLSTOP. The unique coating ensures a durable seal and long-lasting performance by effectively binding the overlapping joints, which are then secured with clamps that integrate seamlessly with the concrete. When in contact with water, the swellable lining expands to seal within the concrete joints, effectively blocking the passage of water while ensuring a durable seal and long-lasting performance. A thin layer of foil protects the entire surface of the coated sheet, maintaining its integrity during handling and installation. The Supershield PANELSTOP SL-F comes with fixing brackets, simplifying the installation process to meet different project requirements. Additionally, clamping brackets are provided as accessories, further facilitating the achievement of a watertight seal.`, // shorten or replace with full text
//     image: "/Panelstop SL-F.webp",
//     pdfLink: "/PanelstopSL-F.pdf",
//     downloadLabel: "Download TDS",
//   },
//   {
//     title: "Supershield Panelstop CI",
//     subtitle: "Waterstops for programmed cracks",
//     description: `SUPERSHIELD PANELSTOP CI galvanised steel waterstops with a perpendicular crack-inducing plate specifically designed for programmed cracks. They are engineered from galvanized steel sheets featuring a specialized double-sided coating designed to create a strong bond with fresh concrete, and a dual rubber swellable lining is based on Supershield SWELLSTOP. The unique coating ensures a durable seal and long-lasting performance by effectively binding the overlapping joints, which are then secured with clamps that integrate seamlessly with the concrete. When in contact with water, the swellable lining expands to seal within the concrete joints, effectively blocking the passage of water while ensuring a durable seal and long-lasting performance. A thin layer of foil protects the entire surface of the coated sheet, maintaining its integrity during handling and installation.`,
//     image: "/Panelstop CI.webp",
//     pdfLink: "/PanelstopCI.pdf",
//     downloadLabel: "Download TDS",
//   },

// ];

// export default function ProductRangePage() {
//   return (
//     <section className="max-w-7xl mx-auto px-2 md:px-12 py-12 bg-white">
//       <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-12 pb-2 text-gray-900">
//         Product Range
//       </h1>

//       <div className="space-y-16">
//         {products.map((product, index) => (
//           <div
//             key={index}
//             className="bg-[#EDEDED] px-3 md:p-12 flex flex-col md:flex-row items-start"
//           >
//             <div className="w-full md:w-[30%] mx-auto">
//               <Image
//                 src={product.image}
//                 alt={product.title}
//                 width={350}
//                 height={200}
//                 className="w-auto h-auto object-contain"
//               />
//             </div>

//             <div className="w-full md:w-[60%]">
//               <h2 className="text-xl md:text-3xl font-semibold poppins text-gray-900 mb-1">
//                 <span className="text-[#C50022]">Supershield</span>{" "}
//                 {product.title.replace("Supershield", "").trim()}
//               </h2>
//               <p className="text-lg md:text-xl font-semibold mb-3 text-gray-800 open-sans">
//                 {product.subtitle}
//               </p>
//               <p className="text-gray-700 leading-7 text-sm md:text-base  text-justify mb-6 open-sans">
//                 {product.description}
//               </p>
//               <a
//                 href={product.pdfLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="open-sans mt-5 font-semibold border border-[#c50022] bg-[#c50022] text-white px-6 py-4 text-sm md:text-base hover:bg-white hover:text-[#c50022] transition-all duration-300"
//               >
//                 {product.downloadLabel} <span className="ml-2">↓</span>
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
"use client";
import Image from "next/image";

const products = [
  {
    title: "Supershield Panelstop",
    subtitle: "Waterstops for construction joints",
    description: `Supershield PANELSTOP galvanised steel waterstops are engineered from galvanized steel sheets, featuring a specialized double-sided coating designed to create a robust bond with fresh concrete. This unique coating ensures a durable seal and long-lasting performance by effectively binding the overlapping joints, which are then secured with clamps that integrate seamlessly with the concrete. The entire surface of the coated sheet is protected by a thin layer of foil, preserving its integrity during handling and installation. Clamping brackets are provided as accessories, further facilitating the achievement of a watertight seal.`,
    image: "/panelstop1.webp",
    pdfLink: "/Panelstop.pdf",
    downloadLabel: "Download TDS",
  },
  {
    title: "Supershield Panelstop F",
    subtitle: "Waterstops with Fixing Brackets for Construction Joints",
    description: `SUPERSHIELD PANELSTOP F galvanised steel waterstops are engineered from galvanized steel sheets, featuring a specialized double-sided coating designed to create a robust bond with fresh concrete. This unique coating ensures a durable seal and long-lasting performance by effectively binding the overlapping joints, which are then secured with clamps that integrate seamlessly with the concrete. The entire surface of the coated sheet is protected by a thin layer of foil, preserving its integrity during handling and installation. The Supershield PANELSTOP F comes with fixing brackets, simplifying the installation process to meet different project requirements. Additionally, clamping brackets are provided as accessories, further facilitating the achievement of a watertight seal.`,
    image: "/Panelstop F.webp",
    pdfLink: "/Panelstop-F.pdf",
    downloadLabel: "Download TDS",
  },
  {
    title: "Supershield  Panelstop SL",
    subtitle: "Waterstops with Swellable Lining for Construction Joints",
    description: `Supershield PANELSTOP SL galvanised steel waterstops are engineered from galvanized steel sheets featuring a specialized double-sided coating designed to create a strong bond with fresh concrete, and a dual rubber swellable lining is based on Supershield SWELLSTOP. The unique coating ensures a durable seal and long-lasting performance by effectively binding the overlapping joints, which are then secured with clamps that integrate seamlessly with the concrete. When in contact with water, the swellable lining expands to seal within the concrete joints, effectively blocking the passage of water while ensuring a durable seal and long-lasting performance. A thin layer of foil protects the entire surface of the coated sheet, maintaining its integrity during handling and installation. Clamping brackets are provided as accessories, further facilitating the achievement of a watertight seal.`,
    image: "/Panelstop SL.webp",
    pdfLink: "/PanelstopSL.pdf",
    downloadLabel: "Download TDS",
  },
  {
    title: "Supershield Panelstop SL-F",
    subtitle:
      "Waterstops with Swellable Lining and Fixing Brackets for Construction Joints",
    description: `Supershield PANELSTOP SL-F galvanised steel waterstops are engineered from galvanized steel sheets featuring a specialized double-sided coating designed to create a strong bond with fresh concrete, and a dual rubber swellable lining is based on Supershield SWELLSTOP. The unique coating ensures a durable seal and long-lasting performance by effectively binding the overlapping joints, which are then secured with clamps that integrate seamlessly with the concrete. When in contact with water, the swellable lining expands to seal within the concrete joints, effectively blocking the passage of water while ensuring a durable seal and long-lasting performance. A thin layer of foil protects the entire surface of the coated sheet, maintaining its integrity during handling and installation. The Supershield PANELSTOP SL-F comes with fixing brackets, simplifying the installation process to meet different project requirements. Additionally, clamping brackets are provided as accessories, further facilitating the achievement of a watertight seal.`, // shorten or replace with full text
    image: "/Panelstop SL-F.webp",
    pdfLink: "/PanelstopSL-F.pdf",
    downloadLabel: "Download TDS",
  },
  {
    title: "Supershield Panelstop CI",
    subtitle: "Waterstops for programmed cracks",
    description: `SUPERSHIELD PANELSTOP CI galvanised steel waterstops with a perpendicular crack-inducing plate specifically designed for programmed cracks. They are engineered from galvanized steel sheets featuring a specialized double-sided coating designed to create a strong bond with fresh concrete, and a dual rubber swellable lining is based on Supershield SWELLSTOP. The unique coating ensures a durable seal and long-lasting performance by effectively binding the overlapping joints, which are then secured with clamps that integrate seamlessly with the concrete. When in contact with water, the swellable lining expands to seal within the concrete joints, effectively blocking the passage of water while ensuring a durable seal and long-lasting performance. A thin layer of foil protects the entire surface of the coated sheet, maintaining its integrity during handling and installation.`,
    image: "/Panelstop CI.webp",
    pdfLink: "/PanelstopCI.pdf",
    downloadLabel: "Download TDS",
  },
];

export default function ProductRange() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 bg-white">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold poppins mb-12 text-gray-900 text-center md:text-left">
        Product Range
      </h1>

      <div className="space-y-16">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-[#EDEDED] p-6 md:p-10 flex flex-col md:flex-row md:items-start gap-6"
          >
            {/* Image Section */}
            <div className="w-full md:w-[35%]">
              <Image
                src={product.image}
                alt={product.title}
                width={500}
                height={300}
                className="w-full h-auto object-contain rounded-md"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-[65%]">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-900 poppins">
                <span className="text-[#C50022]">Supershield</span>{" "}
                {product.title.replace("Supershield", "").trim()}
              </h2>
              <p className="text-lg md:text-xl font-semibold mb-3 text-gray-800 poppins">
                {product.subtitle}
              </p>
              <p className="text-gray-800 text-sm md:text-base font-normal leading-7 open-sans text-justify mb-6">
                {product.description}
              </p>
              <div className="w-full sm:w-fit">
                <a
                  href={product.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block open-sans text-center font-semibold border border-[#c50022] bg-[#c50022] text-white px-6 py-3 text-sm md:text-base hover:bg-white hover:text-[#c50022] transition-all duration-300 "
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
