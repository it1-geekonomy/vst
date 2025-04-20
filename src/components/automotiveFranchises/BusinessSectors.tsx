"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import EducationIcon from '@/app/public/common/BusinessSectorIcons/EducationIcon.png';
import Auto from '@/app/public/common/BusinessSectorIcons/Auto.png';
import ManufacturingIcon from '@/app/public/common/BusinessSectorIcons/ManufacturingIcon.png';
import Automobile from '@/app/public/common/BusinessSectorIcons/Automobile.png';
const BusinessSectors = () => {
  const pathname = usePathname();
  const isAutomotiveFranchisesPage = pathname === '/automotive-franchises';
  const isAutoPartsPage = pathname === '/auto-parts';
  const isManufacturePage = pathname === '/manufacture';
  const isEducationPage = pathname === '/education';
  
  return (
    <div className="w-full flex justify-center items-center relative z-10 mt-16 sm:mt-20 md:mt-24 lg:mt-28">
      <div
        className="w-full max-w-[1920px] py-4 sm:py-6 md:py-8 lg:py-12 px-2 sm:px-6 md:px-8 lg:px-16 xl:px-24"
        style={{ minHeight: '300px', height: 'auto' }}
      >
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-center font-semibold">
          Explore Our Other Business Sectors
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16">
          {/* Left arrow - shown on md and above */}
          <button className="text-white hidden md:block hover:opacity-80 transition-opacity">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex justify-center items-center gap-8 sm:gap-8 md:gap-22 lg:gap-12 xl:gap-16 w-full max-w-6xl">
            {!isAutomotiveFranchisesPage && (
              <Link href="/automotive-franchises" className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity group">
                <div className="w-[18vw] h-[18vw] sm:w-[15vw] sm:h-[15vw] md:w-[12vw] md:h-[12vw] lg:w-32 lg:h-32 xl:w-40 xl:h-40 relative">
                  <Image 
                    src={Automobile} 
                    alt="Auto" 
                    className="object-contain group-hover:scale-105 transition-transform duration-200"
                    fill
                    sizes="(max-width: 640px) 18vw, (max-width: 768px) 15vw, (max-width: 1024px) 12vw, (max-width: 1280px) 128px, 160px"
                  />
                </div>
                <span className="mt-2 text-xs sm:text-sm md:text-base text-center"></span>
              </Link>
            )}

            {!isAutoPartsPage && (
              <Link href="/auto-parts" className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity group">
                <div className="w-[18vw] h-[18vw] sm:w-[15vw] sm:h-[15vw] md:w-[12vw] md:h-[12vw] lg:w-32 lg:h-32 xl:w-40 xl:h-40 relative">
                  <Image 
                    src={Auto} 
                    alt="Auto Parts" 
                    className="object-contain group-hover:scale-105 transition-transform duration-200"
                    fill
                    sizes="(max-width: 640px) 18vw, (max-width: 768px) 15vw, (max-width: 1024px) 12vw, (max-width: 1280px) 128px, 160px"
                  />
                </div>
                <span className="mt-2 text-xs sm:text-sm md:text-base text-center"></span>
              </Link>
            )}

            {!isManufacturePage && (
              <Link href="/manufacture" className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity group">
                <div className="w-[18vw] h-[18vw] sm:w-[15vw] sm:h-[15vw] md:w-[12vw] md:h-[12vw] lg:w-32 lg:h-32 xl:w-40 xl:h-40 relative">
                  <Image 
                    src={ManufacturingIcon} 
                    alt="Manufacturing" 
                    className="object-contain group-hover:scale-105 transition-transform duration-200"
                    fill
                    sizes="(max-width: 640px) 18vw, (max-width: 768px) 15vw, (max-width: 1024px) 12vw, (max-width: 1280px) 128px, 160px"
                  />
                </div>
                <span className="mt-2 text-xs sm:text-sm md:text-base text-center"></span>
              </Link>
            )}

            {!isEducationPage && (
              <Link href="/education" className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity group">
                <div className="w-[18vw] h-[18vw] sm:w-[15vw] sm:h-[15vw] md:w-[12vw] md:h-[12vw] lg:w-32 lg:h-32 xl:w-40 xl:h-40 relative">
                  <Image 
                    src={EducationIcon} 
                    alt="Education" 
                    className="object-contain group-hover:scale-105 transition-transform duration-200"
                    fill
                    sizes="(max-width: 640px) 18vw, (max-width: 768px) 15vw, (max-width: 1024px) 12vw, (max-width: 1280px) 128px, 160px"
                  />
                </div>
                <span className="mt-2 text-xs sm:text-sm md:text-base text-center"></span>
              </Link>
            )}
          </div>

          {/* Right arrow - shown on md and above */}
          <button className="text-white hidden md:block hover:opacity-80 transition-opacity">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessSectors; 