// pages/resources/index.js
"use client";
import { useState, useEffect } from "react";
import TopTabs from "../../../components/TopTabs";
import FilterSidebar from "../../../components/FilterSideBar";
import CardGrid from "../../../components/CardGrid";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ResourcesHero from "../../../components/ResourcesHero";
import Breadcrumbs from "../../../components/Breadcrumbs";

export default function Resources() {
  const [activeTab, setActiveTab] = useState("Documents");
  const [filters, setFilters] = useState({
    resourceType: [],
    productCategory: [],
    product: [],
  });

  return (
    <>
      <Header />
      <ResourcesHero />
      <Breadcrumbs />
      <div className="min-h-screen max-w-7xl  mx-auto w-full">
        <TopTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex flex-col lg:flex-row ">
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            className="w-full lg:w-2/4"
          />
          <main className="w-full lg:w-3/4 p-4">
            <CardGrid
              activeTab={activeTab}
              filters={filters}
              setFilters={setFilters}
            />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

