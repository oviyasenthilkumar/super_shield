"use client";
import Image from "next/image";

const products = [
  {
    title: "Supershield Jointbelt",
    subtitle: "WPVC waterstops for Internal Construction Joints",
    description: `SUPERSHIELD JOINTBELT is a specially formulated polyvinyl chloride (PVC) waterstop designed to provide effective sealing of internal side of construction joint areas, ensuring durable waterproofing. It is resistant to harsh environments, aging, degradation, saltwater intrusion, UV radiation, and ozone exposure, as well as a wide array of chemicals and atmospheric agents commonly present in groundwater and air. It can accommodate joint movements while also preventing water from passing through them.`,
    image: "/jointbelt 1.webp",
    pdfLink: "/Jointbelt.pdf",
    downloadLabel: "Download TDS",
  },
  {
    title: "Supershield Jointbelt B",
    subtitle: "PVC Waterstops For Internal Expansion Joints",
    description: `SUPERSHIELD JOINTBELT B is a specially formulated polyvinyl chloride (PVC) waterstop with a central bulb and high elasticity to accommodate structural movement. It is specifically designed to provide effective sealing of Internal side of expansion joint areas, ensuring durable waterproofing. It is resistant to harsh environments, aging, degradation, saltwater intrusion, UV radiation, and ozone exposure, as well as a wide array of chemicals and atmospheric agents commonly present in groundwater and air. It can accommodate joint movements while also preventing water from passing through them. SUPERSHIELD JOINTBELT B possesses flexibility, resilience, toughness, chemical inertness, resistance to weathering, low temperatures, and continuous water immersion.`,
    image: "/Jointbelt B.webp",
    pdfLink: "/Jointbelt-B.pdf",
    downloadLabel: "Download TDS",
  },
  {
    title: "Supershield Jointbelt Ext",
    subtitle: "PVC Waterstops for External Side of Construction Joints",
    description: `SUPERSHIELD JOINTBELT EXT is a polyvinyl chloride (PVC) waterstop specifically designed to provide effective sealing of the external side of Construction joint areas ensuring durable waterproofing. It is resistant to harsh environments, aging, degradation, saltwater intrusion, UV radiation, and ozone exposure, as well as a wide array of chemicals and atmospheric agents commonly present in groundwater and air. It can accommodate joint movements while also preventing water from passing through them. SUPERSHIELD JOINTBELT EXT possesses flexibility, resilience, toughness, chemical inertness, resistance to weathering, low temperatures, and continuous water immersion.`,
    image: "/Jointbelt Ext.webp",
    pdfLink: "/Jointbelt-Ext.pdf",
    downloadLabel: "Download TDS",
  },
  {
    title: "Supershield Jointbelt Ext B",
    subtitle:
      "PVC Waterstops with Central Bulb for External Side of the Expansion Joint",
    description: `SUPERSHIELD JOINTBELT EXT B is a polyvinyl chloride (PVC) waterstop with a central bulb specifically designed to provide effective sealing of the external side of expansion joint areas ensuring durable waterproofing. It is resistant to harsh environments, aging, degradation, saltwater intrusion, UV radiation, and ozone exposure, as well as a wide array of chemicals and atmospheric agents commonly present in groundwater and air. It can accommodate joint movements while also preventing water from passing through them. SUPERSHIELD JOINTBELT EXT B possesses flexibility, resilience, toughness, chemical inertness, resistance to weathering, low temperatures, and continuous water immersion.`,
    image: "/Jointbelt Ext B.webp",
    pdfLink: "/Jointbelt-Ext-B.pdf",
    downloadLabel: "Download TDS",
  },
  {
    title: "Supershield Jointbelt B/SL",
    subtitle:
      "PVC Waterstops with Central Bulb and Swellable Lining for Expansion Joints",
    description: `SUPERSHIELD JOINTBELT B/SL is a specially formulated polyvinyl chloride (PVC) waterstop with a central bulb, swellable lining and high elasticity to accommodate structural movement. It is specifically designed to provide effective sealing of expansion joint areas, ensuring durable waterproofing. It is resistant to harsh environments, aging, degradation, saltwater intrusion, UV radiation, and ozone exposure, as well as a wide array of chemicals and atmospheric agents commonly present in groundwater and air. It can accommodate joint movements while also preventing water from passing through them. SUPERSHIELD JOINTBELT B/SL possesses flexibility, resilience, toughness, chemical inertness, resistance to weathering, low temperatures, and continuous water immersion.`,
    image: "/jointbeltB-SL.webp",
    pdfLink: "/Jointbelt-B-SL.pdf",
    downloadLabel: "Download TDS",
  },
  {
    title: "Supershield Jointbelt CI",
    subtitle: "PVC Waterstops with V-shaped Bulb for Programmed Cracks",
    description: `The JOINTBELT CI is a polyvinyl chloride (PVC) waterstop with a v-shaped central bulb and two lanes for hydro-expansive cord insertion. The design caters to expansion joints, structural movement joints, construction resumption joints, and programmed cracks in concrete. JOINTBELT CI possesses flexibility, resilience, toughness, chemical inertness, resistance to weathering, low temperatures, and continuous water immersion.`,
    image: "/Jointbelt CI.webp",
    pdfLink: "/Jointbelt-CI.pdf",
    downloadLabel: "Download TDS",
  },
];

export default function Products() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-0 py-12 bg-white">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-12 pb-2 text-gray-900 poppins">
        Product Range
      </h1>

      <div className="space-y-16">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-[#EDEDED] p-12 rounded-md flex flex-col lg:flex-row  items-center"
          >
            <div className="w-full lg:w-[30%] mx-auto">
              <Image
                src={product.image}
                alt={product.title}
                width={250}
                height={200}
                className="w-auto h-auto"
              />
            </div>
            <div className="w-full lg:w-[60%]">
              <h2 className="text-xl md:text-3xl font-semibold poppins text-gray-900 mb-1 leading-10">
                <span className="text-[#C50022]">Supershield</span>{" "}
                {product.title.replace("Supershield", "").trim()}
              </h2>
              <p className="text-lg md:text-xl font-semibold mb-3 text-gray-800 poppins leading-8">
                {product.subtitle}
              </p>
              <p className="text-gray-800 leading-7 text-sm md:text-base font-normal text-justify mb-6 open-sans">
                {product.description}
              </p>
              <a
                href={product.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="open-sans mt-4 font-semibold border border-[#c50022] bg-[#c50022] text-white px-6 py-4 text-sm md:text-base hover:bg-white hover:text-[#c50022] transition-all duration-300"
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
