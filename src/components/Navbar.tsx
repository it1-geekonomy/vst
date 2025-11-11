"use client";
import Logo from "@/app/public/logos/Logo";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Footerlogo from "@/app/public/logos/Footerlogo";
import NavBarLogo from "@/app/public/logos/NavBarLogo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDesktopDropdownOpen(false);
  }, [pathname]);

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
    <nav
      className={`fixed w-full z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "translate-y-[-100%]"}`}
      style={{
        background: "linear-gradient(to right, #fff 0%, #000 50%)"
      }}
    >
     
        <div className="flex justify-between items-center h-20 md:h-20 px-4 sm:px-6 md:px-8 lg:px-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-1 md:gap-2 pl-2 md:pl-10">
              <NavBarLogo className="h-8 sm:h-10 md:h-18 w-auto" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2 focus:outline-none"
              aria-label="Toggle menu"
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
            <div className="flex justify-end items-center space-x-1 sm:space-x-0 lg:space-x-1 xl:space-x-5 ">
              <div className="relative group">
                <button 
                  className="text-sm lg:text-base font-medium text-white hover:text-gray-300 transition-colors flex items-center gap-1"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsDesktopDropdownOpen(!isDesktopDropdownOpen);
                  }}
                >
                   Businesses
                  <svg
                    className={`w-3 h-3 text-white transition-transform ${isDesktopDropdownOpen ? 'rotate-180' : ''}`}
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
                <div 
                  className={`absolute left-[-16px] mt-2 w-44 lg:w-52 bg-black rounded-md shadow-lg transition-all duration-300
                  ${isDesktopDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'}`}
                >
                  <div className="py-1">
                    <Link
                      href="/automotive-franchises"
                      className="block w-full px-4 py-2 font-roc text-sm lg:text-base font-medium text-white hover:bg-gray-800 whitespace-nowrap rounded-md "
                    >
                      Automotive Franchises
                    </Link>
                    <Link
                      href="/manufacture"
                      className="block w-full px-4 py-2 font-roc text-sm lg:text-base font-medium text-white hover:bg-gray-800 rounded-md "
                    >
                      Manufacturing
                    </Link>
                    <Link
                      href="/auto-parts"
                      className="block w-full px-4 py-2 font-roc text-sm lg:text-base font-medium text-white hover:bg-gray-800 rounded-md "
                    >
                      OE Parts Distribution
                    </Link>
                    <Link
                      href="/financial-services"
                      className="block w-full px-4 py-2 font-roc text-sm lg:text-base font-medium text-white hover:bg-gray-800 rounded-md "
                    >
                         Financial Services
                    </Link>
                    <Link
                      href="/education"
                      className="block w-full px-4 py-2 font-roc text-sm lg:text-base font-medium text-white hover:bg-gray-800 rounded-md "
                    >
                  Education
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href="/Corporate-philanthropy"
                className="block px-2 lg:px-4 py-2 font-roc text-sm lg:text-base font-medium hover:text-gray-300 transition-colors text-white"
              >
                Corporate Philanthropy
              </Link>
              <Link
                href="/news-media"
                className="block px-2 lg:px-4 py-2 font-roc text-sm lg:text-base font-medium hover:text-gray-300 transition-colors text-white"
              >
                News & Media
              </Link>
              <Link
                href="/career"
                className="block px-2 lg:px-4 py-2 font-roc text-sm lg:text-base font-medium hover:text-gray-300 transition-colors text-white"
              >
                Careers
              </Link>
              <Link
                href="/contact-us"
                className="block px-2 lg:px-4 py-2 font-roc text-sm lg:text-base font-medium hover:text-gray-300 transition-colors text-white"
              >
                Contact Us
              </Link>
              <Link
                href="/about-us"
                className="block px-2 lg:px-4 py-2 font-roc text-sm lg:text-base font-medium hover:text-gray-300 transition-colors text-white"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      

      {/* Mobile menu, show/hide based on menu state */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2  space-y-1 sm:px-3 bg-black">
            <div className="relative">
              <button
                className="block w-full text-left px-3 py-2.5 text-sm md:text-base font-medium text-white hover:bg-gray-800 rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  const submenu = e.currentTarget.nextElementSibling;
                  submenu?.classList.toggle("hidden");
                }}
              >
                 Businesses
              </button>
              <div className="pl-4 hidden">
                <Link
                  href="/automotive-franchises"
                  className="block py-2.5 text-sm md:text-base font-medium text-white hover:bg-gray-800 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Automotive Franchises
                </Link>
                <Link
                  href="/manufacture"
                  className="block py-2.5 text-sm md:text-base font-medium text-white hover:bg-gray-800 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Manufacturing
                </Link>
                <Link
                  href="/auto-parts"
                  className="block py-2.5 text-sm md:text-base font-medium text-white hover:bg-gray-800 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  OE Parts Distribution
                </Link>
                <Link
                  href="/financial-services"
                  className="block py-2.5 text-sm md:text-base font-medium text-white hover:bg-gray-800 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Finance
                </Link>
                <Link
                  href="/education"
                  className="block py-2.5 text-sm md:text-base font-medium text-white hover:bg-gray-800 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Education
                </Link>
              </div>
            </div>
            <Link
              href="/Corporate-philanthropy"
              className="block px-3 py-2.5 text-sm md:text-base font-medium text-white hover:bg-gray-800 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Corporate Philanthropy
            </Link>
            <Link
              href="/news-media"
              className="block px-3 py-2.5 text-sm md:text-base font-medium text-white hover:bg-gray-800 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              News & Media
            </Link>
            <Link
              href="/career"
              className="block px-3 py-2.5 text-sm md:text-base font-medium text-white hover:bg-gray-800 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              href="/contact-us"
              className="block px-3 py-2.5 text-sm md:text-base font-medium text-white hover:bg-gray-800 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>

            <Link
              href="/about-us"
              className="block px-3 py-2.5 text-sm md:text-base font-medium text-white hover:bg-gray-800 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
