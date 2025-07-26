"use client";
import Image from "next/image";

const JointbeltExtBApplication = () => {
  return (
    <section className="px-3 sm:px-4 md:px-12 py-12 bg-white max-w-7xl mx-auto">
      {/* Applications */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 poppins mt-4 leading-8 lg:leading-10">
        Applications
      </h2>
      <p className="text-gray-700 mb-6 text-sm md:text-base font-normal leading-7 open-sans">
        Water tanks, Water treatment plants, Sewage treatment plants, Swimming
        pools, Dams and spillways, Reservoirs, Basements, Underground car parks,
        Tunnels, Retaining walls and Below ground slabs
      </p>

      {/* Advantages */}
      <div className="px-3 sm:px-4 md:px-12 py-12 bg-white max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 poppins">
          Advantages
        </h2>
        <ul className="list-disc pl-2 space-y-2 text-sm md:text-base leading-8 open-sans text-gray-800 ">
          <li className="flex items-start gap-2  ">
            <img
              src="/angle-right.png"
              alt="arrow"
              className="w-3 min-w-3 mt-2"
            />
            <div className="text-gray-700  text-sm md:text-base font-normal leading-7 open-sans max-w-lg">
              Our Jointbelt PVC Waterstops are made from premium compounded PVC,
              ensuring exceptional durability and long-lasting performance.
            </div>
          </li>
          <li className="flex items-start gap-2  ">
            <img
              src="/angle-right.png"
              alt="arrow"
              className="w-3 min-w-3 mt-2"
            />
            <div className="text-gray-700  text-sm md:text-base  font-normal leading-7 open-sans max-w-lg">
              Designed to be placed across and/or along the joint, they form a
              watertight diaphragm that effectively seals off any potential
              leaks
            </div>
          </li>
          <li className="flex items-start gap-2  ">
            <img
              src="/angle-right.png"
              alt="arrow"
              className="w-3 min-w-3 mt-2"
            />
            <div className="text-gray-700  text-sm md:text-base  font-normal leading-7 open-sans max-w-lg">
              Ability to withstand high hydrostatic head pressures
            </div>
          </li>
          <li className="flex items-start gap-2  ">
            <img
              src="/angle-right.png"
              alt="arrow"
              className="w-3 min-w-3 mt-2"
            />
            <div className="text-gray-700  text-sm md:text-base  font-normal leading-7 open-sans max-w-lg">
              Suitable for potable water contact
            </div>
          </li>
          <li className="flex items-start gap-2  ">
            <img
              src="/angle-right.png"
              alt="arrow"
              className="w-3 min-w-3 mt-2"
            />
            <div className="text-gray-700  text-sm md:text-base  font-normal leading-7 open-sans max-w-lg">
              Jointbelt PVC waterstops conform to and exceed all major
              international standards
            </div>
          </li>
          <li className="flex items-start gap-2  ">
            <img
              src="/angle-right.png"
              alt="arrow"
              className="w-3 min-w-3 mt-2"
            />
            <div className="text-gray-700  text-sm md:text-base  font-normal leading-7 open-sans max-w-lg">
              A full range of profiles and sizes to suit all types of
              construction requirements
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default JointbeltExtBApplication;
