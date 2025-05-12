'use client'

import { useEffect, useRef, useState } from 'react'

interface MilestoneItem {
  value: number
  label: string
  suffix: string
  color: string
}

// Reduced dimensions for smaller overall size
const BAR_WIDTH_PX = 25
const BAR_HEIGHT_PX = 100

function OurMilestone() {
  const milestones: MilestoneItem[] = [
    { value: 100, label: 'Years', suffix: '+', color: 'bg-[#B897FF]' },
    { value: 5000, label: 'Customers', suffix: '+', color: 'bg-[#95C7FF]' },
    { value: 60, label: 'Brands', suffix: '+', color: 'bg-[#50FFA0]' },
    { value: 6, label: 'Locations', suffix: '+', color: 'bg-[#FEBF3D]' }
  ]

  return (
    <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center w-full bg-black text-white py-8 md:py-28 px-4 md:px-6">
      {/* Typography Section - Now stays on top for both mobile AND tablet */}
      <div className="w-full lg:w-1/4 mb-8 md:mb-10 lg:mb-0 lg:pr-6 text-center md:text-center lg:text-left">
        <div className="inline-block lg:w-full">
          <div className="text-4xl sm:text-5xl md:text-5xl text-white font-Roc relative z-10">
            <div>Our</div>
            <div>Milestones</div>
          </div>
        </div>
      </div>

      {/* Counters Section */}
      <div className="w-full lg:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-x-8 gap-y-12 font-rocWide">
        {milestones.map((item, index) => (
          <CounterItem key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

function CounterItem({ item }: { item: MilestoneItem }) {
  const [isVisible, setIsVisible] = useState(false)
  const [count, setCount] = useState(0)
  const counterRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

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
    if (isVisible) {
      let startTime: number | null = null
      const duration = 2000 // 2 seconds animation
      const targetValue = item.value

      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = timestamp - startTime
        const percentage = Math.min(progress / duration, 1)
        
        // Ease out cubic function for smoother end of animation
        const easeOutCubic = 1 - Math.pow(1 - percentage, 3)
        const currentCount = Math.floor(easeOutCubic * targetValue)
        
        setCount(currentCount)

        if (percentage < 1) {
          animationRef.current = requestAnimationFrame(animateCount)
        } else {
          setCount(targetValue)
        }
      }

      animationRef.current = requestAnimationFrame(animateCount)

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
        }
      }
    }
  }, [isVisible, item.value])

  const valueStr = count.toString()
  const firstDigit = valueStr[0] || '0'
  const restDigits = valueStr.slice(1)

  const contentLeftOffset = `${BAR_WIDTH_PX - 20}px`

  return (
    <div ref={counterRef} className="flex flex-col items-start overflow-hidden">
      <div
        className={`relative ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          minHeight: `${BAR_HEIGHT_PX + 30}px`,
          transition: "opacity 1s ease-out"
        }}
      >
        <div
          className={`${item.color} absolute top-0 left-0`}
          style={{ height: `${BAR_HEIGHT_PX}px`, width: `${BAR_WIDTH_PX}px` }}
        ></div>

        <div
          className="absolute top-1/3 transform -translate-y-1/2 flex flex-col items-start"
          style={{ left: contentLeftOffset }}
        >
          <div
            className="flex items-baseline relative"
            style={{ bottom: "2px" }}
          >
            <span
              className="text-4xl sm:text-5xl md:text-5xl text-white font-['Roc_Grotesk'] relative z-10"
              style={{
                textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
                marginRight: "-2px"
              }}
            >
              {firstDigit}
            </span>
            <span className="text-4xl sm:text-5xl md:text-5xl text-white font-['Roc_Grotesk']">
              {restDigits}
            </span>
            <span
              className="text-4xl sm:text-5xl md:text-5xl text-white"
              style={{
                fontFamily: 'Arial, sans-serif',
                marginLeft: "0"
              }}
            >
              +
            </span>
          </div>

          <div
            className="text-lg md:text-xl lg:text-2xl text-gray-400 mt-0 font-['Roc_Grotesk'] text-left pl-6"
          >
            {item.label}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurMilestone
