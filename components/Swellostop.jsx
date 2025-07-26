"use client";
import Image from "next/image";

export default function Swellstop() {
  return (
    <section className="px-3 sm:px-4 md:px-0 py-12 bg-white max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row px-3 md:px-0 gap-10 items-start">
        {/* Text Section */}
        <div className="md:max-w-[60%]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 poppins">
            Reliable and Long Lasting Seal
          </h1>

          <p className="text-sm md:text-base leading-7 font-normal text-gray-700 mb-6 open-sans text-justify">
            Supershield Swellstop expands in a controlled fashion by
            approximately eight times its volume in the presence of moisture,
            which creates a pressure seal within construction joints and fills
            up the concrete joint gaps according to the gap variation in the
            concrete structures. Supershield Swellstop is a highly effective
            solution used to seal both horizontal and vertical construction
            joints for poured in-situ concrete.The Swellstop range of products
            is meticulously crafted to meet the highest industry standards,
            ensuring their effectiveness and reliability.
          </p>

          <p className="text-sm md:text-base leading-7 font-normal text-gray-700 mb-6 open-sans text-justify">
            Supershield Swellstop is treated with a delay coating to prevent it
            from absorbing water from the moist green concrete, and in cases
            where the joint becomes ponded with water prior to the second pour,
            the delay coating plays a crucial role in stopping any premature
            expansion.Supershield Swellstop profiles are available with a
            self-adhesive backing and offer a practical solution that enhances
            convenience, reduces costs, and saves valuable time during
            construction projects.
          </p>
        </div>

        {/* Brochure Image */}
        {/* <div className="md:max-w-[40%] flex justify-center mx-auto w-full "> */}
          <div className="flex flex-col items-center gap-2 w-[30%] mx-auto">
            <div className="relative w-60 h-76">
              <Image
                src="/PanelstopBook.jpg"
                alt="Multiseal Brochure"
                fill
                className="object-contain"
              />
            </div>
            <a
              href="/ProductCatalogueModal"
              className="mt-4 underline-hover open-sans"
            >
              Download Brochure
            </a>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
}
