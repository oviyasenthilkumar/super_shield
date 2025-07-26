// "use client";
// import Image from "next/image";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import Link from "next/link";

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
//     <section className="w-full bg-white py-16 px-4 md:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Title */}
//         <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-10 tracking-wide leading-10 text-center poppins">
//           PROJECTS
//         </h2>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-auto ">
//           {projects.map((project, idx) => (
//             <div
//               key={idx}
//               className={` overflow-hidden  bg-white transition shadow-md flex flex-col
               
//                 md:h-auto
//               `}
//             >
//               {/* Image Wrapper */}
//               <div
//                 className={`relative w-full aspect-[4/3] group overflow-hidden`}
//               >
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   fill
//                   className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
//                 />
//               </div>

//               {/* Card Text */}
//               <div className="p-4">
//                 <h4 className="font-semibold leading-6 text-lg text-black mb-1 poppins">
//                   {project.title}
//                 </h4>
//                 <p className="flex items-center text-sm text-gray-700 leading-5 open-sans">
//                   <FaMapMarkerAlt className="mr-1 text-[14px] text-[#c50022]" />
//                   {project.location}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Button */}
//         <div className="flex justify-center mt-12">
//           <Link href="/projects">
//             <button className="bg-[#B41424] open-sans text-white px-6 py-4 border-[1px] border-white hover:bg-white hover:text-[#B41424] hover:border hover:border-[#B41424] transition text-sm font-semibold uppercase open-sans inline-flex items-center gap-2">
//               VIEW ALL PROJECTS
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;
"use client";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { GET_ALL_PROJECTS } from "../src/lib/queries"; 

const ProjectsSection = () => {
  const { data, loading, error } = useQuery(GET_ALL_PROJECTS);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error)
    return <p className="text-center text-red-600">Error loading projects</p>;

  const projects = [...(data?.posts?.nodes || [])]
    .sort((a, b) => a.projectFields?.orderNum - b.projectFields?.orderNum)
    .slice(0, 8);


  return (
    <section className="w-full bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-10 tracking-wide leading-10 text-center poppins">
          PROJECTS
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-auto">
          {projects.map((project, idx) => {
            const { projectTitle, projectLocation, projectImage } =
              project.projectFields || {};
            return (
              <div
                key={project.id || idx}
                className="overflow-hidden bg-white transition shadow-md flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full aspect-[4/3] group overflow-hidden">
                  <Image
                    src={projectImage?.node?.sourceUrl || "/placeholder.jpg"}
                    alt={
                      projectImage?.node?.altText || projectTitle || "Project"
                    }
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Text */}
                <div className="p-4">
                  <h4 className="font-semibold text-lg text-black mb-1 poppins leading-8">
                    {projectTitle || "Untitled"}
                  </h4>
                  <p className="flex items-center text-sm md:text-base font-normal text-gray-700 leading-7 open-sans">
                    <FaMapMarkerAlt className="mr-1 text-[14px] text-[#c50022]" />
                    {projectLocation || "Unknown location"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <Link href="/projects">
            <button className="bg-[#B41424] open-sans text-white px-6 py-4 border-[1px] border-white hover:bg-white hover:text-[#B41424] hover:border hover:border-[#B41424] transition text-sm font-semibold uppercase open-sans inline-flex items-center gap-2">
              VIEW ALL PROJECTS
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
