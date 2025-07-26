"use client";

import Image from "next/image";
import Accordion from "./Accordian";

export default function constructionJoints() {
  return (
    <div
      id="construction"
      className="px-6 md:px-16 py-10 max-w-7xl mx-auto scroll-mt-28"
    >
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <div className="w-full lg:w-[60%]">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4 poppins leading-10">
            2. CONSTRUCTION JOINTS
          </h1>
          <p className=" text-gray-700 space-y-4 text-justify font-normal open-sans leading-7 text-sm md:text-base">
            Construction Joints are introduced in order to facilitate the
            shrinkage caused due to the large displacements . These are the most
            likely areas which can result in water ingress. Due to the nature of
            concrete and reinforced concrete, structures must always be built
            divided into sections by forming joints. Waterstops are necessary
            products used for the sealing of construction joints. Waterstops
            should be used to prevent water transmission at joints and must be
            installed in all joints to produce a closed joint sealing system.
          </p>
        </div>
        {/* Right Image */}
        <div className="w-full lg:w-[30%] mx-auto">
          <Image
            src="/constructionJoints.webp"
            alt="Watertight Concrete"
            width={1000}
            height={1000}
            className="object-contain w-full"
          />
        </div>
      </div>

      {/* Products Used Section */}
      <div className="bg-gray-50 mt-10 p-6  shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 poppins leading-8">
          Steel Waterstops for Sealing Construction Joints
        </h2>
        <Accordion
          title="Supershield PANELSTOP"
          content="Supershield PANELSTOP are galvanized steel waterstops for Construction Joints."
          imageSrc="/Panelstop-1.webp"
          readMoreLink="/PanelStop"
        />

        <Accordion
          title="Supershield PANELSTOP - F"
          content="Supershield PANELSTOP - F are galvanized steel waterstops with Fixing brackets for Construction Joints."
          imageSrc="/PANELSTOP - F.webp"
          readMoreLink="/PanelStop"
        />
        <Accordion
          title="Supershield PANELSTOP SL"
          content="Supershield PANELSTOP SL are galvanized steel waterstops with Swellable lining for Construction Joints ."
          imageSrc="/PanelstopSL-1.webp"
          readMoreLink="/PanelStop"
        />
        <Accordion
          title="Supershield PANELSTOP SL-F"
          content="Supershield PANELSTOP SL-F are galvanized steel waterstops with Swellable Lining and Fixing Brackets for Construction Joints ."
          imageSrc="/PanelstopSL-F-1.webp"
          readMoreLink="/PanelStop"
        />
        <Accordion
          title="Supershield SWELLBELT"
          content="Supershield SWELLBELT is a dual rubber high performance hydrollic waterstop belt for effectively sealing construction joints and pipe penetrations"
          imageSrc="/Panelstopswell.webp"
          readMoreLink="/PanelStop"
        />
      </div>

      {/* <div className="mt-8 text-right">
        <button onClick={() => {
          document.getElementById("drybox")?.scrollIntoView({ behavior: "smooth" });
          }} className="border border-gray-800 px-4 py-2 text-sm hover:bg-gray-100 transition hover:bg-red-600 hover:border-black hover:text-black">
          Slide up
        </button>
      </div> */}
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
