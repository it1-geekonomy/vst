"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import education1 from "@/app/public/Rectangle 6530.svg";
import education2 from "@/app/public/Rectangle 6531.svg";
import education3 from "@/app/public/page-8-vst 1.png";
import "@/styles/initiatives.css";
import mainImg from "@/app/public/making-a-difference/frame2.jpg";
import eduImg from "@/app/public/making-a-difference/Girl-image.png";
import sustainImg from "@/app/public/making-a-difference/Bulb-image.png";
import ruralImg from "@/app/public/making-a-difference/rural-img.png";
import healthImg from "@/app/public/making-a-difference/health-care.png";

const defaultImg = mainImg;
const imagesMap = {
  education: eduImg,
  sustainability: sustainImg,
  rural: ruralImg,
  healthcare: healthImg,
};

const initiativeData = [
  {
    id: "education",
    title: "Education",
    color: "blue-500",
    description:
      "As part of our Corporate Social Responsibility (CSR) initiatives, we dedicated INR 1.74 crores to the cause of promoting education in the city. By channeling resources into education, we aim to foster a highly educated workforce capable of effectively confronting the challenges that lie ahead.",
  },
  {
    id: "sustainability",
    title: "Sustainability",
    color: "green-400",
    description:
      "Our sustainability journey reflects a deep commitment to environmental responsibility—recycling 50% of water, generating 22% of energy from renewable sources, installing 1100 KW of solar capacity, planting over 1,000 trees, recycling 470 MT of waste, and implementing 46 stacks to reduce air pollution—driving meaningful and measurable impact across operations.",
  },
  {
    id: "rural",
    title: "Rural Development",
    color: "yellow-400",
    description:
      "The VST Group upholds its commitment to Corporate Social Responsibility by driving meaningful rural development, strengthening infrastructure, and supporting sustainable agricultural practices that uplift communities and foster long-term growth.",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    color: "red-400",
    description:
      "Established in 1948, this facility has been dedicated to offering affordable care to underserved communities. Over the years, it has grown and is now managed by the city of Bangalore. In 1960, a generous land donation helped expand the facility's mission, enabling a nonprofit organization to support over 10,000 individuals annually through rehabilitation and awareness programs across the region.",
  },
];
export default function Initiatives() {
  const [currentImg, setCurrentImg] = useState(defaultImg);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<
    "education" | "sustainability" | "rural" | "healthcare" | null
  >(null);

  // Detect if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Listen for resize events
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const handleMouseEnter = (
    section: "education" | "sustainability" | "rural" | "healthcare"
  ) => {
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

  const toggleMobileSection = (
    section: "education" | "sustainability" | "rural" | "healthcare"
  ) => {
    if (expandedMobileSection === section) {
      setExpandedMobileSection(null);
    } else {
      setExpandedMobileSection(section);
      setCurrentImg(imagesMap[section]);
    }
  };

  // Desktop View
  const DesktopView = () => (
    <section className="w-full h-screen flex items-center container mx-auto p-6">
      <div className="max-w-[1900px] w-full h-[110vh]">
        <div className="grid grid-cols-5 h-full">
          {/* Main Initiative */}
          <div className="col-span-2 border border-white relative group overflow-hidden">
            {/* Diagonal corner connectors using SVG */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-30"
              width="100%"
              height="100%"
            >
              {/* Top Left */}
              <line
                x1="0"
                y1="0"
                x2="40"
                y2="64"
                stroke="#FEBF3D"
                strokeWidth="1"
              />
              {/* Top Right */}
              <line
                x1="100%"
                y1="0"
                x2={`calc(100% - 40px)`}
                y2="64"
                stroke="#FEBF3D"
                strokeWidth="1"
              />
              {/* Bottom Left */}
              <line
                x1="0"
                y1="100%"
                x2="40"
                y2={`calc(100% - 64px)`}
                stroke="#FEBF3D"
                strokeWidth="1"
              />
              {/* Bottom Right */}
              <line
                x1="100%"
                y1="100%"
                x2={`calc(100% - 40px)`}
                y2={`calc(100% - 64px)`}
                stroke="#FEBF3D"
                strokeWidth="1"
              />
            </svg>
            {/* Image with border */}
            <div className="absolute m-10 my-16 border border-[#594B1D] overflow-hidden inset-0 transition-opacity duration-500 ease-in-out">
              <Image
                src={currentImg}
                alt="Initiative background"
                fill
                className="object-cover "
              />
            </div>
            {/* Text content with white gradient and shadow */}
            <div className="h-[calc(100%-15rem)] flex flex-col justify-center p-12 relative z-20">
              <div className="p-6">
                {activeSection === null ? (
                  <>
                    <h2 className="text-[2.5rem] text-[#fff] mb-6 font-roc font-semibold">
                      Our Initiatives
                    </h2>
                    <p className="text-[#fff] text-[17px] leading-relaxed font-roc font-normal text-justify">
                      At VST Group, our Corporate Social Responsibility (CSR)
                      initiatives are rooted in a deep sense of purpose and
                      commitment to creating lasting, positive change. We
                      believe that our success is intertwined with the
                      well-being of the communities we serve.
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="text-[2.5rem] text-[#fff] mb-6 font-roc font-semibold">
                      {
                        initiativeData.find((item) => item.id === activeSection)
                          ?.title
                      }
                    </h2>
                    <p className="text-[#fff] text-[17px] leading-relaxed font-roc font-normal text-justify">
                      {
                        initiativeData.find((item) => item.id === activeSection)
                          ?.description
                      }
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* All other initiatives in a single grid */}
          <div className="gallery border col-span-3 h-full grid grid-cols-2 grid-rows-2">
            <div
              className="gallery-item border border-white p-12 flex flex-col items-start justify-center relative group overflow-hidden"
              onMouseEnter={() => handleMouseEnter("education")}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="text-3xl text-white text-center relative z-10 group-hover:scale-105 transition-transform duration-500 w-full font-roc font-semibold">
                Education and Holistic Development
              </h3>
            </div>

            <div
              className="gallery-item border border-white p-12 flex flex-col items-start justify-center relative group overflow-hidden"
              onMouseEnter={() => handleMouseEnter("sustainability")}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="text-3xl text-white00 font-roc font-semibold text-center relative z-10 group-hover:scale-105 transition-transform duration-500 w-full">
                Sustainability
              </h3>
            </div>
            <div
              className="gallery-item border border-white p-12 flex flex-col items-start justify-center relative group overflow-hidden"
              onMouseEnter={() => handleMouseEnter("rural")}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="text-3xl text-white400 font-roc font-semibold text-center relative z-10 group-hover:scale-105 transition-transform duration-500 w-full">
                Rural Development
              </h3>
            </div>
            <div
              className="gallery-item border border-white p-12 flex flex-col items-start justify-center relative group overflow-hidden"
              onMouseEnter={() => handleMouseEnter("healthcare")}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="text-3xl text-white font-roc font-semibold text-center relative z-10 group-hover:scale-105 transition-transform duration-500 w-full">
                Healthcare
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

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
        <div className="absolute inset-0 flex flex-col justify-center p-6">
          <h2 className="text-3xl text-white font-roc font-semibold mb-2">
            Our Initiatives
          </h2>
          <p className="text-gray-200 text-sm font-roc font-light">
            At VST Group, our Corporate Social Responsibility (CSR) initiatives
            are rooted in a deep sense of purpose and commitment to creating
            lasting, positive change. We believe that our success is intertwined
            with the well-being of the communities we serve.
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
              onClick={() =>
                toggleMobileSection(
                  initiative.id as
                    | "education"
                    | "sustainability"
                    | "rural"
                    | "healthcare"
                )
              }
            >
              <h3 className={`text-xl text-white font-roc font-medium`}>
                {initiative.title}
              </h3>
              <span className="text-white text-2xl">
                {expandedMobileSection === initiative.id ? "−" : "+"}
              </span>
            </div>

            {expandedMobileSection === initiative.id && (
              <div className="p-4 pt-0 border-t border-gray-700">
                <div className="h-48 relative w-full mb-3 rounded overflow-hidden">
                  <Image
                    src={
                      imagesMap[
                        initiative.id as
                          | "education"
                          | "sustainability"
                          | "rural"
                          | "healthcare"
                      ]
                    }
                    alt={initiative.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-white text-sm font-roc font-light">
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
    <section className="w-full min-h-screen flex items-center">
      {isMobile ? <MobileView /> : <DesktopView />}
    </section>
  );
}
