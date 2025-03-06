"use client";
import Image from "next/image";
import Link from "next/link";

const initiatives = [
  {
    id: 1,
    title: "Our Initiatives",
    description:
      "At VST Group, our Corporate Social Responsibility (CSR) initiatives are rooted in a deep sense of purpose and commitment to creating lasting, positive change. We believe that our success is intertwined with the well-being of the communities we serve.",
    image: "/images/initiatives.jpg",
    isMain: true,
  },
  {
    id: 2,
    title: "Education and Holistic Development",
    link: "/initiatives/education",
    isLarge: true,
  },
  {
    id: 3,
    title: "Sustainability",
    link: "/initiatives/sustainability",
    isLarge: true,
  },
  {
    id: 4,
    title: "Rural Development",
    link: "/initiatives/rural-development",
  },
  {
    id: 5,
    title: "Healthcare",
    link: "/initiatives/healthcare",
  },
];

export default function Initiatives() {
  return (
    <section className="w-full bg-black py-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-3 border border-white relative">
          {initiatives.map((initiative) => (
            <div
              key={initiative.id}
              className={`relative ${
                initiative.isMain ? "col-span-1 row-span-2" : "col-span-1"
              } border border-white overflow-hidden`}
            >
              {initiative.isMain ? (
                // Main initiative with image and text
                <div className="relative h-full bg-black p-12">
                  <div className="relative z-10 h-full flex flex-col">
                    <div>
                      <h2 className="text-5xl font-bold text-white mb-8">
                        {initiative.title}
                      </h2>
                      <p className="text-gray-300 text-lg leading-relaxed mb-12">
                        {initiative.description}
                      </p>
                    </div>
                    <div className="mt-auto">
                      <Image
                        src={initiative.image}
                        alt="VST Initiatives"
                        width={500}
                        height={300}
                        className="w-full grayscale"
                      />
                    </div>
                  </div>
                  {/* Golden border effect */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
                  <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-yellow-500/50 via-transparent to-transparent" />
                </div>
              ) : (
                // Other initiative boxes
                <Link href={initiative.link || "#"} className="block h-full">
                  <div className="group relative aspect-square bg-black transition-all duration-500">
                    {/* Background container that scales */}
                    <div className="absolute inset-0 bg-black group-hover:scale-[1.3] transition-transform duration-500" />

                    {/* Content that scales with background */}
                    <div className="absolute inset-0 flex items-center justify-center p-12 group-hover:scale-[1.3] transition-transform duration-500">
                      <h3 className="text-3xl font-semibold text-white text-center">
                        {initiative.title}
                      </h3>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-black/40 transition-colors duration-500" />
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
