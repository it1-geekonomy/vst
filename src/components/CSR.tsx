"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "./Footer";
import bg from "../app/public/makingdiff/orange-bg.png";
import VSTLogoAnimation from "./VSTLogoAnimation";
import Timeline from "./Timeline";
import InitiativesSection from "./InitiativesSection";
export default function CorporatePhilanthropy() {
  return (
    <div className={`flex flex-col min-h-screen font-roc font-normal`}>
      <main className="relative flex-grow overflow-x-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={bg}
            alt="Background Pattern"
            fill
            className="object-cover w-full h-full"
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
          <section className="relative overflow-hidden z-10">
            <div className="relative h-full flex flex-col items-center justify-start text-white py-14 md:py-16 xl:py-24">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-roc drop-shadow-lg pointer-events-auto -mt-2 md:mt-0">Corporate Philanthropy</h1>
              <h1 className="text-clamp-36  font-medium pb-2  pt-8  lg:pb-8 xl:pb-6">
                Making a Difference
              </h1>
              <p className="text-[#FFFFFF] text-clamp-28 text-justify px-6  md:px-32 lg:px-48 xl:px-52 font-light">
                Rooted in a legacy of responsibility and service, VST Group,
                through the V. S. Tiruvengadaswamy Mudaliar Memorial Trust, has
                consistently extended its hand to communities in need. From
                supporting education and healthcare to empowering the
                differently-abled, protecting wildlife, and responding to
                humanitarian crises, our CSR initiatives reflect a deep
                commitment to creating a meaningful and lasting impact. Guided
                by empathy and driven by purpose, we believe in building a
                better future — not just through business, but through
                compassion, care, and collective upliftment.
              </p>
            </div>
          </section>
          {/* Initiatives Section */}
          <div className="-mt-8 pb-18 lg:pb-20 xl:pb-24">
            <InitiativesSection />
          </div>
          <div>
            <Timeline />
          </div>
        </motion.div>
        <div className="w-full mt-0 sm:mt-6  md:mt-20 lg:mt-28 mb-8 md:mb-12 lg:mb-15 flex justify-center items-center">
          <VSTLogoAnimation />
        </div>
      </main>
      <Footer bgcolour="bg-black" />
    </div>
  );
}
