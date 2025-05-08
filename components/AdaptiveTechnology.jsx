// // "use client";
// // import Image from "next/image";

// // const AdaptiveTechnology = () => {
// //   const challenges = [
// //     {
// //       text: "Improves workability and finishability even in hot, cold, or windy conditions",
// //       icon: "key1.png",
// //     },
// //     {
// //       text: "Enhances hydration in extreme hot or cold climates by ensuring moisture availability",
// //       icon: "key2.png",
// //     },
// //     {
// //       text: "Prevents thermal stress and cracking during hydration by optimizing heat evolution and controlling the differential heat curve.",
// //       icon: "key3.png",
// //     },
// //     {
// //       text: "Manages heat buildup in mass concrete pours, reducing cracking and DEF risks",
// //       icon: "key4.png",
// //     },
// //     {
// //       text: "Enhances microstructural bonding and reduces porosity at the ITZ",
// //       icon: "key5.png",
// //     },
// //     {
// //       text: "Self-heals micro-cracks and pores that form over time to protect concrete from deterioration",
// //       icon: "key6.png",
// //     },
// //     {
// //       text: "Adapts and dynamically manages temperature, moisture, and vapor fluctuations within the concrete",
// //       icon: "key7.png",
// //     },
// //     {
// //       text: "Provides Resilience Against Chemical and Diverse Environmental Challenges throughout the concrete lifecycle",
// //       icon: "key8.png",
// //     },
// //   ];

// //   return (
// //     <section className="w-full bg-[#f7f7f7] py-12 px-4 md:px-12">
// //       <div className="max-w-7xl px-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
// //         {/* Left Column */}
// //         <div>
// //           <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-black text-left  max-w-full">
// //             Crystalline Waterproofing <br />
// //             <span className="text-[#B41424]">Was Just the Beginning.</span>
// //           </h1>
// //           <h3 className="text-black text-lg md:text-2xl font-medium mb-4 text-left ">
// //             Meet SHIELD – World’s Only{" "}
// //             <span className="italic font-semibold">
// //               Adaptive Crystalline Technology<sup>®</sup>
// //             </span>
// //           </h3>
// //           <p className="text-black mb-4 open-sans font-normal text-base leading-6 text-left ">
// //             Traditional crystalline technologies are designed to waterproof
// //             concrete by filling pores and sealing cracks after they occur — a
// //             reactive approach that addresses defects and offers only basic
// //             durability.
// //           </p>
// //           <p className="text-black mb-4 open-sans font-normal text-base leading-6 text-left ">
// //             SHIELD Adaptive Crystalline Technologies go far beyond, it begins
// //             working from the casting stage, enhancing fresh concrete properties,
// //             supporting optimal hydration, and delivering superior performance
// //             even in extreme climates. It actively manages thermal, moisture,
// //             water, and vapor movement—adapting to phase changes throughout the
// //             concrete’s lifecycle. Designed for both intense heat and freezing
// //             temperatures, it reduces thermal stress and shrinkage cracks,
// //             ensuring long-term resilience, durability, and crack-free
// //             performance.
// //           </p>
// //           <p className="text-black  open-sans font-normal text-base leading-6 text-left ">
// //             With SHIELD Adaptive Crystalline, concrete isn’t just protected —
// //             it’s climate-change ready and durable by design, not by repair.
// //           </p>
// //         </div>

// //         {/* Right Column */}
// //         <div>
// //           <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-black text-left  max-w-full">
// //             Key Challenges Addressed by SHIELD <br />
// //             <span className="italic font-bold text-[#B41424]">
// //               Adaptive Crystalline Technology<sup>®</sup>
// //             </span>
// //           </h3>
// //           <ul className="space-y-4">
// //             {challenges.map((item, idx) => (
// //               <li
// //                 key={idx}
// //                 className="flex items-start gap-3 border-b pb-3 text-left "
// //               >
// //                 <Image
// //                   src={`/${item.icon}`}
// //                   alt={`icon-${idx + 1}`}
// //                   width={40}
// //                   height={40}
// //                   className="mt-1 w-6 h-6 object-contain"
// //                 />
// //                 <span className="text-black open-sans font-medium text-base text-left ">
// //                   {item.text}
// //                 </span>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default AdaptiveTechnology;

// "use client";
// import Image from "next/image";

// const AdaptiveTechnology = () => {
//   const challenges = [
//     {
//       text: "Improves workability and finishability even in hot, cold, or windy conditions",
//       icon: "key1.png",
//     },
//     {
//       text: "Enhances hydration in extreme hot or cold climates by ensuring moisture availability",
//       icon: "key2.png",
//     },
//     {
//       text: "Prevents thermal stress and cracking during hydration by optimizing heat evolution and controlling the differential heat curve.",
//       icon: "key3.png",
//     },
//     {
//       text: "Manages heat buildup in mass concrete pours, reducing cracking and DEF risks",
//       icon: "key4.png",
//     },
//     {
//       text: "Enhances microstructural bonding and reduces porosity at the ITZ",
//       icon: "key5.png",
//     },
//     {
//       text: "Self-heals micro-cracks and pores that form over time to protect concrete from deterioration",
//       icon: "key6.png",
//     },
//     {
//       text: "Adapts and dynamically manages temperature, moisture, and vapor fluctuations within the concrete",
//       icon: "key7.png",
//     },
//     {
//       text: "Provides Resilience Against Chemical and Diverse Environmental Challenges throughout the concrete lifecycle",
//       icon: "key8.png",
//     },
//   ];

