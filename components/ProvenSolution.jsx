// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="bg-white text-black">
//       {/* Hero Section */}
//       <section className="relative bg-cover bg-center bg-no-repeat px-4 md:px-8 py-12">
//         <div className="max-w-7xl mx-auto text-center md:text-left font-sans ">
//           <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 poppins">
//             Proven solutions for building and infrastructure protection
//           </h1>
//           <p className="text-base sm:text-lg text-gray-700 text-justify open-sans leading-7">
//             At Supershield, we specialize in delivering cutting-edge solutions
//             for the construction and infrastructure sectors. Our extensive
//             product range, backed by over 25 years of industry experience,
//             ensures you receive innovative, reliable, and high-quality solutions
//             tailored to meet diverse project needs. Discover how our advanced
//             technologies and comprehensive approach can enhance the durability,
//             performance, and sustainability of your building and infrastructure
//             projects.
//           </p>
//         </div>
//       </section>

//       {/* Two-Column Section */}
//       <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-start ">
//         {/* Image */}
//         <div className="w-[80%] h-[80%] mx-auto">
//           <img src="/proven.webp" alt="Engineering" className="w-full" />
//         </div>
//         {/* Text Content */}
//         <div className="p-8">
//           <h2 className="text-3xl font-semibold mb-6 poppins leading-10 ">
//             Maximize Your Project's Potential with Our Expert Support
//           </h2>
//           <p className="text-gray-700 text-sm md:text-base  leading-7 open-sans text-justify">
//             From planning to execution, we’re your strategic partner in
//             delivering exceptional outcomes. We collaborate with you to develop
//             personalized, cost-effective project solutions that go beyond just
//             supplying materials — we deliver real-world value.
//           </p>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className=" text-white py-16 px-6 md:px-16 text-center">
//         <div className="max-w-7xl mx-auto ">
//           <div className="bg-[#C50022] text-white p-6 py-10 px-10 ">
//             <h3 className="text-2xl font-semibold mb-4 poppins">
//               We go beyond just supplying products. We execute solutions.
//             </h3>
//             <p className="text-sm md:text-lg open-sans mx-auto leading-7">
//               Contact us now to learn more about our project services and
//               discuss your specific needs on your current projects.
//             </p>
//             <Link href="/contact">
//               <button className="border border-white py-2 px-4  hover:bg-white hover:text-red-700 transition open-sans mt-8">
//                 Contact us today
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
import Link from "next/link";

export default function ProvenSolution() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat px-4 md:px-8 py-12">
        <div className="max-w-7xl mx-auto text-center md:text-left font-sans ">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 poppins">
            Proven solutions for building and infrastructure protection
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-700 text-justify font-normal open-sans leading-7">
            At Supershield, we specialize in delivering cutting-edge solutions
            for the construction and infrastructure sectors. Our extensive
            product range, backed by over 25 years of industry experience,
            ensures you receive innovative, reliable, and high-quality solutions
            tailored to meet diverse project needs. Discover how our advanced
            technologies and comprehensive approach can enhance the durability,
            performance, and sustainability of your building and infrastructure
            projects.
          </p>
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-start py-4 px-4 md:px-8">
        {/* Left Side - Image with Overlay Text */}
        <div className="relative w-full h-full">
          <img
            src="/proven.webp"
            alt="Engineering"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Text and Red Box */}
        <div className="space-y-10">
          {/* Main Text Content */}
          <div>
            <h2 className="text-2xl md:text-3xl  font-semibold mb-6 poppins text-gray-900 poppins leading-7 lg:leading-10">
              Maximize Your Project's Potential with Our Expert Support
            </h2>
            <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-7 open-sans text-justify font-normal">
              From planning to execution, we’re your strategic partner in
              delivering exceptional outcomes. We collaborate with you to
              develop personalized, cost-effective project solutions that go
              beyond just supplying materials — we deliver real-world value.
            </p>
          </div>
          {/* Red Call-to-Action Box */}
          <div className="bg-[#C50022] text-white p-6 text-center">
            <h3 className="text-2xl font-semibold mb-4 poppins leading-7 lg:leading-8 text-left">
              We go beyond just supplying products. We execute solutions.
            </h3>
            <p className="text-sm md:text-base open-sans mx-auto leading-6 lg:leading-7 text-left">
              Contact us now to learn more about our project services and
              discuss your specific needs on your current projects.
            </p>
            <Link href="/contact">
              <button className="border border-white py-2 px-4 hover:bg-white hover:text-[#c50022] transition open-sans mt-8">
                Contact us today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
