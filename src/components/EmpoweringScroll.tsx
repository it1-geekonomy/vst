'use client'

import { useEffect, useRef } from 'react'

function EmpoweringScroll() {
  const scrollRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return
    
    const marqueeText = scrollContainer.children[0] as HTMLElement
    const textWidth = marqueeText.offsetWidth
    
    // Clone the text for seamless scrolling
    const cloneText = marqueeText.cloneNode(true) as HTMLElement
    scrollContainer.appendChild(cloneText)
    
    let animationId: number
    let startTime: number | null = null
    const duration = 30000 // Time in ms for one complete scroll cycle
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = ((timestamp - startTime) % duration) / duration
      
      const translateX = -(progress * textWidth)
      scrollContainer.style.transform = `translateX(${translateX}px)`
      
      animationId = requestAnimationFrame(step)
    }
    
    animationId = requestAnimationFrame(step)
    
    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])
  
  return (
    <div className="w-full bg-black py-4 overflow-hidden">
      <div className="relative overflow-hidden">
        <div 
          ref={scrollRef}
          className="inline-flex"
          style={{ 
            willChange: 'transform',
          }}
        >
          <h2 
            className="whitespace-nowrap"
            style={{ 
              fontFamily: "FONTSPRING DEMO - Roc Grotesk Wide",
              fontWeight: 400,
              fontSize: "180px",
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
