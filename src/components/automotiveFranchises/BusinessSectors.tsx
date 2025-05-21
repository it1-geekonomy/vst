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
  
  const renderDesktopIcons = () => {
    if (isManufacturePage) {
      return (
        <>
          <Link href="/automotive-franchises" className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity">
            <div className="flex items-end justify-center h-[155px] w-[155px] mt-1">
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
              <div className="flex items-end justify-center h-[155px] w-[155px] mt-1">
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
              <div className="flex items-end justify-center h-[140px] w-[140px] pt-40">
                <Image
                  src={EducationIcon}
                  alt="Education"
                  width={140}
                  height={140}
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
              <div className="flex items-end justify-center h-[155px] w-[155px] mt-1">
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
              <div className="flex items-end justify-center h-[190px] w-[190px] -mt-8">
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
              <div className="flex items-end justify-center h-[140px] w-[140px] pt-40">
                <Image
                  src={EducationIcon}
                  alt="Education"
                  width={140}
                  height={140}
                  className="object-contain"
                />
              </div>
            </Link>
          )}
        </>
      );
    }
  };

  const renderMobileIcons = () => {
    if (isManufacturePage) {
      return (
        <>
          <Link href="/automotive-franchises" className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity snap-center w-[80vw]">
            <div className="w-full flex justify-center">
              <div className="flex items-end justify-center h-[155px] w-[155px] mt-1">
                <Image
                  src={Automobile}
                  alt="Auto Mobile"
                  width={155}
                  height={155}
                  className="object-contain"
                />
              </div>
            </div>
          </Link>
          {!isAutoPartsPage && (
            <Link href="/auto-parts" className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity snap-center w-[80vw]">
              <div className="w-full flex justify-center">
                <div className="flex items-end justify-center h-[155px] w-[155px] mt-1">
                  <Image
                    src={Auto}
                    alt="Auto Parts"
                    width={155}
                    height={155}
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>
          )}
          {!isEducationPage && (
            <Link href="/education" className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity snap-center w-[80vw]">
              <div className="w-full flex justify-center">
                <div className="flex items-end justify-center h-[140px] w-[140px] pt-40">
                  <Image
                    src={EducationIcon}
                    alt="Education"
                    width={140}
                    height={140}
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>
          )}
        </>
      );
    } else if (isAutomotiveFranchisesPage) {
      return (
        <>
          {!isAutoPartsPage && (
            <Link href="/auto-parts" className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity snap-center w-[80vw]">
              <div className="w-full flex justify-center">
                <div className="flex items-end justify-center h-[155px] w-[155px] mt-1">
                  <Image
                    src={Auto}
                    alt="Auto Parts"
                    width={155}
                    height={155}
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>
          )}
          {!isManufacturePage && (
            <Link href="/manufacture" className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity snap-center w-[80vw]">
              <div className="w-full flex justify-center">
                <div className="flex items-end justify-center h-[170px] w-[170px] -mt-3">
                  <Image
                    src={ManufacturingIcon}
                    alt="Manufacturing"
                    width={175}
                    height={175}
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>
          )}
          {!isEducationPage && (
            <Link href="/education" className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity snap-center w-[80vw]">
              <div className="w-full flex justify-center">
                <div className="flex items-end justify-center h-[140px] w-[140px] pt-40">
                  <Image
                    src={EducationIcon}
                    alt="Education"
                    width={140}
                    height={140}
                    className="object-contain"
                  />
                </div>
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
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-12 lg:gap-24">
          {/* Desktop view - hidden on mobile */}
          <div className="hidden md:flex gap-8 sm:gap-12 md:gap-16 lg:gap-24 px-2 sm:px-4 md:px-6 lg:px-0">
            {renderDesktopIcons()}
          </div>

          {/* Mobile view - horizontal scroller with one icon at a time */}
          <div className="md:hidden w-full overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory">
            <div className="flex gap-8 min-w-max">
              {renderMobileIcons()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSectors; 
