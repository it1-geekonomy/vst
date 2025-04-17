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
import Logo from "@/app/public/logos/Logo";

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
  description: string;
  learnMoreLink: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    backgroundImage: bg1,
    carImage: car1,
    brand: "porsche",
    bgColor: {
      from: "#780E26",
      to: "rgba(120, 14, 38, 0.4)",
    },
    LogoComponent: PorscheIcon,
    description: "The primary showroom is located in central Bangalore on Sankey road. The second showroom along with an adjoining workshop is located in Whitefield, an affluent neighborhood on the eastern side of the city. Since inception, the VST Porsche franchise has done exceptionally well in expanding the market for this niche premium segment in the state, winning the bronze performance award by Porsche Middle East for 2023.",
    learnMoreLink: "https://www.porsche.com"
  },
  {
    id: 2,
    backgroundImage: bg2,
    carImage: car2,
    brand: "mercedes",
    bgColor: {
      from: "#B897FF",
      to: "#5A6292",
    },
    LogoComponent: MercedesIcon,
    description: "Mercedes-Benz at VST offers luxury vehicles with cutting-edge technology and unparalleled comfort. Our showroom showcases the latest models with expert sales consultants to guide customers through personalized experiences, ensuring they find the perfect Mercedes-Benz that matches their lifestyle and preferences.",
    learnMoreLink: "https://www.mercedes-benz.com"
  },
  {
    id: 3,
    backgroundImage: bg3,
    carImage: car3,
    brand: "landrover",
    bgColor: {
      from: "#DCAB77",
      to: "  rgba(220, 171, 119, 0.4)",
    },
    LogoComponent: LandRoverIcon,
    description: "Our Land Rover franchise delivers premium off-road capability combined with refined luxury. With state-of-the-art service facilities and a team of specialized technicians, we provide comprehensive maintenance and support for these exceptional vehicles designed to conquer any terrain while maintaining superior comfort.",
    learnMoreLink: "https://www.landrover.com"
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
    LogoComponent: MaseratiIcon,
    description: "Maserati represents Italian craftsmanship at its finest, combining racing heritage with elegant design. Our dedicated showroom offers the complete lineup of these distinctive vehicles, each embodying the perfect balance of performance and luxury that has made Maserati a symbol of automotive excellence.",
    learnMoreLink: "https://www.maserati.com"
  },
  {
    id: 5,
    backgroundImage: bg4,
    carImage: car5,
    brand: "maserati",
    bgColor: {
      from: "#6FBEFF",
      to: "rgba(111, 190, 255, 0.4);",
    },
    LogoComponent: KiaIcon,
    description: "Our Kia franchise offers innovative vehicles with industry-leading warranties and advanced features. The showroom provides a modern shopping experience with interactive displays and knowledgeable staff ready to demonstrate the latest technologies that make Kia one of the fastest-growing automotive brands.",
    learnMoreLink: "https://www.kia.com"
  },
  {
    id: 6,
    backgroundImage: bg6,
    carImage: car6,
    brand: "maserati",
    bgColor: {
      from: "rgba(107, 7, 7, 0.56)",
      to: "#0F1F2A",
    },
    LogoComponent: TataIcon,
    description: "Tata Motors at VST brings reliable, innovative vehicles designed for Indian roads and conditions. Our franchise emphasizes value, durability, and safety across a diverse range of passenger and commercial vehicles, supported by comprehensive after-sales service and genuine parts availability.",
    learnMoreLink: "https://www.tatamotors.com"
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
    description: "Mahindra vehicles combine rugged capability with modern design and technology. Our franchise showcases the full range of SUVs and commercial vehicles, backed by specialized service centers equipped to maintain these tough, versatile vehicles built to handle diverse driving conditions.",
    learnMoreLink: "https://www.mahindra.com"
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
    description: "Ducati represents the pinnacle of Italian motorcycle engineering and design. Our dedicated showroom features these iconic motorcycles known for their performance, distinctive sound, and unmistakable style, with expert staff offering test rides and customization options for enthusiasts.",
    learnMoreLink: "https://www.ducati.com"
  },
];

const FranchiseSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
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

  const gradientColor = "rgba(223, 172, 79, 0.56)"

  // Total number of virtual slides for infinite scrolling
  const totalVirtualSlides = 50 * slides.length;

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

  return (
    <div className="relative w-full min-h-screen  lg:mt-[-6rem] mt-[1rem]">
      {/* Fixed background gradient */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(33.31% 35.31% at 91.72% 2.91%, ${gradientColor} 0%, transparent 100%),
            linear-gradient(348.88deg, rgba(0, 0, 0, 09) 2.12%, rgba(65, 148, 216, 0.6) 82.2%)
          `
        }}
      />

      {/* Content */}
      <motion.div
        className="relative w-full min-h-screen overflow-x-hidden z-10"
        initial={false}
        transition={{ duration: 0.01 }}
      >
        {/* Car section */}
        <div className="relative w-full h-auto sm:h-[85vh] lg:h-screen flex flex-col lg:flex-row sm:mb-[1] lg:mb-[10rem] mb-[4rem]">
          {/* Left section with background and car */}
          <div className="relative w-full lg:w-[55%] h-[40vh] sm:h-[45vh] lg:h-full">
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

              {/* Dynamic color accent bars - hidden on mobile */}
              <div 
                className="hidden lg:block absolute top-0 right-0 w-[1rem] sm:w-[1.5rem] h-[40%] rounded-br-full rounded-bl-none rounded-t-none" 
                style={{ backgroundColor: slides[currentSlide].bgColor.to}}
              />
              <div 
                className="hidden lg:block absolute top-0 right-[2rem] sm:right-[40px] w-[1rem] sm:w-[1.5rem] h-[50%]  rounded-br-full  
                rounded-bl-none   
                rounded-t-none " 
                style={{ backgroundColor: slides[currentSlide].bgColor.from }}
              />

              <motion.div
                key={`car-${currentSlide}`}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-0 sm:bottom-[-10%] lg:bottom-[-10%] w-full lg:w-screen h-[35vh] sm:h-[40vh] lg:h-[70vh] z-[1002] pointer-events-none"
              >
                <Image
                  src={slides[currentSlide].carImage}
                  alt="Luxury Car"
                  width={2000}
                  height={700}
                  className="w-full lg:w-[60%] h-full object-contain scale-[0.65] sm:scale-75 lg:scale-85 lg:left-[10%]"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 60vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right section */}
          <div className="relative w-full lg:w-[45%] px-1 sm:px-1 lg:px-10 flex flex-col justify-between py-2 sm:py-4 lg:py-20">
            {/* Title */}
            <div className="flex-1 flex items-center justify-center sm:mb-[6rem] mb-[3rem]">
              <h2 className="text-white font-['Roc_Grotesk'] font-extralight text-2xl sm:text-3xl lg:text-[4rem] xl:text-[5rem] tracking-[0.2em] text-center">
                Our
                <br />
                Franchises
              </h2>
            </div>

            {/* Navigation and logos */}
            <div className="flex flex-col items-center lg:items-start justify-start gap-1 sm:gap-2 lg:gap-8 h-auto lg:h-[16rem] w-full">
              {/* Up arrow */}
              <button
                onClick={prevSlide}
                className="text-white hover:text-purple-400 transition-colors w-8 sm:w-10 lg:w-12 flex justify-center mx-auto lg:mx-0 lg:ml-[5.5rem] mb-0 sm:mb-1 lg:mb-0"
              >
                <svg
                  className="w-5 sm:w-6 lg:w-12 h-5 sm:h-6 lg:h-12"
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

              {/* Brand logos - infinite loop implementation */}
              <div className="w-full flex justify-center lg:justify-start overflow-hidden py-0 sm:py-1 lg:py-[2rem] lg:pl-[3rem] relative">
                <motion.div
                  className="flex items-center gap-3 sm:gap-5 lg:gap-16"
                  animate={{
                    x: `-${
                      scrollPosition * ((screenWidth ?? 1200) < 640 ? 212 : (screenWidth ?? 1200) < 1024 ? 220 : 264)
                    }px`,
                    translateX: (screenWidth ?? 1200) < 640 ? "9.43%" : (screenWidth ?? 1200) < 1024 ? "9.4%" : "-0.1%",
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  {/* Create a large number of repeating logos for infinite scrolling */}
                    {Array(10).fill(null).map((_, outerIndex) => 
                    slides.map((slide, innerIndex) => {
                      const index = (outerIndex * slides.length) + innerIndex;
                      const realIndex = index % slides.length;
                      const isActive = realIndex === currentSlide;
                        
                      return (
                        <motion.button
                          key={`slide-infinite-${index}`}
                          onClick={isActive ? undefined : () => {}}
                          className={`transition-opacity duration-300 flex-shrink-0 ${
                            isActive ? "opacity-100" : "opacity-50 hover:opacity-75 pointer-events-none"
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
                <div className="absolute bottom-0 right-0 w-[70%] h-[1px] bg-white bg-opacity-50"></div>
              </div>

              {/* Down arrow */}
              <button
                onClick={nextSlide}
                className="text-white hover:text-purple-400 transition-colors w-8 sm:w-10 lg:w-12 flex justify-center mx-auto lg:mx-0 lg:ml-[5.5rem] mt-0 sm:mt-1 lg:mt-0"
              >
                <svg
                  className="w-5 sm:w-6 lg:w-12 h-5 sm:h-6 lg:h-12"
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

        {/* Description section - moved back outside but made dynamic */}
        <div className="w-full py-1 sm:py-2 md:py-4 lg:py-10 px-4 sm:px-6 lg:px-24 flex flex-col items-center pt-6 sm:pt-4  lg:pt-1 mt-[-10rem] sm:mt-[-2rem] lg:mt-[-6rem]">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] font-normal mb-4 sm:mb-6 lg:mb-8">
            VST Supercars
          </h2>
          <AnimatePresence mode="wait">
            <motion.p
              key={`description-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-white text-sm sm:text-base lg:text-[24px] text-center lg:text-justify 
              font-normal leading-[160%] sm:leading-[177%] tracking-[0%] max-w-6xl
              font-['FONTSPRING_DEMO_-_Roc_Grotesk']"
            >
              {slides[currentSlide].description}
            </motion.p>
          </AnimatePresence>
          
          <a href={slides[currentSlide].learnMoreLink} className="mt-6 sm:mt-8 lg:mt-10 inline-block w-auto" target="_blank" rel="noopener noreferrer">
            <h3 className="border-2 border-[#DFAC4F] rounded-xl sm:rounded-2xl px-8 sm:px-12 md:px-20 lg:px-40 xl:px-60 py-3 sm:py-4 lg:py-5 text-[#DFAC4F] text-xl sm:text-2xl lg:text-3xl font-light hover:bg-[#DFAC4F]/10 transition-colors">
              Learn More
            </h3>
          </a>
        </div>

        <BusinessSectors />

        {/* Logo section */}
        <div className="w-full flex justify-center py-8 sm:py-12 lg:py-20">
          <Logo />
        </div>
      </motion.div>
    </div>
  );
};

export default FranchiseSlider;
