import Image from "next/image";
import React, { useState } from "react";

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

  // Get correct width based on current index and screen size
  const getWidth = (index: number) => {
    return currentSlide === index ? "100%" : "w-20 sm:w-24 md:w-34";
  };

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
            className={`relative ${currentSlide === index ? "w-full" : "w-20 sm:w-24 md:w-34 cursor-pointer"}`}
            style={{
              transition: "width 1500ms cubic-bezier(0.25, 0.1, 0.25, 1)",
              willChange: "width",
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
              <div className="absolute inset-0 flex items-center justify-center  border-2 border-red-500  bg-white/10 backdrop-blur-sm">
                <span 
                  className="text-white font-medium -rotate-90 transform whitespace-nowrap text-sm sm:text-base md:text-lg lg:text-xl drop-shadow-lg"
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
