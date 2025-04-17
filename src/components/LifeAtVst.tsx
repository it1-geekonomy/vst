import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import Image1 from "@/app/public/images/LifeAtVst/Image1.png"
import Image2 from "@/app/public/images/LifeAtVst/Image2.png"
import Image3 from "@/app/public/images/LifeAtVst/Image3.png"

const LifeAtVst = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

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
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[360px] md:h-[370px] lg:h-[420px] bg-black text-white overflow-hidden">
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

      {/* Fixed Title Section with subtitle and description */}
      <div className="absolute top-6 md:top-10 left-1/2 transform -translate-x-1/2 md:left-auto md:transform-none md:right-[-19.5%] z-40 text-center w-full md:w-auto">
        <h1 
          className="mb-2 text-white text-4xl md:text-6xl lg:text-7xl xl:text-[80px] font-roc"
          style={{
            fontWeight: 300,
            lineHeight: "90%",
            letterSpacing: "0.09em"
          }}
        >
          Life At VST
        </h1>
        
        {/* Container for horizontal line and white ball */}
        <div className="relative flex justify-center items-center mb-1">
          {/* White ball at the start of line */}
          <div className="w-3 h-3 md:w-4 md:h-4 bg-[#8CE0FF] rounded-full"></div>
          
          {/* Horizontal line with gradient */}
          <div className="w-full max-w-[250px] md:max-w-[380px] lg:max-w-[580px] xl:max-w-[880px] h-[2px] gradient-line"></div>
        </div>
        
        {/* Subtitle and description with more space on mobile */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="px-4 md:px-4 w-full max-w-[100%] md:max-w-[320px] lg:max-w-[450px] xl:max-w-[600px] mx-auto h-[230px] md:h-auto overflow-y-auto md:overflow-visible"
          >
            <h2 className="text-2xl md:text-xl lg:text-1xl xl:text-1xl font-semibold mb-3 text-center fontFamily-roc">
              {slides[currentSlide].subtitle}
            </h2>
            <p className="text-base md:text-xs lg:text-base xl:text-base text-center fontFamily-roc leading-relaxed md:leading-tight hyphens-auto " style={{ wordBreak: "break-word", textAlign: "justify", textJustify: "inter-word" }}>
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Background Image Container */}
      <div className="absolute left-0 w-full md:w-[85%] lg:w-[80%] xl:w-[75%] h-full">
        <Image
          src={slides[currentSlide].image}
          alt={`Life at VST ${currentSlide + 1}`}
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black to-transparent" />
      </div>

      {/* Black background div - visible from md breakpoint */}
      <div className="absolute right-0 top-0 w-[15%] md:w-[20%] lg:w-[25%] h-full bg-black hidden md:block" />

      {/* Digits component with flowing gradient animation */}
      <div className="hidden md:block absolute top-0 left-0 w-[80%] h-full z-20 md:left-[-2%]">
        <div className="relative w-full h-full flex items-center justify-center sm:left-[-8%]">
          <span className="text-[150px] lg:text-[200px] xl:text-[386px] font-roc text-white font-weight-200 absolute left-[35%] sm:left-[42%] lg:left-[42%] transform -translate-x-1/2">0</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={currentSlide}
              className="text-[150px] lg:text-[200px] xl:text-[386px] font-roc animate-flowing-gradient absolute left-[calc(35%+150px)] lg:left-[calc(38%+180px)] xl:left-[calc(42%+220px)] transform -translate-x-1/2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.4 }}
            >
              {(currentSlide + 1).toString()}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default LifeAtVst