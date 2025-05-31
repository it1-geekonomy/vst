import React, { useState, useEffect } from "react";
import flag from "@/app/public/makingdiff/flag.png";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import leftarrow from "@/app/public/makingdiff/LeftVector.png";
import rightarrow from "@/app/public/makingdiff/RightVector.png";

const timelineData = [
  {
    year: "2015-2016",
    images: [
      {
        src: "/imagesanime/image1.png",
        title: "Anugraha Charitable Trust",
        description:
          "The VST group made contributions to the trust supporting its mission to enhance the well-being and development of persons with intellectual disabilities through care, education, and rehabilitation initiatives.",
      },
      {
        src: "/imagesanime/image2.png",
        title: "Chennai - Flood relief fund",
        description: " The Chennai Flood Relief Fund to support communities devastated by the 2015 Chennai floods. Our assistance helped provide essential supplies, medical aid, and rehabilitation efforts for those affected by this natural disaster.",
      },
    ],
  },
  {
    year: "2016-2017",
    images: [
      {
        src: "/imagesanime/image3.png",
        title: "Wildlife First",
        description:
          "The group supported the Wildlife First movement, contributing to the conservation of wildlife and natural habitats through advocacy and protection initiatives.",
      },
      {
        src: "/imagesanime/image4.png",
        title: "The National Association for the Blind, Karnataka",
        description:
          "Driven by a commitment to inclusivity and empowerment, the VST group supported The National Association for the Blind, Karnataka, helping provide visually challenged individuals with access to education, skill development, and opportunities for independent living.",
      },
      {
        src: "/imagesanime/image5.png",
        title: "The Deaf Aid Society",
        description:
          "The Deaf Aid Society is dedicated to empowering hearing-impaired children, especially from economically weaker sections. Through early intervention, special education, and assistive technology, these children are given the tools to communicate, learn, and thrive.",
      },
    ],
  },
  {
    year: "2017-2018",
    images: [
      {
        src: "/imagesanime/image6.png",
        title: "Rotary Orchards Chaitanya Senior Citizens Home Trust",
        description: "VST Group extended heartfelt support to the Rotary Orchards Chaitanya Senior Citizens Home Trust through meaningful donations. This contribution helps provide elderly residents with better living conditions, medical care, and emotional well-being. It reflects our deep respect for senior citizens and commitment to their dignity and comfort.",
      },
      {
        src: "/imagesanime/image7.png",
        title: "Smt. Kamala Bai Educational Institution, Bangalore",
        description:
          "Founded in 1931 by Mr. Mudaliar, this institution promotes education and Indian cultural values. Spanning 8 acres, it includes Primary & High School, Pre-University, and Degree College.",
      },
      {
        src: "/imagesanime/image8.png",
        title: "Supporting Spiritual and Social Welfare",
        description:
          "As part of its commitment to community development and spiritual well-being, the VST Group has extended generous contributions to various religious and charitable trusts, including the group of Ramakrishna Matt and other esteemed organizations.",
      },
      {
        src: "/imagesanime/image9.png",
        title: "The National Association for the Blind, Karnataka",
        description: "The National Association for the Blind, Karnataka has successfully conducted a series of impactful medical outreach programs aimed at transforming lives through better vision and healthcare access. Like Screening camps, eye camps, surgery & medicines.",
      },
    ],
  },
  {
    year: "2018-2019",
    images: [
      {
        src: "/imagesanime/image10.png",
        title:
          "Bhaskaracharya Educational Resource and Research Institute, Bijjargi",
        description: "These contributions support enhanced learning environments, access to quality education, and resource development for students in rural areas. By investing in education, VST Group is nurturing future leaders and driving long-term community upliftment. Education remains a cornerstone of our CSR vision.",
      },
      {
        src: "/imagesanime/image11.png",
        title: "Bangalore Hospice Trust",
        description:
          "Provided free palliative care to advanced-stage cancer patients who are beyond cure.",
      },
    ],
  },
  {
    year: "2019-2020",
    images: [
      {
        src: "/imagesanime/image12.png",
        title: "The Shakthi Foundation",
        description:
          "Striving hard to make the society healthy in a holistic way, pattern-based education to the young generation and make the scientifically tested and trusted quality food available to the public.",
      },
      {
        src: "/imagesanime/image13.png",
        title: "Indian Cancer Society",
        description:
          "The Indian Cancer Society in its “Rise Against Cancer” movement, aimed at spreading awareness, enabling timely treatment, and offering holistic rehabilitation. This initiative empowers patients and families through education, early detection, and compassionate care. VST’s contribution helps bridge the gap between diagnosis and recovery, especially for the underprivileged. Together, we are fostering hope, strength, and a future free from cancer.",
      },
    ],
  },
  {
    year: "2020-2021",
    images: [
      {
        src: "/imagesanime/image14.png",
        title: "Rotary Club of Bangalore Charitable Trust",
        description:
          "The Rotary Club of Bangalore Charitable Trust to support large-scale projects focused on Education, Health, Economic Empowerment, Youth Development, and Environmental Sustainability. These initiatives are designed to uplift underserved communities and drive long-term social impact. From building schools to supporting healthcare access and green initiatives, the partnership reflects VST’s deep-rooted commitment to holistic community development. Together, we are building stronger, healthier, and more resilient futures.",
      },
      {
        src: "/imagesanime/image15.png",
        title: "Covid-19 Relief Fund",
        description:
          "The VST group made major contributions towards the medical expenses of COVID-hit patients and also contributed towards medical equipment.  In addition, the group ensured the well-being of its employees and their families during this challenging time, providing them with necessary support and care.",
      },
    ],
  },
  {
    year: "2021-2022",
    images: [
      {
        src: "/imagesanime/image16.png",
        title: "PM Care Fund",
        description:
          "VST stands with the nation in times of need, upholding its responsibility to protect and uplift lives. Together, we contribute to a resilient and prepared India.",
      },
      {
        src: "/imagesanime/image17.png",
        title: "Lakshmi Pain And Palliative Care Trust",
        description:
          "Providing Medical Care with Compassion and Competence, We treat the physical symptoms ,social needs of patients suffering from medical conditions.",
      },
      {
        src: "/imagesanime/image18.png",
        title: "The Kuppuswamy Naidu Charity Trust-Healing Tiny Hearts",
        description:
          "This initiative, Healing Tiny Hearts, focuses on early diagnosis, treatment, and care for children from underprivileged backgrounds. VST’s contribution helps save young lives and offers hope to families facing medical and financial challenges. Through this effort, we reaffirm our commitment to nurturing healthier, brighter futures for India’s children.",
      },
    ],
  },
  {
    year: "2022-2023",
    images: [
      {
        src: "/imagesanime/image19.png",
        title: "Akshadhaa Foundation",
        description:
          "VST Group supports Akshadhaa Foundation in its mission to create meaningful learning environments that empower children to lead independent and fulfilling lives. By fostering education, life skills, and holistic development, this initiative helps children overcome challenges and build confidence for a brighter future. VST’s contribution strengthens the foundation’s efforts to nurture self-reliant individuals who can positively impact their communities.",
      },
      {
        src: "/imagesanime/image20.png",
        title: "The Association of People with Disability",
        description:
          "The VST group extended its support to the Association of People with Disability, contributing towards initiatives aimed at empowering and improving the lives of individuals with disabilities."
      },
    ],
  },
  {
    year: "2023-2024",
    images: [
      {
        src: "/imagesanime/image21.png",
        title: "BGC Crow Trust",
        description:
          "An initiative dedicated to opening a world of opportunities for children of golf caddies. With a vision to empower these children through education and skill development, the Trust helps break the cycle of poverty and builds pathways to a brighter future. VST’s partnership strengthens this mission, fostering hope and growth for the next generation.",
      },
      {
        src: "/imagesanime/image22.png",
        title: "The Live Love Laugh Foundation",
        description:
          "The Live Love Laugh Foundation in its vital mission to raise mental health awareness and destigmatize mental illness across communities. By promoting open conversations and access to mental health resources, this partnership aims to build a more compassionate and informed society.",
      },
    ],
  },
];

