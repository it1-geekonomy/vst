import React from "react";

import Link from "next/link";
import Logo from "@/app/public/logos/Logo";
import Instagram from "@/app/public/images/LifeAtVst/Footer/Instagram";
import LinkedIn from "@/app/public/images/LifeAtVst/Footer/LinkedIn";
import Footerlogo from "@/app/public/logos/Footerlogo";

const Footer: React.FC<{ bgcolour: string }> = ({ bgcolour }) => {
  return (
    <footer className={`bg-[#101010] text-white py-10 mt-10 lg:mt-0 ${bgcolour}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col 2xl:flex-row justify-between items-center gap-16 2xl:items-start">
          {/* Logo Section */}
          <div className="w-full sm:w-4/5 2xl:w-1/4 flex flex-col items-center 2xl:items-start">
            <div className="flex flex-col items-center 2xl:items-start">
              <div className="flex items-center justify-center">
                <Footerlogo />
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full sm:w-4/5 2xl:w-1/3 flex justify-center 2xl:justify-start mt-8 2xl:mt-0 px-10">
            <div className="rounded-lg overflow-hidden w-full max-w-md">
              <iframe
                title="VST Group Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0167881117726!2d77.57254827475243!3d12.989645014917816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1651b4dd2399%3A0x9c4cbf3e1c014d1b!2s1%2C%20Palace%20Cross%20Rd%2C%20Bengaluru%2C%20Karnataka%20560020!5e0!3m2!1sen!2sin!4v1709534844025!5m2!1sen!2sin"
                width="100%"
                height="230"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-sm"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full sm:w-4/5 2xl:w-1/3 2xl:pl-4 pt-10 2xl:pt-0 flex flex-col items-center 2xl:items-start">
            <div className="mb-6 w-full text-center 2xl:text-left">
              <h3 className="text-lg lg:text-xl font-roc text-white inline-block">Contact Us</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 w-full">
              {/* Corporate Office */}
              <div className="flex flex-col items-center 2xl:items-start mb-2 sm:mb-0">
                <h4 className="text-[#FEBF3D] text-clamp-18 font-roc mb-3 inline-block">
                  Corporate Office
                </h4>
                <p className="text-white text-clamp-18 font-roc text-center 2xl:text-left whitespace-normal">#1, Palace Cross Road,</p>
                <p className="text-white text-clamp-18 font-roc text-center 2xl:text-left">Bengalure - 560 020.</p>
              </div>

              {/* Chennai Office */}
              <div className="flex flex-col items-center 2xl:items-start">
                <h4 className="text-[#FEBF3D] text-clamp-18 font-roc mb-3 inline-block">
                  Chennai Office
                </h4>
                <p className="text-white text-clamp-18 font-roc text-center 2xl:text-left whitespace-normal">#199, Anna salai,</p>
                <p className="text-white text-clamp-18 font-roc text-center 2xl:text-left">Chennai - 600 002.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="text-center text-gray-500 text-sm lg:text-base mt-8 pt-6"
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
