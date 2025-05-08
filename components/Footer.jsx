"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#b51724] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Tagline */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            {/* Replace with your logo */}
            <img src="/logo.png" alt="Logo" />
            {/* <span className="text-lg font-medium">
              Lease Life to <br /> Man-Made Structures
            </span> */}
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="font-bold mb-3 poppins">COMPANY</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="open-sans leading-5">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/core-competencies" className="open-sans leading-5">
                Core Competencies
              </Link>
            </li>
            <li>
              <Link href="/sustainability" className="open-sans leading-5">
                Sustainability
              </Link>
            </li>
            <li>
              <Link href="/technology" className="open-sans leading-5">
                Technology
              </Link>
            </li>
          </ul>
        </div>

        {/* SOLUTIONS */}
        <div>
          <h4 className="font-bold mb-3 poppins">SOLUTIONS</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/products" className="open-sans leading-5">
                Products
              </Link>
            </li>
            <li>
              <Link href="/systems" className="open-sans leading-5">
                Systems
              </Link>
            </li>
            <li>
              <Link href="/services" className="open-sans leading-5">
                Services
              </Link>
            </li>
            <li>
              <Link href="/resources" className="open-sans leading-5">
                Resources
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="space-y-4">
          <h4 className="font-bold poppins">Get in touch</h4>
          <Link
            href="/contact"
            className="inline-block bg-white text-black font-medium px-4 py-2 hover:bg-gray-100 hover:text-[#c50022] transition open-sans"
          >
            Contact us →
          </Link>
          <div>
            <p className="font-semibold text-base open-sans leading-7">
              Need support?
            </p>
            <p className="text-base open-sans leading-7">
              contact@supershieldglobal.com
            </p>
          </div>
          <div className="flex space-x-4 mt-2">
            <Link href="#">
              <FaFacebookF className="text-white hover:text-gray-200" />
            </Link>
            <Link href="#">
              <FaXTwitter className="text-white hover:text-gray-200" />
            </Link>
            <Link href="#">
              <FaInstagram className="text-white hover:text-gray-200" />
            </Link>
            <Link href="#">
              <FaLinkedinIn className="text-white hover:text-gray-200" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/30 open-sans mt-10 pt-6 text-sm flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto space-y-3 md:space-y-0">
        <span>Copyright ©2025 Supershield</span>
        <div className="flex space-x-6">
          <Link href="/privacy" className="open-sans">
            Privacy Statement
          </Link>
          <Link href="/terms" className="open-sans">
            Terms & Conditions
          </Link>
          <Link href="/sitemap" className="open-sans">
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
}
