"use client";
import { useState } from "react";

const tabs = ["Documents", "Articles", "Images", "Videos", "FAQ"];

export default function TabsHeader() {
  const [active, setActive] = useState("Articles");

  return (
    <div className="flex gap-6 border-b border-gray-300 px-4 py-2">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`text-sm font-semibold cursor-pointer pb-1 ${
            active === tab ? "border-b-2 border-red-600 text-black" : "text-gray-500"
          }`}
          onClick={() => setActive(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
}
