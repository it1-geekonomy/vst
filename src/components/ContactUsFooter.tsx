import React from "react";
import Link from "next/link";
import Logo from "@/app/public/logos/Logo";
import Instagram from "@/app/public/images/LifeAtVst/Footer/Instagram";
import LinkedIn from "@/app/public/images/LifeAtVst/Footer/LinkedIn";
import Footerlogo from "@/app/public/logos/Footerlogo";
import dynamic from 'next/dynamic';

// Dynamically import the map component with no SSR
const MapWithNoSSR = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[240px] bg-gray-100 rounded-lg flex items-center justify-center">
      <p className="text-gray-500">Loading map...</p>
    </div>
  ),
});

const ContactUsFooter: React.FC<{ bgcolour: string }> = ({ bgcolour }) => {
  return (
    <footer className={`bg-[#101010] text-white py-10 mt-10 lg:mt-0 ${bgcolour}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col 2xl:flex-row justify-between items-center gap-6 2xl:items-start">
          {/* Logo Section */}
          <div className="w-full sm:w-4/5 2xl:w-1/4 flex flex-col items-center 2xl:items-start">
            <div className="flex flex-col items-center 2xl:items-start">
              <div className="flex items-center justify-center">
                <div className="scale-75 sm:scale-90 2xl:scale-100">
                  <Footerlogo />
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full sm:w-4/5 2xl:w-1/3 flex justify-center 2xl:justify-start  2xl:mt-0 px-10">
          <div className="rounded-lg overflow-hidden w-full max-w-md h-[240px]">
              <MapWithNoSSR />
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full sm:w-4/5 2xl:w-1/3 2xl:pl-4 flex flex-col items-center 2xl:items-start mt-4">
            <div className="mb-6 w-full text-center 2xl:text-left">
              <h3 className="text-lg lg:text-xl font-roc text-white inline-block">Contact Us</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 w-full">
              {/* Corporate Office */}
              <div className="flex flex-col items-center 2xl:items-start mb-2 sm:mb-0">
                <h4 className="text-[#FEBF3D] text-clamp-18 font-roc mb-3 inline-block">
                  Corporate Office
                </h4>
                <p className="text-white text-clamp-18 font-roc text-center 2xl:text-left whitespace-normal">#1, Palace Cross Road,</p>
                <p className="text-white text-clamp-18 font-roc text-center 2xl:text-left">Bengaluru - 560 020.</p>
                <div className="flex flex-col gap-2 mt-3">
                  <div className="flex items-center gap-2 text-white text-clamp-18 font-roc">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <span>+91&nbsp;80-2346&nbsp;8548</span>
                  </div>
                  <div className="flex items-center gap-2 text-white text-clamp-18 font-roc">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <span>mdoffice@vstsons.in</span>
                  </div>
                </div>
              </div>

              {/* Chennai Office */}
              <div className="flex flex-col items-center 2xl:items-start">
                <h4 className="text-[#FEBF3D] text-clamp-18 font-roc mb-3 inline-block">
                  Chennai Office
                </h4>
                <p className="text-white text-clamp-18 font-roc text-center 2xl:text-left whitespace-normal">#199, Anna Salai,</p>
                <p className="text-white text-clamp-18 font-roc text-center 2xl:text-left">Chennai - 600 002.</p>
                <div className="flex flex-col gap-2 mt-3">
                  <div className="flex items-center gap-2 text-white text-clamp-18 font-roc whitespace-nowrap">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 flex-shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <span>+91&nbsp;44-2860&nbsp;2485/86/87</span>
                  </div>
                  <div className="flex items-center gap-2 text-white text-clamp-18 font-roc">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <span>mdoffice@vstgroup.co.in</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="text-center text-gray-500 text-sm lg:text-base mt-8 pt-6"
          style={{
            borderTop: "1px solid",
            borderImage:
              "linear-gradient(to right, #000000, #FFFFFF, #000000) 1",
          }}
        >
          © Copyright Reserved VST Group 2024-2025
        </div>
      </div>
    </footer>
  );
};

export default ContactUsFooter;
