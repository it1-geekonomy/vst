"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Tractor1 from '@/app/public/images/Manufacture/Tractor1.jpg'
import Tractor2 from '@/app/public/images/Manufacture/Tractor2.jpg'
import Tractor3 from '@/app/public/images/Manufacture/Tractor3.jpg'
import Tractor4 from '@/app/public/images/Manufacture/Tractor4.jpg'
import Image1 from '@/app/public/tillers/frame1.png'
import Image2 from '@/app/public/tillers/VST.png'
import Image3 from '@/app/public/tillers/frame3.png'
import Trusted1 from '@/app/public/tillers/Trusted1.png'
import Timeless2 from '@/app/public/tillers/Timeless2.png'
import Tough3 from '@/app/public/tillers/Tough3.png'
import BusinessSectors from "@/components/automotiveFranchises/BusinessSectors"
import Logo from '@/app/public/logos/Logo'
import LocationSection from '@/components/LocationSection'
import VSTLogoAnimation from '@/components/VSTLogoAnimation'
import Headerlogo from '@/app/public/images/Manufacture/Headerlogo'
const ManufacturePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const tractorImages = [
    { src: Tractor1, alt: 'VST Tractor Manufacturing 1' },
    { src: Tractor2, alt: 'VST Tractor Manufacturing 2' },
    { src: Tractor3, alt: 'VST Tractor Manufacturing 3' },
    { src: Tractor4, alt: 'VST Tractor Manufacturing 4' }
  ]

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

  useEffect(() => {
    if (isHovering) return

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % tractorImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isHovering])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="xl:pt-12 bg-[linear-gradient(180deg,#02231C_0%,#04473F_50%,#066C5E_100%)]">
      <div className="mx-auto px-4 md:px-8 lg:px-12 pb-12 flex flex-col justify-around w-[95%] md:w-[98%]">
        <div className="flex justify-center mt-10 md:mt-3">
          <Headerlogo />
        </div>
        {/* Tillers & Tractors Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-normal mt-8 md:my-8 text-white text-center font-roc">
          VST Tillers Tractors
        </h1>
        
        {/* Desktop view - Image Grid Section */}
        <div className="hidden md:flex justify-between items-start gap-8 mb-16">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden group flex-1" style={{ height: '500px' }}>
              <Image
                src={image.base}
                alt={`VST Tractor ${index + 1}`}
                fill
                className="object-fit transition-opacity duration-200 group-hover:opacity-0"
                priority
              />
              <Image
                src={image.hover}
                alt={`VST Tractor ${index + 1}`}
                fill
                className="object-fit opacity-0 transition-opacity duration-7000 group-hover:opacity-100"
                priority
              />
            </div>
          ))}
        </div>

        {/* Mobile view - Full width carousel with hover effect and top padding */}
        <div className="md:hidden relative h-[450px] w-full mb-12">
          <div className="absolute inset-0 top-12 w-full h-[400px]">
            <div 
              className="relative h-full w-full mt-[-10] overflow-hidden"
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
                className={`object-fit transition-opacity duration-300  ${isHovering ? 'opacity-0' : 'opacity-100'}`}
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
          <div className="absolute bottom-0 inset-x-0 flex justify-center space-x-2 z-10 !mb-0 !pb-0">
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

        <h1 className="text-clamp-57 mb-8 md:mb-16 leading-tight text-white text-center font-rocwide">
            Empowering farmers with efficiency, affordability<span className="hidden md:inline"><br /></span> and reliability
          </h1>
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16 w-full">
            {/* Description and Explore More (mobile: first, desktop: left) */}
            <div className="flex-1 text-white md:max-w-[48%]">
              <div className="mb-8">
                <p className="text-clamp-24 font-roc text-justify">
                  A pioneer in farm mechanization, VST Tillers Tractors Ltd. is India's one of the leading manufacturer of power tillers and compact 4WD tractors. Established in 1967 through a joint venture with Mitsubishi Heavy Industries, Japan, VST has grown to dominate over 70% of the Indian tiller market and exports to 40+ countries globally. <br /> <br /> With over five decades of trust, innovation, and durability, VST offers a robust product range from 9 HP to 50 HP, catering to diverse farming needs from vineyards to commercial haulage. Our commitment to quality and farmer empowerment has made us a preferred partner in sustainable agriculture across the world.
                </p>
              </div>
              
              {/* Mobile: Image section between text and button */}
              <div className="block md:hidden w-full mb-8">
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-4">
                  {tractorImages.map((image, index) => (
                    <Image
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 48vw"
                      className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 rounded-2xl ${
                        currentImage === index ? 'opacity-100' : 'opacity-0'
                      }`}
                      priority={index === 0}
                    />
                  ))}
                </div>
                <div className="flex justify-center space-x-3 mt-4">
                  {tractorImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`h-3 w-3 md:h-2 md:w-2 rounded-full transition-all duration-300 ${
                        currentImage === index 
                          ? 'bg-[#FDB813] md:w-6' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="w-full flex justify-start">
                <a 
                  href="https://www.vsttractors.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FDB813] text-black px-6 md:px-8 py-3 md:py-4 rounded-lg text-lg font-medium hover:bg-[#FDC833] transition-colors w-full md:w-[400px] text-center"
                >
                  Explore More
                </a>
              </div>
            </div>
            
            {/* Desktop: Image section remains on the right */}
            <div className="hidden md:flex flex-1 w-full md:max-w-[48%] flex-col">
              <div 
                className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-4"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {tractorImages.map((image, index) => (
                  <Image
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 48vw"
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 rounded-2xl ${
                      currentImage === index ? 'opacity-100' : 'opacity-0'
                    }`}
                    priority={index === 0}
                  />
                ))}
              </div>
              <div className="flex justify-center space-x-3 mt-4">
                {tractorImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`h-3 w-3 md:h-2 md:w-2 rounded-full transition-all duration-300 ${
                      currentImage === index 
                        ? 'bg-[#FDB813] md:w-6' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        {/* LocationSection full width, aligned with parent */}
        <div className="mt-8 sm:mt-12 md:mt-24 w-full">
          <LocationSection
            locationImage="tillers/Group 1000001966.png"
            address={{
              street: "Regd. Office: Plot No.1, Hale",
              street2: "Devasandra Industrial Layout,",
              street3: "Whitefield Road, Mahadevapura",
              city: "Post, Bengaluru - 560 048, India.",
              state: "",
              pincode: ""       
            }}
            phoneNumbers={[
              '1800-419-0136'
            ]}
            googleMapsUrl="https://www.google.com/maps/place/VST+TILLERS+TRACTORS+LTD/@12.9947235,77.6974669,17z/data=!4m14!1m7!3m6!1s0x3bae11a00d70e90d:0x5a90ab36eeaad4fc!2sVST+TILLERS+TRACTORS+LTD!8m2!3d12.9947235!4d77.7000418!16s%2Fg%2F1tjtgq78!3m5!1s0x3bae11a00d70e90d:0x5a90ab36eeaad4fc!8m2!3d12.9947235!4d77.7000418!16s%2Fg%2F1tjtgq78?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
            emails={{
              info: "info@vsttractors.com",
              globalConnect: "connect@vsttractors.com"
            }}
            className="text-white"
            iconColor="white"
            websiteUrl="www.vsttractors.com"
            mobilePadding="manufacture"
          />
        </div>
      </div>
      
      {/* Black background section - moved outside the container */}
      <div className="w-screen bg-black">
        <div className="relative z-10 w-full pt-1 sm:pt-0">
          <BusinessSectors />
        </div>
      </div>
      
      {/* VSTLogoAnimation with black background */}
      <div className="w-screen bg-black flex justify-center items-center py-1 -mt-8 pl-3">
        <VSTLogoAnimation />
      </div>
    </div>
  )
}

export default ManufacturePage