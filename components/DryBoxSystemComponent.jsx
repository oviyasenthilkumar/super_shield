"use client";
import { useState, useEffect } from "react";
import FilterSidebar from "./FilterSideBar";
import ArticleGrid from "./ArticleGrid";
import TabsHeader from "./TabsHeader";

const mockArticles = [
  {
    id: 1,
    image: "/resources1.webp",
    title: "PROJECT PROFILE: DUPONT™ WEATHERIZATION SYSTEMS AND WILLOWICK PARK COMPLEX",
    subtitle: "DuPont™ Weatherization System products help simplify a complex construction project",
  },
  {
    id: 2,
    image: "/resources2.webp",
    title: "Tyvek® Warranty | DuPont™",
    subtitle: "Tyvek® Building Envelope Systems",
  },
  {
    id: 3,
    image: "/resources3.webp",
    title: "Tyvek® Specialist Network | Tyvek®",
    subtitle: "",
  },
];

export default function DryBoxSystemComponent() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(mockArticles); // Simulate API call
  }, []);

  return (
    <div className="max-w-7xl mx-auto w-full">
      <TabsHeader />
      <div className="flex flex-col md:flex-row p-4 gap-4 open-sans">
        <FilterSidebar />
        <ArticleGrid articles={articles} />
      </div>
    </div>
  );
}
