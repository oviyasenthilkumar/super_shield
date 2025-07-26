// "use client";

// import Image from "next/image";
// import { ArrowRightIcon } from "@heroicons/react/20/solid";


// export default function ProductCard({ image, name, description }) {
//   return (
//     <div className="relative group overflow-hidden bg-white shadow-md w-68 h-84">
//       <Image
//         src={image}
//         alt={name}
//         width={300}
//         height={300}
//         className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
//       />
//       <div className="absolute inset-0 bg-red-700 bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-8">
//         <p className="text-sm">{description}</p> {/* ✅ must be a string */}
//       </div>
//       <div className="absolute bottom-0 left-0 w-full bg-red-700 text-white text-center py-5 text-sm font-semibold z-10 group-hover:opacity-0 transition-opacity duration-300">
//         {name} <ArrowRightIcon className="h-5 w-5" />
//       </div>
//     </div>
//   );
// }
