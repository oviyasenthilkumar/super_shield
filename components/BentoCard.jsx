
// "use client";

// import Image from "next/image";
// import dpcImage from "/public/product1.webp";

// export default function BentoCard() {
//   return (
//     <section className="p-4 md:p-6 max-w-7xl mx-auto bg-[#f7f7f7] lg:mb-10">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2 gap-5 auto-rows-[minmax(120px,_auto)] grid-flow-dense">
//         {/* Image Block */}
//         <div className="relative overflow-hidden  shadow-sm bg-white lg:col-span-3 lg:row-span-2">
//           <Image
//             src={dpcImage}
//             alt="DPC Crystalline Image"
//             width={600}
//             height={600}
//             className="w-full h-full object-cover "
//           />
//         </div>

//         {/* Waterproofing Mechanism */}
//         <div className="bg-white p-5 shadow-sm md:row-span-1 lg:col-span-1 lg:row-span-1">
          // <h2 className="text-xl font-semibold text-[#c50022] poppins mb-3">
          //   Waterproofing Mechanism
          // </h2>
          // <ul className="mt-2 space-y-2">
          //   <li className="flex items-start gap-2">
          //     <img
          //       src="/angle-right.png"
          //       alt="arrow"
          //       className="w-3 min-w-3 mt-1"
          //     />
          //     <div className="text-gray-700 text-sm md:text-base font-normal leading-6 open-sans">
          //       Impermeable via non-soluble capillary crystals
          //     </div>
          //   </li>
          // </ul>
//         </div>

//         {/* Performance Capabilities */}
//         <div className="bg-white p-5  shadow-sm lg:col-span-2 lg:row-span-1">
          // <h2 className="text-xl font-semibold text-[#c50022] poppins">
          //   Performance Capabilities
          // </h2>
          // <ul className="mt-2 pl-1 space-y-2">
          //   {[
          //     "Internal waterproofing",
          //     "Crack sealing",
          //     "Fills microcracks and pores",
          //     "Durable long-term matrix protection",
          //   ].map((item, index) => (
          //     <li key={index} className="flex items-start gap-2">
          //       <img
          //         src="/angle-right.png"
          //         alt="arrow"
          //         className="w-3 min-w-3 mt-1"
          //       />
          //       <div className="text-gray-700 text-sm md:text-base font-normal leading-5 open-sans">
          //         {item}
          //       </div>
          //     </li>
          //   ))}
          // </ul>
//         </div>

//         {/* Product Types */}
//         <div className="bg-white p-5  shadow-sm lg:col-span-2 lg:row-span-1">
          // <h2 className="text-xl font-semibold text-[#c50022] poppins">
          //   Product Types
          // </h2>
          // <ul className="mt-2 pl-1 space-y-2">
          //   {[
          //     { label: "Liquid Admixtures", value: "DPC Admixplus" },
          //     { label: "Powder Admixtures", value: "Admix 100, 200, 300" },
          //     { label: "Powder Coating", value: "Crystalguard, Ultima" },
          //     { label: "Repair Products", value: "Crystalmix, Ultra, Patch" },
          //     { label: "Liquid Coating", value: "Crystalspray" },
          //   ].map((item, index) => (
          //     <li key={index} className="flex items-start gap-2">
          //       <img
          //         src="/angle-right.png"
          //         alt="arrow"
          //         className="w-3 min-w-3 mt-1"
          //       />
          //       <div className="text-gray-700 text-sm md:text-base font-normal leading-5 open-sans">
          //         <span className="font-medium text-gray-800">
          //           {item.label}:
          //         </span>{" "}
          //         {item.value}
          //       </div>
          //     </li>
          //   ))}
          // </ul>
//         </div>
//         {/* Core Properties */}
//         <div className="bg-white p-5  shadow-sm lg:col-span-1 lg:row-span-1">
          // <h2 className="text-xl font-semibold text-[#c50022] poppins">
          //   Core Properties
          // </h2>
          // <ul className="mt-2 space-y-2">
          //   {["Self-Healing", "Deep Penetration Crystallization"].map(
          //     (item, index) => (
          //       <li key={index} className="flex items-start gap-2">
          //         <img
          //           src="/angle-right.png"
          //           alt="arrow"
          //           className="w-3 min-w-3 mt-1"
          //         />
          //         <div className="text-gray-700 text-sm md:text-base font-normal leading-5 open-sans">
          //           {item}
          //         </div>
          //       </li>
          //     )
          //   )}
          // </ul>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import dpcImage from "/public/product1.webp"; // Replace with your image path

