import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import Image1 from "@/app/public/images/LifeAtVst/Image1.png";
import Image2 from "@/app/public/images/LifeAtVst/Image2.png";
import Image3 from "@/app/public/images/LifeAtVst/Image3.png";

const LifeAtVst = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      number: "01",
      image: Image1,
      title: "Life At VST",
      subtitle: "Commitment To Partnerships",
      description:
        "At VST Group, We Are Committed To Fostering An Environment Where Partnerships Thrive. For Our Partners, We Provide Unparalleled Collaboration Opportunities Grounded In Trust And Mutual Growth.",
    },
    {
      number: "02",
      image: Image2,
      title: "Life At VST",
      subtitle: "Fueling Talent With Opportunity",
      description:
        "At VST Group, We Are Committed To Fostering An Environment Where Partnerships Thrive. For Our Partners, We Provide Unparalleled Collaboration Opportunities Grounded In Trust And Mutual Growth.",
    },
    {
      number: "03",
      image: Image3,
      title: "Life At VST",
      subtitle: "Innovation Through Collaboration",
      description:
        "At VST Group, We Are Committed To Fostering An Environment Where Partnerships Thrive. For Our Partners, We Provide Unparalleled Collaboration Opportunities Grounded In Trust And Mutual Growth.",
    },
  ];

  // Reduced auto-advance timer from 5000ms to 3000ms
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] bg-black text-white overflow-hidden">
      {/* Fixed Title Section - Centered in both desktop and mobile */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-40 text-center w-full xl:w-auto xl:left-auto xl:transform-none xl:right-[-13.5%]">
        <h1 
          className="mb-2 uppercase text-white"
          style={{
            fontFamily: "Roc Grotesk",
            fontWeight: 200,
            fontSize: "80px",
            lineHeight: "100%",
            letterSpacing: "0.09em"
          }}
        >
          Life At VST
        </h1>
        <div className="w-full max-w-[900px] h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto" />
      </div>

      {/* Fixed "0" - Only visible on larger desktop (2xl) */}
      <div className="hidden 2xl:block absolute top-1/2 left-[40%] transform -translate-x-1/2 -translate-y-1/2 z-20">
        <span className="text-[400px] font-['Roc_Grotesk'] text-white">0</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          {/* Background Image Container */}
          <div className="absolute left-0 w-full xl:w-[75%] h-full">
            <Image
              src={slides[currentSlide].image}
              alt={`Life at VST ${currentSlide + 1}`}
              layout="fill"
              objectFit="cover"
              className="opacity-70"
            />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black to-transparent" />
          </div>

          {/* Update the black background div to match */}
          <div className="absolute right-0 top-0 w-[25%] h-full bg-black hidden 2xl:block" />

          {/* Animated Second Digit - Only visible on larger desktop (2xl) */}
          <motion.div
            className="hidden 2xl:block absolute top-1/2 left-[calc(40%+100px)] transform -translate-y-1/2 z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-[400px] font-['Roc_Grotesk'] bg-gradient-to-r from-[#00f5ff] via-[#ff3e3e] to-[#ff00ff] bg-clip-text text-transparent animate-gradient">
              {(currentSlide + 1).toString()}
            </span>
          </motion.div>

          {/* Sliding Content Section - Centered on mobile/tablet, right-aligned on desktop */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute left-1/2 transform -translate-x-1/2 xl:left-auto xl:transform-none xl:right-[-250] top-40 px-4 xl:px-0 max-w-[550px] z-30 w-full xl:w-auto"
          >
            <h2 className="text-3xl xl:text-2xl font-semibold mb-4 text-center xl:text-left">
              {slides[currentSlide].subtitle}
            </h2>
            <p className="text-xl xl:text-lg text-center xl:text-left">
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LifeAtVst;
