// "use client";
// import Image from "next/image";
// import Link from "next/link";

// const InnovationCards = () => {
//   return (
//     <section className="w-full bg-white py-12 px-4 md:px-8 lg:px-16">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
//         {/* Card 1 - Timeline */}
//         <div className="bg-[#ededed] overflow-hidden shadow-sm px-5 h-auto">
//           <div className="p-6 text-center">
//             <h2 className="text-2xl md:text-4xl font-semibold text-black leading-tight text-left poppins">
//               Pioneering Innovation in <br />
//               <span>Concrete Protection</span>
//             </h2>
//             <p className="mt-4 text-black text-sm md:text-base font-normal leading-relaxed max-w-xl mx-auto text-left open-sans ">
//               Supershield has a legacy of innovation, continuously advancing
//               self-healing technologies for durable, resilient, and sustainable
//               concrete infrastructure. Explore our journey of ground-breaking
//               inventions that redefine industry standards.
//             </p>

            // <Link
            //   href="#"
            //   className="text-left  mt-6 inline-block bg-[#B41424] text-base text-white  px-5 py-4 font-normal hover:border hover:border-[#B41424] hover:bg-white hover:text-[#B41424] transition open-sans"
            // >
            //   TIMELINE OF PRODUCT INNOVATIONS →
            // </Link>
//           </div>

//           <div className="relative w-full h-auto mt-6">
//             <Image
//               src="/road.png" // Replace with your timeline image path
//               alt="Timeline"
//               width={800}
//               height={400}
//               className="w-full object-contain"
//             />
//           </div>
//         </div>

//         {/* Card 2 - Resources Catalogue */}
//         <div className=" h-auto overflow-hidden shadow-sm text-white flex flex-col bg-[#ededed] items-center text-left p-6 pt-10 gap-2">
//           {/* Left Image */}

//           {/* Text + Button + Right Image */}
          // <dilv className="flex flex-col  items-start w-full px-5 text-left">
          // <h2 className="text-2xl md:text-4xl font-semibold text-black leading-tight text-left poppins">
          // RESOURCES
             
          //   </h2>
          //   <p className="text-black mb-6 mt-6 text-base  text-left open-sans font-normal">
          //     Access a comprehensive collection of technical documents,
          //     brochures, and guides to explore our advanced crystalline
          //     waterproofing solutions and technologies.
          //   </p>

          //   <Link
          //     href="#"
          //     className="bg-[#B41424] text-white px-6 py-4 text-base font-semibold hover:bg-white hover:text-[#B41424] hover:border hover:border-[#B41424] hover:opacity-90 transition open-sans"
          //   >
          //     VIEW RESOURCES →
          //   </Link>
          // </dilv>
//           <div className="w-full lg:w-2/2 flex justify-center ">
//             {/* <Image
//               src="/resours2.jpeg" // Replace with your left catalogue image
//               alt="Product Catalogue"
//               width={600}
//               height={600}
//               className="object-contain"
//             /> */}
//             <Image
//               src="/books.png" // Replace with your right catalogue spread
//               alt="Catalogue Spread"
//               width={500}
//               height={500}
//               className="object-contain"
//             />
//           </div>
//         </div> 
// {/*         <span>Concrete Protection</span> */}
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
    <section className="w-full bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Card 1 - Timeline */}
        <div className="bg-[#ededed] overflow-hidden shadow-sm px-5">
          <div className="p-6 text-left">
            <h2 className="text-2xl md:text-4xl font-semibold text-black leading-tight text-left poppins">
              Pioneering Innovation in <br />
              <span>Concrete Protection</span>
            </h2>
            <p className="mt-4 text-black text-sm md:text-base font-normal leading-relaxed max-w-xl mx-auto text-justify open-sans ">
              Supershield has a legacy of innovation, continuously advancing
              self-healing technologies for durable, resilient, and sustainable
              concrete infrastructure. Explore our journey of ground-breaking
              inventions that redefine industry standards.
            </p>

            <Link
              href="#"
              className="mt-6 inline-block text-center bg-[#B41424] text-white px-4 py-3 text-sm sm:text-base md:px-5 md:py-4 font-medium hover:border hover:border-[#B41424] hover:bg-white hover:text-[#B41424] transition-all duration-300 ease-in-out"
            >
              TIMELINE OF PRODUCT INNOVATIONS →
            </Link>
          </div>

          <div className="relative w-full h-auto mt-6">
            <Image
              src="/road.png" // Replace with your timeline image path
              alt="Timeline"
              width={800}
              height={400}
              className="w-full object-contain"
            />
          </div>
        </div>

        {/* Card 2 - Resources Catalogue */}
        <div className=" h-full overflow-hidden shadow-sm text-white flex flex-col bg-[#ededed] items-center text-left p-6 pt-10 gap-2">
          {/* Left Image */}

          {/* Text + Button + Right Image */}
          <div className="flex flex-col  items-start w-full px-5 text-left">
            <h2 className="text-2xl md:text-4xl font-semibold text-black leading-tight text-left poppins">
              RESOURCES
            </h2>
            <p className="text-black mb-6 mt-6 text-base  text-justify open-sans font-normal">
              Access a comprehensive collection of technical documents,
              brochures, and guides to explore our advanced crystalline
              waterproofing solutions and technologies.
            </p>

            <Link
              href="#"
              className="bg-[#B41424] text-white px-6 py-4 text-base font-semibold hover:bg-white hover:text-[#B41424] hover:border hover:border-[#B41424] hover:opacity-90 transition open-sans"
            >
              VIEW RESOURCES →
            </Link>
          </div>
          <div className="w-full  flex justify-center">
            <Image
              src="/books.png" // Replace with your right catalogue spread
              alt="Catalogue Spread"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationCards;
