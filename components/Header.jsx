"use client";
import { useState, useEffect } from "react";
import { ChevronDown, ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "Company", href: "/about" },
  {
    name: "Technology",
    dropdown: [
      { name: "Overview", href: "/technology/overview" },
      { name: "DPC Crystalline Technology", href: "/technology/dpc" },
      {
        name: "Dynamic Multifunctional Crystalline (DMC) Technology",
        href: "/technology/dmc",
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
      { name: "Overview", href: "/technology/overview" },
      { name: "Jointing Systems and Auxiliary", href: "/technology/dpc" },
      {
        name: "Polymer Modified Cementitious Waterproofing",
        href: "/technology/dmc",
      },
      {
        name: "Floor Systems",
        href: "/technology/multiseal",
      },
      {
        name: "Construction Additives and Modifiers",
        href: "/technology/multiseal",
      },
      {
        name: "PUD Waterproofing Coatings and Sealants",
        href: "/technology/multiseal",
      },
      {
        name: "Thermal Insulation and Waterproofing Coatings",
        href: "/technology/multiseal",
      },
      {
        name: "Anti-Slip Treatment for Floors",
        href: "/technology/multiseal",
      },
      {
        name: "Epoxy-Based Solutions",
        href: "/technology/multiseal",
      },
      {
        name: "Injection Resins and Auxillary",
        href: "/technology/multiseal",
      },
    ],
  },
  {
    name: "Solutions",
    href: "/solutions",
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

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="bg-[#C50022] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-7 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src={scrolled ? "/logo2.png" : "/main-logo.png"}
            alt="Super Shield"
            width={scrolled ? 100 : 320}
            height={scrolled ? 100 : 320}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 items-center">
          {navItems.map((item, idx) =>
            item.dropdown ? (
              <div key={idx} className="relative group">
                <button className="flex items-center gap-1 font-semibold group-hover:text-white poppins">
                  {item.name} <ChevronDown size={16} />
                </button>
                <div
                  className={`absolute top-full poppins left-0 mt-2 bg-white text-black shadow-lg z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 ${
                    item.dropdown.length > 10 ? "grid grid-cols-2 gap-2" : ""
                  }`}
                  style={{
                    width: item.dropdown.length > 10 ? "550%" : "16rem",
                  }} // Increase width if there are more than 10 items
                >
                  {item.dropdown.map((subItem, subIdx) => (
                    <Link
                      key={subIdx}
                      href={subItem.href}
                      className="block px-4 py-2 hover:bg-gray-100 text-sm poppins"
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
            )
          )}
        </nav>

        {/* Quote Button */}
        <Link
          href="/quote"
          className="hidden bg-[#B41424] lg:flex items-center border border-white px-4 py-2 text-sm font-semibold hover:bg-white hover:text-[#B41424] transition"
        >
          GET A QUOTE <ArrowUpRight size={14} className="ml-1" />
        </Link>

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

          {/* Quote Button in Mobile/Tablet */}
          <Link
            href="/quote"
            className="mt-4 block text-center border border-white px-4 py-2 rounded text-sm poppins font-semibold hover:bg-white hover:text-[#B3131B] transition"
          >
            GET A QUOTE
          </Link>
        </div>
      )}
    </header>
  );
}