export default function BentoGrid() {
  return (
    <section className="p-4 md:p-6 max-w-7xl mx-auto bg-[#f7f7f7]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 lg:grid-rows-3 gap-5 auto-rows-[minmax(120px,_auto)] grid-flow-dense">
        <div className="bg-white shadow-sm p-4 lg:col-span-2 relative text-xl poppins font-bold text-[#c50022] flex flex-col items-center justify-center overflow-hidden">
          {/* Gradient overlay at top */}
          <div className="absolute top-0 left-0 w-full h-6 md:h-10 z-10">
            <Image
              src="/gradient-color.webp"
              alt="gradient"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Centered text */}
          <h2 className="relative z-20 text-center">
            <a href="/technology/dpc">DPC Crystalline Technology</a>
          </h2>
        </div>

        {/* Card 1 */}
        <div className="bg-white shadow-sm p-4 lg:col-span-3">
          <h2 className="text-xl font-semibold text-[#c50022] poppins mb-3">
            Waterproofing Mechanism
          </h2>
          <ul className="mt-2 space-y-2">
            <li className="flex items-start gap-2">
              <img
                src="/angle-right.png"
                alt="arrow"
                className="w-3 min-w-3 mt-1"
              />
              <div className="text-gray-700 text-sm md:text-base font-normal leading-6 open-sans">
                Impermeable via non-soluble capillary crystals
              </div>
            </li>
          </ul>
        </div>
        {/* Card 4 */}
        <div className="bg-white shadow-sm p-4 w-full h-full lg:col-span-3">
          <h2 className="text-xl font-semibold text-[#c50022] poppins">
            Core Properties
          </h2>
          <ul className="mt-2 space-y-2">
            {["Self-Healing", "Deep Penetration Crystallization"].map(
              (item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <img
                    src="/angle-right.png"
                    alt="arrow"
                    className="w-3 min-w-3 mt-1"
                  />
                  <div className="text-gray-700 text-sm md:text-base font-normal leading-5 open-sans">
                    {item}
                  </div>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Empty block to maintain alignment */}
        {/* <div className="lg:col-span-2"></div> */}

        {/* Image */}
        <div className="lg:col-span-4 lg:row-span-2 overflow-hidden relative">
          <Image
            src={dpcImage}
            alt="Crystalline Image"
            fill
            className="object-cover "
          />
        </div>

        {/* Card 3 + 4 wrapper */}
        <div className="lg:col-span-4 lg:row-span-2 flex flex-col gap-5">
          {/* Card 3 */}
          <div className="bg-white shadow-sm p-4 w-full h-full">
            <h2 className="text-xl font-semibold text-[#c50022] poppins">
              Product Types
            </h2>
            <ul className="mt-2 pl-1 space-y-2">
              {[
                { label: "Liquid Admixtures", value: "DPC Admixplus" },
                { label: "Powder Admixtures", value: "Admix 100, 200, 300" },
                { label: "Powder Coating", value: "Crystalguard, Ultima" },
                { label: "Repair Products", value: "Crystalmix, Ultra, Patch" },
                { label: "Liquid Coating", value: "Crystalspray" },
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <img
                    src="/angle-right.png"
                    alt="arrow"
                    className="w-3 min-w-3 mt-1"
                  />
                  <div className="text-gray-700 text-sm md:text-base font-normal leading-5 open-sans">
                    <span className="font-medium text-gray-800">
                      {item.label}:
                    </span>{" "}
                    {item.value}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Card 2 */}
          <div className="bg-white shadow-sm p-4 lg:col-span-3">
            <h2 className="text-xl font-semibold text-[#c50022] poppins">
              Performance Capabilities
            </h2>
            <ul className="mt-2 pl-1 space-y-2">
              {[
                "Internal waterproofing",
                "Crack sealing",
                "Fills microcracks and pores",
                "Durable long-term matrix protection",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <img
                    src="/angle-right.png"
                    alt="arrow"
                    className="w-3 min-w-3 mt-1"
                  />
                  <div className="text-gray-700 text-sm md:text-base font-normal leading-5 open-sans">
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
