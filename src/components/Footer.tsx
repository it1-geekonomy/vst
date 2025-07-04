import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/app/public/logos/Logo";
import Instagram from "@/app/public/images/LifeAtVst/Footer/Instagram";
import LinkedIn from "@/app/public/images/LifeAtVst/Footer/LinkedIn";
import Footerlogo from "@/app/public/logos/Footerlogo";
import dynamic from 'next/dynamic';

// Dynamically import the map component with no SSR
const MapWithNoSSR = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[300px] bg-gray-100 rounded-lg flex items-center justify-center">
      <p className="text-gray-500">Loading map...</p>
    </div>
  ),
});

const Footer: React.FC<{ bgcolour: string }> = ({ bgcolour }) => {
  // Coordinates for both locations
  const bengaluruCoords = [12.989645, 77.572548];
  const chennaiCoords = [13.062646300000011, 80.12400241640626]
  
  // Center point between both locations
  const centerCoords = [
    (bengaluruCoords[0] + chennaiCoords[0]) / 2,
    (bengaluruCoords[1] + chennaiCoords[1]) / 2
  ];

  return (
    <footer className={`bg-[#101010] text-white py-10 mt-0 ${bgcolour}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-8 2xl:items-start">
          {/* Logo Section */}
          <div className="w-full sm:w-4/5 2xl:w-1/4 flex flex-col items-center 2xl:items-start">
            <div className="flex flex-col items-center 2xl:items-start">
              <div className="w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[250px] xl:max-w-[280px] 2xl:max-w-[480px] transition-all duration-300">
                <Footerlogo className="w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full sm:w-4/5 lg:w-8/9 2xl:w-1/3 flex justify-center 2xl:justify-start mt-4 2xl:mt-0 px-10 lg:px-6">
            <div className="rounded-lg overflow-hidden w-full max-w-md h-[240px] lg:h-[220px]">
              <MapWithNoSSR />
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full sm:w-4/5 2xl:w-1/3 2xl:pl-4 pt-5 2xl:pt-0 flex flex-col items-center 2xl:items-start">
            <div className="mb-6 w-full text-center 2xl:text-left">
              <h3 className="text-lg lg:text-xl font-roc text-white inline-block">Contact Us</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 w-full">
              {/* Corporate Office */}
              <div className="flex flex-col items-center 2xl:items-start mb-2 sm:mb-0">
                <h4 className="text-[#FEBF3D] text-clamp-18 font-roc mb-3 inline-block">
                  Corporate Office
                </h4>
                <div className="text-white text-clamp-18 font-roc text-center 2xl:text-left">
                  <p className="whitespace-nowrap">#1, Palace Cross Road,</p>
                  <p className="whitespace-nowrap">Bengaluru - 560 020.</p>
                </div>
              </div>

              {/* Chennai Office */}
              <div className="flex flex-col items-center 2xl:items-start">
                <h4 className="text-[#FEBF3D] text-clamp-18 font-roc mb-3 inline-block">
                  Chennai Office
                </h4>
                <div className="text-white text-clamp-18 font-roc text-center 2xl:text-left">
                  <p className="whitespace-nowrap">#199, Anna Salai,</p>
                  <p className="whitespace-nowrap">Chennai - 600 002.</p>
                </div>
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
