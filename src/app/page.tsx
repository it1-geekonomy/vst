"use client";
import Image from "next/image";
import { useState } from "react";

import Initiatives from "@/components/Initiatives";
import LifeAtVst from "@/components/LifeAtVst";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import OurMilestone from "@/components/OurMilestone";
import EmpoweringScroll from "@/components/EmpoweringScroll";
import Hero from "@/components/Hero";

// {
//   id: 4,
//   image: "/slide4.jpg",
//   title: "PERFORMANCE & PASSION",
//   subtitle: "DRIVING THE FUTURE",
//   label: "AMG Performance",
// },
// {
//   id: 5,
//   image: "/slide5.jpg",
//   title: "SERVICE EXCELLENCE",
//   subtitle: "DEDICATED TO PERFECTION",
//   label: "After Sales",
// },
// {
//   id: 6,
//   image: "/slide6.jpg",
//   title: "HERITAGE & INNOVATION",
//   subtitle: "LEADING THE WAY",
//   label: "VST Group",
// },
// ];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Hero Section with Slider */}
      <Hero />
      <OurMilestone />
      {/* Life at VST Section */}
      <LifeAtVst />
      {/* Initiatives Section */}

      <EmpoweringScroll />

      <ContactUs />
      <Footer />
    </main>
  );
}
