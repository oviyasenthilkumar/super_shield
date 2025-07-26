"use client";
import Image from "next/image";

export default function JointbeltExtB() {
  return (
    <section className="px-3 sm:px-4 md:px-0 py-12 bg-white max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Text Section */}
        <div className="md:max-w-[60%]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 poppins">
            Jointbelt PVC Waterstops
          </h1>

          <p className="text-sm md:text-base font-normal leading-7 text-gray-700 mb-6 open-sans text-justify">
            Supershield Jointbelt's PVC waterstop is crafted using our exclusive
            proprietary formula, ensuring it meets and exceeds the highest
            industry standards. With a commitment to excellence, Supershield has
            always ensured that its PVC waterstop is made from prime virgin
            materials, With its exceptional strength and durability, it
            guarantees long-lasting protection in a wide range of applications.
            Designed for commercial, industrial, and residential applications,
            it provides reliable waterproofing and joint sealing across various
            structures. Available in multiple size profiles, it offers a
            versatile solution to meet the specific needs of any project.
          </p>
        </div>

        {/* Brochure Image */}
        <div className="md:max-w-[40%] flex justify-center mx-auto w-full ">
          <div className=" mt-8">
            <Image
              src="/PanelstopBook.jpg"
              alt="Download Brochure"
              width={180}
              height={300}
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
