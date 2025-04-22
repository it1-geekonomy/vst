'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// import card1 from "@/app/public/news-and-media/card1.png";
import card1 from "@/app/public/images/news/card1.png";
import card2 from "@/app/public/images/news/card2.png";
import card3 from "@/app/public/images/news/card3.png";
import post4 from "@/app/public/images/news/post4.png";
import card5 from "@/app/public/images/news/card5.png";
import post6 from "@/app/public/images/news/post6.png";
import post7 from "@/app/public/images/news/post7.png";
import card8 from "@/app/public/images/news/card8.png";
import { title } from 'process';

const newsData = [
  {
    id: 1,
    image: card1,
    // title: 'Arun Surendra (Chairman & Managing Director, VST Group), and Sanjeev Subramanian  (President - Automotive Division, VST Group), along with and Hardeep S. Brar (Sr. Vice President & Head of Marketing & Sales, Kia India), Mr. Paramjiv Dutta (General Manager Service, Kia India), and Ravi N. (Head - Dealer Development/ General Manager, Kia India), had a quick catchup meeting session. It was a pleasure to connect and discuss exciting possibilities',
    title: (
      <>
        <a
          href="https://www.linkedin.com/in/arunsurendra/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-white hover:text-white"
          onClick={(e) => e.stopPropagation()}
        >
          Arun Surendra
        </a>{' '}
        <br />
        (Chairman & Managing Director, VST Group),
       
        and{' '}
        <a
          href="https://www.linkedin.com/in/sanjeev-subramanian-83479716/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-white hover:text-white"
          onClick={(e) => e.stopPropagation()}
        >
          Sanjeev Subramanian
        </a>{' '}
        {/* (President - Automotive Division, VST Group) */}
      </>
    ),
    tag: 'Parche',
    location: 'Bangalore',
    time: '3 Days Ago',
    route: 'https://www.linkedin.com/posts/vst-motors-ltd_vstgroup-automotive-kia-activity-7219620766533791744-W2H4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD07rHsBD3hdzu_y6g1hbsgIIhmFgoowJHQ'
  },
  {
    id: 2,
    image: card2,
    title: "Your support fuels our drive for success, and we're grateful for your ongoing partnership.",
    tag: 'Innovation',
    location: 'Bangalore',
    time: '3 Days Ago',
    route: 'https://www.linkedin.com/posts/tanvi-gupta-09b07455_bangladeshexpo-agriculture-expo-activity-7206191159939919872-LHrH?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD07rHsBD3hdzu_y6g1hbsgIIhmFgoowJHQ'
  },
  {
    id: 3,
    image: card3,
    title: (
      <>
         Congratulations to the{' '}
        <a
          href="https://www.linkedin.com/company/porschecentrebengaluru/" 
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-white hover:text-white"
          onClick={(e) => e.stopPropagation()}
        >
          Porsche Centre Bengaluru
        </a>{' '}
        team for achieving yet another extraordinary success.
      </>
    ),
    
    tag: 'Industry',
    location: 'Bangalore',
    time: '3 Days Ago',
    route: 'https://www.linkedin.com/posts/vst-motors-ltd_globalporschemomentaward-porsche-globalrecognition-activity-7313130881051697152-J3cW?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD07rHsBD3hdzu_y6g1hbsgIIhmFgoowJHQ'
  },
  {
    id: 4,
    image: post4,
    title: (
      <>
        Just wrapped up another amazing week at the{' '}
        <span className="underline">Harvard Business School Executive Education</span>
      </>
    ),
    tag: 'Business',
    location: 'Harvard',
    time: '3 Days Ago',
    route: 'https://www.linkedin.com/posts/arunsurendra_harvardbusinessschool-backtoschool-activity-7286330643519545344-QLyB?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD07rHsBD3hdzu_y6g1hbsgIIhmFgoowJHQ'
  },
  {
    id: 5,
    image: card5,
    title: "Happy to inaugurate Maserati's pop-up showroom in Bengaluru! ",
    tag: 'Industry',
    location: 'Chennai',
    time: '3 Days Ago',
    route: 'https://www.linkedin.com/posts/vst-motors-ltd_maserati-vstmaserati-southindia-activity-7280809406001258497-GtYy?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD07rHsBD3hdzu_y6g1hbsgIIhmFgoowJHQ'
  },
  {
    id: 6,
    image: post6,
    title: 'The Bharat Mobility Global Expo 2025 highlighted some big launches including Mercedes-Benz',
    tag: 'Innovation',
    location: 'Harvard',
    time: '3 Days Ago',
    route: 'https://www.linkedin.com/posts/vst-motors-ltd_bharatmobility2025-mercedesbenzindia-porscheindia-activity-7287775917416792067-Eaki?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD07rHsBD3hdzu_y6g1hbsgIIhmFgoowJHQ'
  },
  {
    id: 7,
    image: post7,
    title: 'Looking back at this memory with Ratan Tata his leadership shaped so much of what we do today',
    tag: 'Inspiration',
    location: 'Bangalore',
    time: '3 Days Ago',
    route: 'https://www.linkedin.com/posts/vst-motors-ltd_looking-back-at-this-memory-with-ratan-tatahis-activity-7250058974203424769-Goa6?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD07rHsBD3hdzu_y6g1hbsgIIhmFgoowJHQ'
  },
  {
    id: 8,
    image: card8,
    title: (
      <>
        <a
          href="https://www.linkedin.com/company/vst-zetor/" 
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-white hover:text-white"
          onClick={(e) => e.stopPropagation()}
        >
          VST Zetor Tractors
        </a>
        , a partnership between{' '}
        <a
          href="https://www.linkedin.com/company/vsttillers/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-white hover:text-white"
          onClick={(e) => e.stopPropagation()}
        >
          VST Tillers Tractors Ltd
        </a>{' '}
        and HTC Investments.
      </>
    ),
    
    tag: 'Industry',
    location: 'Bangalore',
    time: '3 Days Ago',
    route: 'https://www.linkedin.com/posts/cmv360_vstzetor-tractorinnovation-agriculturaltechnology-activity-7193513168457875456-ZPkw?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD07rHsBD3hdzu_y6g1hbsgIIhmFgoowJHQ'
  },  
];

