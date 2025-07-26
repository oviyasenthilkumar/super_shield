"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";


export default function Accordion({ title, content, imageSrc, readMoreLink }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-md bg-gray-100 mb-4">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center poppins text-base md:text-lg px-4 py-3 text-left font-medium text-gray-800 bg-gray-200"
      >
        {title}
        <ChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Content */}
      {isOpen && (
        <div className="bg-white p-4 flex flex-col md:flex-row gap-4 items-start">
          {/* Image */}
          {imageSrc && (
            <div className="w-[160px] md:w-[180px] flex-shrink-0">
              <Image
                src={imageSrc}
                alt={title}
                width={300}
                height={300}
                className="object-contain w-full h-auto"
              />
            </div>
          )}
          {/* Text and Link */}
          <div className="flex-1  ">
            <p className="mb-2 open-sans text-base md:text-lg leading-7 text-gray-700 font-normal">
              {content}
            </p>
            {readMoreLink && (
              <Link
                href={readMoreLink}
                className="text-[#C50022] text-base font-medium hover:underline inline-flex items-center"
              >
                More{" "}
                <span className="ml-1">
                  {" "}
                  <ArrowRightIcon className="h-5 w-5" />{" "}
                </span>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

