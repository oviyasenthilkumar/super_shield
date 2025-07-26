"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const exploreItems = [
  {
    title: "PROJECT SERVICES",
    image: "/explore1.png",
    link: "/services",
  },
  {
    title: "CORE COMPETENCIES",
    image: "/explore2.png",
    link: "/corecompetencies",
  },
  {
    title: "DISCOVER BUSINESS OPPORTUNITIES",
    image: "/explore3.png",
    link: "/contact",
  },
];

export default function ExploreMore() {
  return (
    <div className="py-12 px-4 bg-[#f7f7f7] md:px-10 lg:px-20 md:py-16">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-black leading-10 font-semibold text-center mb-10 poppins">
        Explore More
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-7xl mx-auto">
        {exploreItems.map((item, index) => (
          <Link href={item.link} key={index} className="group relative w-full aspect-[4/3] overflow-hidden shadow-lg cursor-pointer block">
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
          </Link>
        ))}
      </div>
    </div>
  );
}
