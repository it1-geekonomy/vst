"use client";
import Image from "next/image";
import bg from "@/app/public/news-and-media/bgnews.jpeg";
import { useState, useEffect } from "react";
import imgcard1 from "@/app/public/news-and-media/frame6.png";
import imgcard2 from "@/app/public/news-and-media/frame9.png";
import imgcard3 from "@/app/public/news-and-media/frame7.png";

import imgcard4 from "@/app/public/news-and-media/frame2.png";
import imgcard5 from "@/app/public/news-and-media/frame4.png";

export default function NewsMedia() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const headlines = [
    "Lorem ipsum dolor sit amet consectetur.",
    "Experience the luxury of German engineering.",
    "Visit us today to explore the latest models."
  ];
  
  const cards = [
    {
      image: imgcard1,
      alt: "Porsche Showroom Opening",
      title: "We Are Now Open",
      text: "Exciting times ahead! Introducing our stunning new Porsche showroom in Whitefield."
    },
    {
      image: imgcard2,
      alt: "Team Photo",
      title: "Meet Our Team",
      text: "Experience the luxury of German engineering with our expert team of professionals"
    },
    {
      image: imgcard3,
      alt: "Latest Models",
      title: "New Arrivals",
      text: "Visit our showroom today to explore the latest models and exciting offers"
    },
    {
      image: imgcard4,
      alt: "Latest Models",
      title: "New Arrivals",
      text: "Visit our showroom today to explore the latest models and exciting offers"
    },
    {
      image: imgcard5,
      alt: "Latest Models",
      title: "New Arrivals",
      text: "Visit our showroom today to explore the latest models and exciting offers"
    }

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headlines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[100vh]">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image 
          src={bg} 
          alt="News Background" 
          fill 
          className="object-cover"
          priority
        />
        
        {/* Main Content with Popular This Week sidebar */}
        <div className="absolute inset-0 z-20">
          <div className="container mx-auto h-full">
            <div className="flex h-full">
              {/* Left content - 60% */}
              <div className="w-full lg:w-[60%] flex flex-col items-center">
                <div className="w-full max-w-3xl px-8 h-full flex flex-col">
                  {/* Hero Title */}
                  <div className="flex items-center pt-92 h-[200px]">
                    <div className="relative h-full flex items-center">
                      {headlines.map((headline, index) => (
                        <h1 
                          key={index}
                          className={`text-white text-5xl md:text-6xl lg:text-7xl font-bold max-w-lg leading-tight absolute transition-all duration-1000 ${
                            currentIndex === index 
                              ? "opacity-100 translate-x-0" 
                              : index === (currentIndex + 1) % headlines.length || (currentIndex === headlines.length - 1 && index === 0)
                                ? "opacity-0 translate-x-full" 
                                : "opacity-0 -translate-x-full"
                          }`}
                        >
                          {headline}
                        </h1>
                      ))}
                    </div>
                  </div>
                  
                  {/* News Cards - positioned at bottom with animation */}
                  <div className="w-full mt-auto mb-16 relative overflow-hidden">
                    <div className="relative h-[220px]">
                      {cards.map((card, index) => (
                        <div 
                          key={index} 
                          className={`absolute top-0 left-0 w-full grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-1000 ${
                            currentIndex === index 
                              ? "opacity-100 translate-x-0" 
                              : index === (currentIndex + 1) % cards.length || (currentIndex === cards.length - 1 && index === 0)
                                ? "opacity-0 translate-x-full" 
                                : "opacity-0 -translate-x-full"
                          }`}
                        >
                          {/* Featured News Card with orange left border */}
                          <div className="relative border-l-4 border-yellow-500 bg-white/10 backdrop-blur-sm min-h-[220px] overflow-hidden">
                            <div className="flex flex-col h-full px-4 py-6 ">
                              <div className="w-full h-22 relative">
                                <Image 
                                  src={card.image} 
                                  alt={card.alt} 
                                  fill
                                  className="object-cover pr-38 py-1"
                                />
                                
                              </div>
                              <div className="w-full pt-3 {card.text}">
                              <p className="text-medium font-semibold text-white leading-tight text-center w-full px-2">
                              {card.text}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Second News Card */}
                          <div className="relative  backdrop-blur-sm min-h-[220px] overflow-hidden">
                            <div className="flex flex-col h-full px-4 py-6 ">
                              <div className="w-full h-22 relative">
                                <Image 
                                  src={cards[(index + 1) % cards.length].image} 
                                  alt={cards[(index + 1) % cards.length].alt} 
                                  fill
                                  className="object-cover pr-38 py-1  "
                                />
                               
                              </div>
                              <div className="w-full pt-3">
                              <p className="text-medium font-semibold text-white leading-tight text-center w-full px-2">
                              {cards[(index + 1) % cards.length].text}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right sidebar - Popular This Week - 40% */}
              <div className="hidden lg:flex w-[40%] flex-col justify-end ">
                <div className="bg-black/70 h-[85vh] w-full overflow-hidden flex flex-col bg-white/10 backdrop-blur-sm">
                  <div className="flex flex-col h-full px-12 pt-16 pb-8">
                    <h2 className="text-4xl font-bold mb-8 text-white">Popular this week</h2>
                    <div className="space-y-4 flex-grow overflow-y-auto hideScrollbar">
                      {cards.map((item, index) => (
                        <div key={index} className="flex gap-1 items-center justify-center h-28 transition-all duration-200 hover:bg-yellow-500/20 cursor-pointer rounded">
                          <div className="w-5/12 relative h-full">
                            <Image 
                              src={item.image} 
                              alt={item.alt} 
                              width={100}
                              height={80}
                              className="w-full h-full object-cover"
                            />
                            {index === 0 && (
                              <div className="absolute flex justify-center items-center bottom-0 left-0 bg-black text-white text-xs py-1 px-2">
                                {item.title}
                              </div>
                            )}
                          </div>
                          <div className="w-7/12 h-full flex items-center justify-center">
                            <p className="text-base font-semibold text-white leading-tight text-center w-full px-2">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center items-end mt-1">
                      <button className="text-yellow-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
