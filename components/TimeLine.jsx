// import React from "react";

// const Timeline = () => {
//     const data = [
//       {
//         year: "1998",
//         title: "DPC Crystalline Technology",
//         subtitle: "Self healing Admixtures, Coatings and Mortars",
//         description:
//           "The journey began with the realization of the need for durable and long-lasting waterproofing solutions for concrete structures. Supershield developed self-healing admixtures, coatings, and mortars based on Crystalline Technology that waterproof and protect concrete structures.",
//       },
//       {
//         year: "2001",
//         title: "Thermokote",
//         subtitle: "Thermal Insulation and Protective Coatings",
//         description:
//           "Supershield developed THERMOKOTE, an innovative product designed as an all-in-one solution that effectively insulated roofs and walls while also serving as an exceptional thermal barrier and waterproofing system.",
//       },
//       {
//         year: "2004",
//         title: "Slipstop",
//         subtitle: "Anti-Slip Treatment for Natural and Artificial Stones",
//         description:
//           "Supershield developed a unique high-performance anti-slip treatment for both natural and artificial stones that reduces the risk of slipping without altering the aesthetic appeal of the floors.",
//       },
//       {
//         year: "2010",
//         title: "Multiseal Crystalline Technology",
//         subtitle:
//           "Multifunctional Crystalline Waterproofing and Surface Protection",
//         description:
//           "Multiseal Technology waterproofs and protects concrete infrastructures by enhancing sustainability through self-healing multifunctional crystals and a hydrophobic barrier; making it ideal for both above-ground and below-ground structures.",
//       },
//       {
//         year: "2013",
//         title: "Multiguard",
//         subtitle:
//           "Crystalline Cementitious Waterproofing and Protective Barrier System",
//         description:
//           "Multiguard is a flagship product based on Supershield’s Multiseal Technology. It provides repellence on the concrete surface and forms hygroscopic crystalline structures deep inside.",
//       },
//       {
//         year: "2014",
//         title: "DPC Admixplus",
//         subtitle: "Liquid Crystalline Concrete Waterproofing",
//         description:
//           "Supershield, committed to innovation, developed Admixplus, a new-generation water-based, self-healing crystalline admixture for waterproofing concrete. Supershield Admixplus enhances concrete durability and performance while prioritising environmental sustainability.",
//       },
//       {
//         year: "2016",
//         title: "Ecopath",
//         subtitle: "Polymer-Engineered Soil Roads",
//         description:
//           "Supershield develops Ecopath, a sustainable and eco-friendly solution to create stable, durable, and erosion-resistant soil roads. The key feature of Ecopath lies in its ability to penetrate deep into the soil, bond with the existing particles, and create a robust matrix.",
//       },
//       {
//         year: "2018",
//         title: "Crystalspray",
//         subtitle: "Water-based, Hygroscopic Crystalline Waterproofing Coating",
//         description:
//           "As part of its ongoing efforts to develop and broaden its self-healing concrete protection range, Supershield introduced Crystalspray, a liquid crystalline waterproofing coating. It's eco-friendly and easy to use.",
//       },
//       {
//         year: "2019",
//         title: "DMC Crystalline Technology",
//         subtitle: "Dynamic Multifunctional Crystalline Technology",
//         description:
//           "Dynamic Multifunctional Crystalline Technology ensures concrete that is resilient from day one and built to endure. From managing water and thermal energy during casting to preventing ice formation, regulating humidity in hardened concrete, and defending against freeze-thaw cycles and chemical damage, Supershield admixtures enhance durability, sustainability, and longevity in any environment.",
//       },
//       {
//         year: "2021",
//         title: "Panelstop",
//         subtitle: "Waterstops with Swellable Lining",
//         description:
//           "Supershield develops Panelstop, a unique range of waterstops specifically designed for concrete structures requiring high levels of chemical resistance. Their galvanised steel construction, special coating, and unique swellable lining technology allow the waterstop to expand upon contact with moisture, effectively sealing joints in the concrete structure.",
//       },
//       {
//         year: "2022",
//         title: "Multiseal Admixplus",
//         subtitle:
//           "Self-healing Dynamic Multifunctional and Hydrophobic Crystalline Additive",
//         description:
//           "Combination of self-healing Dynamic Multifunctional Crystals and Hydrophobic pore lining admixture that provides multi protection for concrete in extreme weather variable conditions.",
//       },
//     ];

//   return (
//     <div className="bg-gray-50 min-h-screen py-20">
//       <h1 className="text-4xl font-bold text-center text-gray-800 mb-16">
//         Supershield Timeline
//       </h1>
//       <div className="max-w-6xl mx-auto px-4 py-8 relative">
//         {/* Timeline path container */}
//         <div className="relative">
//           {data.map((item, index) => {
//             const isLeft = index % 2 === 0;

