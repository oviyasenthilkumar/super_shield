import Image from "next/image";
import Link from "next/link";

const relatedData = [
  {
    title: "DPC Crystalline Waterproofing Admixtures",
    items: [
      {
        name: "ADMIX 100",
        image: "/admix100.webp",
        description:
          "Cementitous crystalline admixture with self-healing properties for waterproofing concrete with minimal or no effect on setting time.",
      },
      {
        name: "ADMIX 200",
        image: "/admix200.webp",
        description:
          "Crystalline admixture for waterproofing concrete with self-healing properties, specifically for OPC-based concrete mixes, for projects where normal to mild retarded set is required.",
      },
      {
        name: "ADMIX 300",
        image: "/admix300.webp",
        description:
          "Crystalline admixture for waterproofing concrete with self-healing properties, specifically designed for RMC plant mix, for projects where extended retardation is required.",
      },
    ],
  },
  {
    title: "Surface Applied Crystalline Waterproofing",
    items: [
      {
        name: "CRYSTALGUARD",
        image: "/crystalline-crystalguard.webp",
        description:
          "Cementitious Crystalline coating to waterproof and protect new or existing concrete structures.",
      },
      {
        name: "CRYSTALGUARD ULTIMA",
        image: "/CRYSTALGUARD-ULTIMA.webp",
        description:
          "Highly concentrated cementitous crystalline waterproofing coating with enhanced performance that blocks moisture transmission in concrete.",
      },
      {
        name: "CRYSTALSPRAY",
        image: "/CRYSTALSPRAY.webp",
        description:
          "Single-compound water-based hygroscopic crystalline waterproofing coating.",
      },
    ],
  },
  {
    title: "Surface Applied Crystalline Waterproofing",
    items: [
      {
        name: "CRYSTALMIX",
        image: "/crystalmix.webp",
        description:
          "High-strength, non-shrink, free-flowing cementitious crystalline mortar specially formulated for concrete repair.",
      },
      {
        name: "CRYSTALMIX ULTRA",
        image: "/crystalmixultra.webp",
        description:
          "Structural R4 class, fiber-reinforced cementitious crystalline repair motor for patching and resurfacing deteriorated concrete.",
      },
      {
        name: "CRYSTALPATCH",
        image: "/crystalpatch.webp",
        description:
          "Fast-setting, non-shrink, high-bond strength cementitious crystalline mortar to plug active leakages.",
      },
    ],
  },
];
export default function RelatedProducts() {
  return (
    <div className="p-8 lg:px-0 max-w-7xl mx-auto space-y-12">
      {/* Related Products Main Title */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 poppins leading-10">
        Related Products
      </h2>

      {relatedData.map((section, i) => (
        <div key={i}>
          <h3 className="text-2xl font-semibold poppins leading-8 lg:leading-10 mb-6 border-l-4 border-[#c50022] pl-4">
            {section.title}
          </h3>

          <div className="flex flex-wrap gap-12 justify-center">
            {section.items.map((product, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden bg-white border transition-all duration-300 shadow-md hover:shadow-lg max-w-[300px]"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="object-contain mb-[20%]"
                />
                <div className="absolute bottom-0 left-0 w-full bg-[#c50022] max-h-[70px] group-hover:max-h-[300px] transition-all duration-700 ease-in-out overflow-hidden p-4">
                  <h4 className="text-white font-semibold poppins leading-7 tracking-wide text-center text-lg lg:text-lg">
                    {product.name}
                  </h4>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 mt-2">
                    <p className="text-md text-white open-sans leading-6">
                      {product.description}
                    </p>
                    <Link
                      href={`${product.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
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
      ))}
    </div>
  );
}
