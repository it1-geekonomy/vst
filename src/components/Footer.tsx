import React from "react";

import Link from "next/link";
import Logo from "@/app/public/logos/Logo";
import Instagram from "@/app/public/images/LifeAtVst/Footer/Instagram";
import LinkedIn from "@/app/public/images/LifeAtVst/Footer/LinkedIn";

const Footer: React.FC<{ bgcolour: string }> = ({ bgcolour }) => {
  return (
    <footer className={`bg-[#101010] text-white pt-10 pb-2 sm:py-6 md:py-6 lg:py-8 mt-10 sm:mt-30 lg:mt-0 ${bgcolour}`}>
      <div className="container mx-auto px-3 sm:px-4 md:px-5 lg:px-8 ">
        <div className="flex flex-col lg:flex-row flex-wrap justify-between items-center lg:items-center min-h-[400px] sm:min-h-[400px] lg:min-h-[300px] gap-8 sm:gap-10 md:gap-12 lg:gap-10 lg:pl-28">
          {/* Logo Section */}
          <div className="w-full sm:w-3/4 lg:w-1/4 flex flex-col sm:flex-row items-center justify-center lg:justify-start mt-20 sm:mt-20 lg:mt-0">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <div className="h-16 lg:h-20 flex items-center">
                <Logo  className="w-35 h-35 sm:w-40 sm:h-40 md:w-42 md:h-42 lg:w-26 lg:h-56"/>
              </div>
              <span className="text-white text-2xl sm:text-3xl lg:text-4xl font-light tracking-wider text-center sm:text-left translate-y-[30px]">
                VST Group
              </span>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full sm:w-3/4 lg:w-1/3 mt-8 sm:mt-10 lg:mt-0 flex justify-center lg:justify-start h-full">
            <div className="rounded-lg overflow-hidden w-full max-w-md mx-auto lg:mx-0">
              <iframe
                title="VST Group Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0167881117726!2d77.57254827475243!3d12.989645014917816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1651b4dd2399%3A0x9c4cbf3e1c014d1b!2s1%2C%20Palace%20Cross%20Rd%2C%20Bengaluru%2C%20Karnataka%20560020!5e0!3m2!1sen!2sin!4v1709534844025!5m2!1sen!2sin"
                width="85%"
                height="230"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg mx-auto shadow-sm"
              />
            </div>
          </div>

          {/* Contact Information */}

          <div className="w-full sm:w-3/4 lg:w-1/3 space-y-4 lg:space-y-6 mt-8 sm:mt-10 lg:mt-0 lg:pl-0 xl:pl-8">
            <div className="text-center lg:text-left">
              <h3 className="text-lg lg:text-xl font-roc text-white">Contact Us</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {/* Corporate Office */}
              <div className="text-center sm:text-left">
                <h4 className="text-[#FEBF3D] text-clamp-18 font-roc mb-6">
                  Corporate Office
                </h4>
                <p className="text-white text-clamp-18 font-roc whitespace-nowrap">#1, Palace Cross Road,</p>
                <p className="text-white text-clamp-18 font-roc">Bangalore - 560 020.</p>
                <p className="text-white text-clamp-18 font-roc ">+91 80 2346 8548</p>
                <p className="text-white text-clamp-18 font-roc ">mdoffice@vstsons.in</p>
              </div>

              {/* Chennai Office */}
              <div className="text-center sm:text-left">
                <h4 className="text-[#FEBF3D] text-clamp-18 font-roc mb-6">
                  Chennai Office
                </h4>
                <p className="text-white text-clamp-18 font-roc">#199, Annasalai,</p>
                <p className="text-white text-clamp-18 font-roc">Chennai-600 002,</p>
                <p className="text-white text-clamp-18 font-roc whitespace-nowrap">+91 44 2860 2485/86/87</p>
                <p className="text-white text-clamp-18 font-roc ">mdoffice@vstgroup.co.in</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-8 justify-center lg:justify-center mt-10 sm:mt-12 lg:mt-6 lg:pl-28 ">
              
              <Link href="#" className="text-white hover:text-[#C4A462] transition-colors duration-200">
                <Instagram />
              </Link>
              <Link href="https://www.linkedin.com/company/vst-motors-ltd/" className="text-white hover:text-[#C4A462] transition-colors duration-200">
                <LinkedIn />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="text-center text-gray-500 text-sm lg:text-base mt-10 sm:mt-12 lg:mt-8 pt-4 mx-[-2rem] sm:mx-[-3rem] md:mx-[-10rem] lg:mx-[-10rem]"
          style={{
            borderTop: "1px solid",
            borderImage:
              "linear-gradient(to right, #000000, #FFFFFF, #000000) 1",
          }}
        >
          © Copyright Reserved VST Group 2024-2025
        </div>
      </div>
    </footer>
  );
};

export default Footer;