const AnimatedTimeline = () => {
  const [currentYearIndex, setCurrentYearIndex] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [yearPosition, setYearPosition] = useState(0);
  const [slideAmount, setSlideAmount] = useState(0);

  const currentYear = timelineData[currentYearIndex];
  const totalCards = currentYear?.images?.length || 0;

  // Handle responsive slide amounts
  useEffect(() => {
    const updateSlideAmount = () => {
      if (window.innerWidth < 380) {
        setSlideAmount(20);
      } else if (window.innerWidth < 480) {
        setSlideAmount(30);
      } else if (window.innerWidth < 580) {
        setSlideAmount(45);
      } else if (window.innerWidth < 680) {
        setSlideAmount(55);
      } else if (window.innerWidth < 780) {
        setSlideAmount(50);
      } else if (window.innerWidth < 880) {
        setSlideAmount(60);
      } else if (window.innerWidth < 980) {
        setSlideAmount(70);
      } else if (window.innerWidth < 1080) {
        setSlideAmount(80);
      } else if (window.innerWidth < 1180) {
        setSlideAmount(90);
      } else if (window.innerWidth < 1280) {
        setSlideAmount(100);
      } else if (window.innerWidth < 1380) {
        setSlideAmount(110);
      } else if (window.innerWidth < 1480) {
        setSlideAmount(120);
      } else if (window.innerWidth < 1580) {
        setSlideAmount(130);
      } else if (window.innerWidth < 1680) {
        setSlideAmount(140);
      } else if (window.innerWidth < 1780) {
        setSlideAmount(150);
      } else if (window.innerWidth < 1880) {
        setSlideAmount(160);
      } else if (window.innerWidth < 1980) {
        setSlideAmount(170);
      } else if (window.innerWidth < 2080) {
        setSlideAmount(180);
      } else if (window.innerWidth < 2180) {
        setSlideAmount(190);
      } else {
        setSlideAmount(230);
      }
    };

    // Initial update
    updateSlideAmount();

    // Update on resize
    window.addEventListener("resize", updateSlideAmount);
    return () => window.removeEventListener("resize", updateSlideAmount);
  }, []);

  // Auto-loop through cards
  useEffect(() => {
    if (!isHovered && totalCards > 0) {
      const interval = setInterval(() => {
        setCurrentCardIndex((prev) => (prev + 1) % totalCards);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, totalCards]);

  const handlePrevYear = () => {
    if (currentYearIndex < timelineData.length - 1) {
      setCurrentYearIndex((prev) => prev + 1);
      setYearPosition((prev) => prev - slideAmount);
      setCurrentCardIndex(0);
    }
  };

  const handleNextYear = () => {
    if (currentYearIndex > 0) {
      setCurrentYearIndex((prev) => prev - 1);
      setYearPosition((prev) => prev + slideAmount);
      setCurrentCardIndex(0);
    }
  };

  const handleCardHover = (isEntering: boolean) => {
    setIsHovered(isEntering);
  };

  if (!currentYear) return null;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Decorative Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 15px,
              rgba(255,255,255,0.1) 15px,
              rgba(255,255,255,0.1) 16px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 15px,
              rgba(255,255,255,0.1) 15px,
              rgba(255,255,255,0.1) 16px
            )
          `,
        }}
      />

      {/* Timeline Line */}
      <div className="absolute top-28 lg:left-14 lg:right-14 sm:left-12 sm:right-12 left-4 right-4 h-px bg-white" />

      {/* Flag on left */}
      <div className="absolute sm:top-12 lg:left-16 sm:left-14 left-4 top-16">
        <Image src={flag} alt="Flag" width={30} height={30} />
      </div>

      {/* Timeline Navigation */}
      <div className="absolute sm:top-12 lg:right-12 sm:right-14 right-2 top-16 flex items-center justify-end">
        <div
          className="flex items-center gap-6 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${yearPosition}px)` }}
        >
          <div className="flex items-center lg:gap-1 xl:gap-3 sm:gap-2 gap-0">
            {/* Left arrow (except for last year) */}
            {currentYearIndex !== timelineData.length - 1 && (
              <button
                onClick={handlePrevYear}
                className="p-1 hover:bg-white/30 transition-all duration-300"
              >
                <Image
                  src={leftarrow}
                  alt="Left Arrow"
                  width={20}
                  height={20}
                />
              </button>
            )}

            {/* Current year */}
            <span className="text-white text-clamp-28 text-center sm:min-w-[90px] md:min-w-[120px] lg:min-w-[135px] xl:min-w-[150px] 2xl:min-w-[165px] w-24">
              {currentYear.year}
            </span>

            {/* Right arrow (except for first year) */}
            {currentYearIndex !== 0 && (
              <button
                onClick={handleNextYear}
                className="p-1 hover:bg-white/30 transition-all duration-300"
              >
                <Image
                  src={rightarrow}
                  alt="Right Arrow"
                  width={20}
                  height={20}
                />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="pt-32 pb-16 px-4 sm:px-8 md:px-12 lg:px-16">
        <div
          className="container mx-auto"
          onMouseEnter={() => handleCardHover(true)}
          onMouseLeave={() => handleCardHover(false)}
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              {currentYear.images.map(
                (item, index) =>
                  index === currentCardIndex && (
                    <motion.div
                      key={`${currentYearIndex}-${index}`}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div
                        className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-28 items-center ${
                          index % 2 === 0 ? "" : "md:flex-row-reverse"
                        }`}
                      >
                        {/* Image Section */}
                        <motion.div
                          className={`relative order-1 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}
                          initial={{ scale: 0.95 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="pt-10 md:pt-20">
                            <img
                              src={item.src}
                              alt={item.title}
                              className="w-full md:w-[50vh] lg:w-[60vh] h-[35vh] md:h-[45vh] lg:h-[55vh] object-cover rounded-xl"
                            />
                          </div>
                        </motion.div>

                        {/* Text Section */}
                        <motion.div
                          className={`text-white order-2 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <h1 className="text-clamp-48 mb-4 md:mb-6 lg:mb-8">
                            {item.title}
                          </h1>

                          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 md:p-5 lg:p-6 border border-white/20">
                            <p className="text-white/90 leading-relaxed text-clamp-24">
                              {item.description}
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTimeline;
