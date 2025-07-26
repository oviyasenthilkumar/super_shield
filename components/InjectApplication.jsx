"use client";
import Image from "next/image";

const InjectApplication = ({ details }) => {
  return (
    <section className="px-3 sm:px-4 md:px-0  bg-white max-w-7xl mx-auto">
      <div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 poppins text-gray-900">
          Applications
        </h2>

        <div className="text-gray-700 text-sm md:text-base  font-normal leading-7 open-sans mt-7">
          {details.Application}
        </div>
      </div>
    </section>
  );
};

export default InjectApplication;
