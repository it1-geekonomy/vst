"use client";
import React from 'react';
import Image from 'next/image';
import Scurve from '../education/Frame 1973341729.png';
import img1 from '../public/images/LifeAtVst/Image1.png';
import img2 from '../public/images/LifeAtVst/Image2.png';
import img3 from '../public/images/LifeAtVst/Image3.png';
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
  // Gallery images with varying heights
  const galleryImages: GalleryImage[] = [
    { id: 1, src: img1, alt: 'Teacher interacting with students', height: '100%' },
    { id: 2, src: img2, alt: 'Student learning', height: '95%' },
    { id: 3, src: img3, alt: 'School building', height: '85%' },
    { id: 4, src: img1, alt: 'Robotics project', height: '94%' },
    { id: 5, src: img2, alt: 'Students on stairs', height: '90%' },
    { id: 6, src: img3, alt: 'Students in uniform', height: '100%' },
    { id: 7, src: img1, alt: 'Students outdoors', height: '88%' },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white relative overflow-hidden">
      {/* Background image with light orange glow */}
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
            filter: ' hue-rotate(4deg)'
          }}
          quality={100}
        />
      </div>

      {/* Hero section with logo */}
      <section className="w-full py-16 flex justify-center items-center z-10 relative">
        <div className="w-64 h-64 relative">
          {/* Logo placeholder - user will add later */}
          <div className="w-full h-full flex justify-center items-center">
            <EducationLogo className="w-full h-full" />
            <Logo className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* Gallery section with varying height strips */}
      <section className="w-[85%] h-[620px] max-w-8xl mb-16 z-10 relative">
        <div className="w-full h-full flex items-end gap-2 md:gap-8">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="flex-[0.5] relative overflow-hidden cursor-pointer transition-all duration-700 ease-in-out hover:flex-[10] group"
              style={{ height: image.height }}
            >
              <div className="w-full h-full relative">
                <Image 
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                        className="object-cover w-[100%] h-[100%]"
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
      <section className="w-[80%] px-4 pb-24 z-10 relative">
        <div className="text-center">
          <p className="text-lg md:text-2xl">
            SKEI, Bangalore is a renowned CBSE institution committed to providing a holistic and innovative education. With a focus 
            on 21st&#8209;century skills, the school&apos;s mission is to empower students with the knowledge and skills needed to excel in a 
            global context, emphasizing values, leadership, and a passion for lifelong learning.
          </p>
        </div>
      </section>
    </main>
  );
}
