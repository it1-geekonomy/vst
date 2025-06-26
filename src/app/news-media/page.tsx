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


import hcard1 from "@/app/public/news-and-media/Exciting Times.jpg";
import hcard2 from "@/app/public/news-and-media/Special Moment news.jpg";
import hcard3 from "@/app/public/news-and-media/Long standing Ducati 1.jpg";
import hcard4 from "@/app/public/news-and-media/Porsche Moment news.jpg";
import hcard5 from "@/app/public/news-and-media/newslid.jpg";
import bgimg from "@/app/public/images/news/BACKIMG.jpg";
import frame3 from "@/app/public/images/news/card6New.png";






import News from "@/components/News";
import VideosSection from "@/components/VideosSection";
import { Contact } from "lucide-react";
import ContactUs from "@/components/GetInTouch";
import Footer from "@/components/Footer";
import { frame } from "framer-motion";

export default function NewsMedia() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const headlines = [
    "Exciting! Our new Porsche showroom \n is now in Whitefield!",
    "A special moment from our Chennai finance team",
    "As a long-standing Ducati dealer partner at VST Group.",
    "Another milestone on the road to excellence!",
  ];
  const headlines2 = [
    {
      image: hcard1,
      alt: "Latest Models",

      // title: "We Are Now Open",
      text: "Exciting times ahead! Introducing our stunning new Porsche showroom in Whitefield.",
      link: "https://www.linkedin.com/posts/motoring-trends_vstsupercars-porsche-porscheshowroom-activity-7307824403147321344-H_QF?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD07rHsBD3hdzu_y6g1hbsgIIhmFgoowJHQ",
     
    },
    {
      image: hcard2,
      alt: "Latesaat Models",
      // title: "We Are Now Open",
      text: "A special moment from our Chennai finance team, who surprised our Chairman, Arun Surendra, with a thoughtful token of appreciation.",
      link: "  https://www.linkedin.com/posts/vst-motors-ltd_teamappreciation-gratitude-dreamteam-activity-7321082890115510273-52SW?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEKXx8oBJZx9kmwsl0vvlJNzz3koCw-vLhE",
     
    },
    {
      image: hcard3,
      alt: "Latestaa Models",
      // title: "We Are Now Open",
      text: "As a long-standing Ducati dealer partner at VST Group",
      link: "https://www.linkedin.com/posts/vst-motors-ltd_ducatiindia-ducaticommunity-vstgroup-activity-7201814884903235585-li-1?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEKXx8oBJZx9kmwsl0vvlJNzz3koCw-vLhE",
     
    },

    
    {
      image: hcard4,
      alt: "Latest Models",
      // title: "We Are Now Open",
      text: "Another milestone on the road to excellence!",
      link: " https://www.linkedin.com/posts/vst-motors-ltd_globalporschemomentaward-porsche-globalrecognition-activity-7313130881051697152-J3cW?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD07rHsBD3hdzu_y6g1hbsgIIhmFgoowJHQ",
     
    },
    {
      image: hcard5,
      alt: "Latest Models",
      // title: "We Are Now Open",
      text: "VST Tillers Tractors Reports Sales of 3,486 Units in May 2025",
      link: "https://krishijagran.com/industry-news/vst-tillers-tractors-reports-sales-of-3-486-units-in-may-2025/",
     
    },




  ];
  
  // const cards = [
  //   {
  //     image: card5,
  //     alt: "Porsche Showroom Opening",
  //     // title: "We Are Now Open",
  //     text: "Happy to inaugurate Maserati's pop-up showroom in Bengaluru.",
  //     link: " https://www.linkedin.com/posts/vst-motors-ltd_maserati-vstmaserati-southindia-activity-7280809406001258497-GtYy?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD07rHsBD3hdzu_y6g1hbsgIIhmFgoowJHQ",
  //     target: "_blank",
  //     rel: "noopener noreferrer"
  //   },
  //   {
  //     image: imgcar,
  //     alt: "Teams Photo",
  //     title: "Meet Our Team",
  //     text: "The Bharat Mobility Global Expo 2025 highlighted some big launches including Mercedes-Benz",
  //     link: "https://www.linkedin.com/posts/vst-motors-ltd_bharatmobility2025-mercedesbenzindia-porscheindia-activity-7287775917416792067-Eaki?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD07rHsBD3hdzu_y6g1hbsgIIhmFgoowJHQ",
  //     target: "_blank",
  //     rel: "noopener noreferrer"
  //   },
   
  //   {
  //     image:frame3,
  //     alt: "Latesaat Models",
  //     // title: "We Are Now Open",
  //     text: " Habits become your second nature. So it is with winning! Our winning streak continues. Education World Grand Jury Awards",
  //     link: " https://skei.edu.in/awards#education-world-grand-jury-awards",
  //     target: "_blank",
  //     rel: "noopener noreferrer"
     
  //   },
  //   {
  //     image: Frame5,
  //     alt: "Latest Models",
  //     title: "New Arrivals",
  //     text: "VST Supercars Pvt Ltd, the official dealer for Porsche in Karnataka, has opened another showroom in Whitefield, Bengaluru.",
  //     link: "https://www.linkedin.com/posts/motoring-trends_vstsupercars-porsche-porscheshowroom-activity-7307824403147321344-H_QF?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD07rHsBD3hdzu_y6g1hbsgIIhmFgoowJHQ",
  //     target: "_blank",
  //     rel: "noopener noreferrer"
  //   },
  //   {
  //     image: mahindra1,
  //     alt: "Latest Models",
  //     title: "New Arrivals",
  //     text: "Celebrating our India Garage - VST Group - Mahindra team",
  //     link: "https://www.linkedin.com/posts/vst-motors-ltd_serviceawards-teamrecognition-milestone-activity-7260522846341193728-gRCJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD07rHsBD3hdzu_y6g1hbsgIIhmFgoowJHQ",
  //     target: "_blank",
  //     rel: "noopener noreferrer"
  //   },

    //  {
    //   image: imcard12,
    //   alt: "Latest Models",
    //   title: "New Arrivals",
    //   text: "Just wrapped up another amazing week at the Harvard Business School Executive Education ",
    //   link: "https://www.linkedin.com/posts/arunsurendra_harvardbusinessschool-backtoschool-activity-7286330643519545344-QLyB?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD07rHsBD3hdzu_y6g1hbsgIIhmFgoowJHQ",
    //   target: "_blank",
    //   rel: "noopener noreferrer"
    // },
  // ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headlines.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#2E2E2E] ">
      <div className="absolute top-0 left-0 w-full h-[80px] bg-gradient-to-b from-[#2E2E2E] via-[#2E2E2E]/80 to-transparent flex items-center justify-center z-30 pointer-events-none pt-10 md:pt-20">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-roc drop-shadow-lg pointer-events-auto -mt-6">News & Media</h1>
      </div>
      {/* Hero Section */}
      <section className="relative w-full h-auto min-h-[85vh] md:min-h-[100vh] lg:min-h-[110vh] pt-[10px] mt-[20px] md:mt-[40px] mb-[150px] md:mb-[300px] lg:mb-0 z-20">
        {/* Top blend gradient for seamless transition */}
        <div className="absolute top-0 left-0 w-full h-30 bg-gradient-to-t from-transparent to-[#2E2E2E] via-[#2E2E2E] z-20 pointer-events-none" />
        <div className="absolute inset-0 bg-black/5 z-10"></div>
        <Image 
          src={bgimg} 
          alt="News Background" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#2E2E2E] via-[#2E2E2E]/50 to-transparent z-10"></div>

        {/* Main Content */}
        <div className="absolute inset-0 z-30">
          <div className="container mx-auto h-full px-2 sm:px-4 md:px-6 lg:px-8">
            <div className="flex flex-col h-full">
              {/* Main content - 100% */}
              <div className="w-full flex flex-col items-center">
                <div className="w-full max-w-7xl px-6 sm:px-6 md:px-8 lg:px-4 xl:px-10 h-[80vh] sm:h-[80vh] md:h-[80vh] lg:h-[90vh] flex flex-col">
                  {/* Hero Title */}
                  <div className="flex items-center justify-center pt-8 sm:pt-30 md:pt-20 lg:pt-40 xl:pt-48 h-[45%] sm:h-[55%] md:h-[45%]">
                    <div className="relative h-full flex items-center justify-center w-full">
                      {headlines.map((headline, index) => (
                        <h1 
                          key={index}
                          className={`text-black w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight font-roc font-semibold sm:font-medium px-4 sm:px-6 md:px-8 absolute transition-all duration-1000 text-center ${
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
                  <div className="w-full mt-4 sm:mt-12 md:mt-16 lg:mt-20 mb-4 sm:mb-6 md:mb-8 lg:mb-10 relative overflow-visible">
                    <div className="relative h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mx-auto">
                      {headlines2.map((card, index) => (
                        <div 
                          key={index} 
                          className={`absolute top-0 left-0 w-full grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 transition-all duration-1500 ${
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
                            className="relative border-l-4 border-yellow-500 bg-white/10 backdrop-blur-sm min-h-[300px] sm:min-h-[280px] md:min-h-[300px] lg:min-h-[320px] overflow-visible hover:bg-white/20 transition-colors"
                          >
                            <div className="flex flex-col h-full px-3 sm:px-1 py-4 sm:py-4 md:py-5">
                              <div className="w-full h-44 sm:h-40 md:h-48 lg:h-52 relative">
                                <Image 
                                  src={card.image} 
                                  alt={card.alt} 
                                  fill
                                  className="object-cover w-full h-full"
                                />
                              </div>
                              <div className="w-full pt-3 sm:pt-4 md:pt-5 flex-grow">
                                <p className="text-sm sm:text-base md:text-lg font-normal text-black leading-relaxed text-left w-full px-1 sm:px-2">
                                  {card.text}
                                </p>
                              </div>
                            </div>
                          </a>

                          {/* Second News Card - Only show on md screens and up */}
                          <a 
                            href={headlines2[(index + 1) % headlines2.length].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative backdrop-blur-sm min-h-[300px] sm:min-h-[280px] md:min-h-[300px] lg:min-h-[320px] overflow-visible hover:bg-white/20 transition-colors hidden md:block"
                          >
                            <div className="flex flex-col h-full px-3 sm:px-8 py-4 sm:py-4 md:py-5">
                              <div className="w-full h-44 sm:h-40 md:h-48 lg:h-52 relative">
                                <Image 
                                  src={headlines2[(index + 1) % headlines2.length].image} 
                                  alt={headlines2[(index + 1) % headlines2.length].alt} 
                                  fill
                                  className="object-cover w-full h-full"
                                />
                              </div>
                              <div className="w-full pt-3 sm:pt-4 md:pt-5 flex-grow">
                                <p className="text-sm sm:text-base md:text-lg font-normal text-black leading-relaxed text-left w-full px-1 sm:px-2">
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
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - News Section */}
      <section className="bg-[#2E2E2E] relative z-30">
        <div className="container mx-auto px-1 sm:px-1 md:px-0 lg:px-0">
          <div className="pt-0 md:pt-12 lg:pt-16">
            <News/>
           
          </div>
        </div>
      </section>
      <Footer bgcolour="bg-[#2E2E2E]"/>

      
      {/* Videos Section */}
    </main>
  );
}
