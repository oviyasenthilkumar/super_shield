// "use client";

// const climateData = [
//   {
//     title: "Casting Performance in Cold Climates",
//     image: "/cold-climate.webp",
//     description: [
//       "Enhanced Thermal Resistivity: Prevents heat loss to surrounding cold environments.",
//       "Prevents Freezing: Maintains water availability for continued hydration.",
//       "Controlled Water Availability: Ensures effective cement hydration even in low temperatures.",
//       "Reduced Thermal Peaks: Manages heat release during hydration to stabilize temperature.",
//       "Minimized Internal Thermal Gradients: Lowers stress from temperature differences within the concrete.",
//       "Favorable Heat Evolution Curves: Achieves optimal heat and differential heat evolution curves during hydration.",
//       "Enhances Workability & Retains Slump: Ensures smooth concrete placement and maintains consistency for efficient application.",
//     ],
//   },
//   {
//     title: "Casting Performance in Hot Climates",
//     image: "/heat-climate.webp",
//     description: [
//       "<strong>Reduced Thermal Conductivity:</strong> Limits heat absorption from hot surroundings.",
//       "<strong>Controlled Water Retention: Minimizes moisture loss for consistent cement hydration.",
//       "<strong>Prevents Rapid Drying: Protects concrete from shrinkage and cracking in high heat.",
//       "<strong>Managed Thermal Peaks: Regulates heat generation during hydration phases.",
//       "<strong>Reduced Internal Thermal Gradients: Ensures temperature uniformity, reducing internal stress.",
//       "<strong>Favorable Heat Evolution Curves: Achieves ideal heat and differential heat evolution curves for hydration.",
//       "<strong>Enhances Workability & Retains Slump: Ensures smooth concrete placement and maintains consistency for efficient application.",
//     ],
//   },
// ];

// export default function ClimateCastingPerformance() {
//   return (
//     <section className="py-16 px-0 lg:px-10 lg:bg-[linear-gradient(to_right,_#ededed_50%,_#F7F7F7_50%)] mb-20">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12">
//         {climateData.map((climate, index) => (
//           <div
//             key={index}
//             className={`p-6 flex flex-col items-start 
//               ${
//                 index === 0
//                   ? "bg-[#ededed] lg:bg-transparent"
//                   : "bg-[#F7F7F7] lg:bg-transparent"
//               }
//             `}
//           >
//             <h3 className=" text-2xl md:text-3xl font-semibold mb-4 lg:mb-8 text-left leading-10 poppins ">
//               {climate.title}
//             </h3>
          
//             <img
//               src={climate.image}
//               alt={climate.title}
//               className="w-full md:w-[80%] md:h-[60%] h-auto mb-6 "
//             />
           

//             <ul className="space-y-3 w-full">
//               {climate.description.map((point, i) => (
//                 <li key={i} className="flex items-start gap-2">
//                   <img
//                     src="/angle-right.png"
//                     alt="arrow"
//                      className="w-3 min-w-3 mt-2"
//                   />
//                   <p className="text-base leading-7 open-sans">{point}</p>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
"use client";

const climateData = [
  {
    title: "Casting Performance in Cold Climates",
    image: "/cold-climate.webp",
    description: [
      "<strong>Enhanced Thermal Resistivity:</strong> Prevents heat loss to surrounding cold environments.",
      "<strong>Prevents Freezing:</strong> Maintains water availability for continued hydration.",
      "<strong>Controlled Water Availability:</strong> Ensures effective cement hydration even in low temperatures.",
      "<strong>Reduced Thermal Peaks:</strong> Manages heat release during hydration to stabilize temperature.",
      "<strong>Minimized Internal Thermal Gradients:</strong> Lowers stress from temperature differences within the concrete.",
      "<strong>Favorable Heat Evolution Curves:</strong> Achieves optimal heat and differential heat evolution curves during hydration.",
      "<strong>Enhances Workability & Retains Slump:</strong> Ensures smooth concrete placement and maintains consistency for efficient application.",
    ],
  },
  {
    title: "Casting Performance in Hot Climates",
    image: "/heat-climate.webp",
    description: [
      "<strong>Reduced Thermal Conductivity:</strong> Limits heat absorption from hot surroundings.",
      "<strong>Controlled Water Retention:</strong> Minimizes moisture loss for consistent cement hydration.",
      "<strong>Prevents Rapid Drying:</strong> Protects concrete from shrinkage and cracking in high heat.",
      "<strong>Managed Thermal Peaks:</strong> Regulates heat generation during hydration phases.",
      "<strong>Reduced Internal Thermal Gradients:</strong> Ensures temperature uniformity, reducing internal stress.",
      "<strong>Favorable Heat Evolution Curves:</strong> Achieves ideal heat and differential heat evolution curves for hydration.",
      "<strong>Enhances Workability & Retains Slump:</strong> Ensures smooth concrete placement and maintains consistency for efficient application.",
    ],
  },
];

export default function ClimateCastingPerformance() {
  return (
    <section className="py-16 px-0 lg:px-10 lg:bg-[linear-gradient(to_right,_#ededed_50%,_#F7F7F7_50%)] mb-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12">
        {climateData.map((climate, index) => (
          <div
            key={index}
            className={`p-6 flex flex-col items-start 
              ${
                index === 0
                  ? "bg-[#ededed] lg:bg-transparent"
                  : "bg-[#F7F7F7] lg:bg-transparent"
              }
            `}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 lg:mb-8 text-left  sm:leading-8 md:leading-9 lg:leading-10 poppins">
              {climate.title}
            </h3>

            <img
              src={climate.image}
              alt={climate.title}
              className="w-full md:w-[80%] md:h-[60%] h-auto mb-6"
            />

            <ul className="space-y-3 w-full">
              {climate.description.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <img
                    src="/angle-right.png"
                    alt="arrow"
                    className="w-3 min-w-3 mt-2"
                  />
                  <p
                    className="text-base sm:leading-6 md:leading-7 lg:leading-7 open-sans font-normal"
                    dangerouslySetInnerHTML={{ __html: point }}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
