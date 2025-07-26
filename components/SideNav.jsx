// // import Link from "next/link";

// // const SideNav = () => {
// //   return (
// //     <div className="sticky top-24 h-fit w-58 p-6 border rounded-lg shadow-md bg-white space-y-4 ">
// //       <h3 className="text-lg font-semibold mb-2">Technologies</h3>
// //       <ul className="space-y-2 text-sm">
// //         <li>
// //           <Link href="/technology/dpc" className="hover:underline">
// //             DPC Crystalline Technology

// //           </Link>
// //         </li>
// //         <li>
// //           <Link href="/technology/dmc-technology" className="hover:underline">
// //           DMC Technology
// //           </Link>
// //         </li>
// //         <li>
// //           <Link href="/technology/multiseal" className="hover:underline">
// //           Multiseal Crystalline Technology
// //           </Link>
// //         </li>
// //       </ul>
// //     </div>
// //   );
// // };

// // export default SideNav;


// "use client"
// import { useState } from "react";
// import Link from "next/link";

// const SideNav = () => {
//   const [open, setOpen] = useState({
//     dpc: false,
//     dmc: false,
//     multiseal: false,
//   });

//   const toggle = (key) => {
//     setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
//   };

//   return (
//     <div className="sticky top-36 h-fit w-56 p-4 border rounded-lg shadow-md bg-white space-y-4">
//       <h3 className="text-lg font-semibold mb-2">Technologies</h3>
//       <ul className="space-y-2 text-sm">

//         {/* DPC */}
//         <li>
//           <button onClick={() => toggle("dpc")} className="w-full text-left  flex justify-between items-center">
//             DPC Crystalline Technology
//             <span>{open.dpc ?  "🡫":"🡪"}</span>
//           </button>
//           {open.dpc && (
//             <ul className="pl-4 mt-2 space-y-1">
//               <li><Link href="/DPCAdmixplus" className="">DPC Admixplus</Link></li>
//               <li><Link href="/admix-100" className="">Admix 100</Link></li>
//               <li><Link href="/admix-200" className="">Admix 200</Link></li>
//               <li><Link href="/admix-300" className="">Admix 300</Link></li>
//               <li><Link href="/crystalguard" className="">Crystalguard</Link></li>
//               <li><Link href="crystalguard-ultima" className="">Crystalguard Ultima</Link></li>
//               <li><Link href="/crystalspray" className="">Crystalspary</Link></li>
//               <li><Link href="/crystalmix" className="">Crystalmix</Link></li>
//               <li><Link href="/crystalmix-ultra" className="">Crystalmix Ultra</Link></li>
//               <li><Link href="/crystalpatch" className="">Crystalpatch</Link></li>
//             </ul>
//           )}
//         </li>

//         {/* DMC */}
//         <li>
//           <button onClick={() => toggle("dmc")} className="w-full text-left flex justify-between items-center">
//             DMC Technology
//             <span>{open.dmc ?  "🡫":"🡪"}</span>
//           </button>
//           {open.dmc && (
//             <ul className="pl-4 mt-2 space-y-1">
//               <li><Link href="/Admixplus" className="">Admixplus</Link></li>
             
//             </ul>
//           )}
//         </li>

//         {/* Multiseal */}
//         <li>
//           <button onClick={() => toggle("multiseal")} className="w-full text-left flex justify-between items-center">
//             Multiseal Crystalline Technology
//             <span>{open.multiseal ?  "🡫":"🡪"}</span>
//           </button>
//           {open.multiseal && (
//             <ul className="pl-4 mt-2 space-y-1">
//               <li><Link href="/multiseal" className="">Multiseal</Link></li>
//               <li><Link href="/multiseal" className="">Multiseal Admixplus</Link></li>
//               <li><Link href="/multiguard" className="">Multiguard</Link></li>
//               <li><Link href="/clearseal" className="">Clearseal</Link></li>
//             </ul>
//           )}
//         </li>

//       </ul>
//     </div>
//   );
// };

// export default SideNav;

"use client";
import { useState } from "react";
import Link from "next/link";

const SideNav = () => {
  const [open, setOpen] = useState({
    dpc: false,
    dmc: false,
    multiseal: false,
  });

  const toggle = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="sticky top-36 h-fit w-56 p-4 border rounded-lg shadow-md bg-white space-y-4">
      <h3 className="text-lg font-semibold mb-2">Technologies</h3>
      <ul className="space-y-2 text-sm">

        {/* DPC */}
        <li className="flex justify-between items-center">
          <Link href="/technology/dpc" className="hover:underline">
            DPC Crystalline Technology
          </Link>
          <button onClick={() => toggle("dpc")} className="ml-2">
            {open.dpc ? "🡫" : "🡪"}
          </button>
        </li>
        {open.dpc && (
          <ul className="pl-4 mt-2 space-y-1">
            <li><Link href="/DPCAdmixplus">DPC Admixplus</Link></li>
            <li><Link href="/admix-100">Admix 100</Link></li>
            <li><Link href="/admix-200">Admix 200</Link></li>
            <li><Link href="/admix-300">Admix 300</Link></li>
            <li><Link href="/crystalguard">Crystalguard</Link></li>
            <li><Link href="/crystalguard-ultima">Crystalguard Ultima</Link></li>
            <li><Link href="/crystalspray">Crystalspary</Link></li>
            <li><Link href="/crystalmix">Crystalmix</Link></li>
            <li><Link href="/crystalmix-ultra">Crystalmix Ultra</Link></li>
            <li><Link href="/crystalpatch">Crystalpatch</Link></li>
          </ul>
        )}

        {/* DMC */}
        <li className="flex justify-between items-center">
          <Link href="/technology/dmc-technology" className="hover:underline">
            DMC Technology
          </Link>
          <button onClick={() => toggle("dmc")} className="ml-2">
            {open.dmc ? "🡫" : "🡪"}
          </button>
        </li>
        {open.dmc && (
          <ul className="pl-4 mt-2 space-y-1">
            <li><Link href="/Admixplus">Admixplus</Link></li>
          </ul>
        )}

        {/* Multiseal */}
        <li className="flex justify-between items-center">
          <Link href="/technology/multiseal" className="hover:underline">
            Multiseal Crystalline Technology
          </Link>
          <button onClick={() => toggle("multiseal")} className="ml-2">
            {open.multiseal ? "🡫" : "🡪"}
          </button>
        </li>
        {open.multiseal && (
          <ul className="pl-4 mt-2 space-y-1">
            <li><Link href="/multiseal">Multiseal</Link></li>
            <li><Link href="/multiseal">Multiseal Admixplus</Link></li>
            <li><Link href="/multiguard">Multiguard</Link></li>
            <li><Link href="/clearseal">Clearseal</Link></li>
          </ul>
        )}

      </ul>
    </div>
  );
};

export default SideNav;
