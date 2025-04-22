"use client";
import Logo from "@/app/public/logos/Logo";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up or at the top of the page
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else {
        // Hide navbar when scrolling down
        setIsVisible(false);
      }
      
      // Update last scroll position
      setLastScrollY(currentScrollY);
      
      // Update scrolled state for styling changes
      setIsScrolled(currentScrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 bg-[#000000] transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : 'translate-y-[-100%]'
    }`}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 w-[90%]">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-14 w-auto" />
              <span className="text-white text-3xl font-serif">VST Group</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white p-2 focus:outline-none"
            >
              <svg 
                className="h-6 w-6" 
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
          <div className="hidden lg:block">
            <div className="flex items-center space-x-6 lg:space-x-8">
            <Link
                href="/about-us"
                className="text-base font-medium text-white hover:text-gray-300 transition-colors"
              >
                About Us
              </Link>
              <div className="relative group">
                <button
                  className="text-base font-medium text-white hover:text-gray-300 transition-colors flex items-center gap-1"
                >
                  Our Businesses
                  <svg
                    className="w-3 h-3 text-white"
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
                <div className="absolute left-0 mt-2 w-42 bg-black rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link href="/automotive-franchises" className="block px-4 py-2 text-sm text-white hover:bg-gray-800 whitespace-nowrap">
                    Automotive Franchises
                  </Link>
                  <Link href="/education" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                    Education
                  </Link>
                  <Link href="/auto-parts" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                    Auto Parts
                  </Link>
                  <Link href="/manufacture" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                    Manufacture
                  </Link>
                  
                </div>
              </div>
              <Link href="/csr" className="block px-4 py-2 text-sm text-white">
                    CSR
                  </Link>
                  <Link href="/news-media" className="block px-4 py-2 text-sm text-white">
                    News and Media
                  </Link>
              <Link
                href="/career"
                className="text-base font-medium text-white hover:text-gray-300 transition-colors"
              >
                Careers
              </Link>
              <Link
                href="/contact-us"
                className="text-base font-medium text-white hover:text-gray-300 transition-colors"
              >
                Contact Us
              </Link>
              
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
          <Link
              href="/about-us"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-800 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            
            <div className="relative">
              <button
                className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:bg-gray-800 rounded-md"
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
                  href="/automotive-franchises"
                  className="block px-3 py-2 text-sm text-white hover:bg-gray-800 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Automotive Franchises
                </Link>
                <Link
                  href="/education"
                  className="block px-3 py-2 text-sm text-white hover:bg-gray-800 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Education
                </Link>
                <Link
                  href="/auto-parts"
                  className="block px-3 py-2 text-sm text-white hover:bg-gray-800 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                    Auto Parts
                </Link>
                <Link
                  href="/manufacture"
                  className="block px-3 py-2 text-sm text-white hover:bg-gray-800 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Manufacture
                </Link>
                
              </div>
            </div>
            <Link
                  href="/csr"
                  className="block px-3 py-2 text-sm text-white rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                  >
                  CSR
                </Link>
                <Link
                  href="/news-media"
                  className="block px-3 py-2 text-sm text-white rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  News and Media
                </Link>
            <Link
              href="/career"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-800 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              href="/contact-us"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-800 rounded-md"
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
