"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import EducationIcon from '@/app/public/common/BusinessSectorIcons/EducationIcon.svg';
import Auto from '@/app/public/common/BusinessSectorIcons/Auto.svg';
import ManufacturingIcon from '@/app/public/common/BusinessSectorIcons/ManufacturingIcon.svg';
import Automobile from '@/app/public/common/BusinessSectorIcons/Automobile.svg';

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
            <div className="flex items-end justify-center h-[100px] w-[100px] sm:h-[155px] sm:w-[155px]">
              <Image
                src={Automobile}
                alt="Auto Mobile"
                width={155}
                height={155}
                className="object-contain"
              />
            </div>
          </Link>
          {!isAutoPartsPage && (
            <Link href="/auto-parts" className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity">
              <div className="flex items-end justify-center h-[85px] w-[120px] sm:h-[220px] sm:w-[280px] -mt-8 sm:-mt-18">
                <Image
                  src={Auto}
                  alt="Auto Parts"
                  width={280}
                  height={210}
                  className="object-contain"
                />
              </div>
            </Link>
          )}
          {!isEducationPage && (
            <Link href="/education" className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity">
              <div className="flex items-end justify-center h-[60px] w-[60px] sm:h-[130px] sm:w-[130px] -mt-2 sm:mt-5">
                <Image
                  src={EducationIcon}
                  alt="Education"
                  width={130}
                  height={130}
                  className="object-contain"
                />
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
              <div className="flex items-end justify-center h-[75px] w-[100px] sm:h-[190px] sm:w-[190px] -mt-5 sm:-mt-11">
                <Image
                  src={ManufacturingIcon}
                  alt="Manufacturing"
                  width={190}
                  height={190}
                  className="object-contain"
                />
              </div>
            </Link>
          )}
          {!isAutoPartsPage && (
            <Link href="/auto-parts" className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity">
              <div className="flex items-end justify-center h-[85px] w-[120px] sm:h-[220px] sm:w-[280px] -mt-8 sm:-mt-18">
                <Image
                  src={Auto}
                  alt="Auto Parts"
                  width={280}
                  height={210}
                  className="object-contain"
                />
              </div>
            </Link>
          )}
          {!isEducationPage && (
            <Link href="/education" className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity">
              <div className="flex items-end justify-center h-[60px] w-[60px] sm:h-[130px] sm:w-[130px] -mt-2 sm:mt-5">
                <Image
                  src={EducationIcon}
                  alt="Education"
                  width={130}
                  height={130}
                  className="object-contain"
                />
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
