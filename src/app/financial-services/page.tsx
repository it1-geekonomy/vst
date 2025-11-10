"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen text-white">
      {/* HEADER SECTION */}
      <header className="flex flex-col items-center justify-center mt-0 mb-10 h-[200px] sm:h-[240px] md:h-[280px] text-center px-4">
        <Image
          src="/imagesanime/govelogo.png"
          alt="GOVE Finance Limited Logo"
          width={350}        // smaller default for mobile
          height={160}
          className="w-[250px] sm:w-[400px] md:w-[550px] h-auto"
          priority
        />
      </header>

      {/* BUILDING IMAGE */}
      <div className="relative w-full h-[300px] sm:h-[500px] md:h-[800px]">
        <Image
          src="/imagesanime/historicbuilding.jpg"
          alt="Historic building"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* TAGLINE */}
      <section className="relative w-full text-center mt-12 sm:mt-16 md:mt-24">
        <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px]">
          <Image
            src="/imagesanime/carfinance.jpg"
            alt="Car finance background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[2.9rem] font-normal leading-snug sm:leading-normal">
            Empowering mobility through trusted financial solutions
          </h2>
        </div>
      </section>
    </main>
  );
}
