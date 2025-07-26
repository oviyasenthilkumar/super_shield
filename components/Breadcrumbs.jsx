"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumbs() {
  const pathname = usePathname();

  const crumbs = pathname
    .split("/")
    .filter(Boolean)
    .map((crumb, index, arr) => {
      const href = "/" + arr.slice(0, index + 1).join("/");
      const label = crumb
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
      return { href, label };
    });

  return (
    <nav className="text-sm text-gray-200 space-x-1 space-y-2 px-5 lg:px-0 py-16 max-w-7xl mx-auto">
      <Link
        href="/"
        className="hover:underline text-black text-sm md:text-base "
      >
        Home
      </Link>
      {crumbs.map((crumb, i) => (
        <span key={i}>
          <span className=" text-black font-bold mx-3 text-sm md:text-base ">
            ›
          </span>
          <Link
            href={crumb.href}
            className="hover:underline  text-black text-sm md:text-base "
          >
            {crumb.label}
          </Link>
        </span>
      ))}
    </nav>
  );
}
