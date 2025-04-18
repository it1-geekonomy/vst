"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import mainImg from "@/app/public/making-a-difference/frame2.png";
import eduImg from "@/app/public/making-a-difference/Girl-image.jpeg";
import sustainImg from "@/app/public/making-a-difference/Bulb-image.jpeg";
import ruralImg from "@/app/public/making-a-difference/frame2.png";
import healthImg from "@/app/public/making-a-difference/frame2.png";
import "@/styles/initiatives.css";

const defaultImg = mainImg;
const imagesMap = {
    education: eduImg,
    sustainability: sustainImg,
    rural: ruralImg,
    healthcare: healthImg
}

export default function InitiativesAni() {
    const [currentImg, setCurrentImg] = useState(defaultImg);
    const [activeSection, setActiveSection] = useState(null);

    // const handleMouseEnter = (section) => {
    //     setCurrentImg(imagesMap[section]);
    //     setActiveSection(section);
    // };

    const handleMouseLeave = () => {
        setCurrentImg(defaultImg);
        setActiveSection(null);
    };

    return (
        <section className="w-full bg-black h-screen flex items-center justify-center">
            <div className="w-full h-full flex flex-col justify-center">
                {/* Desktop and larger screens - use grid */}
                <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-5 h-screen">
                    {/* Main Initiative - 2/5 width on large screens */}
                    <div className="lg:col-span-2 relative overflow-hidden h-screen border border-[#594B1D]">
                        {/* Inner content container with its own border */}
                        <div className="absolute inset-0 m-10 my-12 border border-[#594B1D] overflow-hidden">
                            {/* Diagonal lines connecting outer and inner borders */}
                            <div className="absolute top-0 left-0 w-0 h-0 z-20">
                                <div className="absolute top-0 left-0 w-0 h-0 border-t border-l border-[#594B1D]"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        transform: 'rotate(-45deg) translate(-28px, -28px)'
                                    }}></div>
                            </div>
                            <div className="absolute top-0 right-0 w-0 h-0 z-20">
                                <div className="absolute top-0 right-0 w-0 h-0 border-t border-r border-[#594B1D]"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        transform: 'rotate(45deg) translate(28px, -28px)'
                                    }}></div>
                            </div>
                            <div className="absolute bottom-0 left-0 w-0 h-0 z-20">
                                <div className="absolute bottom-0 left-0 w-0 h-0 border-b border-l border-[#594B1D]"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        transform: 'rotate(45deg) translate(-28px, 28px)'
                                    }}></div>
                            </div>
                            <div className="absolute bottom-0 right-0 w-0 h-0 z-20">
                                <div className="absolute bottom-0 right-0 w-0 h-0 border-b border-r border-[#594B1D]"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        transform: 'rotate(-45deg) translate(28px, 28px)'
                                    }}></div>
                            </div>

                            <div className="absolute inset-0">
                                <Image
                                    src={currentImg}
                                    alt="Initiative background"
                                    fill
                                    style={{ objectFit: "cover", objectPosition: "center" }}
                                    className="z-0"
                                />
                                {/* <div className="absolute inset-0 bg-black/60 z-10"></div> */}
                            </div>

                            {/* Content positioned over the image, inside the inner border */}
                            <div className="absolute inset-0 z-20 flex items-center justify-center">
                                <div className="p-6 flex flex-col justify-center max-w-md">
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4 lg:mb-6 font-bold">
                                        Our Initiatives
                                    </h2>
                                    <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
                                        At VST Group, our Corporate Social Responsibility (CSR)
                                        initiatives are rooted in a deep sense of purpose and commitment
                                        to creating lasting, positive change. We believe that our
                                        success is intertwined with the well-being of the communities we
                                        serve.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Other initiatives - 3/5 width on large screens */}
                    <div className="lg:col-span-3 h-screen grid grid-cols-2 grid-rows-2">
    {/* Education */}
    <div
        className="border border-[#594B1D] flex items-center justify-center relative h-full group overflow-hidden"
        onMouseEnter={() => handleMouseEnter('education')}
        onMouseLeave={handleMouseLeave}
    >
        <div className="absolute inset-0 bg-black/90 z-10 group-hover:bg-black/70 transition-all duration-500"></div>
        <div className="p-4 md:p-6 lg:p-8 z-20 relative w-full h-full flex flex-col items-center justify-center transform transition-all duration-500 ease-in-out">
            <h3 className={`text-xl md:text-2xl lg:text-3xl text-white font-semibold text-center ${activeSection === 'education' ? 'text-[#4169E1]' : 'group-hover:text-[#4169E1]'} transition-colors duration-500`}>
                Education and Holistic Development
            </h3>
            <div className={`${activeSection === 'education' ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-500 w-full px-4`}>
                <p className="text-white text-sm md:text-base text-center max-w-md">
                    The VST Group is committed to Corporate Social Responsibility through impactful rural development, enhancing infrastructure and promoting sustainable agriculture. We are leading the transition to renewable energy by powering our fuel outlets with solar panels, reducing CO2 emissions by 15% in 2022.
                </p>
            </div>
        </div>
    </div>

    {/* Sustainability */}
    <div 
        className="border border-[#594B1D] flex items-center justify-center relative h-full group overflow-hidden"
        onMouseEnter={() => handleMouseEnter('sustainability')}
        onMouseLeave={handleMouseLeave}
    >
        <div className="absolute inset-0 bg-black/90 z-10 group-hover:bg-black/70 transition-all duration-500"></div>
        <div className="p-4 md:p-6 lg:p-8 z-20 relative w-full h-full flex flex-col items-center justify-center transform transition-all duration-500 ease-in-out">
            <h3 className={`text-xl md:text-2xl lg:text-3xl text-white font-semibold text-center ${activeSection === 'sustainability' ? 'text-[#33cc66]' : 'group-hover:text-[#33cc66]'} transition-colors duration-500`}>
                Sustainability
            </h3>
            <div className={`${activeSection === 'sustainability' ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-500 w-full px-4`}>
                <p className="text-white text-sm md:text-base text-center max-w-md">
                    VST Group is committed to sustainability through initiatives aimed at reducing its carbon footprint and promoting renewable energy. One of the key projects involves transitioning fuel retail outlets to solar power, significantly cutting down on energy consumption.
                </p>
            </div>
        </div>
    </div>
    
    {/* Rural Development */}
    <div 
        className="border border-[#594B1D] flex items-center justify-center relative h-full group overflow-hidden"
        onMouseEnter={() => handleMouseEnter('rural')}
        onMouseLeave={handleMouseLeave}
    >
        <div className="absolute inset-0 bg-black/90 z-10 group-hover:bg-black/70 transition-all duration-500"></div>
        <div className="p-4 md:p-6 lg:p-8 z-20 relative w-full h-full flex flex-col items-center justify-center transform transition-all duration-500 ease-in-out">
            <h3 className={`text-xl md:text-2xl lg:text-3xl text-white font-semibold text-center transition-colors duration-500`}>
                Rural Development
            </h3>
            <div className={`${activeSection === 'rural' ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-500 w-full px-4`}>
                <p className="text-white text-sm md:text-base text-center max-w-md">
                    The VST Group is committed to Corporate Social Responsibility through impactful rural development, enhancing infrastructure and promoting sustainable agriculture in underserved communities.
                </p>
            </div>
        </div>
    </div>
    
    {/* Healthcare */}
    <div 
        className="border border-[#594B1D] flex items-center justify-center relative h-full group overflow-hidden"
        onMouseEnter={() => handleMouseEnter('healthcare')}
        onMouseLeave={handleMouseLeave}
    >
        <div className="absolute inset-0 bg-black/90 z-10 group-hover:bg-black/70 transition-all duration-500"></div>
        <div className="p-4 md:p-6 lg:p-8 z-20 relative w-full h-full flex flex-col items-center justify-center transform transition-all duration-500 ease-in-out">
            <h3 className={`text-xl md:text-2xl lg:text-3xl text-white font-semibold text-center transition-colors duration-500`}>
                Healthcare
            </h3>
            <div className={`${activeSection === 'healthcare' ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-500 w-full px-4`}>
                <p className="text-white text-sm md:text-base text-center max-w-md">
                    VST Group is dedicated to improving healthcare access in rural communities through mobile clinics, telemedicine initiatives, and medical infrastructure development.
                </p>
            </div>
        </div>
    </div>
