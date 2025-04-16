"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Scurve from '../education/Frame 1973341729.png';
import img1 from '../public/education/Frame 6.jpg';
import img2 from '../public/education/Frame 7.jpg';
import img3 from '../public/education/Frame 8.jpg';
import img4 from '../public/education/Frame 9.jpg';
import img5 from '../public/education/Frame 10.jpg';
import img6 from '../public/education/Frame11.jpeg';
import img7 from '../public/education/Frame12.jpeg';
import { StaticImageData } from 'next/image';
import EducationLogo from '../public/logos/educationlogo';
import Logo from '../public/logos/Logo';

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
    { id: 1, src: img1, alt: 'Teacher interacting with students', height: '100%' },
    { id: 2, src: img2, alt: 'Student learning', height: '95%' },
    { id: 3, src: img3, alt: 'School building', height: '93%' },
    { id: 4, src: img4, alt: 'Robotics project', height: '94%' },
    { id: 5, src: img5, alt: 'Students on stairs', height: '97%' },
     { id: 6, src: img6, alt: 'Students in uniform', height: '100%' },
     { id: 7, src: img7, alt: 'Students outdoors', height: '88%' },
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
    <main className="flex min-h-screen flex-col items-center bg-black text-white relative overflow-hidden">
      <div className='w-full'>
      {/* Hero section with logo */}
      <section className="w-full py-8 md:py-12 lg:py-14 flex justify-center items-center z-10 relative">
        <div className="w-72 h-64 md:w-80 md:h-72 lg:w-3/4 lg:h-3/4 relative md:py-10 lg:pt-20">
          <div className="w-full h-full flex justify-center items-center">
            <EducationLogo className="w-full h-full" />
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
              transform: 'scale(1.7)',
              width: '100%',
              height: '100%',
              filter: 'hue-rotate(4deg)'
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
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent py-2">
                  <p className="text-white text-xs sm:text-sm text-center">{image.alt}</p>
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
          {galleryImages.map((image) => (
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
                        className="object-fill w-[100%] h-[100%]"
                        priority
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
          <p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-light"
            style={{
              fontFamily: "'FONTSPRING DEMO - Roc Grotesk', sans-serif",
              fontWeight: 350,
              lineHeight: "150%",
              letterSpacing: "0%",
            }}
          >
            SKEI, Bangalore is a renowned CBSE institution committed to providing a holistic and innovative education. With a focus 
            on 21st&#8209;century skills, the school&apos;s mission is to empower students with the knowledge and skills needed to excel in a 
            global context, emphasizing values, leadership, and a passion for lifelong learning.
          </p>
        </div>
      </section>
      </div>
   
      {/* Our Location section */}
      <section className="w-full px-4 sm:px-8 md:px-16 lg:px-28 pb-8 md:pb-12 lg:pb-16 z-10 relative">
        {/* Removed the background image from here */}
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#FEBF3D] font-light text-start mb-4 md:mb-6 lg:mb-8 relative z-10">Our Location</h2>
        <div className="w-full rounded-lg overflow-hidden relative z-10">
          <iframe
            title="SKEI Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0167881117726!2d77.57254827475243!3d12.989645014917816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1651b4dd2399%3A0x9c4cbf3e1c014d1b!2s1%2C%20Palace%20Cross%20Rd%2C%20Bengaluru%2C%20Karnataka%20560020!5e0!3m2!1sen!2sin!4v1709534844025!5m2!1sen!2sin"
            width="100%"
            height="300"
            className="rounded-lg sm:h-60 md:h-80 lg:h-100"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
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
