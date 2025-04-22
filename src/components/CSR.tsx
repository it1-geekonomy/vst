"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from './Footer';
import Initiatives from './Initiatives';
import bg from '../app/public/makingdiff/bg.png';
import flag from '../app/public/makingdiff/flag.png';
import { Poppins } from 'next/font/google';

interface CSRItemProps {
    title: string;
    description: string;
    year: string;
    images: ImageData[];
    currentIndex: number;
}

// New interface for image data with title and description
interface ImageData {
    src: string;
    title: string;
    description: string;
}

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: '--font-poppins',
});

// Updated timeline data structure with titles and descriptions for each image
const timelineData = [
    {
        year: "2015-2016",
        images: [
            {
                src: "/makingdiff/imagesanime/image1.jpeg",
                title: "Anugraha Charitable Trust",
                description: "Facilitating good health, Education, Food and shelter to the sufferings of the needy Sheila Kothavala Inst. For Deaf to build confidence, empower and mainstream members of the hearing impaired"
            },
            {
                src: "/makingdiff/imagesanime/image2.jpeg",
                title: "Chennai - Food relief fund",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
            }
        ]
    },
    {
        year: "2016-2017",
        images: [
            {
                src: "/makingdiff/imagesanime/image3.jpeg",
                title: "Wild Life First",
                description: "Wildlife conservation in India"
            },
            {
                src: "/makingdiff/imagesanime/image4.jpeg",
                title: "National Association of Blind",
                description: "Druven by a commitment to inclusivity, equips the visually challenged with knowledge, independence, and a pathway to a brighter future.",
            },
        ]
    },
    {
        year: "2017-2018",
        images: [
            {
                src: "/makingdiff/imagesanime/image5.jpeg",
                title: "Rotary Orchards Chaitanya Senior",
                description: "Citizens Home Trust old age home"
            },
            {
                src: "/makingdiff/imagesanime/image6.jpeg",
                title: "SMT. KAMALA BAI EDUCATIONAL INSTITUTION, BANGALORE ",
                description: "This institution was the result of Mr. Mudaliar's desire to further the dual causes of education for girls in India and the creation of an educational environment that would be imbued with Indian cultural values. Named after his wife, the institution was founded in 1931. Today, it boasts a large, well-appointed campus of around 8 acres and includes Primary & High School, Pre-Universiy College, and Degree College."
            },
            {
                src: "/makingdiff/imagesanime/image7.jpeg",
                title: "Ramakrishna Matt- Halasur",
                description: "Religious Trust Ramakrishna Matt- Bangalore religious Trust Ramakrishna Mission-Shivanahalli, religious Trust Ramakrishna Ashrama-Mysore, Religious Trust Ramakrishna Saradashrama-Ponnampet.",
            }
        ]
    },
];

const TimelineYear: React.FC<{ year: string; isActive: boolean; onClick: () => void; position: number }> = ({ year, isActive, onClick, position }) => {
    return (
        <motion.div
            className={`cursor-pointer absolute right-0 flex items-center gap-2 sm:gap-4 ${isActive ? 'text-red-500' : 'text-white'} ${poppins.className}`}
            animate={{ x: position }}
            transition={{ type: "spring", stiffness: 100 }}
            onClick={onClick}
        >
            <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-red-500" />
            <p className="text-base sm:text-lg font-medium whitespace-nowrap">{year}</p>
        </motion.div>
    );
};