//             return (
//               <div key={index} className="relative mb-20">
//                 {/* Content Card */}
//                 <div
//                   className={`relative ${
//                     isLeft ? "ml-0 mr-auto" : "ml-auto mr-0"
//                   } w-full max-w-sm`}
//                 >
//                   {/* Year Badge */}
//                   <div
//                     className={`absolute top-0 ${
//                       isLeft ? "-right-6" : "-left-6"
//                     } transform -translate-y-2 z-20`}
//                   >
//                     <div className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-lg shadow-lg text-lg">
//                       {item.year}
//                     </div>
//                   </div>

//                   {/* Content Box */}
//                   <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500 relative">
//                     {/* Location Icon */}
//                     <div className="flex items-center mb-2">
//                       <div className="w-4 h-4 bg-yellow-400 rounded-full mr-2"></div>
//                       <span className="text-sm text-gray-600 font-medium">
//                         Place of Origin: Global
//                       </span>
//                     </div>

//                     <h3 className="text-red-600 font-bold text-lg mb-2">
//                       {item.title}
//                     </h3>
//                     <h4 className="font-semibold text-gray-800 mb-3">
//                       {item.subtitle}
//                     </h4>
//                     <p className="text-gray-600 text-sm leading-relaxed">
//                       {item.description}
//                     </p>

//                     {/* Arrow pointing to next item */}
//                     {index < data.length - 1 && (
//                       <div
//                         className={`absolute bottom-0 ${
//                           isLeft ? "-right-8" : "-left-8"
//                         } transform translate-y-full`}
//                       >
//                         <div
//                           className={`w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-300 ${
//                             !isLeft ? "transform rotate-180" : ""
//                           }`}
//                         ></div>
//                       </div>
//                     )}
//                   </div>

//                   {/* Connecting line to next item */}
//                   {index < data.length - 1 && (
//                     <div
//                       className={`absolute ${
//                         isLeft ? "-right-4" : "-left-4"
//                       } bottom-0 transform translate-y-full`}
//                     >
//                       <svg width="100" height="80" className="text-gray-300">
//                         <path
//                           d={
//                             isLeft
//                               ? "M 0 0 Q 50 40 100 80"
//                               : "M 100 0 Q 50 40 0 80"
//                           }
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           fill="none"
//                           strokeDasharray="4,4"
//                         />
//                       </svg>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//      </div>
//     </div>
//   );
// };

// export default Timeline;

import React from "react";

