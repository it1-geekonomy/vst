"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import EducationIcon from '@/app/public/business-sector-White/education';
import Auto from '@/app/public/business-sector-White/auto-parts';
import ManufacturingIcon from '@/app/public/business-sector-White/manufature';
import Automobile from '@/app/public/business-sector-White/auto-mobile';
import FinanceIcon from "@/app/public/common/BusinessSectorIcons/FinanceIcon";

const BusinessSectors = () => {
  const pathname = usePathname();
  const isFinancePage = pathname === '/financial-services';
  const isAutoPartsPage = pathname === '/auto-parts';
  const isManufacturePage = pathname === '/manufacture';
  const isEducationPage = pathname === '/education';
  const isAutomotiveFranchisesPage = pathname === '/automotive-franchises';
  
  const baseCircleSize = "w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px] lg:w-[180px] lg:h-[180px]";
  const autoRectSize = "w-[110px] h-[70px] sm:w-[150px] sm:h-[95px] md:w-[180px] md:h-[120px] lg:w-[260px] lg:h-[180px]";
  const autoRectWideSize = "w-[120px] h-[70px] sm:w-[160px] sm:h-[95px] md:w-[200px] md:h-[120px] lg:w-[280px] lg:h-[180px]";
  const financeSize = "w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] md:w-[130px] md:h-[130px] lg:w-[180px] lg:h-[180px]";
  const baseLinkClass = "flex-shrink-0 sm:flex-shrink flex items-center justify-center hover:opacity-80 transition-opacity";

  const iconConfigs = {
    automotive: {
      href: "/automotive-franchises",
      size: baseCircleSize,
      element: <Automobile className="w-full h-full" />,
      condition: !isAutomotiveFranchisesPage,
    },
    autoParts: {
      href: "/auto-parts",
      size: autoRectSize,
      element: <Auto className="w-full h-full" />,
      condition: !isAutoPartsPage,
    },
    finance: {
      href: "/financial-services",
      size: financeSize,
      element: <FinanceIcon className="w-full h-full" />,
      condition: !isFinancePage,
    },
    education: {
      href: "/education",
      size: baseCircleSize,
      element: <EducationIcon className="w-full h-full" />,
      condition: !isEducationPage,
    },
    manufacture: {
      href: "/manufacture",
      size: baseCircleSize,
      element: <ManufacturingIcon className="w-full h-full" />,
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

        const sizeClass =
          key === "autoParts" && isAutomotiveFranchisesPage
            ? autoRectWideSize
            : config.size;

        return (
          <Link
            key={config.href}
            href={config.href}
            className={`${baseLinkClass} ${sizeClass}`}
          >
            {config.element}
          </Link>
        );
      })
      .filter(Boolean);
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
          <div className="flex flex-nowrap sm:flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 px-4 sm:px-6">
            {renderIcons()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSectors;
