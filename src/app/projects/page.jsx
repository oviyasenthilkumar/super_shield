// "use client";

// import { useQuery } from "@apollo/client";
// import { GET_PROJECTS } from "@/lib/queries";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import Header from "../../../components/Header";
// import Footer from "../../../components/Footer";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import Breadcrumbs from "../../../components/Breadcrumbs";
// import ProjectHero from "../../../components/ProjectsHero";

// export default function ProjectsPage() {
//   const PAGE_SIZE = 9;
//   const [currentPage, setCurrentPage] = useState(1);
//   const [cursorsByPage, setCursorsByPage] = useState({ 1: null });
//   const [allPagesData, setAllPagesData] = useState({ 1: [] });

//   const { data, loading, error, fetchMore } = useQuery(GET_PROJECTS, {
//     variables: {
//       size: PAGE_SIZE,
//       after: cursorsByPage[currentPage],
//     },
//     notifyOnNetworkStatusChange: true,
//   });

//   useEffect(() => {
//     if (data?.posts?.nodes?.length > 0) {
//       setAllPagesData((prev) => ({
//         ...prev,
//         [currentPage]: data.posts.nodes,
//       }));
//     }
//   }, [data, currentPage]);

//   const pageInfo = data?.posts?.pageInfo;

//   const handlePageChange = async (newPage) => {
//     if (newPage === currentPage || newPage < 1) return;

//     if (allPagesData[newPage]) {
//       setCurrentPage(newPage);
//       return;
//     }

//     const { data: newData } = await fetchMore({
//       variables: {
//         size: PAGE_SIZE,
//         after: cursorsByPage[currentPage],
//       },
//     });

//     const newNodes = newData.posts.nodes;
//     const endCursor = newData.posts.pageInfo.endCursor;

//     if (newNodes?.length > 0) {
//       setCursorsByPage((prev) => ({
//         ...prev,
//         [newPage]: endCursor,
//       }));
//       setAllPagesData((prev) => ({
//         ...prev,
//         [newPage]: newNodes,
//       }));
//       setCurrentPage(newPage);
//     }
//   };

//   const projects = allPagesData[currentPage] || [];
//   // const projects = [...(allPagesData[currentPage] || [])].reverse();


//   if (loading && !projects.length) {
//     return <div className="py-10 text-center">Loading...</div>;
//   }

//   if (error) {
//     return (
//       <div className="py-10 text-center text-[#c50022]">
//         Error loading projects
//       </div>
//     );
//   }

//   return (
//     <>
//       <Header />
//       <ProjectHero />
//       <Breadcrumbs />
//       <div className="max-w-7xl mx-auto px-4 py-10">
//         <h1 className="text-3xl font-bold mb-6">Our Projects</h1>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {projects.map((project) => {
//             const imageNode = project.projectFields?.projectImage?.node;
//             const title = project.projectFields?.projectTitle;
//             const location = project.projectFields?.projectLocation;

//             if (!imageNode?.sourceUrl || !title || !location) return null;

//             return (
//               <div key={project.id} className="shadow-sm overflow-hidden">
//                 <Image
//                   src={imageNode.sourceUrl}
//                   alt={imageNode.altText || "Project Image"}
//                   width={400}
//                   height={300}
//                   className="w-full h-64 object-cover"
//                 />
//                 <div className="p-4">
//                   <h2 className="text-xl font-semibold">{title}</h2>
//                   <p className="text-gray-600">{location}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Pagination Controls */}
//         <div className="mt-10 flex justify-center items-center gap-2 flex-wrap">
//           <button
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="p-2 rounded-full border text-[#c50022] disabled:opacity-50"
//           >
//             <ChevronLeft size={20} />
//           </button>

//           {Object.keys(allPagesData).map((page) => (
//             <button
//               key={page}
//               onClick={() => handlePageChange(Number(page))}
//               className={`px-4 py-2 border rounded ${
//                 Number(page) === currentPage
//                   ? "bg-[#c50022] text-white"
//                   : "bg-white text-[#c50022]"
//               }`}
//             >
//               {page}
//             </button>
//           ))}

//           {pageInfo?.hasNextPage && (
//             <button
//               onClick={() => handlePageChange(currentPage + 1)}
//               className="p-2 rounded-full border bg-white text-[#c50022] "
//             >
//               <ChevronRight size={20} />
//             </button>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }
"use client";
import { useQuery } from "@apollo/client";
import { GET_ALL_PROJECTS } from "@/lib/queries";
import Image from "next/image";
import { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import ProjectHero from "../../../components/ProjectsHero";

export default function ProjectsPage() {
  const PAGE_SIZE = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, error } = useQuery(GET_ALL_PROJECTS);

  const allProjects = data?.posts?.nodes || [];

  // Reverse the entire array once
  const reversedProjects = [...allProjects].reverse();

  // Paginate manually
  const totalPages = Math.ceil(reversedProjects.length / PAGE_SIZE);
  const paginatedProjects = reversedProjects.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  if (loading) {
    return <div className="py-10 text-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="py-10 text-center text-[#c50022]">
        Error loading projects
      </div>
    );
  }

  return (
    <>
      <Header />
      <ProjectHero />
      <Breadcrumbs />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl poppins leading-8 lg:leading-10 tracking-wide font-semibold mb-6">Our Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paginatedProjects.map((project) => {
            const imageNode = project.projectFields?.projectImage?.node;
            const title = project.projectFields?.projectTitle;
            const location = project.projectFields?.projectLocation;

            if (!imageNode?.sourceUrl || !title || !location) return null;

            return (
              <div key={project.id} className="shadow-sm overflow-hidden">
                <Image
                  src={imageNode.sourceUrl}
                  alt={imageNode.altText || "Project Image"}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="font-semibold text-lg text-black mb-1 poppins leading-8">
                    {title}
                  </h2>
                  <p className="text-sm md:text-base font-normal text-gray-700 leading-7 open-sans">
                    {location}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Controls */}
        <div className="mt-10 flex justify-center items-center gap-2 flex-wrap">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-full border text-[#c50022] disabled:opacity-50"
          >
            <ChevronLeft size={20} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 border rounded ${
                page === currentPage
                  ? "bg-[#c50022] text-white"
                  : "bg-white text-[#c50022]"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full border text-[#c50022] disabled:opacity-50"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
