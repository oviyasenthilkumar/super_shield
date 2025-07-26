"use client";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_RESOURCES } from "../src/lib/queries";

export default function FilterSidebar({ filters, setFilters }) {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const { data, loading, error } = useQuery(GET_ALL_RESOURCES);

  const handleChange = (category, value) => {
    setFilters((prev) => ({ ...prev, [category]: value }));
  };

  const toggleCategory = (category) => {
    setExpandedCategory((prev) => (prev === category ? null : category));
  };

  if (loading) return <p className="p-4">Loading filters...</p>;
  if (error) return <p className="p-4">Error loading filters</p>;

  const filtersData = {
    "Resource Type": data?.allResourceTypes?.nodes.map((n) => n.name) || [],
    "Product Category":
      data?.allProductCategories?.nodes.map((n) => n.name) || [],
    "Product Filter": data?.allProducts?.nodes.map((n) => n.name) || [],
  };

  return (
    <aside className="w-full lg:w-1/4 p-4 bg-white border-r">
      {Object.entries(filtersData).map(([category, options]) => (
        <div key={category} className="mb-4">
          <h3
            className="font-semibold mb-2 cursor-pointer flex justify-between items-center poppins text-base md:text-lg leading-6 md:leading-8 text-gray-800"
            onClick={() => toggleCategory(category)}
          >
            {category}
            <span className="text-xl text-[#c50022]">
              {expandedCategory === category ? "−" : "+"}
            </span>
          </h3>

          {expandedCategory === category && (
            <div
              className={`pl-2 space-y-3 ${
                options.length > 30 ? "max-h-150 overflow-y-auto pr-2" : ""
              }`}
            >
              {options.map((option) => (
                <label
                  key={option}
                  className="flex items-center cursor-pointer open-sans text-sm md:text-base font-normal"
                >
                  <input
                    type="radio"
                    name={category}
                    value={option}
                    checked={filters[category] === option}
                    onChange={() => handleChange(category, option)}
                    className="mr-2 "
                  />
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}
