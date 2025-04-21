"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Image1881 from "@/app/public/images/AboutUs/1881Image.png";
import Image1920 from "@/app/public/images/AboutUs/1920Image.png";
import Image1950 from "@/app/public/images/AboutUs/1950Image.png";
import VideoPlayer from '@/components/VideoPlayer';

function AboutUsPage() {
  const [selectedYear, setSelectedYear] = useState("1920");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageOpacity, setImageOpacity] = useState(1);
  const [blurAmount, setBlurAmount] = useState(0);
  const [scale, setScale] = useState(1);
  
  const timelineData = [
    {
      year: "1881",
      image: Image1881,
    },
    {
      year: "1920",
      image: Image1920,
    },
    {
      year: "1950",
      image: Image1950,
    },
  ];

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
    const years = ["1881", "1920", "1950"];
    const selectedIndex = years.indexOf(selectedYear);
    const currentIndex = years.indexOf(year);

    // Calculate relative position (-1 for above, 0 for center, 1 for below)
    let position = currentIndex - selectedIndex;

    // Adjust for circular motion
    if (position === 2) position = -1;
    if (position === -2) position = 1;

    return position;
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

  return (
    <div className="min-h-screen text-white relative" style={{ background: "#000000" }}>
      {/* Layer 1: Top gradient with blur effect AND fade-in mask */}
      <div
        className="absolute left-0 right-0 w-full" // Positioned below navbar
        style={{
          top: '4rem', // Starts 64px (h-16) from the top (adjust if needed)
          height: 'calc(60% - 4rem)', // Extend height slightly to ensure fade is covered
          background: "linear-gradient(132.98deg, rgba(47, 129, 174, 0.6) 28.43%, rgba(92, 62, 188, 0.6) 110.85%)",
          pointerEvents: "none",
          backdropFilter: "blur(720px)",
          WebkitBackdropFilter: "blur(720px)",
          opacity: 0.8,
          mixBlendMode: "screen", // Keep screen blend mode for color interaction
          // Mask to fade IN from the top edge of *this div*
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%)", // Fade over 20% of this div's height
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%)",
          zIndex: 1 // Base layer for top effect
        }}
      ></div>

      {/* Layer 2: Combined Vertical Fade (In & Out) + Vignette */}
      <div
        className="absolute inset-0 pointer-events-none" // Covers entire page
        style={{
          // Combined gradient:
          // - Fade IN from dark just below navbar
          // - Transparent middle
          // - Fade OUT to dark starting around 50%
          // - Radial gradient for vignette layered on top
          background: `
            linear-gradient(to bottom,
              transparent 0%, /* Transparent at very top */
              transparent calc(4rem - 1px), /* Stay transparent until navbar bottom */
              rgba(0,0,0,0.6) calc(4rem + 1px), /* Start fading IN dark overlay */
              transparent calc(4rem + 20vh), /* Fade to transparent below navbar */
              transparent 45vh, /* Stay transparent through middle */
              rgba(0,0,0,0.7) 65vh, /* Start fading OUT to dark */
              #000000 85vh /* Fully black towards bottom */
            ),
            radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.7) 100%) /* Vignette */
          `,
          // Multiple backgrounds blend by default (vignette over linear fade)
          zIndex: 2 // On top of the blur layer, below content
        }}
      ></div>

      {/* Layer 3: Content */}
      <div className="relative z-10 md:pb-5"> {/* Increased top padding */}
        {/* Timeline component */}
        <div className="flex flex-col lg:flex-row w-full  px-4 sm:px-6 md:px-8">
          {/* Timeline Years */}
          <div className="w-full lg:w-1/4 flex flex-row items-center justify-between lg:flex-col lg:justify-center h-[100px] lg:h-[600px] relative">
            {/* Up arrow - Moves timeline up (previous year) */}
            <button
              onClick={() => {
                const currentIndex = timelineData.findIndex((item) => item.year === selectedYear)
                const prevIndex = (currentIndex - 1 + timelineData.length) % timelineData.length
                handleYearClick(timelineData[prevIndex].year)
              }}
              className="text-gray-400 hover:text-yellow-300 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 hidden lg:block"
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
            <div className="relative h-[240px] w-full flex items-center justify-center lg:block" 
                style={{ perspective: "1000px" }}>
              {/* 3D carousel container */}
              <div className="w-full h-full relative flex flex-row lg:block" style={{ transformStyle: "preserve-3d" }}>
                {timelineData.map((item) => {
                  const position = getPosition(item.year);
                  const isSelected = selectedYear === item.year;
                  
                  // Calculate 3D rotation and z position
                  let rotateX = 0;
                  let translateZ = 0;
                  let opacity = 1;
                  let scale = 1;
                  
                  if (position === -1) {
                    rotateX = -60; // Rotated upward
                    translateZ = -100; // Behind
                    opacity = 0.7;
                    scale = 0.85;
                  } else if (position === 1) {
                    rotateX = 60; // Rotated downward
                    translateZ = -100; // Behind
                    opacity = 0.7;
                    scale = 0.85;
                  } else {
                    // Center position
                    rotateX = 0;
                    translateZ = 0;
                    opacity = 1;
                    scale = 1.25;
                  }
                  
                  return (
                    <button
                      key={item.year}
                      onClick={() => handleYearClick(item.year)}
                      className="absolute lg:absolute left-1/2 top-1/2 text-3xl sm:text-4xl lg:text-5xl font-bold"
                      style={{
                        transform: `translate(-50%, -50%) rotateX(${rotateX}deg) translateZ(${translateZ}px) scale(${scale})`,
                        opacity: opacity,
                        color: isSelected ? "#FCD34D" : "#373737",
                        filter: isSelected ? "none" : "blur(1px)",
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
              onClick={() => {
                const currentIndex = timelineData.findIndex((item) => item.year === selectedYear)
                const nextIndex = (currentIndex + 1) % timelineData.length
                handleYearClick(timelineData[nextIndex].year)
              }}
              className="text-gray-400 hover:text-yellow-300 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 hidden lg:block"
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
          <div className="w-full lg:w-3/4 flex items-center justify-center lg:mt-0">
            <div className="flex items-center justify-center">
              <div className="flex flex-row items-center justify-center
                -space-x-4 sm:-space-x-8 md:-space-x-12 lg:-space-x-16">
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
                          transition: "all 400ms cubic-bezier(0.4, 0.0, 0.2, 1)", // Faster transition
                          willChange: "transform, opacity", // Performance optimization
                        }}
                      >
                        {/* Image container with enhanced transition */}
                        <div
                          className={`relative rounded-full overflow-hidden
                            ${isMainImage
                              ? 'w-[160px] h-[160px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] lg:w-[420px] lg:h-[420px]'
                              : index === 1
                              ? 'w-[120px] h-[120px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px] lg:w-[340px] lg:h-[340px]'
                              : 'w-[100px] h-[100px] sm:w-[180px] sm:h-[180px] md:w-[240px] md:h-[240px] lg:w-[300px] lg:h-[300px]'}`}
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
                            sizes="(max-width: 640px) 160px,
                                   (max-width: 768px) 280px,
                                   (max-width: 1024px) 340px,
                                   420px"
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
        <div className="mt-12 md:mt-16 px-4 md:px-32">
          <h1 className="text-3xl md:text-4xl mb-6 md:mb-8 text-white font-rocWide">Our Legacy</h1>

          <div className="flex flex-col">
            <h2 className="text-lg md:text-lg mb-2 text-white font-rocWide">About VST Group</h2>
            <div
              
            >
              <p
                className=" text-justify hyphens-auto font-rocWide font-light"
                
              >
                Established in 1911, VST Group is a distinguished 11 year old enterprise headquartered in Bangalore.
              </p>
              <p
                className=" text-justify hyphens-auto font-rocWide font-light"
                
              >
                It encompasses a wide array of luxury and mid variant car franchises, like Porsche, Maserati, Mercedes Benz, Jaguar, Land Rover, Ducati, Tata, Kia, Volkswagen, BYD Mahindra, Honda Scooters alongside a prominent manufacturing sector and significant interests in real estate, financial services and education industry. Under the leadership of its fourth generation, the Group has a turnover of Rs. 5,000 crores 570 million with sustainable growth, excellence, and innovation.
              </p>
              <p
                className=" text-justify hyphens-auto font-rocWide font-light"
                
              >
                VST Tractors  Tillers, a key division, is renowned for its innovative and reliable agricultural machinery, supporting farmers with high quality equipment to boost productivity and modernize farming techniques. Gove Finance Limited, the leader in Auto Finance services for more than 30 years, is a dynamic nonbanking finance company led by a team of specialists with proven track record. It finance cars, commercial vehicles, construction equipments, used vehicles, tractors and buses. Meanwhile, SKEI stands out for its commitment to holistic education, offering a range of academic and extracurricular programs in a supportive environment, enhanced by state of the art facilities and a dedicated faculty to foster intellectual and personal growth.
              </p>
              <p className="text-white font-base font-rocWide">SINCE 1911</p>
            </div>
          </div>
        </div>

        {/* Progress with Purpose Section */}
        <div className="mt-16 md:mt-32 flex items-center justify-center px-4">
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="w-full md:h-[500px] md:w-1/2 flex justify-center md:justify-end">
              <VideoPlayer src="/ContactUsLogo.mp4" />
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl text-white mb-2 font-rocWide">
                Progress with Purpose.
              </h2>
              <h3 className="text-3xl md:text-4xl text-white mb-6 md:mb-8 font-rocWide">Impact with Vision</h3>
              <button className="bg-yellow-400 text-black px-6 md:px-8 py-2 md:py-3 rounded text-base md:text-lg font-medium">
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
