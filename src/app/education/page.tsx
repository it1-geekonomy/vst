"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Scurve from '../education/Frame 1973341729.png';
import img1 from '../public/education/Frame 6.jpg';
import img2 from '../public/education/Image 1.jpg';
import img3 from '../public/education/Frame 8.jpg';
import img4 from '../public/education/Frame 9.jpg';
import img5 from '../public/education/Frame 10.jpg';
import img6 from '../public/education/Frame11.jpg';
import img7 from '../public/education/Frame 12.jpg';
import { StaticImageData } from 'next/image'; 
import EducationLogo from '@/app/public/education/educational logo.png';
import BusinessSectorsUpdated from '@/components/automotiveFranchises/BusinessSectorsUpdated';
import gif from "@/app/public/education/vst logo gif.gif"

type GalleryImage = {
  id: number;
  src: StaticImageData;
  alt: string;
  height: string; // For varying heights
};

export default function EducationPage() {
  // State for mobile gallery active image
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Gallery images with varying heights
  const galleryImages: GalleryImage[] = [
    { id: 1, src: img2, alt: 'Student learning', height: '95%' },
    { id: 2, src: img7, alt: 'Students outdoors', height: '88%' },
    { id: 3, src: img5, alt: 'Students on stairs', height: '90%' },
    { id: 4, src: img3, alt: 'School building', height: '88%' },
    { id: 5, src: img4, alt: 'Robotics project', height: '97%' },
    { id: 6, src: img1, alt: 'Teacher interacting with students', height: '88%' },
    { id: 7, src: img6, alt: 'Students in uniform', height: '97%' },
  ];

  // Function to navigate to the next image
  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  // Function to navigate to the previous image
  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#FFAED7] text-black relative overflow-hidden">
      <div className='w-full'>  
      {/* Hero section with logo */}
      <section className="w-full flex justify-center items-center z-10 relative">
        <div className="w-50 h-40 sm:w-60 sm:h-48 md:w-72 md:h-52 lg:w-80 xl:w-94 relative">
          <div className="w-full h-full flex justify-center items-center">
            <Image 
              src={EducationLogo}
              alt="Education Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Gallery section with varying height strips */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-24 h-auto md:h-[550px] lg:h-[620px] xl:h-[700px] mb-8 md:mb-12 lg:mb-16 z-10 relative mx-auto">
        {/* Background image with light orange glow - ONLY in this section */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image 
            src={Scurve} 
            alt="Background orange glow" 
            fill 
            priority
            className="object-cover"
            style={{ 
              objectPosition: 'center',
              transform: 'scale(2.2)',
              width: '100%',
              height: '100%',
              filter: 'hue-rotate(5deg)'
            }}
            quality={100}
          />
        </div>
        
        {/* Improved Mobile Gallery - Card Swipe Animation */}
        <div className="block md:hidden w-full aspect-[5/3] max-h-[300px] sm:max-h-[400px] relative z-10">
          {/* Main featured image */}
          <div className="relative w-full h-full overflow-hidden shadow-xl flex items-center justify-center bg-black/20">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id}
                className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out transform ${
                  index === activeImageIndex 
                    ? 'opacity-100 scale-100 translate-x-0' 
                    : index < activeImageIndex 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image 
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw"
                    className="object-cover object-center"
                    priority
                    style={index === 0 ? { objectPosition: '80% center' } : { objectPosition: 'center' }}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent py-2">
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 z-20">
            <button 
              onClick={prevImage}
              className="bg-black/50 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-black/70 active:scale-95 transition-all"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextImage}
              className="bg-black/50 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-black/70 active:scale-95 transition-all"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Indicator dots - moved up from bottom */}
          <div className="absolute inset-x-0 bottom-[30px] flex justify-center space-x-2 z-20">
            {galleryImages.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setActiveImageIndex(index)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                  index === activeImageIndex ? 'bg-[#FEBF3D] w-3 sm:w-4' : 'bg-white/50'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Swipe overlay for touch gestures */}
          <div 
            className="absolute inset-0 z-10"
            onTouchStart={(e) => {
              const touchStartX = e.touches[0].clientX;
              const handleTouchEnd = (e: TouchEvent) => {
                const touchEndX = e.changedTouches[0].clientX;
                const diff = touchStartX - touchEndX;
                
                if (diff > 50) {
                  nextImage();
                } else if (diff < -50) {
                  prevImage();
                }
                
                document.removeEventListener('touchend', handleTouchEnd);
              };
              
              document.addEventListener('touchend', handleTouchEnd);
            }}
          />
        </div>
        
        {/* Desktop Layout - Expandable strips */}
        <div className="hidden md:flex w-full h-[90%] items-end gap-4 md:gap-8 lg:gap-14 relative z-10">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className="flex-[0.5] relative overflow-hidden cursor-pointer transition-all duration-700 ease-in-out hover:flex-[35] group"
              style={{ height: image.height }}
            >
              <div className="w-full h-full relative">
                <Image 
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover object-center"
                  priority
                  style={index === 0 ? { objectPosition: '80% center' } : { objectPosition: 'center' }}
                />
                {/* Hover overlay with full image display */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-1000 flex items-center justify-center">
                  <div className="w-full h-full relative flex items-center justify-center">
                    <div className="w-full h-full relative">
                      <Image 
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center w-[100%] h-[100%]"
                        priority
                        style={index === 0 ? { objectPosition: '80% center' } : { objectPosition: 'center' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Description section */}
      <section className="w-full px-4 md:px-8 lg:px-24 pb-12 md:pb-16 lg:pb-24 z-10 relative mx-auto">
        <div className="text-center max-w-7xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light" style={{ 
            fontFamily: 'Roc Grotesk, sans-serif', 
            fontWeight: 400, 
            fontSize: '24px', 
            lineHeight: '40px', 
            letterSpacing: '0%', 
            textAlign: 'justify', 
            verticalAlign: 'middle' 
          }}>
            <span style={{ color: '#000', fontWeight: 500 }}>At SKEI, we believe</span> that every child is unique, talented and has the inherent ability to learn. Our educational philosophy emphasises a learner-centric approach wherein we cater to the diverse learning needs of students. Guided by the principles of Rabindranath Tagore and Benjamin Bloom, our school's approach to learning includes differentiated learning, inquiry-based learning, project based learning, collaborative learning and hands-on learning. These approaches, combined with our unique teaching methodologies, help in developing the 21st century skills in students as laid down by NEP 2020. We focus on a deep understanding of our children from their young age. Through this 'whole-child' approach, each child is carefully nurtured and their learning experiences individually personalized which ignites the spark of learning. It inspires them to be aware, be free of conditioned thoughts and most importantly be responsible for themselves, to nature and to society. It ensures our children chase excellence in whichever fields they choose to excel in.<br/><br/>
            Founded in 1931, SKEI is strategically located in Edward road, off Queens Road in close proximity to Cubbon Park Metro Station and Cantonment Railway Station. Established by the founders of the VST Group, which is now a 110 year old business conglomerate with Premium Automobile Dealerships, Finance, Real Estate, and is a leading manufacturer of Agricultural Machinery, our children are assured of access to education of the highest quality, the best of teachers and state-of-the-art facilities that enables them to thrive as students with a thirst for and the confidence to take on challenges and make a difference in their lives.

          </p>
        </div>
      </section>

      <div className="w-full px-4 md:px-8 lg:px-24 mb-12 -mt-10">
        <button
          style={{
            width: 300,
            height: 50,
            borderRadius: 5,
            background: '#FEBF3D',
            padding: '12px 32px',
            fontSize: 20,
            fontWeight: 400,
            fontFamily: 'Roc Grotesk, sans-serif',
            color: '#000',
            letterSpacing: 1,
            boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
            transition: 'background 0.2s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          className="hover:bg-[#FFD84D] active:scale-95"
        >
          Learn More
        </button>
      </div>
      </div>
   
      {/* Our Location section - custom */}
      <section className="w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-8 lg:px-24 mt-4">
        <div className="flex flex-col items-center">
          <h2
            className="text-[#2B0B1F] -ml-10"
            style={{
              fontFamily: 'Roc Grotesk, sans-serif',
              fontSize: '60px',
              lineHeight: '80px',
              letterSpacing: '-2px',
              marginBottom: '32px',
            }}
          >
            Our Location
          </h2>
          <div className="relative w-[180px] h-[160px] md:w-[400px] md:h-[320px] lg:w-[400px] lg:h-[300px]">
            {/* Map image */}
            <Image
              src={require('@/app/public/education/educational location.png')}
              alt="School Location Map"
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
            {/* Location icon */}
            <a
              href="https://www.google.com/maps/place/SKEI+-+Smt.+Kamalabai+Educational+Institution/@12.987965,77.5947328,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae1667c5c960f1:0x4e3200223320b7c2!8m2!3d12.987965!4d77.5973077!16s%2Fg%2F1t_kdz9b?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-[33.6%] top-[25%] w-6 h-5 md:w-8 md:h-15 cursor-pointer z-20"
              title="Open in Google Maps"
            >
              <Image
                src={require('@/app/public/education/location icon.png')}
                alt="Location Icon"
                fill
                className="object-contain"
                priority
              />
            </a>
          </div>
        </div>
        {/* Right: Address and Phone Numbers in a row */}
        <div className="mt-8 md:mt-0 md:ml-20 flex flex-row items-center justify-center space-x-2">
          {/* Address */}
          <div className="mr-10 min-w-[220px] mt-25">
            <p
              className="text-black"
              style={{
                fontFamily: 'Roc Grotesk',
                fontSize: '28px',
                lineHeight: '40px',
                fontWeight: 500,
              }}
            >
              Edward Road,<br />
              Off Queens Road,<br />
              Bangalore - 560 001, Karnataka.
            </p>
          </div>
          {/* Phone Numbers */}
          <div className="flex flex-col space-y-1 mt-20">
            {[
              '+91 80 2234 1011',
              '+91 80 2226 3022',
              '+91 99807 97527'
            ].map((phone, idx) => (
              <a 
                key={phone} 
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="flex items-center whitespace-nowrap hover:opacity-80 transition-opacity"
              >
                {/* Telephone icon - SVG */}
                <span className="mr-3 flex-shrink-0">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.2 14.85c-.45 0-.89-.07-1.31-.2-.41-.13-.85-.32-1.31-.57-.45-.25-.89-.54-1.31-.87-.42-.33-.8-.67-1.13-1.03-.33-.36-.62-.7-.87-1.13-.25-.42-.44-.86-.57-1.31-.13-.42-.2-.86-.2-1.31 0-.28.09-.51.27-.69l1.13-1.13c.18-.18.41-.27.69-.27.14 0 .27.02.39.07.12.05.23.13.33.23l.77.77c.1.1.17.21.23.33.05.12.07.25.07.39 0 .13-.02.25-.07.37-.05.12-.13.23-.23.33l-.37.37c.18.32.39.62.63.9.24.28.5.54.78.78.28.24.58.45.9.63l.37-.37c.1-.1.21-.17.33-.23.12-.05.24-.07.37-.07.14 0 .27.02.39.07.12.05.23.13.33.23l.77.77c.1.1.17.21.23.33.05.12.07.25.07.39 0 .28-.09.51-.27.69l-1.13 1.13c-.18.18-.41.27-.69.27z" fill="#2B0B1F"/>
                  </svg>
                </span>
                <span
                  className="text-black"
                  style={{
                    fontFamily: 'Roc Grotesk',
                    fontSize: '22px',
                    lineHeight: '36px'
                  }}
                >
                  {phone}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
        <div className="-mt-15">
          <BusinessSectorsUpdated/>
        </div>
   <div className="w-full h-[300px] lg:h-[300px] xl:h-[400px] flex justify-center items-center -mt-15">
                <Image
                  src={gif}
                  alt="VST Logo Animation"
                  className="w-[100%] h-[100%] object-contain"
                />
              </div>
    </main>
  );
}

// Add this to your global CSS or as a style tag
// For removing scrollbars but keeping scroll functionality
// .no-scrollbar::-webkit-scrollbar {
//   display: none;
// }
// .no-scrollbar {
//   -ms-overflow-style: none;
//   scrollbar-width: none;
// }
