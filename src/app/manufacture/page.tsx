"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Tractor from '@/app/public/images/Manufacture/Tractor.png'
import Image1 from '@/app/public/tillers/frame1.png'
import Image2 from '@/app/public/tillers/frame2.png'
import Image3 from '@/app/public/tillers/frame3.png'
import Trusted1 from '@/app/public/tillers/Trusted1.png'
import Timeless2 from '@/app/public/tillers/Timeless2.png'
import Tough3 from '@/app/public/tillers/Tough3.png'
import BusinessSectors from "@/components/automotiveFranchises/BusinessSectors"
import Logo from '@/app/public/logos/Logo'

const ManufacturePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const images = [
    { base: Image1, hover: Trusted1 },
    { base: Image2, hover: Timeless2 },
    { base: Image3, hover: Tough3 }
  ]

  // Check for mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto advance carousel on mobile when not hovering
  useEffect(() => {
    if (!isMobile || isHovering) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [isMobile, isHovering, images.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="xl:pt-12 bg-[linear-gradient(180deg,#02231C_0%,#04473F_50%,#066C5E_100%)]">
      <div className="mx-auto px-0 md:px-12 pb-12 flex flex-col justify-around">
        {/* Tillers & Tractors Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal my-8 md:my-12 text-white text-center font-roc ">
          VST Tillers & Tractors
        </h1>
        
        {/* Desktop view - Image Grid Section */}
        <div className="hidden md:flex justify-center items-start space-x-8 mb-16">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden group" style={{ width: '536px', height: '500px' }}>
              <Image
                src={image.base}
                alt={`VST Tractor ${index + 1}`}
                fill
                className="object-fit transition-opacity duration-300 group-hover:opacity-0"
                priority
              />
              <Image
                src={image.hover}
                alt={`VST Tractor ${index + 1}`}
                fill
                className="object-fit opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                priority
              />
            </div>
          ))}
        </div>

        {/* Mobile view - Full width carousel with hover effect and top padding */}
        <div className="md:hidden pt-12 relative h-[450px] w-full mb-8">
          <div className="absolute inset-0 top-12 w-full h-[400px]">
            <div 
              className="relative h-full w-full overflow-hidden"
              onTouchStart={() => setIsHovering(true)}
              onTouchEnd={() => setIsHovering(false)}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Base image */}
              <Image
                src={images[currentSlide].base}
                alt={`VST Tractor ${currentSlide + 1}`}
                fill
                className={`object-fit transition-opacity duration-300 ${isHovering ? 'opacity-0' : 'opacity-100'}`}
                priority
              />
              
              {/* Hover image */}
              <Image
                src={images[currentSlide].hover}
                alt={`VST Tractor ${currentSlide + 1}`}
                fill
                className={`object-fit  transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
                priority
              />
              
              
            </div>
          </div>
          
          {/* Navigation arrows */}
          <div className="absolute inset-y-0 top-12 bottom-0 left-2 flex items-center">
            <button 
              onClick={prevSlide}
              className="bg-black/30 text-white rounded-full p-2 hover:bg-black/50 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
          </div>
          
          <div className="absolute inset-y-0 top-12 bottom-0 right-2 flex items-center">
            <button 
              onClick={nextSlide}
              className="bg-black/30 text-white rounded-full p-2 hover:bg-black/50 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
          
          {/* Pagination indicators */}
          <div className="absolute bottom-2 inset-x-0 flex justify-center space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-[#FDB813] w-6' 
                    : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="px-4 md:px-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 md:mb-16 leading-tight text-white text-center font-rocwide">
            Empowering Farmers With Efficiency, Affordability And Reliability
          </h1>
          
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex-1 text-white" style={{ maxWidth: "567px" }}>
              <div className="text-xl mb-8 font-roc" style={{ lineHeight: "1.8" }}>
                <p >
                  VST Tillers Tractors was incorporated in the 
                  year 1967 with Mitsubishi Heavy Industries Ltd. 
                  and Mitsubishi Corporation of Japan as Joint 
                  Venture Partners for the manufacture of Power 
                  Tillers. The factory was established on a 20 acre 
                  plot on the Whitefield Road. Power Tillers are 
                  used by small and medium farmers primarily for 
                  paddy cultivation. This machine has increased 
                  productivity and encouraged multiple cropping 
                  system for rice.
                </p>
              </div>

              <div className="w-full flex justify-start">
                <button className="bg-[#FDB813] text-black px-6 md:px-8 py-3 md:py-4 rounded-lg text-lg font-medium hover:bg-[#FDC833] transition-colors w-full md:w-[400px]">
                  Explore More
                </button>
              </div>
            </div>

            <div className="flex-1">
              <Image
                src={Tractor}
                alt="VST Tractor Manufacturing"
                width={1000}
                height={508}
                className="rounded-2xl"
                priority
              />
            </div> 
          </div>

          {/* Location Section */}
          <div className="mt-12 md:mt-16 w-full flex flex-col items-center">
            <h2 className="text-[#FDB813] text-3xl md:text-5xl font-bold mb-6 md:mb-8 self-start">Our Location</h2>
            <div className="w-full flex justify-center">
              <div className="w-full rounded-lg overflow-hidden shadow-lg" style={{ maxWidth: "1614px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0167881117726!2d77.57254827475243!3d12.989645014917816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1651b4dd2399%3A0x9c4cbf3e1c014d1b!2s1%2C%20Palace%20Cross%20Rd%2C%20Bengaluru%2C%20Karnataka%20560020!5e0!3m2!1sen!2sin!4v1709534844025!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
          <div className="mt-16 md:mt-24">
            <BusinessSectors />
          </div>

          {/* Added Logo section at the end */}
          <div className="flex justify-center items-center py-16">
            <Logo className="w-24 h-36 md:w-32 md:h-48" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManufacturePage