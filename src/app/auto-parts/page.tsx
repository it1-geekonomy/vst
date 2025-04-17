"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import img1 from "@/app/public/vst-auto-parts/frame1.jpg";
import img2 from "@/app/public/vst-auto-parts/frame2.jpg";
import img3 from "@/app/public/vst-auto-parts/frame3.jpg";
import img4 from "@/app/public/vst-auto-parts/frame4.jpg";
import img5 from "@/app/public/vst-auto-parts/frame5.jpg";
import img6 from "@/app/public/vst-auto-parts/frame6.jpg";
import bgImage from "@/app/public/vst-auto-parts/bgimg.jpeg";
import LocationSection from "../components/LocationSection";
import BusinessSectors from "@/components/automotiveFranchises/BusinessSectors";
import Logo from "../public/logos/Logo";

export default function Page() {
  const gradientColor = "rgba(223, 172, 79, 0.56)";
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null);
  const [previousPositions, setPreviousPositions] = useState<{[key: number]: string}>({});
  
  // Use the imported images
  const images = [img1, img2, img3, img4, img5, img6];

  const handleImageClick = (index: number) => {
    if (isTransitioning) return;
    
    // Store previous positions before changing activeIndex
    const prevPositions: {[key: number]: string} = {};
    images.forEach((_, imgIndex) => {
      prevPositions[imgIndex] = getPositionClass(imgIndex);
    });
    setPreviousPositions(prevPositions);
    
    // Determine direction
    const currentPos = activeIndex;
    const clickedPos = index;
    
    // Determine if we should go next or prev
    const distForward = (clickedPos - currentPos + images.length) % images.length;
    const distBackward = (currentPos - clickedPos + images.length) % images.length;
    
    setDirection(distForward <= distBackward ? 'next' : 'prev');
    setIsTransitioning(true);
    setActiveIndex(index);
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1200); // Extended for smoother animation
  };

  const goToPrevSlide = () => {
    if (isTransitioning) return;
    
    // Store previous positions before changing activeIndex
    const prevPositions: {[key: number]: string} = {};
    images.forEach((_, imgIndex) => {
      prevPositions[imgIndex] = getPositionClass(imgIndex);
    });
    setPreviousPositions(prevPositions);
    
    setDirection('prev');
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1200); // Extended for smoother animation
  };

  const goToNextSlide = () => {
    if (isTransitioning) return;
    
    // Store previous positions before changing activeIndex
    const prevPositions: {[key: number]: string} = {};
    images.forEach((_, imgIndex) => {
      prevPositions[imgIndex] = getPositionClass(imgIndex);
    });
    setPreviousPositions(prevPositions);
    
    setDirection('next');
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1200); // Extended for smoother animation
  };

  // Function to determine the position class for each image
  const getPositionClass = (index: number) => {
    // Calculate the relative position to the active index
    const position = (index - activeIndex + images.length) % images.length;
    
    if (position === 0) return "center"; // Center/active image
    if (position === 1) return "right-1"; // First image on the right
    if (position === 2) return "right-2"; // Second image on the right
    if (position === images.length - 1) return "left-1"; // First image on the left
    if (position === images.length - 2) return "left-2"; // Second image on the left
    return "hidden"; // Hide other images
  };

  // Get animation class for extreme transitions
  const getAnimationClass = (index: number) => {
    const currentPosition = getPositionClass(index);
    const previousPosition = previousPositions[index];
    
    if (!isTransitioning || !previousPosition) return '';
    
    // For "next" direction (carousel moves left)
    if (direction === 'next') {
      // If moving from right-2 to hidden (going off-screen to the right)
      if (previousPosition === 'right-2' && currentPosition === 'hidden') {
        return 'exit-right';
      }
      // If moving from hidden to left-2 (coming in from the left)
      if (previousPosition === 'hidden' && currentPosition === 'left-2') {
        return 'enter-left';
      }
    }
    
    // For "prev" direction (carousel moves right)
    if (direction === 'prev') {
      // If moving from left-2 to hidden (going off-screen to the left)
      if (previousPosition === 'left-2' && currentPosition === 'hidden') {
        return 'exit-left';
      }
      // If moving from hidden to right-2 (coming in from the right)
      if (previousPosition === 'hidden' && currentPosition === 'right-2') {
        return 'enter-right';
      }
    }
    
    return '';
  };

  // Get specific transition styles based on position and animation needs
  const getTransitionStyle = (index: number) => {
    const position = getPositionClass(index);
    const animationClass = getAnimationClass(index);
    const previousPosition = previousPositions[index];
    
    const isWrapping = animationClass !== '';
    
    // Different timing for different transitions
    let transitionDuration = isWrapping ? "1200ms" : "600ms";
    
    // Customize timing function based on the transition type
    let transitionTimingFunction = isWrapping 
      ? "cubic-bezier(0.42, 0.0, 0.58, 1.0)" // Enhanced easing for wrapping transitions
      : "cubic-bezier(0.455, 0.030, 0.515, 0.955)"; // Regular easing
    
    // For specific animation cases, we'll use the keyframe animations instead
    const useKeyframeAnimation = animationClass !== '';
    
    return {
      transitionDuration,
      transitionTimingFunction,
      useKeyframeAnimation,
      animationClass
    };
  };

    return (
      <div className="relative w-full min-h-screen mt-16">
        {/* Main section with background image */}
        <div className="relative h-screen">
          {/* Background image only for main section */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 opacity-100">
              <Image 
                src={bgImage} 
                alt="Auto parts background" 
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[rgba(241,233,146,1.7)] to-transparent"></div>

          </div>
          
          
          {/* VST AUTO PARTS Title */}
          <div className="relative z-10 pt-16 pb-8 text-center">
            <h1 className="text-5xl font-bold tracking-wider text-black">VST AUTO PARTS</h1>
          </div>

          {/* 5-Image Carousel Slider */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 mb-12 h-[700px]">
            <div className="relative h-full flex items-center justify-center perspective-1000">
              <div className="carousel-container relative w-full h-full">
                {images.map((img, index) => {
                  const positionClass = getPositionClass(index);
                  const {transitionDuration, transitionTimingFunction, useKeyframeAnimation, animationClass} = getTransitionStyle(index);
                  
                  return (
                    <div
                      key={index}
                      className={`carousel-item absolute top-0 left-0 cursor-pointer ${positionClass} ${animationClass}`}
                      onClick={() => handleImageClick(index)}
                      style={{
                        zIndex: positionClass === 'center' ? 90 : 
                                 positionClass === 'left-1' || positionClass === 'right-1' ? 80 :
                                 positionClass === 'left-2' || positionClass === 'right-2' ? 30 : 1,
                        width: positionClass === 'center' ? '40%' : '30%',
                        height: positionClass === 'center' ? '80%' : '70%',
                        top: '50%',
                        left: '50%',
                        transform: positionClass === 'center' ? 'translate(-50%, -50%) scale(1) rotateY(0)' :
                                   positionClass === 'left-1' ? 'translate(-140%, -50%) scale(1) rotateY(45deg)' :
                                   positionClass === 'right-1' ? 'translate(40%, -50%) scale(1) rotateY(-45deg)' :
                                   positionClass === 'left-2' ? 'translate(-205%, -50%) scale(0.9) rotateY(65deg)' :
                                   positionClass === 'right-2' ? 'translate(105%, -50%) scale(0.9) rotateY(-65deg)' :
                                   'translate(-50%, -50%) scale(0.5) rotateY(0)',
                        opacity: positionClass === 'hidden' ? 0 : 1,
                        filter: positionClass === 'center' ? 'none' : 'brightness(0.7)',
                        aspectRatio: positionClass === 'center' ? '1/1' : 'auto',
                        // Only use transition for non-animated elements
                        transition: !useKeyframeAnimation ? 
                          `transform ${transitionDuration} ${transitionTimingFunction}, 
                           opacity ${transitionDuration} ${transitionTimingFunction}, 
                           filter ${transitionDuration} ${transitionTimingFunction},
                           width ${transitionDuration} ${transitionTimingFunction},
                           height ${transitionDuration} ${transitionTimingFunction}` : 'none',
                        // For animated elements, apply animation properties
                        animationDuration: useKeyframeAnimation ? transitionDuration : undefined,
                        animationTimingFunction: useKeyframeAnimation ? transitionTimingFunction : undefined,
                        animationFillMode: 'forwards'
                      }}
                    >
                      <div className="w-full h-full relative rounded-4xl overflow-hidden shadow-xl">
                        <Image 
                          src={img}
                          alt={`Auto parts image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Navigation Arrows */}
              <button 
                className="absolute left-[5%] top-1/2 -translate-y-1/2 z-50 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full disabled:opacity-50"
                onClick={goToPrevSlide}
              >
                ←
              </button>
              <button 
                className="absolute right-[5%] top-1/2 -translate-y-1/2 z-50 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full disabled:opacity-50"
                onClick={goToNextSlide}
                disabled={isTransitioning}
              >
                →
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleImageClick(index)}
                  className={`w-3 h-3 rounded-full ${
                    activeIndex === index ? "bg-black" : "bg-white/50"
                  }`}
                  disabled={isTransitioning}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Location section with its own gradient background */}
        <div className="relative min-h-[300px]">
          {/* Gradient background for location section */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              background: `
                linear-gradient(161.25deg, rgba(241, 233, 146, 1) 50.56%, rgba(241, 233, 146, 0) 107.23%)
                `,
              // Remove mix-blend-mode to ensure gradient shows properly
            }}
          />
          <div className="relative z-10 max-w-6xl mx-auto px-8 py-12">
            {/* Company information section */}
            <div className="mb-10 text-black">
              <p className=" text-lg">
                Founded in 2005, VST Auto Parts enables Tata dealers to go the extra mile in providing effective, timely after-sales service with quick access to original spare parts.
              </p>
              <p className="mb-4 text-lg">
                VST Auto Parts supply Tata Motors parts across Tamil Nadu, with the central warehouse spanning 15,000 square feet in Poonamallee, Chennai. This the central supply centre for a network of 2 warehouses located in Vellore and Cuddalore. The network supplies over 3300 line items to more than 1200 retailers in the state. VST Auto Parts has registered a steady annual growth rate of 20% since its inception.
              </p>
            </div>
            
            {/* Location section */}
           
          </div>
          <LocationSection />
          <div className="relative z-10 w-full overflow-visible">
            <BusinessSectors/>
          </div>
          <div className="w-full flex justify-center py-8 sm:py-12 lg:py-20">
          <Logo />
        </div>
        
                </div>

        {/* Add custom CSS for the perspective effect and animations */}
        <style jsx>{`
          .perspective-1000 {
            perspective: 1500px;
          }
          
          .carousel-container {
            transform-style: preserve-3d;
            position: relative;
            width: 100%;
            height: 100%;
          }
          
          .carousel-item {
            position: absolute;
            backface-visibility: hidden;
            transform-origin: center center;
          }
          
          /* Keyframe animations for smoother wrapping with more steps */
          @keyframes exit-right {
            0% { transform: translate(100%, -50%) scale(0.7) rotateY(-40deg); opacity: 1; }
            20% { transform: translate(120%, -50%) scale(0.65) rotateY(-55deg); opacity: 0.9; }
            40% { transform: translate(150%, -50%) scale(0.6) rotateY(-80deg); opacity: 0.7; }
            60% { transform: translate(200%, -50%) scale(0.55) rotateY(-100deg); opacity: 0.5; }
            80% { transform: translate(250%, -50%) scale(0.45) rotateY(-140deg); opacity: 0.2; }
            100% { transform: translate(300%, -50%) scale(0.4) rotateY(-180deg); opacity: 0; }
          }
          
          @keyframes enter-left {
            0% { transform: translate(-300%, -50%) scale(0.4) rotateY(180deg); opacity: 0; }
            20% { transform: translate(-270%, -50%) scale(0.45) rotateY(140deg); opacity: 0.2; }
            40% { transform: translate(-240%, -50%) scale(0.55) rotateY(100deg); opacity: 0.5; }
            60% { transform: translate(-220%, -50%) scale(0.6) rotateY(80deg); opacity: 0.7; }
            80% { transform: translate(-210%, -50%) scale(0.65) rotateY(55deg); opacity: 0.9; }
            100% { transform: translate(-200%, -50%) scale(0.7) rotateY(40deg); opacity: 1; }
          }
          
          @keyframes exit-left {
            0% { transform: translate(-200%, -50%) scale(0.7) rotateY(40deg); opacity: 1; }
            20% { transform: translate(-220%, -50%) scale(0.65) rotateY(55deg); opacity: 0.9; }
            40% { transform: translate(-240%, -50%) scale(0.6) rotateY(80deg); opacity: 0.7; }
            60% { transform: translate(-260%, -50%) scale(0.55) rotateY(100deg); opacity: 0.5; }
            80% { transform: translate(-280%, -50%) scale(0.45) rotateY(140deg); opacity: 0.2; }
            100% { transform: translate(-300%, -50%) scale(0.4) rotateY(180deg); opacity: 0; }
          }
          
          @keyframes enter-right {
            0% { transform: translate(300%, -50%) scale(0.4) rotateY(-180deg); opacity: 0; }
            20% { transform: translate(250%, -50%) scale(0.45) rotateY(-140deg); opacity: 0.2; }
            40% { transform: translate(200%, -50%) scale(0.55) rotateY(-100deg); opacity: 0.5; }
            60% { transform: translate(150%, -50%) scale(0.6) rotateY(-80deg); opacity: 0.7; }
            80% { transform: translate(120%, -50%) scale(0.65) rotateY(-55deg); opacity: 0.9; }
            100% { transform: translate(100%, -50%) scale(0.7) rotateY(-40deg); opacity: 1; }
          }
          
          .exit-right {
            animation-name: exit-right;
          }
          
          .enter-left {
            animation-name: enter-left;
          }
          
          .exit-left {
            animation-name: exit-left;
          }
          
          .enter-right {
            animation-name: enter-right;
          }
        `}</style>
      </div>
    );
}
  