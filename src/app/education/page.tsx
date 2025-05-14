"use client";
import React, { useState, useEffect } from 'react';
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
import LocationSection from '@/components/LocationSection';

type GalleryImage = {
  id: number;
  src: StaticImageData;
  alt: string;
  height: string; // For varying heights
};

export default function EducationPage() {
  // State for mobile gallery active image
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  // State for desktop gallery active image
  const [activeDesktopImage, setActiveDesktopImage] = useState(-1); // Start with no active image
  // State for resetting the desktop gallery
  const [resetting, setResetting] = useState(false);
  const [showAllImages, setShowAllImages] = useState(true); // Start with all images shown

  // Gallery images with varying heights
  const galleryImages: GalleryImage[] = [
    { id: 1, src: img2, alt: 'Student learning', height: '92%' },
    { id: 2, src: img7, alt: 'Students outdoors', height: '88%' },
    { id: 3, src: img5, alt: 'Students on stairs', height: '90%' },
    { id: 4, src: img3, alt: 'School building', height: '88%' },
    { id: 5, src: img4, alt: 'Robotics project', height: '94%' },
    { id: 6, src: img1, alt: 'Teacher interacting with students', height: '88%' },
    { id: 7, src: img6, alt: 'Students in uniform', height: '94%' },
  ];

  // Function to navigate to the next image
  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  // Function to navigate to the previous image
  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Add useEffect for automatic slideshow
  useEffect(() => {
    // Initial delay before starting animation
    const startDelay = setTimeout(() => {
      setShowAllImages(false);
      setActiveDesktopImage(0);
    }, 1000);

    const interval = setInterval(() => {
      if (showAllImages) {
        // Add 3 second delay when showing all images
        setTimeout(() => {
          setShowAllImages(false);
          setActiveDesktopImage(0);
        }, 3000);
        return;
      }

      setActiveDesktopImage((prev) => {
        if (prev === galleryImages.length - 1) {
          setShowAllImages(true);
          return prev;
        }
        return (prev + 1) % galleryImages.length;
      });
    }, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(interval);
      clearTimeout(startDelay);
    };
  }, [showAllImages]);

  // Handle reset state
  useEffect(() => {
    if (resetting) {
      const resetTimeout = setTimeout(() => {
        setResetting(false);
        setActiveDesktopImage(0);
      }, 3000); // 3 second pause
      return () => clearTimeout(resetTimeout);
    }
  }, [resetting]);

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#FFAED7] text-black relative overflow-hidden">
      <div className='w-full'>
        {/* Hero section with logo */}
        <section className="w-full flex justify-center items-center z-10 relative mb-0">
          <div className="w-56 h-40 sm:w-64 sm:h-48 md:w-72 md:h-56 lg:w-80 xl:w-96 relative">
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
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-24 h-auto md:h-[400px] lg:h-[450px] xl:h-[500px] mb-2 md:mb-2 lg:mb-2 z-10 relative mx-auto -mt-12">
          {/* Background image with light orange glow - ONLY in this section */}
          <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ isolation: 'isolate', zIndex: 0 }}>
            <Image
              src={Scurve}
              alt="Background orange glow"
              fill
              priority
              className="object-cover"
              style={{
                objectPosition: 'center',
                transform: 'scale(1.4)',
                width: '100%',
                height: '100%',
                filter: 'hue-rotate(5deg) brightness(1.0) opacity(0.3)',
              }}
              quality={100}
            />
          </div>

          {/* Improved Mobile Gallery - Card Swipe Animation */}
          <div className="block md:hidden w-full aspect-[5/3] max-h-[300px] sm:max-h-[400px] relative z-20">
            {/* Main featured image */}
            <div className="relative w-full h-full overflow-hidden shadow-xl flex items-center justify-center bg-black/20">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out transform ${index === activeImageIndex
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
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${index === activeImageIndex ? 'bg-[#FEBF3D] w-3 sm:w-4' : 'bg-white/50'
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

          {/* Desktop Layout - Accordion Gallery */}
          <div className="hidden md:flex w-full h-[85%] items-end gap-2 md:gap-3 lg:gap-4 relative z-20">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`relative overflow-hidden transition-all duration-1000 ease-in-out ${showAllImages ? 'flex-[3]' : index === activeDesktopImage ? 'flex-[35]' : 'flex-[3]'
                  }`}
                style={{
                  height: showAllImages ? image.height : index === activeDesktopImage ? '94%' : image.height,
                  transition: 'all 1s ease-in-out'
                }}
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
                  {/* Full image display for active image */}
                  <div className={`absolute inset-0 bg-black transition-opacity duration-1000 flex items-center justify-center ${showAllImages ? 'opacity-0' : index === activeDesktopImage ? 'opacity-100' : 'opacity-0'
                    }`}>
                    <div className="w-full h-full relative">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center"
                        priority
                        style={index === 0 ? { objectPosition: '80% center' } : { objectPosition: 'center' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Description section */}
        <section className="w-full px-4 md:px-8 lg:px-32 pb-2 md:pb-2 lg:pb-2 z-10  mx-auto">
          <div className="text-center mx-auto">
            <p className="text-clamp-28 font-normal font-roc text-justify whitespace-pre-wrap">
              SKEI, Bangalore is a renowned CBSE institution with a rich legacy of over 100 years, committed to providing a holistic and innovative education. Founded in 1931 by Dharamprakasha Sri Rao Bahadur V. S. Thiruvengadaswamy Mudaliar—a visionary entrepreneur and philanthropist—the school was born out of a mission to address the lack of educational opportunities for girls, including his own daughters.{'\n\n'}
              Rooted in a learner-centric philosophy, SKEI blends tradition with transformation, offering a nurturing environment that fosters both critical and creative thinking. The school's mission is to empower students with 21st-century skills, preparing them to excel in a global context while emphasizing values, leadership, and a passion for lifelong learning.{'\n\n'}
              Our century-old campus stands as a symbol of inclusive, values-driven education, where academic excellence goes hand-in-hand with empathy, integrity, and leadership. As envisioned by our founder, SKEI continues to be "a sacred place from which girls and boys shall take the highest aspirations to lead better, grander, and more fulfilling lives."
            </p>
          </div>
        </section>

        <div className="w-full px-4 md:px-8 lg:px-30 mb-20 mt-4 font-normal font-roc text-justify">
          <div
            className="w-[300px] h-[50px] rounded-[5px] bg-[#FEBF3D] px-10 py-4 text-2xl text-black tracking-wider shadow-[0_2px_8px_rgba(0,0,0,0.07)] transition-all duration-300 ease-in-out flex items-center justify-center cursor-pointer hover:bg-[#FFD84D] hover:scale-105 hover:shadow-lg active:scale-95"
          >
            <a
              href="https://www.skei.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex items-center justify-center text-black no-underline"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Our Location section - using the new component */}
        <div className="w-full px-4 md:px-8 lg:px-32 mb-1">
          <LocationSection
            locationImage="education/educational location.png"
            address={{
              street: "Edward Road,",
              street2: "Off Queens Road,",
              city: "Bangalore-560 001",
              state: "Karnataka.",
              pincode: ""       
            }}
            phoneNumbers={[
              '+91 80-2234 1011',
              '+91 80-2226 3022',
              '+91 99807 97527'
            ]}
            googleMapsUrl="https://www.google.com/maps/place/SKEI+-+Smt.+Kamalabai+Educational+Institution/@12.987965,77.5947328,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae1667c5c960f1:0x4e3200223320b7c2!8m2!3d12.987965!4d77.5973077!16s%2Fg%2F1t_kdz9b?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
          />
        </div>

        <div className="w-full -mt-12">
          <div className="transform scale-110">
            <BusinessSectorsUpdated />
          </div>
        </div>
      </div>
      <div className="w-full h-[250px] lg:h-[250px] xl:h-[300px] flex justify-center items-center -mt-50">
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
