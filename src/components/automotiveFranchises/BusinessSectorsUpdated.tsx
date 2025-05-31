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
    <div className="w-full flex justify-center items-center relative z-10 mt-28 ">
      {" "}
      {/* Adjusted top margin */}
      <div
        className="w-full max-w-[1920px] py-6 sm:py-8 md:py-10 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-24"
        style={{ height: "454px" }}
      >
        <h2 className="font-roc font-medium text-[45px] leading-[100%] tracking-[0%] text-center text-[#230715] mb-4">
          Explore Our Other Business Sectors
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Desktop view - hidden on mobile */}
          <div className="hidden md:flex justify-center items-center gap-4 sm:gap-8 md:gap-12 lg:gap-24">
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
            {!isAutoPartsPage && (
              <Link
                href="/auto-parts"
                className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity"
              >
                <div className="flex items-end justify-center h-[120px] w-[190px]">
                  <Image
                    src={Auto}
                    alt="Auto"
                    width={300}
                    height={300}
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
                <div className="flex items-end justify-center h-[120px] w-[160px]">
                  <Image
                    src={ManufacturingIcon}
                    alt="Manufacturing"
                    width={120}
                    height={160}
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
                <div className="flex items-end justify-center h-[120px] w-[100px]">
                  <Image
                    src={EducationIcon}
                    alt="Education"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
              </Link>
            )}
          </div>

          {/* Mobile view - horizontal layout without scrolling */}
          <div className="md:hidden w-full px-4">
            <div className="flex justify-center items-center gap-4 sm:gap-8">
              {!isAutomotiveFranchisesPage && (
                <Link
                  href="/automotive-franchises"
                  className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity"
                >
                  <div className="flex items-end justify-center h-[90px] w-[90px]">
                    <Image
                      src={Automobile}
                      alt="Auto"
                      width={90}
                      height={90}
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
                  <div className="flex items-end justify-center h-[90px] w-[90px]">
                    <Image
                      src={Auto}
                      alt="Auto"
                      width={200}
                      height={200}
                      className="object-contain -mb-10"
                    />
                  </div>
                </Link>
              )}
              {!isManufacturePage && (
                <Link
                  href="/manufacture"
                  className="flex flex-col items-center flex-shrink-0 text-white hover:opacity-80 transition-opacity"
                >
                  <div className="flex items-end justify-center h-[90px] w-[90px]">
                    <Image
                      src={ManufacturingIcon}
                      alt="Manufacturing"
                      width={90}
                      height={90}
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
                  <div className="flex items-end justify-center h-[90px] w-[90px]">
                    <Image
                      src={EducationIcon}
                      alt="Education"
                      width={90}
                      height={90}
                      className="object-contain"
                    />
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
