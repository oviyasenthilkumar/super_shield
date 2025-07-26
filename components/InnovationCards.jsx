// "use client";
// import Image from "next/image";
// import Link from "next/link";

// const InnovationCards = () => {
//   return (
//     <section className="w-full py-10 px-4 md:px-8 lg:px-0 bg-[linear-gradient(to_right,_#F4F4F4_50%,_#F7F7F7_50%)]">
//       <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl pt-5">
//         {/* Card 1 - Timeline */}
//         <div className=" overflow-hidden px-5 lg:px-0 ">
//           <div className="relative w-full h-auto mt-10 overflow-hidden group">
//             <Image
//               src="/road.png"
//               alt="Timeline"
//               width={400}
//               height={400}
//               className="w-full object-contain transform transition-transform duration-500 ease-in-out group-hover:scale-110"
//             />
//           </div>
//           <div className="p-6 lg:p-0 text-left max-w-3xl">
//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-10 tracking-wide text-left poppins">
//               Pioneering Innovation in <br />
//               <span>Concrete Protection</span>
//             </h2>
//             <p className="mt-4 text-black text-sm md:text-base font-normal leading-7 mx-auto text-justify open-sans">
//               Supershield has a legacy of innovation, continuously advancing
//               self-healing technologies for durable, resilient, and sustainable
//               concrete infrastructure. Explore our journey of ground-breaking
//               inventions that redefine industry standards.
//             </p>

//             <Link
//               href="#"
//               className="mt-6 inline-block font-semibold text-center border-[1px] border-white  bg-[#B41424] text-white px-4 py-3 text-sm md:text-base md:px-5 md:py-4 hover:border hover:border-[#B41424] hover:bg-white hover:text-[#B41424] transition-all duration-300 ease-in-out"
//             >
//               TIMELINE OF PRODUCT INNOVATIONS
//             </Link>
//           </div>

//           {/* <div className="relative w-full h-auto mt-10 ">
//             <Image
//               src="/road.png"
//               alt="Timeline"
//               width={800}
//               height={400}
//               className="w-full object-contain"
//             />
//           </div> */}
//         </div>

//         {/* Card 2 - Resources Catalogue */}
//         <div className=" h-full overflow-hidden max-w-3xl text-white flex flex-col  items-start text-left  gap-2 ">
//           {/* Left Image */}
//           <div className="w-full flex justify-center overflow-hidden group mt-6">
//             <Image
//               src="/books.png"
//               alt="Catalogue Spread"
//               width={400}
//               height={400}
//               className="object-contain transform transition-transform duration-500 ease-in-out group-hover:scale-110"
//             />
//           </div>
//           {/* Text + Button + Right Image */}
//           <div className="flex flex-col  items-start w-full px-5 text-left">
//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-10 tracking-wide text-left poppins">
//               Resources
//             </h2>
//             <p className="text-black mb-6 mt-6 text-sm md:text-base leading-7 text-left open-sans font-normal">
//               Access a comprehensive collection of technical documents,
//               brochures, and guides to explore our advanced crystalline
//               waterproofing solutions and technologies.
//             </p>

//             <Link
//               href="#"
//               className="bg-[#B41424] text-white px-6 py-4 text-sm md:text-base  border-[1px] border-white font-semibold hover:bg-white hover:text-[#B41424] hover:border hover:border-[#B41424] hover:opacity-90 transition open-sans"
//             >
//               VIEW RESOURCES
//             </Link>
//           </div>
//           {/* <div className="w-full flex justify-center">
//             <Image
//               src="/books.png"
//               alt="Catalogue Spread"
//               width={400}
//               height={400}
//               className="object-contain"
//             />
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InnovationCards;
"use client";
import Image from "next/image";
import Link from "next/link";

const InnovationCards = () => {
  return (
    <section className="w-full py-12 px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
          <div className="w-full flex justify-center mb-6 overflow-hidden group bg-gray-100 p-3">
            <Image
              src="/road.png"
              alt="Timeline"
              width={700}
              height={500}
              className="object-contain transform transition-transform duration-500 ease-in-out group-hover:scale-105 "
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-black leading-9 tracking-wide poppins mb-4">
            Pioneering Innovation in <br />
            <span>Concrete Protection</span>
          </h2>
          <p className="text-sm md:text-base text-black leading-7 open-sans text-justify mb-6">
            Supershield has a legacy of innovation, continuously advancing
            self-healing technologies for durable, resilient, and sustainable
            concrete infrastructure. Explore our journey of ground-breaking
            inventions that redefine industry standards.
          </p>
          <Link
            href="#"
            className="inline-block font-semibold border border-[#B41424] bg-[#B41424] text-white px-5 py-3 text-sm md:text-base hover:bg-white hover:text-[#B41424] transition-all duration-300 "
          >
            TIMELINE OF PRODUCT INNOVATIONS
          </Link>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
          <div className="w-full flex justify-center mb-6 overflow-hidden group bg-gray-100 p-3">
            <Image
              src="/books.png"
              alt="Catalogue"
              width={400}
              height={300}
              className="object-contain transform transition-transform duration-500 ease-in-out group-hover:scale-105 "
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-black leading-9 tracking-wide poppins mb-4">
            Resources
          </h2>
          <p className="text-sm md:text-base text-black leading-7 open-sans text-justify mb-6">
            Access a comprehensive collection of technical documents, brochures,
            and guides to explore our advanced crystalline waterproofing
            solutions and technologies.
          </p>
          <Link
            href="#"
            className="inline-block font-semibold border border-[#B41424] bg-[#B41424] text-white px-5 py-3 text-sm md:text-base hover:bg-white hover:text-[#B41424] transition-all duration-300"
          >
            VIEW RESOURCES
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InnovationCards;
