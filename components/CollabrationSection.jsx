"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function CollaborationSection() {
  return (
    <section className="w-full lg:bg-[linear-gradient(to_right,_#ededed_50%,_#F7F7F7_50%)] py-10 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-7xl mx-auto mt-8 lg:mt-18">
        {/* Left Column */}
        <div className="flex items-start bg-[#ededed] py-12 lg:py-0 lg:bg-transparent px-6 md:px-6">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 leading-10 poppins tracking-wide">
              Call for Collaboration
            </h2>
            <ul className="list-none space-y-4 text-gray-700">
              <li className="flex items-start gap-2">
                <img
                  src="/angle-right.png"
                  alt="arrow"
                  className="w-3 min-w-3 mt-2"
                />
                <div className="text-gray-700 mb-6 text-sm md:text-base font-normal leading-6 lg:leading-7 open-sans max-w-lg">
                  <strong className="poppins">
                    Universities & Research Institutions
                  </strong>{" "}
                  : To study and expand SHIELD crystalline technology for
                  Concrete applications.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <img
                  src="/angle-right.png"
                  alt="arrow"
                  className="w-3 min-w-3 mt-2"
                />{" "}
                <div className="text-gray-700 mb-6 text-sm md:text-base font-normal leading-7 open-sans max-w-lg">
                  <strong>Concrete Research Institutes & Students</strong> : To
                  evaluate the real-world performance of SHIELD Crystalline
                  Technologies.
                </div>
              </li>

              <li className="flex items-start gap-2">
                <img
                  src="/angle-right.png"
                  alt="arrow"
                  className="w-3 min-w-3 mt-2"
                />{" "}
                <div className="text-gray-700 mb-6 text-sm md:text-base font-normal leading-7 open-sans max-w-lg">
                  <strong>Government & National Research Agencies</strong> : To
                  support the policy-driven adoption of SHIELD crystalline
                  technology.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <img
                  src="/angle-right.png"
                  alt="arrow"
                  className="w-3 min-w-3 mt-2"
                />{" "}
                <div className="text-gray-700 mb-6 text-sm md:text-base font-normal leading-7 open-sans max-w-lg">
                  <strong>Certification & Pre-Standardization Bodies</strong> :
                  To establish global standards based on proven self-healing
                  concrete technologies.
                </div>
              </li>
            </ul>
            <p className="text-gray-700 mb-6 text-sm md:text-base font-normal leading-7 open-sans mt-6 ml-6 mr-1 max-w-lg">
              By working together, we can enhance concrete durability, promote
              sustainability, and develop climate-resilient infrastructure for
              future generations.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="px-6 md:px-12  bg-[#f7f7f7] pt-20 md:pt-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 mt-8 poppins sm:leading-8 md:leading-9  lg:leading-10 tracking-wide">
            Why Collaborate with SHIELD?
          </h2>
          <p className="text-gray-700 mb-6 text-sm md:text-base   font-normal leading-6 lg:leading-7 open-sans text-left">
            Collaborating with SHIELD allows you to expand the applications of
            SHIELD Crystalline Technology by testing and validating its
            performance across diverse conditions. It helps accelerate industry
            adoption, promoting sustainable construction practices worldwide. By
            joining this initiative, you contribute to a low-carbon future,
            playing a vital role in developing innovations that enhance
            environmental safety for future generations. Join us in redefining
            the future of concrete sustainability and driving industry-wide
            transformation.
          </p>
          <div className="w-full flex justify-center overflow-hidden group max-w-3xl lg:max-w-lg relative">
            <Image
              src="/sustainability-partner-with-supershield.webp"
              alt="Partner with SHIELD"
              width={400}
              height={400}
              className="rounded-lg object-cover w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-6">
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-3 leading-tight poppins ">
                Partner <br /> with us now
              </h3>
              <Link href="/contact">
                <button className="bg-[#c50022] text-white px-5 py-2 rounded font-medium hover:bg-[#c50022] open-sans transition">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
