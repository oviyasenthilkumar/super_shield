import Image from "next/image";
import Link from "next/link";

export default function MultisealTechnology() {
  return (
    <section className="px-4 py-12 md:px-12 lg:px-0 max-w-screen-xl mx-auto">
      <h2 className="text-2xl md:text-3xl lg:text-4xl  font-semibold mb-8 text-left poppins sm:leading-8 md:leading-9 lg:leading-10 tracking-wide">
        Multiseal Crystalline Technology for Sustainable Concrete
        Infrastructures
      </h2>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6 text-gray-700 text-justify open-sans leading-7 font-normal">
          <p className="text-sm md:text-base leading-6">
            Multiseal Crystalline Technology waterproofs and protects concrete
            infrastructure by integrating{" "}
            <span className="font-semibold">
              multifunctional, adaptive, dynamic SHIELD crystals
            </span>{" "}
            and a hydrophobic barrier, enhancing sustainability and durability.
            It is ideal for both above-ground and below-ground structures,
            ensuring they remain resilient, watertight, and environmentally
            friendly.
          </p>
          <p className="text-sm md:text-base leading-6">
            Multiseal provides permanent waterproofing and robust protection
            against a wide range of internal and external challenges , including
            chemical attacks, freeze-thaw cycles, chloride ion penetration,
            carbonation, alkali-silica reactions (ASR), and
            temperature-associated problems. It significantly enhances concrete
            resilience by addressing permeability, temperature, and
            moisture-related challenges. The key advantage of Multiseal is its
            ability to self-heal cracks and prevent moisture infiltration, even
            from the negative side.
          </p>
          <p className="text-sm md:text-base leading-6">
            The protective capabilities of Multiseal come from a combination of
            permeability-resistant, hydrophobic, icephobic, and thermal
            management properties, enabled by molecular repellence and dynamic
            SHIELD Crystals. Multiseal dynamically adapts to environmental
            changes, ensuring long-lasting durability in extreme climates and
            coastal regions, especially in structures that are exposed to wet
            and dry cycles, like roads, flyovers, bridges, and other similar
            infrastructure.
          </p>
        </div>

        <div className="space-y-8 space-x-3 flex flex-col md:flex-row lg:flex-col ">
          <div className="relative w-full h-60 md:h-80 lg:h-85">
            <Image
              src="/multiseal-shield-1.webp"
              alt="SHIELD Crystals Image 1"
              fill
              className="object-contain "
            />
          </div>
          <div className="relative w-full h-60 md:h-80 lg:h-85">
            <Image
              src="/multiseal-shield-2.webp"
              alt="SHIELD Crystals Image 2"
              fill
              className="object-contain "
            />
          </div>
        </div>
      </div>
      {/* Brochure Section */}
      <div className="mt-16 max-w-6xl">
        {/* Outer wrapper for tablet & desktop background */}
        <div className="hidden md:block bg-gray-100 p-6 md:p-10 ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Text Content */}
            <div className="text-left space-y-4 w-[60%] ">
              <p className="text-lg md:text-xl font-medium text-gray-800 poppins leading-8">
                Discover unique{" "}
                <span className="font-bold">Multiseal Crystalline</span>{" "}
                products, designed to deliver exceptional waterproofing,
                durability, and self-healing protection for concrete structures.
              </p>
              <button className="open-sans inline-block font-semibold border border-[#B41424] bg-[#B41424] text-white px-5 py-3 text-sm md:text-base hover:bg-white hover:text-[#B41424] transition-all duration-300">
                View Products
              </button>
            </div>

            {/* Image & Link */}
            <div className="flex flex-col items-center gap-2 w-[30%] mx-auto">
              <div className="relative w-60 h-76">
                <Image
                  src="/book_multiseal.webp"
                  alt="Multiseal Brochure"
                  fill
                  className="object-contain"
                />
              </div>
              <Link
                href="/ProductCatalogueModal"
                className="mt-4 underline-hover open-sans"
              >
                Download Brochure
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile view with no outer bg, just spacing */}
        <div className="block md:hidden space-y-6">
          <div className="space-y-4 bg-[#f7f7f7] p-5 text-justify">
            <p className="text-base font-medium text-gray-800 poppins">
              Discover unique{" "}
              <span className="font-bold">Multiseal Crystalline</span> products,
              designed to deliver exceptional waterproofing, durability, and
              self-healing protection for concrete structures.
            </p>
            <div className="w-full text-center">
              <button className="open-sans inline-block font-semibold border border-[#B41424] bg-[#B41424] text-white px-5 py-3 text-sm hover:bg-white hover:text-[#B41424] transition-all duration-300">
                View Products
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="relative w-60 h-76">
              <Image
                src="/book_multiseal.webp"
                alt="Multiseal Brochure"
                fill
                className="object-contain"
              />
            </div>
            <Link
              href="/ProductCatalogueModal"
              className="mt-4 underline-hover open-sans"
            >
              Download Brochure
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="bg-gray-100 mt-16 p-6 md:p-10 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left space-y-4 max-w-xl ">
          <p className="text-lg md:text-xl font-medium text-gray-800 poppins text-left">
            Discover unique{" "}
            <span className="font-bold">Multiseal Crystalline</span> products,
            designed to deliver exceptional waterproofing, durability, and
            self-healing protection for concrete structures.
          </p>
          <button className="open-sans inline-block font-semibold border border-[#B41424] bg-[#B41424] text-white px-5 py-3 text-sm md:text-base hover:bg-white hover:text-[#B41424] transition-all duration-300">
            View Products
          </button>
        </div>
        <div className="flex flex-col items-center gap-2 mx-auto">
          <div className="relative w-60 h-76">
            <Image
              src="/book_multiseal.webp"
              alt="Multiseal Brochure"
              fill
              className="object-contain "
            />
          </div>
          <Link
            href="/ProductCatalogueModal"
            //  download
            className="mt-4 underline-hover open-sans"
          >
            Download Brochure
          </Link>
        </div>
      </div> */}
    </section>
  );
}
