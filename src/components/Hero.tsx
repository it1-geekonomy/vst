import Image from "next/image";
import React, { useState, useEffect } from "react";

// import slide1 from "@/app/public/slid1.png";
// import slide2 from "@/app/public/slid 2.png";
// import slide3 from "@/app/public/slide.png";

import slide1 from "@/app/public/hero-section/Image 1.png";
import slide2 from "@/app/public/hero-section/Image 5.png";
import slide3 from "@/app/public/hero-section/image 3.png";
import slide4 from "@/app/public/hero-section/Image 4.png";
import slide5 from "@/app/public/hero-section/Image 6.png";

const slides = [
  {
    id: 5,
    image: slide5,
    // title: "LUXURY REDEFINED",
    // subtitle: "EXPERIENCE THE EXTRAORDINARY",
    label: "Premium Motors",
    color: "from-green-600/80 to-green-800/80",
  },
  {
    id: 4,
    image: slide4,
    // title: "AUTOMOTIVE EXCELLENCE",
    // subtitle: "PREMIUM MOBILITY SOLUTIONS",
    label: "Automotive Division",
    color: "from-blue-600/80 to-blue-800/80",
  },
  {
    id: 3,
    image: slide3,
    // title: "LUXURY REDEFINED",
    // subtitle: "EXPERIENCE THE EXTRAORDINARY",
    label: "Premium Motors",
    color: "from-green-600/80 to-green-800/80",
  },
  {
    id: 2,
    image: slide2,
    // title: "AUTOMOTIVE EXCELLENCE",
    // subtitle: "PREMIUM MOBILITY SOLUTIONS",
    label: "Automotive Division",
    color: "from-blue-600/80 to-blue-800/80",
  },
  {
    id: 1,
    image: slide1,
    // title: "BUILDING TOMORROW",
    // subtitle: "ON A CENTURY OF TRUST",
    label: "Mercedes-Benz",
    color: "from-red-600/80 to-red-800/80", // Gradient colors for strips
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(4);
  const [showImages, setShowImages] = useState(slides);
  const [isMobile, setIsMobile] = useState(false);

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
      <section className="relative h-[80vh] overflow-hidden bg-black/5">
        <div className="relative h-full w-full flex items-center justify-center">
          {/* Current slide */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-[60vh]"> 
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
            </div>
          </div>
          
          {/* Slide label */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black/50 px-4 py-2 rounded z-10">
            <span className="text-white font-medium text-lg">{slides[currentSlide].label}</span>
          </div>
          
          {/* Navigation buttons */}
          <div className="absolute inset-x-0 top-[30vh] flex items-center justify-between px-4 z-10">
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

  // Desktop view - original implementation
  return (
    <section className="relative h-screen overflow-hidden">
      <div 
        className="relative h-full w-full flex flex-row"
        style={{ willChange: "contents" }}
      >
        {/* Navigation Strips */}
        {showImages.map((slide, index) => (
          <div
            key={slide.id}
            className={`relative ${currentSlide === index ? "w-full" : "w-15 sm:w-26 md:w-36 cursor-pointer"} shadow-2xl`}
            style={{
              transition: "width 1500ms cubic-bezier(0.25, 0.1, 0.25, 1)",
              willChange: "width",
              boxShadow: currentSlide !== index ? 
                "-8px 0 15px 5px rgba(0,0,0,0.3), -20px 0 30px 8px rgba(0,0,0,0.07), 0 0 50px 15px rgba(80, 80, 80, 0.8)" : 
                "none",
            }}
            onClick={() => handleSlideClick(index)}
          >
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={slide.image}
                alt={slide.label}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: currentSlide === index ? "center" : "0% center",
                  opacity: currentSlide === index ? 1 : 0.9,
                  transform: `translate3d(0, 0, 0) scale(${currentSlide === index ? 1 : 1.1})`,
                  transition: "all 1500ms cubic-bezier(0.25, 0.1, 0.25, 1)",
                  willChange: "transform, opacity"
                }}
                priority={index === 0}
              />
            </div>

            {/* Label for inactive slides */}
            {currentSlide !== index && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-60">
                <span 
                  className="text-white font-bold -rotate-90 transform whitespace-nowrap text-base sm:text-lg md:text-xl lg:text-3xl drop-shadow-lg"
                  style={{
                    transition: "opacity 900ms ease-in-out"
                  }}
                >
                  {slide.label}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;