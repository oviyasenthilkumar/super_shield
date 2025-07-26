"use client";
import Image from "next/image";

const PanelStopApplications = () => {
  return (
    <section className="px-3 sm:px-4 md:px-12  bg-white max-w-7xl mx-auto">
      {/* Applications */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 poppins px-3 md:px-0 mt-10 ">
        Applications
      </h2>
      <p className="text-sm px-3 md:px-0 md:text-base font-normal leading-7 text-gray-700 mb-6 open-sans ">
        Retaining walls, Foundations and slabs, Basements, Bunds and fuel
        spillage containment, Tunnels and subways.
      </p>

      {/* Advantages */}
      <div className="px-3 sm:px-4 md:px-0 bg-white max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-8 lg:leading-10 mt-10 mb-4 poppins">
          Advantages
        </h2>
        <ul className="list-disc pl-2 text-sm md:text-base  leading-8 open-sans">
          <li className="flex items-start gap-2  ">
            <img
              src="/angle-right.png"
              alt="arrow"
              className="w-3 min-w-3 mt-2"
            />
            <div className="text-gray-700 mb-6 text-sm md:text-base  font-normal leading-7 open-sans ">
              Fast installation and simple clip jointing arrangements eliminate
              the need for complicated and time-consuming processes.
            </div>
          </li>
          <li className="flex items-start gap-2  ">
            <img
              src="/angle-right.png"
              alt="arrow"
              className="w-3 min-w-3 mt-2"
            />
            <div className="text-gray-700 mb-6 text-sm md:text-base  font-normal leading-7  open-sans  ">
              It can be easily laid into fresh concrete, saving you valuable
              time and effort.
            </div>
          </li>
          <li className="flex items-start gap-2  ">
            <img
              src="/angle-right.png"
              alt="arrow"
              className="w-3 min-w-3 mt-2"
            />
            <div className="text-gray-700 mb-6 text-sm md:text-base  font-normal leading-7  open-sans  ">
              Designed to be flexible, it can be bent on site to suit your
              specific needs, eliminating the need for intersections.
            </div>
          </li>
          <li className="flex items-start gap-2  ">
            <img
              src="/angle-right.png"
              alt="arrow"
              className="w-3 min-w-3 mt-2"
            />
            <div className="text-gray-700 mb-6 text-sm md:text-base  font-normal leading-7 open-sans  ">
              Its stable crack-inducing elements actively stop the passage of
              water, providing you with unmatched waterproofing performance
            </div>
          </li>
          <li className="flex items-start gap-2  ">
            <img
              src="/angle-right.png"
              alt="arrow"
              className="w-3 min-w-3 mt-2"
            />
            <div className="text-gray-700 mb-6 text-sm md:text-base  font-normal leading-7 open-sans  ">
              Resistant to 5 bar water pressure, ensuring maximum protection
              agap-2inst leaks.
            </div>
          </li>
          <li className="flex items-start gap-2  ">
            <img
              src="/angle-right.png"
              alt="arrow"
              className="w-3 min-w-3 mt-2"
            />
            <div className="text-gray-700 mb-6 text-sm md:text-base  font-normal leading-7 open-sans  ">
              It is compatible with PVC waterstops for expansion joints, giving
              you a comprehensive solution for all your waterproofing
              requirements.
            </div>
          </li>
          <li className="flex items-start gap-2  ">
            <img
              src="/angle-right.png"
              alt="arrow"
              className="w-3 min-w-3 mt-2"
            />
            <div className="text-gray-700 mb-6 text-sm md:text-base  font-normal leading-7 open-sans  ">
              With fewer splices required, it offers enhanced safety and
              simplicity during installation.
            </div>
          </li>
          <li className="flex items-start gap-2  ">
            <img
              src="/angle-right.png"
              alt="arrow"
              className="w-3 min-w-3 mt-2"
            />
            <div className="text-gray-700 mb-6 text-sm md:text-base  font-normal leading-7 open-sans  ">
              It eliminates the need for welding at the joints.
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PanelStopApplications;
