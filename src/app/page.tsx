"use client";
import Image from "next/image";
import { useState } from "react";
import slide1 from "@/app/public/slid1.png";
import slide2 from "@/app/public/slid 2.png";
import slide3 from "@/app/public/slide.png";
import Initiatives from "@/components/Initiatives";
import LifeAtVst from "@/components/LifeAtVst";
import ContactUs from "@/components/GetInTouch";
import Footer from "@/components/Footer";
import OurMilestone from "@/components/OurMilestone";
import EmpoweringScroll from "@/components/EmpoweringScroll";
// import slide4 from "@/app/public/slide4.jpg";
// import slide5 from "@/app/public/slide5.jpg";
// import slide6 from "@/app/public/slide6.jpg";

const slides = [
  {
    id: 1,
    image: slide1,
    title: "BUILDING TOMORROW",
    subtitle: "ON A CENTURY OF TRUST",
    label: "Mercedes-Benz",
    color: "from-red-600/80 to-red-800/80", // Gradient colors for strips
  },
  {
    id: 2,
    image: slide2,
    title: "AUTOMOTIVE EXCELLENCE",
    subtitle: "PREMIUM MOBILITY SOLUTIONS",
    label: "Automotive Division",
    color: "from-blue-600/80 to-blue-800/80",
  },
  {
    id: 3,
    image: slide3,
    title: "LUXURY REDEFINED",
    subtitle: "EXPERIENCE THE EXTRAORDINARY",
    label: "Premium Motors",
    color: "from-green-600/80 to-green-800/80",
  },
  // {
  //   id: 4,
  //   image: "/slide4.jpg",
  //   title: "PERFORMANCE & PASSION",
  //   subtitle: "DRIVING THE FUTURE",
  //   label: "AMG Performance",
  // },
  // {
  //   id: 5,
  //   image: "/slide5.jpg",
  //   title: "SERVICE EXCELLENCE",
  //   subtitle: "DEDICATED TO PERFECTION",
  //   label: "After Sales",
  // },
  // {
  //   id: 6,
  //   image: "/slide6.jpg",
  //   title: "HERITAGE & INNOVATION",
  //   subtitle: "LEADING THE WAY",
  //   label: "VST Group",
  // },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState<number>(2);

  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Hero Section with Slider */}
      <section className="relative h-screen overflow-hidden">
        <div className="relative h-full w-full flex flex-row">
          {/* Navigation Strips */}
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`relative transition-all duration-700 ease-in-out ${
                currentSlide === index
                  ? "w-full"
                  : "w-20 sm:w-24 md:w-34 cursor-pointer"
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.label}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    currentSlide === index
                      ? "opacity-100 scale-100"
                      : "opacity-90 scale-110"
                  }`}
                  priority={index === 0}
                />

                {/* Colored overlay with gradient */}
                {/* <div
                  className={`absolute inset-0 w-full h-full transition-all duration-700 bg-gradient-to-b ${
                    currentSlide === index
                      ? "opacity-0"
                      : `${slide.color} opacity-80`
                  }`}
                /> */}

               
            
              </div>

              {/* Content */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                  currentSlide === index
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-90"
                }`}
              >
                {currentSlide === index && (
                  <div className="relative flex flex-col items-center justify-center text-white p-2 sm:p-4">
                    <Image
                      src="/vst-logo-white.png"
                      alt="VST Group"
                      width={150}
                      height={60}
                      className="mb-4 sm:mb-8 w-[120px] sm:w-[200px]"
                    />
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-2 sm:mb-4">
                      {slide.title}
                    </h1>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-center">
                      {slide.subtitle}
                    </h2>
                  </div>
                )}
              </div>

              {/* Label for inactive slides */}
              {currentSlide !== index && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-medium -rotate-90 transform whitespace-nowrap text-sm sm:text-base md:text-lg lg:text-xl drop-shadow-lg">
                    {slide.label}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <OurMilestone />
      {/* Life at VST Section */}
      <LifeAtVst />
      {/* Initiatives Section */}
      
      <EmpoweringScroll />

      <ContactUs />
      <Footer />
    </main>
  );
}
