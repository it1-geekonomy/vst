import React from 'react';
import Link from 'next/link';
import EducationIcon from '@/app/public/common/BusinessSectorIcons/EducationIcon';
import FinanceIcon from '@/app/public/common/BusinessSectorIcons/FinanceIcon';
import ManufacturingIcon from '@/app/public/common/BusinessSectorIcons/ManufacturingIcon';

const BusinessSectors = () => {
  return (
    <div className="w-full flex justify-center items-center relative z-10 mt-28"> {/* Adjusted top margin */}
      <div
        className="w-full max-w-[1920px] py-6 sm:py-8 md:py-10 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-24"
        style={{ height: '454px' }}
      >
       <h2 className="text-white text-6xl mb-24 text-center">
                Explore Our Other Business Sectors
      </h2>
      <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-20">
        <button className="text-white hidden md:block hover:opacity-80 transition-opacity">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
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

          <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-20 overflow-x-auto px-2 sm:px-4 md:px-6 lg:px-0 scrollbar-hide">
            <Link href="#" className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity">
              <FinanceIcon />
              <span className="mt-2 text-xs sm:text-sm"></span>
            </Link>

            <Link href="/manufacture" className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity">
              <ManufacturingIcon />
              <span className="mt-2 text-xs sm:text-sm"></span>
            </Link>

            <Link href="/education" className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity">
              <EducationIcon />
              <span className="mt-2 text-xs sm:text-sm"></span>
            </Link>
          </div>

        <button className="text-white hidden md:block hover:opacity-80 transition-opacity">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
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
  );
};

export default BusinessSectors; 