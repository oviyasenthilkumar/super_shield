"use client";
import Image from "next/image";

export default function Panelstop() {
  return (
    <section className="px-4 sm:px-4 md:px-12 py-3 md:py-12 bg-white max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Text Section */}
        <div className="md:max-w-[60%]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 poppins">
            Panelstop
          </h1>

          <p className="text-sm md:text-base font-normal leading-7 text-gray-700 mb-6 open-sans text-justify">
            Supershield Panelstop is the ultimate solution for reliable and
            secure sealing of concrete structures against ground moisture,
            seepage water, and pressurized water. Our innovative galvanised
            steel waterstop system is specially engineered with a galvanized
            steel plate coated on both sides with a special active coating
            material that reacts with wet concrete and provides a tenacious bond
            to give a watertight seal and a unique swellable lining that swells
            in contact with water. This combination ensures a watertight seal
            that prevents water from circulating while also protecting the
            waterstop from chemical influences. The system can be used for the
            reliable sealing of construction and predetermined crack joints in
            in-situ concrete construction and with element walls.
          </p>

          <p className="text-sm md:text-base leading-7 text-gray-700 mb-6 open-sans text-justify">
            with its unique swellable lining and flexible special coating, our
            Panelstop ensures a reliable barrier that prevents water from
            circulating. The swellable lining is based on Supershield Swellstop.
            When in contact with water, it expands to seal within the concrete
            joints, effectively blocking the passage of water. The flexible
            special coating forms an adhesive barrier seal with the concrete,
            eliminating any gaps that could allow water to seep through. It
            bonds seamlessly, creating a robust shield that keeps your structure
            watertight, and it provides an additional layer of protection
            against chemical influences.
          </p>
        </div>

        {/* Brochure Image */}
        <div className="md:max-w-[40%] flex justify-center mx-auto w-full ">
          <div className="p-10 shadow-sm mt-15">
            <Image
              src="/PanelstopBook.jpg"
              alt="Download Brochure"
              width={250}
              height={240}
              className="mb-4"
            />
            <a
              href="/ProductCatalogueModal"
              //  download
              className="mt-4 underline-hover open-sans"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
