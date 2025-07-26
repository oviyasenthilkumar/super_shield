"use client";
import { useState, useEffect } from "react";
import { ChevronDown, ArrowUpRight, Menu, X, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

  const productImageMap = {
  "overview":'/headerp1.webp',
  "dpc-crystalline-waterproofing": "/header/products1.webp",
  "dmc-crystalline-waterproofing": "/header/products2.webp",
  "multiseal-crystalline-additives-and-topical-treatment": "/header/products3.webp",
  "jointing-systems-and-auxiliary": "/header/products5.webp",
  "polymer-modified-cementitious-waterproofing": "/header/products4.webp",
  "floor-systems":  "/header/products6.webp",
  "construction-additives-modifiers": "/header/products8.webp",
  "pud-waterproofing-coatings-and-sealants":  "/header/products7.webp",
  "thermal-insulation-and-waterproofing-coatings":  "/header/products9.webp",
  "anti-slip-treatment-for-floors":  "/header/products11.webp",
  "epoxy-based-solutions":  "/header/products12.webp",
  "injections-resin-and-auxillary": "/header/products10.webp",
};

const solutionImageMap = {
  "drybox": "/solutions/1.png",
  "dryfix": "/solutions/Dryfix.png",
  "dryroof": "/solutions/Dryroof.png",
  "dryline": "/solutions/Dryline.png",
  "drywall": "/solutions/Drywall.png",
  "archifloor": "/solutions/Archifloor.png",
  "archiwall": "/solutions/Archiwall.png",
  "dryjoint": "/solutions/Dryjoint.png",
  "services": "/solutions/Serviceoverviewcard.webp",
};
const solutionDescriptionMap = {
  drybox: {
    title: "Drybox System",
    description:
      "The Drybox System offers a complete waterproffing solution for Below- ground structures, providing a durable and highly engineered approach to waterproofing and joint sealing. This system combines essential teachnologies and compatible products to deliver effective performance even in the toughest environmental conditions. The DRYBOX system saves both time and money while ensuring compatability among all components, making it a dependable choice for Below- ground structures.",
  },
  dryfix: {
    title: "Dryfix System",
    description:
      "Complete waterproofing solution for below-ground structures. Durable, engineered joint sealing system.",
  },
  dryroof: {
    title: "Dryroof System",
    description:
      "The Dryroof system is an advanced solution tailored for effective roof waterproffing.Utilizing self-healing crystalline technology, flexible coating, and bonding aids, it creates a robust barrier that prevents water ingress while automatically sealing minor cracks to maintain log-term integrity.Designed to withstand harsh environmental conditions, the DRYROOF SYSTEM ensures durability and reduces maintanance needs, making it eco-friendly choice for both residential and commercial applications.",
  },
  dryline: {
    title: "Dryline System",
    description:
      "The Dryline system provides specialized, waterproofing for critical concrete infrastructure, including roads, flyovers, and metro/monorail structures. Powered by MULTISEAL Teachnology. it forms a durable hydrophobic barrier that prevents water ingress, chloride intrustion, and durability, reduces maintenance costs, and ensures long-term efficency, offering a sustainable solution for modern transportation networks",
  },
  drywall: {
    title: "Drywall System",
    description:
      "The Drywall System provides high-performance building facade solutions that enhance the aesthetic appeal of structures while offering robust laterl and vertical protection against temperature fluctuations, fire, and wind.",
  },
  archifloor: {
    title: "Archifloor System",
    description:
      "The Archifloor System offers hygienic decorative wall treatments that create a seamless, smooth floor without gaps or cracks, even at design transitions or color changes. with our wall coatings, you can unleash your creativity to design spaces that meet your requirements for low volatile organic compounds (VOCs), durability, and beauty.",
  },
  archiwall: {
    title: "Archiwall System",
    description:
      "The hygienic, low-VOC Supershield Archiwll System for decorative walls meets all relevent health and safety standards, ensuring that a building's interior maintains the highest levels of hygiene",
  },
  dryjoint: {
    title: "Drybox System",
    description:
      "The Dryjoint System for expansion joints is a highly engineered waterstop solution designed to address structurl movement challenges in below-ground structures.It effectively conceals issues caused by settlement,traffic loads, shrinkage, and other factors, ensuring robust protection and performance.",
  },
  services: {
    title: "services",
    description:
      "We are here to provide comprehensive assitance from the initial planning phaseto the complextion of your project.",
  },
  overview: {
    title: "overview",
    description:
      " Supershield delivers intelligent solutions with advanced technologies for protecting bulidings and infrastructure. Renowned for reliablity and high quality, our construction solutions have been successfully implemented in numerous projects wolrdwide, meeting the latest industry standards and regularations.",
  },
};

const productDescriptionMap = {
  "overview": {
    title: "Overview",
  
  },
  "dpc-crystalline-waterproofing": {
    title: "Self-Healing Crystalline waterproofing for concrete",
    description: "Self-Healing Crystalline waterproofing products for concrete protection.",
    
  },
  "dmc-crystalline-waterproofing": {
    title: "Dynamic Multifunctional Crystalline (DMC) Additives",
    description: "Self-Healing DMC (Dynamic Multifunctional Crystalline) Resilient Concrete Admixture",
   
  },
  "multiseal-crystalline-additives-and-topical-treatment": {
    title: "Multiseal Crystalline Topical Treatment and Additives",
    description: "Self-healing sustainable concrete protection for mass concrete structures",
   
  },
  "jointing-systems-and-auxiliary": {
    title: "Supershield Jointing Systems and Auxiliary",
    description: "Waterstops, sealants and accessories that provide reliable sealing of construction joints, expansion joints and control joints.",
    
  },
  "polymer-modified-cementitious-waterproofing": {
    title: "Polymer Modified Cementitious Waterproofing",
    description: "Polymer Modified cementitious waterproofing products for concrete and masonry substrates.",
    
  },
  "floor-systems": {
    title: "Supershield Floor System",
    description: "Flooring solutions for Industrial and Decorative floor systems.",
    
  },
  "construction-additives-modifiers": {
    title: "Supershield Construction Additives & Modifiers",
    description: "Multi-purpose modifiers and additives for optimising fresh and hardened concrete properties.",
    
  },
  "pud-waterproofing-coatings-and-sealants": {
    title: "Supershield Polyurethane Dispersion Waterproofing Coatings & Sealants",
    description: "Polyurethane Dispersion and Waterproofing coatings and solutions.",
   
  },
  "thermal-insulation-and-waterproofing-coatings": {
    title: "Thermal Insulation Coatings",
    description: "Protective coatings offering thermal resistance and waterproofing.",
    
  },
  "anti-slip-treatment-for-floors": {
    title: "Supershield Anti-Slip Treatment for Floors",
    description: "Anti-slip treatment for Natural and Artificial stones.",
   
  },
  "epoxy-based-solutions": {
    title: "Supershield Epoxy-based solutions",
    description: "Epoxy adhesives for Civil engineering purposes.",
  
  },
  "injections-resin-and-auxillary": {
    title: "Supershield Injection Resin and Accessories",
    description: "Resin Injection delivers an advanced repair solution expertly designed to address damage across a wide range of structural components.",
   
  }
};

const navItems = [
  {
    name: "Company",
    dropdown: [
      { name: "About", href: "/about" },
      { name: "Core Competencies", href: "/corecompetencies" },
      {
        name: "Innovations",
        href: "/innovation",
      },
      {
        name: "Sustainability",
        href: "/sustainability",
      },
      {
        name: "SHIELD Consortium",
        href: "/shieldconsortium",
      },
    ],
  },
  {
    name: "Technology",
    dropdown: [
      { name: "Overview", href: "/technology/overview" },
      { name: "DPC Crystalline Technology", href: "/technology/dpc" },
      {
        name: "Dynamic Multifunctional Crystalline (DMC) Technology",
        href: "/technology/dmc-technology",
      },
      {
        name: "Multiseal Crystalline Technology",
        href: "/technology/multiseal",
      },
    ],
  },
  {
    name: "Products",
    href: "/products",
    dropdown: [
      { name: "Overview", href: "/products/overview",  key:"overview" },
      {
        name: "DPC Crystalline Additives, Topical Treatment and Repair",
        href: "/products/dpc-crystalline-waterproofing",
        key:"dpc-crystalline-waterproofing"
      },
      {
        name: "Dynamic Multifunctional Crystalline (DMC) Additives",
        href: "/products/dmc-crystalline-waterproofing",
         key: "dmc-crystalline-waterproofing"
      },
      {
        name: "Multiseal Crystalline Additives and Topical Treatment",
        href: "/products/multiseal-crystalline-additives-and-topical-treatment",
         key:"multiseal-crystalline-additives-and-topical-treatment"
      },
      {
        name: "Jointing Systems and Auxiliary",
        href: "/products/jointing-systems-and-auxiliary",
        key:"jointing-systems-and-auxiliary"
      },
      {
        name: "Polymer Modified Cementitious Waterproofing",
        href: "/products/polymer-modified-cementitious-waterproofing",
        key:"polymer-modified-cementitious-waterproofing"
      },
      {
        name: "Floor Systems",
        href: "/products/floor-systems",
        key:"floor-systems"
      },
      {
        name: "Construction Additives and Modifiers",
        href: "/products/construction-additives-modifiers",
        key:"construction-additives-modifiers"
      },
      {
        name: "PUD Waterproofing Coatings and Sealants",
        href: "/products/pud-waterproofing-coatings-and-sealants",
         key: "pud-waterproofing-coatings-and-sealants"
      },
      {
        name: "Thermal Insulation and Waterproofing Coatings",
        href: "/products/thermal-insulation-and-waterproofing-coatings",
        key: "thermal-insulation-and-waterproofing-coatings"
      },
      {
        name: "Anti-Slip Treatment for Floors",
        href: "/products/anti-slip-treatment-for-floors",
         key:"anti-slip-treatment-for-floors"
      },
      {
        name: "Epoxy-Based Solutions",
        href: "/products/epoxy-based-solutions",
          key:"epoxy-based-solutions"
      },
      {
        name: "Injection Resins and Auxillary",
        href: "/products/injections-resin-and-auxillary",
         key:"injections-resin-and-auxillary"
      },
    ],
  },
  {
    name: "Solutions",
    href: "/solutions",
    dropdown: [
      { name: "Solutions Overview",
         href: "/solutions/overview" ,
         key:"overview"},
      {
        name: "Drybox System",
        href: "/solutions/drybox",
        key: "drybox" 
      },
      {
        name: "Dryfix System",
        href: "/ProductCatalogueModal",
        key: "dryfix"
      },
      {
        name: "Dryroof System",
        href: "/ProductCatalogueModal",
        key: "dryroof" 
      },
      {
        name: "Dryline System",
        href: "/ProductCatalogueModal",
        key: "dryline"
      },
      {
        name: "Drywall System",
        href: "/ProductCatalogueModal",
        key: "drywall"
      },
      {
        name: "Archifloor System",
        href: "/ProductCatalogueModal",
       key: "archifloor"
      },
      {
        name: "Archiwall System",
        href: "/ProductCatalogueModal",
        key: "archiwall"
        
      },
      {
        name: "Dryjoint System",
        href: "/ProductCatalogueModal",
        key: "dryjoint"
      },
      {
        name: "Services Overview",
        href: "/solutions/services",
        key: "services"
      },
    ],
  },
  {
    name: "Resources",
    href: "/resources",
  },
  {
    name: "Projects",
    href: "/projects",
  },
];

export default function Header() {
  // const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [hoveredSolution, setHoveredSolution] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

return (
  <>
    <div className="bg-[#B41424] text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex justify-end items-center space-x-6">
        <Link
          href="/login"
          className="flex items-center text-sm font-medium hover:opacity-80 transition-opacity poppins"
        >
          <User size={16} className="mr-1" />
          LOGIN
        </Link>
        <Link
          href="/contact"
          className="text-sm font-medium hover:opacity-80 transition-opacity poppins  "
        >
          CONTACT
        </Link>
        <Link
          href="/career"
          className="text-sm font-medium hover:opacity-80 transition-opacity poppins"
        >
          CAREER
        </Link>
      </div>
    </div>

    {/* Main Header */}
    <header className="bg-[#C50022] text-white sticky top-0 z-50 px-3 lg:px-0 w-[100%]">
      <div className="max-w-7xl mx-auto px-4 md:px-0 py-4 md:py-5 flex items-center justify-between">
        <Link href="/" className="relative w-[220px] md:w-[350px] h-[80px]">
          <Image
            src="/main-logo.png"
            alt="Main Logo"
            fill
            className={`transition-opacity duration-700 object-contain ${
              scrolled ? "opacity-0" : "opacity-100"
            }`}
            priority
          />

          <Image
            src="/logo-1h.png"
            alt="Scrolled Logo"
            fill
            className={`transition-opacity duration-700 object-contain absolute top-0 left-0 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
            priority
          />
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 items-center">
          {navItems.map((item, idx) => {
            if (item.name === "Products" || item.name === "Solutions") {
              const isProducts = item.name === "Products";
              const hoveredState = isProducts
                ? hoveredProduct
                : hoveredSolution;
              const setHoveredState = isProducts
                ? setHoveredProduct
                : setHoveredSolution;
              const imageMap = isProducts ? productImageMap : solutionImageMap;
              const descMap = isProducts
                ? productDescriptionMap
                : solutionDescriptionMap;

              return (
                <div key={idx} className="relative group rounded">
                  <div className="flex items-center gap-1 font-semibold poppins cursor-pointer poppins">
                    {item.name} <ChevronDown size={16} />
                  </div>
                  <div
                    className={`absolute top-full -left-[200%] transform -translate-x-1/2 mt-12 bg-[#EBECEC] text-black shadow-lg z-50 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-600 ${
                      item.name === "Solutions" ? "w-[750%]" : "w-[1100%]"
                    } flex px-6 py-6 rounded-md`}
                  >
                    {isProducts && (
                      <div className="w-full md:w-1/3 border-r border-gray-400 pr-6">
                        {isProducts && (
                          <Image
                            src="/ShieldName.jpg"
                            alt="Shield Logo"
                            width={250}
                            height={100}
                            className="mb-4"
                          />
                        )}

                        <h3 className="mt-4 mb-3 text-lg font-semibold uppercase tracking-wide">
                          {isProducts ? "Crystalline Products" : ""}
                        </h3>

                        <ul className="text-sm py-1">
                          {item.dropdown
                            .filter((i) =>
                              [
                                "dpc-crystalline-waterproofing",
                                "dmc-crystalline-waterproofing",
                                "multiseal-crystalline-additives-and-topical-treatment",
                              ].includes(i.href.split("/").pop())
                            )
                            .map((subItem, idx, arr) => (
                              <li
                                key={idx}
                                className={`py-2 ${
                                  idx !== arr.length - 1
                                    ? "border-b border-gray-400 pb-4 mb-4"
                                    : ""
                                }`}
                                onMouseEnter={() =>
                                  setHoveredState(subItem.key)
                                }
                                onMouseLeave={() => setHoveredState(null)}
                              >
                                <Link
                                  href={subItem.href}
                                  className="hover:text-[#C50022] poppins"
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}
                    {/* Middle Column */}
                    <div className="w-1/3 px-6">
                      <ul className="text-sm mb-4">
                        {item.dropdown
                          .filter((i) =>
                            isProducts
                              ? ![
                                  "dpc-crystalline",
                                  "dmc-crystalline",
                                  "multiseal-crystalline",
                                ].some((s) => i.href.includes(s))
                              : ![
                                  "dryfix",
                                  "dryroof",
                                  "dryline",
                                  "drywall",
                                  "archifloor",
                                  "archiwall",
                                  "dryjoint",
                                ].some((s) => i.href.includes(s))
                          )
                          .map((subItem, subIdx, arr) => (
                            <li
                              key={subIdx}
                              className={`py-2 ${
                                subIdx !== arr.length - 1
                                  ? "border-b border-gray-400 mb-4 pb-4"
                                  : ""
                              }`}
                            >
                              <Link
                                href={subItem.href}
                                className="hover:text-[#C50022] block poppins"
                                onMouseEnter={() =>
                                  setHoveredState(subItem.key)
                                }
                                onMouseLeave={() => setHoveredState(null)}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col items-center justify-start p-4 h-full w-[400px]">
                      <Image
                        src={
                          hoveredState
                            ? imageMap[hoveredState] ||
                              (item.name === "Products"
                                ? "/header/Overviewpro.webp"
                                : "/Serviceoverviewcard.webp")
                            : item.name === "Products"
                            ? "/header/Overviewpro.webp"
                            : "/Serviceoverviewcard.webp"
                        }
                        alt="Preview"
                        width={300}
                        height={300}
                        className="object-cover"
                      />

                      {hoveredState && (
                        <div className="mt-4 text-left">
                          <p className="text-[#C50022] font-semibold text-lg mb-2">
                            {descMap[hoveredState]?.title}
                          </p>
                          <p className="text-gray-700 leading-6 text-md">
                            {descMap[hoveredState]?.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            } else {
              return item.dropdown ? (
                <div key={idx} className="relative group">
                  <div className="flex items-center gap-1 font-semibold poppins cursor-pointer">
                    {item.name} <ChevronDown size={16} />
                  </div>
                  <div
                    className={`pl-2 py-2 rounded-sm absolute top-full left-0 mt-12 bg-[#EBECEC] text-black shadow-md z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-600 ${
                      item.dropdown.length > 8 ? "grid grid-cols-2 gap-2" : ""
                    }`}
                    style={{
                      width: item.dropdown.length > 8 ? "550%" : "14rem",
                    }}
                  >
                    {item.dropdown.map((subItem, subIdx) => (
                      <Link
                        key={subIdx}
                        href={subItem.href}
                        className="block px-4 py-4 rounded-sm hover:bg-[#edededcf]/90 text-sm poppins"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={idx}
                  href={item.href}
                  className="font-semibold hover:text-white poppins"
                >
                  {item.name}
                </Link>
              );
            }
          })}
        </nav>

        {/* Mobile/Tablet Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pb-4">
          {/* Top bar links for mobile */}
          <div className="border-b border-white pb-4 mb-4">
            <div className="flex justify-center space-x-6">
              <Link
                href="/login"
                className="flex items-center text-sm font-medium poppins"
              >
                <User size={16} className="mr-1" />
                LOGIN
              </Link>
              <Link href="/contact" className="text-sm font-medium poppins">
                CONTACT
              </Link>
              <Link href="/career" className="text-sm font-medium poppins">
                CAREER
              </Link>
            </div>
          </div>

          {navItems.map((item, idx) =>
            item.dropdown ? (
              <div key={idx} className="mb-2">
                <button
                  onClick={() =>
                    setMobileDropdownOpen(
                      mobileDropdownOpen === item.name ? null : item.name
                    )
                  }
                  className="w-full flex justify-between items-center font-semibold text-left py-2 poppins"
                >
                  {item.name}
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform ${
                      mobileDropdownOpen === item.name ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileDropdownOpen === item.name && (
                  <div className="ml-4 border-l border-white pl-4">
                    {item.dropdown.map((subItem, subIdx) => (
                      <Link
                        key={subIdx}
                        href={subItem.href}
                        className="block py-1 text-sm poppins"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={idx}
                href={item.href}
                className="block py-2 font-semibold poppins"
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  </>
);
}