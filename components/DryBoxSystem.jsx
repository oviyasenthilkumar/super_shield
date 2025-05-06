"use client";
import Image from "next/image";
import Link from "next/link";

const DryboxSystem = () => {
  return (
    <section className="w-full min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
        {/* Left Column */}
        <div className="bg-[#F4F4F4] flex items-center">
          <div className="w-full max-w-3xl px-6 sm:px-10 md:px-14 py-10 mx-auto space-y-6">
            <div className="flex flex-col items-start justify-center space-y-6">
              <Image
                src="/Drybox_logo.png"
                alt="Drybox System Logo"
                width={500}
                height={500}
                className="mb-6 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]"
              />

              <p className="text-black text-base md:text-base leading-relaxed text-left open-sans font-normal">
                Comprehensive solution that combines multiple products to result in
                the design and construction of long-lasting, durable, and waterproof
                below–ground concrete structures.
              </p>

              <Link
                href="#"
                className="inline-block bg-[#B41424] text-white px-6 py-4 text-md font-semibold hover:bg-white hover:text-[#B41424] hover:border hover:border-[#B41424] transition open-sans"
              >
                Explore More →
              </Link>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center py-8 px-4 sm:px-8 md:px-12 bg-[#EDEDED] w-full">
          <div className="relative w-full max-w-[700px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
            <Image
              src="/drybox.webp"
              alt="Drybox 3D Structure"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DryboxSystem;
