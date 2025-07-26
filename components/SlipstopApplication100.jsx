"use client";
import Image from "next/image";

const SlipstopApplication100 = () => {
  return (
    <section className="px-3 sm:px-4 md:px-0 py-12 bg-white max-w-7xl mx-auto">
      {/* Applications */}
      <div>
        {/* Applications */}
        <h2 className="ttext-2xl md:text-3xl lg:text-4xl font-semibold mb-4 poppins">
          Applications
        </h2>
        {/* <ul className="space-y-2"> */}
          {/* <li className="flex items-center gap-2">
            <img
              src="/angle-right.png"
              alt="arrow"
              className="w-3 min-w-3 -mt-6"
            /> */}
            <div className="text-gray-700 text-sm md:text-base  font-normal leading-7 open-sans">
              Apartment Buildings, Commercial Buildings, Food Processing Plants,
              Department Stores, Factories, Hospitals, Hotels/Restaurants,
              Retail Premises/Staircases, Schools/Colleges Homes/ Bathroom,
              Floors/Bathtubs/Showers, Swimming Pools, Warehouses, Airport
              Terminals
            </div>
          {/* </li> */}
        {/* </ul> */}

        {/* Features and Benefits */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4 poppins text-gray-800">
          Features and Benefits
        </h2>
        <ul className="space-y-2">
          {[
            " Effective under wet and dry conditions",
            "Single application, last longer",
            "Does not alter the appearance of floors",
            "Tested and approved slip-resistant by independent laboratories",
            "Quick and easy to apply",
            "Requires no drying or curing time",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <img
                src="/angle-right.png"
                alt="arrow"
                className="w-3 min-w-3 mt-2"
              />
              <div className="text-gray-700 text-sm md:text-base  font-normal leading-7 open-sans">
                {item}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SlipstopApplication100;
