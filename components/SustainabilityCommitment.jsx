"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function SustainabilityCommitment() {
  return (
    <div className="py-16">
      <section className="w-full lg:bg-[linear-gradient(to_right,_#ededed_50%,_#F7F7F7_50%)] py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-7xl mx-auto mt-8 lg:mt-18">
          {/* Left Column */}
          <div className="flex items-start bg-[#ededed] py-12 lg:py-0 lg:bg-transparent px-6 md:px-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 poppins sm:leading-8 md:leading-9 lg:leading-10">
                Commitment to Global Sustainability Initiatives
              </h2>
              <ul className="space-y-4 text-gray-700 list-disc list-inside open-sans leading-7 ">
                <li className="flex items-start gap-2">
                  <img
                    src="/angle-right.png"
                    alt="arrow"
                    className="w-3 min-w-3 mt-2"
                  />
                  <div className="text-gray-700 mb-6 text-sm md:text-base  font-normal leading-7 open-sans max-w-lg">
                    <strong className="text-black">
                      UN Sustainable Development Goals (SDGs)
                    </strong>{" "}
                    – Promoting responsible production, sustainable cities, and
                    climate action.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <img
                    src="/angle-right.png"
                    alt="arrow"
                    className="w-3 min-w-3 mt-2"
                  />
                  <div className="text-gray-700 mb-6 text-sm md:text-base  font-normal leading-7 open-sans max-w-lg">
                    <strong className="text-black">
                      Paris Agreement on Climate Change
                    </strong>{" "}
                    – Reducing CO₂ emissions to meet global net-zero targets.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <img
                    src="/angle-right.png"
                    alt="arrow"
                    className="w-3 min-w-3 mt-2"
                  />
                  <div className="text-gray-700 mb-6 text-sm md:text-base  font-normal leading-7 open-sans max-w-lg">
                    <strong className="text-black">
                      Net-Zero Carbon Building Commitments
                    </strong>{" "}
                    – Supporting the transition to climate-positive
                    construction.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <img
                    src="/angle-right.png"
                    alt="arrow"
                    className="w-3 min-w-3 mt-2"
                  />
                  <div className="text-gray-700 mb-6 text-sm md:text-base  font-normal leading-7 open-sans max-w-lg">
                    <strong className="text-black">
                      LEED, BREEAM & Green Building Certifications
                    </strong>{" "}
                    – Enabling architects and builders to earn points toward
                    sustainability goals. Heat management in mass concrete
                    pours.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <img
                    src="/angle-right.png"
                    alt="arrow"
                    className="w-3 min-w-3 mt-2"
                  />
                  <div className="text-gray-700 mb-6 text-sm md:text-base  font-normal leading-7 open-sans max-w-lg">
                    <strong className="text-black">
                      Innovative Low-Carbon and Circular Economy Practices
                    </strong>{" "}
                    – Replacing carbon-intensive materials with self-healing,
                    long-lasting concrete solutions. Phase changes within
                    concrete during its lifecycle.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="px-6 md:px-12  bg-[#f7f7f7] ">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 poppins sm:leading-8 md:leading-9 lg:leading-10 mt-20 md:mt-0">
              Partner with Supershield to Build a Greener Future
            </h2>
            <p className="text-gray-700 mb-6 open-sans leading-7">
              Start your sustainable construction journey with SUPERSHIELD. Our
              global team of experts is ready to help you integrate eco-friendly
              waterproofing solutions and achieve your sustainability goals by
              reducing your project’s carbon footprint.
            </p>
            <div className="w-full flex justify-center overflow-hidden group max-w-3xl lg:max-w-lg relative">
              <Image
                src="/sustainability-partner-with-supershield.webp"
                alt="Partner with Supershield"
                width={400}
                height={400}
                className="rounded-lg object-cover w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-6">
                <h3 className="text-white text-xl md:text-2xl font-semibold mb-3 leading-tight poppins ">
                  Partner <br /> with us now
                </h3>
                <Link href="/contact">
                  <button className="bg-[#c50022] text-white px-5 py-2 rounded font-medium hover:bg-[#c50022] transition open-sans">
                    Contact
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
