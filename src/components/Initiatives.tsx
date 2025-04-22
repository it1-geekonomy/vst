"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import education1 from "@/app/public/Rectangle 6530.svg";
import education2 from "@/app/public/Rectangle 6531.svg";
import education3 from "@/app/public/page-8-vst 1.png";
import "@/styles/initiatives.css";
import mainImg from "@/app/public/making-a-difference/frame2.png";
import eduImg from "@/app/public/making-a-difference/Girl-image.jpeg";
import sustainImg from "@/app/public/making-a-difference/Bulb-image.jpeg";
import ruralImg from "@/app/public/making-a-difference/rural-img.jpg";
import healthImg from "@/app/public/making-a-difference/health-care.jpg";

const defaultImg = mainImg;
const imagesMap = {
  education: eduImg,
  sustainability: sustainImg,
  rural: ruralImg,
  healthcare: healthImg
};

const initiativeData = [
  {
    id: "education",
    title: "Education and Holistic Development",
    color: "blue-500",
    description: "The VST Group is committed to Corporate Social Responsibility through impactful rural development, enhancing infrastructure and promoting sustainable agriculture. We are leading the transition to renewable energy by powering our fuel outlets with solar panels, reducing CO2 emissions by 15% in 2022."
  },
  {
    id: "sustainability",
    title: "Sustainability",
    color: "green-400",
    description: "VST Group is committed to sustainability through initiatives aimed at reducing its carbon footprint and promoting renewable energy."
  },
  {
    id: "rural",
    title: "Rural Development",
    color: "yellow-400",
    description: "The VST Group is committed to Corporate Social Responsibility through impactful rural development in underserved communities."
  },
  {
    id: "healthcare",
    title: "Healthcare",
    color: "red-400",
    description: "VST Group is dedicated to improving healthcare access in rural communities through mobile clinics and telemedicine initiatives."
  }
];
export default function Initiatives() {

  const [currentImg, setCurrentImg] = useState(defaultImg);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<'education' | 'sustainability' | 'rural' | 'healthcare' | null>(null);



  // Detect if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Listen for resize events
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleMouseEnter = (section: 'education' | 'sustainability' | 'rural' | 'healthcare') => {
    if (!isMobile) {
      setCurrentImg(imagesMap[section]);
      setActiveSection(section);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setCurrentImg(defaultImg);
      setActiveSection(null);
    }
  };

  const toggleMobileSection = (section: 'education' | 'sustainability' | 'rural' | 'healthcare') => {
    if (expandedMobileSection === section) {
      setExpandedMobileSection(null);
    } else {
      setExpandedMobileSection(section);
      setCurrentImg(imagesMap[section]);
    }
  };

  // Desktop View
  const DesktopView = () => (
    <section className="w-full bg-black h-screen flex items-center">
      <div className="max-w-[1900px] mx-auto w-full h-full">
        <div className="grid grid-cols-5 h-full">
          {/* Main Initiative */}
          <div className="col-span-2 border border-white relative group overflow-hidden">
            <div className="absolute  m-10 my-16 border border-[#594B1D] overflow-hidden inset-0 transition-opacity duration-500 ease-in-out">
              <Image
                src={currentImg}
                alt="Initiative background"
                fill
                className="object-cover"
              />
            </div>
            <div className=" h-[calc(100%-6rem)] flex flex-col justify-center p-12 relative z-10">
              <h2 className="text-5xl text-white mb-6 font-poppins font-semibold">
                Our Initiatives
              </h2>
              <p className="text-gray-300 text-xl leading-relaxed font-poppins font-light">
                At VST Group, our Corporate Social Responsibility (CSR)
                initiatives are rooted in a deep sense of purpose and commitment
                to creating lasting, positive change. We believe that our
                success is intertwined with the well-being of the communities we
                serve.
              </p>
            </div>
          </div>

          {/* All other initiatives in a single grid */}
          <div className="gallery border  col-span-3 h-full grid grid-cols-2 grid-rows-2">
            <div
              className="gallery-item border border-white p-12 flex flex-col items-start justify-center relative group overflow-hidden"
              onMouseEnter={() => handleMouseEnter('education')}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="text-3xl text-white group-hover:text-blue-500 text-left relative z-10 group-hover:scale-105 transition-transform duration-500 w-full font-poppins font-semibold">
                Education and Holistic Development
              </h3>

              <p className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 ease-in-out text-white text-sm md:text-base text-left font-poppins font-light overflow-hidden">
                The VST Group is committed to Corporate Social Responsibility through impactful rural development,
                enhancing infrastructure and promoting sustainable agriculture. We are leading the transition to
                renewable energy by powering our fuel outlets with solar panels, reducing CO2 emissions by 15% in 2022.
              </p>
            </div>

            <div className="gallery-item border border-white p-12 flex flex-col items-start justify-center relative group overflow-hidden"
              onMouseEnter={() => handleMouseEnter('sustainability')}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="text-3xl text-white group-hover:text-green-400 font-poppins font-semibold text-left relative z-10 group-hover:scale-105 transition-transform duration-500 w-full">
                Sustainability
              </h3>
              <p className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 ease-in-out text-white text-sm md:text-base text-left font-poppins font-light overflow-hidden">
                VST Group is committed to sustainability through initiatives aimed at reducing its carbon footprint and promoting renewable energy.
              </p>
            </div>
            <div className="gallery-item border border-white p-12 flex flex-col items-start justify-center relative group overflow-hidden"
              onMouseEnter={() => handleMouseEnter('rural')}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="text-3xl text-white group-hover:text-yellow-400 font-poppins font-semibold text-left relative z-10 group-hover:scale-105 transition-transform duration-500 w-full">
                Rural Development
              </h3>
              <p className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 ease-in-out text-white text-sm md:text-base text-left font-poppins font-light overflow-hidden">
                The VST Group is committed to Corporate Social Responsibility through impactful rural development in underserved communities.
              </p>
            </div>
            <div className="gallery-item border border-white p-12 flex flex-col items-start justify-center relative group overflow-hidden"
              onMouseEnter={() => handleMouseEnter('healthcare')}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="text-3xl text-white group-hover:text-red-400 font-poppins font-semibold text-left relative z-10 group-hover:scale-105 transition-transform duration-500 w-full">
                Healthcare
              </h3>
              <p className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 ease-in-out text-white text-sm md:text-base text-left font-poppins font-light overflow-hidden">
                VST Group is dedicated to improving healthcare access in rural communities through mobile clinics and telemedicine initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  // Mobile View - Completely different layout
  const MobileView = () => (
    <div className="w-full px-4 py-8">
      {/* Header Section with Background Image */}
      <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
        <Image
          src={mainImg}
          alt="Initiative background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-6">
          <h2 className="text-3xl text-white font-poppins font-semibold mb-2">
            Our Initiatives
          </h2>
          <p className="text-gray-200 text-sm font-poppins font-light">
            At VST Group, our CSR initiatives are rooted in creating lasting, positive change.
          </p>
        </div>
      </div>

      {/* Initiatives as Cards */}
      <div className="space-y-4">
        {initiativeData.map((initiative) => (
          <div
            key={initiative.id}
            className="border border-white rounded-lg overflow-hidden"
          >
            <div
              className="flex items-center justify-between p-4 cursor-pointer"
              onClick={() => toggleMobileSection(initiative.id as 'education' | 'sustainability' | 'rural' | 'healthcare')}
            >
              <h3 className={`text-xl text-white font-poppins font-medium`}>
                {initiative.title}
              </h3>
              <span className="text-white text-2xl">
                {expandedMobileSection === initiative.id ? '−' : '+'}
              </span>
            </div>

            {expandedMobileSection === initiative.id && (
              <div className="p-4 pt-0 border-t border-gray-700">
                <div className="h-48 relative w-full mb-3 rounded overflow-hidden">
                  <Image
                    src={imagesMap[initiative.id as 'education' | 'sustainability' | 'rural' | 'healthcare']}
                    alt={initiative.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-white text-sm font-poppins font-light">
                  {initiative.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="w-full bg-black min-h-screen flex items-center">
      {isMobile ? <MobileView /> : <DesktopView />}
    </section>
  );
}
