"use client";

import Image from "next/image";
import Accordion from "./Accordian";

export default function ExpansionJoints() {
  return (
    <div
      id="expansion"
      className="px-6 md:px-16 py-10 max-w-7xl mx-auto scroll-mt-28"
    >
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <div className="w-full lg:w-[60%]">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4 poppins leading-10 ">
            3. EXPANSION JOINTS
          </h1>
          <p className=" text-gray-700 space-y-4 text-justify open-sans leading-7 text-sm md:text-base font-normal ">
            Special attention should be given to the use of waterstops at
            movement joints. Movement joints are necessary because of movement
            in the structure as a result of settlement, traffic loads,
            shrinkage, or other causes. In addition to the function of the
            waterstops to act as a waterproofing seal in the joint, the
            waterstop should allow the sections to move independently of each
            other – without restriction and free from tension.
          </p>
        </div>
        {/* Right Image */}
        <div className="w-full lg:w-[30%] mx-auto">
          <Image
            src="/EXPANSION JOINTS.webp"
            alt="Watertight Concrete"
            width={1000}
            height={1000}
            className="object-contain w-full"
          />
        </div>
      </div>

      {/* Products Used Section */}
      <div className="bg-gray-50 mt-10 p-6  shadow-sm">
        <h2 className="text-2xl poppins font-semibold mb-4 poppins leading-8">
          Swellable Profiles and Sealants for Expansion Joints
        </h2>
        <Accordion
          title="Supershield JOINTBELT Ext B"
          content="Supershield JOINTBELT Ext B is a Flat, Rigid PVC waterstop for the external side of the construction and expansion joints."
          imageSrc="/jointbelt-ext.webp"
          readMoreLink="/expansionjoint/JointbeltExtB"
        />

        <Accordion
          title="Supershield JOINTBELT B/SL"
          content="
           Supershield JOINTBELT B/ SL is a PVC waterstop with a web bulb and swellable lining for effective sealing of the internal section of expansion joints."
          imageSrc="/jointbelt BSL.webp"
          readMoreLink="/expansionjoint/JointbeltExtB"
        />
        <Accordion
          title="Supershield SWELLROD"
          content="Supershield SWELLROD is a unique combination of expanding hydrophilic materials and Non-expanding chloroprene rubber co-extruded together."
          imageSrc="/SwellrodDry.webp"
          readMoreLink="/expansionjoint/Swellstop"
        />
        <Accordion
          title="Supershield BACKER ROD"
          content="Supershield BACKER ROD is a closed-cell compressible backup material to maintain the sealant profile in expansion joints and gaps."
          imageSrc="/BACKER ROD.webp"
          readMoreLink="/expansionjoint/BackerRod"
        />
        <Accordion
          title="Supershield SEALON EP"
          content="Supershield SEALON EP is a two-component, epoxy-polyurethane elastomeric and thixotropic sealant designed for joints exposed to traffic."
          imageSrc="/SEALON EP.webp"
          readMoreLink="/expansionjoint/SealonEp"
        />
        <Accordion
          title="Supershield FLEXSTRIP 250"
          content="
          Supershield FLEXSTRIP 250 is a flexible waterstop designed for joints subject to movement."
          imageSrc="/FLEXSTRIP 250.webp"
          readMoreLink="/expansionjoint/Flexstrip"
        />
        <Accordion
          title="Supershield EPOFIX"
          content="Supershield EPOFIX is a Two component Epoxy adhesives for Civil Engineering Purpose."
          imageSrc="/EPOFIXDry.webp"
          readMoreLink="/expansionjoint/epofix"
        />
      </div>
      <div className="mt-8 text-right">
        <button
          onClick={() => {
            document
              .getElementById("drybox")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="relative overflow-hidden border border-gray-800 px-4 py-2 text-sm text-gray-800 transition duration-300 group"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white hover:text-white">
            Slide up
          </span>
          <span className="absolute inset-0 bg-[#C50022] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></span>
        </button>
      </div>
    </div>
  );
}
