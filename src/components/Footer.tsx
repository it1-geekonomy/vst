import React from "react";

import Link from "next/link";
import Logo from "@/app/public/logos/Logo";
import Facebook from "@/app/public/images/LifeAtVst/Footer/Facebook";
import Instagram from "@/app/public/images/LifeAtVst/Footer/Instagram";
import LinkedIn from "@/app/public/images/LifeAtVst/Footer/LinkedIn";

const Footer: React.FC<{ bgcolour: string }> = ({ bgcolour }) => {
  return (
    <footer className={`bg-[#101010] text-white py-4 sm:py-6 md:py-7 lg:py-8 ${bgcolour}`}>
      <div className="container mx-auto px-3 sm:px-4 md:px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row flex-wrap justify-between items-center lg:items-start gap-6 sm:gap-8 md:gap-6 lg:gap-6">
          {/* Logo Section - Horizontal alignment at all breakpoints */}
          <div className="w-full sm:w-3/4 lg:w-1/4 flex justify-center lg:justify-start mt-6 lg:mt-12">
            {/* Tablet and desktop view with horizontal layout */}
            <div className="hidden sm:flex sm:flex-row sm:items-center">
              <div className="flex items-center">
                {/* Logo size adjusted per breakpoint */}
                <Logo className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-26 lg:h-56" />
              </div>
              <div className="ml-3 lg:ml-4">
                <span className="text-white text-xl md:text-2xl lg:text-3xl font-light tracking-wider">
                  VST Group
                </span>
              </div>
            </div>
            
            {/* Mobile only text */}
            <span className="sm:hidden text-white text-2xl font-light tracking-wider text-center">
              VST Group
            </span>
          </div>

          {/* Map Section */}
          <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/3 mt-4 sm:mt-6 lg:mt-3 flex justify-center lg:justify-start">
            <div className="rounded-lg overflow-hidden w-full max-w-md mx-auto lg:mx-0">
              <iframe
                title="VST Group Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0167881117726!2d77.57254827475243!3d12.989645014917816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1651b4dd2399%3A0x9c4cbf3e1c014d1b!2s1%2C%20Palace%20Cross%20Rd%2C%20Bengaluru%2C%20Karnataka%20560020!5e0!3m2!1sen!2sin!4v1709534844025!5m2!1sen!2sin"
                width="85%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg mx-auto shadow-sm"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/3 space-y-4 lg:space-y-6 mt-6 lg:mt-0 lg:pl-0 xl:pl-8">
            <div className="text-center lg:text-left">
              <h3 className="text-lg lg:text-xl font-medium text-white">Contact Us</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {/* Corporate Office */}
              <div className="text-center sm:text-left">
                <h4 className="text-[#C4A462] font-medium mb-2">
                  Corporate Office
                </h4>
                <p className="text-white text-sm lg:text-base">1 Palace Cross Road,</p>
                <p className="text-white text-sm lg:text-base">Bangalore - 560020</p>
                <p className="text-white text-sm lg:text-base mt-6">+91 8023468548</p>
                <p className="text-white text-sm lg:text-base mt-4">mdoffice@vstsons.in</p>
              </div>

              {/* Chennai Office */}
              <div className="text-center sm:text-left">
                <h4 className="text-[#C4A462] font-medium mb-2">
                  Chennai Office
                </h4>
                <p className="text-white text-sm lg:text-base">199 Annasalai,</p>
                <p className="text-white text-sm lg:text-base">Chennai 600002</p>
                <p className="text-white text-sm lg:text-base mt-6">+91 4428602485/86/87</p>
                <p className="text-white text-sm lg:text-base mt-4">mdoffice@vstgroup.co.in</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-8 justify-center lg:justify-start mt-6">
              <Link href="#" className="text-white hover:text-[#C4A462] transition-colors duration-200">
                <Facebook />
              </Link>
              <Link href="#" className="text-white hover:text-[#C4A462] transition-colors duration-200">
                <Instagram />
              </Link>
              <Link href="#" className="text-white hover:text-[#C4A462] transition-colors duration-200">
                <LinkedIn />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="text-center text-gray-500 text-sm lg:text-base mt-8 pt-4 mx-[-1rem] sm:mx-[-1.5rem] md:mx-[-1.75rem] lg:mx-[-2rem]"
          style={{
            borderTop: "1px solid",
            borderImage:
              "linear-gradient(to right, #000000, #FFFFFF, #000000) 1",
          }}
        >
          © Copyright Reserved VST Group 2014-2025
        </div>
      </div>
    </footer>
  );
};

export default Footer;
