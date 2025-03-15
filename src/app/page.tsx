"use client";
import Image from "next/image";
import { useState } from "react";
import slide1 from "@/app/public/slid1.png";
import slide2 from "@/app/public/slid 2.png";
import slide3 from "@/app/public/slide.png";
import Initiatives from "@/components/Initiatives";
import FranchiseSlider from "@/components/automotiveFranchises/franchiesMain";
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
  const [currentSlide, setCurrentSlide] = useState(2);

  return (
    <main className="relative min-h-screen bg-black">
      {/* Hero Section with Slider */}
      <section className="relative h-screen">
        <div className="relative h-full w-full flex space-x-0">
          {/* Navigation Strips */}
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`relative transition-all duration-700 ease-in-out ${
                currentSlide === index
                  ? "flex-1"
                  : "w-34 cursor-pointer hover:w-40 group"
              }`}
              style={{ marginLeft: 0 }}
              onClick={() => currentSlide !== index && setCurrentSlide(index)}
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
                      : "opacity-90 scale-110 group-hover:opacity-100 group-hover:scale-105"
                  }`}
                  priority={index === 0}
                />

                {/* Colored overlay with gradient */}
                <div
                  className={`absolute inset-0 transition-all duration-700 bg-gradient-to-b ${
                    currentSlide === index
                      ? "opacity-0"
                      : `${slide.color} group-hover:opacity-75`
                  }`}
                />

                {/* Shadow effect between strips */}
                <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-l from-black/50 to-transparent" />

                {/* Hover indicator line */}
                <div
                  className={`absolute right-0 top-0 bottom-0 w-1 bg-white transform transition-all duration-500 ${
                    currentSlide === index
                      ? "opacity-0"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />
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
                  <div className="relative flex flex-col items-center justify-center text-white p-4">
                    <Image
                      src="/vst-logo-white.png"
                      alt="VST Group"
                      width={200}
                      height={80}
                      className="mb-8"
                    />
                    <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
                      {slide.title}
                    </h1>
                    <h2 className="text-2xl md:text-4xl text-center">
                      {slide.subtitle}
                    </h2>
                  </div>
                )}
              </div>

              {/* Label for inactive slides */}
              {currentSlide !== index && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-medium -rotate-90 transform whitespace-nowrap text-xl drop-shadow-lg group-hover:scale-110 transition-transform">
                    {slide.label}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Initiatives Section */}
      <Initiatives />
      <FranchiseSlider />
    </main>
  );
}
