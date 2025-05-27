// components/InitiativesSection.tsx
"use client";

import { initiatives } from "@/data/initiatives";
import InitiativeCard from "./InitiativeCard";

export default function InitiativesSection() {
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-[#FFFFFF] text-clamp-57">Our Initiatives</h2>
      <p className="text-[#FFFFFF] text-clamp-28 text-justify px-6  md:px-32 lg:px-48 xl:px-52 pb-8 lg:pb-18 xl:pb-20">
        At VST Group, our Corporate Social Responsibility (CSR) initiatives are rooted in a deep sense of purpose and commitment to creating lasting, positive change. We believe that our success is intertwined with the well-being of the communities we serve.
      </p>

      <div className="w-full px-4 sm:px-8 md:px-10 lg:px-12 xl:px-24">
  <div className="flex items-center justify-center">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-center">
      
      {/* Education */}
      <div className="flex justify-center items-center h-full">
        <InitiativeCard {...initiatives[0]} />
      </div>

      {/* Rural Development (ONLY stacked for lg, split for md) */}
      {/* Show two separate cards at md, stack at lg */}
      <div className="hidden lg:flex flex-col gap-4 md:gap-6">
        <InitiativeCard {...initiatives[1]} />
        <InitiativeCard {...initiatives[2]} />
      </div>

      {/* For md screens, split the middle column into two separate grid items */}
      <div className="flex  justify-center items-center h-full lg:hidden">
        <InitiativeCard {...initiatives[1]} />
      </div>
      <div className="flex justify-center items-center h-full lg:hidden">
        <InitiativeCard {...initiatives[2]} />
      </div>

      {/* Healthcare */}
      <div className="flex justify-center items-center h-full">
        <InitiativeCard {...initiatives[3]} />
      </div>
    </div>
  </div>
</div>

    </div>
  );
}