// "use client";
// import Image from "next/image";

// const SwellostopApplication = () => {
//   return (
//     <section className="px-3 sm:px-4 md:px-12 py-12 bg-white max-w-7xl mx-auto">
//       {/* Applications */}
//       <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4 poppins">
//         Applications
//       </h2>
//       <p className="text-base md:text-lg leading-8 text-gray-700 mb-6 open-sans">
//         Water treatment plants, Wastewater treatment Facilities, Tunnels and
//         culverts, Dams, canals, water reservoirs, Basements, Retaining walls,
//         Foundations, Pits, Pipe penetrations and Swimming pools.
//       </p>

//       {/* Advantages */}
//       <div className=" ">
//         <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4 poppins">
//           Advantages
//         </h2>
//         <ul className="list-disc pl-6 space-y-3 text-sm md:text-base  leading-8 open-sans text-gray-700 ">
//           <li className="flex items-start gap-2">
//             <img
//               src="/angle-right.png"
//               alt="arrow"
//               className="w-3 min-w-3 mt-2"
//             />
//             <div className="text-gray-700 mb-6 text-sm md:text-base  font-normal leading-7 open-sans max-w-lg">
//               Supershield Swellstop is to be used where watertight integrity is
//               the prime issue.
//             </div>
//           </li>
//           <li className="flex items-start gap-2 ">
//             <img
//               src="/angle-right.png"
//               alt="arrow"
//               className="w-3 min-w-3 mt-2"
//             />
//             <div className="text-gray-700 mb-6 text-sm md:text-base  font-normal leading-7 open-sans max-w-lg">
//               Self-adhesive properties make installation much easier and reduce
//               construction costs.
//             </div>
//           </li>
//           <li className="flex items-start gap-2 ">
//             <img
//               src="/angle-right.png"
//               alt="arrow"
//               className="w-3 min-w-3 mt-2"
//             />
//             <div className="text-gray-700 mb-6 text-sm md:text-base  font-normal leading-7 open-sans max-w-lg">
//               A co-extruded design means expansion is directed across the joint
//               for maximum seal.
//             </div>
//           </li>
//           <li className="flex items-start gap-2 ">
//             <img
//               src="/angle-right.png"
//               alt="arrow"
//               className="w-3 min-w-3 mt-2"
//             />
//             <div className="text-gray-700 mb-6 text-sm md:text-base  font-normal leading-7 open-sans max-w-lg">
//               Has a delay coating to help prevent premature expansion.
//             </div>
//           </li>
//           <li className="flex items-start gap-2 ">
//             <img
//               src="/angle-right.png"
//               alt="arrow"
//               className="w-3 min-w-3 mt-2"
//             />
//             <div className="text-gray-700 mb-6 text-sm md:text-base  font-normal leading-7 open-sans max-w-lg">
//               It changes color as a visual alert to let you know it has
//               expanded. Simple butt joins are sufficient; there is no need for
//               special intersections.
//             </div>
//           </li>
//           <li className="flex items-start gap-2 ">
//             <img
//               src="/angle-right.png"
//               alt="arrow"
//               className="w-3 min-w-3 mt-2"
//             />
//             <div className="text-gray-700 mb-6 text-sm md:text-base  font-normal leading-7 open-sans max-w-lg">
//               Can be applied to rough surfaces.
//             </div>
//           </li>
//           <li className="flex items-start gap-2 ">
//             <img
//               src="/angle-right.png"
//               alt="arrow"
//               className="w-3 min-w-3 mt-2"
//             />
//             <div className="text-gray-700 mb-6 text-sm md:text-base  font-normal leading-7 open-sans max-w-lg">
//               Can be joined to traditional PVC waterstops
//             </div>
//           </li>
//           <li className="flex items-start gap-2 ">
//             <img
//               src="/angle-right.png"
//               alt="arrow"
//               className="w-4 min-w-4 mt-3"
//             />
//             <div className="text-gray-700 mb-6 text-sm md:text-base  font-normal leading-7 open-sans max-w-lg">
//               Easy to handle and install; no compaction or displacement problems
//             </div>
//           </li>
//           <li className="flex items-start gap-2">
//             <img
//               src="/angle-right.png"
//               alt="arrow"
//               className="w-3 min-w-3 mt-2"
//             />
//             <div className="text-gray-700 mb-6 text-sm md:text-base  font-normal leading-7 open-sans max-w-lg">
//               Non-toxic and non-hazardous
//             </div>
//           </li>
//           <li className="flex items-start gap-2">
//             <img
//               src="/angle-right.png"
//               alt="arrow"
//               className="w-3 min-w-3 mt-2"
//             />
//             <div className="text-gray-700 mb-6 text-sm md:text-base  font-normal leading-7 open-sans max-w-lg">
//               No need for split-forming
//             </div>
//           </li>
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default SwellostopApplication;
"use client";
import Image from "next/image";

const SwellostopApplication = () => {
  return (
    <section className="px-3 sm:px-4 md:px-0 py-12 bg-white max-w-7xl mx-auto">
      {/* Applications */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 poppins">
        Applications
      </h2>
      <p className="text-sm md:text-base leading-7 font-normal text-gray-700 mb-6 open-sans">
        Water treatment plants, Wastewater treatment Facilities, Tunnels and
        culverts, Dams, canals, water reservoirs, Basements, Retaining walls,
        Foundations, Pits, Pipe penetrations and Swimming pools.
      </p>
      <div>
        {/* Features and Benefits */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-10 mb-4 poppins text-gray-900">
          Advantages
        </h2>
        <ul className=" text-gray-700 mt-4">
          {[
            "Supershield Swellstop is to be used where watertight integrity is the prime issue.",
            "Self-adhesive properties make installation much easier and reduce construction costs.",
            "A co-extruded design means expansion is directed across the joint for maximum seal",
            "Has a delay coating to help prevent premature expansion.",
            "It changes color as a visual alert to let you know it has expanded. Simple butt joins are sufficient; there is no need for special intersections.",
            "Can be applied to rough surfaces.",
            "Can be joined to traditional PVC waterstops",
            "Easy to handle and install; no compaction or displacement problems",
            "Non-toxic and non-hazardous",
            "No need for split-forming",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-4 mb-3">
              <img
                src="/angle-right.png"
                alt="arrow"
                className="w-3 min-w-3 mt-2"
              />
              <div className="text-gray-700 text-sm md:text-base font-normal leading-7 open-sans">
                {item}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SwellostopApplication;