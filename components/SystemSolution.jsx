import Link from "next/link";

export default function SystemSolutions() {
  return (
    <section className="bg-white px-4 sm:px-6 md:px-10 lg:px-20 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-10 poppins text-center md:text-left">
          System Solutions
        </h2>

        {/* Responsive Card */}
        <div className="p-6 sm:p-8 md:p-10 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center shadow-lg rounded-lg">
          {/* Left Content */}
          <div className="space-y-4">
            <p className="text-4xl md:text-5xl font-bold text-[#c50022] leading-none poppins">
              01
            </p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 poppins leading-8 lg:leading-10">
              Supershield DRYBOX System
            </h3>
            <h4 className="text-base md:text-lg text-gray-900 poppins font-medium sm:leading-6 md:leading-7 lg:leading-8">
              Comprehensive waterproofing solution <br />
              for below-ground structures
            </h4>
            <p className="text-gray-700 text-sm md:text-base font-normal open-sans text-justify sm:leading-6 md:leading-7 lg:leading-7">
              The Supershield DRYBOX System delivers a highly engineered,
              long-lasting solution for waterproofing and joint sealing. This
              system integrates key technologies and compatible products to
              ensure effective performance in the most demanding environmental
              conditions. The DRYBOX System not only saves time and money but
              also guarantees compatibility across all components, providing a
              reliable solution for below-ground structures.
            </p>

            <Link href="/solutions/drybox">
              <button className="cursor-pointer bg-[#C50022] text-white border py-3 px-6 hover:border-[#C50022] hover:bg-white hover:text-[#C50022] transition-colors duration-300 open-sans">
                Explore More
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/systemSolution.webp"
              alt="Drybox System"
              className="w-full max-w-[350px] md:max-w-[400px] lg:max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
