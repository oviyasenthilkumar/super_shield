// "use client";
// import Image from "next/image";
// import { FaMapMarkerAlt } from "react-icons/fa";

// const projects = [
//   {
//     title: "Project name",
//     location: "Location",
//     image: "/pro1.jpg",
//   },
//   {
//     title: "Project name",
//     location: "Location",
//     image: "/pro2.jpg",
//   },
//   {
//     title: "Project name",
//     location: "Location",
//     image: "/pro4.jpg",
//     tall: true,
//   },
//   {
//     title: "Prada Foundation",
//     location: "Milan, Italy",
//     image: "/pro5.jpg",
//     tall: true,
//   },
//   {
//     title: "Project name",
//     location: "Location",
//     image: "/pro3.jpg",
//     wide: true,
//   },
// ];

// const ProjectsSection = () => {
//   return (
//     <section className="w-full bg-[#f7f7f7] py-16 px-4 md:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Title */}
//         <h2 className="text-5xl md:text-6xl font-extrabold text-gray-300 text-center mb-12 tracking-tight">
//           PROJECTS
//         </h2>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-auto">
//           {projects.map((project, idx) => (
//             <div
//               key={idx}
//               className={`border rounded-md overflow-hidden shadow-sm bg-white transition hover:shadow-md flex flex-col
//   ${project.tall ? "lg:row-span-2 md:row-span-1" : ""}
//   ${project.wide ? "lg:col-span-2 md:col-span-1" : ""}
//   md:h-[420px]
// `}
//             >
//               {/* Image Wrapper */}
//               <div
//                 className={`relative w-full ${
//                   project.tall
//                     ? "aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/5]"
//                     : project.wide
//                     ? "aspect-[5/3] md:aspect-[4/3] lg:aspect-[16/6]"
//                     : "aspect-[4/5] md:aspect-[5/4] lg:aspect-[4/3]"
//                 }`}
//               >
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
//                 />
//               </div>

//               {/* Card Text */}
//               <div className="p-4">
//                 <h4 className="font-semibold text-md text-black mb-1">
//                   {project.title}
//                 </h4>
//                 <p className="flex items-center text-sm text-red-600">
//                   <FaMapMarkerAlt className="mr-1 text-[14px]" />
//                   {project.location}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Button */}
//         <div className="flex justify-center mt-12">
//           <button className="bg-[#b51724] text-white px-6 py-2 rounded-full hover:bg-red-700 transition text-sm font-medium inline-flex items-center gap-2">
//             VIEW ALL PROJECTS <span>↗</span>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;
"use client";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

const projects = [
  {
    title: "Project name",
    location: "Location",
    image: "/pro1.jpg",
  },
  {
    title: "Project name",
    location: "Location",
    image: "/pro2.jpg",
  },
  {
    title: "Project name",
    location: "Location",
    image: "/pro4.jpg",
    tall: true,
  },
  {
    title: "Prada Foundation",
    location: "Milan, Italy",
    image: "/pro5.jpg",
    tall: true,
  },
  {
    title: "Project name",
    location: "Location",
    image: "/pro3.jpg",
    wide: true,
  },
];

const ProjectsSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-5xl md:text-7xl font-extrabold text-gray-500 mb-12 tracking-wider text-center">
          PROJECTS
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-auto ">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={` overflow-hidden  bg-white transition border  flex flex-col
                ${project.tall ? "lg:row-span-2" : ""}
                ${project.wide ? "lg:col-span-2" : ""}
                md:h-auto
              `}
            >
              {/* Image Wrapper */}
              <div
                className={`relative w-full
                  aspect-[4/3]  // consistent aspect on all screens
                  lg:${
                    project.tall
                      ? "aspect-[3/5]"
                      : project.wide
                      ? "aspect-[16/6]"
                      : "aspect-[4/3]"
                  }
                `}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Card Text */}
              <div className="p-4">
                <h4 className="font-semibold text-md text-black mb-1 poppins">
                  {project.title}
                </h4>
                <p className="flex items-center text-sm text-gray-600 open-sans">
                  <FaMapMarkerAlt className="mr-1 text-[14px] text-[#c50022]" />
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-[#B41424] open-sans text-white px-6 py-4  hover:bg-white hover:text-[#B41424] hover:border hover:border-[#B41424] transition text-sm font-medium inline-flex items-center gap-2">
            VIEW ALL PROJECTS 
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