const data = [
  {
    year: "2022",
    title: "Multiseal Admixplus",
    subtitle:
      "Self-healing Dynamic Multifunctional and Hydrophobic Crystalline Additive",
    description:
      "Combination of self-healing Dynamic Multifunctional Crystals and Hydrophobic pore lining admixture that provides multi protection for concrete in extreme weather variable conditions.",
  },
  {
    year: "2021",
    title: "Panelstop",
    subtitle: "Waterstops with Swellable Lining",
    description:
      "Supershield develops Panelstop, a unique range of waterstops specifically designed for concrete structures requiring high levels of chemical resistance. Their galvanised steel construction, special coating, and unique swellable lining technology allow the waterstop to expand upon contact with moisture, effectively sealing joints in the concrete structure.",
  },
  {
    year: "2019",
    title: "DMC Crystalline Technology",
    subtitle: "Dynamic Multifunctional Crystalline Technology",
    description:
      "Dynamic Multifunctional Crystalline Technology ensures concrete that is resilient from day one and built to endure. From managing water and thermal energy during casting to preventing ice formation, regulating humidity in hardened concrete, and defending against freeze-thaw cycles and chemical damage, Supershield admixtures enhance durability, sustainability, and longevity in any environment.",
  },
  {
    year: "2018",
    title: "Crystalspray",
    subtitle: "Water-based, Hygroscopic Crystalline Waterproofing Coating",
    description:
      "As part of its ongoing efforts to develop and broaden its self-healing concrete protection range, Supershield introduced Crystalspray, a liquid crystalline waterproofing coating. It's eco-friendly and easy to use.",
  },
  {
    year: "2016",
    title: "Ecopath",
    subtitle: "Polymer-Engineered Soil Roads",
    description:
      "Supershield develops Ecopath, a sustainable and eco-friendly solution to create stable, durable, and erosion-resistant soil roads. The key feature of Ecopath lies in its ability to penetrate deep into the soil, bond with the existing particles, and create a robust matrix.",
  },
  {
    year: "2014",
    title: "DPC Admixplus",
    subtitle: "Liquid Crystalline Concrete Waterproofing",
    description:
      "Supershield, committed to innovation, developed Admixplus, a new-generation water-based, self-healing crystalline admixture for waterproofing concrete. Supershield Admixplus enhances concrete durability and performance while prioritising environmental sustainability.",
  },

  {
    year: "2013",
    title: "Multiguard",
    subtitle:
      "Crystalline Cementitious Waterproofing and Protective Barrier System",
    description:
      "Develops Multiguard, yet another flagship product based on Supershield’s Multiseal Technology. It is a cementitious waterproofing and protective coating for concrete with exceptional performance and durability. One of the key features of Multiguard is its ability to provide repellence on the surface of concrete and form hygroscopic crystalline structures deep inside the concrete.",
  },
  {
    year: "2010",
    title: "Multiseal Crystalline Technology",
    subtitle:
      "Multifunctional Crystalline Waterproofing and Surface Protection",
    description:
      "Multiseal Technology waterproofs and protects concrete infrastructures by enhancing sustainability through self-healing multifunctional crystals and a hydrophobic barrier, making it ideal for both above-ground and below-ground structures.Designed to meet the rigorous demands of modern infrastructure, Multiseal Technology ensures that concrete structures remain resilient, watertight, and environmentally friendly.",
  },
  {
    year: "2004",
    title: "Slipstop",
    subtitle: "Anti-Slip Treatment for Natural and Artificial Stones",
    description:
      "Supershield developed a unique high-performance anti-slip treatment for both natural and artificial stones that reduces the risk of slipping without altering the aesthetic appeal of the floors.",
  },
  {
    year: "2001",
    title: "Thermokote",
    subtitle: "Thermal Insulation and Protective Coatings",
    description:
      "Supershield developed THERMOKOTE, an innovative product designed as an all-in-one solution that effectively insulated roofs and walls while also serving as an exceptional thermal barrier and waterproofing system.",
  },
  {
    year: "1998",
    title: "DPC Crystalline Technology",
    subtitle: "Self healing Admixtures, Coatings and Mortars",
    description:
      "The journey began with the realization of the need for durable and long-lasting waterproofing solutions for concrete structures. Supershield developed self-healing admixtures, coatings, and mortars based on Crystalline Technology that waterproof and protect concrete structures.",
  },
];

const Timeline = () => {
  return (
    <div className=" min-h-screen py-16  max-w-8xl mx-auto ">
      <h1 className="text-4xl font-bold text-center text-gray-800 md:mb-16 mb-20">
        Timeline of Product Innovations
      </h1>

      <div className="relative max-w-7xl mx-auto">
        {/* Center vertical red line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#c50022]"></div>

        <div className="space-y-24 relative">
          {data.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center relative"
              >
                {/* Left card */}
                {isLeft && (
                  <div className="w-full md:w-[60%] pr-0 ml-0 md:ml-0 mt-15 md:mt-0 md:pr-5 lg:pr-16 mb-6 md:mb-0">
                    <div className="bg-[#f7f7f7] shadow-sm p-6  mr-10 md:mr-28">
                      <h3 className="text-[#c50022] font-bold text-2xl uppercase mb-1 poppins sm:leading-8 md:leading-9 lg:leading-10 tracking-wide">
                        {item.title}
                      </h3>
                      <h4 className="font-semibold text-xl mb-2 poppins leading-7">
                        {item.subtitle}
                      </h4>
                      <p className="text-gray-700 text-sm md:text-base  open-sans font-normal leading-6 lg:leading-7">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}

                {/* Year circle */}
                <div className="absolute left-1/2 -top-[15%] md:top-0 poppins transform -translate-x-1/2 w-16 h-16 hover:w-17 hover:h-17 rounded-full border-4 border-[#c50022] bg-white flex items-center justify-center font-bold text-[#c50022] text-sm z-10 shadow-md">
                  {item.year}
                </div>

                {/* Right card */}
                {!isLeft && (
                  <div className="w-full md:w-[70%] mr-5 md:mr-0  pl-0 md:ml-auto mt-15 md:mt-0 md:pl-5 lg:pl-16 mb-6 md:mb-0">
                    <div className="bg-[#f7f7f7] p-6 shadow-sm ml-10 md:ml-60">
                      <h3 className="text-[#c50022] font-bold text-2xl uppercase mb-1 poppins leading-10 tracking-wide">
                        {item.title}
                      </h3>
                      <h4 className="font-semibold text-xl mb-2 poppins leading-7">
                        {item.subtitle}
                      </h4>
                      <p className="text-gray-700 text-bse open-sans font-normal leading-6 lg:leading-7">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
