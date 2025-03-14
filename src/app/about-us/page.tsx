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
    <div className="min-h-screen text-white relative">
      {/* Background with gradient that fades to black */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #0a192f 0%, #0d1117 40%, #000000 50%)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      ></div>

      {/* Main overlay with fade-out - no blur */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(132.98deg, rgba(47, 129, 174, 0.6) 28.43%, rgba(92, 62, 188, 0.6) 110.85%)",
          pointerEvents: "none",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%)",
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
      <div className="relative z-10 p-8 pt-24">
        {/* Timeline component */}
        <div className="flex">
          {/* Timeline Years */}
          <div className="w-1/4 flex flex-col items-center justify-center h-[600px] relative">
            <button
              onClick={() => {
                const currentIndex = timelineData.findIndex(
                  (item) => item.year === selectedYear
                );
                const prevIndex =
                  (currentIndex - 1 + timelineData.length) %
                  timelineData.length;
                handleYearClick(timelineData[prevIndex].year);
              }}
              className="absolute top-20 text-gray-400 hover:text-yellow-300 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>

            <div className="relative h-[400px] flex items-center justify-center">
              {timelineData.map((item) => {
                const position = getPosition(item.year);
                const isSelected = selectedYear === item.year;

                return (
                  <button
                    key={item.year}
                    onClick={() => handleYearClick(item.year)}
                    className="absolute text-5xl font-bold transition-all duration-500"
                    style={{
                      transform: `
                        translateY(${position * 120}px)
                        scale(${isSelected ? 1.25 : 0.85})
                        translateZ(${isSelected ? 0 : -100}px)
                      `,
                      opacity: isSelected ? 1 : 0.5,
                      filter: isSelected ? "none" : "blur(2px)",
                      color: isSelected ? "#FCD34D" : "#6B7280",
                      zIndex: isSelected ? 20 : 10,
                    }}
                  >
                    {item.year}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => {
                const currentIndex = timelineData.findIndex(
                  (item) => item.year === selectedYear
                );
                const nextIndex = (currentIndex + 1) % timelineData.length;
                handleYearClick(timelineData[nextIndex].year);
              }}
              className="absolute bottom-20 text-gray-400 hover:text-yellow-300 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {/* Timeline Images */}
          <div className="w-3/4 flex items-center justify-center">
            <div
              className={`flex items-center -space-x-15 transition-all duration-300 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              {[...timelineData]
                .sort((a, b) => {
                  if (a.year === selectedYear) return -1;
                  if (b.year === selectedYear) return 1;
                  return 0;
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
                      className="absolute rounded-full transition-all duration-500"
                      style={{
                        inset: "-20px",
                        background:
                          item.year === "1881"
                            ? "linear-gradient(180deg, rgba(26, 57, 85, 0.6) 0%, rgba(163, 126, 53, 0.6) 100%)"
                            : item.year === "1920"
                            ? "linear-gradient(180deg, rgba(84, 66, 62, 0.5) 0%, rgba(184, 151, 255, 0.5) 100%)"
                            : "linear-gradient(180deg, rgba(120, 14, 38, 0.6) 0%, rgba(163, 126, 53, 0.6) 100%)",
                        opacity: selectedYear === item.year ? 1 : 0.5,
                      }}
                    ></div>

                    {/* Image container */}
                    <div
                      className="relative rounded-full overflow-hidden transition-all duration-500"
                      style={{
                        width:
                          selectedYear === item.year
                            ? "420px"
                            : index === 1
                            ? "320px"
                            : "280px",
                        height:
                          selectedYear === item.year
                            ? "420px"
                            : index === 1
                            ? "320px"
                            : "280px",
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={`Timeline ${item.year}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* About Us Text Section */}
        <div className="mt-16 px-8 md:px-32">
          <h1 className="text-4xl mb-8 text-white">Our Legacy</h1>

          <div className="flex flex-col">
            <h2 className="text-xl mb-2 text-white">About VST Group</h2>
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
                Established in 1911, VST Group is a distinguished 11 year old
                enterprise headquartered in Bangalore.
              </p>
              <p
                className="mb-4 text-justify hyphens-auto "
                style={{
                  wordSpacing: "0.1em",
                  fontFamily: "FONTSPRING DEMO - Roc Grotesk",
                }}
              >
                t encompasses a wide array of luxury and mid variant car
                franchises, like Porsche, Maserati, Mercedes Benz, Jaguar, Land
                Rover, Ducati, Tata, Kia, Volkswagen, BYD Mahindra, Honda
                Scooters alongside a prominent manufacturing sector and
                significant interests in real estate, financial services and
                education industry. Under the leadership of its fourth
                generation, the Group has a turnover of Rs. 5,000 crores 570
                million with sustainable growth, excellence, and innovation.
              </p>
              <p
                className="mb-4 text-justify hyphens-auto"
                style={{
                  wordSpacing: "0.1em",
                  fontFamily: "FONTSPRING DEMO - Roc Grotesk",
                }}
              >
                VST Tractors Tillers, a key division, is renowned for its
                innovative and reliable agricultural machinery, supporting
                farmers with high quality equipment to boost productivity and
                modernize farming techniques. Gove Finance Limited, the leader
                in Auto Finance services for more than 30 years, is a dynamic
                nonbanking finance company led by a team of specialists with
                proven track record. It finance cars, commercial vehicles,
                construction equipments, used vehicles, tractors and buses.
                Meanwhile, SKEI stands out for its commitment to holistic
                education, offering a range of academic and extracurricular
                programs in a supportive environment, enhanced by state of the
                art facilities and a dedicated faculty to foster intellectual
                and personal growth.
              </p>
              <p className="text-white font-medium">SINCE 1911</p>
            </div>
          </div>
        </div>

        {/* Progress with Purpose Section */}
        <div className="mt-32 flex items-center justify-center">
          <div className="flex flex-row items-center space-x-12">
            <div className="w-1/2 flex justify-end">
              <video
                src="/ContactUsLogo.mp4"
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-1/2 text-left">
              <h2 className="text-4xl text-white mb-2">
                Progress with Purpose.
              </h2>
              <h3 className="text-4xl text-white mb-8">Impact with Vision</h3>
              <button className="bg-yellow-400 text-black px-8 py-3 rounded text-lg font-medium">
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
