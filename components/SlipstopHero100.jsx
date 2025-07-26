"use client";

import Image from "next/image";

export default function SlipstopHero100() {
  return (
    <div className=" bg-white flex flex-col justify-center px-4 md:px-20 py-10 ">
      <div className="flex flex-col lg:flex-row gap-10 items-center max-w-7xl mx-auto">
        {/* Left - Product Image */}
        <div className="mx-auto w-full lg:w-[30%]">
          <Image
            src="/slipstop100.webp"
            alt="Supershield DPC ADMIXPLUS"
            width={400}
            height={400}
            className="object-contain w-full max-w-md"
          />
        </div>
        {/* Right - Product Details */}
        <div className="w-full lg:w-[60%]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 leading-7 md:leading-9 poppins">
            <span className="text-[#C50022]">Supershield</span> SLIPSTOP 100
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 leading-7 md:leading-8 poppins">
            Anti-Slip Treatment for Artificial Stones
          </h2>
          <p className="text-gray-700 text-justify md:leading-7 space-y-2 open-sans leading-6">
            SUPERSHIELD SLIPSTOP 100 is an anti-slip treatment that improves the
            slip resistance of floors by increasing the coefficient of friction
            without altering their appearance or texture. It is a passive
            process that creates a tread pattern on the surface itself through a
            unique chemical treatment. SLIPSTOP 100 increases the coefficient of
            friction of floors by forming micropores on the surface, which
            create a vacuum effect when walked on in a wet condition, thereby
            considerably improving the traction and seriously reducing the risk
            of slipping. It reacts with the material itself to produce an
            invisible and enduring effect. SLIPSTOP 100 can be used on ceramic
            tiles, quartz tiles, terrazzo, concrete, porcelain, and other
            artificial stones.
          </p>
        </div>
      </div>
     
    </div>
  );
}
