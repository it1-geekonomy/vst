"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Frame2024 from "@/app/public/images/AboutUs/Frame 1973341967.png";
import Frame1968 from "@/app/public/images/AboutUs/Frame 1973341968.png";
import Frame1970 from "@/app/public/images/AboutUs/Frame 1973341970.png";
import Frame1972 from "@/app/public/images/AboutUs/Frame 1973341972.png";
import Frame1973 from "@/app/public/images/AboutUs/Frame 1973341973.png";
import Frame1974 from "@/app/public/images/AboutUs/Frame 1973341974.png";
import Frame1976 from "@/app/public/images/AboutUs/Frame 1973341976.png";
import Frame1977 from "@/app/public/images/AboutUs/Frame 1973341977.png";
import Frame1978 from "@/app/public/images/AboutUs/Frame 1973341978.png";
import Frame2022 from "@/app/public/images/AboutUs/Rectangle 2022.png";
import Frame1930 from "@/app/public/images/AboutUs/Rectangle 1930.png";
import Frame1954 from "@/app/public/images/AboutUs/Rectangle 1954.png";
import Frame1967 from "@/app/public/images/AboutUs/Frame 1967.jpg";
import Frame1931 from "@/app/public/images/AboutUs/new1931.jpg";




import BackgroundImage from "@/app/public/images/AboutUs/Background.png";
import gif from "@/app/public/education/vst logo gif.gif"
import { useRouter } from "next/navigation";

