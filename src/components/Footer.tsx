import React from "react";

import Link from "next/link";
import Logo from "@/app/public/logos/Logo";
import Facebook from "@/app/public/images/LifeAtVst/Footer/Facebook";
import Instagram from "@/app/public/images/LifeAtVst/Footer/Instagram";
import LinkedIn from "@/app/public/images/LifeAtVst/Footer/LinkedIn";

const Footer = () => {
  return (
    <footer className="bg-[#101010] text-white py-4 md:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-center md:items-start gap-8">
          {/* Logo Section */}
          <div className="w-full sm:w-3/4 md:w-1/4 flex flex-col sm:flex-row items-center justify-center md:justify-start mt-6 md:mt-12">
            <div className="h-16 md:h-20">
              <Logo />
            </div>
            <span className="text-white text-2xl sm:text-3xl md:text-4xl mt-3 sm:ml-3 sm:mt-0 md:mt-20 font-light tracking-wider text-center sm:text-left">
              VST Group
            </span>
          </div>

          {/* Map Section */}
          <div className="w-full sm:w-3/4 md:w-1/3 mt-4 md:mt-3 flex justify-center md:justify-start">
            <div className="rounded-lg overflow-hidden w-full">
              <iframe
                title="VST Group Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0167881117726!2d77.57254827475243!3d12.989645014917816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1651b4dd2399%3A0x9c4cbf3e1c014d1b!2s1%2C%20Palace%20Cross%20Rd%2C%20Bengaluru%2C%20Karnataka%20560020!5e0!3m2!1sen!2sin!4v1709534844025!5m2!1sen!2sin"
                width="85%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg mx-auto"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full sm:w-3/4 md:w-1/3 space-y-4 md:space-y-6 md:pl-0 lg:pl-12">
            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-medium text-white">Contact Us</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {/* Corporate Office */}
              <div className="text-center sm:text-left">
                <h4 className="text-[#C4A462] font-medium mb-2">
                  Corporate Office
                </h4>
                <p className="text-white text-sm md:text-base">1 Palace Cross Road,</p>
                <p className="text-white text-sm md:text-base">Bangalore - 560020</p>
                <p className="text-white text-sm md:text-base mt-6">+91 8023468548</p>
                <p className="text-white text-sm md:text-base mt-4">mdoffice@vstsons.in</p>
              </div>

              {/* Chennai Office */}
              <div className="text-center sm:text-left">
                <h4 className="text-[#C4A462] font-medium mb-2">
                  Chennai Office
                </h4>
                <p className="text-white text-sm md:text-base">199 Annasalai,</p>
                <p className="text-white text-sm md:text-base">Chennai 600002</p>
                <p className="text-white text-sm md:text-base mt-6">+91 4428602485/86/87</p>
                <p className="text-white text-sm md:text-base mt-4">mdoffice@vstgroup.co.in</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-8 justify-center md:justify-start mt-6">
              <Link href="#" className="text-white hover:text-[#C4A462]">
                <Facebook />
              </Link>
              <Link href="#" className="text-white hover:text-[#C4A462]">
                <Instagram />
              </Link>
              <Link href="#" className="text-white hover:text-[#C4A462]">
                <LinkedIn />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="text-center text-gray-500 text-sm md:text-base mt-8 pt-4 mx-[-1rem] sm:mx-[-2rem]"
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
