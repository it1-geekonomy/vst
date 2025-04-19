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
    <div className="w-full flex justify-center items-center relative z-10 mt-28"> {/* Adjusted top margin */}
      <div
        className="w-full max-w-[1920px] py-6 sm:py-8 md:py-10 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-24"
        style={{ height: '454px' }}
      >
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-12 sm:mb-16 md:mb-20 lg:mb-24 text-center">
          Explore Our Other Business Sectors
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-12 lg:gap-24">
          {/* Left arrow - shown on md and above */}
          <button className="text-white hidden md:block hover:opacity-80 transition-opacity">
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
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

          <div className="flex gap-8 sm:gap-12 md:gap-16 lg:gap-24 px-2 sm:px-4 md:px-6 lg:px-0">
          {!isAutomotiveFranchisesPage && (
            <Link href="/automotive-franchises" className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity">
              <Image src={Automobile} alt="Auto" />
              <span className="mt-2 text-xs sm:text-sm"></span>
            </Link>
          )}
            {!isAutoPartsPage && (
              <Link href="/auto-parts" className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity">
                <Image src={Auto} alt="Auto" />
                <span className="mt-2 text-xs sm:text-sm"></span>
              </Link>
            )}

            {!isManufacturePage && (
              <Link href="/manufacture" className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity">
                <Image src={ManufacturingIcon} alt="Manufacturing" />
                <span className="mt-2 text-xs sm:text-sm"></span>
              </Link>
            )}

            {!isEducationPage && (
              <Link href="/education" className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity">
                <Image src={EducationIcon} alt="Education" />
                <span className="mt-2 text-xs sm:text-sm"></span>
              </Link>
            )}
          </div>

          <button className="text-white hidden md:block hover:opacity-80 transition-opacity">
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
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
        {/* Mobile arrows container - centered below logos */}
        <div className="flex justify-center items-center gap-8 md:hidden mt-4">
          <button className="text-white hover:opacity-80 transition-opacity">
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12"
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

          <button className="text-white hover:opacity-80 transition-opacity">
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12"
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