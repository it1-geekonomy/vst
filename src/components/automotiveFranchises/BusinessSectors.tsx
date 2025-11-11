"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import EducationPng from '@/app/public/common/BusinessSectorIcons/Education.png';
import FinancialPng from '@/app/public/common/BusinessSectorIcons/Financial.png';
import ManufacturingPng from '@/app/public/common/BusinessSectorIcons/Manufacturing.png';
import OePartsPng from '@/app/public/common/BusinessSectorIcons/Oe parts & distribution.png';
import AutomotivePng from '@/app/public/common/BusinessSectorIcons/Automobile.png';

const BusinessSectors = () => {
  const pathname = usePathname();
  const isFinancePage = pathname === '/financial-services';
  const isAutoPartsPage = pathname === '/auto-parts';
  const isManufacturePage = pathname === '/manufacture';
  const isEducationPage = pathname === '/education';
  const isAutomotiveFranchisesPage = pathname === '/automotive-franchises';
  
  const baseHeightSize =
    "h-[45px] sm:h-[60px] md:h-[80px] lg:h-[100px]";
  const iconSizes = {
    automotive: `w-[60px] sm:w-[100px] md:w-[130px] lg:w-[160px] ${baseHeightSize}`,
    autoParts: `w-[80px] sm:w-[160px] md:w-[200px] lg:w-[240px] ${baseHeightSize}`,
    finance: `w-[80px] sm:w-[140px] md:w-[160px] lg:w-[180px] ${baseHeightSize}`,
    education: `w-[40px] sm:w-[100px] md:w-[130px] lg:w-[160px] ${baseHeightSize}`,
    manufacture: `w-[70px] sm:w-[130px] md:w-[160px] lg:w-[190px] ${baseHeightSize}`,
  } as const;
  const baseLinkClass =
    "flex-shrink-0 sm:flex-shrink flex flex-col items-center justify-start text-center hover:opacity-80 transition-opacity text-white gap-2";

  const iconConfigs = {
    automotive: {
      href: "/automotive-franchises",
      size: iconSizes.automotive,
      label: "Automotive Franchises",
      image: AutomotivePng,
      condition: !isAutomotiveFranchisesPage,
    },
    autoParts: {
      href: "/auto-parts",
      size: iconSizes.autoParts,
      label: "OE Parts Distribution",
      image: OePartsPng,
      condition: !isAutoPartsPage,
    },
    finance: {
      href: "/financial-services",
      size: iconSizes.finance,
      label: "Financial Services",
      image: FinancialPng,
      condition: !isFinancePage,
    },
    education: {
      href: "/education",
      size: iconSizes.education,
      label: "Education",
      image: EducationPng,
      condition: !isEducationPage,
    },
    manufacture: {
      href: "/manufacture",
      size: iconSizes.manufacture,
      label: "Manufacturing",
      image: ManufacturingPng,
      condition: !isManufacturePage,
    },
  } as const;

  const renderIcons = () => {
    const orders: Array<keyof typeof iconConfigs> = isManufacturePage
      ? ["automotive", "autoParts", "finance", "education"]
      : isAutomotiveFranchisesPage
      ? ["manufacture", "autoParts", "finance", "education"]
      : isEducationPage
      ? ["automotive", "autoParts", "finance", "manufacture"]
      : isAutoPartsPage
      ? ["automotive", "manufacture", "finance", "education"]
      : isFinancePage
      ? ["automotive", "autoParts", "manufacture", "education"]
      : ["automotive", "autoParts", "manufacture", "education", "finance"];

    return orders
      .map((key) => {
        const config = iconConfigs[key];
        if (!config || !config.condition) {
          return null;
        }

        return (
          <Link
            key={config.href}
            href={config.href}
            className={baseLinkClass}
          >
            <div className={`relative ${config.size}`}>
              <Image
                src={config.image}
                alt={config.label}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 120px, (max-width: 768px) 160px, (max-width: 1024px) 200px, 240px"
              />
            </div>
            <span className="font-roc text-[9px] sm:text-xs md:text-sm lg:text-base">
              {config.label}
            </span>
          </Link>
        );
      })
      .filter(Boolean);
  };
  
  return (
      <div className="w-full flex justify-center items-center relative z-10 mt-6 sm:mt-10 md:mt-2 ">
      <div
        className="w-full max-w-[1920px] py-0 sm:py-6 md:py-8 lg:py-16 lg:pb-8 px-3 sm:px-6 md:px-8 lg:px-24 min-h-[200px] sm:min-h-[300px]"
      >
        <h2 className="font-roc font-medium text-[22px] sm:text-[30px] md:text-[35px] leading-[100%] tracking-[0%] text-center text-white mb-10 sm:mb-8 md:mb-10">
          Explore Our Other Business Sectors
        </h2>
        <div className="flex justify-center items-center">
          <div className="flex flex-nowrap sm:flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-12 px-4 sm:px-6">
            {renderIcons()}
          </div>
        </div>
      </div>  
    </div>
  );
};

export default BusinessSectors;
