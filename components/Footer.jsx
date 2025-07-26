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
    <footer className="bg-[#b51724] text-white py-10 md:py-16 px-6 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10">
        {/* Logo and Tagline */}
        <div>
          <div className="flex items-center space-x-3 ">
            <img
              src="/footer-logo.png"
              alt="Logo"
              className="w-[80%] md:w-full"
            />
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="font-bold mb-3 poppins">COMPANY</h4>
          <ul className="space-y-2 text-sm">
            <li className="py-1">
              <Link href="/about" className="open-sans leading-5">
                About Us
              </Link>
            </li>
            <li className="py-1">
              <Link href="/corecompetencies" className="open-sans leading-5">
                Core Competencies
              </Link>
            </li>
            <li className="py-1">
              <Link href="/sustainability" className="open-sans leading-5">
                Sustainability
              </Link>
            </li>
            <li className="py-1">
              <Link href="/technology/overview" className="open-sans leading-5">
                Technology
              </Link>
            </li>
          </ul>
        </div>

        {/* SOLUTIONS */}
        <div>
          <h4 className="font-bold mb-3 poppins">SOLUTIONS</h4>
          <ul className="space-y-2 text-sm">
            <li className="py-1">
              <Link href="/products/overview" className="open-sans leading-5">
                Products
              </Link>
            </li>
            <li className="py-1">
              <Link href="/solutions/overview" className="open-sans leading-5">
                Systems
              </Link>
            </li>
            <li className="py-1">
              <Link href="/solutions/services" className="open-sans leading-5">
                Services
              </Link>
            </li>
            <li className="py-1">
              <Link href="/resources" className="open-sans leading-5">
                Resources
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="space-y-4">
          <h4 className="font-bold poppins uppercase py-1">Get in touch</h4>
          <Link
            href="/contact"
            className="inline-block bg-white text-black font-medium px-4 py-2 hover:bg-gray-200 hover:text-[#c50022]  transition open-sans"
          >
            Contact Us
          </Link>
          <div>
            <p className="font-semibold text-sm md:text-base  open-sans leading-7">
              Need Support?
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
