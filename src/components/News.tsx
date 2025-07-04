'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// import card1 from "@/app/public/news-and-media/card1.png";
import card1 from "@/app/public/images/news/card1.png";
import card2 from "@/app/public/images/news/card2.png";
import card3 from "@/app/public/images/news/card3.png";
import post4New from "@/app/public/images/news/post4new.png";
import card5 from "@/app/public/news-and-media/NewsAndArticles/Image1.png";
import card6 from "@/app/public/news-and-media/NewsAndArticles/Image2.png";
import card7 from "@/app/public/news-and-media/NewsAndArticles/Image3.png";
import card8 from "@/app/public/news-and-media/NewsAndArticles/Image4.png";
import card4 from "@/app/public/news-and-media/NewsAndArticles/image 209.png";




import { title } from 'process';

// Separate data for Latest Updates and News & Articles
const latestUpdatesData = [
  {
    id: 1,
    image: card1,
    title:'Arun Surendra (Chairman & Managing Director, VST Group), and   Sanjeev Subramanian',
    // title: 'Arun Surendra (Chairman & Managing Director, VST Group), and Sanjeev Subramanian  (President - Automotive Division, VST Group), along with and Hardeep S. Brar (Sr. Vice President & Head of Marketing & Sales, Kia India), Mr. Paramjiv Dutta (General Manager Service, Kia India), and Ravi N. (Head - Dealer Development/ General Manager, Kia India), had a quick catchup meeting session. It was a pleasure to connect and discuss exciting possibilities',
    // title: (
    //   <>
    //     <a
    //       href="https://www.linkedin.com/in/arunsurendra/"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className=" text-white hover:text-white"
    //       onClick={(e) => e.stopPropagation()}
    //     >
    //       Arun Surendra
    //     </a>{' '}
    //     <br />
    //     (Chairman & Managing Director, VST Group),
       
    //     and{' '}
    //     <a
    //       href="https://www.linkedin.com/in/sanjeev-subramanian-83479716/"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className=" text-white hover:text-white"
    //       onClick={(e) => e.stopPropagation()}
    //     >
    //       Sanjeev Subramanian
    //     </a>{' '}
    //     {/* (President - Automotive Division, VST Group) */}
    //   </>
    // ),
    tag: 'Porche',
    location: 'Bengaluru',
    time: '',
    route: 'https://www.linkedin.com/posts/vst-motors-ltd_vstgroup-automotive-kia-activity-7219620766533791744-W2H4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD07rHsBD3hdzu_y6g1hbsgIIhmFgoowJHQ'
  },
  {
    id: 2,
    image: card2,
    title: "Your support fuels our drive for success, and we're grateful for your ongoing partnership.",
    tag: 'Innovation',
    location: 'Bengaluru',
    time: '',
    route: 'https://www.linkedin.com/posts/tanvi-gupta-09b07455_bangladeshexpo-agriculture-expo-activity-7206191159939919872-LHrH?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD07rHsBD3hdzu_y6g1hbsgIIhmFgoowJHQ'
  },
  {
    id: 3,
    image: card3,
    // title: (
    //   <>
    //      Congratulations to the{' '}
    //     <a
    //       href="https://www.linkedin.com/company/porschecentrebengaluru/" 
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="underline text-white hover:text-white"
    //       onClick={(e) => e.stopPropagation()}
    //     >
    //       Porsche Centre Bengaluru
    //     </a>{' '}
    //     team for achieving yet another extraordinary success.
    //   </>
    // ),
    title: " Congratulations to the Porsche Centre Bengaluru team for achieving yet another extraordinary success.",
    
    tag: 'Industry',
    location: 'Bengaluru',
    time: '',
    route: 'https://www.linkedin.com/posts/vst-motors-ltd_globalporschemomentaward-porsche-globalrecognition-activity-7313130881051697152-J3cW?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD07rHsBD3hdzu_y6g1hbsgIIhmFgoowJHQ'
  },
  {
    id: 4,
    image: post4New,
    title: "South and Best Performance in Most Active User - Fleet Edge - South, reaffirming our commitment to outstanding service.",
    tag: 'Business',
    location: 'Bengaluru',
    time: '',
    route: 'https://www.linkedin.com/feed/update/urn:li:activity:7209269161649217536/'
  },
  
    
];

