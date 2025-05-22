'use client'

import { useEffect, useRef } from 'react'

function EmpoweringScroll() {
  const scrollRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return
    
    const marqueeText = scrollContainer.children[0] as HTMLElement
    const textWidth = marqueeText.offsetWidth
    const windowWidth = window.innerWidth
    
    let animationId: number
    let startTime: number | null = null
    const duration = 30000 // Time in ms for one complete scroll cycle
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = (timestamp - startTime) % duration
      
      // Calculate the scroll position
      const progress = elapsed / duration
      const totalDistance = textWidth + windowWidth
      const translateX = windowWidth - (progress * totalDistance)
      
      scrollContainer.style.transform = `translateX(${translateX}px)`
      
      // When text is about to scroll off completely, reset it to the right edge
      if (progress >= 1) {
        startTime = timestamp // Reset the animation
      }
      
      animationId = requestAnimationFrame(step)
    }
    
    animationId = requestAnimationFrame(step)
    
    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])
  
  return (
    <div className="w-full bg-black py-8 sm:py-12 md:py-16 lg:py-20 mt-8 sm:mt-12 md:mt-16 lg:mt-20 overflow-hidden">
      <div className="relative overflow-hidden">
        <div 
          ref={scrollRef}
          className="inline-flex"
          style={{ 
            willChange: 'transform',
          }}
        >
          <h2 
            className="whitespace-nowrap font-rocWide text-4xl sm:text-6xl md:text-8xl lg:text-[120px] xl:text-[150px]"
            style={{ 
              fontWeight: 400,
              lineHeight: "120%",
              letterSpacing: "0%",
              backgroundImage: 'linear-gradient(90deg, #1776A2 0%, #28AF70 30.67%, #E7AE33 70.67%, #FF4FC2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Empowering growth through constant innovation                 
          </h2>
        </div>
      </div>
    </div>
  )
}

export default EmpoweringScroll
