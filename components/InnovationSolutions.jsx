import Image from "next/image";

export default function InnovationSolutions() {
  return (
    <section className="max-w-7xl mx-auto py-16">
      <div className="flex flex-col lg:flex-row gap-10 items-start bg-[#f7f7f7] px-5 lg:px-15 py-15">
        {/* Left Section */}
        <div className="w-full lg:w-[60%]">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-10 tracking-wide poppins mb-4">
            Innovative Solutions for Durable and Sustainable Structures
          </h2>
          <p className="text-gray-700 text-sm md:text-base  sm:text-lg leading-7 open-sans">
            At Supershield, we offer a comprehensive range of advanced
            construction chemical solutions designed to enhance the durability,
            protection, and sustainability of structures worldwide. With a
            commitment to innovation and continuous improvement, we continuously
            expand our product portfolio, developing new applications and
            sustainable solutions to meet evolving industry needs. Explore our
            full range of high-performance construction chemicals across various
            categories and discover the right solution for your project.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center justify-center mx-auto ">
          <div className="w-full max-w-xs md:max-w-sm mx-auto ">
            <Image
              src="/book_multiseal.webp"
              alt="Product Catalogue"
              width={250}
              height={300}
            />
          </div>
          <a
            href="/ProductCatalogueModal"
            //  download
            className="mt-4 underline-hover open-sans"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
}
