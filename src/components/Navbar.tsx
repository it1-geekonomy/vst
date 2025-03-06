"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-[#000000]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/vst-logo-white.png" // White VST logo
                alt="VST Group Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              <Link
                href="/"
                className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
              >
                Home
              </Link>
              <div className="relative group">
                <Link
                  href="/our-businesses"
                  className="text-sm font-medium text-white hover:text-gray-300 transition-colors flex items-center gap-1"
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
                </Link>
              </div>
              <Link
                href="/careers"
                className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