const News = () => {
  const router = useRouter();
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleCardClick = (id: number, route: string) => {
    setActiveId(id);
    router.push(route);
  };

  return (
    <div className="bg-zinc-800 min-h-screen py-10 px-6 sm:px-10 md:px-16 text-white">
      <h1 className="text-3xl font-bold mb-10 ml-2 md:ml-4">Our Updates</h1>

      <div className="px-3.5 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {newsData.map((item) => (
            <div
              key={item.id}
              className="bg-[#2E2E32] min-h-[450px] shadow-lg cursor-pointer hover:scale-105 transition-transform overflow-hidden flex flex-col"
              onClick={() => handleCardClick(item.id, item.route)}
            >
              {/* Image */}
              <div className="relative w-full h-[330px]">
                <Image
                  src={item.image}
                  alt="news-image"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 px-3 py-[6px] text-white text-xs font-medium bg-blend-lighten backdrop-blur">
                  {item.tag}
                </div>
              </div>

              <div className="p-4 flex flex-col justify-between flex-grow bg-[#FFFFFF1A] backdrop-blur-[36.55px]">

                <h2 className="mt-2 text-[23px] leading-[130%] tracking-wide font-normal font-mulish transition-all">

                  {item.title}
                </h2>
                <div className="text-xs text-white mt-4">
                  {item.location} &nbsp;&nbsp; {item.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* it might be Pagination things there */}
      {/* <div className="flex justify-center mt-10 gap-4">
        <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Previous</button>
        <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Next</button>
      </div> */}
    </div>
  );
};

export default News;
