import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import Image1 from "@/app/public/images/LifeAtVst/Image1.jpg"
import Image2 from "@/app/public/images/LifeAtVst/Image2.jpg"
import Image3 from "@/app/public/images/LifeAtVst/Image3.jpg"

const LifeAtVst = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      number: "01",
      image: Image1,
      title: "Life At VST",
      subtitle: "Commitment To Partnerships",
      description:
        "Strong partnerships are the cornerstone of enduring success. We cultivate collaborative ecosystems built on trust, transparency and mutual growth. By forming strategic alliances across industries, our partners gain access to deep expertise, shared resources and a supportive network — driving innovation and sustainable success together. With every collaboration, we bring the same focus, passion and commitment that turns every brand we touch into a success story.",
    },
    {
      number: "02",
      image: Image2,
      title: "Life At VST",
      subtitle: "Fueling Talent With Opportunity",
      description:
        "People are our greatest strength. We're dedicated to nurturing talent through dynamic career paths, continuous learning and skill building initiatives. Our culture of innovation, inclusivity and growth empowers employees to thrive, lead with confidence and shape a brighter future for themselves and for the organisation. We continuously invest in enhancing the quality of professional life through thoughtful policies, modern tools and a supportive work environment that enables people to feel valued, motivated and future-ready.",
    },
    {
      number: "03",
      image: Image3,
      title: "Life At VST",
      subtitle: "A Strong Community Spirit",
      description:
        "Community lies at the heart of who we are. We foster a workplace where collaboration, belonging and well-being are prioritised. Through engaging experiences, meaningful initiatives and a culture that celebrates both work and play, our environment supports not just productivity but personal joy too. We believe work should be fulfilling and fun, with the right balance that makes every day feel worthwhile.",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative w-full h-[500px] md:h-[370px] lg:h-[420px] bg-black text-white overflow-hidden ">
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
      <div className="flex flex-col md:flex-row h-568px">
        {/* Left half - Image container (hidden on mobile) */}
        <div className="relative hidden md:block w-full md:w-1/2 h-562px">
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
                objectFit="contain"
                objectPosition="left"
              />
            </motion.div>
          ))}
        </div>

        {/* Right half - Text content */}
        <div className="relative w-full md:w-1/2 h-full bg-black">
          {/* Mobile background images */}
          <div className="md:hidden absolute inset-0">
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
                  objectPosition="center"
                  className="opacity-80"
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/30"></div>
              </motion.div>
            ))}
          </div>

          {/* Content container with consistent padding */}
          <div className="relative z-10 px-4 md:px-8 flex flex-col items-center">
            {/* Content wrapper to maintain consistent width */}
            <div className="w-full max-w-[90%] md:max-w-[75%]">
              {/* Heading with digits on same line */}
              <div className="flex items-center w-full ">
                <div className="flex items-baseline w-full">
                  {/* Number container with fixed width */}
                  <div className="flex items-baseline mr-2 md:mr-4 flex-shrink-0">
                    <span className="text-clamp-80 font-rocWide text-white font-weight-200">0</span>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentSlide}
                        className="text-clamp-80 font-rocWide animate-flowing-gradient"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                      >
                        {(currentSlide + 1).toString()}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  {/* Title - left aligned, not stretched */}
                  <h1
                    className="text-white font-roc text-left text-clamp-80"
                    style={{
                      fontWeight: 300,
                      lineHeight: '90%',
                      letterSpacing: '0.09em',
                      whiteSpace:'nowrap',   
                      marginLeft: '0.5rem'
                    }}
                  >
                    Life At VST
                  </h1>
                </div>
              </div>

              {/* Horizontal line and blue ball spanning full width */}
              <div className="relative  left-1/2 right-1/2 md:-ml-[22vw] sm:-ml-[45vw] max-sm:-ml-[45vw] flex items-center mb-1">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-[#8CE0FF] rounded-full flex-shrink-0 z-10"></div>
                <div className="h-[2px] gradient-line flex-grow ml-0" />
              </div>

              {/* Subtitle and description with navigation arrows */}
              <div className="relative flex items-center">
                {/* Left arrow */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 z-10 w-8 h-8 md:w-10 md:h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 -translate-x-8 md:-translate-x-12"
                  aria-label="Previous slide"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>

                {/* Right arrow */}
                <button
                  onClick={nextSlide}
                  className="absolute right-0 z-10 w-8 h-8 md:w-10 md:h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 translate-x-8 md:translate-x-12"
                  aria-label="Next slide"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full h-[370px] md:h-[300px] overflow-y-auto px-4 flex flex-col justify-center"
                  >
                    <h2 className="text-lg md:text-xl font-normal mb-2 text-left font-roc">
                      {slides[currentSlide].subtitle}
                    </h2>
                    <p className="text-sm md:text-base font-normal leading-relaxed w-full" 
                       style={{ 
                         wordBreak: "break-word",
                         textAlign: "justify",
                         textJustify: "inter-word"
                       }}>
                      {slides[currentSlide].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LifeAtVst