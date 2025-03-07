"use client";
import Image from "next/image";
import Link from "next/link";
import education1 from "@/app/public/Rectangle 6530.svg";
import education2 from "@/app/public/Rectangle 6531.svg";
import education3 from "@/app/public/page-8-vst 1.png";
import "@/styles/initiatives.css";

export default function Initiatives() {
  return (
    <section className="w-full bg-black h-screen flex items-center">
      <div className="max-w-[1900px] mx-auto w-full h-full">
        <div className="grid grid-cols-5 h-full">
          {/* Main Initiative */}
          <div className="col-span-2 border border-white relative group overflow-hidden">
            <div className="absolute inset-0 transition-opacity duration-500 ease-in-out">
              <Image
                src={education3}
                alt="Initiative background"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <Image
                src={education1}
                alt="Initiative hover background"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="border border-white m-12 h-[calc(100%-6rem)] flex flex-col justify-center p-12 relative z-10">
              <h2 className="text-5xl text-white mb-6 font-bold">
                Our Initiatives
              </h2>
              <p className="text-gray-300 text-xl leading-relaxed">
                At VST Group, our Corporate Social Responsibility (CSR)
                initiatives are rooted in a deep sense of purpose and commitment
                to creating lasting, positive change. We believe that our
                success is intertwined with the well-being of the communities we
                serve.
              </p>
            </div>
          </div>

          {/* All other initiatives in a single grid */}
          <div className="gallery border border-blue-500 col-span-3 h-full grid grid-cols-2 grid-rows-2">
            <div className="gallery-item border border-white p-12 flex items-center justify-center relative group overflow-hidden">
              <h3 className="text-3xl text-blue-500 font-semibold text-center relative z-10 group-hover:scale-105 transition-transform duration-500">
                Education and Holistic Development
              </h3>
            </div>
            <div className="gallery-item border border-white p-12 flex items-center justify-center relative group overflow-hidden">
              <h3 className="text-3xl text-white font-semibold text-center relative z-10 group-hover:scale-105 transition-transform duration-500">
                Sustainability
              </h3>
            </div>
            <div className="gallery-item border border-white p-12 flex items-center justify-center relative group overflow-hidden">
              <h3 className="text-3xl text-white font-semibold text-center relative z-10 group-hover:scale-105 transition-transform duration-500">
                Rural Development
              </h3>
            </div>
            <div className="gallery-item border border-white p-12 flex items-center justify-center relative group overflow-hidden">
              <h3 className="text-3xl text-white font-semibold text-center relative z-10 group-hover:scale-105 transition-transform duration-500">
                Healthcare
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
