"use client";
import Image from "next/image";
import Link from "next/link";

const DryboxSystem = () => {
  return (
    <section className="w-full py-12 lg:py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto">
        {/* Left Column */}
        <div className=" flex items-center">
          <div className="w-full max-w-3xl px-6 sm:px-10 md:px-8 lg:px-0 py-3 mx-auto space-y-3">
            <div className="flex flex-col items-start justify-center space-y-6">
              <Image
                src="/Drybox_logo.png"
                alt="Drybox System Logo"
                width={300}
                height={300}
                className="mb-6 max-w-4xl"
              />

              <p className="text-black text-sm md:text-base  leading-7 open-sans font-normal text-justify">
                Comprehensive solution that combines multiple products to result
                in the design and construction of long-lasting, durable, and
                waterproof below–ground concrete structures.
              </p>

              <Link
                href="/solutions/drybox"
                className="inline-block border-[1px] border-white bg-[#B41424] text-white px-6 py-4 text-md uppercase font-semibold hover:bg-white hover:text-[#B41424] hover:border hover:border-[#B41424] transition open-sans"
              >
                Explore More
              </Link>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center  w-full">
          <div className="relative w-full max-w-[1000px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] ">
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
