import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import Image1 from "@/app/public/images/LifeAtVst/Image1.jpg"
import Image2 from "@/app/public/images/LifeAtVst/Image2.jpg"
import Image3 from "@/app/public/images/LifeAtVst/Image3.jpg"

const LifeAtVst = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const slides = [
    {
      number: "01",
      image: Image1,
      title: "Life At VST",
      subtitle: "Commitment To Partnerships",
      description:
        "Strong partnerships are the cornerstone of enduring success. We cultivate collaborative ecosystems built on trust, transparency, and mutual growth. By forming strategic alliances across industries, our partners gain access to deep expertise, shared resources, and a supportive network—driving innovation and sustainable success together. With every collaboration, we bring the same focus, passion, and commitment that turns every brand we touch into a success story.",
    },
    {
      number: "02",
      image: Image2,
      title: "Life At VST",
      subtitle: "Fueling Talent With Opportunity",
      description:
        "People are our greatest strength. We're dedicated to nurturing talent through dynamic career paths, continuous learning, and skill-building initiatives. Our culture of innovation, inclusivity, and growth empowers employees to thrive, lead with confidence, and shape a brighter future—for themselves and for the organisation. We continuously invest in enhancing the quality of professional life—through thoughtful policies, modern tools, and a supportive work environment that enables people to feel valued, motivated, and future-ready.",
    },
    {
      number: "03",
      image: Image3,
      title: "Life At VST",
      subtitle: "Innovation Through Collaboration",
      description:
        "Community lies at the heart of who we are. We foster a workplace where collaboration, belonging, and well-being are prioritised. Through engaging experiences, meaningful initiatives, and a culture that celebrates both work and play, our environment supports not just productivity—but personal joy too. We believe work should be fulfilling and fun, with the right balance that makes every day feel worthwhile.",
    },
  ]

  useEffect(() => {
    if (isHovered) return
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [isHovered])

  return (
    <div className="relative w-full h-[360px] md:h-[370px] lg:h-[420px] bg-black text-white overflow-hidden pb-10">
      {/* Add keyframes for the flowing gradient animation matching the image */}
      <style jsx global>{`
        @keyframes flowingGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-flowing-gradient {
          background: linear-gradient(90deg, #00f5ff, #ff3e3e, #ff00ff, #00f5ff);
          background-size: 300% 100%;
          animation: flowingGradient 4s ease infinite;
          -webkit-background-clip: text;
          color: transparent;
        }
        
        .gradient-line {
          background: linear-gradient(90deg, #8CE0FF, white);
        }
      `}</style>

      {/* Create a flex container to divide the screen into two halves */}
      <div className="flex flex-col md:flex-row h-568px"
           onMouseEnter={() => setIsHovered(true)}
           onMouseLeave={() => setIsHovered(false)}>
        {/* Left half - Image container */}
        <div className="relative w-full md:w-1/2 h-462px">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: currentSlide === index ? 1 : 0,
                zIndex: currentSlide === index ? 1 : 0
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <Image
                src={slide.image}
                alt={`Life at VST ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Right half - Text content */}
        <div className="relative w-full md:w-1/2 h-full bg-black px-4 md:px-8">
          {/* Heading with digits on same line */}
          <div className="flex items-center justify-center w-full">
            <div className="flex items-baseline justify-center">
              <div className="flex items-baseline mr-2 md:mr-4">
                <span className="text-[60px] md:text-[70px] lg:text-[90px] xl:text-[70px] font-rocWide text-white font-weight-200">0</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentSlide}
                    className="text-[60px] md:text-[70px] lg:text-[90px] xl:text-[70px] font-rocWide animate-flowing-gradient"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    {(currentSlide + 1).toString()}
                  </motion.span>
                </AnimatePresence>
              </div>
              
              <h1
                className="text-white text-4xl md:text-5xl xl:text-[60px] font-roc"
                style={{
                  fontWeight: 300,
                  lineHeight: "90%",
                  letterSpacing: "0.09em"
                }}
              >
                Life At VST
              </h1>
            </div>
          </div>

          {/* Container for horizontal line and white ball */}
          <div className="flex justify-center items-center mb-1 w-full">
            {/* White ball at the start of line */}
            <div className="w-3 h-3 md:w-4 md:h-4 bg-[#8CE0FF] rounded-full flex-shrink-0"></div>

            {/* Horizontal line with gradient that extends to the right edge */}
            <div className="h-[2px] gradient-line flex-grow"></div>
          </div>

          {/* Subtitle and description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full max-w-[75%] mx-auto h-[230px] md:h-[300px] pl-6 md:pl-8 overflow-y-auto"
            >
              <h2 className="text-xl md:text-lg lg:text-lg xl:text-lg font-normal mb-3 text-start font-rocWide">
                {slides[currentSlide].subtitle}
              </h2>
              <p className="text-base md:text-sm lg:text-base xl:text-base font-roc font-normal leading-relaxed hyphens-auto" 
                 style={{ wordBreak: "break-word", textAlign: "justify", textJustify: "inter-word" }}>
                {slides[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default LifeAtVst