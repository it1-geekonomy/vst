import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

import slide1 from "@/app/public/hero-section/Image 1.png";
import slide2 from "@/app/public/hero-section/Image 5.jpg";
import slide3 from "@/app/public/hero-section/image 3.png";
import slide4 from "@/app/public/hero-section/Image 4.jpg";
import slide5 from "@/app/public/hero-section/Image 6.png";
import slide6 from "@/app/public/hero-section/Image 7.jpg";
import groupImage from "@/app/public/hero-section/Group Image.png";

// Import SVG icons
import Frame1 from "@/app/public/faranchies/Frame 1973341731.svg";
import Frame2 from "@/app/public/faranchies/Frame 1973341732.svg";
import Frame3 from "@/app/public/faranchies/Frame 1973341733.svg";
import NewsIcon from "@/app/public/hero-section/NewsIcon";
import CorporateIcon from "@/app/public/hero-section/CorporateIcon";
import EducationIcon from "@/app/public/hero-section/EducationIcon";
import OEPartsIcon from "@/app/public/hero-section/OEPartsIcon";
import ManufacturingIcon from "@/app/public/hero-section/ManufacturingIcon";
import AutomativeFranchiseIcon from "@/app/public/hero-section/AutomativeFranchiseIcon";

const slides = [
  {
    id: 7,
    image: slide5,
    title: "News and media",
    subtitle: "Stay updated with the latest news, events, and milestones from VST group",
    label: "News & Media",
    color: "from-green-600/80 to-green-800/80",
    type: 'image',
    icon: NewsIcon,
    link: "/news-media"
  },
  {
    id: 6,
    image: slide6,
    title: "Corporate Philanthropy",
    subtitle: "Driven by empathy and purpose, our efforts aim to create a lasting impact through compassion and collective upliftment.",
    label: "Corporate Philanthropy",
    color: "from-green-600/80 to-green-800/80",
    type: 'image',
    icon: CorporateIcon,
    link: "/Corporate-philanthropy"
  },
  {
    id: 5,
    image: slide2,
    title: "Education",
    subtitle: "Our educational philosophy emphasises a learner-centric approach wherein we cater to the diverse learning needs of students.",
    label: "Education",
    color: "from-green-600/80 to-green-800/80",
    type: 'image',
    icon: EducationIcon,
    link: "/education"
  },
  {
    id: 4,
    image: slide4,
    title: "OE Parts Distribution",
    subtitle: "Founded in 2005, VST Auto Parts enables Tata dealers to go the extra mile in providing effective, timely after-sales services with quick access to original spare parts.",
    label: "OE Parts Distribution",
    color: "from-blue-600/80 to-blue-800/80",
    type: 'image',
    icon: OEPartsIcon,
    link: "/auto-parts"
  },
  {
    id: 3,
    image: slide3,
    title: "MANUFACTURING",
    subtitle: "VST Tillers Tractors Ltd. is making a significant impact in global markets with innovative, high-quality machinery, driven by a futuristic approach.",
    label: "Manufacturing",
    color: "from-green-600/80 to-green-800/80",
    type: 'image',
    icon: ManufacturingIcon,
    link: "/manufacture"
  },
  {
    id: 2,
    image: slide2,
    title: "AUTOMOTIVE EXCELLENCE",
    subtitle: "PREMIUM MOBILITY SOLUTIONS",
    label: "Automotive Franchise",
    color: "from-blue-600/80 to-blue-800/80",
    type: 'video',
    videoSrc: "/CarVideo.mp4",
    icon: AutomativeFranchiseIcon,
    link: "/automotive-franchises"
  },
  {
    id: 1,
    image: slide1,
    title: "Building Tomorrow on a Century of Trust.",
    subtitle: "ON A CENTURY OF TRUST",
    label: "MERCEDES-BENZ",
    color: "from-red-600/80 to-red-800/80", // Gradient colors for strips
    type: 'image',
    icon: undefined,
    link: "/dummy-link"
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(6);
  const [showImages, setShowImages] = useState(slides);
  const [isMobile, setIsMobile] = useState(false);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  // Check if in mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate responsive strip width
  const getStripWidth = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 640) return '3rem';  // sm
      if (width < 768) return '4rem';  // md
      if (width < 1024) return '4rem'; // lg
      if (width < 1280) return '6rem'; // xl
      if (width < 1536) return '8rem'; // 2xl
      return '7rem'; // for largest screens
    }
    return '7rem'; // Default
  };

  // Handle video playback when slide changes
  useEffect(() => {
    showImages.forEach((slide, index) => {
      if (slide.type === 'video' && videoRefs.current[slide.id]) {
        if (currentSlide === index) {
          videoRefs.current[slide.id]?.play();
        } else {
          videoRefs.current[slide.id]?.pause();
          if (videoRefs.current[slide.id]) {
            videoRefs.current[slide.id]!.currentTime = 0;
          }
        }
      }
    });
  }, [currentSlide, showImages]);

  const handleSlideClick = (index: number) => {
    if (currentSlide === index) {
      // If clicking the current slide and next slide exists
      const nextSlideIndex = index + 1;
      if (nextSlideIndex < slides.length) {
        // Add the next slide and make it current
        const nextSlide = slides[nextSlideIndex];
        setShowImages([...showImages, nextSlide]);
        setCurrentSlide(nextSlideIndex);
      }
    } else {
      // If clicking a non-current slide
      // Keep only slides up to and including the clicked one
      const newShowImages = showImages.filter((_, i) => i <= index);
      setShowImages(newShowImages);
      setCurrentSlide(index);
    }
  };

  // Mobile slider functions
  const goToNextSlide = () => {
    const nextIndex = (currentSlide + 1) % slides.length;
    setCurrentSlide(nextIndex);
  };

  const goToPrevSlide = () => {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(prevIndex);
  };

  // Mobile view render
  if (isMobile) {
    return (
      <section className="relative h-screen overflow-hidden bg-black/5 mt-[-10vh]">
        <div className="relative h-full w-full flex items-center justify-center">
          {/* Current slide */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-[60vh]">
              {slides[currentSlide].type === 'video' ? (
                <div className="absolute inset-0 flex items-center justify-center bg-black w-full h-full">
                  <video
                    ref={el => { videoRefs.current[slides[currentSlide].id] = el; }}
                    src={slides[currentSlide].videoSrc}
                    className="w-full h-full object-cover"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      top: 0,
                      left: 0
                    }}
                    muted
                    loop
                    playsInline
                    autoPlay
                  />
                </div>
              ) : (
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].label}
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  priority
                />
              )}
            </div>
          </div>
          
          {/* Slide label */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black/50 px-4 py-2 rounded z-10 mt-30">
          </div>
          
          {/* Navigation buttons */}
          <div className="absolute inset-x-0 top-[23vh] flex items-center justify-between px-4 z-10">
            <button 
              className="bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition"
              onClick={goToPrevSlide}
            >
              &#10094;
            </button>
            <button 
              className="bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition"
              onClick={goToNextSlide}
            >
              &#10095;
            </button>
          </div>
          
          {/* Slider indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop view
  return (
    <section className="relative h-[90vh] overflow-hidden">
      <style >{`
   /* CSS variables for responsive sizing */
      .strips-container {
      --strip-width-sm: 4rem;    /* Increased from 2.5rem */
      --strip-width-md: 5rem;    /* Increased from 3rem */
      --strip-width-lg: 6rem;    /* Increased from 4rem */
      --strip-width-xl: 7rem;    /* Increased from 5rem */
      --strip-width-2xl: 8rem;   /* Increased from 6rem */
      --strip-width: var(--strip-width-lg); /* Default width */
}
        
        /* Responsive breakpoints */
        @media (max-width: 639px) {
          .strips-container {
            --strip-width: var(--strip-width-sm);
          }
        }
        @media (min-width: 640px) and (max-width: 767px) {
          .strips-container {
            --strip-width: var(--strip-width-md);
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .strips-container {
            --strip-width: var(--strip-width-md);
          }
        }
        @media (min-width: 1024px) and (max-width: 1279px) {
          .strips-container {
            --strip-width: var(--strip-width-lg);
          }
        }
        @media (min-width: 1280px) and (max-width: 1535px) {
          .strips-container {
            --strip-width: var(--strip-width-xl);
          }
        }
        @media (min-width: 1536px) {
          .strips-container {
            --strip-width: var(--strip-width-2xl);
          }
        }
        
        /* Active and inactive strip styling */
        .strip {
          transition: all 1300ms cubic-bezier(0.25, 0.1, 0.25, 1);
          will-change: width, transform;
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        
        .strip.inactive {
          width: var(--strip-width);
          min-width: var(--strip-width);
          max-width: var(--strip-width);
          flex-shrink: 0.3;
          flex-grow: 0;
          cursor: pointer;
        }
        
        .strip.active {
          flex-shrink: 0;
          flex-grow: 1;
          width: calc(100% - ((var(--strip-width)) * var(--strip-count)));
          min-width: calc(100% - ((var(--strip-width)) * var(--strip-count)));
          max-width: calc(100% - ((var(--strip-width)) * var(--strip-count)));
        }
      `}</style>
      
      <div 
        className="strips-container relative h-full w-full flex flex-row"
        style={{ 
          willChange: "contents",
          "--strip-count": showImages.length - 1 
        } as React.CSSProperties}
      >
        {/* Navigation Strips */}
        {showImages.map((slide, index) => {
          const isActive = currentSlide === index;
          
          return (
            <div
              key={slide.id}
              className={`relative strip shadow-2xl ${isActive ? 'active' : 'inactive'}`}
              onClick={() => handleSlideClick(index)}
            >
              {/* Background Content (Image or Video) */}
              <div className={`absolute inset-0 overflow-hidden ${isActive ? "w-full" : ""}`}>
                {slide.type === 'video' ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-black w-full h-full">
                    <video
                      ref={el => { videoRefs.current[slide.id] = el; }}
                      src={slide.videoSrc}
                      className="w-full h-full object-cover"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        opacity: isActive ? 1 : 0.9,
                        transform: `translate3d(0, 0, 0) scale(${isActive ? 1 : 1.1})`,
                        transition: "all 1500ms cubic-bezier(0.25, 0.1, 0.25, 1)",
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        left: 0
                      }}
                      muted
                      loop
                      playsInline
                    />
                    {slide.id === 2 && !isActive && (
                      <div 
                        className="absolute inset-0 transition-all duration-1500 ease-in-out"
                        style={{
                          background: 'linear-gradient(270deg, rgba(65, 148, 216, 0.6) 91.82%, rgba(65, 148, 216, 0.6) 100%)',
                          transition: 'all 1500ms cubic-bezier(0.25, 0.1, 0.25, 1)'
                        }}
                      />
                    )}
                  </div>
                ) : (
                  <>
                    <Image
                      src={slide.image}
                      alt={slide.label}
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: isActive ? "center" : "0% center",
                        opacity: isActive ? 1 : 0.9,
                        transform: `translate3d(0, 0, 0) scale(${isActive ? 1 : 1.1})`,
                        transition: "all 1500ms cubic-bezier(0.25, 0.1, 0.25, 1)",
                        willChange: "transform, opacity"
                      }}
                      priority={index === 0}
                    />
                    {/* Background overlays for both active and inactive states */}
                    {slide.id === 6 && (
                      <div 
                        className="absolute inset-0 transition-all duration-1500 ease-in-out"
                        style={{
                          background: isActive 
                            ? '#F1B892CC'
                            : 'linear-gradient(270deg, rgba(219, 91, 5, 0.85) 0%, rgba(219, 91, 5, 0.65) 100%)',
                          opacity: isActive ? 0.8 : 0.9,
                          transition: 'all 1500ms cubic-bezier(0.25, 0.1, 0.25, 1)'
                        }}
                      />
                    )}
                    {slide.id === 5 && (
                      <div 
                        className="absolute inset-0 transition-all duration-1500 ease-in-out"
                        style={{
                          background: isActive 
                            ? '#F1A0C1BF'
                            : 'linear-gradient(270deg, rgba(244, 122, 172, 0.85) 0%, rgba(250, 113, 169, 0.65) 100%)',
                          opacity: isActive ? 0.8 : 0.9,
                          transition: 'all 1500ms cubic-bezier(0.25, 0.1, 0.25, 1)'
                        }}
                      />
                    )}
                    {slide.id === 4 && (
                      <div 
                        className="absolute inset-0 transition-all duration-1500 ease-in-out"
                        style={{
                          background: isActive 
                            ? '#F1E992BF'
                            : 'linear-gradient(270deg, rgba(255, 185, 34, 0.85) 0%, rgba(255, 185, 34, 0.65) 100%)',
                          opacity: isActive ? 0.75 : 0.9,
                          transition: 'all 1500ms cubic-bezier(0.25, 0.1, 0.25, 1)'
                        }}
                      />
                    )}
                    {slide.id === 3 && (
                      <div 
                        className="absolute inset-0 transition-all duration-1500 ease-in-out"
                        style={{
                          background: isActive 
                            ? '#83FFE599'
                            : 'linear-gradient(270deg, rgba(81, 156, 141, 0.85) 0%, rgba(40, 120, 100, 0.65) 100%)',
                          opacity: isActive ? 0.6 : 0.9,
                          transition: 'all 1500ms cubic-bezier(0.25, 0.1, 0.25, 1)'
                        }}
                      />
                    )}
                    {slide.id === 2 && (
                      <div 
                        className="absolute inset-0 transition-all duration-1500 ease-in-out"
                        style={{
                          background: isActive 
                            ? 'transparent'
                            : 'linear-gradient(270deg, rgba(111, 190, 255, 0.85) 0%, rgba(65, 148, 216, 0.65) 100%)',
                          opacity: isActive ? 1 : 0.9,
                          transition: 'all 1500ms cubic-bezier(0.25, 0.1, 0.25, 1)'
                        }}
                      />
                    )}
                  </>
                )}
              </div>

              {/* Label for inactive slides */}
              {!isActive && (
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-110"
                     style={{ 
                       background: "linear-gradient(270deg, rgba(0, 0, 0, 0) 54.98%, rgba(3, 3, 3, 0.65) 110%)"
                     }}>
                  
                  {/* Flex container with fixed width for consistent alignment */}
                  <div className="-rotate-90 transform flex items-center justify-start" style={{ width: '320px' }}>
                    {/* Icon placed at the beginning of text, counter-rotated to appear straight */}
                                       {/* Icon placed at the beginning of text, counter-rotated to appear straight */}
                                       {slide.icon && (
                      <div className="rotate-90 mr-3 w-8 flex justify-center">
                        {React.createElement(slide.icon, {
                          width: 28,
                          height: 28,
                          className: "opacity-100"
                        })}
                      </div>
                    )}
                    {!slide.icon && <div className="w-8 mr-3"></div>}
                    <span 

                      className="text-white font-roc font-semibold whitespace-nowrap text-clamp-36"
                      style={{
                        transition: "opacity 900ms ease-in-out",
                        textShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)"
                      }}
                    >
                      {slide.label}
                    </span>
                  </div>
                </div>
              )}

              {isActive && slide.id !== 1 && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="bg-black/70 rounded-lg px-6 sm:px-10 py-10 text-left w-[90%] max-w-[900px] ml-8">
                    {/* Yellow line above the title */}
                    <div className="w-[40%] h-1 bg-yellow-400 mb-4"></div>
                    {slide.title && (
                      <h2 className="text-4xl font-bold text-white mb-4 font-roc">
                        {slide.title}
                      </h2>
                    )}
                    {slide.subtitle && (
                      <p className="text-lg text-white mb-6 font-roc">{slide.subtitle}</p>
                    )}
                    {slide.link && (
                      <div className="flex justify-center w-full mt-2">
                        <a
                          href={slide.link}
                          className="inline-flex items-center text-yellow-400 text-xl font-semibold hover:underline transition"
                        >
                          View more
                          <span className="ml-2">&#8594;</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;