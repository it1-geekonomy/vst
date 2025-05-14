"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import Initiatives from "./Initiatives";
import bg from "../app/public/makingdiff/orange-bg.png";
import flag from "../app/public/makingdiff/flag.png";
import gif from "@/app/public/education/vst logo gif.gif";

interface CSRItemProps {
  title: string;
  description: string;
  year: string;
  images: ImageData[];
  currentIndex: number;
}

// New interface for image data with title and description
interface ImageData {
  src: string;
  title: string;
  description: string;
}

// Updated timeline data structure with titles and descriptions for each image
const timelineData = [
  {
    year: "2015-2016",
    images: [
      {
        src: "/makingdiff/imagesanime/image1.jpeg",
        title: "Anugraha Charitable Trust",
        description:
          "Facilitating good health, Education, Food and shelter to the sufferings of the needy Sheila Kothavala Inst. For Deaf to build confidence, empower and mainstream members of the hearing impaired",
      },
      {
        src: "/makingdiff/imagesanime/image2.jpeg",
        title: "Chennai - Flood relief fund",
      },
    ],
  },
  {
    year: "2016-2017",
    images: [
      {
        src: "/makingdiff/imagesanime/image3.jpeg",
        title: "Wild Life First",
        description: "Wildlife conservation in India",
      },
      {
        src: "/makingdiff/imagesanime/image4.jpeg",
        title: "National Association for the Blind, Karnataka",
        description:
          "Driven by a commitment to inclusivity, equips the visually challenged with knowledge, independence, and a pathway to a brighter future.",
      },
    ],
  },
  {
    year: "2017-2018",
    images: [
      {
        src: "/makingdiff/imagesanime/image5.jpeg",
        title: "Rotary Orchards Chaitanya Senior",
        description: "Citizens Home Trust old age homes",
      },
      {
        src: "/makingdiff/imagesanime/image6.jpeg",
        title: "The Deaf Aid Society",
        description:
          "Helping the hearing impaired children mostly from economically weaker section.",
      },
      {
        src: "/makingdiff/imagesanime/image7.jpeg",
        title: "SMT. KAMALA BAI EDUCATIONAL INSTITUTION, BANGALORE ",
        description:
          "This institution was the result of Mr. Mudaliar's desire to further the dual causes of education for girls in India and the creation of an educational environment that would be imbued with Indian cultural values. Named after his wife, the Institution was founded in 1931. Today, it boasts a large, well-appointed campus of around 8 acres and includes Primary & High School, Pre-University College, and Degree College.",
      },
      {
        src: "/makingdiff/imagesanime/image8.jpeg",
        title: "Ramakrishna Matt- Halasur",
        description:
          "Religious Trust Ramakrishna Matt - Bangalore religious Trust Ramakrishna Mission-Shivanahalli, religious Trust Ramakrishna Ashrama-Mysore, Religious Trust Ramakrishna Saradashrama-Ponnampet",
      },
    ],
  },
  {
    year: "2000-2011",
    images: [
      {
        src: "/makingdiff/imagesanime/image3.jpeg",
        title: "Wild Life First",
        description: "Wildlife conservation in India",
      },
      {
        src: "/makingdiff/imagesanime/image4.jpeg",
        title: "National Association for the Blind, Karnataka",
        description:
          "Driven by a commitment to inclusivity, equips the visually challenged with knowledge, independence, and a pathway to a brighter future.",
      },
    ],
  },
  {
    year: "1995-2011",
    images: [
      {
        src: "/makingdiff/imagesanime/image3.jpeg",
        title: "Wild Life First",
        description: "Wildlife conservation in India",
      },
      {
        src: "/makingdiff/imagesanime/image4.jpeg",
        title: "National Association for the Blind, Karnataka",
        description:
          "Driven by a commitment to inclusivity, equips the visually challenged with knowledge, independence, and a pathway to a brighter future.",
      },
    ],
  },
  {
    year: "1990-2011",
    images: [
      {
        src: "/makingdiff/imagesanime/image3.jpeg",
        title: "Wild Life First",
        description: "Wildlife conservation in India",
      },
      {
        src: "/makingdiff/imagesanime/image4.jpeg",
        title: "National Association for the Blind, Karnataka",
        description:
          "Driven by a commitment to inclusivity, equips the visually challenged with knowledge, independence, and a pathway to a brighter future.",
      },
    ],
  },
];

const TimelineYear: React.FC<{
  year: string;
  isActive: boolean;
  onClick: () => void;
  position: number;
}> = ({ year, isActive, onClick, position }) => {
  return (
    <motion.div
      className={`cursor-pointer absolute right-0 flex items-center gap-2 sm:gap-4 ${isActive ? "text-red-500" : "text-white"} font-roc font-normal`}
      animate={{ x: position }}
      transition={{ type: "spring", stiffness: 100 }}
      onClick={onClick}
    >
      <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-red-500" />
      <div className="flex items-center space-x-3">
        <span className="text-white text-2xl font-roc font-normal">{year}</span>
      </div>
    </motion.div>
  );
};

