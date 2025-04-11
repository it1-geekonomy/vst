"use client"
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import bg1 from "@/app/public/faranchies/bgpic/pexels-jack-redgate-333633-30140021 1 (1).png";
import bg2 from "@/app/public/faranchies/bgpic/pexels-jack-redgate-333633-30140021 1 (2).png";
import bg3 from "@/app/public/faranchies/bgpic/pexels-jack-redgate-333633-30140021 2 (1).png";
import car1 from "@/app/public/faranchies/carpic/Mercedes 1 (1).png";
import car2 from "@/app/public/faranchies/carpic/Benz Car 2 1.png";
import car3 from "@/app/public/faranchies/carpic/land-rover car.png";
import bg4 from "@/app/public/faranchies/bgpic/4carbg.png";
import bg5 from "@/app/public/faranchies/bgpic/5carbg.png";
import bg6 from "@/app/public/faranchies/bgpic/6carbg.png";
import bg7 from "@/app/public/faranchies/bgpic/7carbg.png";

import bikebg from "@/app/public/faranchies/bgpic/bikebg.png";

import car4 from "@/app/public/faranchies/carpic/4car.png";
import car5 from "@/app/public/faranchies/carpic/5car.png";
import car6 from "@/app/public/faranchies/carpic/6car.png";
import car7 from "@/app/public/faranchies/carpic/7car.png";
import bike from "@/app/public/faranchies/carpic/bike.png";
import MercedesIcon from "@/app/public/faranchies/MercedesIcon";
import LandRoverIcon from "@/app/public/faranchies/LandRoverIcon";
import PorscheIcon from "@/app/public/faranchies/PorscheIcon";
import MaseratiIcon from "@/app/public/faranchies/MaseratiIcon";
import MahindraIcon from "@/app/public/faranchies/MahindraIcon";
import KiaIcon from "@/app/public/faranchies/KiaIcon";
import DucatiIcon from "@/app/public/faranchies/DucatiIcon";
import TataIcon from "@/app/public/faranchies/TataIcon";
import BusinessSectors from "./BusinessSectors";

interface SlideData {
  id: number;
  backgroundImage: StaticImageData;
  carImage: StaticImageData;
  brand: "mercedes" | "jaguar" | "landrover" | "porsche" | "maserati";
  bgColor: {
    from: string;
    to: string;
  };
  LogoComponent: React.ComponentType<{ className?: string }>;
}

const slides: SlideData[] = [
  {
    id: 1,
    backgroundImage: bg1,
    carImage: car1,
    brand: "porsche",
    bgColor: {
      from: "rgba(223, 172, 79, 0.56)",
      to: "#0F1F2A",
    },
    LogoComponent: PorscheIcon,
  },
  {
    id: 2,
    backgroundImage: bg2,
    carImage: car2,
    brand: "mercedes",
    bgColor: {
      from: "rgba(223, 172, 79, 0.56)",
      to: "#0F1F2A",
    },
    LogoComponent: MercedesIcon,
  },
  {
    id: 3,
    backgroundImage: bg3,
    carImage: car3,
    brand: "landrover",
    bgColor: {
      from: "rgba(223, 172, 79, 0.56)",
      to: "#0F1F2A",
    },
    LogoComponent: LandRoverIcon,
  },
  {
    id: 4,
    backgroundImage: bg4,
    carImage: car4,
    brand: "maserati",
    bgColor: {
      from: "rgba(223, 172, 79, 0.56)",
      to: "#0F1F2A",
    },
    LogoComponent: MercedesIcon,
  },
  {
    id: 5,
    backgroundImage: bg4,
    carImage: car5,
    brand: "maserati",
    bgColor: {
      from: "rgba(223, 172, 79, 0.56)",
      to: "#0F1F2A",
    },
    LogoComponent: KiaIcon,
  },
  {
    id: 6,
    backgroundImage: bg6,
    carImage: car6,
    brand: "maserati",
    bgColor: {
      from: "rgba(223, 172, 79, 0.56)",
      to: "#0F1F2A",
    },
    LogoComponent: MercedesIcon,
  },
  {
    id: 7,
    backgroundImage: bg7,
    carImage: car7,
    brand: "maserati",
    bgColor: {
      from: "rgba(223, 172, 79, 0.56)",
      to: "#0F1F2A",
    },
    LogoComponent: MahindraIcon,
  },
  {
    id: 8,
    backgroundImage: bikebg,
    carImage: bike,
    brand: "maserati",
    bgColor: {
      from: "rgba(223, 172, 79, 0.56)",
      to: "#0F1F2A",
    },
    LogoComponent: DucatiIcon,
  },
];

const FranchiseSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [screenWidth, setScreenWidth] = useState<number | null>(null);
  useEffect(() => {
    setScreenWidth(window.innerWidth);
  
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  


  const goToSlide = (brand: SlideData["brand"]) => {
    const index = slides.findIndex((slide) => slide.brand === brand);
    if (index !== -1) {
      setCurrentSlide(index);
    }
  };

  return (
    <motion.div
      className="relative w-full min-h-screen overflow-x-hidden"
      initial={false}
      animate={{
        background: `
          radial-gradient(33.31% 35.31% at 91.72% 2.91%, ${slides[currentSlide].bgColor.from} 0%, transparent 100%),
          linear-gradient(328.88deg, rgba(0, 0, 0, 09) 1.12%, rgba(65, 148, 216, 0.6) 82.2%)
        `,
      }}
      transition={{ duration: 0.01}}
    >
      {/* Car section */}
      <div className="relative w-full h-screen flex flex-col lg:flex-row">
        {/* Left section with background and car */}
        <div className="relative w-full lg:w-[60%] h-[60vh] lg:h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={`bg-${currentSlide}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute left-0 lg:left-[20%] w-full lg:w-[55%] h-[90%]"
            >
              <Image
                src={slides[currentSlide].backgroundImage}
                alt="Background"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 55vw"
              />
            </motion.div>

            {/* Purple accent bars - hidden on mobile */}
            <div className="hidden lg:block absolute top-0 right-0 w-[1.5rem] h-[30%] bg-[#8B5CF6] rounded-full" />
            <div className="hidden lg:block absolute top-0 right-[40px] w-[1.5rem] h-[40%] bg-[#8B5CF6] rounded-full" />

            <motion.div
              key={`car-${currentSlide}`}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-0 lg:bottom-[-10%] w-full lg:w-screen h-[40vh] lg:h-[70vh] z-[1002] pointer-events-none"
            >
              <Image
                src={slides[currentSlide].carImage}
                alt="Luxury Car"
                width={2000}
                height={700}
                className="w-full lg:w-[60%] h-full object-contain scale-75 lg:scale-85 lg:left-[10%]"
                priority
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right section */}
        <div className="relative w-full lg:w-[30%] px-6 lg:px-0 flex flex-col justify-between py-8 lg:py-20">
          {/* Title */}
          <h2 className="text-white text-4xl lg:text-6xl font-light text-center lg:text-left">
            Our
            <br />
            Franchises
          </h2>

          {/* Navigation and logos */}
          <div className="flex flex-col items-center lg:items-start justify-start gap-6 lg:gap-8 h-auto lg:h-[16rem] ">
            {/* Up arrow */}
            <button
              onClick={() =>
                setCurrentSlide(
                  (prev) => (prev - 1 + slides.length) % slides.length
                )
              }
              className="text-white hover:text-purple-400 transition-colors w-12 flex justify-center ml-[1rem] lg:ml-[5.5rem]"
            >
              <svg
                className="w-8 lg:w-12 h-8 lg:h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>

            {/* Brand logos */}
            <div className="w-full flex justify-center lg:justify-start overflow-hidden">
            <motion.div
  className="flex items-center gap-8 lg:gap-27"
  animate={{
    x: `-${
      currentSlide * ((screenWidth ?? 1200) < 1024 ? 12 : 240)
    }px`,
    translateX: (screenWidth ?? 1200) < 1024 ? "40%" : "0%",
  }}
  transition={{
    duration: 0.5,
    ease: "easeInOut",
  }}
>

                {slides.map((slide, index) => (
                  <motion.button
                    key={slide.brand}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-opacity duration-300 flex-shrink-0 ${
                      currentSlide === index
                        ? "opacity-100"
                        : "opacity-50 hover:opacity-75"
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <slide.LogoComponent />
                  </motion.button>
                ))}
              </motion.div>
            </div>

            {/* Down arrow */}
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % slides.length)
              }
              className="text-white hover:text-purple-400 transition-colors w-12 flex justify-center ml-[1rem] lg:ml-[5.5rem]"
            >
              <svg
                className="w-8 lg:w-12 h-8 lg:h-12"
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
          </div>
        </div>
      </div>

      {/* Description section */}
      <div className="w-full py-8 lg:py-12 px-6 lg:px-24 flex justify-center">
        <p
          className="text-white text-base lg:text-[24px] text-center lg:text-justify 
          font-normal leading-[177%] tracking-[0%] max-w-6xl
          font-['FONTSPRING_DEMO_-_Roc_Grotesk']"
        >
          The primary showroom is located in central Bangalore on Sankey road.
          The second showroom along with an adjoining workshop is located in
          Whitefield, an affluent neighborhood on the eastern side of the city.
          Since inception, the VST Porsche franchise has done exceptionally well
          in expanding the market for this niche premium segment in the state,
          winning the bronze performance award by Porsche Middle East for 2023.
        </p>
      </div>

      <BusinessSectors />

      {/* Logo section */}
      <div className="w-full flex justify-center py-12 lg:py-20">
        <img src="/logo.svg" alt="Company Logo" className="w-24 lg:w-32" />
      </div>
    </motion.div>
  );
};

export default FranchiseSlider;
