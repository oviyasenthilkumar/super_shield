"use client";

import Image from "next/image";

const DMCFunctionalPrinciple = () => {
  return (
    <section className="px-6 md:px-12 lg:px-0 py-12 bg-white  max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 poppins leading-10 tracking-wide">
        Functional Principle
      </h2>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <p className="mb-4 open-sans leading-7 text-sm md:text-base text-gray-700">
            When added to the concrete mix, DMC Technology activates SHIELD
            Crystals, enhancing performance at every stage of the concrete
            lifecycle. During casting and initial curing stage, these crystals
            seal pores and capillaries, creating a dense, impermeable structure.
            SHIELD Crystals ensure optimal hydration by regulating moisture
            availability and distribution, preventing water loss in hot climates
            and freezing in cold conditions. Additionally, the technology
            balances heat generation from hydration, effectively reducing
            thermal stress and preventing shrinkage cracks, ensuring long-term
            durability and structural integrity.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/dmc-crystalline-waterproofing-principle.webp"
            alt="DMC Crystalline Diagram"
            width={300}
            height={300}
            className="rounded shadow-md object-contain"
          />
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div>
          <p className="open-sans leading-7 text-sm md:text-base text-gray-700">
            As the concrete hardens, Dynamic SHIELD Crystals continue to grow,
            forming crystalline structures within the concrete matrix that block
            water ingress and resist chemical attacks. These crystals
            dynamically respond to phase changes within the concrete caused by
            environmental conditions, managing moisture, vapor, and temperature.
            This process regulates internal humidity, prevents moisture buildup,
            allows concrete to breathe, reduces thermal stress, prevents thermal
            cracks, and enables the self-healing of microcracks when exposed to
            water or moisture.
          </p>
        </div>
        <div>
          <p className="open-sans leading-7 text-gray-700 text-sm md:text-base">
            With its advanced capabilities, DMC Technology ensures exceptional
            durability, superior waterproofing, and a longer service life of
            concrete, supporting sustainable construction. By reducing
            permeability, preventing deterioration, enabling self-healing and
            dynamically responding to the changes in the environment, this
            technology lowers maintenance needs and material consumption while
            enhancing resilience against both internal and external challenges,
            as well as climate-induced challenges such as extreme heat,
            flooding, and freeze-thaw cycles.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-gray-100 p-6 md:px-8 flex flex-col md:flex-row justify-between items-center shadow-sm">
        <p className="text-lg md:text-xl font-semibold mb-4 md:mb-0 poppins leading-7 lg:leading-18">
          To learn more about the principle mechanism of{" "}
          <span className="font-bold text-gray-800">
            DMC Crystalline Technology
          </span>
        </p>
        <a
          href="#"
          className="inline-block font-semibold border border-[#B41424] bg-[#c50022] open-sans text-white px-5 py-3 cursor-pointer text-sm md:text-base hover:bg-white hover:text-[#c50022] transition-all duration-300"
        >
          Contact us today!
        </a>
      </div>
    </section>
  );
};

export default DMCFunctionalPrinciple;
