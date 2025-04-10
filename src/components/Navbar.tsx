"use client";
import Logo from "@/app/public/logos/Logo";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-[#000000]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-25">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <Logo className="h-18 w-auto" />
              <span className="text-white text-4xl font-serif">VST Group</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white p-2 focus:outline-none"
            >
              <svg 
                className="h-8 w-8" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8 lg:space-x-12">
              <Link
                href="/"
                className="text-lg font-medium text-white hover:text-gray-300 transition-colors"
              >
                Home
              </Link>
              <div className="relative group">
                <button
                  className="text-lg font-medium text-white hover:text-gray-300 transition-colors flex items-center gap-1"
                >
                  Our Businesses
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-black rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link href="/automotive-franchises" className="block px-4 py-2 text-lg text-white hover:bg-gray-800">
                    Automotive Franchises
                  </Link>
                  <Link href="/education" className="block px-4 py-2 text-lg text-white hover:bg-gray-800">
                    Education
                  </Link>
                  <Link href="/business-3" className="block px-4 py-2 text-lg text-white hover:bg-gray-800">
                    Business 3
                  </Link>
                  <Link href="/business-4" className="block px-4 py-2 text-lg text-white hover:bg-gray-800">
                    Business 4
                  </Link>
                </div>
              </div>
              <Link
                href="/careers"
                className="text-lg font-medium text-white hover:text-gray-300 transition-colors"
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium text-white hover:text-gray-300 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
            <Link
              href="/"
              className="block px-3 py-2 text-lg font-medium text-white hover:bg-gray-800 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            <div className="relative">
              <button
                className="block w-full text-left px-3 py-2 text-lg font-medium text-white hover:bg-gray-800 rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  const submenu = e.currentTarget.nextElementSibling;
                  submenu?.classList.toggle('hidden');
                }}
              >
                Our Businesses
              </button>
              <div className="pl-4 hidden">
                <Link
                  href="/business-1"
                  className="block px-3 py-2 text-base text-white hover:bg-gray-800 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Automotive Franchises
                </Link>
                <Link
                  href="/business-2"
                  className="block px-3 py-2 text-base text-white hover:bg-gray-800 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Business 2
                </Link>
                <Link
                  href="/business-3"
                  className="block px-3 py-2 text-base text-white hover:bg-gray-800 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Business 3
                </Link>
                <Link
                  href="/business-4"
                  className="block px-3 py-2 text-base text-white hover:bg-gray-800 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Business 4
                </Link>
              </div>
            </div>
            
            <Link
              href="/careers"
              className="block px-3 py-2 text-lg font-medium text-white hover:bg-gray-800 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-lg font-medium text-white hover:bg-gray-800 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
