"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import EducationIcon from '@/app/public/business-sector-White/education';
import Auto from '@/app/public/business-sector-White/auto-parts';
import ManufacturingIcon from '@/app/public/business-sector-White/manufature';
import Automobile from '@/app/public/business-sector-White/auto-mobile';

const BusinessSectors = () => {
  const pathname = usePathname();
  const isAutoPartsPage = pathname === '/auto-parts';
  const isManufacturePage = pathname === '/manufacture';
  const isEducationPage = pathname === '/education';
  const isAutomotiveFranchisesPage = pathname === '/automotive-franchises';
  
  const renderIcons = () => {
    if (isManufacturePage) {
      return (
        <>
          <Link
            href="/automotive-franchises"
            className="flex-shrink-0 sm:flex-shrink flex items-center justify-center w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[180px] lg:h-[180px] hover:opacity-80 transition-opacity"
          >
            <Automobile className="w-full h-full" />
          </Link>
          {!isAutoPartsPage && (
            <Link
              href="/auto-parts"
              className="flex-shrink-0 sm:flex-shrink flex items-center justify-center w-[120px] h-[80px] sm:w-[160px] sm:h-[100px] md:w-[180px] md:h-[120px] lg:w-[260px] lg:h-[180px] hover:opacity-80 transition-opacity"
            >
              <Auto className="w-full h-full" />
            </Link>
          )}
          {!isEducationPage && (
            <Link
                href="/education"
              className="flex-shrink-0 sm:flex-shrink flex items-center justify-center w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[180px] lg:h-[180px] hover:opacity-80 transition-opacity"
            >
              <EducationIcon className="w-full h-full" />
              </Link>
          )}
        </>
      );
    } else if (isAutomotiveFranchisesPage) {
      return (
        <>
          {!isManufacturePage && (
            <Link
              href="/manufacture"
              className="flex-shrink-0 sm:flex-shrink flex items-center justify-center w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[180px] lg:h-[180px] hover:opacity-80 transition-opacity"
            >
              <ManufacturingIcon className="w-full h-full" />
            </Link>
          )}
          {!isAutoPartsPage && (
            <Link
              href="/auto-parts"
              className="flex-shrink-0 sm:flex-shrink flex items-center justify-center w-[120px] h-[80px] sm:w-[160px] sm:h-[100px] md:w-[180px] md:h-[120px] lg:w-[260px] lg:h-[180px] hover:opacity-80 transition-opacity"
            >
              <Auto className="w-full h-full" />
            </Link>
          )}
          {!isEducationPage && (
            <Link
              href="/education"
              className="flex-shrink-0 sm:flex-shrink flex items-center justify-center w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[180px] lg:h-[180px] hover:opacity-80 transition-opacity"
            >
              <EducationIcon className="w-full h-full" />
            </Link>
          )}
        </>
      );
    } else if (isEducationPage) {
      return (
        <>
          {!isAutomotiveFranchisesPage && (
            <Link
              href="/automotive-franchises"
              className="flex-shrink-0 sm:flex-shrink flex items-center justify-center w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[180px] lg:h-[180px] hover:opacity-80 transition-opacity"
            >
              <Automobile className="w-full h-full" />
            </Link>
          )}
          {!isAutoPartsPage && (
            <Link
              href="/auto-parts"
              className="flex-shrink-0 sm:flex-shrink flex items-center justify-center w-[120px] h-[80px] sm:w-[160px] sm:h-[100px] md:w-[180px] md:h-[120px] lg:w-[260px] lg:h-[180px] hover:opacity-80 transition-opacity"
            >
              <Auto className="w-full h-full" />
            </Link>
          )}
          {!isManufacturePage && (
            <Link
              href="/manufacture"
              className="flex-shrink-0 sm:flex-shrink flex items-center justify-center w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[180px] lg:h-[180px] hover:opacity-80 transition-opacity"
            >
              <ManufacturingIcon className="w-full h-full" />
            </Link>
          )}
        </>
      );
    }
    else if (isAutoPartsPage) {
      return (
        <>
          {!isAutomotiveFranchisesPage && (
            <Link
              href="/automotive-franchises"
              className="flex-shrink-0 sm:flex-shrink flex items-center justify-center w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[180px] lg:h-[180px] hover:opacity-80 transition-opacity"
            >
              <Automobile className="w-full h-full" />
            </Link>
          )}
          {!isManufacturePage && (
            <Link
              href="/manufacture"
              className="flex-shrink-0 sm:flex-shrink flex items-center justify-center w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[180px] lg:h-[180px] hover:opacity-80 transition-opacity"
            >
              <ManufacturingIcon className="w-full h-full" />
            </Link>
          )}
          {!isEducationPage && (
            <Link
              href="/education"
              className="flex-shrink-0 sm:flex-shrink flex items-center justify-center w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[180px] lg:h-[180px] hover:opacity-80 transition-opacity"
            >
              <EducationIcon className="w-full h-full" />
            </Link>
          )}
        </>
      );
    }
  };
  
  return (
      <div className="w-full flex justify-center items-center relative z-10 mt-6 sm:mt-10 md:mt-28 ">
      <div
        className="w-full max-w-[1920px] py-0 sm:py-6 md:py-8 lg:py-16 lg:pb-8 px-3 sm:px-6 md:px-8 lg:px-24 min-h-[200px] sm:min-h-[354px]"
      >
        <h2 className="font-roc font-medium text-[22px] sm:text-[30px] md:text-[35px] leading-[100%] tracking-[0%] text-center text-white mb-10 sm:mb-8 md:mb-10">
          Explore Our Other Business Sectors
        </h2>
        <div className="flex justify-center items-center">
          <div className="flex flex-nowrap sm:flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-2 sm:px-4">
            {renderIcons()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSectors;
