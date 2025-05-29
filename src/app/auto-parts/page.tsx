"use client";
import { useState, useEffect, useRef, TouchEvent } from "react";
import Image from "next/image";
import img1 from "@/app/public/vst-auto-parts/frame1.png";
import img2 from "@/app/public/vst-auto-parts/frame2.png";
import img3 from "@/app/public/vst-auto-parts/frame3.png";
import img4 from "@/app/public/vst-auto-parts/frame4.png";
import img5 from "@/app/public/vst-auto-parts/frame5.png";
import bgImage from "@/app/public/vst-auto-parts/bgimg.jpeg";
import LocationSection from "@/components/LocationSection";
import gif from "@/app/public/education/vst logo gif.gif";
import BusinessSectorsUpdated from "@/components/automotiveFranchises/BusinessSectorsUpdated";
import VSTLogoAnimation from "@/components/VSTLogoAnimation";

export default function Page() {
  const gradientColor = "rgba(255, 185, 34, 1)";
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev" | null>(null);
  const [previousPositions, setPreviousPositions] = useState<{
    [key: number]: string;
  }>({});

  // Touch swipe handling for mobile/tablet
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const touchSensitivity = 50; // Minimum swipe distance

  // Refs for mobile slider
  const mobileSliderRef = useRef<HTMLDivElement>(null);

  // Use the imported images
  const images = [img1, img4, img5, img3, img2];

  // Mobile and tablet swipe handlers
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > touchSensitivity;

    if (isSwipe && !isTransitioning) {
      if (distance > 0) {
        // Swipe left, go to next slide
        goToNextSlide();
      } else {
        // Swipe right, go to previous slide
        goToPrevSlide();
      }
    }

    // Reset touch values
    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleImageClick = (index: number) => {
    if (isTransitioning) return;

    // Store previous positions before changing activeIndex
    const prevPositions: { [key: number]: string } = {};
    images.forEach((_, imgIndex) => {
      prevPositions[imgIndex] = getPositionClass(imgIndex);
    });
    setPreviousPositions(prevPositions);

    // Determine direction
    const currentPos = activeIndex;
    const clickedPos = index;

    // Determine if we should go next or prev
    const distForward =
      (clickedPos - currentPos + images.length) % images.length;
    const distBackward =
      (currentPos - clickedPos + images.length) % images.length;

    setDirection(distForward <= distBackward ? "next" : "prev");
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
    const prevPositions: { [key: number]: string } = {};
    images.forEach((_, imgIndex) => {
      prevPositions[imgIndex] = getPositionClass(imgIndex);
    });
    setPreviousPositions(prevPositions);

    setDirection("prev");
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
    const prevPositions: { [key: number]: string } = {};
    images.forEach((_, imgIndex) => {
      prevPositions[imgIndex] = getPositionClass(imgIndex);
    });
    setPreviousPositions(prevPositions);

    setDirection("next");
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

    if (!isTransitioning || !previousPosition) return "";

    // For "next" direction (carousel moves left)
    if (direction === "next") {
      // If moving from right-2 to hidden (going off-screen to the right)
      if (previousPosition === "right-2" && currentPosition === "hidden") {
        return "exit-right";
      }
      // If moving from hidden to left-2 (coming in from the left)
      if (previousPosition === "hidden" && currentPosition === "left-2") {
        return "enter-left";
      }
    }

    // For "prev" direction (carousel moves right)
    if (direction === "prev") {
      // If moving from left-2 to hidden (going off-screen to the left)
      if (previousPosition === "left-2" && currentPosition === "hidden") {
        return "exit-left";
      }
      // If moving from hidden to right-2 (coming in from the right)
      if (previousPosition === "hidden" && currentPosition === "right-2") {
        return "enter-right";
      }
    }

    return "";
  };

  // Get specific transition styles based on position and animation needs
  const getTransitionStyle = (index: number) => {
    const position = getPositionClass(index);
    const animationClass = getAnimationClass(index);
    const previousPosition = previousPositions[index];

    const isWrapping = animationClass !== "";

    // Different timing for different transitions
    let transitionDuration = isWrapping ? "1200ms" : "600ms";

    // Customize timing function based on the transition type
    let transitionTimingFunction = isWrapping
      ? "cubic-bezier(0.42, 0.0, 0.58, 1.0)" // Enhanced easing for wrapping transitions
      : "cubic-bezier(0.455, 0.030, 0.515, 0.955)"; // Regular easing

    // For specific animation cases, we'll use the keyframe animations instead
    const useKeyframeAnimation = animationClass !== "";

    return {
      transitionDuration,
      transitionTimingFunction,
      useKeyframeAnimation,
      animationClass,
    };
  };

  // Function to get responsive dimensions for carousel items
  const getResponsiveItemStyle = (
    positionClass: string,
    isMobileView: boolean
  ) => {
    // If it's desktop view (lg and above) or not mobile view, use original desktop settings
    if (!isMobileView) {
      return {
        zIndex:
          positionClass === "center"
            ? 90
            : positionClass === "left-1" || positionClass === "right-1"
              ? 80
              : positionClass === "left-2" || positionClass === "right-2"
                ? 30
                : 1,
        width: positionClass === "center" ? "40%" : "30%",
        height: positionClass === "center" ? "80%" : "70%",
        transform:
          positionClass === "center"
            ? "translate(-50%, -50%) scale(1) rotateY(0)"
            : positionClass === "left-1"
              ? "translate(-140%, -50%) scale(1) rotateY(45deg)"
              : positionClass === "right-1"
                ? "translate(40%, -50%) scale(1) rotateY(-45deg)"
                : positionClass === "left-2"
                  ? "translate(-205%, -50%) scale(0.9) rotateY(65deg)"
                  : positionClass === "right-2"
                    ? "translate(105%, -50%) scale(0.9) rotateY(-65deg)"
                    : "translate(-50%, -50%) scale(0.5) rotateY(0)",
        opacity: positionClass === "hidden" ? 0 : 1,
        filter: positionClass === "center" ? "none" : "brightness(0.7)",
      };
    }

    // Mobile and tablet specific styles
    const baseStyles = {
      zIndex:
        positionClass === "center"
          ? 90
          : positionClass === "left-1" || positionClass === "right-1"
            ? 80
            : positionClass === "left-2" || positionClass === "right-2"
              ? 30
              : 1,
      opacity: positionClass === "hidden" ? 0 : 1,
      filter: positionClass === "center" ? "none" : "brightness(0.7)",
    };

    // Screen size dependent transforms
    let transform = "";
    let width = "";
    let height = "";

    // For mobile screens (default)
    if (positionClass === "center") {
      width = "80%"; // Larger on mobile
      height = "60%";
      transform = "translate(-50%, -50%) scale(1) rotateY(0)";
    } else if (positionClass === "left-1") {
      width = "0"; // Hide side images on small screens
      height = "0";
      transform = "translate(-120%, -50%) scale(0.8) rotateY(45deg)";
    } else if (positionClass === "right-1") {
      width = "0"; // Hide side images on small screens
      height = "0";
      transform = "translate(20%, -50%) scale(0.8) rotateY(-45deg)";
    } else if (positionClass === "left-2" || positionClass === "right-2") {
      width = "0"; // Hide far side images on small screens
      height = "0";
      transform =
        positionClass === "left-2"
          ? "translate(-180%, -50%) scale(0.7) rotateY(65deg)"
          : "translate(80%, -50%) scale(0.7) rotateY(-65deg)";
    } else {
      width = "0";
      height = "0";
      transform = "translate(-50%, -50%) scale(0.5) rotateY(0)";
    }

    return {
      ...baseStyles,
      width,
      height,
      transform,
    };
  };

  // For mobile slider animations
  useEffect(() => {
    if (mobileSliderRef.current) {
      const slider = mobileSliderRef.current;

      // Set initial position
      slider.style.transition = "none";
      slider.style.transform = `translateX(-${activeIndex * 100}%)`;

      // Force reflow to apply the initial style before adding transition
      slider.offsetHeight;

      // Add transition for smooth slide effect
      slider.style.transition = "transform 0.5s ease-in-out";
      slider.style.transform = `translateX(-${activeIndex * 100}%)`;
    }
  }, [activeIndex]);

  return (
    <div className="relative w-full min-h-screen mt-16">
      {/* Main section with background image */}
      <div className="relative h-[65vh] sm:h-[85vh] md:h-[100vh] lg:h-[110vh] xl:h-[145vh] 2xl:h-screen">
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
          <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 lg:h-32 bg-gradient-to-t from-[#FFB922] to-transparent"></div>
        </div>

        {/* VST AUTO PARTS Title */}
        <div className="relative z-10 pt-8 sm:pt-12 lg:pt-16 pb-4 sm:pb-6 lg:pb-0 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-[50px] xl:text-[80px] 2xl:text-[70px] 3xl:text-[100px] font-normal tracking-wider text-black">
            VST AUTO PARTS
          </h1>
        </div>

        {/* Responsive Carousel Slider */}
        <div className="relative z-10 max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl mx-auto mb-8 sm:mb-12 h-[250px] sm:h-[340px] md:h-[450px] lg:h-[500px] xl:h-[580px] 2xl:h-[650px] xl:mt-0 2xl:mt-0 3xl:mt-0">
          {/* Desktop 3D Carousel - only visible on large screens */}
          <div className="relative hidden lg:flex h-full items-center justify-center perspective-1500">
            <div className="carousel-container relative w-full h-full">
              {images.map((img, index) => {
                const positionClass = getPositionClass(index);
                const {
                  transitionDuration,
                  transitionTimingFunction,
                  useKeyframeAnimation,
                  animationClass,
                } = getTransitionStyle(index);
                const responsiveStyle = getResponsiveItemStyle(
                  positionClass,
                  false
                ); // Always use desktop styles

                return (
                  <div
                    key={index}
                    className={`carousel-item absolute top-0 left-0 w-full h-full cursor-pointer ${positionClass} ${animationClass}`}
                    onClick={() => handleImageClick(index)}
                    style={{
                      zIndex: responsiveStyle.zIndex,
                      width: responsiveStyle.width,
                      height: responsiveStyle.height,
                      top: "50%",
                      left: "50%",
                      transform: responsiveStyle.transform,
                      opacity: responsiveStyle.opacity,
                      filter: responsiveStyle.filter,
                      aspectRatio: positionClass === "center" ? "1/1" : "auto",
                      transition: !useKeyframeAnimation
                        ? `transform ${transitionDuration} ${transitionTimingFunction}, 
                           opacity ${transitionDuration} ${transitionTimingFunction}, 
                           filter ${transitionDuration} ${transitionTimingFunction},
                           width ${transitionDuration} ${transitionTimingFunction},
                           height ${transitionDuration} ${transitionTimingFunction}`
                        : "none",
                      animationDuration: useKeyframeAnimation
                        ? transitionDuration
                        : undefined,
                      animationTimingFunction: useKeyframeAnimation
                        ? transitionTimingFunction
                        : undefined,
                      animationFillMode: "forwards",
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
          </div>

          {/* Mobile & Tablet slider - simplified swipeable version for small to medium screens */}
          <div
            className="lg:hidden w-full h-full relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Mobile slider track that moves horizontally */}
            <div
              ref={mobileSliderRef}
              className={`grid w-full h-full transition-transform duration-500 ease-in-out`}
              style={{
                gridTemplateColumns: `repeat(${images.length}, 100%)`,
                width: "100%",
                height: "100%",
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {images.map((img, index) => (
                <div
                  key={index}
                  className="w-full h-full relative"
                  style={{ width: "100%", height: "100%" }}
                >
                  <Image
                    src={img}
                    alt={`Auto parts image ${index + 1}`}
                    fill
                    className="object-cover"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots and Navigation Buttons - Updated to match design */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-1 sm:space-x-2">
            {/* Left Arrow Button */}
            <button
              className="text-black px-2 rounded-full text-xl disabled:opacity-50"
              onClick={goToPrevSlide}
              disabled={isTransitioning}
            >
              ←
            </button>

            {/* Pagination Dots */}
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleImageClick(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                  activeIndex === index ? "bg-black" : "bg-white/50"
                }`}
                disabled={isTransitioning}
              />
            ))}

            {/* Right Arrow Button */}
            <button
              className="text-black px-2 rounded-full text-xl disabled:opacity-50"
              onClick={goToNextSlide}
              disabled={isTransitioning}
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Location section with its own gradient background */}
      <div className="relative min-h-[200px] sm:min-h-[250px] lg:min-h-[300px]">
        {/* Gradient background for location section */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
                linear-gradient(161.25deg, rgba(255, 185, 34, 1) 50.56%, rgba(241, 233, 146, 0) 107.23%)
                `,
          }}
        />

        <div className="relative z-10 max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0 py-2 sm:py-15 lg:py-12 xl:py-0 2xl:py-18 3xl:py-0">
          {/* Company information section */}
          <div className="mb-6 sm:mb-8 lg:mb-10 text-black w-full text-justify">
            <p className="text-base sm:text-lg lg:text-xl xl:text-[25px] 2xl:text-[26px] 3xl:text-[30px] leading-[1.6]">
              Founded in 2005, VST Auto Parts enables Tata dealers to go the
              extra mile in providing effective, timely after-sales service with
              quick access to original spare parts.
            </p>
            <p className="mt-2 sm:mt-3 lg:mt-4 text-base sm:text-lg lg:text-xl xl:text-[25px] 2xl:text-[26px] 3xl:text-[30px]  leading-[1.6]">
              VST Auto Parts supply Tata Motors parts across Tamil Nadu, with
              the central warehouse spanning 15,000 square feet in Poonamallee,
              Chennai. This the central supply centre for a network of 2
              warehouses located in Vellore and Cuddalore. The network supplies
              over 3300 line items to more than 1200 retailers in the state. VST
              Auto Parts has registered a steady annual growth rate of 20% since
              its inception.
            </p>
            <div className="flex justify-left mt-6">
              <button
                className="
                  px-6 py-2
                  bg-white
                  text-black
                  rounded
                  shadow
                  hover:bg-gray-200
                  transition
                  text-sm
                  sm:text-lg
                  font-normal
                  border border-gray-300
                  w-full
                  max-w-xs
                "
              >
                Explore Now
              </button>
            </div>
          </div>
        </div>
        <div className="text-black">
          <LocationSection
            locationImage="vst-auto-parts/location img.png"
            address={{
              street: "Old No. 144, New No. 199,",
              street2: "1st Floor, Anna Salai,",
              state: "Chennai - 600 002, Tamil Nadu.",
              city: "",
              pincode: "",
            }}
            phoneNumbers={[
              "+91 44-2860 2485",
              "+91 44-2860 2486",
              "+91 44-2860 2487",
            ]}
            googleMapsUrl="https://www.google.com/maps/place/VST+Motors/@13.0626463,80.2615032,17z/data=!3m1!5s0x3a52661712800ddd:0x9763c5b415119093!4m14!1m7!3m6!1s0x3a5266170d73c381:0xb1a2f46c2795a4b1!2sVST+Motors!8m2!3d13.0626463!4d80.2640781!16s%2Fg%2F1tp8ygm7!3m5!1s0x3a5266170d73c381:0xb1a2f46c2795a4b1!8m2!3d13.0626463!4d80.2640781!16s%2Fg%2F1tp8ygm7?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
          />
        </div>
        <div className="relative z-10 w-full overflow-visible -mt-10 scale-110">
          <BusinessSectorsUpdated />
        </div>
        <div className="relative w-full ">
          <VSTLogoAnimation />
        </div>
      </div>

      {/* Add custom CSS for the perspective effect and animations */}
      <style>{`
          .perspective-1000 {
            perspective: 1000px;
          }
          
          .perspective-1500 {
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
