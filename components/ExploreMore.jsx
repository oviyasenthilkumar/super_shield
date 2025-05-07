"use client";
import clsx from "clsx";
import Image from "next/image";

const exploreItems = [
  {
    title: "PROJECT SERVICES",
    image: "/explore1.png", // replace with your correct path
  },
  {
    title: "CORE COMPETENCIES",
    image: "/explore2.png",
  },
  {
    title: "DISCOVER BUSINESS OPPORTUNITIES",
    image: "/explore3.png",
  },
];
export default function ExploreSection() {
  return (
    <div className="py-12 px-4 bg-white md:px-10 lg:px-20 ">
      <h2 className="ttext-4xl md:text-5xl text-black  font-bold text-center mb-10 poppins">
        Explore more
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-7xl mx-auto">
        {exploreItems.map((item, index) => (
          <div
            key={index}
            className="relative group w-full aspect-[4/3] overflow-hidden shadow-lg "
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            />

            {/* Bottom gradient overlay with text */}
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 via-black/60 to-transparent text-white text-center py-4 px-2">
              <span className="text-sm md:text-base font-semibold tracking-wide open-sans">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
         
    </div>
  );
}
