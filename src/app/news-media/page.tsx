"use client";
import Image from "next/image";
import bg from "@/app/public/news-and-media/bgnews.jpg";
import { useState, useEffect } from "react";
import imgcard1 from "@/app/public/news-and-media/frame6.png";
import imgcard2 from "@/app/public/news-and-media/frame9.png";
import imgcard3 from "@/app/public/news-and-media/frame7.png";

import imgcard4 from "@/app/public/news-and-media/frame2.png";
import imgcard5 from "@/app/public/news-and-media/frame4.png";
import imgcar from "@/app/public/news-and-media/frame14.png";
import card5 from "@/app/public/images/news/card5.png";
import imcard12 from "@/app/public/news-and-media/frame12.png";
import Frame5 from "@/app/public/news-and-media/frame5.png";
import mahindra1 from "@/app/public/news-and-media/mahindra1.png";


import hcard1 from "@/app/public/news-and-media/Image Placeholder 1.jpg";
import hcard2 from "@/app/public/news-and-media/Image Placeholder 2.jpg";
import hcard3 from "@/app/public/news-and-media/Image Placeholder 3.jpg";
import hcard4 from "@/app/public/news-and-media/Image Placeholder 4.jpg";



import News from "@/components/News";
import VideosSection from "@/components/VideosSection";
import { Contact } from "lucide-react";
import ContactUs from "@/components/GetInTouch";
import Footer from "@/components/Footer";
import { frame } from "framer-motion";