//   return (
//     <section className="w-full bg-white py-16 px-4 md:px-12">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
//         {/* Left Column */}
//         <div className="space-y-6 bg-[#EDEDED] p-14 py-24">
//           <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-black poppins">
//             Crystalline Waterproofing <br />
//             Was Just the Beginning.
//           </h1>
//           <h3 className="text-2xl md:text-3xl text-black font-medium poppins">
//             Meet SHIELD – World’s Only Adaptive Crystalline Technology
//             <sup>®</sup>
//           </h3>
//           <p className="text-base font-normal leading-7 text-gray-800 open-sans">
//             Traditional crystalline technologies are designed to waterproof
//             concrete by filling pores and sealing cracks after they occur — a
//             reactive approach that addresses defects and offers only basic
//             durability.
//           </p>
//           <p className="text-base font-normal leading-7 text-gray-800 open-sans">
//             SHIELD Adaptive Crystalline Technologies go far beyond. It begins
//             working from the casting stage, enhancing fresh concrete properties,
//             supporting optimal hydration, and delivering superior performance
//             even in extreme climates. It actively manages thermal, moisture,
//             water, and vapor movement—adapting to phase changes throughout the
//             concrete’s lifecycle. Designed for both intense heat and freezing
//             temperatures, it reduces thermal stress and shrinkage cracks,
//             ensuring long-term resilience, durability, and crack-free
//             performance.
//           </p>
//           <p className="text-base font-normal leading-7 text-gray-800 open-sans">
//             With SHIELD Adaptive Crystalline, concrete isn’t just protected —
//             it’s climate-change ready and durable by design, not by repair.
//           </p>
//         </div>

//         {/* Right Column */}
//         <div className="bg-[#F7F7F7] p-14 py-24">
//           <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-black poppins ">
//             Key Challenges Addressed by SHIELD Adaptive Crystalline Technology<sup>®</sup>
           
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
//             {challenges.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="flex items-start gap-4 p-4 bg-white shadow-sm "
//               >
//                 <Image
//                   src={`/${item.icon}`}
//                   alt={`icon-${idx + 1}`}
//                   width={32}
//                   height={32}
//                   className="w-8 h-8 object-contain mt-1"
//                 />
//                 <p className="text-base text-[#515050] font-semibold open-sans">
//                   {item.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AdaptiveTechnology;
"use client";
import Image from "next/image";

const AdaptiveTechnology = () => {
  const challenges = [
    { text: "Improves workability and finishability even in hot, cold, or windy conditions", icon: "key1.png" },
    { text: "Enhances hydration in extreme hot or cold climates by ensuring moisture availability", icon: "key2.png" },
    { text: "Prevents thermal stress and cracking during hydration by optimizing heat evolution and controlling the differential heat curve.", icon: "key3.png" },
    { text: "Manages heat buildup in mass concrete pours, reducing cracking and DEF risks", icon: "key4.png" },
    { text: "Enhances microstructural bonding and reduces porosity at the ITZ", icon: "key5.png" },
    { text: "Self-heals micro-cracks and pores that form over time to protect concrete from deterioration", icon: "key6.png" },
    { text: "Adapts and dynamically manages temperature, moisture, and vapor fluctuations within the concrete", icon: "key7.png" },
    { text: "Provides Resilience Against Chemical and Diverse Environmental Challenges throughout the concrete lifecycle", icon: "key8.png" },
  ];

  return (
    <section className="w-full py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full  ">
        {/* Left Column */}
        <div className="bg-[#F4F4F4] flex items-start">
          <div className="p-6 sm:p-10 md:p-14 space-y-6 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold leading-10 text-black poppins tracking-wide">
              Crystalline Waterproofing <br />
              Was Just the Beginning.
            </h2>
            <h3 className="text-xl md:text-3xl text-black leading-9 font-medium poppins">
              Meet SHIELD – World’s Only Adaptive Crystalline Technology
              <sup>®</sup>
            </h3>
            <p className="text-justify font-normal leading-6 text-black open-sans text-base">
              Traditional crystalline technologies are designed to waterproof
              concrete by filling pores and sealing cracks after they occur — a
              reactive approach that addresses defects and offers only basic
              durability.
            </p>
            <p className="text-justify font-normal leading-6 text-black open-sans text-base">
              SHIELD Adaptive Crystalline Technologies go far beyond, it begins
              working from the casting stage, enhancing fresh concrete
              properties, supporting optimal hydration, and delivering superior
              performance even in extreme climates. It actively manages thermal,
              moisture, water, and vapor movement—adapting to phase changes
              throughout the concrete’s lifecycle. Designed for both intense
              heat and freezing temperatures, it reduces thermal stress and
              shrinkage cracks, ensuring long-term resilience, durability, and
              crack-free performance.
            </p>
            <p className="text-justify font-normal leading-6 text-black open-sans text-base">
              With SHIELD Adaptive Crystalline, concrete isn’t just protected —
              it’s climate-change ready and durable by design, not by repair.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-[#efefef] flex items-start">
          <div className="p-6 sm:p-10 md:p-14 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-black poppins leading-10 tracking-wide">
              Key Challenges Addressed by SHIELD Adaptive Crystalline Technology
              <sup>®</sup>
            </h2>
            <div>
              {challenges.map((item, idx) => (
                <div key={idx} className="flex items-start gap-5 p-4 ">
                  <Image
                    src={`/${item.icon}`}
                    alt={`icon-${idx + 1}`}
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain mt-1"
                  />
                  <p className="text-base leading-6 text-black font-normal open-sans">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdaptiveTechnology;