const CSRItem: React.FC<CSRItemProps> = ({ title, description, images, currentIndex }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentImageIndex((prev) => (prev + 1) % images.length);
                setIsTransitioning(false);
            }, 400);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    // Updated logic to handle image positioning for all years including 2018-2019
    const isImageOnLeft = title === "Community Development"
        ? currentImageIndex === 0 || currentImageIndex === 2  // For 2018-2019
        : currentImageIndex === 0 || currentImageIndex === 2 || images[currentImageIndex].src.includes('image3.jpeg');  // For other years

    // Get the current image data
    const currentImageData = images[currentImageIndex] as ImageData;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center px-4 sm:px-6 py-8 ${poppins.className}`}
        >
            {/* Image Section */}
            <motion.div
                className={`flex justify-center ${isImageOnLeft ? 'md:order-1' : 'md:order-2'}`}
                layout
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-[80%] md:w-[85%] rounded-[2rem] overflow-hidden shadow-xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentImageIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 0.4,
                                ease: "easeInOut"
                            }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={currentImageData.src}
                                alt={`${currentImageData.title} - Image ${currentImageIndex + 1}`}
                                fill
                                sizes="(max-width: 640px) 80vw, (max-width: 768px) 90vw, 45vw"
                                className="object-cover rounded-[2rem]"
                                onError={(e) => {
                                    console.error(`Error loading image: ${currentImageData.src}`);
                                    e.currentTarget.src = '/placeholder.jpg';
                                }}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
                className={`relative space-y-6 md:mr-8 ${isImageOnLeft ? 'md:order-2' : 'md:order-1'}`}
                layout
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <h3 className="text-2xl sm:text-4xl font-normal text-[#d7d1cd] text-center">{currentImageData.title}</h3>
                <div className="backdrop-blur-md bg-white/10 rounded-[2rem] p-4 shadow-lg">
                    <p className="text-sm sm:text-lg text-gray-200 leading-relaxed text-[#d7d1cd]">
                        {currentImageData.description}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

const CSR = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [yearPosition, setYearPosition] = useState(0);
    const [stepSize, setStepSize] = useState(200);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const maxSteps = timelineData.length;

    // Add image rotation effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % timelineData[currentIndex].images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    // Adjust step size based on screen width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setStepSize(150);
            } else if (window.innerWidth < 768) {
                setStepSize(175);
            } else {
                setStepSize(200);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleYearClick = () => {
        const newPosition = yearPosition - stepSize;
        if (Math.abs(newPosition) >= stepSize * (maxSteps - 1)) {
            setYearPosition(0);
            setCurrentIndex(0);
        } else {
            setYearPosition(newPosition);
            setCurrentIndex((currentIndex + 1) % timelineData.length);
        }
    };

    const currentData = timelineData[currentIndex];
    const isImageOnLeft = currentImageIndex === 0 || currentImageIndex === 2 || (currentData.images[currentImageIndex] as ImageData).src.includes('image3.jpeg');

    return (
        <div className={`flex flex-col min-h-screen ${poppins.className}`}>
            <main className="relative flex-grow overflow-x-hidden bg-black">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={bg}
                        alt="Background Pattern"
                        fill
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>

                {/* Content */}
                <motion.div
                    className="relative w-full z-10"
                    initial={false}
                    transition={{ duration: 0.01 }}
                >
                    {/* Hero Section */}
                    <section className="relative h-[50vh] sm:h-[60vh] md:h-[80vh] overflow-hidden z-10">
                        <div className="relative h-full flex flex-col items-center justify-start text-white px-4 sm:px-6 md:px-8 pt-20 pb-20">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-left mb-2 sm:mb-4">Making a Difference</h1>
                            <p className="text-sm sm:text-base md:text-lg text-center max-w-5xl mx-auto text-gray-200 leading-relaxed text-justify px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 bg-black/30 rounded-lg mb-16 sm:mb-20 md:mb-24">
                                Rooted in a legacy of responsibility and service, VST Group, through the V.S. Tiruvengadaswamy
                                Mudaliar Memorial Trust, has consistently extended its hand to communities in need. From supporting
                                education and healthcare to empowering the differently-abled, protecting wildlife, and responding to
                                humanitarian crises, our CSR initiatives reflect a deep commitment to creating a meaningful and
                                lasting impact. Guided by empathy and driven by purpose, we believe in building a better future—not
                                just through business, but through compassion, care, and collective upliftment.
                            </p>
                        </div>
                    </section>

                    {/* Timeline Section */}
                    <section className="mx-auto px-2 sm:px-4 py-0 sm:py-4 relative z-10 mt-12 sm:mt-16 md:mt-20">
                        <div className="relative h-16 sm:h-20">
                            {/* Timeline Line */}
                            <div className="absolute h-[2px] bg-white w-full top-[20px] sm:top-[25px]" />

                            {/* Fixed Flag on Left */}
                            <div className="absolute left-0 top-[-12px] sm:top-[-15px] w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] z-10">
                                <Image
                                    src={flag}
                                    alt="Timeline Flag"
                                    width={30}
                                    height={30}
                                    className="w-full h-full"
                                />
                            </div>

                            {/* Moving Year */}
                            <motion.div
                                className={`absolute right-0 top-[-35px] sm:top-[-40px] flex flex-col items-center cursor-pointer text-white z-10`}
                                animate={{ x: yearPosition }}
                                transition={{ type: "spring", stiffness: 100 }}
                                onClick={handleYearClick}
                            >
                                <motion.div
                                    animate={{ y: [0, 5, 0] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="mb-1"
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7 10L12 15L17 10"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </motion.div>
                                <p className="text-lg sm:text-xl font-medium whitespace-nowrap">{currentData.year}</p>
                            </motion.div>
                        </div>

                        {/* Content Section */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentData.year}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center sm:px-6 py-8 ${poppins.className}`}
                                >
                                    {/* Image Section */}
                                    <motion.div
                                        className={`flex justify-center ${isImageOnLeft ? 'md:order-1' : 'md:order-2'}`}
                                        layout
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                    >
                                        <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-[80%] md:w-[85%] rounded-[2rem] overflow-hidden shadow-xl">
                                            <AnimatePresence mode="wait">
                                                <motion.div
                                                    key={currentImageIndex}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                                    className="absolute inset-0"
                                                >
                                                    <Image
                                                        src={(currentData.images[currentImageIndex] as ImageData).src}
                                                        alt={`${(currentData.images[currentImageIndex] as ImageData).title} - Image ${currentImageIndex + 1}`}
                                                        fill
                                                        sizes="(max-width: 640px) 80vw, (max-width: 768px) 90vw, 45vw"
                                                        className="object-cover rounded-[2rem]"
                                                        onError={(e) => {
                                                            console.error(`Error loading image: ${(currentData.images[currentImageIndex] as ImageData).src}`);
                                                            e.currentTarget.src = '/placeholder.jpg';
                                                        }}
                                                    />
                                                </motion.div>
                                            </AnimatePresence>
                                        </div>
                                    </motion.div>

                                    {/* Content Section */}
                                    <motion.div
                                        className={`relative space-y-6 md:mr-8 ${isImageOnLeft ? 'md:order-2' : 'md:order-1'}`}
                                        layout
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                    >
                                        <h3 className="text-2xl sm:text-4xl font-normal text-[#d7d1cd] text-center">{(currentData.images[currentImageIndex] as ImageData).title}</h3>
                                        <div className="backdrop-blur-md bg-white/10 rounded-[2rem] p-4 shadow-lg">
                                            <p className="text-sm sm:text-lg text-gray-200 leading-relaxed text-[#d7d1cd]">
                                                {(currentData.images[currentImageIndex] as ImageData).description}
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </section>
                </motion.div>
            </main>
            <div className='py-14 bg-black'>
                <Initiatives />
            </div>
            <Footer bgcolour="bg-black" />
        </div>
    );
};

export default CSR; 