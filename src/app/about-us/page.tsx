"use client";

import { useState } from "react";
import Image from "next/image";
import Image1881 from "@/app/public/images/AboutUs/1881Image.png";
import Image1920 from "@/app/public/images/AboutUs/1920Image.png";
import Image1950 from "@/app/public/images/AboutUs/1950Image.png";

const AboutUsPage = () => {
  const [selectedYear, setSelectedYear] = useState("1920");
  const [isAnimating, setIsAnimating] = useState(false);
  const timelineData = [
    {
      year: "1881",
      image: Image1881,
    },
    {
      year: "1920",
      image: Image1920,
    },
    {
      year: "1950",
      image: Image1950,
    },
  ];

  const getPosition = (year: string) => {
    const years = ["1881", "1920", "1950"];
    const selectedIndex = years.indexOf(selectedYear);
    const currentIndex = years.indexOf(year);

    // Calculate relative position (-1 for above, 0 for center, 1 for below)
    let position = currentIndex - selectedIndex;

    // Adjust for circular motion
    if (position === 2) position = -1;
    if (position === -2) position = 1;

    return position;
  };

  const handleYearClick = (year: string) => {
    if (year === selectedYear || isAnimating) return;
    setIsAnimating(true);
    setSelectedYear(year);
    setTimeout(() => setIsAnimating(false), 150);
  };

  return (
    <div className="min-h-screen text-white relative bg-black">
      {/* Update the gradient overlay with blur effect */}
      <div
        className="absolute top-0 left-0 right-0 h-[800px] md:h-[1000px]"
        style={{
          background:
            "linear-gradient(132.98deg, rgba(47, 129, 174, 0.6) 28.43%, rgba(92, 62, 188, 0.6) 110.85%)",
          pointerEvents: "none",
          backdropFilter: "blur(720px)",
          WebkitBackdropFilter: "blur(720px)", // For Safari support
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }}
      ></div>

      {/* Corner vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 900%, rgba(0,0,0,0.5) 900%)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 p-4 md:p-8 pt-16 md:pt-24">
        {/* Timeline component */}
        <div className="flex flex-col lg:flex-row w-full min-h-[600px] px-4 sm:px-6 md:px-8">
          {/* Timeline Years */}
          <div className="w-full lg:w-1/4 flex flex-row lg:flex-col items-center justify-between lg:justify-center h-[100px] lg:h-[600px] relative">
            <button
              onClick={() => {
                const currentIndex = timelineData.findIndex((item) => item.year === selectedYear)
                const prevIndex = (currentIndex - 1 + timelineData.length) % timelineData.length
                handleYearClick(timelineData[prevIndex].year)
              }}
              className="text-gray-400 hover:text-yellow-300 transition-colors transform rotate-90 lg:rotate-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>

            <div className="relative flex flex-row lg:flex-col items-center justify-center gap-8 lg:gap-0 lg:h-[400px]">
              {timelineData.map((item) => {
                const position = getPosition(item.year)
                const isSelected = selectedYear === item.year

                return (
                  <button
                    key={item.year}
                    onClick={() => handleYearClick(item.year)}
                    className={`text-3xl sm:text-4xl lg:text-5xl font-bold transition-all duration-500 absolute lg:relative
                      ${isSelected ? 'scale-125 lg:translate-x-0' : 'scale-85 lg:translate-x-0'}
                      ${position === -1 ? 'lg:translate-y-[-120px]' : position === 1 ? 'lg:translate-y-[120px]' : ''}`}
                    style={{
                      opacity: isSelected ? 1 : 0.5,
                      filter: isSelected ? "none" : "blur(2px)",
                      color: isSelected ? "#FCD34D" : "#6B7280",
                      zIndex: isSelected ? 20 : 10,
                    }}
                  >
                    {item.year}
                  </button>
                )
              })}
            </div>

            <button
              onClick={() => {
                const currentIndex = timelineData.findIndex((item) => item.year === selectedYear)
                const nextIndex = (currentIndex + 1) % timelineData.length
                handleYearClick(timelineData[nextIndex].year)
              }}
              className="text-gray-400 hover:text-yellow-300 transition-colors transform rotate-90 lg:rotate-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Timeline Images */}
          <div className="w-full lg:w-3/4 flex items-center justify-center mt-8 lg:mt-0">
            <div className={`flex items-center justify-center 
              ${isAnimating ? 'opacity-0' : 'opacity-100'}
              transition-all duration-300`}
            >
              <div className="flex flex-row items-center justify-center 
                -space-x-4 sm:-space-x-8 md:-space-x-12 lg:-space-x-16">
                {[...timelineData]
                  .sort((a, b) => {
                    if (a.year === selectedYear) return -1
                    if (b.year === selectedYear) return 1
                    return 0
                  })
                  .map((item, index) => (
                    <div
                      key={item.year}
                      className="relative transition-all duration-500 flex items-center"
                      style={{
                        zIndex: selectedYear === item.year ? 30 : 20 - index,
                      }}
                    >
                      {/* Colored ring */}
                      <div
                        className={`absolute rounded-full transition-all duration-500 
                          ${selectedYear === item.year 
                            ? '-inset-2 sm:-inset-3 md:-inset-4 lg:-inset-6' 
                            : '-inset-1 sm:-inset-2 md:-inset-3 lg:-inset-4'}`}
                        style={{
                          background:
                            item.year === "1881"
                              ? "linear-gradient(180deg, rgba(26, 57, 85, 0.6) 0%, rgba(163, 126, 53, 0.6) 100%)"
                              : item.year === "1920"
                              ? "linear-gradient(180deg, rgba(84, 66, 62, 0.5) 0%, rgba(184, 151, 255, 0.5) 100%)"
                              : "linear-gradient(180deg, rgba(120, 14, 38, 0.6) 0%, rgba(163, 126, 53, 0.6) 100%)",
                          opacity: selectedYear === item.year ? 1 : 0.5,
                        }}
                      />

                      {/* Image container */}
                      <div
                        className={`relative rounded-full overflow-hidden transition-all duration-500
                          ${selectedYear === item.year 
                            ? 'w-[160px] h-[160px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] lg:w-[420px] lg:h-[420px]' 
                            : index === 1
                            ? 'w-[120px] h-[120px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px] lg:w-[340px] lg:h-[340px]'
                            : 'w-[100px] h-[100px] sm:w-[180px] sm:h-[180px] md:w-[240px] md:h-[240px] lg:w-[300px] lg:h-[300px]'}`}
                      >
                        <Image
                          src={item.image}
                          alt={`Timeline ${item.year}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 160px,
                                 (max-width: 768px) 280px,
                                 (max-width: 1024px) 340px,
                                 420px"
                          priority={selectedYear === item.year}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* About Us Text Section */}
        <div className="mt-12 md:mt-16 px-4 md:px-32">
          <h1 className="text-3xl md:text-4xl mb-6 md:mb-8 text-white">Our Legacy</h1>

          <div className="flex flex-col">
            <h2 className="text-lg md:text-xl mb-2 text-white">About VST Group</h2>
            <div
              style={{
                fontFamily: "'FONTSPRING DEMO - Roc Grotesk', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "120%",
                letterSpacing: "0%",
                color: "white",
              }}
            >
              <p
                className="mb-4 text-justify hyphens-auto"
                style={{
                  wordSpacing: "0.1em",
                  fontFamily: "FONTSPRING DEMO - Roc Grotesk",
                }}
              >
                Established in 1911, VST Group is a distinguished 11 year old enterprise headquartered in Bangalore.
              </p>
              <p
                className="mb-4 text-justify hyphens-auto"
                style={{
                  wordSpacing: "0.1em",
                  fontFamily: "FONTSPRING DEMO - Roc Grotesk",
                }}
              >
                It encompasses a wide array of luxury and mid variant car franchises, like Porsche, Maserati, Mercedes Benz, Jaguar, Land Rover, Ducati, Tata, Kia, Volkswagen, BYD Mahindra, Honda Scooters alongside a prominent manufacturing sector and significant interests in real estate, financial services and education industry. Under the leadership of its fourth generation, the Group has a turnover of Rs. 5,000 crores 570 million with sustainable growth, excellence, and innovation.
              </p>
              <p
                className="mb-4 text-justify hyphens-auto"
                style={{
                  wordSpacing: "0.1em",
                  fontFamily: "FONTSPRING DEMO - Roc Grotesk",
                }}
              >
                VST Tractors & Tillers, a key division, is renowned for its innovative and reliable agricultural machinery, supporting farmers with high quality equipment to boost productivity and modernize farming techniques. Gove Finance Limited, the leader in Auto Finance services for more than 30 years, is a dynamic nonbanking finance company led by a team of specialists with proven track record. It finance cars, commercial vehicles, construction equipments, used vehicles, tractors and buses. Meanwhile, SKEI stands out for its commitment to holistic education, offering a range of academic and extracurricular programs in a supportive environment, enhanced by state of the art facilities and a dedicated faculty to foster intellectual and personal growth.
              </p>
              <p className="text-white font-medium">SINCE 1911</p>
            </div>
          </div>
        </div>

        {/* Progress with Purpose Section */}
        <div className="mt-16 md:mt-32 flex items-center justify-center px-4">
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <video
                src="/ContactUsLogo.mp4"
                autoPlay
                muted
                loop
                className="w-full h-full object-cover max-w-[400px] md:max-w-none"
              />
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl text-white mb-2">
                Progress with Purpose.
              </h2>
              <h3 className="text-3xl md:text-4xl text-white mb-6 md:mb-8">Impact with Vision</h3>
              <button className="bg-yellow-400 text-black px-6 md:px-8 py-2 md:py-3 rounded text-base md:text-lg font-medium">
                Join Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
