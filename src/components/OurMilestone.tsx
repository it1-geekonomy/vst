'use client'

import { useEffect, useRef, useState } from 'react'

interface MilestoneItem {
  value: number
  label: string
  suffix: string
  color: string
}

// Constants for bar dimensions based on interpretation
const BAR_WIDTH_PX = 33
const BAR_HEIGHT_PX = 127
const SPACING_PX = 8 // Spacing between bar and digits

function OurMilestone() {
  const milestones: MilestoneItem[] = [
    { value: 100, label: 'Years', suffix: '+', color: 'bg-purple-400' },
    { value: 5000, label: 'Customers', suffix: '+', color: 'bg-blue-400' },
    { value: 60, label: 'Brands', suffix: '+', color: 'bg-green-400' },
    { value: 6, label: 'Locations', suffix: '+', color: 'bg-yellow-400' }
  ]
  
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full bg-black text-white py-12 md:py-16 px-4 md:px-8">
      {/* Typography Section */}
      <div className="w-full lg:w-1/4 mb-12 lg:mb-0 lg:pr-8 text-center lg:text-left">
        <div className="inline-block lg:w-full">
          <div style={{ 
            fontFamily: "Roc Grotesk",
            fontWeight: 500,
            fontSize: "57px", 
            lineHeight: "1.1", 
            letterSpacing: "0%"
          }}>
            <div>Our</div>
            <div>Milestones</div>
          </div>
        </div>
      </div>
      
      {/* Counters Section */}
      <div className="w-full lg:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-x-8 md:gap-x-10 gap-y-16"> {/* Increased y-gap */}
        {milestones.map((item, index) => (
          <CounterItem key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

function CounterItem({ item }: { item: MilestoneItem }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entries[0].target)
        }
      },
      { threshold: 0.1 }
    )
    
    if (counterRef.current) {
      observer.observe(counterRef.current)
    }
    
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [])
  
  useEffect(() => {
    if (!isVisible) return
    
    let start = 0
    const duration = 2000 // 2 seconds
    const increment = item.value / (duration / 16)
    let timer: NodeJS.Timeout
    
    const updateCounter = () => {
      start += increment
      if (start < item.value) {
        setCount(Math.floor(start))
        timer = setTimeout(updateCounter, 16)
      } else {
        setCount(item.value)
      }
    }
    
    updateCounter()
    
    return () => clearTimeout(timer)
  }, [isVisible, item.value])

  // Get first digit of the count
  const firstDigit = count.toString()[0]
  const restDigits = count.toString().slice(1)
  
  // Calculate the left offset for the digits/label container
  const contentLeftOffset = `${BAR_WIDTH_PX + SPACING_PX}px` 

  return (
    <div ref={counterRef} className="flex flex-col items-start">
      {/* Container for bar and positioned content */}
      {/* Increased min-height slightly to ensure space for label */}
      <div className="relative" style={{ minHeight: `${BAR_HEIGHT_PX + 40}px` }}> 
        {/* Bar */}
        <div 
          className={`${item.color} absolute top-0 left-0`} 
          style={{ height: `${BAR_HEIGHT_PX}px`, width: `${BAR_WIDTH_PX}px` }}
        ></div>
        
        {/* Absolute container for digits AND label, positioned right of bar */}
        {/* Centered vertically relative to the bar height */}
        <div 
          className="absolute top-1/2 transform -translate-y-1/2 flex flex-col items-start" 
          style={{ left: contentLeftOffset }} 
        >
          {/* Digits */}
          <div className="flex items-baseline">
            <span 
              className="text-5xl sm:text-6xl md:text-7xl text-white font-['Roc_Grotesk'] relative pr-0" 
            >{firstDigit}</span> 
            <span className="text-5xl sm:text-6xl md:text-7xl text-white font-['Roc_Grotesk']">{restDigits}</span>
            <span className="text-5xl sm:text-6xl md:text-7xl text-white font-['Roc_Grotesk']">{item.suffix}</span>
          </div>

          {/* Label positioned directly below digits within the same absolute container */}
          {/* Removed margin-left style, mt-0 for tight spacing */}
          <div className="text-xl md:text-2xl lg:text-3xl text-gray-400 mt-0 font-['Roc_Grotesk'] text-left"> 
            {item.label}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurMilestone
