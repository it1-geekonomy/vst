"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import flag from "../app/public/makingdiff/flag.png";

// Timeline data with images for each year
const timelineData = [
  {
    year: "2015-2016",
    images: [
      {
        src: "/makingdiff/imagesanime/image1.jpeg",
        title: "Anugraha Charitable Trust",
        description:
          "Providing health, education, food, and shelter to the needy while empowering the hearing-impaired at Sheila Kothavala Institute for the Deaf.",
      },
      {
        src: "/makingdiff/imagesanime/image2.jpeg",
        title: "Chennai - Flood relief fund",
        description: "Helped the people affected by the 2015 Chennai floods",
      },
    ],
  },
  {
    year: "2016-2017",
    images: [
      {
        src: "/makingdiff/imagesanime/image3.jpeg",
        title: "Wild Life First",
        description:
          "Our commitment to wildlife conservation and environmental sustainability.",
      },
      {
        src: "/makingdiff/imagesanime/image4.jpeg",
        title: "The National Association for the Blind, Karnataka",
        description:
          "Driven by a commitment to inclusivity, equips the visually challenged with knowledge, independence, and a pathway to a brighter future.",
      },
      {
        src: "/makingdiff/imagesanime/image5.jpeg",
        title: "The Deaf Aid Society",
        description:
          "Helping the hearing impaired children mostly from economically weaker section.",
      },
    ],
  },
  {
    year: "2017-2018",
    images: [
      {
        src: "/makingdiff/imagesanime/image3.jpeg",
        title: "Wild Life First",
        description:
          "Supporting wildlife conservation and protection initiatives.",
      },
    ],
  },
  {
    year: "2018-2019",
    images: [
      {
        src: "/makingdiff/imagesanime/image4.jpeg",
        title: "The National Association for the Blind, Karnataka",
        description:
          "Supporting education and empowerment programs for the visually impaired.",
      },
    ],
  },
  {
    year: "2019-2020",
    images: [
      {
        src: "/makingdiff/imagesanime/image5.jpeg",
        title: "The Deaf Aid Society",
        description:
          "Enabling and supporting education for hearing-impaired children.",
      },
    ],
  },
  {
    year: "2020-2021",
    images: [
      {
        src: "/makingdiff/imagesanime/image6.jpeg",
        title: "Rotary Club of Bangalore Charitable Trust",
        description: "Supporting various community development initiatives.",
      },
    ],
  },
  {
    year: "2021-2022",
    images: [
      {
        src: "/makingdiff/imagesanime/image7.jpeg",
        title: "Sree Ramakrishna Educational Institution",
        description:
          "Contributing to educational infrastructure and student support programs.",
      },
    ],
  },
  {
    year: "2022-2023",
    images: [
      {
        src: "/makingdiff/imagesanime/image8.jpeg",
        title: "Supporting Spiritual and Social Welfare",
        description:
          "Contributing to spiritual and social welfare initiatives across communities.",
      },
    ],
  },
  {
    year: "2023-2024",
    images: [
      {
        src: "/makingdiff/imagesanime/image9.jpeg",
        title: "The Live Love Laugh Foundation",
        description:
          "Supporting mental health awareness and treatment programs.",
      },
    ],
  },
];

const TimelineSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [yearPosition, setYearPosition] = useState(0);
  const [stepSize, setStepSize] = useState(400);

  // Adjust step size based on screen width - IMPROVED RESPONSIVENESS
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setStepSize(200); // Very small screens
      } else if (window.innerWidth < 640) {
        setStepSize(250); // Small mobile screens
      } else if (window.innerWidth < 768) {
        setStepSize(300); // Mobile screens
      } else if (window.innerWidth < 1024) {
        setStepSize(320); // Tablet screens
      } else if (window.innerWidth < 1280) {
        setStepSize(310); // Small desktop screens
      } else if (window.innerWidth < 1536) {
        setStepSize(400);
      } else if (window.innerWidth < 1900) {
        setStepSize(520);
      } else {
        setStepSize(740); // Large desktop screens
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Move to the next year
  const handleNextYearClick = () => {
    const nextIndex = (currentIndex + 1) % timelineData.length;
    const newPosition = yearPosition - stepSize;

    if (nextIndex === 0) {
      setYearPosition(0);
      setCurrentIndex(0);
    } else {
      setYearPosition(newPosition);
      setCurrentIndex(nextIndex);
    }
  };

  // Move to the previous year
  const handlePrevYearClick = () => {
    const prevIndex =
      currentIndex === 0 ? timelineData.length - 1 : currentIndex - 1;
    const newPosition =
      prevIndex === timelineData.length - 1 ? 0 : yearPosition + stepSize;

    setYearPosition(newPosition);
    setCurrentIndex(prevIndex);
  };

  const currentData = timelineData[currentIndex];

  return (
    <div
      className="relative min-h-screen"
      style={{
        background: "linear-gradient(135deg, #8B4513 0%, #CD853F 100%)",
      }}
    >
      {/* Diagonal Lines Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <svg className="absolute w-full h-full" preserveAspectRatio="none">
          <pattern
            id="diagonalLines"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>
      </div>

      {/* Timeline Section with Flag and Year Navigation */}
      <div className="relative z-10">
        <div className="relative h-16 sm:h-20 px-6 pt-6">
          {/* Timeline Line */}
          <div className="absolute h-[2px] bg-white/30 w-full top-[20px] sm:top-[25px]" />

          {/* Fixed Flag on Left */}
          <div className="absolute left-6 top-[-12px] sm:top-[-15px] w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] z-10">
            <Image
              src={flag}
              alt="Timeline Flag"
              width={30}
              height={30}
              className="w-full h-full"
            />
          </div>

          {/* Year display with navigation arrows */}
          <div className="absolute right-6 w-full flex justify-end top-[-35px] sm:top-[-30px]">
            <motion.div
              className="flex gap-2 sm:gap-5 items-center z-10"
              animate={{ x: yearPosition }}
              transition={{ type: "spring", stiffness: 50, damping: 14 }}
            >
              {/* Left Arrow (Next) */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mb-1 cursor-pointer flex-shrink-0"
                onClick={handleNextYearClick}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                >
                  <path
                    d="M10 6L4 12M4 12L10 18M4 12H20"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>

              {/* Year text */}
              <p className="text-base sm:text-lg md:text-xl whitespace-nowrap text-white">
                {currentData.year}
              </p>

              {/* Right Arrow (Previous) - Only show if not at first year */}
              {currentIndex > 0 && (
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mb-1 cursor-pointer flex-shrink-0"
                  onClick={handlePrevYearClick}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  >
                    <path
                      d="M14 6L20 12M20 12L14 18M20 12H4"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-32 px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            {/* Left Column - Image */}
            <motion.div
              className="relative aspect-4/3 rounded-[2rem] overflow-hidden shadow-xl"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={currentData.images[0].src}
                alt={currentData.images[0].title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-white text-5xl font-light leading-tight">
                {currentData.images[0].title}
              </h1>
              <div className="bg-white/10 backdrop-blur-sm rounded-[2rem] p-8">
                <p className="text-white text-lg leading-relaxed">
                  {currentData.images[0].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TimelineSection;
