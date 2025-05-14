"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import EducationIcon from "@/app/public/education/Education.png";
import Auto from "@/app/public/education/Auto Parts.png";
import ManufacturingIcon from "@/app/public/education/Manufacturing.png";
import Automobile from "@/app/public/education/Auto mobile.png";
const BusinessSectorsUpdated = () => {
  const pathname = usePathname();
  const isAutomotiveFranchisesPage = pathname === "/automotive-franchises";
  const isAutoPartsPage = pathname === "/auto-parts";
  const isManufacturePage = pathname === "/manufacture";
  const isEducationPage = pathname === "/education";

  return (
    <div className="w-full flex justify-center items-center relative z-10 mt-28">
      {" "}
      {/* Adjusted top margin */}
      <div
        className="w-full max-w-[1920px] py-6 sm:py-8 md:py-10 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-24"
        style={{ height: "454px" }}
      >
        <h2 className="font-roc font-normal text-[40px] leading-[100%] tracking-[0%] text-center text-[#230715]">
          Explore Our Other Business Sectors
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-12 lg:gap-24">
          {/* Desktop view - hidden on mobile */}
          <div className="hidden md:flex gap-8 sm:gap-12 md:gap-16 lg:gap-24 px-2 sm:px-4 md:px-6 lg:px-0">
            {!isAutomotiveFranchisesPage && (
              <Link
                href="/automotive-franchises"
                className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity"
              >
                <div className="flex items-end justify-center h-[120px] w-[120px]">
                  <Image
                    src={Automobile}
                    alt="Auto"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
              </Link>
            )}
            {!isManufacturePage && (
              <Link
                href="/manufacture"
                className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity"
              >
                <div className="flex items-end justify-center h-[130px] w-[130px] -mt-3">
                  <Image
                    src={ManufacturingIcon}
                    alt="Manufacturing"
                    width={135}
                    height={135}
                    className="object-contain"
                  />
                </div>
              </Link>
            )}
            {!isAutoPartsPage && (
              <Link
                href="/auto-parts"
                className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity"
              >
                <div className="flex items-end justify-center h-[120px] w-[120px]">
                  <Image
                    src={Auto}
                    alt="Auto"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
              </Link>
            )}
            {!isEducationPage && (
              <Link
                href="/education"
                className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity"
              >
                <div className="flex items-end justify-center h-[100px] w-[100px] pt-30">
                  <Image
                    src={EducationIcon}
                    alt="Education"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </Link>
            )}
          </div>

          {/* Mobile view - horizontal scroller with one icon at a time */}
          <div className="md:hidden w-full overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory">
            <div className="flex gap-8 min-w-max">
              {!isAutomotiveFranchisesPage && (
                <Link
                  href="/automotive-franchises"
                  className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity snap-center w-[80vw]"
                >
                  <div className="w-full flex justify-center">
                    <div className="flex items-end justify-center h-[120px] w-[120px]">
                      <Image
                        src={Automobile}
                        alt="Auto"
                        width={120}
                        height={120}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </Link>
              )}
              {!isManufacturePage && (
                <Link
                  href="/manufacture"
                  className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity snap-center w-[80vw]"
                >
                  <div className="w-full flex justify-center">
                    <div className="flex items-end justify-center h-[130px] w-[130px] -mt-3">
                      <Image
                        src={ManufacturingIcon}
                        alt="Manufacturing"
                        width={135}
                        height={135}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </Link>
              )}
              {!isAutoPartsPage && (
                <Link
                  href="/auto-parts"
                  className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity snap-center w-[80vw]"
                >
                  <div className="w-full flex justify-center">
                    <div className="flex items-end justify-center h-[120px] w-[120px]">
                      <Image
                        src={Auto}
                        alt="Auto"
                        width={120}
                        height={120}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </Link>
              )}
              {!isEducationPage && (
                <Link
                  href="/education"
                  className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity snap-center w-[80vw]"
                >
                  <div className="w-full flex justify-center">
                    <div className="flex items-end justify-center h-[100px] w-[100px] pt-30">
                      <Image
                        src={EducationIcon}
                        alt="Education"
                        width={100}
                        height={100}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSectorsUpdated;
