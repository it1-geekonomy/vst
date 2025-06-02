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
          <Link href="/automotive-franchises" className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity">
            <div className="flex items-end justify-center h-[50px] w-[50px] sm:h-[80px] sm:w-[155px] mt-14 sm:mt-14">
              <Automobile />
            </div>
          </Link>
          {!isAutoPartsPage && (
            <Link href="/auto-parts" className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity">
              <div className="flex items-end justify-center h-[90px] w-[125px] sm:h-[215px] sm:w-[275px] -mt-0 sm:-mt-20">
                <Auto />
              </div>
            </Link>
          )}
          {!isEducationPage && (
            <Link href="/education" className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity">
              <div className="flex items-end justify-center h-[65px] w-[65px] sm:h-[130px] sm:w-[130px] mt-8 sm:mt-5">
                  <EducationIcon />
              </div>
            </Link>
          )}
        </>
      );
    } else if (isAutomotiveFranchisesPage) {
      return (
        <>
          {!isManufacturePage && (
            <Link href="/manufacture" className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity">
              <div className="flex items-end justify-center h-[75px] w-[100px] sm:h-[190px] sm:w-[190px] mt-5 sm:-mt-11">
                <ManufacturingIcon />
              </div>
            </Link>
          )}
          {!isAutoPartsPage && (
            <Link href="/auto-parts" className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity">
              <div className="flex items-end justify-center h-[85px] w-[120px] sm:h-[210px] sm:w-[270px] mt-5 sm:-mt-18">
                <Auto />
              </div>
            </Link>
          )}
          {!isEducationPage && (
            <Link href="/education" className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity">
              <div className="flex items-end justify-center h-[75px] w-[75px] sm:h-[130px] sm:w-[130px] mt-7 sm:mt-5">
                <EducationIcon />
              </div>
            </Link>
          )}
        </>
      );
    }
  };
  
  return (
    <div className="w-full flex justify-center items-center relative z-10 mt-28">
      <div
        className="w-full max-w-[1920px] py-4 sm:py-6 md:py-8 lg:py-16 px-3 sm:px-6 md:px-8 lg:px-24"
        style={{ height: 'auto', minHeight: '454px' }}
      >
        <h2 className="font-roc font-medium text-[32px] sm:text-[40px] md:text-[45px] leading-[100%] tracking-[0%] text-center text-white mb-10 sm:mb-8 md:mb-10">
          Explore Our Other Business Sectors
        </h2>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-8 lg:gap-24 px-2 sm:px-4">
            {renderIcons()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSectors; 
