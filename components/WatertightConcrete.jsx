"use client";

import Image from "next/image";
import Accordion from "./Accordian";

export default function WatertightConcrete() {
  return (
    <div id="watertight" className="scroll-mt-28">
      <div className="px-6 md:px-16 py-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Section */}
          <div className="w-full lg:w-[60%]">
            <h1 className="text-2xl md:text-3xl font-semibold mb-4 poppins leading-10">
              1. WATERTIGHT CONCRETE
            </h1>
            <p className=" text-gray-700 space-y-4 text-justify font-normal open-sans leading-7 text-sm md:text-base ">
              Supershield’s DRYBOX System achieves waterproof concrete with
              Supershield’s Crystalline Waterproofing Admixtures, which take
              advantage of concrete’s nature to create an integral reaction that
              permanently waterproofs and protects the concrete by sealing its
              pores and capillaries with a non-soluble, highly resistant
              needle-like crystalline structure that becomes an integral part of
              the concrete.
            </p>
            <p className=" text-gray-700 space-y-4 text-justify font-normal open-sans leading-7 text-sm md:text-base ">
              This crystalline structure occurs where moisture is present, so at
              any later stage, if cracks form due to settling or shrinkage, the
              incoming water triggers the crystallization process and additional
              crystals begin to grow, and it has the ability to self-heal
              cracks.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[30%] mx-auto">
            <Image
              src="/basement-watertight-concrete.webp"
              alt="Watertight Concrete"
              width={1000}
              height={1000}
              className="object-contain w-full"
            />
          </div>
        </div>

        {/* Products Used Section */}
        <div className="bg-gray-50 mt-10 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 poppins leading-10">
            Products Used
          </h2>
          <Accordion
            title="Supershield DPC ADMIXPLUS"
            content="Self-healing liquid crystalline admixture for waterproofing, protecting, and improving the durability of concrete."
            imageSrc="/DPC-ADMIXPLUS.webp"
            readMoreLink="/DPCAdmixplus"
          />
          <Accordion
            title="Supershield ADMIX 100"
            content="Crystalline waterproofing powder designed for mass concrete, offering good moisture protection and basic self-healing."
            imageSrc="/ADMIX-100.webp"
            readMoreLink="/admix-100"
          />
          <Accordion
            title="Supershield ADMIXPLUS"
            content="Enhanced waterproofing with superior resistance to aggressive chemicals and hydrostatic pressure."
            imageSrc="/ADMIXPLUS.webp"
            readMoreLink="/Admixplus"
          />
          <Accordion
            title="Supershield MULTISEAL ADMIXPLUS"
            content="Crystalline and hydrophobic protection ensuring maximum waterproofing performance."
            imageSrc="/MULTISEAL ADMIXPLUS.webp"
            readMoreLink="/MultisealAdmixplus"
          />
        </div>

      
        <div className="mt-8 text-right">
          <button
            onClick={() => {
              document
                .getElementById("drybox")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="relative overflow-hidden border border-gray-800 px-4 py-3 text-sm text-gray-800 transition duration-300 group"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white hover:text-white hover:border-[#C50022]">
              Slide up
            </span>
            <span className="absolute inset-0 bg-[#C50022] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
