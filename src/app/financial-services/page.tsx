"use client";

import LocationSection from "@/components/LocationSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-stretch w-full min-h-screen bg-gradient-to-b from-[#240135] via-[#9440BC] to-[#CD62FF] bg-[length:100%_300%] bg-no-repeat text-white">
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-32 z-10 mx-auto py-12 sm:py-16 md:py-20">
        {/* HEADER SECTION */}
       <header className="w-full flex flex-col items-center justify-center mb-8 sm:mb-10 md:mb-12 h-[80px] sm:h-[100px] md:h-[110px] text-center px-4">
  <div className="w-full">
    <Image
      src="/imagesanime/govelogo.png"
      alt="GOVE Finance Limited Logo"
      width={420}
      height={200}
      priority
      className="mx-auto w-[220px] sm:w-[340px] md:w-[420px] lg:w-[540px] h-auto"
    />
  </div>
</header>

      </section>

      {/* BUILDING IMAGE */}
      <div className="relative w-full h-[360px] sm:h-[520px] lg:h-[800px]">
        <Image
          src="/imagesanime/historicbuilding.jpg"
          alt="Historic building"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* TAGLINE */}
      <section className="relative w-full text-center mt-12 sm:mt-16 lg:mt-24">
        <div className="relative w-full h-[220px] sm:h-[280px] lg:h-[320px]">
          <Image
            src="/imagesanime/carfinance.jpg"
            alt="Car finance background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0" />
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-[2.9rem] font-normal font-roc leading-tight">
            Empowering mobility through trusted financial solutions
          </h2>
        </div>
      </section>

      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-32 pb-2 md:pb-6 lg:pb-8 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-base sm:text-lg lg:text-xl font-normal font-roc text-justify whitespace-pre-wrap text-white leading-relaxed">
            Established in 1983, GOVE Finance Limited, part of the VST Group founded in 1911, has been a trusted name in auto finance for over 40 years. Operating across Tamil Nadu and Karnataka, the company offers tailored financial solutions for commercial vehicles, passenger cars, buses, pre-owned vehicles, and vehicle refinancing.{'\n\n'}
            With a deep understanding of regional markets and customer needs, GOVE Finance combines financial expertise with flexible lending options to support both individuals and businesses. Its strong foundation, reliable service network, and customer-first approach continue to drive sustained growth and trust across South India.
          </p>
        </div>

        <div className="w-full mt-12">
          <h3 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-roc text-white mb-10">
            Gove Retail Loans And Investments
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="w-full rounded-2xl bg-[#CD62FF] border border-white/15 p-6 sm:p-8 md:p-10 text-left shadow-lg transition hover:-translate-y-1 hover:shadow-xl min-h-[240px] sm:min-h-[260px] md:min-h-[280px]">
              <h4 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4 font-roc">Passenger Vehicle</h4>
              <p className="text-base sm:text-lg leading-relaxed font-light">
                Upgrade to your ideal ride with affordable interest rates, flexible repayment, and quick approvals.
              </p>
            </div>
            <div className="w-full rounded-2xl bg-[#CD62FF] border border-white/15 p-6 sm:p-8 md:p-10 text-left shadow-lg transition hover:-translate-y-1 hover:shadow-xl min-h-[240px] sm:min-h-[260px] md:min-h-[280px]">
              <h4 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4 font-roc">Commercial Vehicle</h4>
              <p className="text-base sm:text-lg leading-relaxed font-light">
                Our Commercial Vehicle Loan solutions offer competitive rates, flexible terms, and quick approval.
              </p>
            </div>
            <div className="w-full rounded-2xl bg-[#CD62FF] border border-white/15 p-6 sm:p-8 md:p-10 text-left shadow-lg transition hover:-translate-y-1 hover:shadow-xl min-h-[240px] sm:min-h-[260px] md:min-h-[280px]">
              <h4 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4 font-roc">Refinancing</h4>
              <p className="text-base sm:text-lg leading-relaxed font-light">
                We offer refinance on commercial and passenger vehicles to suit your requirement.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <a
              href="#"
              className="inline-block w-full sm:w-auto flex justify-center sm:justify-center lg:justify-center"
            >
              <h3 className="bg-[#FEBF3D] rounded-lg px-6 sm:px-8 lg:px-34 py-2 sm:py-3 lg:py-3 text-[#0f0f0e] text-lg sm:text-xl lg:text-3xl font-light hover:bg-white hover:text-[#0f0f0e] transition-colors text-center">
                Explore More
              </h3>
            </a>
          </div>
        </div>
        <div className="w-full px-4 md:px-8 lg:px-0 mb-8 sm:mb-12 md:mb-20  mt-4 font-normal font-roc text-justify flex justify-center lg:block lg:text-justify">
      
          <LocationSection
            locationImage="education/educational location.png"
            address={{
              street: "Edward Road, Off Queens Road,",
              street2: "Bengaluru - 560 001, Karnataka.",
              city: "",
              state: "",
              pincode: ""
            }}
            phoneNumbers={[
              '+91 80-2234 1011',
              '+91 80-2226 3022',
              '+91 99807 97527'
            ]}
            emails={{
              info: 'info@skei.edu.in'
            }}
            googleMapsUrl="https://www.google.com/maps/place/SKEI+-+Smt.+Kamalabai+Educational+Institution/@12.987965,77.5947328,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae1667c5c960f1:0x4e3200223320b7c2!8m2!3d12.987965!4d77.5973077!16s%2Fg%2F1t_kdz9b?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
            className="text-black"
          iconColor="black"
          websiteUrl="www.skei.edu.in"
          mobilePadding="education"
          />
        </div>
      </section>

      {/* <div className="w-full px-4 md:px-8 lg:px-30 mb-8 sm:mb-12 md:mb-20  mt-4 font-normal font-roc text-justify flex justify-center lg:block lg:text-justify">
      
          <LocationSection
            locationImage="education/educational location.png"
            address={{
              street: "Edward Road, Off Queens Road,",
              street2: "Bengaluru - 560 001, Karnataka.",
              city: "",
              state: "",
              pincode: ""
            }}
            phoneNumbers={[
              '+91 80-2234 1011',
              '+91 80-2226 3022',
              '+91 99807 97527'
            ]}
            emails={{
              info: 'info@skei.edu.in'
            }}
            googleMapsUrl="https://www.google.com/maps/place/SKEI+-+Smt.+Kamalabai+Educational+Institution/@12.987965,77.5947328,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae1667c5c960f1:0x4e3200223320b7c2!8m2!3d12.987965!4d77.5973077!16s%2Fg%2F1t_kdz9b?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
            className="text-black"
          iconColor="black"
          websiteUrl="www.skei.edu.in"
          mobilePadding="education"
          />
        </div> */}
    </main>
  );
}
