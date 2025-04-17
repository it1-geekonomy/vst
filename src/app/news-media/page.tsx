"use client";
import Image from "next/image";

export default function NewsMedia() {
  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image 
          src="/news-bg.jpg" 
          alt="News Background" 
          fill 
          className="object-cover"
          priority
        />
        
        {/* Main Content with Popular This Week sidebar */}
        <div className="absolute inset-0 z-20">
          <div className="container mx-auto h-full">
            <div className="flex h-full">
              {/* Left content - 75% */}
              <div className="w-full lg:w-3/4 flex flex-col">
                {/* Hero Title */}
                <div className="flex items-center h-screen px-8">
                  <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold max-w-3xl leading-tight">
                    Exciting! Our new Porsche showroom is now in Whitefield!
                  </h1>
                </div>
                
                {/* News Cards - positioned absolutely at bottom */}
                <div className="absolute bottom-0 left-0 w-full lg:w-3/4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 pb-16">
                    {/* Featured News Card */}
                    <div className="relative border-l-4 border-yellow-500 bg-gray-100 p-6">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-1/3">
                          <div className="relative">
                            <Image 
                              src="/showroom-thumbnail.jpg" 
                              alt="Porsche Showroom Opening" 
                              width={250}
                              height={150}
                              className="w-full h-auto object-cover"
                            />
                            <div className="absolute bottom-0 left-0 bg-black text-white text-xs py-1 px-3">
                              We Are Now Open
                            </div>
                          </div>
                        </div>
                        <div className="w-full md:w-2/3">
                          <h2 className="text-lg font-medium">
                            Exciting times ahead! Introducing our stunning new Porsche showroom in Whitefield.
                          </h2>
                        </div>
                      </div>
                    </div>

                    {/* Second News Card */}
                    <div className="bg-gray-100 p-6">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-1/3">
                          <Image 
                            src="/team-thumbnail.jpg" 
                            alt="Team Photo" 
                            width={250}
                            height={150}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                        <div className="w-full md:w-2/3">
                          <p className="text-lg">
                            Lorem ipsum dolor sit amet consectetur. Pellentesque sagittis vulputate posuere tellus
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right sidebar - Popular This Week - 25% */}
              <div className="hidden lg:block w-1/4 bg-gray-100/90 h-full p-8">
                <h2 className="text-3xl font-bold mb-8">Popular this week</h2>
                <div className="space-y-6">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="flex gap-4 items-start">
                      <div className="w-1/3">
                        <Image 
                          src={`/news-thumbnail-${item}.jpg`} 
                          alt={`News Thumbnail ${item}`} 
                          width={100}
                          height={60}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <div className="w-2/3">
                        <p className="text-base font-medium">Lorem ipsum dolor sit amet consectetur.</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-10">
                  <button className="text-yellow-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
