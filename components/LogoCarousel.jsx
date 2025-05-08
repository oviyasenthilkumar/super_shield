// "use client";
// import React from "react";
// import Image from "next/image";

// const logos = [
//   "/client1.png",
//   "/client2.png",
//   "/client3.png",
//   "/client4.png",
//   "/client5.png",
//   "/client6.png",
//   "/client7.png",
//   "/client8.png",
// ];

// const LogoCarousel = () => {
//   return (
//     <section className="bg-[#f7f7f7] py-12 overflow-hidden">
      // <div className="text-center mb-8">
      //   <h2 className="text-2xl md:text-5xl font-bold text-black">
      //     Collaborations and <br />
      //     <span className="text-[#B41424]">Certifications</span>
      //   </h2>
      // </div>

//       {/* Carousel Container */}
//       <div className="relative w-full">
//         <div className="flex space-x-12 animate-scroll px-4 py-7">
//           {logos.concat(logos).map((logo, index) => (
//             <div
//               key={index}
//               className="min-w-[120px] md:min-w-[180px] h-[80px] md:h-[90px] flex items-center justify-center bg-white rounded border border-[#DEE2E6]"
//             >
//               <Image
//                 src={logo}
//                 alt={`Logo ${index + 1}`}
//                 width={60}
//                 height={60}
//                 className="object-contain"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LogoCarousel;
// components/LogoGrid.js
export default function LogoGrid() {
  return (
    <div className="w-full py-10 md:py-14 bg-white max-w-7xl mx-auto">
      <div className=" mb-8">
        <h2 className="text-3xl md:text-4xl px-7 lg:px-0 font-semibold poppins leading-10 text-black text-left tracking-wide">
          Collaborations and Certifications
        </h2>
      </div>
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col md:flex-row justify-around items-center gap-5 md:gap-0 border-[1px] border-[#ececec]  p-4 leading-9">
          {/* Left side logos */}
          <div className="flex flex-wrap justify-between md:justify-around items-center gap-3 w-full md:w-1/2">
            <img
              src="/client1.png"
              alt="Politecnico di Torino"
              className="h-10 object-contain"
            />
            <img
              src="/client2.png"
              alt="Kingston University"
              className="h-10 object-contain"
            />
            <img src="/client3.png" alt="IIT" className="h-10 object-contain" />
            <img
              src="/client4.png"
              alt="ASTM"
              className="h-10 object-contain"
            />
          </div>

          {/* Vertical divider (hidden on mobile) */}
          <div className="hidden md:block w-px h-16 bg-[#ececec] mx-6 leading-9"></div>

          {/* Right side logos */}
          <div className="flex flex-wrap justify-between md:justify-around items-center gap-3 w-full md:w-1/2 leading-9">
            <img
              src="/client5.png"
              alt="Bureau Veritas"
              className="h-10 object-contain"
            />
            <img src="/client6.png" alt="CE" className="h-10 object-contain" />
            <img src="/client7.png" alt="ISO" className="h-10 object-contain" />
            <img
              src="/client8.png"
              alt="USGBC"
              className="h-10 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
