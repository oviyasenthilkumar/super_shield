import Image from "next/image";
const featureItems = [
  {
    icon: "/abt-icon1.webp",
    title: "Innovation at the Core",
    description:
      "Supershield is a global leader in self healing concrete, continuously pushing the boundaries of innovation and sustainability. Our advanced products, technologies, and application solutions set new standards for performance and longevity, ensuring that structures can withstand harsh environments and evolving industry demands.",
  },
  {
    icon: "/abt-icon2.webp",
    title: "Sustainability–Driven Solutions",
    description:
      "We believe in building a greener future by developing eco-friendly solutions that reduce carbon footprints without compromising performance. Our technology and products are designed to enhance energy efficiency, minimize environmental impact, and contribute to sustainable construction practices.",
  },
  {
    icon: "/abt-icon3.webp",
    title: "Advanced Technologies for the Futures",
    description:
      "With a strong focus on research and development, our team of experts and scientists is dedicated to creating next-generation self-healing technologies and high-performance protective systems. Supershield remains at the forefront of engineering sustainable, durable, and long-lasting infrastructure for the future.",
  },
  {
    icon: "/abt-icon4.webp",
    title: "Global Reach, Local Expertise",
    description:
      "With an expanding global footprint, Supershield combines international expertise with local market knowledge, ensuring our solutions meet regional regulations and project-specific requirements. Our tailored approach allows us to provide customized, high-performance solutions that empower industries worldwide.",
  },
];

// export default function InnovationSection() {
//   return (
//     <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center md:text-left md:flex md:items-start md:justify-between mb-12">
//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-0 max-w-xl leading-snug">
//             Pioneering Innovation for Long-Lasting, Sustainable Structures.
//           </h2>
//           <p className="text-gray-700 md:max-w-xl text-sm md:text-base ">
//             At Supershield, our mission is to extend the life and performance of
//             concrete infrastructures by developing advanced, sustainable, and
//             high-performance solutions for the construction industry. With a
//             global presence, we are committed to delivering cutting-edge
//             technologies that redefine durability, resilience, and
//             sustainability in modern infrastructure.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Innovation Card */}
//           <div className="bg-gray-100 p-6 rounded-md shadow-sm">
//             <div className="mb-4">
//               <img
//                 src="/abt-icon1.webp"
//                 alt="Innovation Icon"
//                 className="h-10 w-10"
//               />
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 Innovation at the Core
//               </h3>
//               <p className="text-gray-700 text-sm">
//                 Supershield is a global leader in self healing concrete,
//                 continuously pushing the boundaries of innovation and
//                 sustainability. Our advanced products, technologies, and
//                 application solutions set new standards for performance and
//                 longevity, ensuring that structures can withstand harsh
//                 environments and evolving industry demands.
//               </p>
//             </div>
//           </div>

//           {/* Sustainability Card */}
//           <div className="bg-gray-100 p-6 rounded-md shadow-sm">
//             <div className="mb-4">
//               <img
//                 src="/abt-icon2.webp"
//                 alt="Sustainability Icon"
//                 className="h-10 w-10"
//               />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">
//               Sustainability–Driven Solutions
//             </h3>
//             <p className="text-gray-700 text-sm">
//               We believe in building a greener future by developing eco-friendly
//               solutions that reduce carbon footprints without compromising
//               performance. Our technology and products are designed to enhance
//               energy efficiency, minimize environmental impact, and contribute
//               to sustainable construction practices.
//             </p>
//           </div>
//           <div className="bg-gray-100 p-6 rounded-md shadow-sm">
//             <div className="mb-4">
//               <img
//                 src="/abt-icon3.webp"
//                 alt="Sustainability Icon"
//                 className="h-10 w-10"
//               />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">
//               Advanced Technologies for the Futures
//             </h3>
//             <p className="text-gray-700 text-sm">
//               With a strong focus on research and development, our team of
//               experts and scientists is dedicated to creating next-generation
//               self-healing technologies and high-performance protective systems.
//               Supershield remains at the forefront of engineering sustainable,
//               durable, and long-lasting infrastructure for the future.
//             </p>
//           </div>
//           <div className="bg-gray-100 p-6 rounded-md shadow-sm">
//             <div className="mb-4">
//               <img
//                 src="/abt-icon4.webp"
//                 alt="Sustainability Icon"
//                 className="h-10 w-10"
//               />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">
//               Global Reach, Local Expertise
//             </h3>
//             <p className="text-gray-700 text-sm">
//               With an expanding global footprint, Supershield combines
//               international expertise with local market knowledge, ensuring our
//               solutions meet regional regulations and project-specific
//               requirements. Our tailored approach allows us to provide
//               customized, high-performance solutions that empower industries
//               worldwide.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function InnovationSection() {
  return (
    <section className="pb-12 pt-8 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-left lg:flex lg:justify-between lg:items-start mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold sm:leading-8 md:leading-9 lg:leading-10 text-left poppins tracking-wide">
            Pioneering Innovation for Long-Lasting, Sustainable Structures.
          </h2>
          <p className="mt-8 lg:mt-0 lg:max-w-xl text-sm md:text-base  leading-6 lg:leading-7 text-black font-normal text-left open-sans">
            At Supershield, our mission is to extend the life and performance of
            concrete infrastructures by developing advanced, sustainable, and
            high-performance solutions for the construction industry. With a
            global presence, we are committed to delivering cutting-edge
            technologies that redefine durability, resilience, and
            sustainability in modern infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featureItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col h-full items-start bg-[#f7f7f7] p-6 shadow-sm gap-5 hover:bg-[#ededed] transition-colors duration-300"
            >
              {/* Icon on the left */}
              <div className="flex-shrink-0">
                <Image
                  src={item.icon}
                  alt="icon"
                  width={55}
                  height={55}
                  className="object-contain w-16 h-16 transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-1">
                {item.title && (
                  <h3 className="text-black font-semibold leading-8 lg:leading-10 text-lg md:text-xl mb-2 poppins">
                    {item.title}
                  </h3>
                )}
                <p className="text-gray-700 text-sm md:text-base  leading-6 lg:leading-7 font-normal open-sans">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
