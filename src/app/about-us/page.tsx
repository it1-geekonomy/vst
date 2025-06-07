"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Image1911 from "@/app/public/images/AboutUs/1911Image.png";
import Image1930 from "@/app/public/images/AboutUs/1930Image.png";
import Image1960 from "@/app/public/images/AboutUs/1960Image.png";
import Image2000 from "@/app/public/images/AboutUs/2000.png";

import BackgroundImage from "@/app/public/images/AboutUs/Background.png";
import gif from "@/app/public/education/vst logo gif.gif"
import { useRouter } from "next/navigation";

// Add this custom hook at the top level, before the component
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures effect is only run on mount

  return windowSize;
}

function AboutUsPage() {
  const [selectedYear, setSelectedYear] = useState("1911");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageOpacity, setImageOpacity] = useState(1);
  const [blurAmount, setBlurAmount] = useState(0);
  const [scale, setScale] = useState(1);
  const router = useRouter();
  const { width: windowWidth } = useWindowSize();
  // All timeline data
  const allTimelineData = [
    {
      year: "1911",
      image: Image1911,
    },
    {
      year: "1930",
      image: Image1930,
    },
    {
      year: "1960",
      image: Image1960,
    },
    {
      year: "2000",
      image: Image2000,
    },
  ];

  // Get current visible timeline data - always exactly 3 items
  const getVisibleTimelineData = () => {
    const allYears = allTimelineData.map(item => item.year);
    const selectedIndex = allYears.indexOf(selectedYear);
    
    // Get previous and next indices with wrap-around
    const prevIndex = (selectedIndex - 1 + allYears.length) % allYears.length;
    const nextIndex = (selectedIndex + 1) % allYears.length;
    
    // Return only the visible 3 items
    return [
      allTimelineData[prevIndex],
      allTimelineData[selectedIndex],
      allTimelineData[nextIndex]
    ];
  };
  
  // Currently visible timeline data
  const timelineData = getVisibleTimelineData();

  // Apply subtle zoom effect to the selected image
  useEffect(() => {
    if (!isTransitioning) {
      const zoomInterval = setInterval(() => {
        setScale(prev => {
          // Enhanced zoom effect between 1 and 1.05
          return prev >= 1.05 ? 1 : prev + 0.0005;
        });
      }, 50);
      
      return () => clearInterval(zoomInterval);
    }
  }, [isTransitioning]);

  const getPosition = (year: string) => {
    if (year === selectedYear) return 0;
    
    const allYears = allTimelineData.map(item => item.year);
    const selectedIndex = allYears.indexOf(selectedYear);
    const yearIndex = allYears.indexOf(year);
    
    if (yearIndex === (selectedIndex - 1 + allYears.length) % allYears.length) {
      return -1;
    }
    
    if (yearIndex === (selectedIndex + 1) % allYears.length) {
      return 1;
    }
    
    return null;
  };

  // Enhanced transition with faster fadeout
  const handleYearClick = (year: string) => {
    if (year === selectedYear || isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Fade out and blur simultaneously - faster fadeout
    setImageOpacity(0.15);
    setBlurAmount(8);
    
    // Wait for faster fade out to complete
    setTimeout(() => {
      // Update selected year - this will reorder the images in the DOM
      setSelectedYear(year);
      setScale(1); // Reset scale for new image
      
      // Short delay to ensure DOM updates
      setTimeout(() => {
        // Start removing blur first
        setBlurAmount(4);
        
        // Then gradually restore opacity
        setTimeout(() => {
          setImageOpacity(0.3);
          
          // Complete transition with final values
          setTimeout(() => {
            setBlurAmount(0);
            setImageOpacity(1);
            
            // Allow Ken Burns effect to restart
            setTimeout(() => {
              setIsTransitioning(false);
            }, 80);
          }, 120);
        }, 100);
      }, 30);
    }, 150);
  };

  // Handle previous year
  const handlePrevClick = () => {
    if (isTransitioning) return;
    
    const allYears = allTimelineData.map(item => item.year);
    const currentIndex = allYears.indexOf(selectedYear);
    const prevIndex = (currentIndex - 1 + allYears.length) % allYears.length;
    handleYearClick(allYears[prevIndex]);
  };

  // Handle next year
  const handleNextClick = () => {
    if (isTransitioning) return;
    
    const allYears = allTimelineData.map(item => item.year);
    const currentIndex = allYears.indexOf(selectedYear);
    const nextIndex = (currentIndex + 1) % allYears.length;
    handleYearClick(allYears[nextIndex]);
  };

  return (
    <div 
      className="min-h-screen text-white relative bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url(${BackgroundImage.src})`,
      }}
    >
      {/* Layer 1: Vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.6) 100%)",
          zIndex: 1
        }}
      ></div>

      {/* Layer 2: Content */}
      <div className="relative z-10 md:pb-5">
        {/* About Us heading at the top */}
        <div className="w-full flex justify-center items-center py-10  xl:p-10">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-roc drop-shadow-lg pointer-events-auto mt-7">About Us</h1>
        </div>

        {/* Timeline component */}
        <div className="flex flex-col lg:flex-row w-full px-4 sm:px-6 md:px-8 items-center ">
          {/* Timeline Years */}
          <div className="w-3/4 lg:w-1/3 flex flex-row items-center justify-between lg:flex-col lg:justify-center h-[80px] lg:h-[500px] relative lg:pr-0">
            {/* Up arrow - Moves timeline up (previous year) */}
            <button
              onClick={handlePrevClick}
              className="text-gray-400 hover:text-yellow-300 transition-colors "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 sm:h-16 sm:w-16 lg:h-16 lg:w-16 hidden lg:block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 sm:h-16 sm:w-16 lg:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Timeline Years - 3D circular carousel effect without axis */}
            <div className="relative h-[400px] w-full flex items-center justify-center lg:block" 
                style={{ perspective: "1000px" }}>
              {/* 3D carousel container */}
              <div className="w-full h-full relative flex flex-row lg:block" style={{ transformStyle: "preserve-3d" }}>
                {timelineData.map((item) => {
                  const position = getPosition(item.year);
                  const isSelected = selectedYear === item.year;
                  
                  let rotateX = 0;
                  let translateZ = 0;
                  let translateX = 0;
                  let translateY = 0;
                  let opacity = 1;
                  let scale = 1;
                  
                  if (position === -1) {
                    if (windowWidth >= 1024) {
                      translateY = -160;
                      translateX = 0;
                    } else {
                      const gap = windowWidth >= 640 ? 90 : 70;
                      translateY = 0;
                      translateX = -gap;
                    }
                    opacity = 0.7;
                    scale = windowWidth >= 1024 ? 0.85 : 0.7;
                  } else if (position === 1) {
                    if (windowWidth >= 1024) {
                      translateY = 160;
                      translateX = 0;
                    } else {
                      const gap = windowWidth >= 640 ? 90 : 70;
                      translateY = 0;
                      translateX = gap;
                    }
                    opacity = 0.7;
                    scale = windowWidth >= 1024 ? 0.85 : 0.7;
                  } else {
                    rotateX = 0;
                    translateZ = 0;
                    translateY = 0;
                    opacity = 1;
                    scale = windowWidth >= 1024 ? 1.25 : 1;
                  }
                  
                  return (
                    <button
                      key={item.year}
                      onClick={() => handleYearClick(item.year)}
                      className={`absolute lg:absolute left-1/2 top-1/2 font-normal font-roc ${
                        isSelected
                          ? windowWidth >= 1024
                            ? 'text-clamp-96'
                            : 'text-clamp-64'
                          : windowWidth >= 1024
                            ? 'text-clamp-67'
                            : 'text-clamp-32'
                      }`}
                      style={{
                        transform: `translate(calc(-50% + ${translateX}px), calc(-50% + ${translateY}px)) rotateX(${rotateX}deg) translateZ(${translateZ}px) scale(${isSelected ? 1.2 : 1.2})`,
                        opacity: opacity,
                        color: isSelected ? "rgba(254, 191, 61, 1)" : "rgba(61, 117, 193, 1)",
                        filter: "none",
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                        transition: "all 800ms cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                      }}
                    >
                      {item.year}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Down arrow - Moves timeline down (next year) */}
            <button
              onClick={handleNextClick}
              className="text-gray-400 hover:text-yellow-300 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 sm:h-16 sm:w-16 lg:h-16 lg:w-16 hidden lg:block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 sm:h-16 sm:w-16 lg:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Timeline Images */}
          <div className="w-full lg:w-2/3 flex items-center justify-center lg:justify-start lg:pl-0 lg:-ml-12">
            <div className="flex items-center justify-center">
              <div className="flex flex-row items-center justify-center
                -space-x-2 sm:-space-x-4 md:-space-x-6 lg:-space-x-8 xl:-space-x-10">
                {[...timelineData]
                  .sort((a, b) => {
                    if (a.year === selectedYear) return -1
                    if (b.year === selectedYear) return 1
                    return 0
                  })
                  .map((item, index) => {
                    const isMainImage = item.year === selectedYear;
                    
                    return (
                      <div
                        key={item.year}
                        className="relative flex items-center"
                        style={{
                          zIndex: isMainImage ? 30 : 20 - index,
                          transition: "all 400ms cubic-bezier(0.4, 0.0, 0.2, 1)", 
                          willChange: "transform, opacity", 
                        }}
                      >
                        {/* Image container with enhanced transition */}
                        <div
                          className={`relative rounded-full overflow-hidden
                            ${isMainImage
                              ? 'w-[40vw] max-w-[180px] sm:w-[30vw] sm:max-w-[220px] md:w-[22vw] md:max-w-[260px] lg:w-[320px] lg:max-w-[320px] xl:w-[380px] xl:max-w-[380px]'
                              : index === 1
                              ? 'w-[28vw] max-w-[120px] sm:w-[20vw] sm:max-w-[160px] md:w-[16vw] md:max-w-[200px] lg:w-[220px] lg:max-w-[220px] xl:w-[260px] xl:max-w-[260px]'
                              : 'w-[20vw] max-w-[90px] sm:w-[14vw] sm:max-w-[120px] md:w-[12vw] md:max-w-[140px] lg:w-[160px] lg:max-w-[160px] xl:w-[200px] xl:max-w-[200px]'}
                            max-w-full h-auto aspect-square`}
                          style={{
                            transition: "width 400ms cubic-bezier(0.4, 0.0, 0.2, 1), height 400ms cubic-bezier(0.4, 0.0, 0.2, 1)",
                            transform: isMainImage ? `scale(${scale})` : 'scale(1)',
                            transformOrigin: 'center center',
                            transitionProperty: 'transform, width, height',
                            transitionDuration: isMainImage ? '5s, 400ms, 400ms' : '400ms, 400ms, 400ms',
                            transitionTimingFunction: 'ease-in-out, cubic-bezier(0.4, 0.0, 0.2, 1), cubic-bezier(0.4, 0.0, 0.2, 1)'
                          }}
                        >
                          <Image
                            src={item.image}
                            alt={`Timeline ${item.year}`}
                            fill
                            style={{
                              opacity: imageOpacity,
                              filter: `blur(${blurAmount}px)`,
                              transition: "opacity 200ms cubic-bezier(0.4, 0.0, 0.2, 1), filter 180ms cubic-bezier(0.4, 0.0, 0.2, 1)",
                              objectFit: "cover"
                            }}
                            sizes="(max-width: 640px) 120px,
                                   (max-width: 768px) 180px,
                                   (max-width: 1024px) 220px,
                                   (max-width: 1280px) 280px,
                                   320px"
                            priority={isMainImage}
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>

        {/* About Us Text Section */}
        <div className="mt-12 md:mt-16 px-4 lg:px-52">
          <h2 className="text-3xl md:text-4xl mb-6 md:mb-8 text-white font-roc text-clamp-40">Our Legacy</h2>

          <div className="flex flex-col font-normal ">
            
            <div>
              <p className="text-justify hyphens-auto font-roc font-normal text-sm md:text-base text-clamp-24">
                Founded in 1911, VST Group is a leading conglomerate headquartered in Bangalore, known for
                its enduring legacy of excellence, innovation, and sustainable growth. The group has been
                growing ever since, expanding its presence across four core verticals:
              </p>
              <ul className="list-disc pl-6 mt-3 mb-4 space-y-1 text-sm md:text-base text-clamp-24">
                <li>Automotive Franchise</li>
                <li>Manufacturing</li> 
                <li>OE Parts Distribution</li>
                <li>Education</li>
              </ul>
              
              <h3 className="text-xl md:text-2xl text-white py-8 mb-3 font-roc text-clamp-40">A Legacy of Trust and Innovation:</h3>
              <p className="text-justify hyphens-auto font-roc text-sm md:text-base text-clamp-24">
                With an annual turnover exceeding ₹5,000 crores ($570 million), VST Group stands as a powerhouse
                in India's business landscape. Under the visionary leadership of its fourth generation, the group
                continues to set new benchmarks in service excellence, technological advancement and customer
                satisfaction. By blending a rich legacy with a forward-looking approach to innovation, VST Group remains
                committed to delivering value, building trust and driving growth for generations to come.
              </p>
              
              
            </div>
          </div>
        </div>

        {/* Progress with Purpose Section */}
        <div className="mt-16 md:mt-32 flex items-center justify-center px-4">
          <div className="flex flex-col md:flex-row items-center space-y-0 md:space-y-0 ">
            <div className="w-full md:h-[350px] md:w-1/2 flex justify-center md:justify-end">
              <Image
                src={gif}
                alt="VST Logo Animation"
                className="w-[100%] h-[100%] object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left mb-5">
              <h2 className="text-3xl md:text-4xl text-white mb-2 font-roc">
                Progress with Purpose.
              </h2>
              <h3 className="text-3xl md:text-4xl text-white mb-6 md:mb-8 font-roc">Impact with Vision.</h3>
              <button onClick={() => router.push("/career")} className="bg-yellow-400 text-black px-6 md:px-8 py-2 md:py-3 rounded text-base md:text-lg font-medium">
                Join Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