const newsAndArticlesData = [
{
    id: 1,
    image: card4,
    title: "VST Tillers Tractors Showcases its range of innovative Farm Machines at the Krushi Odisha 2025",
    tag: 'Business',
    location: 'Bengaluru',
    time: '',
    route: 'https://onlinenews9.in/business/vst-tillers-tractors-showcases-its-range-of-innovative-farm-machines/'
  },
  {
    id: 2,
    image: card5,
    title: "VST Group's strategies for success in India's booming luxury auto market",
    tag: 'Business',
    location: 'Bengaluru',
    time: '',
    route: 'https://www.manufacturingtodayindia.com/vst-groups-strategies-for-success-in-indias-booming-luxury-auto-market?fbclid=PAZXh0bgNhZW0CMTEAAaf3D-ozwleWR98__LGP3YP-ARg2AYiwIyCF49HCTeYvEHx4-MXETWxjImtvPg_aem_dSj40Rx1kG0ytZ_I--W-sg'
  },
  {
    id: 3,
    image: card6,
    title: "Sales Revenue Of Jaguar, Mercedes And Other Premium Brands Has Seen Over 20% Growth: VST Group MD Arun Surendra",
    tag: 'Anniversary',
    location: 'Bengaluru',
    time: '',
    route: 'https://www.outlookbusiness.com/corporate/sales-revenue-of-jaguar-mercedes-and-other-premium-brands-has-seen-over-20-growth-this-year-vst-group-md-arun-surendra'
  },
  {
    id: 4,
    image: card7,
    title: "Industry eyes electric tractor adoption amid mounting challenges",
    tag: 'Innovation',
    location: 'Bengaluru',
    time: '',
    route: 'https://auto.economictimes.indiatimes.com/news/automotive/industry-eyes-electric-tractor-adoption-amid-mounting-challenges/113997926?fbclid=PAZXh0bgNhZW0CMTEAAafs5SNE3v-NwiCrVv5A0OcW8xg57SduP7gNQGGNMpBB1yN6bmSSWmnKMRbKHg_aem_VaM4ujXKpTP7_pI1ph2iPw'
  },
  {
    id: 5,
    image: card8,
    title: "Maserati and VST Group Join Forces to Bring Iconic Italian Luxury Cars to South India",
    tag: 'Partnership',
    location: 'Bengaluru',
    time: '',
    route: 'https://www.business-standard.com/content/press-releases-ani/maserati-and-vst-group-join-forces-to-bring-iconic-italian-luxury-cars-to-south-india-124121100503_1.html?fbclid=PAZXh0bgNhZW0CMTEAAacQ5vIqrym5JnbKR5vrLEeLjiv0lijVJ-cQPylm8nTKVB7T8sMTappqJ3oZOA_aem_aYDO8RrZC-KpHqLSy6nLIQ'
  },
];

const News = () => {
  const router = useRouter();
  const [activeId, setActiveId] = useState<number | null>(null);
  const latestUpdatesRef = useRef<HTMLDivElement>(null);
  const newsArticlesRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (id: number, route: string) => {
    setActiveId(id);
    window.open(route, '_blank');
  };

  const scrollSection = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = 400; // Adjust this value based on your card width + gap
      const currentScroll = ref.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      ref.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  const NewsCard = ({ item }: { item: typeof latestUpdatesData[0] }) => (
    <div
      key={item.id}
      className="bg-[#2E2E32] min-h-[450px] shadow-lg cursor-pointer hover:scale-105 transition-transform overflow-hidden flex flex-col flex-shrink-0 w-[300px] sm:w-[280px] md:w-[300px] lg:w-[320px]"
      onClick={() => handleCardClick(item.id, item.route)}
    >
      <div className="relative w-full h-[330px]">
        <Image
          src={item.image}
          alt="news-image"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow bg-[#333435] backdrop-blur-[36.55px]">
        <h2 className="mt-2 text-[20px] leading-[140%] tracking-wide font-normal font-roc transition-all">
          {item.title}
        </h2>
      </div>
    </div>
  );

  const SectionWithArrows = ({ 
    title, 
    data, 
    ref, 
    sectionName 
  }: { 
    title: string; 
    data: typeof latestUpdatesData; 
    ref: React.RefObject<HTMLDivElement | null>;
    sectionName: string;
  }) => (
    <section className="mb-20 relative">
      <h1 className="text-3xl font-bold mb-10 ml-2 md:ml-4">{title}</h1>
      
      {/* Cards Container */}
      <div className="relative px-3.5">
        <div 
          ref={ref}
          className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {data.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <div className="absolute right-4 -bottom-12 flex gap-4 items-center z-10 hidden md:flex">
          <button
            onClick={() => scrollSection(ref, 'left')}
            className="pr-3 bg-transparent border-none"
            aria-label={`Scroll ${sectionName} left`}
            type="button"
          >
            {/* Left Arrow SVG */}
            <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.0127 10.0083L2.00079 10.0083M2.00079 10.0083L11.0061 19.0137M2.00079 10.0083L11.0061 1.00296" stroke="white" stroke-width="2"/>
</svg>

          </button>
          
          <button
            onClick={() => scrollSection(ref, 'right')}
            className="p-0 bg-transparent border-none"
            aria-label={`Scroll ${sectionName} right`}
            type="button"
          >
            {/* Right Arrow SVG */}
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12.0073H22.0119M22.0119 12.0073L13.0065 3.00195M22.0119 12.0073L13.0065 21.0127" stroke="white" stroke-width="2"/>
</svg>

          </button>
        </div>
      </div>
    </section>
  );

  return (
    <div className="bg-[#2E2E2E] min-h-screen py-10 px-3 sm:px-4 md:px-6 lg:px-16 text-white">
      {/* Latest Updates Section */}
      <SectionWithArrows 
        title="Latest Updates" 
        data={latestUpdatesData} 
        ref={latestUpdatesRef}
        sectionName="latest updates"
      />

      {/* News & Articles Section */}
      <SectionWithArrows 
        title="News & Articles" 
        data={newsAndArticlesData} 
        ref={newsArticlesRef}
        sectionName="news and articles"
      />
    </div>
  );
};

export default News;
