"use client";
import Image from "next/image";

export default function SEMCrystallineSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Text Content */}
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold sm:leading-8 md:leading-9 lg:leading-10 tracking-wide poppins mb-6">
            SEM Reveals Advanced Crystalline Protection
          </h2>
          <p className="text-gray-700 mb-6  open-sans leading-7 text-sm md:text-base  text-justify">
            Leveraging the powerful imaging capabilities of a Scanning Electron
            Microscope, we provide visual evidence that sets our crystalline
            waterproofing apart from all other concrete waterproofing products.
            The SEM technique allows us to observe Supershield’s crystalline
            formations in action at incredibly high magnifications.
          </p>
          <p className="text-gray-700 open-sans leading-7 text-sm md:text-base  text-justify">
            When active leakages occur through cracks in concrete walls, our
            system self-seals. An examination of a core sample extracted from a
            crack revealed needle-like crystal growth along the inner walls,
            effectively stopping the leakage. Supershield’s protective
            properties extend beyond water ingress; it also guards against
            various chemicals, including chlorides, sulfates, acids, and
            industrial substances. The SEM images illustrate numerous
            non-soluble crystalline formations that developed within the
            concrete treated with Supershield.
          </p>
        </div>

        {/* Images */}
        <div className="flex flex-col gap-6 items-center">
          <div className=" max-w-sm">
            <Image
              src="/sem-1.jpg"
              alt="SEM image 1"
              width={300}
              height={200}
              className=" h-auto object-contain"
            />
          </div>
          <div className=" max-w-sm">
            <Image
              src="/sem-2.webp"
              alt="SEM image 2"
              width={300}
              height={200}
              className=" h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* CTA Section - Visible only on Mobile & Tablet */}
      <div className="mt-20 bg-[#f1f1f1] py-10 px-6 text-center max-w-7xl mx-auto block lg:hidden">
        <h3 className="text-xl font-semibold mb-6 poppins">
          Discover more of our Self-healing Crystalline Technologies
        </h3>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/technology/dmc-technology"
            className="open-sans inline-block font-semibold border border-[#B41424] bg-[#B41424] text-white px-5 py-3 text-sm md:text-base hover:bg-white hover:text-[#B41424] transition-all duration-300 "
          >
            DMC Crystalline Technology
          </a>
          <a
            href="/technology/multiseal"
            className="open-sans inline-block font-semibold border border-[#B41424] bg-[#B41424] text-white px-5 py-3 text-sm md:text-base hover:bg-white hover:text-[#B41424] transition-all duration-300"
          >
            Multiseal Crystalline Technology
          </a>
        </div>
      </div>
    </section>
  );
}