export default function NewsMedia() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const headlines = [
    "Exciting! Our new Porsche showroom is now in Whitefield!",
    "A special moment from our Chennai Finance Team",
    "As a long-standing Ducati dealer partner at VST Group."
  ];
  const headlines2 = [
    {
      image: hcard1,
      alt: "Latest Models",

      // title: "We Are Now Open",
      text: "Exciting times ahead! Introducing our stunning new Porsche showroom in Whitefield.",
      link: " https://www.linkedin.com/posts/vst-motors-ltd_maserati-vstmaserati-southindia-activity-7280809406001258497-GtYy?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD07rHsBD3hdzu_y6g1hbsgIIhmFgoowJHQ",
     
    },
    {
      image: hcard2,
      alt: "Latesaat Models",
      // title: "We Are Now Open",
      text: "A special moment from our Chennai Finance Team, who surprised our Chairman, Arun Surendra, with a thoughtful token of appreciation.",
      link: " https://www.linkedin.com/posts/vst-motors-ltd_maserati-vstmaserati-southindia-activity-7280809406001258497-GtYy?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD07rHsBD3hdzu_y6g1hbsgIIhmFgoowJHQ",
     
    },
    {
      image: hcard3,
      alt: "Latest Models",
      // title: "We Are Now Open",
      text: "As a long-standing Ducati dealer partner at VST Group",
      link: " https://www.linkedin.com/posts/vst-motors-ltd_maserati-vstmaserati-southindia-activity-7280809406001258497-GtYy?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD07rHsBD3hdzu_y6g1hbsgIIhmFgoowJHQ",
     
    },
    {
      image: hcard4,
      alt: "Latest Models",
      // title: "We Are Now Open",
      text: "Another milestone on the road to excellence!",
      link: " https://www.linkedin.com/posts/vst-motors-ltd_maserati-vstmaserati-southindia-activity-7280809406001258497-GtYy?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD07rHsBD3hdzu_y6g1hbsgIIhmFgoowJHQ",
     
    },



  ];
  
  const cards = [
    {
      image: card5,
      alt: "Porsche Showroom Opening",
      // title: "We Are Now Open",
      text: "Happy to inaugurate Maserati's pop-up showroom in Bengaluru.",
      link: " https://www.linkedin.com/posts/vst-motors-ltd_maserati-vstmaserati-southindia-activity-7280809406001258497-GtYy?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD07rHsBD3hdzu_y6g1hbsgIIhmFgoowJHQ",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      image: imgcar,
      alt: "Teams Photo",
      title: "Meet Our Team",
      text: "The Bharat Mobility Global Expo 2025 highlighted some big launches including Mercedes-Benz",
      link: "https://www.linkedin.com/posts/vst-motors-ltd_bharatmobility2025-mercedesbenzindia-porscheindia-activity-7287775917416792067-Eaki?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD07rHsBD3hdzu_y6g1hbsgIIhmFgoowJHQ",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      image: imcard12,
      alt: "Latest Models",
      title: "New Arrivals",
      text: "Just wrapped up another amazing week at the Harvard Business School Executive Education ",
      link: "https://www.linkedin.com/posts/arunsurendra_harvardbusinessschool-backtoschool-activity-7286330643519545344-QLyB?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD07rHsBD3hdzu_y6g1hbsgIIhmFgoowJHQ",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      image: Frame5,
      alt: "Latest Models",
      title: "New Arrivals",
      text: "VST Supercars Pvt Ltd, the official dealer for Porsche in Karnataka, has opened another showroom in Whitefield, Bengaluru.",
      link: "https://www.linkedin.com/posts/motoring-trends_vstsupercars-porsche-porscheshowroom-activity-7307824403147321344-H_QF?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD07rHsBD3hdzu_y6g1hbsgIIhmFgoowJHQ",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      image: mahindra1,
      alt: "Latest Models",
      title: "New Arrivals",
      text: "Celebrating our India Garage - VST Group - Mahindra team",
      link: "https://www.linkedin.com/posts/vst-motors-ltd_serviceawards-teamrecognition-milestone-activity-7260522846341193728-gRCJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD07rHsBD3hdzu_y6g1hbsgIIhmFgoowJHQ",
      target: "_blank",
      rel: "noopener noreferrer"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headlines.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#2E2E2E]">
      <div className="absolute top-0 left-0 w-full h-[80px] bg-gradient-to-b from-[#2E2E2E] via-[#2E2E2E]/80 to-transparent flex items-center justify-center z-30 pointer-events-none pt-20">
        <h1 className="text-white text-5xl md:text-6xl font-bold font-roc drop-shadow-lg pointer-events-auto -mt-6">News & Media</h1>
      </div>
      {/* Hero Section */}
      <section className="relative w-full h-[110vh] pt-[10px] mt-[40px]">
        {/* Top blend gradient for seamless transition */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-t from-transparent to-[#2E2E2E] z-20 pointer-events-none" />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image 
          src={bg} 
          alt="News Background" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#2E2E2E] via-[#2E2E2E]/50 via-[#2E2E2E]/30 via-[#2E2E2E]/10 to-transparent z-10"></div>

        
        {/* Main Content with Popular This Week sidebar */}
        <div className="absolute inset-0 z-20">
          <div className="container mx-auto h-full">
            <div className="flex h-full">
              {/* Left content - 60% */}
              <div className="w-full lg:w-[55%] flex flex-col items-center">
                <div className="w-full lg:max-w-3xl px-8 xl:px-24 h-full flex flex-col">
                  {/* Hero Title */}
                  <div className="flex items-center pt-32 lg:pt-44 xl:pt-72 2xl:pt-56 h-[200px]">
                    <div className="relative h-full flex items-center w-full">
                      {headlines.map((headline, index) => (
                        <h1 
                          key={index}
                          className={`text-white lg:w-[35rem] w-full text-4xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl leading-tight tracking-tight font-roc font-bold absolute transition-all duration-1000 ${
                            currentIndex === index 
                              ? "opacity-100 translate-x-0" 
                              : index === (currentIndex + 1) % headlines.length || (currentIndex === headlines.length - 1 && index === 0)
                                ? "opacity-0" 
                                : "opacity-0"
                          }`}
                        >
                          {headline}
                        </h1>
                      ))}
                    </div>
                  </div>
                  
                  {/* News Cards - positioned at bottom with animation */}
                  <div className="w-full mt-auto mb-32 lg:mb-16 relative overflow-hidden">
                    <div className="relative h-[220px]">
                      {headlines2.map((card, index) => (
                        <div 
                          key={index} 
                          className={`absolute top-0 left-0 w-full grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-1500 ${
                            currentIndex === index 
                              ? "opacity-100 translate-x-0" 
                              : index === (currentIndex + 1) % headlines2.length || (currentIndex === headlines2.length - 1 && index === 0)
                                ? "opacity-0 translate-x-full" 
                                : "opacity-0 -translate-x-full"
                          }`}
                        >
                          {/* Featured News Card with orange left border */}
                          <a 
                            href={card.link}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="relative border-l-4 border-yellow-500 bg-white/10 backdrop-blur-sm min-h-[220px] overflow-hidden hover:bg-white/20 transition-colors"
                          >
                            <div className="flex flex-col h-full px-4 py-6">
                              <div className="w-full h-22 relative">
                                <Image 
                                  src={card.image} 
                                  alt={card.alt} 
                                  fill
                                  className="object-cover pr-38 py-1"
                                />
                              </div>
                              <div className="w-full pt-3">
                                <p className="text-medium font-semibold text-white leading-tight text-center w-full px-2">
                                  {card.text}
                                </p>
                              </div>
                            </div>
                          </a>

                          {/* Second News Card */}
                          <a 
                            href={headlines2[(index + 1) % headlines2.length].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative backdrop-blur-sm min-h-[220px] overflow-hidden hover:bg-white/20 transition-colors"
                          >
                            <div className="flex flex-col h-full px-4 py-6">
                              <div className="w-full h-22 relative">
                                <Image 
                                  src={headlines2[(index + 1) % headlines2.length].image} 
                                  alt={headlines2[(index + 1) % headlines2.length].alt} 
                                  fill
                                  className="object-cover pr-38 py-1"
                                />
                              </div>
                              <div className="w-full pt-3">
                                <p className="text-medium font-semibold text-white leading-tight text-center w-full px-2">
                                  {headlines2[(index + 1) % headlines2.length].text}
                                </p>
                              </div>
                            </div>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right sidebar - Popular This Week - 40% */}
              <div className="hidden lg:flex w-[45%] xl:w-[40%] flex-col justify-end pr-10 pb-18">
                <div className="bg-black/70 h-[85vh] w-full overflow-hidden flex flex-col bg-white/10 backdrop-blur-sm">
                  <div className="flex flex-col h-full px-12 pt-16 pb-8">
                    <h2 className="text-4xl font-bold mb-8 text-white font-roc">Popular this week</h2>
                    <div className="space-y-4 flex-grow overflow-y-auto hideScrollbar">
                      {cards.map((item, index) => (
                        <a 
                          key={index}
                          href={item.link}
                          target={item.target}
                          rel={item.rel}
                          className="block"
                        >
                          <div className="flex gap-1 items-center justify-center h-28 transition-all duration-200 hover:bg-yellow-500/20 cursor-pointer rounded">
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
                              <p className="text-base font-semibold text-white leading-tight text-start w-full px-2">
                                {item.text}
                              </p>
                            </div>
                          </div>
                        </a>
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
      {/*  Section 2 */}
      <section className="bg-[#2E2E2E]">
        <News/>
        <div className="bg-[#2E2E2E]">
          <ContactUs bgcolour="bg-[#2E2E2E]"/>
          <Footer bgcolour="bg-[#2E2E2E]"/>
        </div>
      </section>
      
      {/* Videos Section */}
    </main>
  );
}
