"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import education1 from "@/app/public/Rectangle 6530.svg";
import education2 from "@/app/public/Rectangle 6531.svg";
import education3 from "@/app/public/page-8-vst 1.png";
import "@/styles/initiatives.css";
import mainImg from "@/app/public/making-a-difference/frame2.png";
import eduImg from "@/app/public/making-a-difference/Girl-image.jpeg";
import sustainImg from "@/app/public/making-a-difference/Bulb-image.jpeg";
import ruralImg from "@/app/public/making-a-difference/frame2.png";
import healthImg from "@/app/public/making-a-difference/frame2.png";

const defaultImg = mainImg;
const imagesMap = {
  education: eduImg,
  sustainability: sustainImg,
  rural: ruralImg,
  healthcare: healthImg
}

export default function Initiatives() {

  const [currentImg, setCurrentImg] = useState(defaultImg);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleMouseEnter = (section: 'education' | 'sustainability' | 'rural' | 'healthcare') => {
    setCurrentImg(imagesMap[section]);
    setActiveSection(section);
  };

  const handleMouseLeave = () => {
    setCurrentImg(defaultImg);
    setActiveSection(null);
  };

  return (
    <section className="w-full bg-black h-screen flex items-center">
      <div className="max-w-[1900px] mx-auto w-full h-full">
        <div className="grid grid-cols-5 h-full">
          {/* Main Initiative */}
          <div className="col-span-2 border border-white relative group overflow-hidden">
            <div className="absolute  m-10 my-12 border border-[#594B1D] overflow-hidden inset-0 transition-opacity duration-500 ease-in-out">
              <Image
                src={currentImg}
                alt="Initiative background"
                fill
                className="object-cover"
              />
            </div>
            <div className=" h-[calc(100%-6rem)] flex flex-col justify-center p-12 relative z-10">
              <h2 className="text-5xl text-white mb-6 font-bold">
                Our Initiatives
              </h2>
              <p className="text-gray-300 text-xl leading-relaxed">
                At VST Group, our Corporate Social Responsibility (CSR)
                initiatives are rooted in a deep sense of purpose and commitment
                to creating lasting, positive change. We believe that our
                success is intertwined with the well-being of the communities we
                serve.
              </p>
            </div>
          </div>

          {/* All other initiatives in a single grid */}
          <div className="gallery border border-blue-500 col-span-3 h-full grid grid-cols-2 grid-rows-2">
            <div className="gallery-item border border-white p-12 flex flex-col items-start justify-center relative group overflow-hidden"
              onMouseEnter={() => handleMouseEnter('education')}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="text-3xl text-blue-500 font-semibold text-left relative z-10 group-hover:scale-105 transition-transform duration-500 w-full">
                Education and Holistic Development
              </h3>
              <div className={`${activeSection === 'education' ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'} 
                                        overflow-hidden transition-all duration-500 w-full`}>
                <p className="text-white text-sm md:text-base text-left">
                  The VST Group is committed to Corporate Social Responsibility through impactful rural development,
                  enhancing infrastructure and promoting sustainable agriculture. We are leading the transition to
                  renewable energy by powering our fuel outlets with solar panels, reducing CO2 emissions by 15% in 2022.
                </p>
              </div>
            </div>
            <div className="gallery-item border border-white p-12 flex flex-col items-start justify-center relative group overflow-hidden"
              onMouseEnter={() => handleMouseEnter('sustainability')}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="text-3xl text-white font-semibold text-left relative z-10 group-hover:scale-105 transition-transform duration-500 w-full">
                Sustainability
              </h3>
              <div className={`${activeSection === 'sustainability' ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'} 
                                        overflow-hidden transition-all duration-500 w-full`}>
                <p className="text-white text-sm md:text-base text-left">
                  VST Group is committed to sustainability through initiatives aimed at reducing its carbon footprint and promoting renewable energy.
                </p>
              </div>
            </div>
            <div className="gallery-item border border-white p-12 flex flex-col items-start justify-center relative group overflow-hidden"
              onMouseEnter={() => handleMouseEnter('rural')}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="text-3xl text-white font-semibold text-left relative z-10 group-hover:scale-105 transition-transform duration-500 w-full">
                Rural Development
              </h3>
              <div className={`${activeSection === 'rural' ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'} 
                                        overflow-hidden transition-all duration-500 w-full`}>
                <p className="text-white text-sm md:text-base text-left">
                  The VST Group is committed to Corporate Social Responsibility through impactful rural development in underserved communities.
                </p>
              </div>
            </div>
            <div className="gallery-item border border-white p-12 flex flex-col items-start justify-center relative group overflow-hidden"
              onMouseEnter={() => handleMouseEnter('healthcare')}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="text-3xl text-white font-semibold text-left relative z-10 group-hover:scale-105 transition-transform duration-500 w-full">
                Healthcare
              </h3>
              <div className={`${activeSection === 'healthcare' ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'} 
                                        overflow-hidden transition-all duration-500 w-full`}>
                <p className="text-white text-sm md:text-base text-left">
                  VST Group is dedicated to improving healthcare access in rural communities through mobile clinics and telemedicine initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