function useWindowSize() {
  const [size, setSize] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

const timelineItems = [
  { year: '2024', image: Frame2024, description: "Maserati added to VST's elite brand portfolio in South India" },
  { year: '1911', image: Frame1968, description: 'Formation of VST & Sons' },
  { year: '1930', image: Frame1930, description: 'Sons join the Business' },
  { year: '1931', image: Frame1931, description: 'Founded Smt. Kamalabai Education Institution' },

  
  { year: '1949', image: Frame1970, description: 'India Garage began its journey with Austin Motor Company and Studebaker cars in South India.' },
  { year: '1954', image: Frame1954, description: 'VST Motors partnered with Tata Motors in Tamil Nadu.' },
  { year: '1960', image: Frame1972, description: 'Diversification into Automobile Dealerships' },
  { year: '1967', image: Frame1967, description: 'Establishment of VST Tillers Tractors Ltd. in technical collaboration with Mitsubishi Heavy Industries' },
  { year: '1980-1990', image: Frame1973, description: 'Brand consolidation and product expansion' },
  { year: '1995', image: Frame1974, description: 'VST Tillers Tractors became a publicly listed company' },
  { year: '2000', image: Frame1976, description: 'Expansion of businesses in automobile and manufacturing sectors'},
  { year: '2011', image: Frame1977, description: 'VST entered luxury with Jaguar Land Rover in Tamil Nadu.'},
  { year: '2015', image: Frame1978, description: 'Expanded luxury portfolio with Ducati and Mercedes-Benz in South India.' },
  { year: '2022', image: Frame2022, description: "Porsche joined VST's luxury lineup in Karnataka" }

];

function AboutUsPage() {
  const [activeIndex, setActiveIndex] = useState(1);
  const router = useRouter();
  const { width } = useWindowSize();

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % timelineItems.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const isTabletOrMobile = width < 1024;

  return (
    <div 
      className="min-h-screen text-white relative bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url(${BackgroundImage.src})`,
      }}
    >
      {/* Layer 1: Vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.6) 100%)",
          zIndex: 1
        }}
      ></div>

      {/* Layer 2: Content */}
      <div className="relative z-10 md:pb-5">
        {/* About Us heading at the top */}
        <div className="w-full flex justify-center items-center py-10  xl:p-10">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-roc drop-shadow-lg pointer-events-auto mt-7">About Us</h1>
        </div>

        {/* Timeline Slider Section */}
        <div className="flex flex-col items-center w-full px-4 sm:px-6 md:px-8 py-10">
          {/* Images Container */}
          <div className="relative flex justify-center items-center w-full mb-10 overflow-hidden" style={{ height: isTabletOrMobile ? '300px' : '400px' }}>
            {timelineItems.map((item, index) => {
              const N = timelineItems.length;
              let offset = index - activeIndex;
              const half = Math.floor(N / 2);

              if (offset > half) {
                offset -= N;
              }
              if (offset < -half) {
                offset += N;
              }

              const style: React.CSSProperties = {
                position: 'absolute',
                transition: 'all 500ms ease-in-out',
              };

              if (isTabletOrMobile) {
                style.transform = `translateX(${offset * 100}%) scale(0.9)`;
                style.zIndex = N - Math.abs(offset);
              } else {
                const isVisible = Math.abs(offset) <= 1;
                style.opacity = isVisible ? 1 : 0;
                style.zIndex = isVisible ? 5 : 0;
                style.transform = 'translateX(0) scale(0.7)';
                style.pointerEvents = isVisible ? 'auto' : 'none';

                if (offset === 0) { // Center
                  style.transform = 'translateX(0) scale(1.2)';
                  style.zIndex = 10;
                } else if (offset === -1) { // Left
                  style.transform = 'translateX(-120%) scale(0.9)';
                } else if (offset === 1) { // Right
                  style.transform = 'translateX(120%) scale(0.9)';
                } else { // Hidden
                  style.transform = `translateX(${offset > 0 ? 120 : -120}%) scale(0.9)`;
                }
              }

              return (
                <div
                  key={item.year}
                  className="cursor-pointer"
                  style={style}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="relative" style={{ 
                    width: isTabletOrMobile ? '280px' : '320px', 
                    height: isTabletOrMobile ? '280px' : '320px',
                    borderRadius: offset === 0 ? '16px' : '0px',
                    overflow: 'hidden'
                  }}>
                    <Image
                      src={item.image}
                      alt={`Timeline ${item.year}`}
                      layout="fill"
                      objectFit="cover"
                      className="shadow-lg"
                    />
                    {offset === 0 && (
                      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 to-transparent rounded-2xl">
                        <p className="text-white text-center text-lg font-semibold">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Timeline Bar */}
          <div className="w-full max-w-2xl mt-12 relative overflow-hidden">
            <div className="absolute top-[7px] left-0 right-0 h-0.5 bg-white/30"></div>
            <div className="relative w-full h-16 flex items-center">
              {timelineItems.map((item, index) => {
                const N = timelineItems.length;
                let offset = index - activeIndex;
                const half = Math.floor(N / 2);

                if (offset > half) {
                  offset -= N;
                }
                if (offset < -half) {
                  offset += N;
                }
                
                const spacingPercentage = 35;
                
                const style: React.CSSProperties = {
                  position: 'absolute',
                  left: `calc(50% + ${offset * spacingPercentage}%)`,
                  transform: 'translateX(-50%)',
                  transition: 'all 500ms ease-in-out',
                  opacity: Math.abs(offset) > 2 ? 0 : 1,
                  pointerEvents: Math.abs(offset) > 2 ? 'none' : 'auto',
                };

                return (
                  <div
                    key={item.year}
                    className="flex flex-col items-center cursor-pointer"
                    style={style}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="relative flex items-center justify-center w-8 h-8">
                      <div
                        className={`w-4 h-4 rounded-full border-2 transition-all duration-300 z-10 ${
                          offset === 0
                            ? 'bg-yellow-400 border-white scale-125'
                            : 'bg-[#0c2340] border-white'
                        }`}
                      ></div>
                    </div>
                    <p
                      className={`mt-2 text-lg transition-colors duration-300 ${
                        offset === 0
                          ? 'text-yellow-400 font-bold'
                          : 'text-white'
                      }`}
                    >
                      {item.year}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* About Us Text Section */}
        <div className="mt-12 md:mt-16 px-4 lg:px-52">
        <h3 className="text-xl md:text-2xl text-white py-8 mb-3 font-roc text-clamp-40">A Legacy of Trust and Innovation:</h3>

          <div className="flex flex-col font-normal ">
            
            <div>
              <p className="text-justify hyphens-auto font-roc font-normal text-sm md:text-base text-clamp-24 pb-3">
                Founded in 1911, VST Group is a leading conglomerate headquartered in Bangalore, known for
                its enduring legacy of excellence, innovation, and sustainable growth. The group has been
                growing ever since, expanding its presence across four core verticals:
              </p>
              <ul className="list-disc pl-6 mt-3 mb-6 space-y-1 text-sm md:text-base text-clamp-24">
                <li>Automotive Franchise</li>
                <li>Manufacturing</li> 
                <li>OE Parts Distribution</li>
                <li>Education</li>
              </ul>
              
              
              <p className="text-justify hyphens-auto font-roc text-sm md:text-base text-clamp-24">
                With an annual turnover exceeding ₹5,000 crores ($570 million), VST Group stands as a powerhouse
                in India's business landscape. Under the visionary leadership of its fourth generation, the group
                continues to set new benchmarks in service excellence, technological advancement and customer
                satisfaction. By blending a rich legacy with a forward-looking approach to innovation, VST Group remains
                committed to delivering value, building trust and driving growth for generations to come.
              </p>
              
              
            </div>
          </div>
        </div>

        {/* Progress with Purpose Section */}
        <div className="mt-16 md:mt-32 flex items-center justify-center px-4">
          <div className="flex flex-col md:flex-row items-center space-y-0 md:space-y-0 ">
            <div className="w-full md:h-[350px] md:w-1/2 flex justify-center md:justify-end">
              <Image
                src={gif}
                alt="VST Logo Animation"
                className="w-[100%] h-[100%] object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left mb-5">
              <h2 className="text-3xl md:text-4xl text-white mb-2 font-roc">
                Progress with Purpose.
              </h2>
              <h3 className="text-3xl md:text-4xl text-white mb-6 md:mb-8 font-roc">Impact with Vision.</h3>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
