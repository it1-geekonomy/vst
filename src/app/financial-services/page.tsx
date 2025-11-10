"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-[#4B2A52] text-white">
      {/* HEADER SECTION */}
<header className="flex flex-col items-center justify-center mt-0 mb-10  h-[280px] text-center">
  <Image
    src="/imagesanime/govelogo.png"
    alt="GOVE Finance Limited Logo"
    width={550}       // adjust as needed
    height={260}      // adjust as needed
    priority
  />
</header>


      {/* BUILDING IMAGE */}
      <div className="relative w-full h-[800px]">
        <Image
          src="/imagesanime/historicbuilding.jpg"
          alt="Historic building"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* TAGLINE */}
      <section className="relative w-full text-center mt-24 bg-[#4B2A52]/95">
        <div className="relative w-full h-[300px]">
          <Image
            src="/imagesanime/carfinance.jpg"
            alt="Car finance background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-[2.9rem] font-normal px-6">
            Empowering mobility through trusted financial solutions
          </h2>
        </div>
      </section>
    </main>
  );
}
