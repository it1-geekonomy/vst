"use client"
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import gif from "@/app/public/education/vst logo gif.gif"

import bg1 from "@/app/public/faranchies/bgpic/pexels-jack-redgate-333633-30140021 1 (1).png";
import bg2 from "@/app/public/faranchies/bgpic/pexels-jack-redgate-333633-30140021 1 (2).png";
import bg3 from "@/app/public/faranchies/bgpic/pexels-jack-redgate-333633-30140021 2 (1).png";
// import car2 from "@/app/public/faranchies/carpic/Benz Car 2 1.png";
// import car3 from "@/app/public/faranchies/carpic/land-rover car.png";
// import bg4 from "@/app/public/faranchies/bgpic/4carbg.png";
// import bg5 from "@/app/public/faranchies/bgpic/5carbg.png";
// import bg6 from "@/app/public/faranchies/bgpic/6carbg.png";
// import bg7 from "@/app/public/faranchies/bgpic/7carbg.png";
// import bg8 from "@/app/public/faranchies/bgpic/Honda-bg.png";
// import bg9 from "@/app/public/faranchies/bgpic/volkswagen-bg.png";
// import bg10 from "@/app/public/faranchies/bgpic/byd-bg.png";
// import car1 from "@/app/public/faranchies/bgpic/car1.png";
//  import ferrari from "@/app/public/faranchies/bgpic/ferrari.png";



import bikebg from "@/app/public/faranchies/bgpic/bikebg.png";


import porsche from "@/app/public/faranchies/newcarpics/porsche4.png";
import benzs from "@/app/public/faranchies/newcarpics/benz1.png";
import jaguar from "@/app/public/faranchies/newcarpics/ja-la.png";
import landrover from "@/app/public/faranchies/newcarpics/landrover3.png";
import maserati from "@/app/public/faranchies/newcarpics/maserati5.png";
import honda from "@/app/public/faranchies/newcarpics/honda12.png";
import tataupdate from "@/app/public/faranchies/newcarpics/image.png";
import kia from "@/app/public/faranchies/newcarpics/kia7.png";
import ducati from "@/app/public/faranchies/newcarpics/ducati6.png";
import mahindra from "@/app/public/faranchies/newcarpics/mahindra9.png";
import byd from "@/app/public/faranchies/newcarpics/byd11.png";
import wagen from "@/app/public/faranchies/newcarpics/wagen10.png";



import MercedesIcon from "@/app/public/faranchies/MercedesIcon";
import LandRoverIcon from "@/app/public/faranchies/LandRoverIcon";
import PorscheIcon from "@/app/public/faranchies/PorscheIcon";
import MaseratiIcon from "@/app/public/faranchies/MaseratiIcon";
import MahindraIcon from "@/app/public/faranchies/MahindraIcon";
import KiaIcon from "@/app/public/faranchies/KiaIcon";
import DucatiIcon from "@/app/public/faranchies/DucatiIcon";
import HondaLogo from "@/app/public/faranchies/HondaLogo";
import VolkswagenLogo from "@/app/public/faranchies/VolkswagenLogo";
import BydLogo from "@/app/public/faranchies/BydLogo";
import TataIcon from "@/app/public/faranchies/TataIcon";
import BusinessSectors from "./BusinessSectors";
import Logo from "@/app/public/logos/Logo";
import JaguarIcon from "@/app/public/faranchies/jaguarIcon";
import VSTLogoAnimation from "../VSTLogoAnimation";
import { SlideData, LocationKeys, slides } from '@/app/automotive-franchises/cars-data';




const FranchiseSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [screenWidth, setScreenWidth] = useState<number | null>(null);
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const currentSlideData = slides[currentSlide];
    if (currentSlideData?.locations) {
      const locationKeys = Object.keys(currentSlideData.locations);
      if (locationKeys.length > 0) {
        setActiveLocation(locationKeys[0]);
      }
    } else {
      setActiveLocation(null);
    }
  }, [currentSlide]);

  const goToSlide = (brand: SlideData["brand"]) => {
    const index = slides.findIndex((slide) => slide.brand === brand);
    if (index !== -1) {
      setCurrentSlide(index);
    }
  };

  const gradientColor = "rgba(223, 172, 79, 0.56)"

  // Total number of virtual slides for infinite scrolling
  const totalVirtualSlides = 10 * slides.length;

  // Move to previous slide with infinite loop
  const prevSlide = () => {
    // Only allow backward scrolling if we're not at the beginning
    if (scrollPosition > 0) {
      const newPosition = scrollPosition - 1;
      setScrollPosition(newPosition);
      setCurrentSlide(newPosition % slides.length);
    } else {
      // If at beginning, we don't scroll (as per user requirement)
      // But we still update the active slide display
      // setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  // Move to next slide with infinite loop
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setScrollPosition((prev) => prev + 1);
  };

  const currentLocations = slides[currentSlide].locations;

  return (
    <div className="relative w-full min-h-screen lg:mt-[-3rem] mt-[1rem]">
      {/* Fixed background gradient */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, #225a8c 20%, #4194D8 90%)"
        }}
      />

      {/* Content */}
      <motion.div
        className="relative w-full min-h-screen overflow-x-hidden z-10"
        initial={false}
        transition={{ duration: 0.01 }}
      >
        {/* Car section */}
        <div className="relative w-full h-auto sm:h-auto lg:h-screen flex flex-col lg:flex-row sm:mb-[1rem] lg:mb-[5rem] mb-[4rem]">
          {/* Left section with background and car */}
          <div className="relative w-full lg:w-[85%] h-[50vh] sm:h-[50vh] lg:h-full xl:h-[100vh]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`bg-${currentSlide}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute left-0 w-full lg:w-[92%] h-full sm:h-[80vh] lg:h-[95%] rounded-br-[60px] sm:rounded-br-[60px] lg:rounded-br-[120px] overflow-hidden"
              >
                <Image
                  src={slides[currentSlide].backgroundImage}
                  alt="Background"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 55vw"
                  style={{
                    objectPosition: 'center center'
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right section */}
          <div className="relative w-full lg:w-[45%] px-4 sm:px-6 lg:px-1 flex flex-col justify-start lg:justify-between py-4 lg:py-20 mt-4 lg:mt-0 gap-0 lg:gap-0">
            {/* Title */}
            <div className="flex-1 flex items-center justify-center sm:justify-center  sm:mb-[2rem] lg:mb-[4rem] mb-[2rem] w-full">
              <h2 className="text-white font-rocWide font-light text-4xl sm:text-[3.5rem] lg:text-[4.5rem] text-center lg:text-start w-full sm:w-[90%] lg:w-auto">
                <div className="flex flex-col items-center sm:items-center lg:items-start gap-2 sm:gap-4 lg:gap-6 w-full">
                  <div className="flex flex-row sm:flex-row lg:flex-col items-center sm:items-center lg:items-start gap-2 sm:gap-4 lg:gap-6 justify-center sm:justify-center lg:justify-start">
                  <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-roc drop-shadow-lg pointer-events-auto mt-7"> Automotive<br />Franchises</h1>
                  
                  </div>
                </div>
              </h2>
            </div>

            {/* Navigation and logos */}
            <div className="flex flex-col items-center lg:items-start justify-start gap-2 sm:gap-1 lg:gap-2 h-auto lg:h-[18rem] translate-y-[-10%] lg:translate-y-[-20%] w-full lg:mt-16">
              {/* Up arrow */}
              <button
                onClick={prevSlide}
                className="text-white hover:text-purple-400 transition-colors w-8 sm:w-10 lg:w-12 flex justify-center mx-auto lg:mx-0 lg:ml-[6rem] mb-2 sm:mb-4 lg:mb-0"
              >
                <svg
                  className="w-26 sm:w-12 lg:w-26 h-20 sm:h-12 lg:h-20"
                    fill="none"
                  stroke="currentColor"
                  viewBox="4 1 16 16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>

              {/* Brand logos - infinite loop implementation */}
              <div className="w-full flex justify-center lg:justify-start overflow-hidden py-2 sm:py-4 lg:py-[3rem] lg:pl-[4rem] relative">
                <motion.div
                  className="flex items-center gap-4 sm:gap-6 lg:gap-16"
                  animate={{
                    x: `-${scrollPosition * ((screenWidth ?? 1200) < 640 ? 215 : (screenWidth ?? 1200) < 1024 ? 223 : 264)}px`,
                    translateX: (screenWidth ?? 1200) < 640 ? "9.70%" : (screenWidth ?? 1200) < 1024 ? "9.55%" : "-0.1%",
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  {/* Create a large number of repeating logos for infinite scrolling */}
                  {Array(15).fill(null).map((_, outerIndex) =>
                    slides.map((slide, innerIndex) => {
                      const index = (outerIndex * slides.length) + innerIndex;
                      const realIndex = index % slides.length;
                      const isActive = realIndex === currentSlide;

                      return (
                        <motion.button
                          key={`slide-infinite-${index}`}
                          onClick={isActive ? undefined : () => { }}
                          className={`transition-opacity duration-300 flex-shrink-0 ${isActive ? "opacity-100" : "opacity-50 hover:opacity-75 pointer-events-none"
                            }`}
                          whileHover={isActive ? { scale: 1.05 } : undefined}
                          animate={{
                            scale: isActive ? 1.10 : 0.80
                          }}
                          transition={{
                            scale: { duration: 0.3 }
                          }}
                        >
                          <slide.LogoComponent />
                        </motion.button>
                      );
                    })
                  )}
                </motion.div>

                {/* 70% bottom border from right side */}
                <div className="absolute bottom-0 right-0 w-full lg:w-[70%] h-[1px] bg-white bg-opacity-50"></div>
              </div>

              {/* Down arrow */}
              <button
                onClick={nextSlide}
                className="text-white hover:text-purple-400 transition-colors w-8 sm:w-10 lg:w-12 flex justify-center mx-auto lg:mx-0 lg:ml-[6rem] mt-2 sm:mt-4 lg:mt-0"
              >
                <svg
                  className="w-26 sm:w-12 lg:w-26 h-20 sm:h-12 lg:h-20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="4 2 16 16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Description section */}
        <div className="w-full flex flex-col lg:flex-row py-2 sm:py-12 lg:py-4 px-4 sm:px-6 lg:px-24 items-start gap-6 sm:gap-8">
          {/* Left: Description */}
          <div className="w-full lg:w-3/5 flex flex-col items-center sm:items-center lg:items-start">
            <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 lg:mb-0 text-center sm:text-center lg:text-left w-full flex justify-center sm:justify-center lg:justify-start">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={`header-${currentSlide}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 lg:mb-8 text-center sm:text-center lg:text-left w-full flex justify-center sm:justify-center lg:justify-start xl:justify-start"
                >
                  {slides[currentSlide].header}
                </motion.h2>
              </AnimatePresence>
            </h2>
            <AnimatePresence mode="wait">
              <motion.p
                key={`description-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-white text-xs sm:text-sm lg:text-[20px] text-justify 
                font-normal leading-[150%] sm:leading-[160%] lg:leading-[177%] tracking-[0%] max-w-6xl"
              >
                {slides[currentSlide].description}
              </motion.p>
            </AnimatePresence>

            <a href={slides[currentSlide].learnMoreLink} className={`mt-4 sm:mt-6 lg:mt-10 ${slides[currentSlide].brand === "jlr" ? "hidden" : "inline-block w-full sm:w-auto flex justify-center sm:justify-center lg:justify-start"}`} target="_blank" rel="noopener noreferrer">
              <h3 className="bg-white rounded-lg px-6 sm:px-8 lg:px-40 py-2 sm:py-3 lg:py-5 text-[#0f0f0e] text-lg sm:text-xl lg:text-3xl font-light hover:bg-[#DFAC4F] hover:text-white transition-colors text-center">
                Explore More
              </h3>
            </a>
            {slides[currentSlide].brand === "jlr" && (
              <div className="mt-4 sm:mt-6 lg:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 w-full justify-center">
                <a href="https://retailers.jaguar.in/vst-grandeur-jaguar/" className="w-full sm:w-[45%] lg:w-[40%]" target="_blank" rel="noopener noreferrer">
                  <h3 className="bg-white rounded-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-5 text-[#0f0f0e] text-lg sm:text-xl lg:text-2xl font-light hover:bg-[#DFAC4F] hover:text-white transition-colors text-center">
                    Jaguar
                  </h3>
                </a>
                <a href="https://retailers.landrover.in/vst-grandeur-land-rover/" className="w-full sm:w-[45%] lg:w-[40%]" target="_blank" rel="noopener noreferrer">
                  <h3 className="bg-white rounded-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-5 text-[#0f0f0e] text-lg sm:text-xl lg:text-2xl font-light hover:bg-[#DFAC4F] hover:text-white transition-colors text-center">
                  Land Rover
                  </h3>
                </a>
              </div>
            )}
          </div>

          {/* Right: Switchable Location Tabs */}
          <div className="w-full lg:w-2/5 flex flex-col gap-2 mt-6 sm:mt-8 lg:mt-0">
            {slides[currentSlide]?.locations && (
              <>
                {/* Website Link */}
                {slides[currentSlide]?.learnMoreLink && (
                  <div className="w-full flex flex-col gap-2 mb-4">
                    {slides[currentSlide].brand === "jlr" ? (
                      <>
                        <div className="flex flex-col gap-2">
                          <span className="text-white text-sm sm:text-base lg:text-lg font-roc font-normal">Website:</span>
                          <div className="flex items-center gap-2 w-[400px]">
                            <span className="text-white text-sm sm:text-base lg:text-lg font-roc font-normal whitespace-nowrap">Jaguar:</span>
                            <h2 
                              onClick={() => window.open("https://retailers.jaguar.in/vst-grandeur-jaguar/", '_blank', 'noopener,noreferrer')}
                              title="https://retailers.jaguar.in/vst-grandeur-jaguar/"
                              className="text-white hover:text-[#DFAC4F] transition-colors text-sm sm:text-base lg:text-lg font-roc font-normal cursor-pointer truncate flex-1"
                            >
                              retailers.jaguar.in/vst-grandeur-jaguar
                            </h2>
                          </div>
                          <div className="flex items-center gap-2 w-[400px]">
                            <span className="text-white text-sm sm:text-base lg:text-lg font-roc font-normal whitespace-nowrap">Land Rover:</span>
                            <h2 
                              onClick={() => window.open("https://retailers.landrover.in/vst-grandeur-land-rover/", '_blank', 'noopener,noreferrer')}
                              title="https://retailers.landrover.in/vst-grandeur-land-rover/"
                              className="text-white hover:text-[#DFAC4F] transition-colors text-sm sm:text-base lg:text-lg font-roc font-normal cursor-pointer truncate flex-1"
                            >
                              retailers.landrover.in/vst-grandeur-land-rover
                            </h2>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="flex items-center gap-2 w-[400px]">
                        <span className="text-white text-sm sm:text-base lg:text-lg font-roc font-normal whitespace-nowrap">Website:</span>
                        <h2 
                          onClick={() => window.open(slides[currentSlide].learnMoreLink, '_blank', 'noopener,noreferrer')}
                          title={slides[currentSlide].learnMoreLink}
                          className="text-white hover:text-[#DFAC4F] transition-colors text-sm sm:text-base lg:text-lg font-roc font-normal cursor-pointer truncate flex-1"
                        >
                          {slides[currentSlide].learnMoreLink.replace(/^https?:\/\//, '')}
                        </h2>
                      </div>
                    )}
                  </div>
                )}
                {/* Only show tabs if there are multiple locations */}
                {Object.keys(slides[currentSlide].locations).length > 1 && (
                  <div className="flex gap-2 sm:gap-4 mb-2 w-full overflow-x-auto pb-2">
                    {Object.keys(slides[currentSlide].locations).map((loc) => (
                      <button
                        key={`${currentSlide}-${loc}`}
                        onClick={() => setActiveLocation(loc)}
                        className={`flex-1 min-w-[120px] px-3 sm:px-4 py-2 rounded-t-lg font-semibold text-base sm:text-lg border-b-2 transition-colors whitespace-nowrap
                          ${activeLocation === loc
                            ? 'border-b-4 border-[#DFAC4F] text-white'
                            : 'border-b-2 border-white/30 text-white'}
                        `}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                )}
                {/* Location Card */}
                <div
                  className="border-l border-r border-white p-4 sm:p-6 flex flex-col gap-0 min-w-0 max-h-[500px] sm:max-h-[600px] lg:max-h-[700px] overflow-y-auto"
                  style={{ background: "transparent", scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  <style>{`
                    .hide-scrollbar::-webkit-scrollbar { display: none; }
                  `}</style>
                  {/* If only one location, use that directly */}
                  {(() => {
                    const locationKey = Object.keys(slides[currentSlide].locations).length === 1
                      ? Object.keys(slides[currentSlide].locations)[0]
                      : activeLocation;

                    if (!locationKey || !slides[currentSlide].locations[locationKey]) return null;

                    const location = slides[currentSlide].locations[locationKey];

                    return (
                      <>
                        {/* For Tata slide, show "sales & service" first */}
                        {slides[currentSlide].brand === "tata" && location["sales & service"] && location["sales & service"].length > 0 && (
                          <div className="hide-scrollbar">
                            {location["sales & service"].map((salesService, idx) => (
                              <div key={`${currentSlide}-${locationKey}-salesservice-${idx}`} className="mb-6">
                                <div className="text-white font-bold text-xl ">
                                  Sales & Service :
                                </div>
                                <div className="text-white text-lg leading-tight mb-4 font-normal" style={{ whiteSpace: 'pre-line', lineHeight: '1.2' }}>
                                  {salesService.address}
                                </div>
                                <div className="text-white text-lg leading-relaxed mb-4 font-normal" style={{ whiteSpace: 'pre-line', lineHeight: '1.2' }}>
                                  {Array.isArray(salesService.phone) ? (
                                    salesService.phone.map((p, i) => (
                                      <div key={i} className="mt-1 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        {p}
                                      </div>
                                    ))
                                  ) : (
                                    <div className="mt-1 flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                      </svg>
                                      {salesService.phone}
                                    </div>
                                  )}
                                  {Array.isArray(salesService.email) ? (
                                    salesService.email.map((e, i) => (
                                      <div key={i} className="mt-1">✉️ {e}</div>
                                    ))
                                  ) : (
                                    <div className="mt-1">✉️ {salesService.email}</div>
                                  )}
                                </div>
                                <div className="rounded-lg overflow-hidden w-full">
                                  <iframe
                                    title={`Sales & Service Location Map ${idx + 1}`}
                                    src={salesService.map}
                                    width="100%"
                                    height="280"
                                    className="rounded-lg w-full"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        {/* Sales */}
                        {location.sales && location.sales.length > 0 && (
                          <div className="hide-scrollbar">
                            {location.sales.map((sale, idx) => (
                              <div key={`${currentSlide}-${locationKey}-sales-${idx}`} className="mb-6">
                                <div className="text-white font-bold text-xl ">
                                  Sales :
                                </div>
                                <div className="text-white text-lg leading-tight mb-4 font-normal" style={{ whiteSpace: 'pre-line', lineHeight: '1.2' }}>
                                  {sale.address}
                                </div>
                                <div className="text-white text-lg leading-relaxed mb-4 font-normal" style={{ whiteSpace: 'pre-line', lineHeight: '1.2' }}>
                                  {Array.isArray(sale.phone) ? (
                                    sale.phone.map((p, i) => (
                                      <div key={i} className="mt-1 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        {p}
                                      </div>
                                    ))
                                  ) : (
                                    <div className="mt-1 flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                      </svg>
                                      {sale.phone}
                                    </div>
                                  )}
                                  {Array.isArray(sale.email) ? (
                                    sale.email.map((e, i) => (
                                      <div key={i} className="mt-1">✉️ {e}</div>
                                    ))
                                  ) : (
                                    <div className="mt-1">✉️ {sale.email}</div>
                                  )}
                                </div>
                                <div className="rounded-lg overflow-hidden w-full">
                                  <iframe
                                    title={`Sales Location Map ${idx + 1}`}
                                    src={sale.map}
                                    width="100%"
                                    height="280"
                                    className="rounded-lg w-full"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        {/* Service */}
                        {location.service && location.service.length > 0 && (
                          <div className="hide-scrollbar">
                            {location.service.map((service, idx) => (
                              <div key={`${currentSlide}-${locationKey}-service-${idx}`} className="mb-6">
                                <div className="text-white font-bold text-xl ">
                                  Service :
                                </div>
                                <div className="text-white text-lg leading-tight mb-4 font-normal" style={{ whiteSpace: 'pre-line', lineHeight: '1.2' }}>
                                  {service.address}
                                </div>
                                <div className="text-white text-lg leading-relaxed mb-4 font-normal" style={{ whiteSpace: 'pre-line', lineHeight: '1.2' }}>
                                  {Array.isArray(service.phone) ? (
                                    service.phone.map((p, i) => (
                                      <div key={i} className="mt-1 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        {p}
                                      </div>
                                    ))
                                  ) : (
                                    <div className="mt-1 flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                      </svg>
                                      {service.phone}
                                    </div>
                                  )}
                                  {Array.isArray(service.email) ? (
                                    service.email.map((e, i) => (
                                      <div key={i} className="mt-1">✉️ {e}</div>
                                    ))
                                  ) : (
                                    <div className="mt-1">✉️ {service.email}</div>
                                  )}
                                </div>
                                <div className="rounded-lg overflow-hidden w-full">
                                  <iframe
                                    title={`Service Location Map ${idx + 1}`}
                                    src={service.map}
                                    width="100%"
                                    height="280"
                                    className="rounded-lg w-full"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        {/* Sales and Service - Only show for non-Tata slides or after the first Tata section */}
                        {slides[currentSlide].brand !== "tata" && location["sales & service"] && location["sales & service"].length > 0 && (
                          <div className="hide-scrollbar">
                            {location["sales & service"].map((salesService, idx) => (
                              <div key={`${currentSlide}-${locationKey}-salesservice-${idx}`} className="mb-6">
                                <div className="text-white font-bold text-xl ">
                                  Sales & Service :
                                </div>
                                <div className="text-white text-lg leading-tight mb-4 font-normal" style={{ whiteSpace: 'pre-line', lineHeight: '1.2' }}>
                                  {salesService.address}
                                </div>
                                <div className="text-white text-lg leading-relaxed mb-4 font-normal" style={{ whiteSpace: 'pre-line', lineHeight: '1.2' }}>
                                  {Array.isArray(salesService.phone) ? (
                                    salesService.phone.map((p, i) => (
                                      <div key={i} className="mt-1 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        {p}
                                      </div>
                                    ))
                                  ) : (
                                    <div className="mt-1 flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                      </svg>
                                      {salesService.phone}
                                    </div>
                                  )}
                                  {Array.isArray(salesService.email) ? (
                                    salesService.email.map((e, i) => (
                                      <div key={i} className="mt-1">✉️ {e}</div>
                                    ))
                                  ) : (
                                    <div className="mt-1">✉️ {salesService.email}</div>
                                  )}
                                </div>
                                <div className="rounded-lg overflow-hidden w-full">
                                  <iframe
                                    title={`Sales & Service Location Map ${idx + 1}`}
                                    src={salesService.map}
                                    width="100%"
                                    height="280"
                                    className="rounded-lg w-full"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        {/* Sales, Service & Parts distribution */}
                        {location["Sales, Service & Parts distribution"] && location["Sales, Service & Parts distribution"].length > 0 && (
                          <div className="hide-scrollbar">
                            {location["Sales, Service & Parts distribution"].map((salesDist, idx) => (
                              <div key={`${currentSlide}-${locationKey}-salesdist-${idx}`} className="mb-6">
                                <div className="text-white font-bold text-xl ">
                                  Sales, Service & Parts Distribution :
                                </div>
                                <div className="text-white text-lg leading-tight mb-4 font-normal" style={{ whiteSpace: 'pre-line', lineHeight: '1.2' }}>
                                  {salesDist.address}
                                </div>
                                <div className="text-white text-lg leading-relaxed mb-4 font-normal" style={{ whiteSpace: 'pre-line', lineHeight: '1.2' }}>
                                  {Array.isArray(salesDist.phone) ? (
                                    salesDist.phone.map((p, i) => (
                                      <div key={i} className="mt-1 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        {p}
                                      </div>
                                    ))
                                  ) : (
                                    <div className="mt-1 flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                      </svg>
                                      {salesDist.phone}
                                    </div>
                                  )}
                                  {Array.isArray(salesDist.email) ? (
                                    salesDist.email.map((e, i) => (
                                      <div key={i} className="mt-1">✉️ {e}</div>
                                    ))
                                  ) : (
                                    <div className="mt-1">✉️ {salesDist.email}</div>
                                  )}
                                </div>
                                <div className="rounded-lg overflow-hidden w-full">
                                  <iframe
                                    title={`Sales & Distribution Location Map ${idx + 1}`}
                                    src={salesDist.map}
                                    width="100%"
                                    height="280"
                                    className="rounded-lg w-full"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        {/* Pre-Owned Cars */}
                        {location["Pre-Owned Cars"] && location["Pre-Owned Cars"].length > 0 && (
                          <div className="hide-scrollbar">
                            {location["Pre-Owned Cars"].map((preOwned, idx) => (
                              <div key={`${currentSlide}-${locationKey}-preowned-${idx}`} className="mb-6">
                                <div className="text-white font-bold text-xl ">
                                  Pre-Owned Cars :
                                </div>
                                <div className="text-white text-lg leading-tight mb-4 font-normal" style={{ whiteSpace: 'pre-line', lineHeight: '1.2' }}>
                                  {preOwned.address}
                                </div>
                                <div className="text-white text-lg leading-relaxed mb-4 font-normal" style={{ whiteSpace: 'pre-line', lineHeight: '1.2' }}>
                                  {Array.isArray(preOwned.phone) ? (
                                    preOwned.phone.map((p, i) => (
                                      <div key={i} className="mt-1 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        {p}
                                      </div>
                                    ))
                                  ) : (
                                    <div className="mt-1 flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                      </svg>
                                      {preOwned.phone}
                                    </div>
                                  )}
                                  {Array.isArray(preOwned.email) ? (
                                    preOwned.email.map((e, i) => (
                                      <div key={i} className="mt-1">✉️ {e}</div>
                                    ))
                                  ) : (
                                    <div className="mt-1">✉️ {preOwned.email}</div>
                                  )}
                                </div>
                                <div className="rounded-lg overflow-hidden w-full">
                                  <iframe
                                    title={`Pre-Owned Cars Map ${idx + 1}`}
                                    src={preOwned.map}
                                    width="100%"
                                    height="280"
                                    className="rounded-lg w-full"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        {/* Service and Parts */}
                        {location["service and parts"] && (location["service and parts"]?.length ?? 0) > 0 && (
                          <div className="hide-scrollbar">
                            {location["service and parts"].map((serviceParts, idx) => (
                              <div key={`${currentSlide}-${locationKey}-serviceparts-${idx}`} className="mb-6">
                                <div className="text-white font-bold text-xl mb-2">
                                  Service & Parts :
                                </div>
                                <div className="text-white text-lg leading-tight mb-4 font-normal" style={{ whiteSpace: 'pre-line', lineHeight: '1.2' }}>
                                  {serviceParts.address}
                                </div>
                                <div className="text-white text-lg leading-relaxed mb-4 font-normal" style={{ whiteSpace: 'pre-line', lineHeight: '1.2' }}>
                                  {Array.isArray(serviceParts.phone) ? (
                                    serviceParts.phone.map((p, i) => (
                                      <div key={i} className="mt-1 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        {p}
                                      </div>
                                    ))
                                  ) : (
                                    <div className="mt-1 flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                      </svg>
                                      {serviceParts.phone}
                                    </div>
                                  )}
                                  {Array.isArray(serviceParts.email) ? (
                                    serviceParts.email.map((e, i) => (
                                      <div key={i} className="mt-1">✉️ {e}</div>
                                    ))
                                  ) : (
                                    <div className="mt-1">✉️ {serviceParts.email}</div>
                                  )}
                                </div>
                                <div className="rounded-lg overflow-hidden w-full">
                                  <iframe
                                    title={`Service and Parts Map ${idx + 1}`}
                                    src={serviceParts.map}
                                    width="100%"
                                    height="280"
                                    className="rounded-lg w-full"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                         {/* spares and distribution */}
                        {location["Spares & Distribution"] && (location["Spares & Distribution"]?.length ?? 0) > 0 && (
                          <div className="hide-scrollbar">
                            {location["Spares & Distribution"].map((sparesParts, idx) => (
                              <div key={`${currentSlide}-${locationKey}-serviceparts-${idx}`} className="mb-6">
                                <div className="text-white font-bold text-xl ">
                                 Spares & Distribution :
                                </div>
                                <div className="text-white text-lg leading-tight mb-4 font-normal" style={{ whiteSpace: 'pre-line', lineHeight: '1.2' }}>
                                  {sparesParts.address}
                                </div>
                                <div className="text-white text-lg leading-relaxed mb-4 font-normal" style={{ whiteSpace: 'pre-line', lineHeight: '1.2' }}>
                                  {Array.isArray(sparesParts.phone) ? (
                                    sparesParts.phone.map((p, i) => (
                                      <div key={i} className="mt-1 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        {p}
                                      </div>
                                    ))
                                  ) : (
                                    <div className="mt-1 flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                      </svg>
                                      {sparesParts.phone}
                                    </div>
                                  )}
                                  {Array.isArray(sparesParts.email) ? (
                                    sparesParts.email.map((e, i) => (
                                      <div key={i} className="mt-1">✉️ {e}</div>
                                    ))
                                  ) : (
                                    <div className="mt-1">✉️ {sparesParts.email}</div>
                                  )}
                                </div>
                                <div className="rounded-lg overflow-hidden w-full">
                                  <iframe
                                    title={`Spares & Distribution Map ${idx + 1}`}
                                    src={sparesParts.map}
                                    width="100%"
                                    height="280"
                                    className="rounded-lg w-full"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Spares Warehouse */}
                        {location["spares warehouse"] && (location["spares warehouse"]?.length ?? 0) > 0 && (
                          <div className="hide-scrollbar">
                            {location["spares warehouse"].map((spares, idx) => (
                              <div key={`${currentSlide}-${locationKey}-spareswarehouse-${idx}`} className="mb-6">
                                <div className="text-white font-bold text-xl mb-2">
                                  Spares Warehouse :
                                </div>
                                <div className="text-white text-lg leading-tight mb-4 font-normal" style={{ whiteSpace: 'pre-line', lineHeight: '1.2' }}>
                                  {spares.address}
                                </div>
                                <div className="text-white text-lg leading-relaxed mb-4 font-normal" style={{ whiteSpace: 'pre-line', lineHeight: '1.2' }}>
                                  {Array.isArray(spares.phone) ? (
                                    spares.phone.map((p, i) => (
                                      <div key={i} className="mt-1 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        {p}
                                      </div>
                                    ))
                                  ) : (
                                    <div className="mt-1 flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                      </svg>
                                      {spares.phone}
                                    </div>
                                  )}
                                  {Array.isArray(spares.email) ? (
                                    spares.email.map((e, i) => (
                                      <div key={i} className="mt-1">✉️ {e}</div>
                                    ))
                                  ) : (
                                    <div className="mt-1">✉️ {spares.email}</div>
                                  )}
                                </div>
                                <div className="rounded-lg overflow-hidden w-full">
                                  <iframe

                                    title={`Spares Warehouse Map ${idx + 1}`}
                                    src={spares.map}
                                    width="100%"
                                    height="280"
                                    className="rounded-lg w-full"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        {/* Sales, Service & Spares */}
                        {location["Sales, Service & Spares"] && (location["Sales, Service & Spares"]?.length ?? 0) > 0 && (
                            <div className="hide-scrollbar">
                            {location["Sales, Service & Spares"].map((salesService, idx) => (
                              <div key={`${currentSlide}-${locationKey}-salesservice-${idx}`} className="mb-6">
                                <div className="text-white font-bold text-xl">
                                  Sales, Service & Spares :
                                </div>
                                <div className="text-white text-lg leading-tight mb-4 font-normal" style={{ whiteSpace: 'pre-line', lineHeight: '1.2' }}>
                                  {salesService.address}
                                </div>
                                <div className="text-white text-lg leading-relaxed mb-4 font-normal" style={{ whiteSpace: 'pre-line', lineHeight: '1.2' }}>
                                  {Array.isArray(salesService.phone) ? (
                                    salesService.phone.map((p, i) => (
                                      <div key={i} className="mt-1 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        {p}
                                      </div>
                                    ))
                                  ) : (
                                    <div className="mt-1 flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                      </svg>
                                      {salesService.phone}
                                    </div>
                                  )}
                               {Array.isArray(salesService.email) ? (
                                    salesService.email.map((e, i) => (
                                      <div key={i} className="mt-1">✉️ {e}</div>
                                    ))
                                  ) : (
                                    <div className="mt-1">✉️ {salesService.email}</div>
                                  )}
                                </div>
                                <div className="rounded-lg overflow-hidden w-full">
                                  <iframe
                                    src={salesService.map}
                                    className="w-full rounded-lg"
                                    width="100%"
                                    height="280"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    );
                  })()}
                </div>
              </>
            )}
          </div>
          
        </div>
          
        {/* Text Learn More Link */}
       
<div className="w-screen bg-black">
        <BusinessSectors />
</div>
        {/* Logo section */}
          <div className="w-screen bg-black mt-20">
        <VSTLogoAnimation />
      </div>

      </motion.div>
    </div>
  );
};

export default FranchiseSlider;
