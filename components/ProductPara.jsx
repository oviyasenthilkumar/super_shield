import Image from "next/image";

export default function ProductPara() {
  return (
    <section className="max-w-7xl mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-[#f7f7f7] rounded-lg p-10">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-10 tracking-wide poppins mb-4">
            DPC Crystalline Waterproofing for Concrete
          </h2>
          <p className="text-gray-700 text-sm md:text-base  sm:text-lg leading-8 open-sans">
            Our products based on Deep Penetrating Capillary (DPC) Crystalline
            Technology creates permanent, waterproof barriers within concrete,
            enhancing durability and extending the life of concrete structures.
            This technology enhances the approach to concrete protection by
            working within the concrete rather than on its surface. DPC
            Crystalline Technology takes advantage of concrete’s nature to
            create an integral reaction that permanently waterproofs and
            protects the concrete by sealing its pores and capillaries with
            non-soluble crystalline formations.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center justify-center mx-auto">
          <div className="w-full max-w-xs md:max-w-sm ">
            <Image
              src="/book_multiseal.webp"
              alt="Product Catalogue"
              width={250}
              height={300}
            />
          </div>
          <a
            href="/Drybox-Brochure.pdf"
            download
            className="mt-4 underline-hover open-sans"
          >
            Download Catalogue
          </a>
        </div>
      </div>
    </section>
  );
}
