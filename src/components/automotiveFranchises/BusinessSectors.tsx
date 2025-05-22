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
              <div className="flex items-end justify-center h-[100px] w-[100px] sm:h-[155px] sm:w-[155px]">
                <Image
                  src={Auto}
                  alt="Auto Parts"
                  width={155}
                  height={155}
                  className="object-contain"
                />
              </div>
            </Link>
          )}
          {!isEducationPage && (
            <Link href="/education" className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity">
              <div className="flex items-end justify-center h-[100px] w-[100px] sm:h-[155px] sm:w-[155px]">
                <Image
                  src={EducationIcon}
                  alt="Education"
                  width={155}
                  height={155}
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
          {!isAutoPartsPage && (
            <Link href="/auto-parts" className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity">
              <div className="flex items-end justify-center h-[100px] w-[100px] sm:h-[155px] sm:w-[155px]">
                <Image
                  src={Auto}
                  alt="Auto Parts"
                  width={155}
                  height={155}
                  className="object-contain"
                />
              </div>
            </Link>
          )}
          {!isManufacturePage && (
            <Link href="/manufacture" className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity">
              <div className="flex items-end justify-center h-[120px] w-[120px] sm:h-[190px] sm:w-[190px] -mt-8">
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
          {!isEducationPage && (
            <Link href="/education" className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity">
              <div className="flex items-end justify-center h-[100px] w-[100px] sm:h-[155px] sm:w-[155px]">
                <Image
                  src={EducationIcon}
                  alt="Education"
                  width={155}
                  height={155}
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
        className="w-full max-w-[1920px] py-6 sm:py-8 md:py-10 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-24"
        style={{ height: '454px' }}
      >
        <h2 className="font-roc font-medium text-[45px] leading-[100%] tracking-[0%] text-center text-white">
          Explore Our Other Business Sectors
        </h2>
        <div className="flex justify-center items-center mt-8">
          <div className="flex justify-center items-center gap-4 sm:gap-8 md:gap-12 lg:gap-24">
            {renderIcons()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSectors; 
