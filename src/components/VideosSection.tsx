'use client';

import React from 'react';
import Image from 'next/image';

// Sample image for demo - you'll need to replace with actual video thumbnails
import tractorImg from "@/app/public/vst-auto-parts/frame1.jpg";

// Video data structure
const videoData = [
  {
    id: 1,
    thumbnail: tractorImg,
    title: 'A quick look at where we started and where we\'re headed.',
    category: 'Motivation',
    location: 'Bangalore',
    time: '3 Days Ago',
    videoUrl: '#'
  },
  {
    id: 2,
    thumbnail: tractorImg,
    title: 'Which feature tops my fantasy car wishlist?',
    location: 'Bangalore',
    time: '3 Days Ago',
    videoUrl: '#'
  },
  {
    id: 3,
    thumbnail: tractorImg,
    title: 'Weekdays are better with F1 talk! I shared my favorites in a fun Q&A!',
    location: 'Bangalore',
    time: '3 Days Ago',
    videoUrl: '#'
  },
  {
    id: 4,
    thumbnail: tractorImg,
    title: 'What keeps me going? It\'s all about the small wins.',
    location: 'Bangalore',
    time: '3 Days Ago',
    videoUrl: '#'
  }
];

const VideosSection = () => {
  const handlePlayVideo = (videoUrl: string) => {
    // Implement video playback functionality
    console.log(`Playing video: ${videoUrl}`);
    // Could open a modal, navigate to a video page, etc.
  };

  return (
    <div className="py-16 px-4  ">
      {/* Videos Heading */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-5xl font-bold">Videos</h1>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Main video - 60% width on desktop */}
        <div className="w-full md:w-[60%] bg-white/10 backdrop-blur-sm">
          <div className="relative overflow-hidden rounded-lg cursor-pointer group h-full">
            <div className="relative w-full aspect-video">
              <Image
                src={videoData[0].thumbnail}
                alt={videoData[0].title}
                fill
                className="object-cover"
              />
              
              {/* Play button overlay */}
              <div 
                className="absolute inset-0 flex items-center justify-center"
                onClick={() => handlePlayVideo(videoData[0].videoUrl)}
              >
                <div className="w-20 h-20 bg-[#2196F3] rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                  <div className="ml-2 w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent"></div>
                </div>
              </div>
              
              {/* Category tag */}
              {videoData[0].category && (
                <div className="absolute bottom-4 left-4 px-4 py-1 text-white text-sm font-medium bg-black/60 rounded">
                  {videoData[0].category}
                </div>
              )}
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3">
                {videoData[0].title}
              </h2>
              <div className="text-sm text-gray-300">
                {videoData[0].location} &nbsp; &nbsp; {videoData[0].time}
              </div>
            </div>
          </div>
        </div>
        
        {/* Side videos - 40% width on desktop */}
        <div className="w-full md:w-[40%] flex flex-col gap-6">
          {videoData.slice(1, 4).map((video) => (
            <div 
              key={video.id} 
              className="flex rounded-lg overflow-hidden cursor-pointer group bg-white/10 backdrop-blur-sm"
            >
              {/* Video thumbnail with play button */}
              <div className="relative w-[40%] aspect-square">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover"
                />
                
                {/* Play button overlay */}
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  onClick={() => handlePlayVideo(video.videoUrl)}
                >
                  <div className="w-14 h-14 bg-[#2196F3] rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                    <div className="ml-1.5 w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent"></div>
                  </div>
                </div>
              </div>
              
              {/* Video info */}
              <div className="p-4 w-[60%] flex flex-col justify-center">
                <h2 className="text-xl font-bold leading-tight mb-2">
                  {video.title}
                </h2>
                <div className="text-sm text-gray-300">
                  {video.location} &nbsp; &nbsp; {video.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideosSection; 