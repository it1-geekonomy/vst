'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import post1 from "@/app/public/images/news/post1.png";
import post2 from "@/app/public/images/news/post2.png";
import post3 from "@/app/public/images/news/post3.png";
import post4 from "@/app/public/images/news/post4.png";
import post5 from "@/app/public/images/news/post5.png";
import post6 from "@/app/public/images/news/post6.png";
import post7 from "@/app/public/images/news/post7.png";
import post8 from "@/app/public/images/news/post8.png";

const newsData = [
  { 
    id: 1, 
    image: post1,
    title: 'A new beginning. The new Porsche Centre Bengaluru showroom getting its divine blessings',
    tag: 'Parche', 
    location: 'Bangalore',
    time: '3 Days Ago', 
    route: '#' 
  },

  { 
    id: 2,
    image: post2,
    title: 'V S T Titanium Motors Pvt Ltd in Okkiyam Thoraipakkam,Chennai - Best Car Dealers near me in Chennai',
    tag: 'Innovation',
    location: 'Bangalore',
    time: '3 Days Ago',
    route: '#' 
  },
  { 
    id: 3, 
    image: post3, 
    title: 'Felt good to be part of #Agritechnica2023 this week!', 
    tag: 'Industry', 
    location: 'Bangalore', 
    time: '3 Days Ago', 
    route: '#' 
  },
  {
     id: 4, 
     image: post4, 
     title: 'Just wrapped up another amazing week at the Harvard Business School Executive Education', 
     tag: 'Business', 
     location: 'Harvard', 
     time: '3 Days Ago', 
     route: '#' 
    },
  { 
    id: 5, 
    image: post5, 
    title: 'Top Vst Shakti Tractor Dealers in Bangalore -  Best Vst Shakti Tractor Dealers - Justdial', 
    tag: 'Industry', 
    location: 'Chennai', 
    time: '3 Days Ago', 
    route: '#' 
  },
  {
     id: 6, 
     image: post6, 
     title: 'The Bharat Mobility Global Expo 2025 highlighted some big launches including Mercedes-Benz', 
     tag: 'Innovation', 
     location: 'Harvard', 
     time: '3 Days Ago', 
     route: '#' 
    },
  { 
    id: 7, 
    image: post7, 
    title: 'Looking back at this memory with Ratan Tata—his leadership shaped so much of what we do today', 
    tag: 'Inspiration', 
    location: 'Bangalore', 
    time: '3 Days Ago', 
    route: '#' 
  },
  {
     id: 8, 
     image: post8, 
     title: "VST Motors – TATA's star dealer gears up for growth phase to enter big league – Motorindia", 
     tag: 'Industry', 
     location: 'Bangalore', 
     time: '3 Days Ago', 
     route: '#' 
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
    <div className="bg-black min-h-screen py-10 px-4 text-white flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-10 text-center">Our Latest Post</h1>

      <div className="w-full max-w-7xl flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {newsData.map((item) => (
            <div
              key={item.id}
              className="bg-[#2E2E32] w-[240px] min-h-[420px] shadow-lg cursor-pointer hover:scale-105 transition-transform overflow-hidden flex flex-col"
              onClick={() => handleCardClick(item.id, item.route)}
            >
              {/*  image */}
              <div className="relative w-full aspect-[4/4]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 px-3 py-[6px] text-white text-xs font-medium bg-black/50 backdrop-blur-md">
                  {item.tag}
                </div>
              </div>

             
              <div className="p-4 flex flex-col justify-between flex-grow">
                <h2
                  className={`mt-2 text-[18px] leading-[120%] tracking-wide font-bold font-[Mulish] transition-all ${
                    activeId === item.id ? 'underline' : 'hover:underline'
                  }`}
                >
                  {item.title}
                </h2>
                <div className="text-xs text-white mt-4">
                  {item.location} &nbsp; &nbsp; {item.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 gap-4">
        <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Previous</button>
        <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Next</button>
      </div>
    </div>
  );
};

export default News;
