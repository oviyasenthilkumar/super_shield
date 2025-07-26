"use client";

import Image from "next/image";

export default function SlipstopHero200() {
  return (
    <div className=" bg-white flex flex-col justify-center px-4 md:px-20 py-10 ">
      <div className="flex flex-col lg:flex-row gap-10 items-center max-w-7xl mx-auto">
        {/* Left - Product Image */}
        <div className="mx-auto w-full lg:w-[30%]">
          <Image
            src="/slipstop200.webp"
            alt="Supershield DPC ADMIXPLUS"
            width={400}
            height={400}
            className="object-contain w-full max-w-md"
          />
        </div>
        {/* Right - Product Details */}
        <div className="w-full lg:w-[60%]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 leading-7 md:leading-9 poppins">
            <span className="text-[#C50022]">Supershield</span> SLIPSTOP 200
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 leading-7 md:leading-8 poppins">
            Anti-Slip Treatment for Natural and Artificial Stones
          </h2>
          <p className="text-gray-700 text-justify md:leading-7 space-y-2 open-sans leading-6">
            SUPERSHIELD SLIPSTOP 200 is an anti-slip treatment which improves
            the slip resistance of floors by increasing the coefficient of
            friction without altering the appearance or texture of floors. It is
            a passive process that creates a tread pattern on the surface itself
            by a unique chemical treatment. SLIPSTOP 200 increases the
            coefficient of friction of floors by forming micropores on the
            surface which creates a vacuum effect when walked on in a wet
            condition and thereby considerably improving the traction and
            seriously reducing the risk of slipping. It reacts with the material
            itself to produce an invisible and enduring effect. SLIPSTOP 200 can
            be used on ceramic tiles, marbles, granites, quartz tiles, terrazzo,
            concrete, porcelain, bath tubs, and other natural and artificial
            stones.
          </p>
        </div>
      </div>
    </div>
  );
}
