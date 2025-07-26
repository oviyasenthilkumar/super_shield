
import Image from "next/image";
import Link from "next/link";

const relatedData = [
  {
    title: "Related Products",
    items: [
      {
        name: "Multiseal",
        image: "/multiseal.webp",
        description: "Unique water-based, eco-friendly, self-healing multifunctional crystalline waterproofing and surface protection of concrete and all cement-based materials.",
      },
      {
        name: "Multiguard",
        image: "/multiguard.webp",
        description: "Self- Healing Multi Functional cementitious crystalline waterproofing and protective coating for concrete.",
      },
      {
        name: "Clearseal",
        image: "/clearseal.webp",
        description: "Water -based , ready -to-use repellant sealer for concrete and masonry surfaces , formulated to work alone or as a top coat with Crystalspray or Hardseal .",
      },
    ],
  },
  
];

export default function MultisealRelatedProductsPage() {
  return (
    <div className="p-8 lg:px-0 max-w-7xl mx-auto space-y-12">
      {relatedData.map((section, i) => (
        <div key={i}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold poppins leading-10 mb-8 pl-4">
            {section.title}
          </h2>
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
                    <p className="text-sm md:text-base font-normal text-white open-sans leading-6">
                      {product.description}
                    </p>
                    
                    {/* Navigation Button */}
                    <Link
                      href={`${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="mt-4 text-white font-semibold hover:underline w-full text-center block open-sans"
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
