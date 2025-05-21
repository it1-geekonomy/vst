'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// import card1 from "@/app/public/news-and-media/card1.png";
import card1 from "@/app/public/images/news/card1.png";
import card2 from "@/app/public/images/news/card2.png";
import card3 from "@/app/public/images/news/card3.png";
import post4New from "@/app/public/images/news/post4new.png";
import card5 from "@/app/public/images/news/card5.png";
import post6 from "@/app/public/images/news/post6.png";
import card6 from "@/app/public/images/news/card6New.png";
import card8 from "@/app/public/images/news/card8.png";
// import card4new from "@/app/public/images/news/card4new.png";
import card7new from "@/app/public/images/news/card7new.jpg";



import { title } from 'process';

const newsData = [
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
  {
    id: 5,
    image: card5,
    title: "Happy to inaugurate Maserati's pop-up showroom in Bengaluru! ",
    tag: 'Industry',
    location: 'Bengaluru',
    time: '',
    route: 'https://www.linkedin.com/posts/vst-motors-ltd_maserati-vstmaserati-southindia-activity-7280809406001258497-GtYy?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD07rHsBD3hdzu_y6g1hbsgIIhmFgoowJHQ'
  },
  {
    id: 6,
    image: card6,
    title: 'Habits become your second nature. So it is with winning! Our winning streak continues. Education World Grand Jury Awards ',
    // title:"The Bharat Mobility Global Expo 2025 highlighted some big launches including Mercedes-Benz India's Concept CLA-Class, Porsche India's all-electric Macan, Kia India's Syros and BYD India Private Limited's SEALION 7. As partners, it's great to see these brands driving change in mobility.",
    tag: 'Innovation',
    location: 'Bengaluru',
    time: '',
    route: 'https://skei.edu.in/awards#education-world-grand-jury-awards'
  },
  {
    id: 7,
    image:card7new,
    title: "A proud moment for the VST family! VST Central (KIA), Salem has been presented with the 'Global Best Dealer'",
    tag: 'Inspiration',
    location: 'Bengaluru',
    time: '',
    route: 'https://www.linkedin.com/posts/vst-motors-ltd_kiaplatinumprestige-kia-kiaindia-activity-7288807665202339842-OSvJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEKXx8oBJZx9kmwsl0vvlJNzz3koCw-vLhE'
  },
  {
    id: 8,
    image: card8,
    title:'VST Zetor Tractors, a partnership between VST Tillers Tractors Ltd and HTC Investments',
    // title: (
    //   <>
    //     <a
    //       href="https://www.linkedin.com/company/vst-zetor/" 
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="underline text-white hover:text-white"
    //       onClick={(e) => e.stopPropagation()}
    //     >
    //       VST Zetor Tractors
    //     </a>
    //     , a partnership between{' '}
    //     <a
    //       href="https://www.linkedin.com/company/vsttillers/"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="underline text-white hover:text-white"
    //       onClick={(e) => e.stopPropagation()}
    //     >
    //       VST Tillers Tractors Ltd
    //     </a>{' '}
    //     and HTC Investments.
    //   </>
    // ),
    
    tag: 'Industry',
    location: 'Bengaluru',
    time: '',
    route: 'https://www.linkedin.com/posts/cmv360_vstzetor-tractorinnovation-agriculturaltechnology-activity-7193513168457875456-ZPkw?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD07rHsBD3hdzu_y6g1hbsgIIhmFgoowJHQ'
  },  
];

const News = () => {
  const router = useRouter();
  const [activeId, setActiveId] = useState<number | null>(null);

    const handleCardClick = (id: number, route: string) => {
    setActiveId(id);
    window.open(route, '_blank'); // Open in a new tab
  };

  return (
    <div className="bg-[#2E2E2E] min-h-screen py-10 px-3 sm:px-4 md:px-6 lg:px-16 text-white">
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
              </div>

              <div className="p-4 flex flex-col justify-between flex-grow bg-[#333435]backdrop-blur-[36.55px]">
                <h2 className="mt-2 text-[23px] leading-[130%] tracking-wide font-normal font-roc transition-all">
                  {item.title}
                </h2>
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
