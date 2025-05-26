"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "./Footer";
import Initiatives from "./Initiatives";
import bg from "../app/public/makingdiff/orange-bg.png";
import VSTLogoAnimation from "./VSTLogoAnimation";
import TimelineSection from "./TimelineSection";

const CSR = () => {
  return (
    <div className={`flex flex-col min-h-screen font-roc font-normal`}>
      <main className="relative flex-grow overflow-x-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={bg}
            alt="Background Pattern"
            fill
            className="object-fill w-full h-full"
            priority
          />
        </div>
        {/* Content */}
        <motion.div
          className="relative w-full z-10"
          initial={false}
          transition={{ duration: 0.01 }}
        >
          {/* Hero Section */}
          <section className="relative h-[50vh] sm:h-[60vh] md:h-[75vh] 2xl:h-[60vh] overflow-hidden z-10">
            <div className="relative h-full flex flex-col items-center justify-start text-white px-4 sm:px-6 md:px-8  sm:pt-20 pb-20">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[5.5rem] font-light font-roc text-left mb-2 sm:mb-4">
                Making a Difference
              </h1>
              <p className="text-sm sm:text-base md:text-[22px] text-center max-w-6xl 2xl:max-w-7xl mx-auto text-gray-200 leading-relaxed text-justify px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8rounded-lg mb-16 sm:mb-20 md:mb-18 font-normal font-roc">
                Rooted in a legacy of responsibility and service, VST Group,
                through the V.S. Tiruvengadaswamy Mudaliar Memorial Trust, has
                consistently extended its hand to communities in need. From
                supporting education and healthcare to empowering the
                differently-abled, protecting wildlife, and responding to
                humanitarian crises, our CSR initiatives reflect a deep
                commitment to creating a meaningful and lasting impact. Guided
                by empathy and driven by purpose, we believe in building a
                better future—not just through business, but through compassion,
                care, and collective upliftment.
              </p>
            </div>
          </section>
          {/* Initiatives Section */}
          <div className="w-full py-6 sm:py-4 md:py-6 lg:py-8 pl-0 sm:pl-0 ">
            <Initiatives />
          </div>
          <TimelineSection />
        </motion.div>
        <div className="w-full mt-60 mb-15">
          <VSTLogoAnimation />
        </div>
      </main>
      <Footer bgcolour="bg-black" />
    </div>
  );
};

export default CSR;