const CSRItem: React.FC<CSRItemProps> = ({
  title,
  description,
  images,
  currentIndex,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Updated logic to handle image positioning for all years including 2018-2019
  const isImageOnLeft =
    title === "Community Development"
      ? currentImageIndex === 0 || currentImageIndex === 2 // For 2018-2019
      : currentImageIndex === 0 ||
        currentImageIndex === 2 ||
        images[currentImageIndex].src.includes("image3.jpeg"); // For other years

  // Get the current image data
  const currentImageData = images[currentImageIndex] as ImageData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center px-4 sm:px-6 py-8 font-roc font-normal`}
    >
      {/* Image Section */}
      <motion.div
        className={`flex justify-center ${isImageOnLeft ? "md:order-1" : "md:order-2"}`}
        layout
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-[80%] md:w-[85%] rounded-[2rem] overflow-hidden shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="absolute inset-0"
            >
              <Image
                src={currentImageData.src}
                alt={`${currentImageData.title} - Image ${currentImageIndex + 1}`}
                fill
                sizes="(max-width: 640px) 80vw, (max-width: 768px) 90vw, 45vw"
                className="object-cover rounded-[2rem]"
                onError={(e) => {
                  console.error(`Error loading image: ${currentImageData.src}`);
                  e.currentTarget.src = "/placeholder.jpg";
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className={`relative space-y-6 md:mr-8 ${isImageOnLeft ? "md:order-2" : "md:order-1"}`}
        layout
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <h3 className="text-2xl sm:text-4xl font-normal text-[#d7d1cd] text-left">
          {currentImageData.title}
        </h3>
        {currentImageData.description && (
          <div className="backdrop-blur-md bg-white/10 rounded-[2rem] p-4 shadow-lg">
            <p className="text-sm sm:text-lg text-gray-200 leading-relaxed text-[#d7d1cd]">
              {currentImageData.description}
            </p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

const CSR = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [yearPosition, setYearPosition] = useState(0);
  const [stepSize, setStepSize] = useState(400);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const maxSteps = timelineData.length;
  const [currentImageData, setCurrentImageData] = useState<ImageData | null>(
    null
  );

  // Add image rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prev) => (prev + 1) % timelineData[currentIndex].images.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Adjust step size based on screen width - IMPROVED RESPONSIVENESS
  useEffect(() => {
    const handleResize = () => {
      // More granular breakpoints for better responsiveness
      if (window.innerWidth < 480) {
        setStepSize(200); // Very small screens
      } else if (window.innerWidth < 640) {
        setStepSize(250); // Small mobile screens
      } else if (window.innerWidth < 768) {
        setStepSize(300); // Mobile screens
      } else if (window.innerWidth < 1024) {
        setStepSize(320); // Tablet screens
      } else if (window.innerWidth < 1280) {
        setStepSize(125); // Small desktop screens
      } else if (window.innerWidth < 1536) {
        setStepSize(165);
      } else {
        setStepSize(330); // Large desktop screens
      }
    };

    // Initial setup
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Keep currentImageData state in sync
  useEffect(() => {
    const dataForYear = timelineData[currentIndex];
    if (
      dataForYear &&
      dataForYear.images &&
      dataForYear.images.length > 0 &&
      currentImageIndex < dataForYear.images.length
    ) {
      setCurrentImageData(dataForYear.images[currentImageIndex] as ImageData);
    } else {
      setCurrentImageData(null);
    }
  }, [currentIndex, currentImageIndex]);

  // Move to the next year
  const handleNextYearClick = () => {
    // Reset image index when changing years
    setCurrentImageIndex(0);

    // Calculate the next index
    const nextIndex = (currentIndex + 1) % timelineData.length;

    // Calculate the new position
    const newPosition = yearPosition - stepSize;

    // If we've reached the end of the timeline, reset to the beginning
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
    // Reset image index when changing years
    setCurrentImageIndex(0);

    // Calculate the previous index
    const prevIndex =
      currentIndex === 0 ? timelineData.length - 1 : currentIndex - 1;

    // Calculate the new position
    const newPosition =
      prevIndex === timelineData.length - 1 ? 0 : yearPosition + stepSize;

    // Update state
    setYearPosition(newPosition);
    setCurrentIndex(prevIndex);
  };

  const currentData = timelineData[currentIndex];
  const isImageOnLeft =
    currentImageIndex === 0 ||
    currentImageIndex === 2 ||
    (currentData.images[currentImageIndex] as ImageData).src.includes(
      "image3.jpeg"
    );

  return (
    <div className={`flex flex-col min-h-screen font-roc font-normal`}>
      <main className="relative flex-grow overflow-x-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={bg}
            alt="Background Pattern"
            fill
            className="object-fill w-full h-full"
            priority
          />
        </div>
        {/* Content */}
        <motion.div
          className="relative w-full z-10"
          initial={false}
          transition={{ duration: 0.01 }}
        >
          {/* Hero Section */}
          <section className="relative h-[50vh] sm:h-[60vh] md:h-[75vh] 2xl:h-[60vh] overflow-hidden z-10">
            <div className="relative h-full flex flex-col items-center justify-start text-white px-4 sm:px-6 md:px-8  sm:pt-20 pb-20">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[5.5rem] font-light font-roc text-left mb-2 sm:mb-4">
                Making a Difference
              </h1>
              <p className="text-sm sm:text-base md:text-[22px] text-center max-w-6xl 2xl:max-w-7xl mx-auto text-gray-200 leading-relaxed text-justify px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8rounded-lg mb-16 sm:mb-20 md:mb-18 font-normal font-roc">
                Rooted in a legacy of responsibility and service, VST Group,
                through the V.S. Tiruvengadaswamy Mudaliar Memorial Trust, has
                consistently extended its hand to communities in need. From
                supporting education and healthcare to empowering the
                differently-abled, protecting wildlife, and responding to
                humanitarian crises, our CSR initiatives reflect a deep
                commitment to creating a meaningful and lasting impact. Guided
                by empathy and driven by purpose, we believe in building a
                better future—not just through business, but through compassion,
                care, and collective upliftment.
              </p>
            </div>
          </section>
          {/* Initiatives Section */}
          <div className="w-full py-6 sm:py-4 md:py-6 lg:py-8 pl-0 sm:pl-0 md:pl-15 lg:pl-20 xl:pl-[10rem] h-[1080px]:pl-0">
            <Initiatives />
          </div>

          {/* Timeline Section - IMPROVED RESPONSIVENESS */}
          <section className="xl:mx-18 lg:mx-12 px-2 sm:px-4 py-0 sm:py-4 relative z-10 mt-12 sm:mt-16 md:mt-20">
            <div className="relative h-16 sm:h-20 2xl:mt-32">
              {/* Timeline Line */}
              <div className="absolute h-[2px] bg-[white] w-full top-[20px] sm:top-[25px]" />

              {/* Fixed Flag on Left */}
              <div className="absolute left-0 top-[-12px] sm:top-[-15px] w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] z-10">
                <Image
                  src={flag}
                  alt="Timeline Flag"
                  width={30}
                  height={30}
                  className="w-full h-full"
                />
              </div>

              {/* Year display with navigation arrows - IMPROVED FOR RESPONSIVENESS */}
              <div className="absolute right-0 w-full flex justify-end top-[-35px] sm:top-[-30px]">
                <motion.div
                  className="flex gap-2 sm:gap-5 items-center z-10"
                  animate={{ x: yearPosition }}
                  transition={{ type: "spring", stiffness: 50, damping: 14 }}
                >
                  {/* Left Arrow (Next) - Always visible */}
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
                  <p className="text-base sm:text-lg md:text-xl whitespace-nowrap text-white font-roc font-normal">
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

            {/* Content Section */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentData.year}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center py-8 font-roc font-normal`}
                >
                  {/* Image Section */}
                  <motion.div
                    className={`flex justify-center ${isImageOnLeft ? "md:order-1" : "md:order-2"}`}
                    layout
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-[80%] md:w-[85%] rounded-[2rem] overflow-hidden shadow-xl">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentImageIndex}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={
                              (
                                currentData.images[
                                  currentImageIndex
                                ] as ImageData
                              ).src
                            }
                            alt={`${(currentData.images[currentImageIndex] as ImageData).title} - Image ${currentImageIndex + 1}`}
                            fill
                            sizes="(max-width: 640px) 80vw, (max-width: 768px) 90vw, 45vw"
                            className="object-cover rounded-[2rem]"
                            onError={(e) => {
                              console.error(
                                `Error loading image: ${(currentData.images[currentImageIndex] as ImageData).src}`
                              );
                              e.currentTarget.src = "/placeholder.jpg";
                            }}
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </motion.div>

                  {/* Content Section */}
                  <motion.div
                    className={`relative space-y-6 md:mr-6 ${isImageOnLeft ? "md:order-2" : "md:order-1"}`}
                    layout
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <h3 className="text-2xl sm:text-4xl font-roc font-normal text-[#d7d1cd] text-left">
                      {/* Use currentImageData if it's reliably set, or continue direct access */}
                      {currentImageData
                        ? currentImageData.title
                        : (currentData.images[currentImageIndex] as ImageData)
                            ?.title}
                    </h3>
                    {currentImageData &&
                      currentImageData.description?.trim() && (
                        <div className="backdrop-blur-md bg-white/10 rounded-[2rem] p-4 shadow-lg">
                          <p className="text-sm sm:text-lg leading-relaxed text-[#d7d1cd] font-normal font-roc">
                            {currentImageData.description}
                          </p>
                        </div>
                      )}
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </section>
        </motion.div>
        <div className="relative w-full flex justify-center py-8 sm:py-12 lg:py-20">
          <Image
            src={gif}
            alt="VST Logo Animation"
            className="w-[50%] h-[50%] object-contain"
          />
        </div>
      </main>
      <Footer bgcolour="bg-black" />
    </div>
  );
};

export default CSR;
