import Image from "next/image";
import Link from "next/link";

const relatedData = [
  {
    title: "Products",
    items: [
      {
        name: "Backer Rod",
        image: "/backer-rod1.webp",
        description: "Closed-cell compressible backup material to maintain the sealant profile in expansion joints and gaps.",
      },
      {
        name: "Mounting clip",
        image: "/BackedRod2.webp",
        description: "Used to secure the Supershield Panelstop Steel Waterstop in its place while casting.",
      },
      {
        name: "Clamping Clip",
        image: "/BackedRod3.webp",
        description: "Used to clamp the split ends of the Supershield Panelstop Steel Waterstop.",
      },
    ],
  },
];

export default function BackdropRodProduct() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-12">
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
                      href="#"
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