</div>
                </div>

                {/* Mobile layout - stack everything vertically */}
                <div className="md:hidden flex flex-col h-screen">
                    {/* Main Initiative */}
                    <div className="relative overflow-hidden h-[50vh] border border-[#594B1D]">
                        {/* Inner content container with its own border */}
                        <div className="absolute inset-0 m-4 border border-[#594B1D] overflow-hidden">
                            {/* Diagonal lines connecting outer and inner borders for mobile */}
                            <div className="absolute top-0 left-0 w-0 h-0 z-20">
                                <div className="absolute top-0 left-0 w-0 h-0 border-t border-l border-[#594B1D]"
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        transform: 'rotate(-45deg) translate(-14px, -14px)'
                                    }}></div>
                            </div>
                            <div className="absolute top-0 right-0 w-0 h-0 z-20">
                                <div className="absolute top-0 right-0 w-0 h-0 border-t border-r border-[#594B1D]"
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        transform: 'rotate(45deg) translate(14px, -14px)'
                                    }}></div>
                            </div>
                            <div className="absolute bottom-0 left-0 w-0 h-0 z-20">
                                <div className="absolute bottom-0 left-0 w-0 h-0 border-b border-l border-[#594B1D]"
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        transform: 'rotate(45deg) translate(-14px, 14px)'
                                    }}></div>
                            </div>
                            <div className="absolute bottom-0 right-0 w-0 h-0 z-20">
                                <div className="absolute bottom-0 right-0 w-0 h-0 border-b border-r border-[#594B1D]"
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        transform: 'rotate(-45deg) translate(14px, 14px)'
                                    }}></div>
                            </div>

                            <div className="absolute inset-0">
                                <Image
                                    src={mainImg}
                                    alt="Initiative background"
                                    fill
                                    style={{ objectFit: "cover", objectPosition: "center" }}
                                    className="z-0"
                                />
                                <div className="absolute inset-0 bg-black/60 z-10"></div>
                            </div>

                            {/* Content positioned over the image, inside the inner border */}
                            <div className="absolute inset-0 z-20 flex items-center justify-center">
                                <div className="p-4 flex flex-col justify-center">
                                    <h2 className="text-3xl text-white mb-4 font-bold">
                                        Our Initiatives
                                    </h2>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        At VST Group, our Corporate Social Responsibility (CSR)
                                        initiatives are rooted in a deep sense of purpose and commitment
                                        to creating lasting, positive change. We believe that our
                                        success is intertwined with the well-being of the communities we
                                        serve.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Other initiatives in a grid on mobile */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 h-[50vh]">
                        <div 
                            className="border border-[#594B1D] flex items-center justify-center relative h-full"
                            onClick={() => handleMouseEnter('education')}
                        >
                            <div className="absolute inset-0 bg-black/90 z-10"></div>
                            <div className="px-4 py-8 z-20 relative text-center">
                                <h3 className="text-xl text-white font-semibold mb-2">
                                    Education and Holistic Development
                                </h3>
                                {activeSection === 'education' && (
                                    <p className="text-white text-sm">
                                        The VST Group is committed to Corporate Social Responsibility through impactful rural development and education.
                                    </p>
                                )}
                            </div>
                        </div>
                        <div 
                            className="border border-[#594B1D] flex items-center justify-center relative h-full"
                            onClick={() => handleMouseEnter('sustainability')}
                        >
                            <div className="absolute inset-0 bg-black/90 z-10"></div>
                            <div className="px-4 py-8 z-20 relative text-center">
                                <h3 className="text-xl text-white font-semibold mb-2">
                                    Sustainability
                                </h3>
                                {activeSection === 'sustainability' && (
                                    <p className="text-white text-sm">
                                        VST Group is committed to sustainability through initiatives aimed at reducing its carbon footprint.
                                    </p>
                                )}
                            </div>
                        </div>
                        <div 
                            className="border border-[#594B1D] flex items-center justify-center relative h-full"
                            onClick={() => handleMouseEnter('rural')}
                        >
                            <div className="absolute inset-0 bg-black/90 z-10"></div>
                            <div className="px-4 py-8 z-20 relative text-center">
                                <h3 className="text-xl text-white font-semibold mb-2">
                                    Rural Development
                                </h3>
                                {activeSection === 'rural' && (
                                    <p className="text-white text-sm">
                                        The VST Group is committed to rural development, enhancing infrastructure in underserved communities.
                                    </p>
                                )}
                            </div>
                        </div>
                        <div 
                            className="border border-[#594B1D] flex items-center justify-center relative h-full"
                            onClick={() => handleMouseEnter('healthcare')}
                        >
                            <div className="absolute inset-0 bg-black/90 z-10"></div>
                            <div className="px-4 py-8 z-20 relative text-center">
                                <h3 className="text-xl text-white font-semibold mb-2">
                                    Healthcare
                                </h3>
                                {activeSection === 'healthcare' && (
                                    <p className="text-white text-sm">
                                        VST Group is dedicated to improving healthcare access in rural communities.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}   